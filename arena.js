/* =========================================================
   五上數學特訓 — 新考場核心引擎 & 舊題轉接器 (arena.js)
   Phase P9: #view-arena 級聯篩選 / 雙軌測驗 / 模擬考 / 4D 詳解 / legacyId 轉移
   ========================================================= */

(function (root) {
  'use strict';

  const TRAP_LABEL_MAP = {
    // U06 異分母分數的加減 (10)
    U06_ADD_DENOM: '分母直接加減',
    U06_FORGET_SCALE_NUM: '通分忘記乘分子',
    U06_BORROW_MISCALC: '帶分數借位錯誤',
    U06_BIG_MINUS_SMALL_FRAC: '分數大減小倒減',
    U06_UNREDUCED_FRAC: '未約分或約錯',
    U06_IMPROPER_NOT_MIXED: '假分數未換帶分數',
    U06_WRONG_LCM: '通分公倍數找錯',
    U06_SWAP_OP_WORD: '多幾少幾加減顛倒',
    U06_UNIT_CONFUSE: '數量與分數份數混淆',
    U06_CALC_SLIP: '分子計算粗心失誤',
    // U07 整數四則運算 (10)
    U07_IGNORE_ORDER_OPS: '由左到右未先乘除',
    U07_PAREN_SIGN_FLIP: '連減去括號忘變號',
    U07_DISTRIBUTE_PARTIAL: '分配律漏乘一項',
    U07_DIV_CHAIN_WRONG: '連除括號忘變乘',
    U07_AVG_WRONG_COUNT: '平均數人數漏算自己',
    U07_AVG_FORGET_MULTIPLY: '平均目標忘先乘總數',
    U07_SUB_CHAIN_WRONG: '均攤找錢方向或差算錯',
    U07_MISSING_SELF_COUNT: '併式少算一個條件',
    U07_ANSWER_WRONG_TARGET: '算對中間量卻答非所問',
    U07_CALC_SLIP: '四則進退位計算失誤',
    // U08 面積 (10)
    U08_FORGET_DIV_TWO: '三角形／梯形忘記除以 2',
    U08_WRONG_HEIGHT_SIDE: '底與高未互相垂直',
    U08_OBTUSE_HEIGHT_MISSED: '鈍角三角形外部高選錯',
    U08_TRAPEZOID_MISS_BASE: '梯形漏算一底或高誤判',
    U08_ROAD_DOUBLE_SUB: '十字道路重複扣交會區',
    U08_SCALE_LINEAR_AREA: '底高倍數混淆面積倍數',
    U08_COMPOSITE_ADD_SUB_SWAP: '複合圖形加減方向搞反',
    U08_UNIT_MIX_CM_M: '公分與公尺單位未統一',
    U08_PERIMETER_AS_AREA: '周長與面積公式混用',
    U08_CALC_SLIP: '面積乘除計算失誤',
    // U09 線對稱圖形 (10)
    U09_AXIS_COUNT_WRONG: '常見圖形對稱軸數記錯',
    U09_PARALLELOGRAM_SYM: '誤認平行四邊形為線對稱',
    U09_MIRROR_DIST_WRONG: '對稱點到軸距離沒相等',
    U09_FOLD_CUT_REVERSE: '摺紙剪紙展開鏡像顛倒',
    U09_SYM_POINT_SWAP: '對稱點／邊對應順序寫反',
    U09_SYM_PERIMETER_HALF: '周長漏算或誤加對稱軸',
    U09_DIAG_NOT_AXIS: '誤把一般對角線當對稱軸',
    U09_GRID_OFFSET_ONE: '方格塗色補對稱差 1 格',
    U09_ANGLE_SYM_CONFUSE: '對稱角對應位置搞混',
    U09_CALC_SLIP: '周長角度加減算錯',
    // U10 柱體、錐體和球 (10)
    U10_PRISM_PYRAMID_SWAP: '角柱與角錐特徵混淆',
    U10_VERTEX_EDGE_FACE_MIX: '頂點邊面公式混用',
    U10_BASE_N_OFF_BY_ONE: '反推幾角柱錐底面少減 1 或 2',
    U10_NET_OPPOSITE_WRONG: '展開圖相對平行面找錯',
    U10_PARALLEL_PERP_SWAP: '互相平行與互相垂直混淆',
    U10_CYLINDER_CONE_NET_MIX: '圓柱與圓錐側面展開混用',
    U10_SPHERE_CUT_CENTER: '球體切面最大條件誤判',
    U10_RIBBON_FORGET_KNOT: '包裝緞帶漏加打結或段數錯',
    U10_RIBBON_SIDES_COUNT: '圓柱展開長寬對應底圓周搞混',
    U10_PACK_VOL_INSTEAD_FIT: '盒裝球誤用體積直接相除',
  };

  function getTrapLabel(code) {
    return TRAP_LABEL_MAP[code] || code || '常見思維陷阱';
  }

  /**
   * 跨單元篩選匹配：一般單元（U06~U10）除匹配 unitId 外，亦納入試卷題目標註之 targetUnitId / secondaryUnitIds。
   */
  function matchesUnitFilter(q, unitId) {
    if (!unitId || unitId === 'ALL') return true;
    if (!q) return false;
    if (q.unitId === unitId) return true;
    if (/^U(0[6-9]|10)$/.test(unitId)) {
      if (q.targetUnitId === unitId) return true;
      if (Array.isArray(q.secondaryUnitIds) && q.secondaryUnitIds.includes(unitId)) return true;
    }
    return false;
  }

  function escHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function defaultFormatMathForKids(str) {
    if (!str || typeof str !== 'string') return '';
    return str.replace(/(^|[^\$])((?:\d+\s*)?\\frac\{[^{}]+\}\{[^{}]+\})([^\$]|$)/g, '$1$$$2$$$3');
  }

  function defaultCleanOptionText(opt, fmt) {
    if (!opt || typeof opt !== 'string') return '';
    return fmt(opt.replace(/^(?:[A-D]\.|\([1-4A-D]\)|[①-④])\s*/i, ''));
  }

  function getDifficultyBand(q) {
    const lv = Number((q && (q.level || q.stars)) || 1);
    if (lv <= 3) return 'basic';
    if (lv <= 6) return 'standard';
    return 'challenge';
  }

  function renderTextSafe(text, is4D, km, fmt) {
    if (!text) return '';
    if (is4D && km && typeof km.renderKidsText === 'function') {
      return km.renderKidsText(String(text));
    }
    return fmt(String(text));
  }

  /**
   * 共用單題／題組子題的選項與 4D 解析正規化器，避免單題與題組邏輯重複。
   */
  function normalizeOptionSetAnd4D(src, opts) {
    const is4D = opts.is4D;
    const km = opts.km;
    const fmt = opts.fmt;
    const parentRaw = opts.parentRaw || src;

    const choiceStyleNorm = (src && src.choiceStyle) || 'standard';
    const rawOptions = Array.isArray(src && src.options) ? src.options : [];
    const hasOptions = rawOptions.length > 0 && choiceStyleNorm !== 'handdraw';
    const LETTERS = ['A', 'B', 'C', 'D'];

    const normalizedOptions = rawOptions.map((item, idx) => {
      if (item && typeof item === 'object') {
        const key = (item.key || LETTERS[idx] || String(idx + 1)).toUpperCase();
        const rawText = String(item.text || '');
        const trapCode = item.trapCode || null;
        return {
          key,
          rawText,
          html: renderTextSafe(rawText, is4D, km, fmt),
          trapCode,
          trapLabel: trapCode ? getTrapLabel(trapCode) : null,
        };
      }
      const key = LETTERS[idx] || String(idx + 1);
      const rawText = String(item || '').replace(/^(?:[A-D]\.|\([1-4A-D]\)|[①-④])\s*/i, '');
      return {
        key,
        rawText,
        html: fmt(rawText),
        trapCode: null,
        trapLabel: null,
      };
    });

    let answerKey = null;
    if (hasOptions) {
      if (is4D) {
        answerKey = String((src && src.answer) || '').trim().charAt(0).toUpperCase();
      } else {
        answerKey = String((src && (src.answerKey || (src.answer && src.answer.trim().charAt(0)))) || '').toUpperCase();
      }
    }

    let answerDisplayHtml = '';
    let answerPlainText = String((src && src.answer) || '');
    if (hasOptions && answerKey) {
      const matched = normalizedOptions.find(o => o.key === answerKey);
      if (matched) {
        answerDisplayHtml = `<span class="ans-key-pill">${answerKey}</span> ${matched.html}`;
        answerPlainText = `(${answerKey}) ${matched.rawText}`;
      } else {
        answerDisplayHtml = fmt(answerPlainText);
      }
    } else if (choiceStyleNorm === 'handdraw') {
      answerDisplayHtml = '<span class="ans-handdraw-pill">📐 請對照標準參考作圖解答</span>';
      answerPlainText = '請對照標準參考作圖解答';
    } else {
      answerDisplayHtml = fmt(answerPlainText);
    }

    let stepBlocksHtml = [];
    let stepsPlain = [];
    if (is4D && src && src.explanation && Array.isArray(src.explanation.steps)) {
      stepBlocksHtml = (src.explanation.steps || []).map(st => ({
        type: st.type,
        html: km && typeof km.renderStepBlockHtml === 'function'
          ? km.renderStepBlockHtml(st, parentRaw)
          : `<div class="km-step km-step-text">${escHtml(st.text || st.expr || '')}</div>`,
      }));
      stepsPlain = (src.explanation.steps || []).map(st => {
        if (st.type === 'text' || st.type === 'answer') return st.text;
        if (st.type === 'eq') return `${st.expr}${st.unit ? ' (' + st.unit + ')' : ''}`;
        if (st.type === 'longdiv') return `直式除法：${st.dividend} ÷ ${st.divisor}`;
        if (st.type === 'mul') return `直式乘法：${st.a} × ${st.b}`;
        if (st.type === 'addsub') return `直式計算：${st.a} ${st.op} ${st.b}`;
        if (st.type === 'bar') return '[線段圖]';
        if (st.type === 'svg') return `[圖解示意：${st.caption || '幾何／結構步驟圖'}]`;
        return '';
      }).filter(Boolean);
    } else {
      const rawSteps = Array.isArray(src && src.steps) ? src.steps : [];
      stepBlocksHtml = rawSteps.map((s, idx) => ({
        type: 'legacy',
        html: `<div class="km-step km-step-legacy"><span class="legacy-step-num">${idx + 1}</span><div class="legacy-step-body">${fmt(String(s))}</div></div>`,
      }));
      stepsPlain = rawSteps.map(s => String(s));
    }

    const exp = (is4D && src && src.explanation && typeof src.explanation === 'object') ? src.explanation : {};
    const examPurpose = is4D ? String(exp.examPurpose || '') : '';
    const distractorAnalysis = is4D ? (exp.distractorAnalysis || {}) : null;
    const figureNote = is4D ? (exp.figureNote || null) : null;
    const insight = is4D ? String(exp.insight || '') : String((src && src.insight) || '');
    const insightHtml = renderTextSafe(insight, is4D, km, fmt);

    let primaryTrap = null;
    if (is4D) {
      const wrongOpt = normalizedOptions.find(o => o.trapCode);
      if (wrongOpt) {
        const reason = distractorAnalysis && distractorAnalysis[wrongOpt.key] ? distractorAnalysis[wrongOpt.key] : wrongOpt.trapLabel;
        primaryTrap = { code: wrongOpt.trapCode, label: wrongOpt.trapLabel, text: reason };
      }
    } else if (src && src.trap) {
      primaryTrap = {
        code: src.trap.code || '',
        label: src.trap.code || '',
        text: fmt(src.trap.text || ''),
      };
    }

    return {
      choiceStyle: (src && src.choiceStyle) || 'standard',
      hasOptions,
      options: normalizedOptions,
      answerKey,
      answerDisplayHtml,
      answerPlainText,
      examPurpose,
      examPurposeHtml: renderTextSafe(examPurpose, is4D, km, fmt),
      stepBlocksHtml,
      stepsPlain,
      distractorAnalysis,
      figureNote,
      figureNoteHtml: renderTextSafe(figureNote, is4D, km, fmt),
      insight,
      insightHtml,
      primaryTrap,
    };
  }

  /**
   * 統一轉接 Schema v4D-1 / v4D-2（單題與 group 題組）與舊版題型（U01~U04, U06~U08, EXAM_MID1）。
   */
  function normalizeQuestion(q, opts) {
    const km = (opts && opts.kidsMath) || (typeof root !== 'undefined' && root.KidsMath) || null;
    const fmt = (opts && opts.formatMathForKids) || defaultFormatMathForKids;
    const isGroup = !!(q && q.questionType === 'group' && Array.isArray(q.subQuestions) && q.subQuestions.length > 0);
    const is4D = isGroup || !!(q && q.explanation && typeof q.explanation === 'object' && Array.isArray(q.explanation.steps));

    const level = Number((q && (q.level || q.stars)) || 1);
    const difficulty = Number((q && q.difficulty) || 2);
    const band = getDifficultyBand(q);

    const questionHtml = renderTextSafe(q && q.question, is4D, km, fmt);
    const questionPlain = String((q && q.question) || '').replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '');

    // 題幹插圖：舊題 q.svg 屬於題意幾何圖（作答前就顯示）；4D figure 屬詳解輔助線段圖（於詳解 D4 / bar step 顯示）
    const stemFigureHtml = (q && q.svg) ? String(q.svg) : '';
    const solutionFigureHtml = (q && q.figure && q.figure.type === 'bar' && km && typeof km.renderBarDiagramSvg === 'function')
      ? km.renderBarDiagramSvg(q.figure)
      : '';

    let core;
    let normalizedSubs = [];
    if (isGroup) {
      normalizedSubs = q.subQuestions.map((sub, sIdx) => {
        const subCore = normalizeOptionSetAnd4D(sub, { is4D: true, km, fmt, parentRaw: q });
        return Object.assign({}, subCore, {
          subId: sub.subId || `${q.id}-SUB-${sIdx + 1}`,
          label: sub.label || `(${sIdx + 1})`,
          questionHtml: renderTextSafe(sub.question || '', true, km, fmt),
          questionPlain: String(sub.question || '').replace(/<[^>]+>/g, ''),
          stemImage: sub.stemImage || null,
          figureSvg: sub.figureSvg || null,
        });
      });
      const firstTrapSub = normalizedSubs.find(s => s.primaryTrap);
      core = {
        choiceStyle: 'standard',
        hasOptions: false,
        options: [],
        answerKey: null,
        answerDisplayHtml: normalizedSubs.map(s => `<span class="group-ans-chip">${escHtml(s.label)} ${s.answerDisplayHtml}</span>`).join(' '),
        answerPlainText: normalizedSubs.map(s => `${s.label} ${s.answerPlainText}`).join('；'),
        examPurpose: '',
        examPurposeHtml: '',
        stepBlocksHtml: [],
        stepsPlain: normalizedSubs.flatMap(s => [s.label, ...s.stepsPlain]),
        distractorAnalysis: null,
        figureNote: null,
        figureNoteHtml: '',
        insight: '',
        insightHtml: '',
        primaryTrap: firstTrapSub ? firstTrapSub.primaryTrap : null,
      };
    } else {
      core = normalizeOptionSetAnd4D(q, { is4D, km, fmt, parentRaw: q });
    }

    const extensionStudy = is4D && q.extensionStudy ? q.extensionStudy : null;

    return Object.assign({
      raw: q,
      id: q && q.id,
      legacyId: (q && q.legacyId) || null,
      unitId: (q && q.unitId) || '',
      targetUnitId: (q && q.targetUnitId) || null,
      secondaryUnitIds: Array.isArray(q && q.secondaryUnitIds) ? q.secondaryUnitIds : [],
      section: (q && q.section) || '',
      sectionName: (q && q.sectionName) || '',
      category: (q && q.category) || '觀念綜合',
      batch: (q && q.batch) || '課本原型題',
      source: (q && q.source) || '',
      school: (q && q.school) || null,
      work: (q && q.work) || 'md',
      level,
      difficulty,
      band,
      is4D,
      isGroup,
      subQuestions: normalizedSubs,
      questionHtml,
      questionPlain,
      stemFigureHtml,
      solutionFigureHtml,
      stemImage: (q && q.stemImage) || null,
      figureSvg: (q && q.figureSvg) || null,
      cropImage: (q && q.cropImage) || null,
      examPageImage: (q && q.examPageImage) || null,
      extensionStudy,
    }, core);
  }

  /**
   * 動態從 QUESTION_BANK 建立 legacyId -> 新 4D ID 對照表（零硬編碼）。
   */
  function buildLegacyIdMap(questionBank) { return {}; }
  function _unused_buildLegacyIdMap(questionBank) {
    const map = {};
    if (!Array.isArray(questionBank)) return map;
    for (const q of questionBank) {
      if (q && q.legacyId && q.id && q.legacyId !== q.id) {
        map[q.legacyId] = q.id;
      }
    }
    return map;
  }

  /**
   * 無損轉移舊版題號（例如 u05_001 -> U05-S1-B-001）至新版 4D ID。
   * 保留首次轉移前的備份於 stateObj.u05LegacyBackup，可反覆安全重跑（冪等）。
   */
  function migrateLegacyIdsInState(stateObj, questionBank) {
    const map = buildLegacyIdMap(questionBank);
    const legacyKeys = Object.keys(map);
    if (!stateObj || legacyKeys.length === 0) return { migratedCount: 0, map };

    let migratedCount = 0;
    const capturedBackup = stateObj.legacyMigrationBackup || stateObj.u05LegacyBackup || {
      migratedAt: null,
      errorBook: [],
      errorCounts: {},
      successCounts: {},
      slowCounts: {},
    };
    let touchedBackup = false;

    const recordLegacyVal = (bucket, oldId, val) => {
      if (bucket === 'errorBook') {
        if (!capturedBackup.errorBook.includes(oldId)) {
          capturedBackup.errorBook.push(oldId);
          touchedBackup = true;
        }
      } else if (capturedBackup[bucket] && capturedBackup[bucket][oldId] === undefined) {
        capturedBackup[bucket][oldId] = val;
        touchedBackup = true;
      }
    };

    if (Array.isArray(stateObj.errorBook)) {
      const nextErr = [];
      const seen = new Set();
      for (const id of stateObj.errorBook) {
        const mapped = map[id] || id;
        if (map[id]) {
          migratedCount++;
          recordLegacyVal('errorBook', id, true);
        }
        if (!seen.has(mapped)) {
          seen.add(mapped);
          nextErr.push(mapped);
        }
      }
      stateObj.errorBook = nextErr;
    }

    for (const countKey of ['errorCounts', 'successCounts', 'slowCounts']) {
      const obj = stateObj[countKey];
      if (!obj || typeof obj !== 'object') continue;
      for (const oldId of Object.keys(obj)) {
        const newId = map[oldId];
        if (!newId) continue;
        const val = Number(obj[oldId]) || 0;
        recordLegacyVal(countKey, oldId, val);
        obj[newId] = (Number(obj[newId]) || 0) + val;
        delete obj[oldId];
        migratedCount++;
      }
    }

    if (Array.isArray(stateObj.fullHistory)) {
      for (const sess of stateObj.fullHistory) {
        if (!sess || !Array.isArray(sess.answers)) continue;
        for (const ans of sess.answers) {
          if (ans && ans.qId && map[ans.qId]) {
            ans.qId = map[ans.qId];
            migratedCount++;
          }
        }
      }
    }

    if (touchedBackup || migratedCount > 0) {
      if (!capturedBackup.migratedAt) {
        capturedBackup.migratedAt = Date.now();
      }
      stateObj.u05LegacyBackup = capturedBackup;
      stateObj.legacyMigrationBackup = capturedBackup;
    }

    return { migratedCount, map };
  }

  /**
   * 3 層級聯篩選：
   * L1: unit ('ALL' | 'ERROR_BOOK' | unitId | 'MIXED_ID_LIST')
   * L2: batch ('ALL' | '課本原型題' | '奧數天梯' | '純腦力體操' | '段考真題') ＋ school ('ALL' | schoolName)
   * L3: band ('ALL' | 'basic' | 'standard' | 'challenge')
   */
  function filterArenaPool(questionBank, stateObj, filter) {
    const f = filter || {};
    let list = Array.isArray(questionBank) ? [...questionBank] : [];

    // Custom explicit ID list (e.g. from QR code or retry single error question)
    if (Array.isArray(f.explicitIds) && f.explicitIds.length > 0) {
      const idSet = new Set(f.explicitIds);
      return list.filter(q => idSet.has(q.id));
    }

    // Layer 1: Unit / Error Book
    if (f.unit === 'ERROR_BOOK') {
      const errSet = new Set((stateObj && stateObj.errorBook) || []);
      list = list.filter(q => errSet.has(q.id));
    } else if (f.unit && f.unit !== 'ALL') {
      list = list.filter(q => matchesUnitFilter(q, f.unit));
    }

    if (f.errorsOnly) {
      const errSet = new Set((stateObj && stateObj.errorBook) || []);
      list = list.filter(q => errSet.has(q.id));
    }

    // Layer 2: Batch & School
    if (f.batch && f.batch !== 'ALL') {
      list = list.filter(q => (q.batch || '課本原型題') === f.batch);
    }
    if ((f.unit === 'EXAM_MID1' || f.unit === 'EXAM_MID2' || f.batch === '段考真題') && f.school && f.school !== 'ALL') {
      list = list.filter(q => q.school === f.school);
    }

    // Layer 3: Difficulty Band (based on level 1..10)
    if (f.band && f.band !== 'ALL') {
      list = list.filter(q => getDifficultyBand(q) === f.band);
    }

    // Order
    if (f.sortOrder === 'ladder' || f.batch === '純腦力體操') {
      // Keep U05 manifest/ladder coherence if sorted by ladder
      if (f.sortOrder === 'ladder') {
        list.sort((a, b) => ((a.level || a.stars || 1) - (b.level || b.stars || 1)));
      }
    }

    return list;
  }

  /**
   * 計算第 2 / 第 3 層各膠囊在目前上游篩選下的動態題數（確保永遠級聯、不出現幽靈選項）。
   */
  function getCascadeStats(questionBank, stateObj, filter) {
    const f = filter || {};
    const l1List = filterArenaPool(questionBank, stateObj, {
      unit: f.unit,
      errorsOnly: f.errorsOnly,
      explicitIds: f.explicitIds,
    });

    const batches = ['課本原型題', '奧數天梯', '純腦力體操', '段考真題'];
    const batchCounts = { ALL: l1List.length };
    for (const b of batches) {
      batchCounts[b] = l1List.filter(q => (q.batch || '課本原型題') === b).length;
    }

    const l2List = filterArenaPool(questionBank, stateObj, {
      unit: f.unit,
      errorsOnly: f.errorsOnly,
      batch: f.batch,
      school: f.school,
      explicitIds: f.explicitIds,
    });

    const bandCounts = {
      ALL: l2List.length,
      basic: l2List.filter(q => getDifficultyBand(q) === 'basic').length,
      standard: l2List.filter(q => getDifficultyBand(q) === 'standard').length,
      challenge: l2List.filter(q => getDifficultyBand(q) === 'challenge').length,
    };

    return { batchCounts, bandCounts, totalMatched: filterArenaPool(questionBank, stateObj, f).length };
  }

  function buildHeatDrawerHtml(pool, stateObj, curIdx) {
    return pool.map((item, i) => {
      const okCnt = (stateObj.successCounts && stateObj.successCounts[item.id]) || 0;
      const errCnt = (stateObj.errorCounts && stateObj.errorCounts[item.id]) || 0;
      const slowCnt = (stateObj.slowCounts && stateObj.slowCounts[item.id]) || 0;
      const netErr = errCnt - okCnt;

      let heatCls = 'heat-none';
      if (errCnt > 0 || okCnt > 0) {
        if (netErr >= 3) heatCls = 'heat-bad-heavy';
        else if (netErr >= 2) heatCls = 'heat-bad-mid';
        else if (netErr >= 1) heatCls = 'heat-bad-light';
        else if (netErr === 0) heatCls = 'heat-tie';
        else if (netErr <= -3) heatCls = 'heat-ok-heavy';
        else if (netErr <= -1) heatCls = 'heat-ok-light';
      }
      const isCurrent = i === curIdx ? 'current' : '';
      let tip = `第 ${i + 1} 題：答對 ${okCnt} 次 · 答錯 ${errCnt} 次`;
      if (slowCnt > 0) tip += ` · 想很久 ${slowCnt} 次`;
      return `
        <button type="button" class="drawer-q-btn ${heatCls} ${isCurrent}" data-arena-jump="${i}" title="${escHtml(tip)}">
          ${okCnt > 0 ? `<span class="q-badge-ok">${okCnt}</span>` : ''}
          ${errCnt > 0 ? `<span class="q-badge-bad">${errCnt}</span>` : ''}
          <span class="q-num-center">${i + 1}</span>
        </button>
      `;
    }).join('');
  }

  /**
   * 共用選項列渲染（支援 standard / tf / compare3 及單題／題組子題）。
   */
  function renderOptionsGridHtml(item, opts) {
    const o = opts || {};
    const showDiagnosis = !!o.showDiagnosis;
    const isExamMode = !!o.isExamMode;
    const examSubmitted = !!o.examSubmitted;
    const isBlinded = !!o.isBlinded;
    const ansRecord = o.ansRecord || null;
    const examDraft = o.examDraft || null;
    const subId = o.subId || null;

    const styleCls = item.choiceStyle === 'tf'
      ? 'tf-grid'
      : item.choiceStyle === 'compare3'
        ? 'cmp3-grid'
        : '';

    return item.options.map(opt => {
      let cls = 'opt-btn arena-opt-btn';
      let dis = '';
      if (showDiagnosis) {
        dis = 'disabled';
        if (opt.key === item.answerKey) cls += ' opt-correct';
        else if (ansRecord && ansRecord.userChoice === opt.key && ansRecord.result === 'bad') cls += ' opt-wrong';
        else cls += ' opt-dim';
      } else if (isExamMode && !examSubmitted && examDraft === opt.key) {
        cls += ' opt-picked-draft';
      }
      const dataAttrs = subId
        ? `data-arena-subq="${escHtml(subId)}" data-arena-subopt="${opt.key}"`
        : `data-arena-opt="${opt.key}"`;
      return `
        <button type="button" class="${cls}" ${dataAttrs} ${dis} ${isBlinded ? 'disabled' : ''}>
          <span class="opt-letter">${opt.key}</span>
          <span class="opt-text">${opt.html}</span>
        </button>
      `;
    }).join('');
  }

  /**
   * 共用 4D 診斷與作答回饋面板渲染器（單題與題組子題共用，杜絕重複）。
   */
  function renderWrongTrapBannerHtml(item, ansRecord, is4D, kidsMath, formatMathForKids) {
    if (!item.hasOptions || !ansRecord) return '';
    if (ansRecord.result === 'ok') {
      return `
        <div class="arena-alert ok">
          🎯 <b>作答正確！</b>${is4D ? '觀念基準鎖定準確！' : '繼續維持手感！'}
        </div>
      `;
    }
    const pickedOpt = item.options.find(o => o.key === ansRecord.userChoice);
    const daMsg = item.distractorAnalysis && ansRecord.userChoice ? item.distractorAnalysis[ansRecord.userChoice] : '';
    return `
      <div class="arena-alert bad">
        <div class="alert-head">
          💡 <b>你選了 (${escHtml(ansRecord.userChoice || '?')})</b>
          ${pickedOpt && pickedOpt.trapCode ? `<span class="trap-chip">${escHtml(pickedOpt.trapLabel)} <code>${escHtml(pickedOpt.trapCode)}</code></span>` : ''}
        </div>
        ${daMsg ? `<div class="alert-body">${renderTextSafe(daMsg, is4D, kidsMath, formatMathForKids)}</div>` : ''}
      </div>
    `;
  }

  function renderD3BreakdownHtml(item, ansRecord, is4D, kidsMath, formatMathForKids) {
    if (is4D && item.choiceStyle === 'handdraw' && item.distractorAnalysis && Array.isArray(item.distractorAnalysis.COMMON_MISTAKES)) {
      const mistakesHtml = item.distractorAnalysis.COMMON_MISTAKES.map(cm => `
        <div class="da-row">
          <div class="da-head">
            <span class="trap-chip">${escHtml(getTrapLabel(cm.trapCode))} <code>${escHtml(cm.trapCode || '')}</code></span>
          </div>
          <div class="da-desc">${renderTextSafe(cm.desc || '', true, kidsMath, formatMathForKids)}</div>
        </div>
      `).join('');
      if (!mistakesHtml) return '';
      return `
        <div class="box trap arena-d3">
          <h4>⚠️ 維度三：常見作圖失誤提醒</h4>
          ${mistakesHtml}
        </div>
      `;
    }
    if (is4D && item.distractorAnalysis) {
      const wrongItems = item.options.filter(o => o.key !== item.answerKey).map(o => `
        <div class="da-row ${ansRecord && ansRecord.userChoice === o.key ? 'da-picked' : ''}">
          <div class="da-head">
            <span class="da-key">(${o.key})</span>
            ${o.trapCode ? `<span class="trap-chip">${escHtml(o.trapLabel || '')} <code>${escHtml(o.trapCode)}</code></span>` : '<span class="trap-chip">常見誤選</span>'}
          </div>
          <div class="da-desc">${renderTextSafe(item.distractorAnalysis[o.key] || '', true, kidsMath, formatMathForKids)}</div>
        </div>
      `).join('');
      if (!wrongItems) return '';
      return `
        <div class="box trap arena-d3">
          <h4>⚠️ 維度三：陷阱選項盲點拆解</h4>
          ${wrongItems}
        </div>
      `;
    }
    if (item.primaryTrap) {
      return `
        <div class="box trap">
          <h4>⚠️ 典型錯誤防坑診斷 ${item.primaryTrap.code ? `<code>${escHtml(item.primaryTrap.code)}</code>` : ''}</h4>
          <div>${item.primaryTrap.text}</div>
        </div>
      `;
    }
    return '';
  }

  function render4DCoreBoxesHtml(item, ansRecord, is4D, kidsMath, formatMathForKids, extra) {
    const ex = extra || {};
    const figureSvg = ex.figureSvg || '';
    const d3Html = renderD3BreakdownHtml(item, ansRecord, is4D, kidsMath, formatMathForKids);
    const hasD4 = !!(item.figureNoteHtml || item.solutionFigureHtml || figureSvg);
    const d4Html = hasD4 ? `
      <div class="box figure-note arena-d4">
        <h4>${figureSvg && !item.figureNoteHtml ? '📐 維度四：標準作圖解答對照' : '📊 維度四：線段圖與基準定位關鍵'}</h4>
        ${figureSvg ? `<div class="d4-svg-wrap">${figureSvg}</div>` : ''}
        ${item.solutionFigureHtml ? `<div class="km-inline-fig">${item.solutionFigureHtml}</div>` : ''}
        ${item.figureNoteHtml ? `<p>${item.figureNoteHtml}</p>` : ''}
      </div>
    ` : '';

    return `
      <div class="box final">
        <h4>🎯 正確答案</h4>
        <div class="ans">${item.answerDisplayHtml}</div>
      </div>
      ${item.examPurposeHtml ? `
        <div class="box purpose arena-d1">
          <h4>🎯 維度一：考點與命題核心</h4>
          <div>${item.examPurposeHtml}</div>
        </div>
      ` : ''}
      ${item.stepBlocksHtml.length > 0 ? `
        <div class="box steps arena-d2">
          <h4>📐 維度二：小五無代數分步算理</h4>
          <div class="km-steps-flow">
            ${item.stepBlocksHtml.map(s => s.html).join('')}
          </div>
        </div>
      ` : ''}
      ${d3Html}
      ${d4Html}
      ${item.insightHtml ? `
        <div class="box insight">
          <h4>💡 秒殺直覺與數感要領</h4>
          <div>${item.insightHtml}</div>
        </div>
      ` : ''}
    `;
  }

  /**
   * 渲染完整 #view-arena HTML（含 3 層級聯控制列 + 考題主卡 + 複合題組 + 4D 診斷區 + 延伸學習 3 模組 + 抽屜速跳盤）
   */
  function renderArenaHtml(ctx) {
    const {
      units,
      examSchools,
      questionBank,
      state,
      filter,
      round,
      pool,
      hideCascadeBar,
      formatMathForKids,
      kidsMath,
    } = ctx;

    const cascade = getCascadeStats(questionBank, state, filter);
    const total = pool.length;
    const curIdx = Math.min(Math.max(0, round.cursor || 0), Math.max(0, total - 1));
    const rawQ = pool[curIdx] || null;
    const nq = rawQ ? normalizeQuestion(rawQ, { kidsMath, formatMathForKids }) : null;

    const roundKey = round.roundKey;
    const ansRecord = nq && round.answered ? round.answered[nq.id] : null;
    const examDraft = nq && round.examDrafts ? round.examDrafts[nq.id] : null;
    const subAnsMap = (nq && nq.isGroup && round.subAnswered && round.subAnswered[nq.id]) || {};
    const subDraftMap = (nq && nq.isGroup && round.subExamDrafts && round.subExamDrafts[nq.id]) || {};
    const isExamMode = filter.examMode === 'exam';
    const allSubsAnswered = !!(nq && nq.isGroup && nq.subQuestions.every(s => !!subAnsMap[s.subId]));
    const isAnswered = nq && nq.isGroup ? (!!ansRecord || allSubsAnswered) : !!ansRecord;
    const showDiagnosis = nq && nq.isGroup
      ? (isExamMode ? !!round.examSubmitted : allSubsAnswered)
      : (isAnswered && (!isExamMode || round.examSubmitted));
    const answeredCount = isExamMode
      ? pool.filter(pq => pq.questionType === 'group'
        ? (pq.subQuestions || []).every(s => round.subExamDrafts && round.subExamDrafts[pq.id] && round.subExamDrafts[pq.id][s.subId])
        : !!(round.examDrafts && round.examDrafts[pq.id])).length
      : Object.keys(round.answered || {}).length;

    const unitPills = [
      { id: 'ALL', label: `全題庫 (${questionBank.length})` },
      { id: 'ERROR_BOOK', label: `🔥 錯題本 (${state.errorBook.length})` },
      ...units.map(u => ({
        id: u.id,
        label: u.isExam ? `🏆 ${u.title.replace('五年級上_', '')}` : `第${u.no}單元 ${u.title}`,
      })),
    ];

    const batchDefs = [
      { id: 'ALL', label: '全部題型' },
      { id: '課本原型題', label: '📖 課本原型' },
      { id: '奧數天梯', label: '🪜 奧數天梯' },
      { id: '純腦力體操', label: '🧠 腦力體操' },
      { id: '段考真題', label: '🏆 段考真題' },
    ];

    const bandDefs = [
      { id: 'ALL', label: '全部難度' },
      { id: 'basic', label: '★ 基礎 (L1~L3)' },
      { id: 'standard', label: '★★ 標準 (L4~L6)' },
      { id: 'challenge', label: '★★★ 挑戰 (L7~L10)' },
    ];

    const showSchoolDropdown = (filter.unit === 'EXAM_MID1' || filter.unit === 'EXAM_MID2' || filter.batch === '段考真題')
      && Array.isArray(examSchools) && examSchools.length > 1;

    const cascadeBarHtml = hideCascadeBar ? `
      <div class="arena-explicit-bar card-surface">
        <span>🎯 目前正在進行專屬抽題練習（${total} 題）</span>
        <button type="button" class="btn btn-sm btn-ghost" id="btn-arena-open-cascade">🎛️ 切換自選篩選</button>
      </div>
    ` : `
      <section class="arena-cascade card-surface" id="arena-cascade">
        <div class="arena-filter-row">
          <span class="arena-filter-label">1. 單元：</span>
          <div class="arena-pill-scroll">
            ${unitPills.map(up => `
              <button type="button" class="arena-pill ${filter.unit === up.id ? 'active' : ''}" data-filter-unit="${escHtml(up.id)}">
                ${escHtml(up.label)}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="arena-filter-row">
          <span class="arena-filter-label">2. 題型：</span>
          <div class="arena-pill-scroll">
            ${batchDefs.map(b => {
              const cnt = cascade.batchCounts[b.id] || 0;
              const active = filter.batch === b.id ? 'active' : '';
              const disabled = b.id !== 'ALL' && cnt === 0 ? 'disabled' : '';
              return `
                <button type="button" class="arena-pill ${active}" data-filter-batch="${escHtml(b.id)}" ${disabled}>
                  ${escHtml(b.label)} <small>(${cnt})</small>
                </button>
              `;
            }).join('')}
            ${showSchoolDropdown ? `
              <select class="arena-school-select" id="arena-school-select" aria-label="選擇段考學校">
                ${examSchools.map(sch => `<option value="${escHtml(sch.id)}" ${filter.school === sch.id ? 'selected' : ''}>🏫 ${escHtml(sch.shortName)}</option>`).join('')}
              </select>
            ` : ''}
          </div>
        </div>

        <div class="arena-filter-row">
          <span class="arena-filter-label">3. 難度：</span>
          <div class="arena-pill-scroll">
            ${bandDefs.map(bd => {
              const cnt = cascade.bandCounts[bd.id] || 0;
              const active = filter.band === bd.id ? 'active' : '';
              const disabled = bd.id !== 'ALL' && cnt === 0 ? 'disabled' : '';
              return `
                <button type="button" class="arena-pill ${active}" data-filter-band="${escHtml(bd.id)}" ${disabled}>
                  ${escHtml(bd.label)} <small>(${cnt})</small>
                </button>
              `;
            }).join('')}

            <div class="arena-mode-switch" role="group" aria-label="作答模式">
              <button type="button" class="mode-pill ${!isExamMode ? 'active' : ''}" data-arena-mode="instant">⚡ 即時批改</button>
              <button type="button" class="mode-pill ${isExamMode ? 'active' : ''}" data-arena-mode="exam">📝 模擬考</button>
            </div>
          </div>
        </div>
      </section>
    `;

    // Empty state when filters yield 0 questions
    if (!nq) {
      return `
        <div class="view arena" id="view-arena" data-round-key="${escHtml(roundKey)}">
          <div class="arena-topbar">
            <button type="button" class="btn btn-ghost" id="btn-arena-home">← 回首頁</button>
            <h2>🎯 4D 智慧數學考場</h2>
          </div>
          ${cascadeBarHtml}
          <div class="card-surface empty-arena">
            <div class="emo">🔍</div>
            <h3>目前篩選組合沒有題目</h3>
            <p class="muted">請調整上方的單元、題型或難度篩選（若為錯題本，代表錯題已全部消滅！）</p>
            <button type="button" class="btn btn-primary" id="btn-arena-reset-filters">重置全部篩選</button>
          </div>
        </div>
      `;
    }

    const unitObj = units.find(u => u.id === nq.unitId) || { title: '綜合特訓', no: '?' };
    const isErr = state.errorBook.includes(nq.id);
    const hasLegacyCropToggle = !nq.is4D && !!(nq.cropImage || nq.examPageImage);
    const isImgMode = hasLegacyCropToggle && !!(state.imgModeQuestions && state.imgModeQuestions[nq.id]);
    const hasAnySubAns = nq.isGroup && Object.keys(subAnsMap).length > 0;
    const isBlinded = !!round.hideOptions && (nq.hasOptions || nq.isGroup) && !showDiagnosis;
    const isExtOpen = !!(round.openExt && round.openExt[nq.id]);

    const starCount = nq.difficulty;
    const diffStars = '★'.repeat(starCount) + '☆'.repeat(Math.max(0, 5 - starCount));

    // Inline stemImage directly under question text (always visible, never hidden behind toggle)
    const inlineStemImgHtml = nq.stemImage ? `
      <div class="stem-inline-figure" id="arena-stem-image" title="點擊放大檢視題目圖表">
        <img src="${escHtml(nq.stemImage)}" alt="題目附圖" class="exam-stem-img">
        <div class="crop-zoom-hint">🔍 點擊題圖可放大檢視</div>
      </div>
    ` : '';

    // Choices or Compound Group rendering
    let mainInteractiveHtml = '';
    if (nq.isGroup) {
      const subCardsHtml = nq.subQuestions.map(sub => {
        const subAns = subAnsMap[sub.subId] || null;
        const subDraft = subDraftMap[sub.subId] || null;
        const showSubDiag = isExamMode ? !!(round.examSubmitted && subAns) : !!subAns;
        const styleCls = sub.choiceStyle === 'tf' ? 'tf-grid' : sub.choiceStyle === 'compare3' ? 'cmp3-grid' : '';
        const subImgHtml = sub.stemImage ? `
          <div class="stem-inline-figure subq-inline-figure" data-zoom-img="${escHtml(sub.stemImage)}" title="點擊放大檢視小題圖表">
            <img src="${escHtml(sub.stemImage)}" alt="小題附圖" class="exam-stem-img">
            <div class="crop-zoom-hint">🔍 點擊題圖可放大檢視</div>
          </div>
        ` : '';
        const subDiagHtml = showSubDiag ? `
          <div class="arena-sub-diagnosis" id="arena-sub-ans-${escHtml(sub.subId)}">
            ${renderWrongTrapBannerHtml(sub, subAns, true, kidsMath, formatMathForKids)}
            <div class="answer arena-answer-4d sub-answer-4d">
              ${render4DCoreBoxesHtml(sub, subAns, true, kidsMath, formatMathForKids, { figureSvg: sub.figureSvg })}
            </div>
          </div>
        ` : '';

        return `
          <div class="arena-subq-card ${showSubDiag ? 'subq-done' : ''}" data-subq-id="${escHtml(sub.subId)}">
            <div class="subq-stem">
              <span class="subq-badge">${escHtml(sub.label)}</span>
              <div class="subq-text">${sub.questionHtml}</div>
            </div>
            ${subImgHtml}
            ${sub.choiceStyle === 'handdraw' ? (
              isExamMode && !round.examSubmitted ? `
                <div class="handdraw-box">
                  <p class="muted" style="margin:0 0 8px;">✏️ 原味手繪作圖題：請在紙上完成作圖後標記進度，交卷後統一對照標準作圖！</p>
                  <button type="button" class="btn btn-sm ${subDraft === 'DONE' ? 'btn-primary' : 'btn-ghost'}" data-sub-handdraw-draft="${escHtml(sub.subId)}">
                    ${subDraft === 'DONE' ? '✔ 已完成作圖（已暫存）' : '✏️ 標記已完成作圖'}
                  </button>
                </div>
              ` : !showSubDiag ? `
                <div class="handdraw-box">
                  <p class="muted" style="margin:0 0 8px;">✏️ 請先在計算紙或考卷上畫出此小題，再點擊查看紅線參考作圖：</p>
                  ${!(round.subHanddrawRevealed && round.subHanddrawRevealed[nq.id] && round.subHanddrawRevealed[nq.id][sub.subId]) ? `
                    <button type="button" class="btn btn-primary btn-sm handdraw-reveal-btn" data-sub-handdraw-reveal="${escHtml(sub.subId)}">
                      👁️ 我畫好了，對照參考作圖解答
                    </button>
                  ` : `
                    ${sub.figureSvg ? `<div class="d4-svg-wrap" style="margin-bottom:10px;">${sub.figureSvg}</div>` : ''}
                    <div class="sub-handdraw-grade">
                      <span class="muted" style="font-size:13px;font-weight:700;">對照參考圖，誠實自評作圖結果：</span>
                      <div class="fb-row compact-fb-row">
                        <button type="button" class="fb ok" data-sub-handdraw-fb="ok" data-subq-id="${escHtml(sub.subId)}"><span class="emo">👍</span>畫對了</button>
                        <button type="button" class="fb slow" data-sub-handdraw-fb="slow" data-subq-id="${escHtml(sub.subId)}"><span class="emo">⏳</span>想很久</button>
                        <button type="button" class="fb bad" data-sub-handdraw-fb="bad" data-subq-id="${escHtml(sub.subId)}"><span class="emo">❌</span>畫錯了</button>
                      </div>
                    </div>
                  `}
                </div>
              ` : ''
            ) : `
              ${isExamMode && !round.examSubmitted ? `
                <div class="subq-draft-hint">${subDraft ? `已暫存 (${subDraft})` : '請點選此小題選項'}</div>
              ` : ''}
              <div class="options-grid ${styleCls} ${isBlinded ? 'options-blinded' : ''}">
                ${renderOptionsGridHtml(sub, {
                  showDiagnosis: showSubDiag,
                  isExamMode,
                  examSubmitted: !!round.examSubmitted,
                  isBlinded,
                  ansRecord: subAns,
                  examDraft: subDraft,
                  subId: sub.subId,
                })}
              </div>
            `}
            ${subDiagHtml}
          </div>
        `;
      }).join('');

      mainInteractiveHtml = `
        <div class="arena-opt-tools">
          ${!showDiagnosis ? `
            <button type="button" class="btn btn-sm btn-ghost ${round.hideOptions ? 'on' : ''}" id="btn-toggle-blind">
              ${round.hideOptions ? '👁️ 顯示選項並作答' : '🙈 遮住選項（先用計算紙算）'}
            </button>
          ` : ''}
          <span class="group-progress-badge">題組共 ${nq.subQuestions.length} 小題（已完成 ${Object.keys(isExamMode && !round.examSubmitted ? subDraftMap : subAnsMap).length} / ${nq.subQuestions.length}）</span>
        </div>
        <div class="arena-group-list" id="arena-group-list">
          ${subCardsHtml}
        </div>
      `;
    } else if (nq.hasOptions) {
      const styleCls = nq.choiceStyle === 'tf' ? 'tf-grid' : nq.choiceStyle === 'compare3' ? 'cmp3-grid' : '';
      mainInteractiveHtml = `
        <div class="arena-opt-tools">
          ${!showDiagnosis ? `
            <button type="button" class="btn btn-sm btn-ghost ${round.hideOptions ? 'on' : ''}" id="btn-toggle-blind">
              ${round.hideOptions ? '👁️ 顯示選項並作答' : '🙈 遮住選項（先用計算紙算）'}
            </button>
          ` : ''}
          ${isExamMode && !round.examSubmitted ? `
            <span class="exam-draft-status">${examDraft ? `已暫存選擇 (${examDraft})` : '尚未作答，請點選正確選項'}</span>
          ` : ''}
        </div>
        <div class="options-grid ${styleCls} ${isBlinded ? 'options-blinded' : ''}" id="arena-options-grid">
          ${renderOptionsGridHtml(nq, {
            showDiagnosis,
            isExamMode,
            examSubmitted: !!round.examSubmitted,
            isBlinded,
            ansRecord,
            examDraft,
          })}
        </div>
      `;
    } else if (!showDiagnosis) {
      mainInteractiveHtml = `
        <div class="reveal" id="arena-reveal-area">
          <button type="button" class="btn btn-primary btn-lg btn-block" id="btn-arena-reveal-open">
            ${nq.choiceStyle === 'handdraw' ? '👁️ 我畫好了，查看標準作圖解答' : '👁️ 我在紙上算好了，查看正解與詳解'}
          </button>
        </div>
      `;
    }

    const wrongTrapBannerHtml = (showDiagnosis && !nq.isGroup && nq.hasOptions && ansRecord)
      ? renderWrongTrapBannerHtml(nq, ansRecord, nq.is4D, kidsMath, formatMathForKids)
      : '';

    const extHtml = nq.extensionStudy ? `
      <div class="arena-ext-wrap">
        <button type="button" class="btn btn-ghost btn-block arena-ext-toggle" id="btn-arena-ext-toggle" aria-expanded="${isExtOpen ? 'true' : 'false'}">
          📚 延伸學習密技（核心口訣 / 易混淆比較 / 段考變形題） ${isExtOpen ? '▴ 收合' : '▾ 展開查看'}
        </button>
        ${isExtOpen ? `
          <div class="arena-ext-panel" id="arena-ext-panel">
            <div class="ext-card">
              <h5>🔑 核心解題口訣</h5>
              <ul>${(nq.extensionStudy.coreFormulas || []).map(f => `<li>${renderTextSafe(f, true, kidsMath, formatMathForKids)}</li>`).join('')}</ul>
            </div>
            <div class="ext-card">
              <h5>⚖️ 易混淆觀念比較</h5>
              <p>${renderTextSafe(nq.extensionStudy.conceptCompare, true, kidsMath, formatMathForKids)}</p>
            </div>
            <div class="ext-card">
              <h5>🔮 段考與奧數變形預測</h5>
              <p>${renderTextSafe(nq.extensionStudy.examVariations, true, kidsMath, formatMathForKids)}</p>
            </div>
          </div>
        ` : ''}
      </div>
    ` : '';

    const legacySelfGradeHtml = (!nq.hasOptions && !nq.isGroup) ? `
      <div class="feedback">
        <p>請誠實回饋你剛才的紙筆作答狀況：</p>
        <div class="fb-row">
          <button type="button" class="fb ok ${isAnswered && ansRecord.result === 'ok' ? 'picked' : (isAnswered ? 'dim' : '')}" data-arena-fb="ok" ${isAnswered ? 'disabled' : ''}>
            <span class="emo">👍</span>${nq.choiceStyle === 'handdraw' ? '我畫對了' : '我算對了'}<small>思路清晰順暢</small>
          </button>
          <button type="button" class="fb slow ${isAnswered && ansRecord.result === 'slow' ? 'picked' : (isAnswered ? 'dim' : '')}" data-arena-fb="slow" ${isAnswered ? 'disabled' : ''}>
            <span class="emo">⏳</span>${nq.choiceStyle === 'handdraw' ? '畫對但想很久' : '算對但想很久'}<small>需要加強熟練</small>
          </button>
          <button type="button" class="fb bad ${isAnswered && ansRecord.result === 'bad' ? 'picked' : (isAnswered ? 'dim' : '')}" data-arena-fb="bad" ${isAnswered ? 'disabled' : ''}>
            <span class="emo">❌</span>${nq.choiceStyle === 'handdraw' ? '我有畫錯' : '我有算錯'}<small>記進錯題本</small>
          </button>
        </div>
      </div>
    ` : `
      <div class="feedback arena-slow-bar">
        <span>若是「選對但算很久 / 猜中」，可手動標記熟練度：</span>
        <button type="button" class="btn btn-sm btn-ghost" id="btn-arena-mark-slow" ${(state.slowCounts[nq.id] || 0) > 0 ? 'disabled' : ''}>
          ${(state.slowCounts[nq.id] || 0) > 0 ? '✔ 已標記為想很久' : '⏳ 標記想很久'}
        </button>
      </div>
    `;

    const pct = total > 0 ? Math.round(((curIdx + 1) / total) * 100) : 0;

    return `
      <div class="view arena" id="view-arena" data-round-key="${escHtml(roundKey)}">
        <div class="quiz-head arena-head">
          <div class="quiz-nav-left">
            <button type="button" class="btn btn-ghost" id="btn-arena-home">← 結束回首頁</button>
            <button type="button" class="btn btn-ghost" id="btn-arena-reset-round" title="清空本輪進度重頭練（不刪歷史統計）">🔄 全部恢復未答</button>
          </div>
          <span class="crumb">${escHtml(unitObj.title)}${nq.sectionName ? ` · ${escHtml(nq.sectionName)}` : ''}</span>
          <div class="progress"><i style="width: ${pct}%"></i></div>
          <button type="button" class="count-badge-btn" id="btn-arena-drawer-toggle">第 ${curIdx + 1} / ${total} 題 ▾</button>
        </div>

        ${cascadeBarHtml}

        <div class="quiz-grid-drawer" id="arena-grid-drawer" style="display: none;">
          <div class="grid-drawer-head">
            <div class="drawer-legend-bar">
              <span class="leg-item"><b class="leg-dot ok"></b> 綠字=答對</span>
              <span class="leg-item"><b class="leg-dot bad"></b> 紅字=答錯</span>
              <span class="leg-item"><b class="leg-dot red-shade"></b> 淨錯熱力色階</span>
            </div>
            <button type="button" class="btn-close-drawer" id="btn-arena-drawer-close">✕</button>
          </div>
          <div class="drawer-q-grid">${buildHeatDrawerHtml(pool, state, curIdx)}</div>
        </div>

        ${isExamMode && !round.examSubmitted ? `
          <div class="arena-exam-banner card-surface">
            <div>
              <strong>📝 模擬考作答中</strong>
              <span class="muted">已暫存 ${answeredCount} / ${total} 題，作答期間不顯示答案，完卷後一次批改！</span>
            </div>
            <button type="button" class="btn btn-primary" id="btn-arena-submit-exam">📬 交卷批改 (${answeredCount}/${total})</button>
          </div>
        ` : ''}

        <article class="card-surface q-card arena-card">
          <div class="q-top-action-bar">
            <div class="q-tags">
              ${nq.school ? `<span class="tag school-tag">🏫 ${escHtml(nq.school)}</span>` : ''}
              <span class="tag">${escHtml(nq.batch)}</span>
              <span class="tag">${escHtml(nq.category)}</span>
              <span class="tag lv">L${nq.level} · ${diffStars}</span>
              <span class="tag">${escHtml(nq.source)}</span>
              ${nq.is4D ? `<span class="tag badge-4d">✨ 4D詳解</span>` : ''}
              ${nq.isGroup ? `<span class="tag badge-group">📑 複合題組</span>` : ''}
              ${isErr ? `<span class="tag bad">🔥 待消滅錯題</span>` : ''}
            </div>
            <div class="q-right-actions">
              ${((isAnswered || hasAnySubAns) && !isExamMode) ? `<button type="button" class="btn btn-sm btn-ghost" id="btn-arena-retry-this">🔄 重練本題</button>` : ''}
              ${nq.is4D && nq.examPageImage ? `
                <button type="button" class="btn-crop-toggle" id="btn-arena-full-page">📄 查看整頁原卷</button>
              ` : hasLegacyCropToggle ? `
                <button type="button" class="btn-crop-toggle ${isImgMode ? 'active' : ''}" id="btn-arena-crop-toggle">
                  ${isImgMode ? '📝 返回文字' : '📷 看考卷原圖'}
                </button>
              ` : ''}
            </div>
          </div>

          <div class="q-text arena-q-text" id="arena-q-content" style="${isImgMode ? 'display:none;' : ''}">${nq.questionHtml}</div>

          ${inlineStemImgHtml}

          ${hasLegacyCropToggle ? `
            <div class="crop-image-container" id="arena-crop-container" style="${isImgMode ? 'display:block;' : 'display:none;'}">
              <div class="crop-img-wrap" id="arena-crop-zoom">
                <img src="${escHtml(nq.cropImage || nq.examPageImage)}" alt="考卷原圖" class="exam-crop-img">
                <div class="crop-zoom-hint">🔍 點擊放大檢視</div>
              </div>
              ${nq.examPageImage && nq.cropImage ? `
                <div class="crop-footer-actions">
                  <button type="button" class="btn-view-page" id="btn-arena-full-page">📄 查看整頁原卷</button>
                </div>
              ` : ''}
            </div>
          ` : ''}

          ${nq.stemFigureHtml ? `<div class="q-figure">${nq.stemFigureHtml}</div>` : ''}

          ${mainInteractiveHtml}

          ${wrongTrapBannerHtml}

          ${nq.isGroup ? (showDiagnosis ? `
            <div class="answer arena-answer-4d" id="arena-answer-area">
              ${nq.figureSvg ? `
                <div class="box figure-note arena-d4">
                  <h4>📐 標準作圖解答對照</h4>
                  <div class="d4-svg-wrap">${nq.figureSvg}</div>
                </div>
              ` : ''}
              ${extHtml}
              ${legacySelfGradeHtml}
            </div>
          ` : '') : ((showDiagnosis || (!nq.hasOptions && round.openRevealed && round.openRevealed[nq.id])) ? `
            <div class="answer arena-answer-4d" id="arena-answer-area">
              ${render4DCoreBoxesHtml(nq, ansRecord, nq.is4D, kidsMath, formatMathForKids, { figureSvg: nq.figureSvg })}
              ${extHtml}
              ${legacySelfGradeHtml}
            </div>
          ` : '')}

          <div class="quiz-bottom-nav">
            <button type="button" class="btn btn-ghost btn-lg" id="btn-arena-prev" ${curIdx === 0 ? 'disabled' : ''}>⏮️ 上一題</button>
            <button type="button" class="btn btn-ghost btn-lg btn-jump-drawer" id="btn-arena-drawer-bottom">🔢 題號跳轉</button>
            <button type="button" class="btn ${(isAnswered || isExamMode) ? 'btn-primary' : 'btn-secondary'} btn-lg" id="btn-arena-next">
              ${curIdx >= total - 1 ? (isExamMode && !round.examSubmitted ? '檢查完畢／準備交卷 📬' : '完成本輪結算 🏁') : (isAnswered || examDraft ? '下一題 →' : '跳至下一題 ❯')}
            </button>
          </div>
        </article>
      </div>
    `;
  }

  /**
   * 產生 A4 列印考卷 HTML（支援 'student' 學生空白卷 與 'teacher' 家長詳解卷，完整支援 stemImage 與 group 題組）
   * 學生空白卷嚴格確保零答案與零詳解外洩。
   */
  function buildPaperSheetHtml(selectedQuestions, opts) {
    const o = opts || {};
    const printMode = o.printMode === 'teacher' ? 'teacher' : 'student';
    const curUser = o.curUser || { name: 'HUGO' };
    const workSizeFallback = o.workSize || 'md';
    const qrSvg = o.qrSvg || '';
    const hasErrorBook = !!o.hasErrorBook;
    const mainTitle = o.mainTitle || '康軒版國小五上數學 特訓測驗卷';
    const km = o.kidsMath || (typeof root !== 'undefined' && root.KidsMath) || null;
    const fmt = o.formatMathForKids || defaultFormatMathForKids;
    const isTeacher = printMode === 'teacher';

    const buildItemTeacherKeyHtml = (item, extraSvg) => {
      const wrongBreakdown = item.is4D && item.distractorAnalysis
        ? item.options.filter(x => x.key !== item.answerKey).map(x => `<li><b>(${x.key}) [${escHtml(x.trapCode || '')}]</b> ${renderTextSafe(item.distractorAnalysis[x.key] || '', true, km, fmt)}</li>`).join('')
        : (item.primaryTrap ? `<li><b>${item.primaryTrap.code ? `[${escHtml(item.primaryTrap.code)}] ` : ''}</b>${item.primaryTrap.text}</li>` : '');
      return `
        <div class="pq-teacher-key">
          <div class="pq-key-ans">✅ 正解：${item.answerDisplayHtml}</div>
          ${item.examPurposeHtml ? `<div class="pq-key-purpose"><b>🎯 考點：</b>${item.examPurposeHtml}</div>` : ''}
          ${item.stepBlocksHtml.length > 0 ? `
            <div class="pq-key-steps">
              <b>📐 詳解步驟：</b>
              <div class="km-steps-flow pq-print-flow">${item.stepBlocksHtml.map(s => s.html).join('')}</div>
            </div>
          ` : ''}
          ${extraSvg ? `<div class="pq-key-svg"><b>📐 標準作圖解答對照：</b><div class="d4-svg-wrap">${extraSvg}</div></div>` : ''}
          ${wrongBreakdown ? `<ul class="pq-key-traps"><b>⚠️ 陷阱剖析：</b>${wrongBreakdown}</ul>` : ''}
          ${item.figureNoteHtml && !item.solutionFigureHtml ? `<div class="pq-key-note"><b>📊 圖解定位：</b>${item.figureNoteHtml}</div>` : ''}
          ${item.insightHtml ? `<div class="pq-key-insight"><b>💡 速解口訣：</b>${item.insightHtml}</div>` : ''}
        </div>
      `;
    };

    const questionsHtml = (selectedQuestions || []).map((q, idx) => {
      const nq = normalizeQuestion(q, { kidsMath: km, formatMathForKids: fmt });
      const workClass = nq.work || workSizeFallback;
      const isSpecificCrop = q.cropImage && !/_p\d+\.png$/i.test(q.cropImage);
      const figHtml = nq.stemFigureHtml
        ? `<div class="pq-fig">${nq.stemFigureHtml}</div>`
        : nq.stemImage
          ? `<div class="pq-stem-figure"><img src="${escHtml(nq.stemImage)}" alt="題目附圖" class="pq-stem-img"></div>`
          : (isSpecificCrop ? `<div class="pq-fig"><img src="${escHtml(q.cropImage)}" alt="考卷題圖" style="max-width:140mm; max-height:55mm; object-fit:contain;"></div>` : '');

      if (nq.isGroup) {
        const subItemsHtml = nq.subQuestions.map(sub => {
          const subImg = sub.stemImage
            ? `<div class="pq-stem-figure"><img src="${escHtml(sub.stemImage)}" alt="小題附圖" class="pq-stem-img"></div>`
            : '';
          const subOpts = sub.hasOptions ? `
            <div class="pq-options">
              ${sub.options.map(opt => `<div><b>(${opt.key})</b> ${opt.html}</div>`).join('')}
            </div>
          ` : '';
          const subKey = isTeacher ? buildItemTeacherKeyHtml(Object.assign({}, sub, { is4D: true }), sub.figureSvg || '') : '';
          return `
            <div class="pq-subq-item">
              <div class="pq-subq-title"><b>${escHtml(sub.label)}</b> <span>${sub.questionHtml}</span></div>
              ${subImg}
              ${subOpts}
              ${!isTeacher ? (sub.choiceStyle === 'handdraw' ? '<div class="pq-handdraw-space">✏️ 原味作圖題：請於上方圖形直接繪製</div>' : '<div class="pq-ans pq-sub-ans">答：<i></i></div>') : subKey}
            </div>
          `;
        }).join('');

        return `
          <div class="pq pq-group ${isTeacher ? 'pq-teacher-item' : ''}" data-qid="${escHtml(nq.id)}">
            <div class="pq-title">
              <span class="pq-no">${idx + 1}.</span>
              <div style="flex: 1">${nq.questionHtml}</div>
            </div>
            ${figHtml}
            <div class="pq-subq-list">${subItemsHtml}</div>
            ${!isTeacher
              ? `<div class="work-grid ${workClass}" title="5mm 手寫草稿格"></div>`
              : (nq.figureSvg ? `<div class="pq-teacher-key"><div class="pq-key-svg"><b>📐 標準作圖解答對照：</b><div class="d4-svg-wrap">${nq.figureSvg}</div></div></div>` : '')}
          </div>
        `;
      }

      const optionsHtml = nq.hasOptions ? `
        <div class="pq-options">
          ${nq.options.map(opt => `<div><b>(${opt.key})</b> ${opt.html}</div>`).join('')}
        </div>
      ` : '';

      const teacherKeyHtml = isTeacher ? buildItemTeacherKeyHtml(nq, nq.figureSvg) : '';

      return `
        <div class="pq ${isTeacher ? 'pq-teacher-item' : ''}" data-qid="${escHtml(nq.id)}">
          <div class="pq-title">
            <span class="pq-no">${idx + 1}.</span>
            <div style="flex: 1">${nq.questionHtml}</div>
          </div>
          ${figHtml}
          ${optionsHtml}
          ${!isTeacher ? `<div class="work-grid ${workClass}" title="5mm 手寫草稿格"></div><div class="pq-ans">答：<i></i></div>` : teacherKeyHtml}
        </div>
      `;
    }).join('');

    const badgeTitle = isTeacher ? `${mainTitle} 【🔑 家長詳解卷】` : mainTitle;
    return `
      <article class="paper ${isTeacher ? 'paper-teacher' : 'paper-student'}" data-print-mode="${printMode}">
        <header class="paper-head">
          <div>
            <h2>${escHtml(badgeTitle)}</h2>
            <div class="sub">${isTeacher ? `教師與家長專用解答本 · 共 ${selectedQuestions.length} 題（含線段圖、直式步驟與盲點診斷）` : '得分：________　作答時間：___ 分 ___ 秒'}</div>
            <div class="paper-fields">
              <span>班級：<i></i></span>
              <span>座號：<i></i></span>
              <span>姓名：<i style="font-style: normal; font-weight: 800; text-align: center; padding: 0 4px;">${escHtml(curUser.name)}</i></span>
              <span>日期：<i></i></span>
            </div>
          </div>
          <div class="paper-qr">
            ${qrSvg}
            <div>📱 掃碼線上對答案 (${escHtml(curUser.name)}${hasErrorBook ? ' · 錯題消滅' : ''})</div>
          </div>
        </header>

        <section class="paper-body">
          ${questionsHtml}
        </section>

        <footer class="paper-foot">
          五上數學特訓 · ${isTeacher ? '家長指導備忘：引導孩子先畫線段圖定出基準量（1 份）再列式' : '題目完成後請掃描右上角 QR Code 進行即時對答案與思路診斷'}
        </footer>
      </article>
    `;
  }

  function computeCloudActivityCount(snap) {
    if (!snap || typeof snap !== 'object') return 0;
    const histLen = Array.isArray(snap.fullHistory) ? snap.fullHistory.length : 0;
    const errBookLen = Array.isArray(snap.errorBook) ? snap.errorBook.length : 0;
    const okKeys = snap.successCounts && typeof snap.successCounts === 'object' ? Object.keys(snap.successCounts).length : 0;
    const errKeys = snap.errorCounts && typeof snap.errorCounts === 'object' ? Object.keys(snap.errorCounts).length : 0;
    const slowKeys = snap.slowCounts && typeof snap.slowCounts === 'object' ? Object.keys(snap.slowCounts).length : 0;
    return histLen + errBookLen + okKeys + errKeys + slowKeys;
  }

  function clonePlainObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return {};
    return Object.assign({}, obj);
  }

  /**
   * 建構純淨雲端同步 Payload（嚴格剔除本機暫存 arenaRounds / arenaFilter / printSelectionIds）
   */
  function buildCloudPayload(stateObj, opts) {
    const s = stateObj || {};
    const o = opts || {};
    const payload = {
      userId: o.userId || s.currentUser || 'hugo',
      updatedAt: Number(o.updatedAt != null ? o.updatedAt : s.updatedAt) || Date.now(),
      errorBook: Array.isArray(s.errorBook) ? [...s.errorBook] : [],
      errorCounts: clonePlainObject(s.errorCounts),
      successCounts: clonePlainObject(s.successCounts),
      slowCounts: clonePlainObject(s.slowCounts),
      fullHistory: Array.isArray(s.fullHistory) ? s.fullHistory.map(h => Object.assign({}, h)) : [],
      selectedBatches: Array.isArray(s.selectedBatches) && s.selectedBatches.length > 0
        ? [...s.selectedBatches]
        : ['課本原型題', '奧數天梯', '純腦力體操', '段考真題'],
      unitProgress: clonePlainObject(s.unitProgress),
    };
    const backupRef = s.legacyMigrationBackup || s.u05LegacyBackup;
    if (backupRef && typeof backupRef === 'object') {
      payload.u05LegacyBackup = JSON.parse(JSON.stringify(backupRef));
    }
    if (o.resetAt) {
      payload.resetAt = Number(o.resetAt) || payload.updatedAt;
    }
    return payload;
  }

  /**
   * 清洗並自動遷移雲端下載的帳號資料（含舊 u05_* ID 無損轉移）
   */
  function sanitizeAndMigrateCloudUser(cloudData, questionBank) {
    if (!cloudData || typeof cloudData !== 'object') {
      return { data: null, migratedCount: 0 };
    }
    const clean = {
      userId: cloudData.userId || '',
      updatedAt: Number(cloudData.updatedAt) || 0,
      resetAt: Number(cloudData.resetAt) || 0,
      errorBook: Array.isArray(cloudData.errorBook) ? [...cloudData.errorBook] : [],
      errorCounts: clonePlainObject(cloudData.errorCounts),
      successCounts: clonePlainObject(cloudData.successCounts),
      slowCounts: clonePlainObject(cloudData.slowCounts),
      fullHistory: Array.isArray(cloudData.fullHistory) ? cloudData.fullHistory.map(h => Object.assign({}, h)) : [],
      selectedBatches: Array.isArray(cloudData.selectedBatches) && cloudData.selectedBatches.length > 0
        ? [...cloudData.selectedBatches]
        : null,
      unitProgress: clonePlainObject(cloudData.unitProgress),
      u05LegacyBackup: cloudData.u05LegacyBackup && typeof cloudData.u05LegacyBackup === 'object'
        ? JSON.parse(JSON.stringify(cloudData.u05LegacyBackup))
        : null,
    };
    const mig = migrateLegacyIdsInState(clean, questionBank || []);
    return { data: clean, migratedCount: mig.migratedCount || 0 };
  }

  /**
   * 雲端同步仲裁守衛：
   * 1. 空本機裝置絕對禁止覆蓋已populated雲端（即便本機不小心產生新時間戳）
   * 2. 支援測試帳號遠端 resetAt 同步歸零
   * 3. 兩邊皆有紀錄時依較新時間戳決定 pull / push / noop
   */
  function decideCloudSyncAction(localSnap, cloudSnap) {
    const localActivity = computeCloudActivityCount(localSnap);
    const localUpdated = Number(localSnap && localSnap.updatedAt) || 0;

    if (!cloudSnap || typeof cloudSnap !== 'object') {
      return localActivity > 0
        ? { action: 'push', reason: 'init_cloud' }
        : { action: 'noop', reason: 'both_empty' };
    }

    const cloudActivity = computeCloudActivityCount(cloudSnap);
    const cloudUpdated = Number(cloudSnap.updatedAt) || 0;
    const cloudResetAt = Number(cloudSnap.resetAt) || 0;

    if (localActivity === 0 && cloudActivity > 0) {
      return { action: 'pull', reason: 'guard_empty_local' };
    }
    if (cloudActivity === 0 && localActivity > 0 && cloudResetAt > localUpdated) {
      return { action: 'pull', reason: 'remote_reset' };
    }
    if (localActivity === 0 && cloudActivity === 0) {
      return { action: 'noop', reason: 'both_empty' };
    }
    if (cloudActivity === 0 && localActivity > 0) {
      return { action: 'push', reason: 'local_populated_cloud_empty' };
    }
    if (cloudUpdated > localUpdated) {
      return { action: 'pull', reason: 'cloud_newer' };
    }
    if (localUpdated > cloudUpdated) {
      return { action: 'push', reason: 'local_newer' };
    }
    return { action: 'noop', reason: 'in_sync' };
  }

  const api = {
    TRAP_LABEL_MAP,
    getTrapLabel,
    matchesUnitFilter,
    getDifficultyBand,
    normalizeQuestion,
    buildLegacyIdMap,
    migrateLegacyIdsInState,
    filterArenaPool,
    getCascadeStats,
    renderArenaHtml,
    buildPaperSheetHtml,
    computeCloudActivityCount,
    buildCloudPayload,
    sanitizeAndMigrateCloudUser,
    decideCloudSyncAction,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    root.MathArena = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
