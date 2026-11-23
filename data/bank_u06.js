// U06 4D 滿血題庫分片（共 60 題）
(function (root) {
  const DATA = [
  {
    "id": "U06-S1-B-001",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-1",
    "sectionName": "異分母分數的加法",
    "category": "異分母真分數通分相加",
    "source": "康軒五上 6-1 原型練習",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "計算「1/3 ＋ 1/4 ＝ （ ）」，答案是多少？",
    "options": [
      {
        "key": "A",
        "text": "2/7",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "B",
        "text": "7/12",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "2/12",
        "trapCode": "U06_FORGET_SCALE_NUM"
      },
      {
        "key": "D",
        "text": "5/12",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否理解異分母分數相加必須先通分，再將同分母的分子相加。",
      "steps": [
        {
          "type": "text",
          "text": "3 和 4 的最小公倍數是 12，先把兩個分數都擴分成分母為 12 的等值分數。"
        },
        {
          "type": "svg",
          "caption": "把 1/3 擴分成 4/12，把 1/4 擴分成 3/12，合起來是 7/12",
          "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4\" y=\"4\" width=\"352\" height=\"142\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/><text x=\"16\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">1/3</text><rect x=\"58\" y=\"20\" width=\"240\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"58\" y=\"20\" width=\"80\" height=\"22\" rx=\"4\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><line x1=\"138\" y1=\"20\" x2=\"138\" y2=\"42\" stroke=\"#64748b\" stroke-dasharray=\"3 2\"/><line x1=\"218\" y1=\"20\" x2=\"218\" y2=\"42\" stroke=\"#64748b\" stroke-dasharray=\"3 2\"/><text x=\"308\" y=\"36\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">＝ 4/12</text><text x=\"16\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">1/4</text><rect x=\"58\" y=\"60\" width=\"240\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"58\" y=\"60\" width=\"60\" height=\"22\" rx=\"4\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.4\"/><line x1=\"118\" y1=\"60\" x2=\"118\" y2=\"82\" stroke=\"#64748b\" stroke-dasharray=\"3 2\"/><line x1=\"178\" y1=\"60\" x2=\"178\" y2=\"82\" stroke=\"#64748b\" stroke-dasharray=\"3 2\"/><line x1=\"238\" y1=\"60\" x2=\"238\" y2=\"82\" stroke=\"#64748b\" stroke-dasharray=\"3 2\"/><text x=\"308\" y=\"76\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">＝ 3/12</text><text x=\"16\" y=\"122\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">合計</text><rect x=\"58\" y=\"106\" width=\"240\" height=\"24\" rx=\"4\" fill=\"#ffffff\" stroke=\"#64748b\"/><rect x=\"58\" y=\"106\" width=\"80\" height=\"24\" fill=\"#bfdbfe\" stroke=\"#2563eb\"/><rect x=\"138\" y=\"106\" width=\"60\" height=\"24\" fill=\"#fde68a\" stroke=\"#d97706\"/><text x=\"308\" y=\"123\" font-size=\"12\" font-weight=\"800\" fill=\"#0f766e\">＝ 7/12</text></svg>"
        },
        {
          "type": "eq",
          "expr": "1/3 ＋ 1/4 ＝ 4/12 ＋ 3/12 ＝ 7/12"
        },
        {
          "type": "answer",
          "text": "答：7/12"
        }
      ],
      "distractorAnalysis": {
        "A": "【分子分母直接相加】沒有先通分，直接把分子 1 ＋ 1 ＝ 2、分母 3 ＋ 4 ＝ 7 寫成 2/7。",
        "C": "【通分忘記乘分子】分母通分成 12 了，但分子 1 和 1 都忘了乘以擴分倍數，直接算成 2/12。",
        "D": "【分子擴分或加法粗心】通分後把 4 ＋ 3 誤算成 5，或把其中一個分子算少 2，寫成 5/12。"
      },
      "figureNote": "把整條都平分成 12 小格後，1/3 佔 4 小格、1/4 佔 3 小格，合起來共 7 小格。",
      "insight": "異分母分數每一份的大小不一樣，一定要先通分換成「一樣大的小份」才能相加！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "異分母加法步驟：找最小公倍數 ➔ 分子分母同乘擴分 ➔ 分母不變、分子相加"
      ],
      "conceptCompare": "【擴分 vs 分子分母同加】擴分時分子和分母都要「乘以相同的數」，絕對不能上下直接相加。",
      "examVariations": "課本與段考常把分子改成非 1 的真分數，例如 2/3 ＋ 1/4 或 2/5 ＋ 1/3。"
    },
    "check": {
      "expr": "1/3 + 1/4",
      "expect": "7/12"
    }
  },
  {
    "id": "U06-S1-B-002",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-1",
    "sectionName": "異分母分數的加法",
    "category": "倍數分母加法與約分",
    "source": "康軒五上 6-1 原型練習",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "請將異分母分數 1/6 與 1/2 通分相加後約分成最簡分數，答案是多少？",
    "options": [
      {
        "key": "A",
        "text": "2/8",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "B",
        "text": "4/6",
        "trapCode": "U06_UNREDUCED_FRAC"
      },
      {
        "key": "C",
        "text": "2/3",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "2/6",
        "trapCode": "U06_FORGET_SCALE_NUM"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗分母呈倍數關係時的通分，以及最後將結果約成最簡分數的能力。",
      "steps": [
        {
          "type": "text",
          "text": "6 是 2 的倍數，直接用 6 當公分母：把 1/2 分子分母同乘 3，擴分成 3/6。"
        },
        {
          "type": "svg",
          "caption": "1/6 加上 3/6 共 4/6，再兩格合成一大格可約分為 2/3",
          "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4\" y=\"4\" width=\"352\" height=\"142\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/><text x=\"14\" y=\"42\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">6等分</text><rect x=\"64\" y=\"24\" width=\"240\" height=\"28\" rx=\"4\" fill=\"#ffffff\" stroke=\"#64748b\"/><rect x=\"64\" y=\"24\" width=\"40\" height=\"28\" fill=\"#a7f3d0\" stroke=\"#059669\" stroke-width=\"1.4\"/><rect x=\"104\" y=\"24\" width=\"120\" height=\"28\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><line x1=\"144\" y1=\"24\" x2=\"144\" y2=\"52\" stroke=\"#64748b\" stroke-dasharray=\"3 2\"/><line x1=\"184\" y1=\"24\" x2=\"184\" y2=\"52\" stroke=\"#64748b\" stroke-dasharray=\"3 2\"/><line x1=\"264\" y1=\"24\" x2=\"264\" y2=\"52\" stroke=\"#64748b\" stroke-dasharray=\"3 2\"/><text x=\"84\" y=\"43\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\">1/6</text><text x=\"164\" y=\"43\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\">3/6 (＝1/2)</text><text x=\"312\" y=\"43\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">4/6</text><text x=\"184\" y=\"76\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#4f46e5\">↓ 分子分母同除以 2 約分</text><text x=\"14\" y=\"114\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">3等分</text><rect x=\"64\" y=\"96\" width=\"240\" height=\"28\" rx=\"4\" fill=\"#ffffff\" stroke=\"#64748b\"/><rect x=\"64\" y=\"96\" width=\"160\" height=\"28\" fill=\"#c7d2fe\" stroke=\"#4f46e5\" stroke-width=\"1.5\"/><line x1=\"144\" y1=\"96\" x2=\"144\" y2=\"124\" stroke=\"#4f46e5\" stroke-dasharray=\"3 2\"/><line x1=\"224\" y1=\"96\" x2=\"224\" y2=\"124\" stroke=\"#64748b\" stroke-dasharray=\"3 2\"/><text x=\"144\" y=\"115\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#312e81\">2/3</text><text x=\"312\" y=\"115\" font-size=\"12\" font-weight=\"800\" fill=\"#4f46e5\">最簡</text></svg>"
        },
        {
          "type": "eq",
          "expr": "1/6 ＋ 1/2 ＝ 1/6 ＋ 3/6 ＝ 4/6 ＝ 2/3"
        },
        {
          "type": "answer",
          "text": "答：2/3"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記約分】算出 4/6 之後沒有再把分子分母同除以 2，不符合最簡分數要求。",
        "D": "【通分忘記乘分子】把 1/2 的分母乘 3 變成 6，卻忘了把分子 1 也乘 3，誤寫成 1/6 ＋ 1/6 ＝ 2/6。",
        "A": "【分子分母直接相加】沒有通分就把分子 1 ＋ 1、分母 6 ＋ 2 直接相加得到 2/8。"
      },
      "figureNote": "上圖的 4 個小格合起來剛好等於下圖的 2 個大格，所以 4/6 和 2/3 一樣長。",
      "insight": "當一個分母是另一個分母的倍數時，直接用較大的分母當公分母最快，算完記得檢查能不能約分！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "分母呈倍數關係：直接以較大分母作公分母",
        "題目要求「最簡分數」時，分子分母同除以最大公因數"
      ],
      "conceptCompare": "【4/6 與 2/3 的差異】數值相等，但題目指定「最簡分數」時必須寫 2/3 才算完成。",
      "examVariations": "段考常考 1/4 ＋ 1/12 或 3/8 ＋ 1/4 這類分母成倍數且需約分的題目。"
    },
    "check": {
      "expr": "1/6 + 1/2",
      "expect": "2/3"
    }
  },
  {
    "id": "U06-S1-B-003",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-1",
    "sectionName": "異分母分數的加法",
    "category": "和超過 1 的異分母加法",
    "source": "康軒五上 6-1 原型練習",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "計算「3/4 ＋ 2/3 ＝ （ ）」，結果寫成帶分數是多少？",
    "options": [
      {
        "key": "A",
        "text": "1 5/12",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "5/7",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "C",
        "text": "17/12",
        "trapCode": "U06_IMPROPER_NOT_MIXED"
      },
      {
        "key": "D",
        "text": "1 1/12",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗真分數相加超過 1 時，通分後能把假分數正確換算成帶分數。",
      "steps": [
        {
          "type": "text",
          "text": "4 和 3 的最小公倍數是 12，先把兩個分數通分："
        },
        {
          "type": "eq",
          "expr": "3/4 ＋ 2/3 ＝ 9/12 ＋ 8/12 ＝ 17/12"
        },
        {
          "type": "text",
          "text": "17 ÷ 12 ＝ 1 … 5，把假分數 17/12 換成帶分數 1 5/12。"
        },
        {
          "type": "answer",
          "text": "答：1 5/12"
        }
      ],
      "distractorAnalysis": {
        "B": "【分子分母直接相加】沒有通分，誤算成 (3 ＋ 2) ÷ (4 ＋ 3) 式的上下相加得到 5/7。",
        "D": "【計算粗心】把 9 ＋ 8 誤算成 13，或假分數換帶分數時把餘數 5 寫錯成 1。",
        "C": "【假分數未換成帶分數】通分相加算出 17/12 正確，但題目要求寫成帶分數卻沒有轉換。"
      },
      "insight": "兩個真分數相加也可能超過 1，題目要求寫帶分數時，別忘了把「分子 ÷ 分母」的商當整數、餘數當分子！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "假分數換帶分數：分子 ÷ 分母 ＝ 整數 … 餘數（新分子）"
      ],
      "conceptCompare": "【帶分數 vs 假分數】選項同時出現 17/12 與 1 5/12 時，看清楚題目有沒有要求寫成「帶分數」。",
      "examVariations": "常改為應用題「做蛋糕用 3/4 公斤麵粉、做餅乾用 2/3 公斤，共用幾公斤？」。"
    },
    "check": {
      "expr": "3/4 + 2/3",
      "expect": "1 5/12"
    }
  },
  {
    "id": "U06-S1-B-004",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-1",
    "sectionName": "異分母分數的加法",
    "category": "非互質分母尋找最小公倍數相加",
    "source": "康軒五上 6-1 原型練習",
    "level": 1,
    "difficulty": 1,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一瓶牛奶，哥哥喝了 1/6 公升，妹妹喝了 3/8 公升，兩人一共喝了多少公升？（答案用最簡分數表示）",
    "options": [
      {
        "key": "A",
        "text": "4/14 公升",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "B",
        "text": "4/24 公升",
        "trapCode": "U06_FORGET_SCALE_NUM"
      },
      {
        "key": "C",
        "text": "13/24 公升",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "11/24 公升",
        "trapCode": "U06_WRONG_LCM"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗遇到有共同因數的分母（6 和 8）時，能否找出最小公倍數 24 並正確擴分相加。",
      "steps": [
        {
          "type": "text",
          "text": "6 和 8 的最小公倍數是 24。把 1/6 分子分母同乘 4 得 4/24；把 3/8 分子分母同乘 3 得 9/24。"
        },
        {
          "type": "eq",
          "expr": "1/6 ＋ 3/8 ＝ 4/24 ＋ 9/24 ＝ 13/24",
          "unit": "公升"
        },
        {
          "type": "answer",
          "text": "答：13/24 公升"
        }
      ],
      "distractorAnalysis": {
        "A": "【分子分母直接相加】直接把 1 ＋ 3 ＝ 4、6 ＋ 8 ＝ 14，寫成錯誤分數 4/14。",
        "B": "【通分忘記乘分子】分母通分成 24 後，沒有幫分子同乘倍數，直接算成 (1 ＋ 3) 份共 4/24。",
        "D": "【擴分倍數算錯】把 6 變成 24 應該乘 4，卻誤以為乘 2 把 1/6 算成 2/24，加上 9/24 得到 11/24。"
      },
      "insight": "找最小公倍數 24 比直接用 6 × 8 ＝ 48 更省力，且擴分時要盯緊「分母乘幾，分子就乘幾」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "非互質分母通分：先找最小公倍數，如 6 與 8 的最小公倍數是 24"
      ],
      "conceptCompare": "【用 24 當公分母 vs 用 48 當公分母】用 48 也能算（8/48 ＋ 18/48 ＝ 26/48），但最後必須再約分才能得到 13/24。",
      "examVariations": "把「公升」換成「公斤」或「公尺」，並將分數改成 5/6 ＋ 5/8 等進位題。"
    },
    "check": {
      "expr": "1/6 + 3/8",
      "expect": "13/24"
    }
  },
  {
    "id": "U06-S1-B-005",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-1",
    "sectionName": "異分母分數的加法",
    "category": "帶分數異分母加法",
    "source": "康軒五上 6-1 原型練習",
    "level": 1,
    "difficulty": 1,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "把 1 2/5 和 2 1/2 兩個帶分數加起來，總和會等於哪一個數？",
    "options": [
      {
        "key": "A",
        "text": "3 3/7",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "B",
        "text": "3 7/10",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "3 3/10",
        "trapCode": "U06_FORGET_SCALE_NUM"
      },
      {
        "key": "D",
        "text": "3 9/10",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗帶分數加法：整數與整數相加，異分母真分數通分後再相加。",
      "steps": [
        {
          "type": "text",
          "text": "整數部分先相加（1 ＋ 2 ＝ 3）；分數部分 5 和 2 的公分母是 10，把 2/5 換成 4/10、1/2 換成 5/10。"
        },
        {
          "type": "eq",
          "expr": "1 2/5 ＋ 2 1/2 ＝ 1 4/10 ＋ 2 5/10 ＝ 3 9/10"
        },
        {
          "type": "answer",
          "text": "答：3 9/10"
        }
      ],
      "distractorAnalysis": {
        "A": "【分數分子分母直接相加】整數 1 ＋ 2 ＝ 3 算對，但分數部分直接寫成 (2 ＋ 1) 與 (5 ＋ 2) 的組合 3/7。",
        "C": "【通分忘記乘分子】把分母都換成 10 了，分子卻沒擴分，直接把 2 ＋ 1 ＝ 3 寫成 3 3/10。",
        "B": "【擴分計算粗心】把 2/5 誤擴分為 2/10（忘了分子乘 2），加上 5/10 得到 3 7/10。"
      },
      "insight": "帶分數相加時「整數對整數、分數對分數」，通分擴分只改變分數部分，整數不會跟著乘倍數！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "帶分數加法：整數相加 ＋ （通分後的分數相加）"
      ],
      "conceptCompare": "【擴分整數不變】把 1 2/5 擴分成 1 4/10 時，前面的整數「1」不能乘以 2！",
      "examVariations": "分數部分和超過 1 的進位帶分數加法，例如 1 4/5 ＋ 2 1/2 ＝ 4 3/10。"
    },
    "check": {
      "expr": "1 2/5 + 2 1/2",
      "expect": "3 9/10"
    }
  },
  {
    "id": "U06-S2-B-006",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-2",
    "sectionName": "異分母分數的減法",
    "category": "異分母真分數通分相減",
    "source": "康軒五上 6-2 原型練習",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "請在分數算式 7/8 － 1/3 求出正確差值，化為分數後是下列何者？",
    "options": [
      {
        "key": "A",
        "text": "6/5",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "B",
        "text": "6/24",
        "trapCode": "U06_FORGET_SCALE_NUM"
      },
      {
        "key": "C",
        "text": "15/24",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "13/24",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗異分母真分數相減時，先通分換成同分母，再將分子相減。",
      "steps": [
        {
          "type": "text",
          "text": "8 和 3 的最小公倍數是 24，把 7/8 擴分成 21/24，把 1/3 擴分成 8/24。"
        },
        {
          "type": "svg",
          "caption": "21/24 減掉 8/24，相差 13/24",
          "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4\" y=\"4\" width=\"352\" height=\"142\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/><text x=\"16\" y=\"38\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">7/8</text><rect x=\"58\" y=\"22\" width=\"240\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"58\" y=\"22\" width=\"210\" height=\"22\" rx=\"4\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><text x=\"306\" y=\"38\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">21/24</text><text x=\"16\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">1/3</text><rect x=\"58\" y=\"60\" width=\"240\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"58\" y=\"60\" width=\"80\" height=\"22\" rx=\"4\" fill=\"#fecaca\" stroke=\"#dc2626\" stroke-width=\"1.4\"/><text x=\"306\" y=\"76\" font-size=\"12\" font-weight=\"700\" fill=\"#b91c1c\">8/24</text><line x1=\"138\" y1=\"46\" x2=\"138\" y2=\"102\" stroke=\"#0f766e\" stroke-dasharray=\"4 2\" stroke-width=\"1.3\"/><line x1=\"268\" y1=\"46\" x2=\"268\" y2=\"102\" stroke=\"#0f766e\" stroke-dasharray=\"4 2\" stroke-width=\"1.3\"/><path d=\"M 138 102 L 138 110 L 268 110 L 268 102\" fill=\"none\" stroke=\"#0f766e\" stroke-width=\"2\"/><text x=\"203\" y=\"130\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#0f766e\">相差 13/24</text></svg>"
        },
        {
          "type": "eq",
          "expr": "7/8 − 1/3 ＝ 21/24 − 8/24 ＝ 13/24"
        },
        {
          "type": "answer",
          "text": "答：13/24"
        }
      ],
      "distractorAnalysis": {
        "A": "【分子分母直接相減】沒有通分，誤把分子 7 − 1 ＝ 6、分母 8 − 3 ＝ 5，寫成假分數 6/5。",
        "B": "【通分忘記乘分子】分母都換成 24 了，卻直接拿原分子 7 − 1 ＝ 6，寫成 6/24。",
        "C": "【擴分計算粗心】把 1/3 擴分成公分母 24 時誤算成 6/24，算成 21/24 − 6/24 ＝ 15/24。"
      },
      "figureNote": "對齊同一長度後，7/8 等於 21 格、1/3 等於 8 格，多出來的部分正好是 13 格（13/24）。",
      "insight": "分數減法跟加法一樣，分母不同就不能直接相減，要先通分成同分母！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "異分母減法：通分換成同分母 ➔ 分母不變、分子相減"
      ],
      "conceptCompare": "【真分數減真分數】兩個真分數相減，結果一定小於 1；若算成 6/5 這種大於 1 的假分數，馬上就知道算錯了。",
      "examVariations": "題目有時會問「5/6 比 3/8 多多少？」，列式同樣是 5/6 − 3/8。"
    },
    "check": {
      "expr": "7/8 - 1/3",
      "expect": "13/24"
    }
  },
  {
    "id": "U06-S2-B-007",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-2",
    "sectionName": "異分母分數的減法",
    "category": "倍數分母減法與約分",
    "source": "康軒五上 6-2 原型練習",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "請問 5/6 比 1/12 多出多少，化簡為最簡分數後的結果為何？",
    "options": [
      {
        "key": "A",
        "text": "3/4",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "9/12",
        "trapCode": "U06_UNREDUCED_FRAC"
      },
      {
        "key": "C",
        "text": "4/12",
        "trapCode": "U06_FORGET_SCALE_NUM"
      },
      {
        "key": "D",
        "text": "7/12",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗倍數關係分母的減法通分，以及將答案化為最簡分數。",
      "steps": [
        {
          "type": "text",
          "text": "12 是 6 的 2 倍，把 5/6 分子分母同乘 2 擴分成 10/12。"
        },
        {
          "type": "eq",
          "expr": "5/6 − 1/12 ＝ 10/12 − 1/12 ＝ 9/12 ＝ 3/4"
        },
        {
          "type": "answer",
          "text": "答：3/4"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記約分】算出 9/12 之後沒有把分子分母同除以 3 約分成 3/4。",
        "C": "【通分忘記乘分子】將分母 6 乘 2 變成 12，分子 5 卻忘了乘 2，直接算成 5/12 − 1/12 ＝ 4/12。",
        "D": "【擴分計算粗心】把 5/6 擴分時誤將分子算成 8，寫成 8/12 − 1/12 ＝ 7/12。"
      },
      "insight": "9 和 12 都是 3 的倍數，算完看到分子分母還有公因數時，要順手約分到底！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "減法算完也要檢查分子分母能否同時除以 2、3、5 等公因數約分"
      ],
      "conceptCompare": "【約分檢查法】9 ÷ 3 ＝ 3、12 ÷ 3 ＝ 4，3 和 4 互質，所以 3/4 是最簡分數。",
      "examVariations": "段考常考 3/4 − 5/12 ＝ 4/12 ＝ 1/3 或 7/8 − 1/4 ＝ 5/8。"
    },
    "check": {
      "expr": "5/6 - 1/12",
      "expect": "3/4"
    }
  },
  {
    "id": "U06-S2-B-008",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-2",
    "sectionName": "異分母分數的減法",
    "category": "整數減帶分數的借位減法",
    "source": "康軒五上 6-2 原型練習",
    "level": 2,
    "difficulty": 2,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "有一條彩帶長 3 公尺，做勞作用去 1 2/5 公尺，還剩下幾公尺？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "原來彩帶 (3 公尺)",
          "units": 15,
          "role": "base"
        },
        {
          "label": "用去 (1 2/5 公尺)",
          "units": 7,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "每 1 份是 1/5 公尺，剩下 8 份 ＝ 1 3/5 公尺"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "1 3/5 公尺",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "2 2/5 公尺",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "C",
        "text": "1 8/5 公尺",
        "trapCode": "U06_BORROW_MISCALC"
      },
      {
        "key": "D",
        "text": "2 3/5 公尺",
        "trapCode": "U06_BORROW_MISCALC"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗整數減帶分數時，能否向整數借 1 換成「分母分之分母」（5/5）再相減。",
      "steps": [
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "整數 3 沒有分數部分可以減 2/5，向 3 借 1 換成 5/5，把 3 改寫成 2 5/5。"
        },
        {
          "type": "eq",
          "expr": "3 − 1 2/5 ＝ 2 5/5 − 1 2/5 ＝ 1 3/5",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：1 3/5 公尺"
        }
      ],
      "distractorAnalysis": {
        "B": "【直接照抄分數】整數算 3 − 1 ＝ 2 之後，沒有借位就誤把後面的分數 2/5 直接抄下來。",
        "C": "【誤借成 10 份】借 1 卻像整數直式一樣誤以為借來 10，寫成 2 10/5 − 1 2/5 ＝ 1 8/5。",
        "D": "【借 1 忘記減整數】向 3 借 1 換成 5/5 後，整數卻忘記減掉 1，仍用 3 − 1 ＝ 2 寫成 2 3/5。"
      },
      "figureNote": "把 1 公尺分成 5 小份，3 公尺共有 15 份；用掉 1 2/5 公尺就是用掉 7 份，還剩 8 份，也就是 1 3/5 公尺。",
      "insight": "整數減分數時，借來的「1」要看減數的分母是幾，就換成「幾分之幾」（這題換成 5/5），絕對不是 10/5！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "整數借 1 規則：3 ＝ 2 5/5（借出的 1 等於 5/5）"
      ],
      "conceptCompare": "【借 1 換 5/5 vs 借 1 換 10】整數十進位借 1 當 10，但分數的世界裡借 1 要換成「分母分之分母」。",
      "examVariations": "段考常考 5 − 2 3/8 或 4 − 7/9 這類整數減分數的計算。"
    },
    "check": {
      "expr": "3 - 1 2/5",
      "expect": "1 3/5"
    }
  },
  {
    "id": "U06-S2-B-009",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-2",
    "sectionName": "異分母分數的減法",
    "category": "帶分數減異分母真分數",
    "source": "康軒五上 6-2 原型練習",
    "level": 2,
    "difficulty": 2,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "將帶分數 2 5/6 扣掉真分數 1/4，所得的正確結果是下面哪一項？",
    "options": [
      {
        "key": "A",
        "text": "2 4/12",
        "trapCode": "U06_FORGET_SCALE_NUM"
      },
      {
        "key": "B",
        "text": "2 2/3",
        "trapCode": "U06_WRONG_LCM"
      },
      {
        "key": "C",
        "text": "2 7/12",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "2 17/24",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗帶分數減去異分母真分數（夠減不需借位）的通分計算。",
      "steps": [
        {
          "type": "text",
          "text": "先看分數部分：6 和 4 的最小公倍數是 12。把 5/6 擴分成 10/12，把 1/4 擴分成 3/12。"
        },
        {
          "type": "text",
          "text": "10/12 夠減 3/12，整數 2 保持不變："
        },
        {
          "type": "eq",
          "expr": "2 5/6 − 1/4 ＝ 2 10/12 − 3/12 ＝ 2 7/12"
        },
        {
          "type": "answer",
          "text": "答：2 7/12"
        }
      ],
      "distractorAnalysis": {
        "A": "【通分忘記乘分子】分母都換成 12 了，卻忘了幫分子擴分，直接把 5 − 1 ＝ 4 寫成 2 4/12。",
        "D": "【通分成 24 後計算粗心】用 24 當公分母時把 1/4 錯寫成 3/24，算成 2 20/24 − 3/24 ＝ 2 17/24。",
        "B": "【擴分倍數找錯】誤把 1/4 擴分成 2/12，算成 2 10/12 − 2/12 ＝ 2 8/12 ＝ 2 2/3。"
      },
      "insight": "帶分數減法先通分再比較分子大小：夠減就直接減，不用急著把帶分數全部化成假分數！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "帶分數減分數：先將分數通分，夠減時整數照抄、分子相減"
      ],
      "conceptCompare": "【先通分再判斷借位】不要一開始就向整數借 1，通分後發現 10/12 ＞ 3/12 就直接減即可。",
      "examVariations": "若改為 2 1/6 − 1/4，通分後 2/12 不夠減 3/12，才需要向 2 借 1。"
    },
    "check": {
      "expr": "2 5/6 - 1/4",
      "expect": "2 7/12"
    }
  },
  {
    "id": "U06-S2-B-010",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-2",
    "sectionName": "異分母分數的減法",
    "category": "帶分數借位減去異分母帶分數",
    "source": "康軒五上 6-2 原型練習",
    "level": 2,
    "difficulty": 2,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "做帶分數減法運算時，若將 3 1/4 減去 1 2/3，最後得到的數是多少？",
    "options": [
      {
        "key": "A",
        "text": "2 5/12",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "B",
        "text": "1 7/12",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "2 7/12",
        "trapCode": "U06_BORROW_MISCALC"
      },
      {
        "key": "D",
        "text": "1 11/12",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗帶分數減法遇到分數部分不夠減時，能正確向整數借 1 換成分母份再相減。",
      "steps": [
        {
          "type": "text",
          "text": "4 和 3 的最小公倍數是 12，通分後變成 3 3/12 − 1 8/12。"
        },
        {
          "type": "svg",
          "caption": "3/12 不夠減 8/12，向整數 3 借 1 換成 12/12，變成 2 15/12 再減 1 8/12",
          "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4\" y=\"4\" width=\"352\" height=\"142\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/><text x=\"18\" y=\"34\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">原本：3 3/12</text><rect x=\"125\" y=\"18\" width=\"54\" height=\"24\" rx=\"4\" fill=\"#e0e7ff\" stroke=\"#4f46e5\"/><text x=\"152\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#312e81\">2</text><rect x=\"185\" y=\"18\" width=\"68\" height=\"24\" rx=\"4\" fill=\"#fef3c7\" stroke=\"#d97706\"/><text x=\"219\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#92400e\">1 (借)</text><rect x=\"259\" y=\"18\" width=\"48\" height=\"24\" rx=\"4\" fill=\"#dbeafe\" stroke=\"#2563eb\"/><text x=\"283\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\">3/12</text><text x=\"219\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\">↓ 1 換成 12/12，和 3/12 合併</text><text x=\"18\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">借位：2 15/12</text><rect x=\"125\" y=\"80\" width=\"54\" height=\"24\" rx=\"4\" fill=\"#e0e7ff\" stroke=\"#4f46e5\"/><text x=\"152\" y=\"96\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#312e81\">2</text><rect x=\"185\" y=\"80\" width=\"122\" height=\"24\" rx=\"4\" fill=\"#d1fae5\" stroke=\"#059669\"/><text x=\"246\" y=\"96\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#065f46\">12/12 ＋ 3/12 ＝ 15/12</text><text x=\"180\" y=\"132\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#0f766e\">2 15/12 − 1 8/12 ＝ 1 7/12</text></svg>"
        },
        {
          "type": "eq",
          "expr": "3 1/4 − 1 2/3 ＝ 3 3/12 − 1 8/12 ＝ 2 15/12 − 1 8/12 ＝ 1 7/12"
        },
        {
          "type": "answer",
          "text": "答：1 7/12"
        }
      ],
      "distractorAnalysis": {
        "A": "【不夠減直接大減小】整數算 3 − 1 ＝ 2，分數 3/12 不夠減 8/12 卻直接倒過來算 8/12 − 3/12 ＝ 5/12。",
        "D": "【減法計算粗心】借位變成 2 15/12 後，誤算成 15 − 4 ＝ 11 或把 8 減錯，得出 1 11/12。",
        "C": "【借 1 忘記減整數】把 3/12 加上借來的 12/12 變成 15/12 了，但整數忘記從 3 變成 2。"
      },
      "figureNote": "向整數 3 借 1 之後，整數只剩下 2，借來的 1 變成 12/12，和原本的 3/12 合併成 15/12 就夠減了。",
      "insight": "分數部分不夠減時，絕對不能誰大就減誰！口訣：整數少 1，分子加上分母！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "借 1 速算口訣：整數減 1，新分子 ＝ 原分子 ＋ 分母"
      ],
      "conceptCompare": "【借 1 速算法 vs 化為假分數】也可把兩數全化成假分數（39/12 − 20/12 ＝ 19/12 ＝ 1 7/12），但整數太大時，借 1 法算得更快。",
      "examVariations": "段考常考 4 1/6 − 2 3/4 或「檢查算式從哪一步開始算錯」的診斷題。"
    },
    "check": {
      "expr": "3 1/4 - 1 2/3",
      "expect": "1 7/12"
    }
  },
  {
    "id": "U06-S3-B-011",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-3",
    "sectionName": "分數的加減應用",
    "category": "比多應用問題",
    "source": "康軒五上 6-3 原型練習",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一桶紅茶，爸爸倒了 1 3/4 公升，媽媽比爸爸多倒了 5/6 公升，媽媽倒了幾公升？",
    "options": [
      {
        "key": "A",
        "text": "1 8/10 公升",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "B",
        "text": "11/12 公升",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "2 7/12 公升",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "1 19/12 公升",
        "trapCode": "U06_IMPROPER_NOT_MIXED"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生讀懂「某量比基準量多多少」的加減語意，並完成異分母帶分數進位加法。",
      "steps": [
        {
          "type": "text",
          "text": "媽媽比爸爸「多倒了」5/6 公升，表示媽媽的量比較多，要用加法：爸爸的量 ＋ 多出的量。"
        },
        {
          "type": "svg",
          "caption": "媽媽比爸爸多倒 5/6 公升，兩段合起來就是媽媽倒的量",
          "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4\" y=\"4\" width=\"352\" height=\"142\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/><text x=\"16\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">爸爸</text><rect x=\"64\" y=\"24\" width=\"160\" height=\"26\" rx=\"4\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><text x=\"144\" y=\"42\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\">1 3/4 公升</text><text x=\"16\" y=\"92\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">媽媽</text><rect x=\"64\" y=\"74\" width=\"160\" height=\"26\" rx=\"4\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><text x=\"144\" y=\"92\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\">1 3/4 公升</text><rect x=\"224\" y=\"74\" width=\"80\" height=\"26\" rx=\"4\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.4\"/><text x=\"264\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#92400e\">多 5/6 公升</text><path d=\"M 64 110 L 64 118 L 304 118 L 304 110\" fill=\"none\" stroke=\"#0f766e\" stroke-width=\"2\"/><text x=\"184\" y=\"136\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#0f766e\">媽媽倒的 ＝ 1 3/4 ＋ 5/6 ＝ 2 7/12 公升</text></svg>"
        },
        {
          "type": "eq",
          "expr": "1 3/4 ＋ 5/6 ＝ 1 9/12 ＋ 10/12 ＝ 1 19/12 ＝ 2 7/12",
          "unit": "公升"
        },
        {
          "type": "answer",
          "text": "答：2 7/12 公升"
        }
      ],
      "distractorAnalysis": {
        "B": "【加減語意弄反】誤用減法 1 3/4 − 5/6 ＝ 11/12，沒注意到媽媽倒的比爸爸「多」。",
        "D": "【假分數部分未進位】算出 1 19/12 後，忘了把 19/12 ＝ 1 7/12 進位到整數 1。",
        "A": "【分子分母直接相加】整數 1 照抄，分數直接算 (3 ＋ 5) 與 (4 ＋ 6) 寫成 1 8/10。"
      },
      "figureNote": "畫線段圖比一比：媽媽的線段比爸爸還要長出 5/6 公升，所以要把兩段合起來用加法。",
      "insight": "遇到「甲比乙多」先想誰比較大：這題媽媽比較大、問媽媽，所以要加；若已知媽媽反推爸爸才用減！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "較大量 ＝ 較小量 ＋ 相差量",
        "帶分數進位：1 19/12 ＝ 1 ＋ 1 7/12 ＝ 2 7/12"
      ],
      "conceptCompare": "【順向比多 vs 逆向比多】「媽媽比爸爸多」問媽媽用加法；若改成「爸爸比媽媽多」問媽媽，則媽媽較小要用減法！",
      "examVariations": "段考常會多問一題「兩人一共倒了幾公升？」，要先算出媽媽後再加爸爸。"
    },
    "check": {
      "expr": "1 3/4 + 5/6",
      "expect": "2 7/12"
    }
  },
  {
    "id": "U06-S3-B-012",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-3",
    "sectionName": "分數的加減應用",
    "category": "逆推原來的量",
    "source": "康軒五上 6-3 原型練習",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一盒草莓，弟弟吃掉 3/8 公斤後，還剩下 1 1/6 公斤，這盒草莓原來有幾公斤？",
    "options": [
      {
        "key": "A",
        "text": "19/24 公斤",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "B",
        "text": "1 4/14 公斤",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "C",
        "text": "1 13/24 公斤",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "1 7/24 公斤",
        "trapCode": "U06_WRONG_LCM"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生不落入「吃掉就用減法」的關鍵字陷阱，理解「原來的量 ＝ 吃掉的 ＋ 剩下的」。",
      "steps": [
        {
          "type": "text",
          "text": "原本整盒草莓被分成「吃掉的」和「剩下的」兩部分，求原來有多少要用加法。"
        },
        {
          "type": "text",
          "text": "8 和 6 的最小公倍數是 24，把 3/8 擴分成 9/24，把 1 1/6 擴分成 1 4/24。"
        },
        {
          "type": "eq",
          "expr": "3/8 ＋ 1 1/6 ＝ 9/24 ＋ 1 4/24 ＝ 1 13/24",
          "unit": "公斤"
        },
        {
          "type": "answer",
          "text": "答：1 13/24 公斤"
        }
      ],
      "distractorAnalysis": {
        "A": "【關鍵字誤導用減法】看到「吃掉」就反射性地用減法 1 1/6 − 3/8 ＝ 19/24，越算越少不合理。",
        "B": "【分子分母直接相加】整數 1 照抄，分數部分直接把 (3 ＋ 1) 與 (8 ＋ 6) 相加寫成 1 4/14。",
        "D": "【擴分倍數算錯】分母換成 24 時把 3/8 誤擴分成 3/24（忘了乘 3），算成 3/24 ＋ 1 4/24 ＝ 1 7/24。"
      },
      "insight": "原有的草莓一定比剩下的 1 1/6 公斤還要重！算完檢查答案有沒有比 1 1/6 大，就能防呆。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "原有的量 ＝ 用掉（吃掉）的量 ＋ 剩下的量"
      ],
      "conceptCompare": "【求剩下 vs 求原來】已知「原來」問「剩下」用減法；已知「吃掉」和「剩下」反推「原來」要用加法。",
      "examVariations": "把「吃掉」改為「倒出、剪去、用掉」，或寫成算式填充題「□ − 3/8 ＝ 1 1/6」。"
    },
    "check": {
      "expr": "3/8 + 1 1/6",
      "expect": "1 13/24"
    }
  },
  {
    "id": "U06-S3-B-013",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-3",
    "sectionName": "分數的加減應用",
    "category": "兩步驟分數連減應用",
    "source": "康軒五上 6-3 原型練習",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "媽媽買了一桶 4 公升的葵花油，這個月炒菜用去 1 1/3 公升，炸雞塊用去 5/6 公升，這桶葵花油還剩下幾公升？",
    "options": [
      {
        "key": "A",
        "text": "1 5/6 公升",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "3 1/2 公升",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "2 5/6 公升",
        "trapCode": "U06_BORROW_MISCALC"
      },
      {
        "key": "D",
        "text": "1 1/6 公升",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗「先加總共用去多少，再用總量減去」的兩步驟分數加減應用。",
      "steps": [
        {
          "type": "text",
          "text": "先把兩次共用去的油加起來：1 1/3 擴分成 1 2/6，加上 5/6 等於 1 7/6 ＝ 2 1/6 公升。"
        },
        {
          "type": "eq",
          "expr": "1 1/3 ＋ 5/6 ＝ 1 2/6 ＋ 5/6 ＝ 1 7/6 ＝ 2 1/6",
          "unit": "公升"
        },
        {
          "type": "text",
          "text": "再用全部的 4 公升減去共用去的 2 1/6 公升（向 4 借 1 換成 6/6，4 ＝ 3 6/6）："
        },
        {
          "type": "eq",
          "expr": "4 − 2 1/6 ＝ 3 6/6 − 2 1/6 ＝ 1 5/6",
          "unit": "公升"
        },
        {
          "type": "answer",
          "text": "答：1 5/6 公升"
        }
      ],
      "distractorAnalysis": {
        "C": "【借 1 忘記減整數】計算 4 − 2 1/6 時，向 4 借 1 換成 6/6 卻忘記把 4 減 1，算出 4 − 2 ＝ 2 而得 2 5/6。",
        "D": "【加法進位計算粗心】算兩次共用去時誤算成 2 5/6，導致 4 − 2 5/6 得出 1 1/6。",
        "B": "【加減號誤植】列式算成 4 − 1 1/3 ＋ 5/6 ＝ 3 1/2，把第二次「用去」誤當成加回來。"
      },
      "insight": "連續減去兩個數，等於「減去這兩個數的和」；先合算用掉的總量再借位減一次，比較不容易連續借位出錯！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "連減性質：總量 − 用去甲 − 用去乙 ＝ 總量 − （用去甲 ＋ 用去乙）"
      ],
      "conceptCompare": "【括號的威力】4 − 1 1/3 − 5/6 要改寫成合算用去時，必須寫成 4 − （1 1/3 ＋ 5/6），括號裡要用加號。",
      "examVariations": "段考常改成「總量 − 第一次用去 ＋ 新買進來」，此時加號和減號要照順序算。"
    },
    "check": {
      "expr": "4 - 1 1/3 - 5/6",
      "expect": "1 5/6"
    }
  },
  {
    "id": "U06-S3-B-014",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-3",
    "sectionName": "分數的加減應用",
    "category": "兩步驟比較與合算應用",
    "source": "康軒五上 6-3 原型練習",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "甲繩長 2 3/5 公尺，乙繩比甲繩短 3/4 公尺，甲、乙兩條繩子合起來共長幾公尺？",
    "options": [
      {
        "key": "A",
        "text": "1 17/20 公尺",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "5 19/20 公尺",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "4 3/4 公尺",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "D",
        "text": "4 9/20 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗兩步驟應用題：先以借位減法算出乙繩長度，再把甲、乙兩繩相加。",
      "steps": [
        {
          "type": "text",
          "text": "第一步先算乙繩長（乙比甲短，用甲減 3/4）：5 和 4 的公分母是 20，2 3/5 ＝ 2 12/20，3/4 ＝ 15/20；12/20 不夠減 15/20，向整數 2 借 1 換成 20/20。"
        },
        {
          "type": "eq",
          "expr": "2 12/20 − 15/20 ＝ 1 32/20 − 15/20 ＝ 1 17/20",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第二步把甲、乙兩條繩子合起來（注意 29/20 要進位成 1 9/20）："
        },
        {
          "type": "eq",
          "expr": "2 12/20 ＋ 1 17/20 ＝ 3 29/20 ＝ 4 9/20",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：4 9/20 公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【只算一半忘了合併】只算出乙繩長 1 17/20 公尺就急著選答案，忘記題目問「合起來共長」。",
        "B": "【短誤當成長】把「乙比甲短」誤用加法算出乙長 3 7/20 公尺，再加甲繩得 5 19/20 公尺。",
        "C": "【不夠減直接大減小】算乙繩時 12/20 不夠減 15/20 卻直接 15 − 12 ＝ 3 得出乙為 2 3/20，再加甲得 4 15/20 ＝ 4 3/4。"
      },
      "insight": "兩步驟應用題最後一定回頭再讀一次題目問句：「問乙有多長」還是「問合起來有多長」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "步驟一（求乙）：乙 ＝ 甲 − 相差",
        "步驟二（求和）：總長 ＝ 甲 ＋ 乙"
      ],
      "conceptCompare": "【乙比甲短 vs 甲比乙短】看到「乙比甲短 3/4 公尺」，乙比較短所以用減；若題目說「甲比乙短 3/4 公尺」，那乙比較長反而要用加！",
      "examVariations": "段考常改成「兩條繩子重疊黏在一起，重疊處長 1/4 公尺，接起來共長幾公尺？」，要多減一次重疊長。"
    },
    "check": {
      "expr": "2 3/5 + (2 3/5 - 3/4)",
      "expect": "4 9/20"
    }
  },
  {
    "id": "U06-S3-B-015",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-3",
    "sectionName": "分數的加減應用",
    "category": "實測容量與單位量 1 的區辨",
    "source": "康軒五上 6-3 原型練習",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一瓶汽水有 1 1/2 公升，哥哥喝了 2/5 公升，妹妹喝了 3/10 公升，這瓶汽水還剩下幾公升？",
    "options": [
      {
        "key": "A",
        "text": "1 4/5 公升",
        "trapCode": "U06_BORROW_MISCALC"
      },
      {
        "key": "B",
        "text": "3/10 公升",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "C",
        "text": "1 1/5 公升",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "D",
        "text": "4/5 公升",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否能區辨「一瓶有 1 1/2 公升」的實際總量，不會誤把「一瓶」當成 1 公升去減，並完成借位減法與約分。",
      "steps": [
        {
          "type": "text",
          "text": "先把三人喝掉的分數通分成同分母 10：1 1/2 ＝ 1 5/10，2/5 ＝ 4/10，3/10 不變。"
        },
        {
          "type": "svg",
          "caption": "總量 1 5/10 公升扣掉兄妹共喝的 7/10 公升，剩下 8/10 ＝ 4/5 公升",
          "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4\" y=\"4\" width=\"352\" height=\"142\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/><text x=\"18\" y=\"34\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">整瓶 1 1/2 公升 (＝15/10)</text><rect x=\"18\" y=\"46\" width=\"300\" height=\"28\" rx=\"4\" fill=\"#e2e8f0\" stroke=\"#64748b\"/><rect x=\"18\" y=\"46\" width=\"80\" height=\"28\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.2\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\">兄 4/10</text><rect x=\"98\" y=\"46\" width=\"60\" height=\"28\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.2\"/><text x=\"128\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#92400e\">妹 3/10</text><rect x=\"158\" y=\"46\" width=\"160\" height=\"28\" fill=\"#bbf7d0\" stroke=\"#059669\" stroke-width=\"1.4\"/><text x=\"238\" y=\"65\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#065f46\">剩 8/10 公升</text><text x=\"180\" y=\"104\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">切記：這瓶是 1 1/2 公升，不是 1 公升！</text><text x=\"180\" y=\"130\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#0f766e\">1 5/10 − 7/10 ＝ 15/10 − 7/10 ＝ 8/10 ＝ 4/5 公升</text></svg>"
        },
        {
          "type": "eq",
          "expr": "1 1/2 − (2/5 ＋ 3/10) ＝ 1 5/10 − (4/10 ＋ 3/10) ＝ 15/10 − 7/10 ＝ 8/10 ＝ 4/5",
          "unit": "公升"
        },
        {
          "type": "answer",
          "text": "答：4/5 公升"
        }
      ],
      "distractorAnalysis": {
        "B": "【單位量混淆】看到「一瓶汽水」就直接用 1 去減 2/5 與 3/10，忽略題目已經寫明這瓶有 1 1/2 公升。",
        "C": "【不夠減直接大減小】1 5/10 − 7/10 時 5/10 不夠減 7/10，卻直接算 7 − 5 ＝ 2 寫成 1 2/10 ＝ 1 1/5。",
        "A": "【借 1 忘記減整數】向整數 1 借 1 換成 10/10 後忘記把 1 減掉，寫成 1 8/10 ＝ 1 4/5。"
      },
      "figureNote": "把整瓶 1 1/2 公升看成 15 個 1/10 公升，喝掉 4 個和 3 個後，還剩 8 個 1/10 公升，約分就是 4/5 公升。",
      "insight": "分數有帶單位「公升」時，總容量就是題目給的 1 1/2 公升，千萬別看到「一瓶」就自動代換成 1！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "全部容量有明寫（如 1 1/2 公升）➔ 用該容量減喝掉的公升數"
      ],
      "conceptCompare": "【帶單位的數量 vs 不帶單位的比例】「喝了 2/5 公升」是實際容量；若是「喝了一瓶的 2/5」（沒有公升），才把整瓶當 1。",
      "examVariations": "段考常考兩兄弟喝掉的分數和超過 1 公升，逼學生把「一瓶 1 1/2 公升」讀仔細。"
    },
    "check": {
      "expr": "1 1/2 - 2/5 - 3/10",
      "expect": "4/5"
    }
  },
  {
    "id": "U06-S4-B-016",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-4",
    "sectionName": "帶分數借位與通分比較",
    "category": "異分母分數通分比大小與求差",
    "source": "康軒五上 6-4 原型練習",
    "level": 4,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "甲水壺裝了 3/4 公升的水，乙水壺裝了 5/7 公升的水，哪一個水壺裝的水比較多？多幾公升？",
    "options": [
      {
        "key": "A",
        "text": "乙水壺多 1/28 公升",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "B",
        "text": "甲水壺多 2/3 公升",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "C",
        "text": "甲水壺多 1/28 公升",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "乙水壺多 2/28 公升",
        "trapCode": "U06_FORGET_SCALE_NUM"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗利用通分比較兩個異分母分數的大小，並計算兩數相差多少。",
      "steps": [
        {
          "type": "text",
          "text": "4 和 7 的最小公倍數是 28，先通分才能比較大小："
        },
        {
          "type": "svg",
          "caption": "通分後甲為 21/28 公升、乙為 20/28 公升，甲比乙多 1/28 公升",
          "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4\" y=\"4\" width=\"352\" height=\"142\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/><text x=\"16\" y=\"40\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">甲 3/4</text><rect x=\"74\" y=\"22\" width=\"224\" height=\"24\" rx=\"4\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"74\" y=\"22\" width=\"168\" height=\"24\" rx=\"4\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><text x=\"158\" y=\"39\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e40af\">21/28 公升</text><text x=\"16\" y=\"84\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">乙 5/7</text><rect x=\"74\" y=\"66\" width=\"224\" height=\"24\" rx=\"4\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"74\" y=\"66\" width=\"160\" height=\"24\" rx=\"4\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.4\"/><text x=\"154\" y=\"83\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">20/28 公升</text><line x1=\"234\" y1=\"46\" x2=\"234\" y2=\"104\" stroke=\"#0f766e\" stroke-dasharray=\"3 2\"/><line x1=\"242\" y1=\"46\" x2=\"242\" y2=\"104\" stroke=\"#0f766e\" stroke-dasharray=\"3 2\"/><text x=\"180\" y=\"128\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#0f766e\">21/28 ＞ 20/28，甲水壺多 1/28 公升</text></svg>"
        },
        {
          "type": "eq",
          "expr": "3/4 − 5/7 ＝ 21/28 − 20/28 ＝ 1/28",
          "unit": "公升"
        },
        {
          "type": "answer",
          "text": "答：甲水壺多 1/28 公升"
        }
      ],
      "distractorAnalysis": {
        "A": "【比大小判斷反了】看到 5 和 7 的數字比較大就誤以為乙水壺裝比較多，其實 21/28 ＞ 20/28。",
        "B": "【分子分母直接相減】沒有通分就直接拿分子 5 − 3 ＝ 2、分母 7 − 4 ＝ 3 寫成 2/3。",
        "D": "【通分忘記乘分子】分母改成 28 後分子沒擴分，直接比較 5 與 3 得到乙多 2/28。"
      },
      "figureNote": "分子和分母數字比較大，不代表分數比較大！換成同分母 28 後，21 格比 20 格多 1 格。",
      "insight": "比較異分母分數大小別只看數字大小！先通分成同分母，就能一眼看出誰多、多多少。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "異分母比大小：通分成同分母後比分子，分子越大分數越大",
        "相差量 ＝ 較大分數 − 較小分數"
      ],
      "conceptCompare": "【通分 vs 比較離 1 的距離】3/4 只差 1/4 到 1，5/7 差 2/7 到 1；因為 1/4 ＝ 7/28 小於 2/7 ＝ 8/28，所以 3/4 更靠近 1、比較大！",
      "examVariations": "段考常考「哪一個比較接近 1？」或四個分數通分排列順序。"
    },
    "check": {
      "expr": "3/4 - 5/7",
      "expect": "1/28"
    }
  },
  {
    "id": "U06-S4-B-017",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-4",
    "sectionName": "帶分數借位與通分比較",
    "category": "先約分再做帶分數借位減法",
    "source": "康軒五上 6-4 原型練習",
    "level": 4,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "先把式子 4 6/18 － 1 10/15 各自約分再相減，最後的結果為何？",
    "options": [
      {
        "key": "A",
        "text": "3 1/3",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "B",
        "text": "2 4/6",
        "trapCode": "U06_UNREDUCED_FRAC"
      },
      {
        "key": "C",
        "text": "3 2/3",
        "trapCode": "U06_BORROW_MISCALC"
      },
      {
        "key": "D",
        "text": "2 2/3",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗觀察到分數可先約分時，能先約成最簡分數再進行帶分數借位減法。",
      "steps": [
        {
          "type": "text",
          "text": "18 和 15 直接通分數字很大，先約分最聰明！6/18 同除以 6 ＝ 1/3，10/15 同除以 5 ＝ 2/3。"
        },
        {
          "type": "text",
          "text": "算式變成同分母的 4 1/3 − 1 2/3，1/3 不夠減 2/3，向整數 4 借 1 換成 3/3："
        },
        {
          "type": "eq",
          "expr": "4 6/18 − 1 10/15 ＝ 4 1/3 − 1 2/3 ＝ 3 4/3 − 1 2/3 ＝ 2 2/3"
        },
        {
          "type": "answer",
          "text": "答：2 2/3"
        }
      ],
      "distractorAnalysis": {
        "A": "【不夠減直接大減小】約分後變成 4 1/3 − 1 2/3，分數不夠減卻直接用 2/3 − 1/3 ＝ 1/3，算出 3 1/3。",
        "C": "【借 1 忘記減整數】借 1 換成 3/3 讓分數變成 4/3 了，整數卻忘記把 4 減 1。",
        "B": "【未約成最簡分數】若沒先徹底約分而用分母 6 計算，算出 2 4/6 後忘記再除以 2 化簡為 2 2/3。"
      },
      "insight": "看到分數分子分母數字偏大（像 6/18、10/15），先約分常常會驚喜地發現兩邊直接變成同分母！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "大數字異分母速算：先各自約分 ➔ 再通分或直接加減"
      ],
      "conceptCompare": "【先約分 vs 先通分】先找 18 和 15 的最小公倍數 90 要算 30/90 − 60/90，容易算錯；先約分立刻變成 1/3 − 2/3！",
      "examVariations": "段考常考 3 5/30 − 1 1/2 或 5 12/16 − 2 9/12 這類「約分後立刻好算」的題型。"
    },
    "check": {
      "expr": "4 6/18 - 1 10/15",
      "expect": "2 2/3"
    }
  },
  {
    "id": "U06-S4-B-018",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-4",
    "sectionName": "帶分數借位與通分比較",
    "category": "三項分數加減混合與借位",
    "source": "康軒五上 6-4 原型練習",
    "level": 4,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "依照由左而右的順序運算「4 1/4 － 1 5/6 ＋ 1/3」，最後得數是下列哪一個？",
    "options": [
      {
        "key": "A",
        "text": "2 3/4",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "2 1/12",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "3 3/4",
        "trapCode": "U06_BORROW_MISCALC"
      },
      {
        "key": "D",
        "text": "3 11/12",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗三個異分母分數由左而右的加減混合計算、帶分數借位以及最後結果約分。",
      "steps": [
        {
          "type": "text",
          "text": "4、6、3 的最小公倍數是 12，先把三個分數全部通分：4 1/4 ＝ 4 3/12，1 5/6 ＝ 1 10/12，1/3 ＝ 4/12。"
        },
        {
          "type": "text",
          "text": "沒有括號時要由左而右計算。先算 4 3/12 − 1 10/12，3/12 不夠減 10/12，向 4 借 1 換成 12/12："
        },
        {
          "type": "eq",
          "expr": "4 3/12 − 1 10/12 ＋ 4/12 ＝ 3 15/12 − 1 10/12 ＋ 4/12 ＝ 2 5/12 ＋ 4/12 ＝ 2 9/12 ＝ 2 3/4"
        },
        {
          "type": "answer",
          "text": "答：2 3/4"
        }
      ],
      "distractorAnalysis": {
        "B": "【運算順序弄錯】誤先把後兩項加起來再去減，變成 4 1/4 − (1 5/6 ＋ 1/3) ＝ 4 1/4 − 2 1/6 ＝ 2 1/12。",
        "C": "【借 1 忘記減整數】向 4 借 1 變成 15/12 後忘記把 4 減 1，算出 3 9/12 ＝ 3 3/4。",
        "D": "【不夠減直接大減小】算 4 3/12 − 1 10/12 時未借位，直接用 10/12 − 3/12 ＝ 7/12 得出 3 7/12，再加 4/12 成 3 11/12。"
      },
      "insight": "只有加和減的算式一定要「由左而右」依序算，絕對不能隨便先把後面的兩個數加起來！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "分數加減混合：全通分 ➔ 由左而右計算 ➔ 最後檢查約分"
      ],
      "conceptCompare": "【連減 vs 先減後加】減法後面是加號時（甲 − 乙 ＋ 丙），如果擅自加括號變成甲 − （乙 ＋ 丙）會讓「丙」變成用減的而算錯！",
      "examVariations": "段考常考「先加 1/3 再減 1 5/6」的交換順序巧算題（4 3/12 ＋ 4/12 − 1 10/12 ＝ 4 7/12 − 1 10/12）。"
    },
    "check": {
      "expr": "4 1/4 - 1 5/6 + 1/3",
      "expect": "2 3/4"
    }
  },
  {
    "id": "U06-S4-B-019",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-4",
    "sectionName": "帶分數借位與通分比較",
    "category": "帶分數加減未知數反推",
    "source": "康軒五上 6-4 原型練習",
    "level": 4,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "若「□ ＋ 1 3/5 ＝ 4 1/4」，那麼 □ 裡應該填入多少？",
    "options": [
      {
        "key": "A",
        "text": "5 17/20",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "B",
        "text": "2 13/20",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "3 7/20",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "D",
        "text": "3 13/20",
        "trapCode": "U06_BORROW_MISCALC"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗用加減互逆關係反推未知加數 □，並完成通分與帶分數借位減法。",
      "steps": [
        {
          "type": "text",
          "text": "部分 ＋ 部分 ＝ 全部，所以未知的 □ ＝ 4 1/4 − 1 3/5。"
        },
        {
          "type": "svg",
          "caption": "□ 和 1 3/5 合起來是 4 1/4，所以用 4 1/4 減掉 1 3/5 就能求出 □",
          "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4\" y=\"4\" width=\"352\" height=\"142\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/><path d=\"M 28 36 L 28 28 L 332 28 L 332 36\" fill=\"none\" stroke=\"#4f46e5\" stroke-width=\"2\"/><text x=\"180\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#4f46e5\">全部合計：4 1/4 (＝ 4 5/20 ＝ 3 25/20)</text><rect x=\"28\" y=\"46\" width=\"190\" height=\"32\" rx=\"4\" fill=\"#d1fae5\" stroke=\"#059669\" stroke-width=\"1.6\"/><text x=\"123\" y=\"67\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#065f46\">□ ＝ 2 13/20</text><rect x=\"218\" y=\"46\" width=\"114\" height=\"32\" rx=\"4\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.6\"/><text x=\"275\" y=\"67\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">1 3/5 (＝ 1 12/20)</text><text x=\"180\" y=\"106\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">5/20 不夠減 12/20，向 4 借 1 換成 20/20</text><text x=\"180\" y=\"130\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#0f766e\">□ ＝ 3 25/20 − 1 12/20 ＝ 2 13/20</text></svg>"
        },
        {
          "type": "eq",
          "expr": "4 1/4 − 1 3/5 ＝ 4 5/20 − 1 12/20 ＝ 3 25/20 − 1 12/20 ＝ 2 13/20"
        },
        {
          "type": "answer",
          "text": "答：2 13/20"
        }
      ],
      "distractorAnalysis": {
        "C": "【不夠減直接大減小】5/20 不夠減 12/20 卻直接用 12 − 5 ＝ 7，算出 3 7/20。",
        "D": "【借 1 忘記減整數】向 4 借 1 換成 20/20 後，整數忘記從 4 減成 3，算出 3 13/20。",
        "A": "【看到加號直接相加】誤以為算式有「＋」就要把兩數相加，算出 4 1/4 ＋ 1 3/5 ＝ 5 17/20，比總和還大。"
      },
      "figureNote": "把整段想成 4 1/4，左段是 □、右段是 1 3/5；想知道左段有多長，就拿全部減掉右段。",
      "insight": "遇到有 □ 的算式，先用簡單整數想一次（例如 □ ＋ 2 ＝ 5，□ ＝ 5 − 2），確定用減法後再動筆算分數！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "加減互逆求 □：□ ＋ 甲 ＝ 乙 ➔ □ ＝ 乙 − 甲"
      ],
      "conceptCompare": "【驗算好習慣】算出 □ ＝ 2 13/20 後，代回原題算 2 13/20 ＋ 1 12/20 ＝ 3 25/20 ＝ 4 5/20 ＝ 4 1/4，百分百確認無誤！",
      "examVariations": "段考也常出「□ − 1 3/5 ＝ 2 13/20」（求被減數要相加）或「4 1/4 − □ ＝ 1 3/5」（求減數要相減）。"
    },
    "check": {
      "expr": "4 1/4 - 1 3/5",
      "expect": "2 13/20"
    }
  },
  {
    "id": "U06-S4-B-020",
    "unitId": "U06",
    "batch": "課本原型題",
    "section": "6-4",
    "sectionName": "帶分數借位與通分比較",
    "category": "三個異分母分數通分比大小並求差",
    "source": "康軒五上 6-4 原型練習",
    "level": 4,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "比較 5/6、7/9、11/12 這三個分數的大小，最大的分數與最小的分數相差多少？",
    "options": [
      {
        "key": "A",
        "text": "1/12",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "1/18",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "5/36",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "4/3",
        "trapCode": "U06_ADD_DENOM"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗同時將三個異分母分數通分比較大小，找出最大與最小分數後再相減。",
      "steps": [
        {
          "type": "text",
          "text": "6、9、12 的最小公倍數是 36，把三個分數全部擴分成分母 36："
        },
        {
          "type": "svg",
          "caption": "換成同分母 36 後比較：最大是 11/12 (33/36)，最小是 7/9 (28/36)",
          "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4\" y=\"4\" width=\"352\" height=\"142\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/><text x=\"14\" y=\"34\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">5/6</text><rect x=\"62\" y=\"18\" width=\"192\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><rect x=\"62\" y=\"18\" width=\"160\" height=\"22\" rx=\"4\" fill=\"#e2e8f0\" stroke=\"#64748b\"/><text x=\"262\" y=\"34\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">30/36</text><text x=\"14\" y=\"68\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">7/9</text><rect x=\"62\" y=\"52\" width=\"192\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><rect x=\"62\" y=\"52\" width=\"149\" height=\"22\" rx=\"4\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.4\"/><text x=\"262\" y=\"68\" font-size=\"12\" font-weight=\"800\" fill=\"#b45309\">28/36 (最小)</text><text x=\"14\" y=\"102\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">11/12</text><rect x=\"62\" y=\"86\" width=\"192\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><rect x=\"62\" y=\"86\" width=\"176\" height=\"22\" rx=\"4\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><text x=\"262\" y=\"102\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">33/36 (最大)</text><text x=\"180\" y=\"134\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#0f766e\">最大 − 最小 ＝ 33/36 − 28/36 ＝ 5/36</text></svg>"
        },
        {
          "type": "eq",
          "expr": "5/6 ＝ 30/36，7/9 ＝ 28/36，11/12 ＝ 33/36"
        },
        {
          "type": "eq",
          "expr": "11/12 − 7/9 ＝ 33/36 − 28/36 ＝ 5/36"
        },
        {
          "type": "answer",
          "text": "答：5/36"
        }
      ],
      "distractorAnalysis": {
        "A": "【找錯最小數】找出最大是 11/12，卻誤以為最小是 5/6，算成 11/12 − 5/6 ＝ 1/12。",
        "B": "【找錯最大數】誤拿中間的 5/6 減去最小的 7/9，算成 15/18 − 14/18 ＝ 1/18。",
        "D": "【分子分母直接相減】沒有通分，直接拿 11/12 與 7/9 的分子分母各自相減 (11 − 7) 與 (12 − 9) 寫成 4/3。"
      },
      "figureNote": "全部換成 36 等分後，11/12 佔 33 格最多、7/9 佔 28 格最少，兩者相差 5 格。",
      "insight": "這三個分數都只差一點點就到 1：5/6 差 1/6（6/36）、7/9 差 2/9（8/36）、11/12 差 1/12（3/36），也可以用「離 1 越近就越大」來雙重驗算！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "三個異分母比大小：找三數的最小公倍數一次通分",
        "距離 1 比較法：1 − 分數 越小，代表原分數越大"
      ],
      "conceptCompare": "【通分法 vs 離 1 距離法】比大小時「離 1 距離法」很快，但這題還要算「相差多少」，用 36 通分一次就能同時比大小又算差，最省事。",
      "examVariations": "段考常考「三個分數由大到小排列」或「最大與最小的和是多少」。"
    },
    "check": {
      "expr": "11/12 - 7/9",
      "expect": "5/36"
    }
  },
  {
    "id": "U06-S3-O-001",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "異分母分數的加減",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "木棒重疊拼接不重複扣減",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "兩根一樣長的木棒綁在一起，每根木棒長 2 3/4 公尺，中間重疊綁緊的部分長 5/6 公尺。請問綁好後的總長度是多少公尺？（答案請用最簡帶分數表示）",
    "options": [
      {
        "key": "A",
        "text": "5 1/3 公尺",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "B",
        "text": "4 2/3 公尺",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "14/3 公尺",
        "trapCode": "U06_IMPROPER_NOT_MIXED"
      },
      {
        "key": "D",
        "text": "3 5/6 公尺",
        "trapCode": "U06_UNIT_CONFUSE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否理解「兩物重疊拼接時，重疊部分在相加過程中被算了兩次，因此總長度只需要減去 1 次重疊長」，並正確完成異分母帶分數的借位減法與約分。",
      "steps": [
        {
          "type": "text",
          "text": "兩根木棒先接起來算總長，中間重疊的 5/6 公尺被重複算了兩次，所以要扣掉 1 次重疊的長度。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"22\" width=\"240\" height=\"26\" rx=\"5\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"150\" y=\"40\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">第一根：2 3/4 公尺</text><rect x=\"190\" y=\"58\" width=\"240\" height=\"26\" rx=\"5\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"310\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">第二根：2 3/4 公尺</text><rect x=\"190\" y=\"22\" width=\"80\" height=\"62\" rx=\"3\" fill=\"rgba(239,68,68,0.18)\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"230\" y=\"112\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">重疊 5/6 公尺（只扣 1 次）</text></svg>",
          "caption": "圖解：紅色虛線框為兩根木棒重疊的 5/6 公尺，合併計算時被算了兩次，只需減去 1 次"
        },
        {
          "type": "eq",
          "expr": "2 3/4 ＋ 2 3/4 ＝ 4 6/4 ＝ 5 1/2"
        },
        {
          "type": "eq",
          "expr": "5 1/2 − 5/6 ＝ 5 3/6 − 5/6 ＝ 4 9/6 − 5/6 ＝ 4 4/6 ＝ 4 2/3"
        },
        {
          "type": "answer",
          "text": "答：4 2/3 公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【分數大減小倒減】計算 5 3/6 − 5/6 時沒有向整數 5 借 1，直接拿 5/6 反減 3/6 得 2/6，錯算出 5 2/6 ＝ 5 1/3 公尺。",
        "C": "【假分數未換帶分數】計算結果 14/3 公尺與 4 2/3 公尺相等，但題目要求用最簡帶分數表示，必須將假分數化成帶分數。",
        "D": "【重疊扣了兩次】以為兩根木棒都要各減去 5/6 公尺，算成 5 1/2 − 5/6 − 5/6 ＝ 3 5/6 公尺，多減了一次重疊部分。"
      },
      "figureNote": "把兩根木棒錯開畫成上下兩條線段，重疊區域的長度恰好只有一份，因此「兩根總和 − 重疊長」就是拼接後的全長。",
      "insight": "重疊問題記口訣：有重疊就「總和減 1 次重疊」，就像兩個人手牽手拍合照，重疊的影子只有一塊！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩物重疊後總長 ＝ 甲長 ＋ 乙長 − 重疊長",
        "三根木棒依序接起（有 2 個重疊處）＝ 三根總長 − 兩個重疊長"
      ],
      "conceptCompare": "【重疊拼接 vs 間隔接續】重疊會讓總長度「變短」（要減重疊長）；兩根之間若另外綁一段繩子留空隙，總長才會「變長」（要加間隔長）。",
      "examVariations": "進階題常反過來給「兩根各長 2 3/4 公尺、綁好後全長 4 2/3 公尺」，反求中間重疊的部分長多少公尺（5 1/2 − 4 2/3 ＝ 5/6 公尺）。"
    },
    "check": {
      "expr": "2 3/4 + 2 3/4 - 5/6",
      "expect": "4 2/3"
    }
  },
  {
    "id": "U06-S3-O-002",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "異分母分數的加減",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "移多補少與水量平分",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "甲水桶裡有 4 7/12 公升的水，乙水桶裡有 2 1/4 公升的水。現在要從甲水桶倒出多少公升的水到乙水桶，兩桶水才會一樣多？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "甲水桶 (4 7/12 公升)",
          "units": 4.583,
          "role": "base"
        },
        {
          "label": "乙水桶 (2 1/4 公升)",
          "units": 2.25,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "甲比乙多 2 1/3 公升（倒出一半給乙）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "2 1/3 公升",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "B",
        "text": "1 1/6 公升",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1 3/8 公升",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "D",
        "text": "1 1/4 公升",
        "trapCode": "U06_FORGET_SCALE_NUM"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否理解「移多補少只需移動相差量的一半」，不能把全部的相差量倒給對方，否則會變成對方比較多。",
      "steps": [
        {
          "type": "text",
          "text": "先通分算出甲水桶比乙水桶多出多少公升的水，再把多出來的這一段平分成兩半，倒出一半給乙水桶。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "4 7/12 − 2 1/4 ＝ 4 7/12 − 2 3/12 ＝ 2 4/12 ＝ 2 1/3"
        },
        {
          "type": "text",
          "text": "把多出的 2 1/3 公升（即 2 2/6 公升）平分給兩桶：整數 2 的一半是 1，2/6 的一半是 1/6，合起來是 1 1/6 公升。"
        },
        {
          "type": "eq",
          "expr": "2 1/3 ÷ 2 ＝ 1 1/6"
        },
        {
          "type": "answer",
          "text": "答：1 1/6 公升"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記除以 2 平分】只算出甲桶比乙桶多 2 1/3 公升就作答；若全倒過去，乙桶反而會比甲桶多 2 1/3 公升。",
        "C": "【分母直接相減】將 7/12 − 1/4 直接算成「分子 7 − 1 ＝ 6、分母 12 − 4 ＝ 8」得出 6/8 ＝ 3/4，差成 2 3/4，平分後錯得 1 3/8 公升。",
        "D": "【通分忘記乘分子】把 2 1/4 擴分為分母 12 時，分子 1 忘記同乘 3 而寫成 2 1/12，算成 4 7/12 − 2 1/12 ＝ 2 1/2，平分後誤得 1 1/4 公升。"
      },
      "figureNote": "觀察線段圖右端突出的差距段：若把多出的整段全給乙，甲會少一段、乙會多一段，只有把差距對半切給乙，兩條線段才會剛好對齊！",
      "insight": "移多補少核心口訣：「先求差，再分半」！你少 1 份、他多 1 份，兩人差距一次就縮小 2 份！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "甲給乙使兩人一樣多：移動量 ＝ (甲 − 乙) ÷ 2",
        "若甲給乙某數量後兩人一樣多：原來甲比乙多「移動量 × 2」"
      ],
      "conceptCompare": "【給多少才一樣 vs 本來差多少】甲給乙 1 1/6 公升後兩人一樣多，代表原本甲比乙多 1 1/6 ＋ 1 1/6 ＝ 2 1/3 公升，千萬別把移動量和相差量搞混。",
      "examVariations": "段考常考逆向題：「甲給乙 1 1/6 公升後，兩桶剛好一樣多，請問原本甲桶比乙桶多幾公升？」"
    },
    "check": {
      "expr": "(4 7/12 - 2 1/4) / 2",
      "expect": "1 1/6"
    }
  },
  {
    "id": "U06-S4-O-003",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-4",
    "sectionName": "異分母分數的加減應用",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "看錯符號倒推還原",
    "level": 4,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小宇在計算「□ − 2 3/8」時，不小心把減號看成了加號，結果算出的答案是 6 1/6。請問原本這道算式「正確的答案」應該是多少？",
    "options": [
      {
        "key": "A",
        "text": "2 1/6",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "B",
        "text": "3 19/24",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "C",
        "text": "1 10/24",
        "trapCode": "U06_UNREDUCED_FRAC"
      },
      {
        "key": "D",
        "text": "1 5/12",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生面對「將錯就錯」題型時，能否先從錯誤算式倒推算出被減數 □，再重新代入原式求出真正的正確答案（而非停在求出 □）。",
      "steps": [
        {
          "type": "text",
          "text": "小宇把算式看成「□ ＋ 2 3/8 ＝ 6 1/6」，先用減法倒推出原本的 □ 是多少（6 與 8 的最小公倍數是 24）。"
        },
        {
          "type": "eq",
          "expr": "□ ＝ 6 1/6 − 2 3/8 ＝ 6 4/24 − 2 9/24 ＝ 5 28/24 − 2 9/24 ＝ 3 19/24"
        },
        {
          "type": "text",
          "text": "再把 □ ＝ 3 19/24 代回原本正確的減法算式「□ − 2 3/8」，算出正確答案並約分。"
        },
        {
          "type": "eq",
          "expr": "3 19/24 − 2 3/8 ＝ 3 19/24 − 2 9/24 ＝ 1 10/24 ＝ 1 5/12"
        },
        {
          "type": "answer",
          "text": "答：1 5/12"
        }
      ],
      "distractorAnalysis": {
        "B": "【只求出 □ 就作答】算出 □ ＝ 3 19/24 後忘記看清楚題目問的是「原本算式的正確答案」，漏了再減一次 2 3/8。",
        "C": "【未約成最簡分數】方向與計算完全正確，但算出 1 10/24 後忘記將分子分母同除以 2 約分成 1 5/12。",
        "A": "【分數大減小倒減】兩次減 2 9/24 時皆未向整數借位而反過來減：6 4/24 − 2 9/24 錯得 4 5/24，再減 2 9/24 錯得 2 4/24 ＝ 2 1/6。"
      },
      "figureNote": "想像數線位置：本來要往左跳 2 3/8，卻往右跳了 2 3/8 到達 6 1/6，因此正確位置距離錯誤結果整整差了「兩個 2 3/8」！",
      "insight": "看錯符號兩步走：先將錯就錯找出 □，再代回原式算正確答案（或是直接把錯誤答案減掉兩倍的加數）！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "將錯就錯找 □：錯誤和 − 加數 ＝ □",
        "快速檢查：正確答案比錯誤答案少了 2 個 2 3/8（即少 4 3/4）"
      ],
      "conceptCompare": "【問「原數 □」 vs 問「正確答案」】兩類題幹只差最後三個字！看到看錯題型時，務必先圈出題目到底問「被減數是多少」還是「正確的差是多少」。",
      "examVariations": "若改為「把減 2 3/8 看成加 2 3/8 嗎？」— 也可換成減數位置看錯，如「7 1/2 − □ 看成 7 1/2 ＋ □ ＝ 9 1/6」，此時正確答案變成 7 1/2 − 1 2/3。"
    },
    "check": {
      "expr": "6 1/6 - 2 3/8 - 2 3/8",
      "expect": "1 5/12"
    }
  },
  {
    "id": "U06-S4-O-004",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-4",
    "sectionName": "異分母分數的加減應用",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "瓶水連瓶重倒推空瓶重",
    "level": 4,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一瓶裝滿的蜂蜜連瓶子共重 3 1/4 公斤，吃掉剛好一半的蜂蜜後，剩下的蜂蜜連瓶子共重 1 7/8 公斤。請問這個「空瓶子」重幾公斤？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "裝滿蜂蜜連瓶 (3 1/4 公斤)",
          "units": 3.25,
          "role": "base"
        },
        {
          "label": "剩半瓶連瓶 (1 7/8 公斤)",
          "units": 1.875,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "減少的重量 ＝ 一半的蜂蜜（瓶重不變被抵銷）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "1/2 公斤",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "2 3/4 公斤",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "1 3/8 公斤",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "D",
        "text": "1 1/2 公斤",
        "trapCode": "U06_BORROW_MISCALC"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否理解「前後兩次秤重都包含同一個空瓶，相減時空瓶重量剛好抵銷，減少的重量就是吃掉那一半蜂蜜的純重量」。",
      "steps": [
        {
          "type": "text",
          "text": "前後兩次秤重都有包含空瓶，所以「裝滿連瓶 − 剩半瓶連瓶」剛好把瓶重抵銷，得到的就是吃掉的那「一半蜂蜜」的重量。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "3 1/4 − 1 7/8 ＝ 3 2/8 − 1 7/8 ＝ 2 10/8 − 1 7/8 ＝ 1 3/8"
        },
        {
          "type": "text",
          "text": "既然一半的蜂蜜重 1 3/8 公斤，那麼裝滿整瓶的蜂蜜淨重就是兩個 1 3/8 公斤；再用總重扣掉蜂蜜淨重，就是空瓶重（或者直接拿「半瓶連瓶重 − 一半蜂蜜重」更簡便！）。"
        },
        {
          "type": "eq",
          "expr": "1 7/8 − 1 3/8 ＝ 4/8 ＝ 1/2"
        },
        {
          "type": "answer",
          "text": "答：1/2 公斤"
        }
      ],
      "distractorAnalysis": {
        "B": "【把全部蜂蜜當空瓶】將一半蜂蜜 1 3/8 公斤加倍算出全部蜂蜜重 2 3/4 公斤後，忘記用總重 3 1/4 減去 2 3/4。",
        "D": "【帶分數借位錯誤】算 3 1/4 − 2 3/4 時向整數 3 借 1 換成 4/4，卻忘記把整數 3 減 1 變成 2，錯算成 3 5/4 − 2 3/4 ＝ 1 2/4 ＝ 1 1/2 公斤。",
        "C": "【只算出一半蜂蜜重】算完 3 1/4 − 1 7/8 ＝ 1 3/8 公斤後誤以為這就是空瓶重，忘記這只是吃掉的蜂蜜重量。"
      },
      "figureNote": "比較兩條長條圖：左邊相同的瓶子部分在相減時完全消掉了，右邊相差的那一段就是純粹減少的一半蜂蜜！",
      "insight": "連瓶重問題神解法：拿「剩半瓶連瓶重 − 一半蜂蜜重」，不必算整瓶蜂蜜也能一步算出空瓶重！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "裝滿連瓶 − 吃掉一半後連瓶 ＝ 一半內容物重量",
        "空瓶重 ＝ 剩半瓶連瓶重 − 一半內容物重 ＝ 裝滿連瓶重 − 全部內容物重"
      ],
      "conceptCompare": "【重量減半 vs 一半的內容物】吃掉一半的蜂蜜，總重量「不會」變成原來的一半（因為空瓶還在，沒有跟著被吃掉一半）。",
      "examVariations": "高階版會改成「喝掉 1/3 瓶果汁後連瓶重幾公斤，再喝掉剩餘的一半連瓶重幾公斤」，同樣用兩次相減消掉空瓶重即可破解。"
    },
    "check": {
      "expr": "3 1/4 - (3 1/4 - 1 7/8) * 2",
      "expect": "1/2"
    }
  },
  {
    "id": "U06-S3-O-005",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "異分母分數的加減",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "基準數湊整補數簡算",
    "level": 5,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "請利用基準數湊整的技巧，巧算下面算式的結果：1 9/10 ＋ 2 19/20 ＋ 3 29/30 ＋ 4 59/60 ＝ ？",
    "options": [
      {
        "key": "A",
        "text": "12 4/5",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "14 1/5",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "13 48/60",
        "trapCode": "U06_UNREDUCED_FRAC"
      },
      {
        "key": "D",
        "text": "13 4/5",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否具備「多退少補」的湊整數感，把接近整數的分數改寫成「整數 − 小分數」，避免直接做龐大分子的通分相加。",
      "steps": [
        {
          "type": "text",
          "text": "觀察四個帶分數都只比下一個整數少一點點：1 9/10 ＝ 2 − 1/10、2 19/20 ＝ 3 − 1/20、3 29/30 ＝ 4 − 1/30、4 59/60 ＝ 5 − 1/60。"
        },
        {
          "type": "eq",
          "expr": "（2 ＋ 3 ＋ 4 ＋ 5） − （1/10 ＋ 1/20 ＋ 1/30 ＋ 1/60）"
        },
        {
          "type": "text",
          "text": "整數部分相加是 14；括號裡的分數通分母為 60 相加後約分，再從 14 減掉。"
        },
        {
          "type": "eq",
          "expr": "14 − （6/60 ＋ 3/60 ＋ 2/60 ＋ 1/60） ＝ 14 − 12/60 ＝ 14 − 1/5 ＝ 13 4/5"
        },
        {
          "type": "answer",
          "text": "答：13 4/5"
        }
      ],
      "distractorAnalysis": {
        "B": "【多加沒扣回來】先湊成 2 ＋ 3 ＋ 4 ＋ 5 ＝ 14 後，忘記剛才每一項都是多補上去的，誤把補數 1/5 再加上去得出 14 1/5。",
        "C": "【未約成最簡分數】減法算成 14 − 12/60 ＝ 13 48/60 後，忘記將 48/60 分子分母同除以 12 約分成 4/5。",
        "A": "【整數加減失誤】計算整數 2 ＋ 3 ＋ 4 ＋ 5 時粗心少算 1 得 13，再減 1/5 錯得出 12 4/5。"
      },
      "figureNote": "把每個分數想成快滿的一杯水，先把全部杯子補滿成整數 2、3、4、5 杯，最後再統一倒掉補進去的 1/5 杯。",
      "insight": "分子只比分母少 1 的分數，千萬別傻傻通分！改成「整數 − 單位分數」就能秒殺！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "當帶分數的分子只比分母少 1 時，可改寫成「下一個整數 − 分母分之 1」（例如 2 19/20 ＝ 3 − 1/20）",
        "60 同時是 10、20、30、60 的公倍數，一眼就能通分"
      ],
      "conceptCompare": "【直接分整數與分數相加 vs 湊整補數】直接算 9/10 ＋ 19/20 ＋ 29/30 ＋ 59/60 分子太大容易算錯；改用補數法只要算 6 ＋ 3 ＋ 2 ＋ 1 ＝ 12，計算量縮小十倍。",
      "examVariations": "競賽題常把這招延伸到更大分母，例如「9 9/10 ＋ 99 99/100 ＋ 999 999/1000」，一樣先湊 10 ＋ 100 ＋ 1000 再扣掉 1/10 ＋ 1/100 ＋ 1/1000。"
    },
    "check": {
      "expr": "1 9/10 + 2 19/20 + 3 29/30 + 4 59/60",
      "expect": "13 4/5"
    }
  },
  {
    "id": "U06-S3-O-006",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "異分母分數的加減",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "括號拆解與同分母分組簡算",
    "level": 5,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察分數的分母特徵，利用分組配對簡算：（7 5/11 − 2 3/8） ＋ （3 6/11 − 1 5/8） ＝ ？",
    "options": [
      {
        "key": "A",
        "text": "7",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "10 1/4",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "6",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "8",
        "trapCode": "U06_BORROW_MISCALC"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否懂得「帶著前面的符號搬家」，先把分母同樣是 11 的分數加起來、再把同樣要減掉的分母 8 分數合起來減，避開 11 × 8 ＝ 88 的繁瑣通分。",
      "steps": [
        {
          "type": "text",
          "text": "兩個括號外面都是加號，可以直接拆開括號，並把「同分母」的數字重新分組配對。"
        },
        {
          "type": "eq",
          "expr": "（7 5/11 ＋ 3 6/11） − （2 3/8 ＋ 1 5/8）"
        },
        {
          "type": "text",
          "text": "分別計算兩組括號：5/11 ＋ 6/11 ＝ 11/11 ＝ 1，3/8 ＋ 5/8 ＝ 8/8 ＝ 1，兩組剛好都湊成整數！"
        },
        {
          "type": "eq",
          "expr": "11 − 4 ＝ 7"
        },
        {
          "type": "answer",
          "text": "答：7"
        }
      ],
      "distractorAnalysis": {
        "C": "【加法進位遺漏】計算 7 5/11 ＋ 3 6/11 時，只算 7 ＋ 3 ＝ 10 卻忘記加上 11/11 ＝ 1，錯算成 10 − 4 ＝ 6。",
        "D": "【減項相加漏進位】計算 2 3/8 ＋ 1 5/8 時，只算 2 ＋ 1 ＝ 3 而忘記 8/8 ＝ 1 要進位，錯算成 11 − 3 ＝ 8。",
        "B": "【連減括號變號錯誤】把 − 2 3/8 − 1 5/8 合併成括號時忘了變號，錯寫成 11 − （2 3/8 − 1 5/8） ＝ 11 − 3/4 ＝ 10 1/4。"
      },
      "figureNote": "分母 11 與 8 互質，直接算括號內會出現分母 88 的大數；帶著符號重新牽手找同分母夥伴，一秒變整數！",
      "insight": "分數簡算最高心法：別急著通分，先讓「同分母」湊在一起變成整數！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "同分母搬家定律：連加減中每個數要「帶著它左邊的加減號」一起移動",
        "連減兩數合併：− 甲 − 乙 ＝ − （甲 ＋ 乙）"
      ],
      "conceptCompare": "【括號前是「＋」 vs 括號前是「−」】本題第二個括號前面是「＋」，拆開括號裡面的減號不必變；若括號前面是「−」，拆括號時裡面的加減號就必須反轉。",
      "examVariations": "段考進階題會把中間的「＋」改成「−」，如「（7 5/11 − 2 3/8） − （1 5/8 − 3 6/11）」，考驗學生拆減號括號時能不能把 − 3 6/11 變回 ＋ 3 6/11。"
    },
    "check": {
      "expr": "(7 5/11 - 2 3/8) + (3 6/11 - 1 5/8)",
      "expect": "7"
    }
  },
  {
    "id": "U06-S3-O-007",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "異分母分數的加減",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "兩竹竿插入同水池測水深",
    "level": 5,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "甲、乙兩根竹竿垂直插進同一座水池的池底，水池裡的水深都一樣。已知甲竹竿全長 3 1/3 公尺，露出水面的部分長 5/6 公尺；乙竹竿露出水面的部分長 1 1/4 公尺。請問乙竹竿的全長是多少公尺？",
    "options": [
      {
        "key": "A",
        "text": "2 1/2 公尺",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "B",
        "text": "4 3/4 公尺",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "C",
        "text": "1 1/4 公尺",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "D",
        "text": "3 3/4 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生能否找出兩根竹竿共用的不變量「水深」，先透過甲竹竿算出水深，再加上乙竹竿露出水面的長度。",
      "steps": [
        {
          "type": "text",
          "text": "兩根竹竿插在同一座水池裡，所以浸在水裡的長度（水深）是一樣的！先用甲竹竿的全長減去露出水面的部分，算出水深。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"85\" width=\"380\" height=\"70\" fill=\"#e0f2fe\"/><line x1=\"40\" y1=\"85\" x2=\"420\" y2=\"85\" stroke=\"#0284c7\" stroke-width=\"2\" stroke-dasharray=\"6,4\"/><line x1=\"40\" y1=\"155\" x2=\"420\" y2=\"155\" stroke=\"#475569\" stroke-width=\"3\"/><rect x=\"120\" y=\"52\" width=\"16\" height=\"103\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><rect x=\"290\" y=\"30\" width=\"16\" height=\"125\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"128\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">甲竿共 3 1/3 公尺</text><text x=\"108\" y=\"72\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">露 5/6 公尺</text><text x=\"298\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#166534\">乙竿全長？</text><text x=\"316\" y=\"62\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">露 1 1/4 公尺</text><text x=\"212\" y=\"126\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#0369a1\">水深相同 ＝ 2 1/2 公尺</text></svg>",
          "caption": "圖解：水深是兩根竹竿共用的橋樑，先由甲竿求出水深，再加乙竿露出水面段"
        },
        {
          "type": "eq",
          "expr": "水深 ＝ 3 1/3 − 5/6 ＝ 3 2/6 − 5/6 ＝ 2 8/6 − 5/6 ＝ 2 3/6 ＝ 2 1/2"
        },
        {
          "type": "eq",
          "expr": "乙竿全長 ＝ 2 1/2 ＋ 1 1/4 ＝ 2 2/4 ＋ 1 1/4 ＝ 3 3/4"
        },
        {
          "type": "answer",
          "text": "答：3 3/4 公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【停在中間量】只算出水深 2 1/2 公尺就作答，忘記加上乙竹竿露出水面的 1 1/4 公尺。",
        "B": "【分數大減小倒減】算水深 3 2/6 − 5/6 時未向 3 借位，直接用 5/6 − 2/6 錯得 3 3/6 ＝ 3 1/2，再加上 1 1/4 變成 4 3/4 公尺。",
        "C": "【加減語意弄反】算出水深 2 1/2 公尺後，求全長卻誤用減法 2 1/2 − 1 1/4 ＝ 1 1/4 公尺。"
      },
      "figureNote": "在圖中標出「水面線」與「池底線」，就能一眼看出水深是一條水平不變的橋樑，把甲、乙兩根竹竿連結起來。",
      "insight": "只要「插入同一座水池」，水下部分就一定相等！這就是解題的隱藏橋樑！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "竹竿全長 ＝ 水深 ＋ 露出水面長",
        "同一水池不變量：甲全長 − 甲露出 ＝ 乙全長 − 乙露出 ＝ 水深"
      ],
      "conceptCompare": "【全長已知 vs 露出長已知】本題先求水深再推乙全長；也可直接比較「乙比甲多露出 1 1/4 − 5/6 ＝ 5/12 公尺」，所以乙也比甲長 5/12 公尺。",
      "examVariations": "若換成「兩根竹竿垂直插進泥土中」，同樣適用「泥土深度相同」的不變量；進階題還會改成「乙竿總長比甲竿長 5/12 公尺，求乙露出幾公尺」。"
    },
    "check": {
      "expr": "3 1/3 - 5/6 + 1 1/4",
      "expect": "3 3/4"
    }
  },
  {
    "id": "U06-RV-O-008",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "與1的補數比較分數大小",
    "level": 6,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "不用硬算通分，請用「和 1 相差的距離」比較四個分數：17/19、23/25、31/33、11/13，哪一個分數最大？",
    "options": [
      {
        "key": "A",
        "text": "11/13",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "B",
        "text": "31/33",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "17/19",
        "trapCode": "U06_WRONG_LCM"
      },
      {
        "key": "D",
        "text": "23/25",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生在面對分母太大不便通分的真分數時，能否善用「與 1 的補數比較」：距離 1 越近（缺口越小）的分數就越大。",
      "steps": [
        {
          "type": "text",
          "text": "這四個真分數的分子都剛好比分母少 2，因此分別用 1 去減它們，找出各差多少才滿 1："
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 490 148\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"18\" y=\"32\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">11/13</text><rect x=\"75\" y=\"16\" width=\"240\" height=\"20\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><rect x=\"315\" y=\"16\" width=\"55\" height=\"20\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><text x=\"380\" y=\"31\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">缺 2/13</text><text x=\"18\" y=\"64\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">17/19</text><rect x=\"75\" y=\"48\" width=\"258\" height=\"20\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><rect x=\"333\" y=\"48\" width=\"37\" height=\"20\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><text x=\"380\" y=\"63\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">缺 2/19</text><text x=\"18\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">23/25</text><rect x=\"75\" y=\"80\" width=\"267\" height=\"20\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><rect x=\"342\" y=\"80\" width=\"28\" height=\"20\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><text x=\"380\" y=\"95\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">缺 2/25</text><text x=\"18\" y=\"128\" font-size=\"13\" font-weight=\"800\" fill=\"#15803d\">31/33</text><rect x=\"75\" y=\"112\" width=\"274\" height=\"20\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"2\"/><rect x=\"349\" y=\"112\" width=\"21\" height=\"20\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><text x=\"380\" y=\"127\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">缺 2/33（最小）</text></svg>",
          "caption": "圖解：4 條總長皆為 1 的線段，右側紅色缺口越小代表越接近 1，本身數值就越大"
        },
        {
          "type": "eq",
          "expr": "2/33 ＜ 2/25 ＜ 2/19 ＜ 2/13"
        },
        {
          "type": "text",
          "text": "分子都是 2 時，分母越大分數越小。因為 31/33 距離 1 的缺口 2/33 最小，所以 31/33 最接近 1、分數最大。"
        },
        {
          "type": "answer",
          "text": "答：31/33"
        }
      ],
      "distractorAnalysis": {
        "A": "【缺口大小與原分數大小混淆】看到 2/13 是四個缺口中最大的，卻誤把「缺最多」當成「原分數最大」，其實缺越多剩越少。",
        "D": "【粗心判反分子相同比較法】誤以為 2/25 比 2/33 更小，導致把 23/25 當成最接近 1 的數。",
        "C": "【比較方向混亂】誤用一般數感猜測，未算出各分數與 1 的差值來進行同分子比較。"
      },
      "figureNote": "比較四條一樣長的蛋糕條：吃掉的缺口（紅框）越小，代表留下的藍色蛋糕（原分數）就越大塊！",
      "insight": "分子只比分母少固定數時，用「1 − 原分數」把難通分的分母變成同分子，缺口越小原數越大！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "真分數比大小神招：若距離 1 很近，比較「1 − 分數」的缺口大小",
        "缺口越小 ➔ 原分數越大；缺口越大 ➔ 原分數越小"
      ],
      "conceptCompare": "【真分數比大小 vs 假分數比大小】本題是真分數（都小於 1），「缺口越小越大」；若是假分數（如 21/19、27/25），比 1 多出的部分「越小反而越小」，方向剛好相反！",
      "examVariations": "若換成 21/19、27/25、35/33、15/13 四個假分數比大小，多出的部分 2/19、2/25、2/33、2/13 中，2/13 最大，因此 15/13 最大。"
    },
    "check": {
      "expr": "31/33",
      "expect": "31/33"
    }
  },
  {
    "id": "U06-RV-O-009",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "兩分數間的最簡真分數計數",
    "level": 6,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "在所有分母是 24 的「最簡真分數」中，大於 1/3 且小於 3/4 的分數一共有幾個？",
    "options": [
      {
        "key": "A",
        "text": "3 個",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "5 個",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "11 個",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "D",
        "text": "9 個",
        "trapCode": "U06_UNREDUCED_FRAC"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生能否先將兩端分數擴分至同分母 24 鎖定分子範圍，再精準篩選與 24 互質（無法再約分）的最簡分數。",
      "steps": [
        {
          "type": "text",
          "text": "先把兩邊的界線分數 1/3 和 3/4 都擴分成分母為 24 的等值分數。"
        },
        {
          "type": "eq",
          "expr": "1/3 ＝ 8/24 ， 3/4 ＝ 18/24"
        },
        {
          "type": "text",
          "text": "嚴格「大於 8/24 且小於 18/24」的分子有 9、10、11、12、13、14、15、16、17 共 9 個。因為 24 ＝ 2 × 2 × 2 × 3，所以分子不能是 2 的倍數（偶數），也不能是 3 的倍數！"
        },
        {
          "type": "text",
          "text": "篩掉偶數 10、12、14、16，再篩掉 3 的倍數 9、15，只剩下 11/24、13/24、17/24 這 3 個最簡真分數。"
        },
        {
          "type": "answer",
          "text": "答：3 個"
        }
      ],
      "distractorAnalysis": {
        "B": "【漏踢除 3 的倍數】只刪掉偶數分子（10、12、14、16），忘記 9/24 ＝ 3/8 與 15/24 ＝ 5/8 都能再除以 3 約分，錯算成 5 個。",
        "C": "【誤含兩端且未約分】把端點 8/24 與 18/24 也算進去，且忘記篩選最簡分數，錯算出 18 − 8 ＋ 1 ＝ 11 個。",
        "D": "【忘記篩選最簡分數】找出 9/24 到 17/24 共 9 個分數後，忘記題目要求「最簡真分數」，未扣除可與 24 約分的數。"
      },
      "figureNote": "數線上不包含兩端空心點 8/24 與 18/24；檢查最簡分數最快的方法是先分解分母 24 的質因數（只有 2 和 3），只要避開 2 和 3 的倍數就一定互質！",
      "insight": "找分母 24 的最簡分數，只要記得「踢掉偶數，再踢掉 3 的倍數」，絕對不會漏抓！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "夾心範圍計數：「大於 甲 且小於 乙」不含兩端點",
        "24 的最簡分數條件：分子不能有因數 2，也不能有因數 3"
      ],
      "conceptCompare": "【最簡分數 vs 全部等分分數】若題目沒寫「最簡」兩字，答案就是 9 個；多了「最簡」兩字，就必須把能約分的 9、10、12、14、15、16 通通刪除。",
      "examVariations": "段考常把問題反過來問：「在 1/3 和 3/4 之間，分母是 24 的最簡分數總和是多少？」（11/24 ＋ 13/24 ＋ 17/24 ＝ 41/24 ＝ 1 17/24）。"
    },
    "check": {
      "expr": "3",
      "expect": "3"
    }
  },
  {
    "id": "U06-RV-O-010",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "同增同減差不變倍數應用",
    "level": 6,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "姐姐原本有 5 1/4 公升的果汁，妹妹原本有 1 5/6 公升的果汁。爸爸又分別倒給兩人「一樣多」的果汁後，姐姐現在的果汁量剛好是妹妹現在的 2 倍（也就是姐姐比妹妹多的量剛好等於妹妹現在的量）。請問爸爸總共倒出了幾公升的果汁？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "姐姐原有 (5 1/4 公升)",
          "units": 5.25,
          "role": "base"
        },
        {
          "label": "妹妹原有 (1 5/6 公升)",
          "units": 1.833,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "相差 3 5/12 公升（兩人同加一樣多，差不變）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "1 7/12 公升",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "B",
        "text": "3 1/6 公升",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "3 5/12 公升",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "D",
        "text": "3 2/12 公升",
        "trapCode": "U06_UNREDUCED_FRAC"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否掌握「兩人同時增加相同數量時，兩人的差量永遠不變」的奧數核心性質，進而利用最終 2 倍關係反推妹妹後來增加的量，並記得算出「兩人合計」總倒出量。",
      "steps": [
        {
          "type": "text",
          "text": "兩人倒進「一樣多」的果汁，就像兩個人同時長大一樣，年齡差（水量差）永遠不變！先算出原本兩人相差多少公升。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "相差 ＝ 5 1/4 − 1 5/6 ＝ 5 3/12 − 1 10/12 ＝ 4 15/12 − 1 10/12 ＝ 3 5/12"
        },
        {
          "type": "text",
          "text": "後來姐姐是妹妹的 2 倍，代表多出來的這一段「3 5/12 公升」剛好就等於妹妹現在的果汁量！算出妹妹增加了多少，再乘以 2 就是爸爸倒出的總量。"
        },
        {
          "type": "eq",
          "expr": "每人增加 ＝ 3 5/12 − 1 5/6 ＝ 3 5/12 − 1 10/12 ＝ 2 17/12 − 1 10/12 ＝ 1 7/12"
        },
        {
          "type": "eq",
          "expr": "爸爸共倒出 ＝ 1 7/12 ＋ 1 7/12 ＝ 2 14/12 ＝ 3 2/12 ＝ 3 1/6"
        },
        {
          "type": "answer",
          "text": "答：3 1/6 公升"
        }
      ],
      "distractorAnalysis": {
        "A": "【只算一人的增加量】算出每人倒進 1 7/12 公升後就作答，忘記題目問的是爸爸給「兩人總共」倒出幾公升。",
        "C": "【把固定差當成總倒出量】把兩人相差的 3 5/12 公升（即妹妹最後的總量）誤當成爸爸倒出的量。",
        "D": "【未約成最簡分數】將 1 7/12 ＋ 1 7/12 算成 3 2/12 後忘記約分成 3 1/6。"
      },
      "figureNote": "線段圖右端凸出的 3 5/12 公升是不變量；當兩條線段左端同時向右加長相等的一段，直到姐姐剛好變成妹妹的 2 倍長，妹妹現在就剛好等於那段 3 5/12 公升！",
      "insight": "兩人同加同減一樣多，立刻鎖定「差不變」！算出不變的差，倍數關係就自動解開！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "同增同減差不變：（甲 ＋ 同） − （乙 ＋ 同） ＝ 甲 − 乙",
        "當甲變成乙的 2 倍時：相差的 1 份剛好等於當時較小的乙"
      ],
      "conceptCompare": "【同增差不變 vs 互給和不變】甲給乙東西時，「總和」不變；第三者同時給甲和乙一樣多的東西時，「差」不變！",
      "examVariations": "若題目改成「兩人同時喝掉一樣多的果汁後，姐姐變成妹妹的 3 倍」，也是先抓出不變的差，這時「差」會等於後來妹妹的 2 倍。"
    },
    "check": {
      "expr": "((5 1/4 - 1 5/6) - 1 5/6) * 2",
      "expect": "3 1/6"
    }
  },
  {
    "id": "U06-RV-O-011",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "擴分與分子分母和變動還原",
    "level": 7,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "有一個分數，它的分子和分母加起來的和是 52。如果把這個分數的「分母加上 4」，再約分後就會變成 3/5。請問「原來的分數」是多少？",
    "options": [
      {
        "key": "A",
        "text": "21/35",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "B",
        "text": "21/31",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "18/34",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "D",
        "text": "15/37",
        "trapCode": "U06_WRONG_LCM"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生能否利用「約分前與約分後的等值擴分關係」，先求出分母加上 4 後的總和，按 3 份與 5 份的比例還原出擴分前分數，再扣回 4 還原分母。",
      "steps": [
        {
          "type": "text",
          "text": "原來「分子 ＋ 分母 ＝ 52」，把分母加上 4 後，新的「分子 ＋ 分母」總和就會變成 52 ＋ 4 ＝ 56。"
        },
        {
          "type": "text",
          "text": "新分數約分後是 3/5，代表擴分回去時，分子佔 3 份、分母佔 5 份，合起來一共是 3 ＋ 5 ＝ 8 份。"
        },
        {
          "type": "eq",
          "expr": "每 1 份 ＝ 56 ÷ （3 ＋ 5） ＝ 56 ÷ 8 ＝ 7"
        },
        {
          "type": "text",
          "text": "把 3/5 分子分母同乘 7 擴分還原為 21/35，最後把剛才分母加上去的 4 減回來（35 − 4 ＝ 31），即得原分數。"
        },
        {
          "type": "eq",
          "expr": "原分母 ＝ 35 − 4 ＝ 31 ， 原分數 ＝ 21/31"
        },
        {
          "type": "answer",
          "text": "答：21/31"
        }
      ],
      "distractorAnalysis": {
        "C": "【該加反減】算新總和時誤把 52 減去 4 得 48，算出擴分數 18/30 後再加 4 得 18/34（但 18/34 約分並非 3/5，檢驗即可發現錯誤）。",
        "D": "【未先算新總和】未處理「分母加 4 使和變 56」的條件，隨意拿 5 倍擴分湊 15/37。",
        "A": "【忘記把分母的 4 扣回來】求出擴分還原的新分數 21/35 後就以為是答案，忘記 35 是加上 4 之後的分母。"
      },
      "figureNote": "把分子想成 3 格、新分母想成 5 格，8 格總長剛好是 56，馬上就能算出每一格代表 7。",
      "insight": "看到「分子分母改加減某數後約分變成幾分之幾」，先算「新的分子分母總和」，再用總和除以份數和就能秒出擴分倍數！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "新分數分子分母和 ＝ 原和 ＋ 分母增加量",
        "擴分倍數 ＝ 新分子分母和 ÷ （約分後分子 ＋ 約分後分母）"
      ],
      "conceptCompare": "【約分是同除 vs 擴分是同乘】因為 21/35 ＝ 3/5，從 3/5 變回 21/35 只是分子分母同乘 7，因此分子與分母的「份數比 3：5」永遠不會改變。",
      "examVariations": "若題目改成「分子加上 3、分母減去 3 後約分成 3/5」，因為一加一減抵銷，分子與分母的「總和 52」反而完全不變，直接拿 52 除以 8 即可（題目數字會配合整除）。"
    },
    "check": {
      "expr": "((52 + 4) / (3 + 5) * 3) / ((52 + 4) / (3 + 5) * 5 - 4)",
      "expect": "21/31"
    }
  },
  {
    "id": "U06-RV-O-012",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "以1/2為基準比較接近程度",
    "level": 7,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "不用把所有分數通分，請利用「與 1/2 的距離」判斷下面哪一個分數「最接近 1/2」？",
    "options": [
      {
        "key": "A",
        "text": "23/45",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "15/31",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "C",
        "text": "19/37",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "11/21",
        "trapCode": "U06_SWAP_OP_WORD"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否能以「1/2」為基準數，透過各分數與 1/2 相減求距離，將分母互質的超難通分轉化為「同分子 1」的秒殺比較。",
      "steps": [
        {
          "type": "text",
          "text": "分別計算這四個分數與 1/2 的相差距離（大減小），看誰跟 1/2 差得最少："
        },
        {
          "type": "eq",
          "expr": "11/21 − 1/2 ＝ 22/42 − 21/42 ＝ 1/42"
        },
        {
          "type": "eq",
          "expr": "1/2 − 15/31 ＝ 31/62 − 30/62 ＝ 1/62"
        },
        {
          "type": "eq",
          "expr": "19/37 − 1/2 ＝ 38/74 − 37/74 ＝ 1/74"
        },
        {
          "type": "eq",
          "expr": "23/45 − 1/2 ＝ 46/90 − 45/90 ＝ 1/90"
        },
        {
          "type": "text",
          "text": "四個距離都是「分之 1」的單位分數，分母 90 最大，所以 1/90 最小，代表 23/45 最接近 1/2。"
        },
        {
          "type": "answer",
          "text": "答：23/45"
        }
      ],
      "distractorAnalysis": {
        "B": "【只挑小於 1/2 者】看到 15/31 是唯一比 1/2 小的分數，計算距離時弄反方向或誤以為小於 1/2 才算靠近。",
        "C": "【乘法計算失誤】計算 19/37 − 1/2 通分分母時，錯把 37 × 2 算成 94 而得出 1/94，誤判它比 1/90 更小。",
        "D": "【距離最遠誤認最近】算出 1/42 後，誤以為分母較小的 1/42 距離比較短，其實 1/42 是四個距離中最大（最遠）的。"
      },
      "figureNote": "不論在 1/2 的左邊（15/31）還是右邊（11/21、19/37、23/45），「最接近」比的是距離長短，與左右方向無關。",
      "insight": "遇到一堆分母都在分子 2 倍附近的分數，立刻找「1/2」當裁判，通分分子變 1 就破關了！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "與 1/2 的距離 ＝ 較大數 − 較小數（大於 1/2 用 原數 − 1/2；小於 1/2 用 1/2 − 原數）",
        "同為單位分數時：分母越大，分數越小，代表距離越近"
      ],
      "conceptCompare": "【最接近 1/2 vs 最大】題目問「最接近 1/2」要選距離最小的 23/45；若改問四數中「誰最大」，因為 11/21 在 1/2 右邊最遠（1/2 ＋ 1/42），最大反而是 11/21！",
      "examVariations": "段考也常考「誰最接近 1/3」或「誰最接近 2/3」，做法完全相同，只要減去基準分數比距離即可。"
    },
    "check": {
      "expr": "23/45",
      "expect": "23/45"
    }
  },
  {
    "id": "U06-RV-O-013",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "單位分數拆分成兩不同單位分數",
    "level": 7,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "若「甲分之 1」＋「乙分之 1」＝ 1/6，其中「甲」和「乙」代表兩個「不相等」的正整數，請問「甲 ＋ 乙」最小可能是多少？",
    "options": [
      {
        "key": "A",
        "text": "24",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "B",
        "text": "27",
        "trapCode": "U06_UNREDUCED_FRAC"
      },
      {
        "key": "C",
        "text": "49",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "D",
        "text": "25",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否了解「埃及分數拆分」的有序枚舉方法：限定較小分母的範圍（介於 7 到 11 之間），利用異分母減法逐一檢驗並化為最簡分子 1。",
      "steps": [
        {
          "type": "text",
          "text": "不妨假設甲 ＜ 乙。因為「甲分之 1」必須小於 1/6，所以甲至少是 7；又因為 1/12 ＋ 1/12 ＝ 1/6，而甲必須比乙小，所以「甲分之 1」必須大於 1/12，因此甲只可能是 7、8、9、10、11。"
        },
        {
          "type": "eq",
          "expr": "甲 ＝ 7 時：1/6 − 1/7 ＝ 1/42 （7 ＋ 42 ＝ 49）"
        },
        {
          "type": "eq",
          "expr": "甲 ＝ 8 時：1/6 − 1/8 ＝ 4/24 − 3/24 ＝ 1/24 （8 ＋ 24 ＝ 32）"
        },
        {
          "type": "eq",
          "expr": "甲 ＝ 9 時：1/6 − 1/9 ＝ 3/18 − 2/18 ＝ 1/18 （9 ＋ 18 ＝ 27）"
        },
        {
          "type": "eq",
          "expr": "甲 ＝ 10 時：1/6 − 1/10 ＝ 5/30 − 3/30 ＝ 2/30 ＝ 1/15 （10 ＋ 15 ＝ 25）"
        },
        {
          "type": "text",
          "text": "檢驗甲 ＝ 11 時：1/6 − 1/11 ＝ 5/66，約分後分子不是 1，不合條件。所以共有 4 組解，其中「甲 ＋ 乙」最小是 10 ＋ 15 ＝ 25。"
        },
        {
          "type": "answer",
          "text": "答：25"
        }
      ],
      "distractorAnalysis": {
        "A": "【忽略兩數不相等】沒有注意到題幹寫「不相等」，直接取 1/12 ＋ 1/12 ＝ 1/6，算出 12 ＋ 12 ＝ 24。",
        "B": "【算完忘記約分】檢驗甲 ＝ 10 時算出 1/6 − 1/10 ＝ 2/30，沒發現可約分成 1/15，因而錯以為只能選到 9 ＋ 18 ＝ 27。",
        "C": "【最小看成最大】有找到全部 4 組拆法，卻選了甲 ＋ 乙「最大」的那一組 7 ＋ 42 ＝ 49。"
      },
      "figureNote": "兩個不同單位分數相加等於 1/6，兩數越接近（都靠向 12），它們的和「甲 ＋ 乙」就會越小；反之一個越靠近 6、另一個就噴得很大。",
      "insight": "單位分數兩拆分不瞎猜：先用「大於原分母、小於兩倍原分母」鎖住區間，只要試 5 個數就全盤抓出！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "若「甲分之 1」＋「乙分之 1」＝ 原單位分數（且 甲 ＜ 乙），則 甲 一定介於（原分母 ＋ 1）到（原分母 × 2 − 1）之間",
        "兩數越接近，甲 ＋ 乙 越小；甲 ＝ 原分母 ＋ 1 時，甲 ＋ 乙 最大"
      ],
      "conceptCompare": "【和最小 vs 和最大】求「甲 ＋ 乙」最大時從甲 ＝ 7 試起；求「甲 ＋ 乙」最小時從甲 ＝ 11 往下試更快（試到甲 ＝ 10 就直接找到 10 ＋ 15 ＝ 25）！",
      "examVariations": "競賽常把問題改成：「『甲分之 1』＋『乙分之 1』＝ 1/6（甲 ＜ 乙），總共有幾組不同的整數解？」（答案：4 組）。"
    },
    "check": {
      "expr": "10 + 15",
      "expect": "25",
      "extraChecks": [
        {
          "expr": "1/10 + 1/15",
          "expect": "1/6"
        }
      ]
    }
  },
  {
    "id": "U06-RV-O-014",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "長括號配對抵銷簡算",
    "level": 8,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "仔細觀察括號裡的相同分數並配對消去，計算：（1 ＋ 1/2 ＋ 1/3 ＋ 1/4） ＋ （1/2 ＋ 1/3 ＋ 1/4） − （1 ＋ 1/2 ＋ 1/3） − （1/2 ＋ 1/3 ＋ 1/4 ＋ 1/5） ＝ ？",
    "options": [
      {
        "key": "A",
        "text": "1/20",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "9/20",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "2/9",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "D",
        "text": "1/12",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生在面對四組長括號分數運算時，是否具備「整體配對對消」的結構眼光，避免硬算出分母 60 再相減的計算泥淖。",
      "steps": [
        {
          "type": "text",
          "text": "別把每個括號硬算出來！觀察第 1 組與第 3 組幾乎一樣，第 2 組與第 4 組也幾乎一樣，把它們兩兩配對相減。"
        },
        {
          "type": "eq",
          "expr": "（1 ＋ 1/2 ＋ 1/3 ＋ 1/4） − （1 ＋ 1/2 ＋ 1/3） ＝ 1/4"
        },
        {
          "type": "text",
          "text": "接著配對第 2 組減第 4 組：第 4 組比第 2 組多出一個「1/5」要減掉，前面全被抵銷，所以只剩下「− 1/5」。"
        },
        {
          "type": "eq",
          "expr": "1/4 − 1/5 ＝ 5/20 − 4/20 ＝ 1/20"
        },
        {
          "type": "answer",
          "text": "答：1/20"
        }
      ],
      "distractorAnalysis": {
        "C": "【分母直接相加＋變號錯】誤寫成 1/4 ＋ 1/5 且把分母分子各自相加，分子 1 ＋ 1 ＝ 2、分母 4 ＋ 5 ＝ 9，錯得出 2/9。",
        "D": "【配對看錯項數】配對消去時誤看錯邊界分數，錯算成 1/3 − 1/4 ＝ 1/12。",
        "B": "【符號加減弄反】第 2 組減第 4 組消完後剩下的是要減去的 1/5，卻誤當成 ＋ 1/5 而算成 1/4 ＋ 1/5 ＝ 9/20。"
      },
      "figureNote": "比較兩組括號時，把完全相同的部分整段劃掉，只留多出來那一小塊的加減符號，算式瞬間從 14 個分數縮成 2 個分數！",
      "insight": "長括號考題 99% 不用硬算！先找「長得幾乎一模一樣」的兩組相消，剩下的尾巴就是答案！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "（甲 ＋ 乙） − 甲 ＝ 乙",
        "乙 − （乙 ＋ 丙） ＝ 少了 丙（即 − 丙）"
      ],
      "conceptCompare": "【暴力通分 vs 結構對消】暴力通分需要算 12、60 甚至更大的公倍數，只要粗心一個分子就全錯；結構對消只需最後算一次 1/4 − 1/5 ＝ 1/20。",
      "examVariations": "AMC 8 經典換元變形會寫成「(1/2 ＋ 1/3 ＋ 1/4) × (1/3 ＋ 1/4 ＋ 1/5) − ...」，原理相同，只不過先把括號用「甲、乙」替換來看清結構。"
    },
    "check": {
      "expr": "(1 + 1/2 + 1/3 + 1/4) + (1/2 + 1/3 + 1/4) - (1 + 1/2 + 1/3) - (1/2 + 1/3 + 1/4 + 1/5)",
      "expect": "1/20"
    }
  },
  {
    "id": "U06-RV-O-015",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "倍半分數數列借一還原巧算",
    "level": 8,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "計算下面分數連加的總和：1/4 ＋ 1/8 ＋ 1/16 ＋ 1/32 ＋ 1/64 ＋ 1/128 ＝ ？",
    "options": [
      {
        "key": "A",
        "text": "127/128",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "B",
        "text": "65/128",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "63/128",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "31/64",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否真正理解「從 1/2 開始切半填滿整條 1」的幾何道理，能靈活看出「從 1/4 開始只填滿左半條 1/2」，避免死背公式誤答 127/128。",
      "steps": [
        {
          "type": "text",
          "text": "先看一條長 1/2 的紙帶：每次切掉剩下的一半，依序加上 1/4、1/8、1/16、1/32、1/64、1/128 後，最後剛好只差一塊 1/128 就能填滿 1/2！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"30\" width=\"420\" height=\"36\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"1.5\"/><rect x=\"20\" y=\"30\" width=\"210\" height=\"36\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"125\" y=\"53\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#64748b\">缺了左半邊 1/2</text><rect x=\"230\" y=\"30\" width=\"105\" height=\"36\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><text x=\"282\" y=\"53\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">1/4</text><rect x=\"335\" y=\"30\" width=\"52\" height=\"36\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"1.5\"/><text x=\"361\" y=\"53\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">1/8</text><rect x=\"387\" y=\"30\" width=\"41\" height=\"36\" fill=\"#a7f3d0\" stroke=\"#059669\" stroke-width=\"1.5\"/><text x=\"407\" y=\"53\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\">…</text><rect x=\"428\" y=\"30\" width=\"12\" height=\"36\" fill=\"#fecaca\" stroke=\"#dc2626\" stroke-width=\"1.5\"/><text x=\"335\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1e293b\">右半邊 1/2 扣除紅塊 1/128 ＝ 63/128</text></svg>",
          "caption": "圖解：算式沒有開頭的 1/2，因此只在填滿右半邊 1/2，最後僅剩紅色一小格 1/128 未填滿"
        },
        {
          "type": "eq",
          "expr": "1/2 − 1/128 ＝ 64/128 − 1/128 ＝ 63/128"
        },
        {
          "type": "answer",
          "text": "答：63/128"
        }
      ],
      "distractorAnalysis": {
        "A": "【死背公式漏看起點】沒看清題目是從 1/4 開始加（少了 1/2），直接套用「1 − 最後一項」錯算出 127/128。",
        "B": "【加減方向弄反】知道基準是 1/2，卻把借補用的 1/128 錯加成 1/2 ＋ 1/128 ＝ 65/128。",
        "D": "【漏算最後一項】錯把最後一項看成 1/64，算成 1/2 − 1/64 ＝ 31/64。"
      },
      "figureNote": "把「借一個 1/128 進來」想成骨牌效應：1/128 ＋ 1/128 ＝ 1/64，一路往左倒推合併成 1/2，最後把借來的 1/128 還回去就是答案！",
      "insight": "分母每次乘 2 的連加算式，用「第一項的 2 倍 − 最後一項」就能秒殺（本題第一項 1/4 的 2 倍剛好就是 1/2）！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "借尾還尾骨牌法：加上一個 1/128 讓後面一路合併進位，算完再扣掉 1/128",
        "1/4 ＋ 1/8 ＋ … ＋ 1/128 ＝ 1/2 − 1/128"
      ],
      "conceptCompare": "【從 1/2 開始 vs 從 1/4 開始】若從 1/2 加到 1/128，填滿的是整條 1（1 − 1/128）；從 1/4 加起，填滿的只是半條 1/2（1/2 − 1/128）。",
      "examVariations": "若換成從 1/8 加到 1/256，只要用第一項 1/8 的兩倍（1/4）去減最後一項 1/256 即可得 63/256。"
    },
    "check": {
      "expr": "1/4 + 1/8 + 1/16 + 1/32 + 1/64 + 1/128",
      "expect": "63/128"
    }
  },
  {
    "id": "U06-RV-O-016",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "三量兩兩循環總和反推單量",
    "level": 8,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "有甲、乙、丙三袋米，已知「甲袋和乙袋」共重 7 3/4 公斤，「乙袋和丙袋」共重 6 5/6 公斤，「丙袋和甲袋」共重 9 5/12 公斤。請問「乙袋米」重幾公斤？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "甲＋乙 (7 3/4 公斤)",
          "units": 7.75,
          "role": "base"
        },
        {
          "label": "乙＋丙 (6 5/6 公斤)",
          "units": 6.833,
          "role": "compare"
        },
        {
          "label": "丙＋甲 (9 5/12 公斤)",
          "units": 9.417,
          "role": "extra"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "三組全加 ＝ 24 公斤 ＝ 2 個（甲＋乙＋丙）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "14 7/12 公斤",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "B",
        "text": "2 7/12 公斤",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "3 7/12 公斤",
        "trapCode": "U06_BORROW_MISCALC"
      },
      {
        "key": "D",
        "text": "5 1/6 公斤",
        "trapCode": "U06_SWAP_OP_WORD"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否懂得透過「三式全加，每袋剛好出現 2 次」的對稱結構求出三袋總和，再扣掉不包含乙袋的那一組（丙＋甲）算出乙袋重。",
      "steps": [
        {
          "type": "text",
          "text": "把三組重量全部加起來，會發現甲、乙、丙每一袋都剛好被算了 2 次！先把三組分數通分為分母 12 後相加。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "7 3/4 ＋ 6 5/6 ＋ 9 5/12 ＝ 7 9/12 ＋ 6 10/12 ＋ 9 5/12 ＝ 22 24/12 ＝ 24"
        },
        {
          "type": "text",
          "text": "因為 24 公斤是 2 個（甲＋乙＋丙）的總重，所以甲、乙、丙三袋合起來一共重 24 ÷ 2 ＝ 12 公斤。"
        },
        {
          "type": "eq",
          "expr": "乙 ＝ 12 − （丙 ＋ 甲） ＝ 12 − 9 5/12 ＝ 11 12/12 − 9 5/12 ＝ 2 7/12"
        },
        {
          "type": "answer",
          "text": "答：2 7/12 公斤"
        }
      ],
      "distractorAnalysis": {
        "C": "【帶分數借位錯誤】算 12 − 9 5/12 時將 12 借出 12/12，卻忘記整數 12 要減 1 變成 11，錯算成 12 − 9 ＝ 3 而得出 3 7/12 公斤。",
        "D": "【減錯對象】算出三袋總重 12 公斤後，求乙袋卻拿去減「乙＋丙」的 6 5/6 公斤，錯算出的是甲袋重量 5 1/6 公斤。",
        "A": "【忘記除以 2】把三組加起來得 24 公斤後，直接拿 24 − 9 5/12 ＝ 14 7/12 公斤，忘記每個袋子重複出現了 2 次。"
      },
      "figureNote": "三條長條加起來剛好包含 2 份甲、2 份乙與 2 份丙；先除 2 拿到完整 1 份三袋和，再扣掉不含乙的（丙＋甲）就剩下乙！",
      "insight": "看到「甲＋乙、乙＋丙、丙＋甲」循環題，二話不說「三式全加再除以 2」就是三人的總和！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "甲 ＋ 乙 ＋ 丙 ＝ [（甲＋乙） ＋ （乙＋丙） ＋ （丙＋甲）] ÷ 2",
        "求乙 ➔ 用總和扣掉「沒有乙」的那一組（丙＋甲）"
      ],
      "conceptCompare": "【想求誰，就減誰不在的那組】要求甲就扣（乙＋丙）；要求乙就扣（丙＋甲）；要求丙就扣（甲＋乙），一秒對應不搞錯。",
      "examVariations": "段考也常考「兩人相加給總和與差」或是「四個數兩兩相加」，不過三量循環最常在資優班考題出現。"
    },
    "check": {
      "expr": "(7 3/4 + 6 5/6 + 9 5/12) / 2 - 9 5/12",
      "expect": "2 7/12"
    }
  },
  {
    "id": "U06-RV-O-017",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "單位分數裂項相消",
    "level": 9,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察單位分數的差：1/6 ＝ 1/2 − 1/3、1/12 ＝ 1/3 − 1/4、1/20 ＝ 1/4 − 1/5……。請利用這個拆項抵銷的規律，計算：1/6 ＋ 1/12 ＋ 1/20 ＋ 1/30 ＋ 1/42 ＋ 1/56 ＝ ？",
    "options": [
      {
        "key": "A",
        "text": "5/8",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "B",
        "text": "1/2",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "C",
        "text": "3/8",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "5/14",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生能否把「相鄰兩整數乘積的倒數」拆成「兩單位分數的差」，讓中間的加減項兩兩互相抵銷，達成經典的裂項相消簡算。",
      "steps": [
        {
          "type": "text",
          "text": "觀察每個分母都是相鄰兩個整數相乘：6 ＝ 2 × 3、12 ＝ 3 × 4、20 ＝ 4 × 5、30 ＝ 5 × 6、42 ＝ 6 × 7、56 ＝ 7 × 8，因此每一項都可以拆成兩個分數相減："
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 115\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"230\" y=\"34\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">（1/2 − 1/3）＋（1/3 − 1/4）＋（1/4 − 1/5）＋ … ＋（1/7 − 1/8）</text><line x1=\"116\" y1=\"42\" x2=\"168\" y2=\"20\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"188\" y1=\"42\" x2=\"240\" y2=\"20\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"260\" y1=\"42\" x2=\"312\" y2=\"20\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"230\" y=\"72\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">中間的「−1/3 ＋ 1/3」、「−1/4 ＋ 1/4」… 全部互相抵銷！</text><text x=\"230\" y=\"100\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#15803d\">只剩頭和尾：1/2 − 1/8 ＝ 3/8</text></svg>",
          "caption": "圖解：紅色斜線表示相鄰一減一加完全抵銷，最後只留下最前面的 1/2 與最後面的 − 1/8"
        },
        {
          "type": "eq",
          "expr": "（1/2 − 1/3） ＋ （1/3 − 1/4） ＋ （1/4 − 1/5） ＋ （1/5 − 1/6） ＋ （1/6 − 1/7） ＋ （1/7 − 1/8）"
        },
        {
          "type": "eq",
          "expr": "＝ 1/2 − 1/8 ＝ 4/8 − 1/8 ＝ 3/8"
        },
        {
          "type": "answer",
          "text": "答：3/8"
        }
      ],
      "distractorAnalysis": {
        "A": "【頭尾誤相加】抵銷中間項後，沒有看清楚最後剩下的 − 1/8 是減號，錯算成 1/2 ＋ 1/8 ＝ 5/8。",
        "B": "【漏掉尾巴項】以為後面的分數通通消光了，忘記最後一項 1/7 − 1/8 的尾巴「− 1/8」沒有東西跟它抵銷。",
        "D": "【乘積拆解粗心】算到最後一項 1/56 時錯看成止步於 1/42 ＝ 1/6 − 1/7，算成 1/2 − 1/7 ＝ 5/14。"
      },
      "figureNote": "對消的時候一對一對劃掉（減 1/3 配加 1/3），留下沒被劃掉的最左邊 1/2 與最右邊 − 1/8，就絕對不會錯。",
      "insight": "分母是「兩相鄰數乘積」，立刻拆成「小分之一 − 大分之一」，中間消光只剩頭減尾！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "當分母是相鄰兩數乘積時（例如 6 ＝ 2 × 3），該單位分數 1/6 可拆成「1/2 − 1/3」（可通分驗算：3/6 − 2/6 ＝ 1/6）",
        "連加總和 ＝ 第一個數 − 最後一個數"
      ],
      "conceptCompare": "【差 1 裂項 vs 差 2 裂項】當分母兩因數相差 1（如 2×3、3×4）且分子為 1 時，直接一減一消剛剛好；若分母兩因數相差 2（如 3×5）且分子是 2（2/15），也可直接拆成 1/3 − 1/5！",
      "examVariations": "私中資優班常把第一項加上 1/2，出成「1/2 ＋ 1/6 ＋ 1/12 ＋ … ＋ 1/90」，記得 1/2 ＝ 1 − 1/2，答案就會變成 1 − 1/10 ＝ 9/10。"
    },
    "check": {
      "expr": "1/6 + 1/12 + 1/20 + 1/30 + 1/42 + 1/56",
      "expect": "3/8"
    }
  },
  {
    "id": "U06-RV-O-018",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "同分母群組數列首尾配對求和",
    "level": 9,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察這串依分母排列的分數總和：1/2 ＋ （1/3 ＋ 2/3） ＋ （1/4 ＋ 2/4 ＋ 3/4） ＋ （1/5 ＋ 2/5 ＋ 3/5 ＋ 4/5） ＋ …… ＋ （1/10 ＋ 2/10 ＋ …… ＋ 9/10） ＝ ？",
    "options": [
      {
        "key": "A",
        "text": "45",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "B",
        "text": "27 1/2",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "22 1/2",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "20",
        "trapCode": "U06_BORROW_MISCALC"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否懂得先計算每一組括號內「同分母首尾配對湊 1」的規律，將看似繁雜的 45 個分數化簡成等差數列相加。",
      "steps": [
        {
          "type": "text",
          "text": "先在每個括號裡面把分數「頭尾配對湊成 1」：例如（1/4 ＋ 3/4） ＋ 2/4 ＝ 1 1/2、（1/5 ＋ 4/5） ＋ （2/5 ＋ 3/5） ＝ 2。"
        },
        {
          "type": "eq",
          "expr": "原式 ＝ 1/2 ＋ 1 ＋ 1 1/2 ＋ 2 ＋ 2 1/2 ＋ 3 ＋ 3 1/2 ＋ 4 ＋ 4 1/2"
        },
        {
          "type": "text",
          "text": "一共有 9 個數，用頭尾配對法：（1/2 ＋ 4 1/2） ＝ 5、（1 ＋ 4） ＝ 5、（1 1/2 ＋ 3 1/2） ＝ 5、（2 ＋ 3） ＝ 5，再加上正中間沒配對到的 2 1/2。"
        },
        {
          "type": "eq",
          "expr": "5 × 4 ＋ 2 1/2 ＝ 20 ＋ 2 1/2 ＝ 22 1/2"
        },
        {
          "type": "answer",
          "text": "答：22 1/2"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記除以 2 變回一半】每組括號的值其實是 1 個 1/2、2 個 1/2、…、9 個 1/2，算出 1 ＋ 2 ＋ … ＋ 9 ＝ 45 後忘記這是 45 個「1/2」，直接答 45。",
        "D": "【配對漏掉正中間】頭尾配對算出 5 × 4 ＝ 20 後，忘記加上正中間落單的 2 1/2。",
        "B": "【組數多算一組】看到最後分母是 10，誤以為有 10 組，錯加成 1 ＋ 2 ＋ … ＋ 10 ＝ 55 個 1/2，算成 27 1/2。"
      },
      "figureNote": "每個括號「頭尾兩個分數分子加起來剛好等於分母」，因此每兩個一組都是 1，寫出前四組的結果就能看見「每次多 1/2」的漂亮規律。",
      "insight": "分母從 2 排到 10 的真分數全加，每組的平均值都是 1/2，第幾組就等於幾個 1/2！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "分母為 甲 的所有真分數總和 ＝ （甲 − 1） 個 1/2",
        "等差數列配對：頭尾相加成固定數 × 配對組數 ＋ 奇數項的正中間項"
      ],
      "conceptCompare": "【分子逐一相加 vs 頭尾配對湊 1】也可以先把每個括號加出「3/3 ＝ 1、6/4 ＝ 1 1/2、10/5 ＝ 2…」，但用頭尾湊 1 不必乘大分子，連分母 100 都能秒算！",
      "examVariations": "若題目改成「分母到 20 為止，所有真分數的總和」，就是 1 到 19 總共 190 個 1/2，答案等於 95。"
    },
    "check": {
      "expr": "1/2 + (1/3+2/3) + (1/4+2/4+3/4) + (1/5+2/5+3/5+4/5) + (1/6+2/6+3/6+4/6+5/6) + (1/7+2/7+3/7+4/7+5/7+6/7) + (1/8+2/8+3/8+4/8+5/8+6/8+7/8) + (1/9+2/9+3/9+4/9+5/9+6/9+7/9+8/9) + (1/10+2/10+3/10+4/10+5/10+6/10+7/10+8/10+9/10)",
      "expect": "22 1/2"
    }
  },
  {
    "id": "U06-RV-O-019",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "三桶循環倒水總和不變還原",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "甲、乙、丙三個水桶合起來共有 18 公升的水。現在依序進行三次倒水：第一步從甲桶倒出 2 1/4 公升到乙桶；第二步從乙桶倒出 3 5/6 公升到丙桶；第三步從丙桶倒出 1 1/2 公升到甲桶。這時三桶的水量變得完全一樣多。請問「原本水量最多」和「原本水量最少」的兩桶，原本相差幾公升？",
    "options": [
      {
        "key": "A",
        "text": "3 11/12 公升",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "4 11/12 公升",
        "trapCode": "U06_BORROW_MISCALC"
      },
      {
        "key": "C",
        "text": "3 2/3 公升",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "D",
        "text": "4 1/12 公升",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生面對多步驟循環轉移問題時，能否抓住「三桶總水量 18 公升永遠不變」算出終點每桶 6 公升，再逐桶追蹤「倒出、倒進」還原最初水量並比較極值差。",
      "steps": [
        {
          "type": "text",
          "text": "水都在三個桶子裡倒來倒去，總和一直是 18 公升。最後三桶一樣多，所以最後每一桶各有 18 ÷ 3 ＝ 6 公升。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"25\" width=\"95\" height=\"42\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"77\" y=\"51\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1e40af\">甲桶（終 6）</text><rect x=\"182\" y=\"25\" width=\"95\" height=\"42\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"229\" y=\"51\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#92400e\">乙桶（終 6）</text><rect x=\"335\" y=\"25\" width=\"95\" height=\"42\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"382\" y=\"51\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#166534\">丙桶（終 6）</text><line x1=\"125\" y1=\"46\" x2=\"182\" y2=\"46\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><text x=\"153\" y=\"18\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">倒 2 1/4</text><line x1=\"277\" y1=\"46\" x2=\"335\" y2=\"46\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><text x=\"306\" y=\"18\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">倒 3 5/6</text><path d=\"M 382 67 L 382 106 L 77 106 L 77 67\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><text x=\"230\" y=\"128\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">丙倒出 1 1/2 公升回到甲（反推：倒出加回、倒進扣掉）</text></svg>",
          "caption": "圖解：追蹤每個桶子的進出水量，倒推時把「倒出去的加回來、別人倒進來的減出去」"
        },
        {
          "type": "eq",
          "expr": "甲原有 ＝ 6 ＋ 2 1/4 − 1 1/2 ＝ 6 3/4"
        },
        {
          "type": "eq",
          "expr": "乙原有 ＝ 6 ＋ 3 5/6 − 2 1/4 ＝ 6 ＋ 3 10/12 − 2 3/12 ＝ 7 7/12"
        },
        {
          "type": "eq",
          "expr": "丙原有 ＝ 6 ＋ 1 1/2 − 3 5/6 ＝ 7 3/6 − 3 5/6 ＝ 6 9/6 − 3 5/6 ＝ 3 4/6 ＝ 3 2/3"
        },
        {
          "type": "text",
          "text": "比較原本三桶：最多是乙桶 7 7/12 公升，最少是丙桶 3 2/3 公升（即 3 8/12 公升），兩者相減："
        },
        {
          "type": "eq",
          "expr": "7 7/12 − 3 8/12 ＝ 6 19/12 − 3 8/12 ＝ 3 11/12"
        },
        {
          "type": "answer",
          "text": "答：3 11/12 公升"
        }
      ],
      "distractorAnalysis": {
        "B": "【帶分數借位錯誤】向 7 借 1 換成 12/12 後忘記把 7 減 1 變成 6，錯算出 4 11/12 公升。",
        "C": "【只算出最少水量就作答】算出丙桶原本有 3 2/3 公升後忘記題目問的是「最多和最少的相差」。",
        "D": "【分數大減小倒減】算 7 7/12 − 3 8/12 時未向 7 借位，直接拿 8/12 減 7/12 得 1/12，錯算出 4 1/12 公升。"
      },
      "figureNote": "還原箭頭口訣：倒水結束結果是 6 公升，「離開自己的箭頭要加回來、飛進自己的箭頭要扣出去」，三桶總和 6 3/4 ＋ 7 7/12 ＋ 3 2/3 ＝ 18 剛好可自我驗算！",
      "insight": "循環倒水必先抓「總和不變」求出終點水量，再用「出加、進減」逐一還原起點！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "終點每桶水量 ＝ 總水量 ÷ 桶數",
        "單桶原有水量 ＝ 終點水量 ＋ 倒出總量 − 倒進總量"
      ],
      "conceptCompare": "【單向倒推 vs 分數進出帳本】把三步記成每個桶子的「收入與支出」直接加回與扣掉，比一步一步逆推更不容易把加減號搞混，算完還可檢查三桶相加是否等於 18。",
      "examVariations": "AMC 8／私中題常把三桶條件改成「每次倒出剩下的一半」，原理相同，一樣先算總和不變再從最後一步逐層反推。"
    },
    "check": {
      "expr": "(6 + 3 5/6 - 2 1/4) - (6 + 1 1/2 - 3 5/6)",
      "expect": "3 11/12"
    }
  },
  {
    "id": "U06-RV-O-020",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合挑戰",
    "batch": "奧數天梯",
    "source": "康軒五上U06奧數天梯",
    "category": "單位分數貪心極值構造",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "從 1/2、1/3、1/4、1/5、1/6、1/7 這六個分數中，選出「三個不同」的分數相加。如果要求它們的總和「嚴格小於 1，而且最接近 1」，請問這個最大總和是多少？",
    "options": [
      {
        "key": "A",
        "text": "19/20",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "B",
        "text": "41/42",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "11/12",
        "trapCode": "U06_WRONG_LCM"
      },
      {
        "key": "D",
        "text": "1",
        "trapCode": "U06_SWAP_OP_WORD"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生能否利用「逐步逼近 1」的貪心構造思維（先選最大且未超過 1 的部分，再補上剩餘空間內最大的單位分數），找到極值 41/42。",
      "steps": [
        {
          "type": "text",
          "text": "要讓三個分數加起來最接近 1 又不能超過 1，先挑最大的兩個來試：1/2 ＋ 1/3 ＝ 5/6，距離 1 還剩 1/6 的空間。"
        },
        {
          "type": "text",
          "text": "接下來第三個分數必須「嚴格小於 1/6」，而且越大越好！在剩下的 1/4、1/5、1/6、1/7 中，剛好只有 1/7 ＜ 1/6。"
        },
        {
          "type": "eq",
          "expr": "1/2 ＋ 1/3 ＋ 1/7 ＝ 21/42 ＋ 14/42 ＋ 6/42 ＝ 41/42"
        },
        {
          "type": "text",
          "text": "再檢查不選 1/3 改選 1/4 的最大組合：1/2 ＋ 1/4 ＋ 1/5 ＝ 19/20（差 1/20），而 1/42 ＜ 1/20，所以 41/42 更接近 1！若不選 1/2，最大也才 1/3 ＋ 1/4 ＋ 1/5 ＝ 47/60，遠小於 41/42。"
        },
        {
          "type": "answer",
          "text": "答：41/42"
        }
      ],
      "distractorAnalysis": {
        "C": "【過度迷信好通分的分母】只檢查分母為 12 倍數的組合 1/2 ＋ 1/4 ＋ 1/6 ＝ 11/12（差 1/12），錯失了 1/2 ＋ 1/3 ＋ 1/7。",
        "D": "【忘記嚴格小於 1 的限制】誤把「小於 1」看成可以等於 1，選了 1/2 ＋ 1/3 ＋ 1/6 ＝ 1。",
        "A": "【沒檢查到最小縫隙 1/7】誤以為選 1/2 ＋ 1/3 會超過 1，改算 1/2 ＋ 1/4 ＋ 1/5 ＝ 19/20（差 1/20），不如 41/42（只差 1/42）接近。"
      },
      "figureNote": "把 1 想成一個滿分蛋糕：先切 1/2、再切 1/3，只剩 1/6 的小縫；把這個縫再塞進一塊 1/7，只留 1/42 的極細縫隙！",
      "insight": "分數逼近 1 的神級構造：1/2 ＋ 1/3 ＋ 1/7 ＝ 41/42 是數學界有名的「最接近 1 的三個不同單位分數和」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "三個不同單位分數小於 1 的最大和：1/2 ＋ 1/3 ＋ 1/7 ＝ 41/42",
        "比較誰更接近 1 ➔ 直接比較「與 1 的差」誰最小（1/42 ＜ 1/20 ＜ 1/12）"
      ],
      "conceptCompare": "【選最大三個 vs 貪心逼近】選 1/2、1/3、1/4 雖然總和很大但已超過 1；選 1/2、1/3 留出 1/6 空間後，避開剛好補滿的 1/6（否則等於 1），退一步挑 1/7 才是極值。",
      "examVariations": "AMC 8 進階版會問「四個不同單位分數相加小於 1 的最大和」：把 1/42 再留縫挑 1/43，答案是 1/2 ＋ 1/3 ＋ 1/7 ＋ 1/43 ＝ 1805/1806！"
    },
    "check": {
      "expr": "1/2 + 1/3 + 1/7",
      "expect": "41/42"
    }
  },
  {
    "id": "U06-S1-M-001",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "異分母分數的加法",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "互質單位分數加法心算",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算挑戰：1/3 ＋ 1/4 等於多少？（提示：兩分母互質，心算更快喔）",
    "options": [
      {
        "key": "A",
        "text": "2/7",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "B",
        "text": "7/12",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "5/12",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "1/12",
        "trapCode": "U06_FORGET_SCALE_NUM"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗兩分數分母互質時，能否用「分母相乘當公分母」心算完成異分母單位分數相加。",
      "steps": [
        {
          "type": "text",
          "text": "分母 3 和 4 互質，直接把分母相乘 3 × 4 ＝ 12 當作公分母，分子 1/3 換成 4/12、1/4 換成 3/12。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 145\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"25\" width=\"90\" height=\"70\" rx=\"10\" fill=\"#eef2ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/><text x=\"85\" y=\"66\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#1e1b4b\">1/3</text><text x=\"150\" y=\"66\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#334155\">＋</text><rect x=\"170\" y=\"25\" width=\"90\" height=\"70\" rx=\"10\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"215\" y=\"66\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#064e3b\">1/4</text><text x=\"285\" y=\"66\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#334155\">＝</text><rect x=\"310\" y=\"20\" width=\"120\" height=\"80\" rx=\"10\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"370\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">分子：4 ＋ 3 ＝ 7</text><line x1=\"325\" y1=\"60\" x2=\"415\" y2=\"60\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"370\" y=\"82\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">分母：3 × 4 ＝ 12</text><text x=\"230\" y=\"128\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"600\" fill=\"#475569\">兩分母互質：分母相乘當公分母，分子依擴分放大後相加</text></svg>",
          "caption": "圖解：互質單位分數相加時，分母相乘當公分母，分子剛好是兩分母的和"
        },
        {
          "type": "eq",
          "expr": "1/3 ＋ 1/4 ＝ 4/12 ＋ 3/12 ＝ 7/12"
        },
        {
          "type": "answer",
          "text": "答：7/12"
        }
      ],
      "distractorAnalysis": {
        "A": "【分母直接相加】沒通分就把分子 1 ＋ 1 ＝ 2、分母 3 ＋ 4 ＝ 7 直接相加，得到錯誤的 2/7。",
        "C": "【分子計算粗心】知道公分母是 12，但在心算分子 4 ＋ 3 時錯算成 5，誤選 5/12。",
        "D": "【通分忘記乘分子】把分母乘成 12，卻忘記兩邊分子也要跟著乘 4 和乘 3，直接寫成 1/12。"
      },
      "insight": "分子都是 1 且分母互質時，答案就是「分母相加放上面，分母相乘放下面」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "異分母加法：先找公分母通分，再把分子相加",
        "兩分母互質時，用「分母相乘當公分母」最快"
      ],
      "conceptCompare": "【單位分數加法 vs 減法】1/3 ＋ 1/4 的分子是 4 ＋ 3 ＝ 7；若是 1/3 − 1/4，分子則是 4 − 3 ＝ 1，分母一樣都是 3 × 4 ＝ 12。",
      "examVariations": "段考常把分母換成連續整數（如 1/5 ＋ 1/6 或 1/7 ＋ 1/8），套用同樣口訣 1 秒就能報出 11/30 與 15/56。"
    },
    "check": {
      "expr": "1/3 + 1/4",
      "expect": "7/12"
    }
  },
  {
    "id": "U06-S1-M-002",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "異分母分數的加法",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "同分母配對湊整 1",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算 3/8 ＋ 1/4 ＋ 5/8，先湊整 1 再加，結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "5/4",
        "trapCode": "U06_IMPROPER_NOT_MIXED"
      },
      {
        "key": "B",
        "text": "9/20",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "C",
        "text": "1 1/8",
        "trapCode": "U06_FORGET_SCALE_NUM"
      },
      {
        "key": "D",
        "text": "1 1/4",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生能否先觀察同分母分數 3/8 與 5/8 配對湊整成 1，避免三個分數硬通分。",
      "steps": [
        {
          "type": "text",
          "text": "連加可以交換位置，先把分母同為 8 的 3/8 和 5/8 配對合起來，剛好湊成 8/8 ＝ 1。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 140\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 90 55 Q 220 12 350 55\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><text x=\"220\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">同分母配對湊整 ＝ 1</text><rect x=\"50\" y=\"55\" width=\"80\" height=\"40\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"90\" y=\"81\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#7f1d1d\">3/8</text><text x=\"155\" y=\"81\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#334155\">＋</text><rect x=\"180\" y=\"55\" width=\"80\" height=\"40\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"220\" y=\"81\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#0c4a6e\">1/4</text><text x=\"285\" y=\"81\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#334155\">＋</text><rect x=\"310\" y=\"55\" width=\"80\" height=\"40\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"350\" y=\"81\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#7f1d1d\">5/8</text><text x=\"230\" y=\"126\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">結果：1 ＋ 1/4 ＝ 1 1/4</text></svg>",
          "caption": "圖解：將 3/8 與 5/8 先連線湊成整數 1，再與 1/4 合併"
        },
        {
          "type": "eq",
          "expr": "（3/8 ＋ 5/8）＋ 1/4 ＝ 1 ＋ 1/4 ＝ 1 1/4"
        },
        {
          "type": "answer",
          "text": "答：1 1/4"
        }
      ],
      "distractorAnalysis": {
        "A": "【假分數未換帶分數】算對 1 1/4 的數值，卻只保留假分數 5/4 未化成最簡帶分數。",
        "B": "【分母直接相加】沒通分就把三個分子相加 3 ＋ 1 ＋ 5 ＝ 9，三個分母相加 8 ＋ 4 ＋ 8 ＝ 20。",
        "C": "【通分忘記乘分子】若從左到右通分把 1/4 換成分母 8 時忘了分子乘 2，錯算成 3/8 ＋ 1/8 ＋ 5/8 ＝ 1 1/8。"
      },
      "insight": "連加算式看到同分母先找「湊整 1 夥伴」，就能跳過繁瑣通分直接秒殺！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "連加交換律：先找同分母且分子合起來等於分母的數湊成 1",
        "整數 1 ＋ 真分數 ＝ 直接寫成帶分數"
      ],
      "conceptCompare": "【由左往右硬算 vs 分組湊整】由左往右算得先通分再約分；分組湊整讓 3/8 ＋ 5/8 直接變 1，連筆都不用動。",
      "examVariations": "題目有時會藏入一個可約分的分數，例如 3/8 ＋ 1/4 ＋ 10/16，先把 10/16 約分成 5/8 就能立刻湊整！"
    },
    "check": {
      "expr": "3/8 + 1/4 + 5/8",
      "expect": "1 1/4"
    }
  },
  {
    "id": "U06-S1-M-003",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "異分母分數的加法",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "互質異分母心算擴分",
    "level": 2,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "不用紙筆心算：2/5 ＋ 1/3 的和是多少？（提示：分母相乘當公分母）",
    "options": [
      {
        "key": "A",
        "text": "3/8",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "B",
        "text": "11/15",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "7/15",
        "trapCode": "U06_FORGET_SCALE_NUM"
      },
      {
        "key": "D",
        "text": "13/15",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "訓練當兩分母互質且分子不全為 1 時，心算將兩分數同時擴分到公分母後相加。",
      "steps": [
        {
          "type": "text",
          "text": "分母 5 和 3 互質，用分母相乘 5 × 3 ＝ 15 當公分母。2/5 分子分母同乘 3 得 6/15，1/3 同乘 5 得 5/15。"
        },
        {
          "type": "eq",
          "expr": "2/5 ＋ 1/3 ＝ 6/15 ＋ 5/15 ＝ 11/15"
        },
        {
          "type": "answer",
          "text": "答：11/15"
        }
      ],
      "distractorAnalysis": {
        "C": "【通分忘記乘分子】只把 2/5 擴分成 6/15，卻忘了把 1/3 的分子也乘 5，誤算成 6/15 ＋ 1/15 ＝ 7/15。",
        "D": "【分子計算粗心】心算 2 × 3 誤算成 8，變成 8/15 ＋ 5/15 ＝ 13/15。",
        "A": "【分母直接相加】忘記通分，直接把分子 2 ＋ 1 ＝ 3、分母 5 ＋ 3 ＝ 8 相加得 3/8。"
      },
      "insight": "分母互質時，左邊分子乘右邊分母（2×3＝6），右邊分子乘左邊分母（1×5＝5），相加放上面就對了！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "分母相乘當公分母：公分母 ＝ 5 × 3 ＝ 15",
        "兩邊分子分別乘上對方的分母，再相加"
      ],
      "conceptCompare": "【只擴分一邊 vs 兩邊都擴分】當分母有倍數關係（如 4 和 8）只擴分小分母；分母互質（如 5 和 3）兩邊都要擴分。",
      "examVariations": "若改成減法 2/5 − 1/3，同樣算出 6/15 − 5/15 ＝ 1/15，心算步驟完全相同。"
    },
    "check": {
      "expr": "2/5 + 1/3",
      "expect": "11/15"
    }
  },
  {
    "id": "U06-S1-M-004",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "異分母分數的加法",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "帶分數拆整數與同分母配對",
    "level": 2,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算 2 3/7 ＋ 1 2/5 ＋ 4/7，拆開整數與分數配對，答案是多少？",
    "options": [
      {
        "key": "A",
        "text": "3 2/5",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "3 9/19",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "C",
        "text": "4 14/35",
        "trapCode": "U06_UNREDUCED_FRAC"
      },
      {
        "key": "D",
        "text": "4 2/5",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗帶分數連加時，先將「整數與整數相加」且「同分母分數優先湊整 1」的簡算能力。",
      "steps": [
        {
          "type": "text",
          "text": "先把帶分數的整數部分拆開計算：2 ＋ 1 ＝ 3。"
        },
        {
          "type": "text",
          "text": "分數部分把同分母的 3/7 與 4/7 先合起來湊成 7/7 ＝ 1，再與剩下的 2/5 相加。"
        },
        {
          "type": "eq",
          "expr": "（2 ＋ 1）＋（3/7 ＋ 4/7）＋ 2/5 ＝ 3 ＋ 1 ＋ 2/5 ＝ 4 2/5"
        },
        {
          "type": "answer",
          "text": "答：4 2/5"
        }
      ],
      "distractorAnalysis": {
        "A": "【分子計算進位漏加】算出 3/7 ＋ 4/7 ＝ 1 後，只記得原整數 2 ＋ 1 ＝ 3 卻忘了把湊出的 1 加上去，誤答 3 2/5。",
        "B": "【分母直接相加】整數算對 3，分數部分誤將分子、分母各自直接相加成 9/19。",
        "C": "【未約分成最簡分數】若用分母 35 通分算成 4 14/35，忘記把 14/35 上下同除以 7 約分成 2/5。"
      },
      "insight": "帶分數連加兩大招：整數先算、同分母分數先湊成 1！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "帶分數加法：整數加整數，分數加分數",
        "分數滿 1 記得進位給整數部分"
      ],
      "conceptCompare": "【帶分數拆算法 vs 全換假分數】換成假分數會出現 17/7、7/5 等大數相乘；拆開整數後，完全不用通分 35 就能心算完成。",
      "examVariations": "若題目改成 2 3/7 ＋ 1 2/5 ＋ 5/7，先把 3/7 ＋ 5/7 算成 8/7 ＝ 1 1/7，最後再與 2/5 相加。"
    },
    "check": {
      "expr": "2 3/7 + 1 2/5 + 4/7",
      "expect": "4 2/5"
    }
  },
  {
    "id": "U06-S2-M-005",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "異分母分數的減法",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "互質單位分數減法心算",
    "level": 3,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算 1/4 − 1/5，善用「分母相乘、分子相減」口訣，結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "9/20",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "B",
        "text": "4/20",
        "trapCode": "U06_FORGET_SCALE_NUM"
      },
      {
        "key": "C",
        "text": "1/20",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "1/9",
        "trapCode": "U06_ADD_DENOM"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "建立「相鄰兩整數當分母的單位分數相減，差剛好等於分母相乘分之 1」的數感直覺。",
      "steps": [
        {
          "type": "text",
          "text": "分母 4 和 5 互質，用分母相乘 4 × 5 ＝ 20 當公分母；1/4 ＝ 5/20，1/5 ＝ 4/20。"
        },
        {
          "type": "eq",
          "expr": "1/4 − 1/5 ＝ 5/20 − 4/20 ＝ 1/20"
        },
        {
          "type": "answer",
          "text": "答：1/20"
        }
      ],
      "distractorAnalysis": {
        "A": "【加減運算顛倒】通分乘積 20 算對了，卻把減號看成加號，算成 5/20 ＋ 4/20 ＝ 9/20。",
        "D": "【分母直接相加】誤將兩分母直接相加寫成 1/9，未做通分計算。",
        "B": "【通分忘記乘分子】只將 1/4 擴分為 5/20，卻忘了將 1/5 的分子乘以 4，誤減成 5/20 − 1/20 ＝ 4/20。"
      },
      "insight": "相鄰兩數的單位分數相減（如 1/4 − 1/5），分母相乘放底下，分子永遠是 1！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "分母相乘當公分母：1/4 − 1/5 ＝ 5/20 − 4/20 ＝ 1/20",
        "這個等式反過來寫就是高年級巧消秘訣：1/20 ＝ 1/4 − 1/5"
      ],
      "conceptCompare": "【加法 1/4 ＋ 1/5 vs 減法 1/4 − 1/5】分母都是相乘得 20，加法分子是 5 ＋ 4 ＝ 9，減法分子是 5 − 4 ＝ 1。",
      "examVariations": "高星等挑戰題會反過來問：1/6 ＋ 1/12 ＋ 1/20 是多少？只要把 1/20 拆成 1/4 − 1/5 就能連續抵消！"
    },
    "check": {
      "expr": "1/4 - 1/5",
      "expect": "1/20"
    }
  },
  {
    "id": "U06-S2-M-006",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "異分母分數的減法",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "拆整數借 1 減法心算",
    "level": 3,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算 4 1/6 − 2/3，先把 4 拆出 1 來減 2/3，剩多少？",
    "options": [
      {
        "key": "A",
        "text": "3 5/6",
        "trapCode": "U06_FORGET_SCALE_NUM"
      },
      {
        "key": "B",
        "text": "4 1/2",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "C",
        "text": "3 3/6",
        "trapCode": "U06_UNREDUCED_FRAC"
      },
      {
        "key": "D",
        "text": "3 1/2",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "訓練遇到不夠減的帶分數減法時，直接從整數借 1 先減掉減數，再加回原本的真分數，簡化心算步驟。",
      "steps": [
        {
          "type": "text",
          "text": "1/6 不夠減 2/3，先把 4 1/6 拆成 3 ＋ 1 ＋ 1/6，先算 1 − 2/3 ＝ 1/3。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 145\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"230\" y=\"32\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0f172a\">拆解：4 1/6 ＝ 3 ＋ 1 ＋ 1/6</text><rect x=\"75\" y=\"50\" width=\"310\" height=\"42\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"230\" y=\"77\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e40af\">先算：1 − 2/3 ＝ 1/3 ＝ 2/6</text><text x=\"230\" y=\"122\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\">再合回：3 ＋ 2/6 ＋ 1/6 ＝ 3 3/6 ＝ 3 1/2</text></svg>",
          "caption": "圖解：先向整數借 1 減去 2/3，再把餘數 1/3 與原來的 1/6 相加並約分"
        },
        {
          "type": "eq",
          "expr": "3 ＋（1 − 2/3）＋ 1/6 ＝ 3 ＋ 2/6 ＋ 1/6 ＝ 3 3/6 ＝ 3 1/2"
        },
        {
          "type": "answer",
          "text": "答：3 1/2"
        }
      ],
      "distractorAnalysis": {
        "B": "【分數大減小倒減】看到 1/6 不夠減 2/3 沒有借 1，直接用 2/3 − 1/6 ＝ 1/2，整數 4 照抄得 4 1/2。",
        "C": "【未約分成最簡分數】算出 3 3/6 後，忘記把 3/6 約分成最簡分數 1/2。",
        "A": "【通分忘記乘分子】把 2/3 換成分母 6 時忘了分子乘 2，借 1 後算成 3 7/6 − 2/6 ＝ 3 5/6。"
      },
      "insight": "帶分數不夠減時，「先借 1 減掉後面、再加回前面分數」比硬換假分數更快！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "借 1 拆算法：借出整數 1 後，先算 1 − 減數，再加上原分數",
        "答案能約分時一定要化成最簡帶分數"
      ],
      "conceptCompare": "【傳統借位 3 7/6 − 4/6 vs 借 1 拆算】傳統借位要先算出 7/6 和 4/6；借 1 拆算一眼看出 1 − 2/3 ＝ 1/3，再心算 1/3 ＋ 1/6 ＝ 1/2。",
      "examVariations": "碰到大整數如 100 1/8 − 7/8 時，用拆整數借 1 法：99 ＋（1 − 7/8）＋ 1/8 ＝ 99 2/8 ＝ 99 1/4，完全不怕算錯！"
    },
    "check": {
      "expr": "4 1/6 - 2/3",
      "expect": "3 1/2"
    }
  },
  {
    "id": "U06-S2-M-007",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "異分母分數的減法",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "連減併算抵消成整數",
    "level": 4,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算 5 5/12 − 2 1/4 − 1 1/6，觀察分數部分能抵消多少？",
    "options": [
      {
        "key": "A",
        "text": "4 1/3",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "B",
        "text": "2",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "2 1/6",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "2 1/4",
        "trapCode": "U06_FORGET_SCALE_NUM"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗連減算式中，能否先把後面兩個減數合併，發現分數部分剛好與被減數完全抵消。",
      "steps": [
        {
          "type": "text",
          "text": "先把後面要減去的兩個數合起來算：1/4 ＋ 1/6 ＝ 3/12 ＋ 2/12 ＝ 5/12。"
        },
        {
          "type": "text",
          "text": "發現兩個減數合起來是 2 ＋ 1 ＋ 5/12 ＝ 3 5/12，分數部分剛好和前面的 5/12 完全抵消！"
        },
        {
          "type": "eq",
          "expr": "5 5/12 −（2 1/4 ＋ 1 1/6）＝ 5 5/12 − 3 5/12 ＝ 2"
        },
        {
          "type": "answer",
          "text": "答：2"
        }
      ],
      "distractorAnalysis": {
        "A": "【加減號方向搞反】把連減加上括號時忘了變號成加號，算成 5 5/12 −（2 1/4 − 1 1/6）＝ 4 1/3。",
        "C": "【分子計算粗心】算完 5/12 − 3/12 ＝ 2/12 後漏減後面的 2/12，誤答 2 2/12 ＝ 2 1/6。",
        "D": "【通分忘記乘分子】把 1/4 和 1/6 換成分母 12 時分子沒乘倍數，算成 5 5/12 − 2 1/12 − 1 1/12 ＝ 2 3/12 ＝ 2 1/4。"
      },
      "insight": "連減兩數等於減去兩數之和！先算減數相加常會有驚喜抵消。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "連減性質：甲 − 乙 − 丙 ＝ 甲 −（乙 ＋ 丙）",
        "整數與分數都剛好抵消時，答案直接寫整數"
      ],
      "conceptCompare": "【加括號變號陷阱】減號後面加上括號時，括號裡面的「−」一定要變成「＋」，千萬不能直接照抄減號。",
      "examVariations": "若題目改成 5 5/12 −（2 1/4 ＋ 1 1/6），因為已經先幫你加好括號，先算括號內 3 5/12 一樣秒殺得 2。"
    },
    "check": {
      "expr": "5 5/12 - 2 1/4 - 1 1/6",
      "expect": "2"
    }
  },
  {
    "id": "U06-S2-M-008",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "異分母分數的減法",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "補數湊 1 應用減法",
    "level": 4,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一瓶鮮奶重 1 1/3 公斤，喝掉 5/6 公斤後，剩下多少公斤？（用「補數湊 1」心算）",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "原有鮮奶（8/6 公斤）",
          "units": 8,
          "role": "base"
        },
        {
          "label": "喝掉鮮奶（5/6 公斤）",
          "units": 5,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "剩下 3 個 1/6 ＝ 1/2 公斤"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "1 1/2 公斤",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "B",
        "text": "3/6 公斤",
        "trapCode": "U06_UNREDUCED_FRAC"
      },
      {
        "key": "C",
        "text": "2 1/6 公斤",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "D",
        "text": "1/2 公斤",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "結合生活情境與「1 的補數」技巧，快速心算帶分數減去接近 1 的真分數。",
      "steps": [
        {
          "type": "text",
          "text": "把 1 1/3 看成 1 ＋ 1/3。先從 1 公斤扣掉喝掉的 5/6 公斤，剩下 1/6 公斤。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "（1 − 5/6）＋ 1/3 ＝ 1/6 ＋ 2/6 ＝ 3/6 ＝ 1/2"
        },
        {
          "type": "answer",
          "text": "答：1/2 公斤"
        }
      ],
      "distractorAnalysis": {
        "A": "【分數大減小倒減】沒向整數 1 借位，直接拿 5/6 − 1/3 ＝ 1/2，整數 1 照抄寫成 1 1/2 公斤。",
        "B": "【未約分成最簡分數】算到 3/6 公斤就停下來，未約分成最簡分數 1/2 公斤。",
        "C": "【多幾少幾加減顛倒】把「喝掉」誤用成加法，算成 1 1/3 ＋ 5/6 ＝ 2 1/6 公斤。"
      },
      "figureNote": "把 1 公斤切成 6 等分（每份 1/6 公斤），原有 1 1/3 ＝ 8/6 公斤（8 份），喝掉 5 份後，圖上相差剛好剩 3 份，也就是 3/6 ＝ 1/2 公斤。",
      "insight": "遇到減去接近 1 的分數（如 5/6、7/8），先算「1 − 減數」得到補數，再加回原分數最快！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "剩下的重量 ＝ 原有重量 − 喝掉的重量",
        "補數法：1 1/3 − 5/6 ＝（1 − 5/6）＋ 1/3"
      ],
      "conceptCompare": "【喝掉 5/6 公斤 vs 喝掉一瓶的 5/6】題目有寫單位「公斤」，代表直接減去 5/6 公斤；若沒寫單位，才是比例問題。",
      "examVariations": "若題目改成喝掉 5/6 公斤後，又倒進 1/2 公斤，先算完剩下 1/2 公斤再加 1/2 公斤，馬上得回 1 公斤！"
    },
    "check": {
      "expr": "1 1/3 - 5/6",
      "expect": "1/2"
    }
  },
  {
    "id": "U06-S3-M-009",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "分數大小比較與加減估算",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "基準 1/2 估算法比大小",
    "level": 5,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "不用通分，用「基準 1/2」心算判斷：3/7、5/11、6/13、7/13 哪個比 1/2 大？",
    "options": [
      {
        "key": "A",
        "text": "3/7",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "7/13",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "5/11",
        "trapCode": "U06_WRONG_LCM"
      },
      {
        "key": "D",
        "text": "6/13",
        "trapCode": "U06_UNIT_CONFUSE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生不用繁瑣通分，直接比較「分子 × 2」與「分母」來秒判分數是否大於 1/2。",
      "steps": [
        {
          "type": "text",
          "text": "判斷分數有沒有超過 1/2，只要把「分子 × 2」跟「分母」比一比：超過分母就是大於 1/2！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"115\" y=\"41\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">3/7、5/11、6/13 小於 1/2</text><text x=\"335\" y=\"41\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">7/13 大於 1/2</text><line x1=\"40\" y1=\"80\" x2=\"420\" y2=\"80\" stroke=\"#0f172a\" stroke-width=\"2.5\"/><circle cx=\"40\" cy=\"80\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"230\" cy=\"80\" r=\"5\" fill=\"#2563eb\"/><circle cx=\"250\" cy=\"80\" r=\"5\" fill=\"#dc2626\"/><circle cx=\"420\" cy=\"80\" r=\"4\" fill=\"#0f172a\"/><text x=\"40\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">0</text><text x=\"230\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">1/2</text><text x=\"420\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">1</text><text x=\"230\" y=\"134\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"600\" fill=\"#334155\">看分子的 2 倍是否超過分母：7 × 2 ＝ 14 大於 13</text></svg>",
          "caption": "圖解：以 1/2 為基準線，只有分子 2 倍超過分母的 7/13 落在 1/2 右側"
        },
        {
          "type": "eq",
          "expr": "3 × 2 ＝ 6（小於 7）、5 × 2 ＝ 10（小於 11）、6 × 2 ＝ 12（小於 13）、7 × 2 ＝ 14（大於 13）"
        },
        {
          "type": "answer",
          "text": "答：7/13"
        }
      ],
      "distractorAnalysis": {
        "C": "【基準比較失誤】誤以為分子 5 很接近 11 的一半就超過 1/2，實際上 5/11 ＝ 10/22 還差 1/22 才到 1/2。",
        "D": "【分子分母大小混淆】只看分母 13 很大或分子 6 較大，忽略 6 × 2 ＝ 12 仍小於分母 13。",
        "A": "【分子估算失誤】誤把 7 的一半當成 3，沒檢查 3 × 2 ＝ 6 仍小於 7。"
      },
      "insight": "比 1/2 大或小不用通分：分子乘以 2 大於分母，就一定大於 1/2！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準 1/2 判別法：分子 × 2 ＞ 分母 ➔ 大於 1/2",
        "分子 × 2 ＜ 分母 ➔ 小於 1/2"
      ],
      "conceptCompare": "【通分硬比 vs 基準 1/2 法】四個分母 7、11、13 互質，硬通分公分母會超過 1000；用基準 1/2 法 3 秒就能挑出答案。",
      "examVariations": "段考常考「哪一個分數最接近 1/2？」，只要算每個分數跟 1/2 的差距誰最小，就不用全部通分。"
    },
    "check": {
      "expr": "7/13",
      "expect": "7/13"
    }
  },
  {
    "id": "U06-S3-M-010",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "分數大小比較與加減估算",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "基準 1 補數比較相減",
    "level": 5,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算比對：11/12 與 7/8 都接近 1，不用大數通分，兩者相差多少？",
    "options": [
      {
        "key": "A",
        "text": "1/3",
        "trapCode": "U06_WRONG_LCM"
      },
      {
        "key": "B",
        "text": "1/24",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1/4",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "D",
        "text": "5/24",
        "trapCode": "U06_SWAP_OP_WORD"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗利用「與 1 的補數距離」將大分子減法轉化成單位分數相減的心算巧思。",
      "steps": [
        {
          "type": "text",
          "text": "11/12 離 1 差 1/12，7/8 離 1 差 1/8。因為 1/12 小於 1/8，代表 11/12 更靠近 1，兩數相差就等於它們離 1 的距離差。"
        },
        {
          "type": "eq",
          "expr": "11/12 − 7/8 ＝（1 − 1/12）−（1 − 1/8）＝ 1/8 − 1/12 ＝ 3/24 − 2/24 ＝ 1/24"
        },
        {
          "type": "answer",
          "text": "答：1/24"
        }
      ],
      "distractorAnalysis": {
        "A": "【通分公倍數找錯】誤把兩個分母中較大的 12 直接當公分母，算成 11/12 − 7/12 ＝ 4/12 ＝ 1/3。",
        "C": "【分母直接相減】看到差距是 1/8 與 1/12，誤把分母直接相減 12 − 8 ＝ 4，寫成 1/4。",
        "D": "【運算方向弄反】正確算出離 1 分別差 1/12 與 1/8，最後卻把兩段差距誤加起來 1/12 ＋ 1/8 ＝ 5/24。"
      },
      "insight": "兩個都很接近 1 的分數相減，只要比「它們離 1 差多少」的單位分數差就好！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準 1 補數技巧：11/12 ＝ 1 − 1/12，7/8 ＝ 1 − 1/8",
        "兩數相差 ＝ 1/8 − 1/12 ＝ 1/24"
      ],
      "conceptCompare": "【硬通分 22/24 − 21/24 vs 補數差 1/8 − 1/12】若換成 99/100 − 49/50，直接算分子好大；用補數差 1/50 − 1/100 ＝ 1/100 瞬間算完。",
      "examVariations": "段考愛考「98/99、99/100 誰比較大？」比離 1 的距離 1/99 與 1/100，距離越小的越接近 1 也就越大！"
    },
    "check": {
      "expr": "11/12 - 7/8",
      "expect": "1/24"
    }
  },
  {
    "id": "U06-S3-M-011",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "分數大小比較與加減估算",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "雙量基準互補湊整",
    "level": 6,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "甲壺有 7/12 公升紅茶，乙壺比甲壺少 1/6 公升，兩壺合起來共有幾公升？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "甲壺（7/12 公升）",
          "units": 7,
          "role": "base"
        },
        {
          "label": "乙壺（5/12 公升）",
          "units": 5,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "合起來剛好 12 個 1/12 ＝ 1 公升"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "1 公升",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "1 1/3 公升",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "5/12 公升",
        "trapCode": "U06_UNIT_CONFUSE"
      },
      {
        "key": "D",
        "text": "1 1/12 公升",
        "trapCode": "U06_FORGET_SCALE_NUM"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗兩步驟應用心算：先由甲壺求乙壺，並利用 7/12 與 5/12 對 1/2 對稱的數感直接湊成 1。",
      "steps": [
        {
          "type": "text",
          "text": "乙壺比甲壺少 1/6 公升，也就是少 2/12 公升，所以乙壺有 7/12 − 2/12 ＝ 5/12 公升。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "7/12 ＋（7/12 − 1/6）＝ 7/12 ＋ 5/12 ＝ 12/12 ＝ 1"
        },
        {
          "type": "answer",
          "text": "答：1 公升"
        }
      ],
      "distractorAnalysis": {
        "C": "【目標對象混淆】只算出乙壺的 5/12 公升就當成答案，忘記題目問「兩壺合起來」。",
        "D": "【通分忘記乘分子】把 1/6 換成分母 12 時分子沒乘 2，誤算乙壺為 7/12 − 1/12 ＝ 6/12，總和變 1 1/12 公升。",
        "B": "【多幾少幾加減顛倒】看到「少 1/6」卻用加法求乙壺，算成 7/12 ＋ 9/12 ＝ 16/12 ＝ 1 1/3 公升。"
      },
      "figureNote": "把 1 公升分成 12 等分，甲壺占 7 份、乙壺少 2 份占 5 份；從線段圖一眼看出 7 份 ＋ 5 份 ＝ 12 份，剛好湊滿 1 公升。",
      "insight": "甲是 1/2 多 1/12、乙是 1/2 少 1/12，一多一少剛好抵消，兩壺合起來是兩個 1/2 ＝ 1！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "乙量 ＝ 甲量 − 相差量",
        "兩壺總和 ＝ 甲量 ＋ 乙量"
      ],
      "conceptCompare": "【算出個別量 vs 移多補少】發現甲是 1/2 ＋ 1/12、乙是 1/2 − 1/12，把甲多出的 1/12 移給乙，兩壺都變 1/2，總和直接得 1。",
      "examVariations": "若改問「甲壺倒多少給乙壺後，兩壺會一樣多？」答案是差額 1/6 的一半，也就是 1/12 公升！"
    },
    "check": {
      "expr": "7/12 + (7/12 - 1/6)",
      "expect": "1"
    }
  },
  {
    "id": "U06-S3-M-012",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "分數大小比較與加減估算",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "逆推還原重排心算",
    "level": 6,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一條緞帶剪去 3/8 公尺，又接上 5/12 公尺，現在長 1 3/8 公尺，原本長幾公尺？",
    "options": [
      {
        "key": "A",
        "text": "1 5/12 公尺",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "B",
        "text": "1 4/12 公尺",
        "trapCode": "U06_UNREDUCED_FRAC"
      },
      {
        "key": "C",
        "text": "5/6 公尺",
        "trapCode": "U06_FORGET_SCALE_NUM"
      },
      {
        "key": "D",
        "text": "1 1/3 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗逆推還原算式時，能否將同分母的 1 3/8 與 ＋ 3/8 優先重排合算，避開與 5/12 先通分 24 的麻煩。",
      "steps": [
        {
          "type": "text",
          "text": "從現在的 1 3/8 公尺往回推：「又接上 5/12」要扣回來，「先剪去 3/8」要加回去，列式為 1 3/8 − 5/12 ＋ 3/8。"
        },
        {
          "type": "text",
          "text": "交換順序先把同分母的 1 3/8 ＋ 3/8 合起來變成 1 6/8 ＝ 1 3/4，再用分母 12 通分減去 5/12。"
        },
        {
          "type": "eq",
          "expr": "1 3/8 ＋ 3/8 − 5/12 ＝ 1 3/4 − 5/12 ＝ 1 9/12 − 5/12 ＝ 1 4/12 ＝ 1 1/3"
        },
        {
          "type": "answer",
          "text": "答：1 1/3 公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【逆推方向加減顛倒】沒有反著推算，反而把 1 3/8 直接 ＋ 5/12 − 3/8，算成 1 5/12 公尺。",
        "B": "【未約分成最簡分數】算出 1 4/12 公尺後，忘記分子分母同除以 4 約分成 1 1/3 公尺。",
        "C": "【通分忘記乘分子】把 3/4 換成分母 12 時分子忘了乘 3，誤算成 1 3/12 − 5/12 ＝ 10/12 ＝ 5/6 公尺。"
      },
      "insight": "逆推列式後別急著硬算！先找「同分母夥伴」合併約分，公分母立刻從 24 縮成 12！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "逆推原則：剪去用「加」還原，接上用「減」還原",
        "1 3/8 ＋ 3/8 ＝ 1 6/8 ＝ 1 3/4，先約分更好通分"
      ],
      "conceptCompare": "【先通分 24 硬算 vs 先合 3/8 再約成 3/4】先硬算 1 9/24 − 10/24 ＋ 9/24 容易算錯；先合再約分只要心算 9/12 − 5/12。",
      "examVariations": "遇到三步逆推「先倒出、再倒入、又倒出」時，先把每次的進出量合併，或把同分母擺在一起再一次算完。"
    },
    "check": {
      "expr": "1 3/8 - 5/12 + 3/8",
      "expect": "1 1/3"
    }
  },
  {
    "id": "U06-S4-M-013",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-4",
    "sectionName": "分數心算與湊整簡算",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "四數分組湊整連加",
    "level": 7,
    "difficulty": 4,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算連加：1/7 ＋ 3/11 ＋ 6/7 ＋ 8/11，利用分組湊整，和是多少？",
    "options": [
      {
        "key": "A",
        "text": "18/36",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "B",
        "text": "2 1/7",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "2",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "1 5/7",
        "trapCode": "U06_SWAP_OP_WORD"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗四個異分母分數連加時，能一眼辨識出兩對同分母且湊整成 1 的組合，3 秒心算完成。",
      "steps": [
        {
          "type": "text",
          "text": "觀察分母：兩個分母 7 的合起來剛好是 1，兩個分母 11 的合起來也剛好是 1！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 65 60 Q 165 20 265 60\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><text x=\"165\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">1/7 ＋ 6/7 ＝ 1</text><rect x=\"35\" y=\"60\" width=\"60\" height=\"34\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"65\" y=\"82\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#7f1d1d\">1/7</text><text x=\"115\" y=\"82\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">＋</text><rect x=\"135\" y=\"60\" width=\"60\" height=\"34\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"165\" y=\"82\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0c4a6e\">3/11</text><text x=\"215\" y=\"82\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">＋</text><rect x=\"235\" y=\"60\" width=\"60\" height=\"34\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"265\" y=\"82\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#7f1d1d\">6/7</text><text x=\"315\" y=\"82\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">＋</text><rect x=\"335\" y=\"60\" width=\"60\" height=\"34\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"365\" y=\"82\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0c4a6e\">8/11</text><path d=\"M 165 94 Q 265 130 365 94\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2.2\"/><text x=\"265\" y=\"140\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0284c7\">3/11 ＋ 8/11 ＝ 1</text></svg>",
          "caption": "圖解：紅線與藍線各自連線湊整成 1，合計 1 ＋ 1 ＝ 2"
        },
        {
          "type": "eq",
          "expr": "（1/7 ＋ 6/7）＋（3/11 ＋ 8/11）＝ 1 ＋ 1 ＝ 2"
        },
        {
          "type": "answer",
          "text": "答：2"
        }
      ],
      "distractorAnalysis": {
        "A": "【分母直接相加】沒找配對也沒有通分，把四個分子相加得 18、四個分母相加得 36。",
        "B": "【分子計算粗心】把 1/7 ＋ 6/7 誤心算成 8/7 ＝ 1 1/7，最後合起來變 2 1/7。",
        "D": "【加減號搞反】把 3/11 ＋ 8/11 算成 1 後，卻把 6/7 與 1/7 相減得 5/7，合計 1 5/7。"
      },
      "insight": "遇到分母很大的連加（7 和 11 公分母要 77），幾乎都能直接「分組湊整 1」秒殺！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "連加交換與結合律：同分母先放進同一組",
        "1/7 ＋ 6/7 ＝ 1，3/11 ＋ 8/11 ＝ 1"
      ],
      "conceptCompare": "【通分硬算 77 分之幾 vs 連線湊整】通分要乘兩次 7 與 11 還得加總再除以 77；連線湊整只要算 1 ＋ 1 ＝ 2。",
      "examVariations": "高階變化會混入 6 個或 8 個分數，甚至有一個無法配對的餘數，只要先湊光所有成對整數，最後只剩一個單獨分數！"
    },
    "check": {
      "expr": "1/7 + 3/11 + 6/7 + 8/11",
      "expect": "2"
    }
  },
  {
    "id": "U06-S4-M-014",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-4",
    "sectionName": "分數心算與湊整簡算",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "帶符號搬家配對湊整",
    "level": 7,
    "difficulty": 4,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算挑戰：6 4/9 − 2 5/8 ＋ 3 5/9 − 1 3/8，重排配對後的結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "6",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "8 3/4",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "5",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "7",
        "trapCode": "U06_BORROW_MISCALC"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗加減混合時「連同前面符號一起搬家」的技巧，把分母為 9 與分母為 8 的各別湊成整數。",
      "steps": [
        {
          "type": "text",
          "text": "搬家時記得連同前面的加減符號一起帶走！把 ＋ 3 5/9 移到 6 4/9 旁邊，剩下 − 2 5/8 − 1 3/8 合起來一起減。"
        },
        {
          "type": "eq",
          "expr": "（6 4/9 ＋ 3 5/9）−（2 5/8 ＋ 1 3/8）＝ 10 − 4 ＝ 6"
        },
        {
          "type": "answer",
          "text": "答：6"
        }
      ],
      "distractorAnalysis": {
        "B": "【括號變號失誤】把 − 2 5/8 − 1 3/8 加上括號時，括號內忘記變加號，錯算成 10 −（2 5/8 − 1 3/8）＝ 8 3/4。",
        "C": "【分數湊整忘記進位】計算 6 4/9 ＋ 3 5/9 時漏掉分數合起來的 1，只算 9 − 4 ＝ 5。",
        "D": "【進位計算漏算 1】計算 2 5/8 ＋ 1 3/8 時漏掉分數湊出的 1，錯減成 10 − 3 ＝ 7。"
      },
      "insight": "帶符號搬家記住「＋ 放前面當加法湊整，兩個 − 合進括號變加法一起減」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "帶符號搬家：數字要帶著它左邊的 ＋ 或 − 一起移動",
        "連減合併：− 乙 − 丙 ＝ −（乙 ＋ 丙）"
      ],
      "conceptCompare": "【帶分數拆湊 vs 通分 72】9 和 8 的最小公倍數是 72，硬算會累死人；帶符號搬家只要算 10 − 4 ＝ 6。",
      "examVariations": "若第一項本身帶負號以外的符號排列（如先減後加），一樣先將所有「加的同分母」和「減的同分母」各自歸隊。"
    },
    "check": {
      "expr": "6 4/9 - 2 5/8 + 3 5/9 - 1 3/8",
      "expect": "6"
    }
  },
  {
    "id": "U06-S4-M-015",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-4",
    "sectionName": "分數心算與湊整簡算",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "接近整數帶分數補整簡算",
    "level": 8,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算巧算：9 14/15 ＋ 19 19/20 ＋ 29 29/30，用補整數法算結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "60 3/20",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "B",
        "text": "59 51/60",
        "trapCode": "U06_UNREDUCED_FRAC"
      },
      {
        "key": "C",
        "text": "59 17/20",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "60 17/20",
        "trapCode": "U06_BORROW_MISCALC"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "訓練把接近整數的帶分數改寫成「整數 − 單位分數」，大幅縮小通分數字的心算策略。",
      "steps": [
        {
          "type": "text",
          "text": "這三個帶分數都只差一點點就到整數：9 14/15 ＝ 10 − 1/15、19 19/20 ＝ 20 − 1/20、29 29/30 ＝ 30 − 1/30。"
        },
        {
          "type": "text",
          "text": "先把整數加起來 10 ＋ 20 ＋ 30 ＝ 60，再把多借來湊整的三個小分數合起來減掉：1/15 ＋ 1/20 ＋ 1/30 ＝ 4/60 ＋ 3/60 ＋ 2/60 ＝ 9/60 ＝ 3/20。"
        },
        {
          "type": "eq",
          "expr": "（10 ＋ 20 ＋ 30）−（1/15 ＋ 1/20 ＋ 1/30）＝ 60 − 3/20 ＝ 59 17/20"
        },
        {
          "type": "answer",
          "text": "答：59 17/20"
        }
      ],
      "distractorAnalysis": {
        "A": "【補數加減顛倒】先湊成 60 後，忘記要把多補的 3/20 扣掉，反而加上去寫成 60 3/20。",
        "B": "【未約分成最簡分數】若未先約分算出 59 51/60，忘了分子分母同除以 3 化成 59 17/20。",
        "D": "【帶分數借位忘了減 1】計算 60 − 3/20 時向 60 借 1 換成 20/20，卻忘了 60 要少 1 變 59。"
      },
      "insight": "分子只比分母少 1 的帶分數，全部看成「下一個整數 − 補數」，馬上變身超好算的單位分數！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "補整技巧：9 14/15 ＝ 10 − 1/15",
        "減數合併：60 − 9/60 ＝ 60 − 3/20 ＝ 59 17/20"
      ],
      "conceptCompare": "【直接通分 56/60 ＋ 57/60 ＋ 58/60 vs 補整法】直接算要加三位數 171/60 再除 60；補整法只需心算 4 ＋ 3 ＋ 2 ＝ 9。",
      "examVariations": "如果題目更長如 9 9/10 ＋ 99 99/100 ＋ 999 999/1000，照樣先算 10 ＋ 100 ＋ 1000 −（1/10 ＋ 1/100 ＋ 1/1000）！"
    },
    "check": {
      "expr": "9 14/15 + 19 19/20 + 29 29/30",
      "expect": "59 17/20"
    }
  },
  {
    "id": "U06-S4-M-016",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "6-4",
    "sectionName": "分數心算與湊整簡算",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "去括號變號與異分母抵消",
    "level": 8,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算 7 5/13 − （2 5/13 − 3/4），巧妙去括號抵消 5/13，結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "5 3/4",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "4 1/4",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "5 1/52",
        "trapCode": "U06_BIG_MINUS_SMALL_FRAC"
      },
      {
        "key": "D",
        "text": "5 1/4",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗減號後去括號必須變號的核心觀念，並利用同分母 5/13 直接相消避免分母 52 的複雜通分。",
      "steps": [
        {
          "type": "text",
          "text": "括號前面是減號「−」，去掉括號時裡面的減號要變成加號「＋」，把算式改寫成 7 5/13 − 2 5/13 ＋ 3/4。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"230\" y=\"36\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0f172a\">原式：7 5/13 −（2 5/13 − 3/4）</text><rect x=\"55\" y=\"52\" width=\"350\" height=\"38\" rx=\"8\" fill=\"#fef2f2\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"230\" y=\"76\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#b91c1c\">去括號變號：7 5/13 − 2 5/13 ＋ 3/4</text><text x=\"230\" y=\"118\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\">5/13 抵消，剩下：5 ＋ 3/4 ＝ 5 3/4</text></svg>",
          "caption": "圖解：括號前為減號時，去括號內減變加，兩個 5/13 剛好消去"
        },
        {
          "type": "eq",
          "expr": "7 5/13 − 2 5/13 ＋ 3/4 ＝ 5 ＋ 3/4 ＝ 5 3/4"
        },
        {
          "type": "answer",
          "text": "答：5 3/4"
        }
      ],
      "distractorAnalysis": {
        "C": "【硬算又倒減出錯】先算括號內 2 5/13 − 3/4 時未借位，倒減成 2 19/52，最後錯算成 5 1/52。",
        "D": "【分子計算粗心】算出 7 − 2 ＝ 5 後，誤把 ＋ 3/4 看成補數 1/4，錯選 5 1/4。",
        "B": "【去括號忘記變號】直接把括號拿掉卻維持 − 3/4，算成 5 − 3/4 ＝ 4 1/4。"
      },
      "insight": "看到括號內外藏著相同怪分母（如 5/13），就是出題老師暗示你「去括號抵消」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "減號去括號變號：甲 −（乙 − 丙）＝ 甲 − 乙 ＋ 丙",
        "同分母先抵消，不需通分 13 × 4 ＝ 52"
      ],
      "conceptCompare": "【先算括號內 vs 去括號】括號內的 5/13 − 3/4 還得借 1 算成 52 分之幾；去括號直接消掉 5/13，連草稿紙都省了。",
      "examVariations": "如果括號前面是「＋」號，去括號時裡面的運算符號就維持原樣不變號喔！"
    },
    "check": {
      "expr": "7 5/13 - (2 5/13 - 3/4)",
      "expect": "5 3/4"
    }
  },
  {
    "id": "U06-RV-M-017",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合心算挑戰",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "單位分數分拆連鎖巧消",
    "level": 9,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "把 1/6 拆成 1/2 − 1/3，心算 1/6 ＋ 1/12 ＋ 1/20 ＋ 1/30 巧消後的答案？",
    "options": [
      {
        "key": "A",
        "text": "1/3",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "1/2",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "2/6",
        "trapCode": "U06_UNREDUCED_FRAC"
      },
      {
        "key": "D",
        "text": "4/68",
        "trapCode": "U06_ADD_DENOM"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "進階資優心算：利用連續兩整數乘積的單位分數可拆成兩單位分數之差，進行前後抵消（裂項）。",
      "steps": [
        {
          "type": "text",
          "text": "觀察分母：6 ＝ 2 × 3、12 ＝ 3 × 4、20 ＝ 4 × 5、30 ＝ 5 × 6，每個分數都能拆成「小分母減大分母」。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"120\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">1/6 ＝ 1/2 − 1/3</text><text x=\"340\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">1/12 ＝ 1/3 − 1/4</text><text x=\"120\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">1/20 ＝ 1/4 − 1/5</text><text x=\"340\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">1/30 ＝ 1/5 − 1/6</text><rect x=\"35\" y=\"88\" width=\"390\" height=\"32\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><text x=\"230\" y=\"109\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">全部相加，中間 1/3、1/4、1/5 一減一加抵消</text><text x=\"230\" y=\"148\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\">只剩頭尾：1/2 − 1/6 ＝ 3/6 − 1/6 ＝ 2/6 ＝ 1/3</text></svg>",
          "caption": "圖解：將四個分數拆成相鄰單位分數差後，中間項全部抵消，只留首項與末項"
        },
        {
          "type": "eq",
          "expr": "（1/2 − 1/3）＋（1/3 − 1/4）＋（1/4 − 1/5）＋（1/5 − 1/6）＝ 1/2 − 1/6 ＝ 1/3"
        },
        {
          "type": "answer",
          "text": "答：1/3"
        }
      ],
      "distractorAnalysis": {
        "B": "【漏算最後一項】只看開頭的 1/2 以為後面全部抵消光了，忘記還要減掉尾巴剩下的 1/6。",
        "C": "【未約分成最簡分數】算出 1/2 − 1/6 ＝ 2/6 後，忘記上下同除以 2 約分成 1/3。",
        "D": "【分母直接相加】沒看出拆項結構，直接將四個分子相加得 4、四個分母相加得 68。"
      },
      "insight": "分母是「兩個連續整數相乘」的單位分數連加，拆成減法後中間一定全消，只剩「頭減尾」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "分拆口訣：1/6 ＝ 1/2 − 1/3、1/12 ＝ 1/3 − 1/4",
        "連鎖相消：中間一減一加抵消，只算 頭 − 尾"
      ],
      "conceptCompare": "【硬找公分母 60 vs 分拆巧消】若硬通分成 10/60 ＋ 5/60 ＋ 3/60 ＋ 2/60 碰到 1/42、1/56 就會算不動；分拆巧消無論幾項都一樣快。",
      "examVariations": "若前面多加一個 1/2（即 1/2 ＋ 1/6 ＋ ... ＋ 1/90），把 1/2 拆成 1 − 1/2，答案直接變成 1 − 1/10 ＝ 9/10！"
    },
    "check": {
      "expr": "1/6 + 1/12 + 1/20 + 1/30",
      "expect": "1/3"
    }
  },
  {
    "id": "U06-RV-M-018",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合心算挑戰",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "帶分數拆算結合單位分數巧消",
    "level": 9,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "拆開整數與分數心算：1 1/2 ＋ 2 1/6 ＋ 3 1/12 ＋ 4 1/20 的結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "11",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "10 3/10",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "10 4/40",
        "trapCode": "U06_ADD_DENOM"
      },
      {
        "key": "D",
        "text": "10 4/5",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "綜合考驗帶分數「整數分離相加」與分數部分「單位分數連鎖相消」的雙重心算技巧。",
      "steps": [
        {
          "type": "text",
          "text": "先把四個整數部分提出來心算：1 ＋ 2 ＋ 3 ＋ 4 ＝ 10。"
        },
        {
          "type": "text",
          "text": "分數部分 1/2 ＋ 1/6 ＋ 1/12 ＋ 1/20 各自拆開：1/2 ＝ 1 − 1/2、1/6 ＝ 1/2 − 1/3、1/12 ＝ 1/3 − 1/4、1/20 ＝ 1/4 − 1/5。"
        },
        {
          "type": "eq",
          "expr": "10 ＋（1 − 1/2 ＋ 1/2 − 1/3 ＋ 1/3 − 1/4 ＋ 1/4 − 1/5）＝ 10 ＋（1 − 1/5）＝ 10 4/5"
        },
        {
          "type": "answer",
          "text": "答：10 4/5"
        }
      ],
      "distractorAnalysis": {
        "A": "【漏算末項減數】誤以為分數拆項巧消後會剛好湊成整數 1，算成 10 ＋ 1 ＝ 11。",
        "B": "【頭項誤判】分數巧消時錯把開頭寫成 1/2 而非 1，算成 1/2 − 1/5 ＝ 3/10，答 10 3/10。",
        "C": "【分母直接相加】整數算對 10，分數部分把分子相加得 4、分母相加 2 ＋ 6 ＋ 12 ＋ 20 ＝ 40。"
      },
      "insight": "遇到整數跟分數都有規律的帶分數連加，先拆成「整數歸整數、分數歸分數」兩路心算！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "整數和：1 ＋ 2 ＋ 3 ＋ 4 ＝ 10",
        "分數巧消：1/2 ＝ 1 − 1/2，最後只剩 1 − 1/5 ＝ 4/5"
      ],
      "conceptCompare": "【從 1/2 開始消 vs 從 1/6 開始消】從 1/2 開始時，頭是 1（因為 1/2 ＝ 1 − 1/2）；從 1/6 開始時，頭才是 1/2！開頭一定要看清楚。",
      "examVariations": "私中資優考常拉長到 9 9/90（即加到 9 1/90），整數和 1 加到 9 是 45，分數剩 1 − 1/10 ＝ 9/10，答案立刻報出 45 9/10！"
    },
    "check": {
      "expr": "1 1/2 + 2 1/6 + 3 1/12 + 4 1/20",
      "expect": "10 4/5"
    }
  },
  {
    "id": "U06-RV-M-019",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合心算挑戰",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "倍半連減剩餘數感",
    "level": 10,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算倍半巧算：3 − 1/2 − 1/4 − 1/8 − 1/16 − 1/32，結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "3 1/32",
        "trapCode": "U06_BORROW_MISCALC"
      },
      {
        "key": "B",
        "text": "2 31/32",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "C",
        "text": "2 1/32",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "2 1/64",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "考驗數形結合直覺：理解從 1 開始每次切掉剩下的一半，減到 1/32 時剛好就只剩下最後一小塊 1/32。",
      "steps": [
        {
          "type": "text",
          "text": "先從 3 借出 1 來切蛋糕，另外 2 整塊先放旁邊不動。每次切走剩下的一半：1 切掉 1/2 剩 1/2，再切掉 1/4 剩 1/4……切到 1/32 後剛好就剩 1/32！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"392\" y=\"24\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0369a1\">1/16</text><rect x=\"30\" y=\"35\" width=\"200\" height=\"40\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><text x=\"130\" y=\"60\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0c4a6e\">1/2</text><rect x=\"230\" y=\"35\" width=\"100\" height=\"40\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><text x=\"280\" y=\"60\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0c4a6e\">1/4</text><rect x=\"330\" y=\"35\" width=\"50\" height=\"40\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><text x=\"355\" y=\"60\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0c4a6e\">1/8</text><rect x=\"380\" y=\"35\" width=\"25\" height=\"40\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><rect x=\"405\" y=\"35\" width=\"12\" height=\"40\" fill=\"#7dd3fc\" stroke=\"#0284c7\" stroke-width=\"1.5\"/><rect x=\"417\" y=\"35\" width=\"13\" height=\"40\" fill=\"#fef08a\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"368\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0369a1\">減 1/32</text><text x=\"424\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">剩 1/32</text><text x=\"230\" y=\"136\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">借 1 連續折半 5 次後剩 1/32，加上未切的 2 得 2 1/32</text></svg>",
          "caption": "圖解：將 1 塊依序減去 1/2、1/4、1/8、1/16、1/32，最後黃色部分剛好剩 1/32"
        },
        {
          "type": "eq",
          "expr": "2 ＋（1 − 1/2 − 1/4 − 1/8 − 1/16 − 1/32）＝ 2 ＋ 1/32 ＝ 2 1/32"
        },
        {
          "type": "answer",
          "text": "答：2 1/32"
        }
      ],
      "distractorAnalysis": {
        "A": "【帶分數借位忘了減 1】算出剩下 1/32，卻忘了整數 3 已經借出 1，誤寫成 3 1/32。",
        "B": "【運算方向錯置】算出 1/2 ＋ 1/4 ＋ 1/8 ＋ 1/16 ＋ 1/32 ＝ 31/32 後，誤把 31/32 直接拼在 2 後面而沒用 1 去減。",
        "D": "【倍半次數算錯】把切 5 次誤算成切 6 次，最後剩餘量錯寫成 1/64。"
      },
      "insight": "從 1 開始一直減一半，減到最後一個分數是多少，剩下的就剛好也是多少！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "倍半剩餘律：1 − 1/2 − 1/4 − … − 1/32 ＝ 1/32",
        "連減先借 1，剩餘量再加回剩下的整數 2"
      ],
      "conceptCompare": "【1/2 ＋ 1/4 ＋ … ＋ 1/32 vs 1 − 1/2 − 1/4 − … − 1/32】前者是把切走的全部加起來等於 1 − 1/32 ＝ 31/32；後者是看最後剩下那一格 1/32。",
      "examVariations": "若題目改成 1/2 ＋ 1/4 ＋ 1/8 ＋ 1/16 ＋ 1/32 ＋ 1/64，不用通分 64 連加，直接算 1 − 1/64 ＝ 63/64！"
    },
    "check": {
      "expr": "3 - 1/2 - 1/4 - 1/8 - 1/16 - 1/32",
      "expect": "2 1/32"
    }
  },
  {
    "id": "U06-RV-M-020",
    "legacyId": null,
    "unitId": "U06",
    "targetUnitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合心算挑戰",
    "batch": "純腦力體操",
    "source": "康軒五上U06純腦力體操",
    "category": "多組同分母配對湊整巧消",
    "level": 10,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "巧算：12 5/7 ＋ 8 7/12 − 2 5/7 − 3 1/4 ＋ 4 5/12 − 1 3/4 ＝ ？",
    "options": [
      {
        "key": "A",
        "text": "21 1/2",
        "trapCode": "U06_SWAP_OP_WORD"
      },
      {
        "key": "B",
        "text": "19",
        "trapCode": "U06_BORROW_MISCALC"
      },
      {
        "key": "C",
        "text": "18",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "17",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "壓軸測試面對多組異分母加減混合算式時，能否透過「帶符號搬家」與「同分母湊整／抵消」實現零草稿心算。",
      "steps": [
        {
          "type": "text",
          "text": "面對六個帶分數別慌張，按分母 7、12、4 分成三對，連同左邊的符號一起搬家配對！"
        },
        {
          "type": "eq",
          "expr": "第一對（分母 7）：12 5/7 − 2 5/7 ＝ 10"
        },
        {
          "type": "eq",
          "expr": "第二對（分母 12）：8 7/12 ＋ 4 5/12 ＝ 13"
        },
        {
          "type": "eq",
          "expr": "第三對（分母 4）：− 3 1/4 − 1 3/4 ＝ −（3 1/4 ＋ 1 3/4）＝ − 5"
        },
        {
          "type": "eq",
          "expr": "三對合併：10 ＋ 13 − 5 ＝ 18"
        },
        {
          "type": "answer",
          "text": "答：18"
        }
      ],
      "distractorAnalysis": {
        "A": "【去括號或併括號變號錯誤】把 − 3 1/4 − 1 3/4 合併時忘了裡面改加號，錯減成 −（3 1/4 − 1 3/4）＝ − 1 1/2，算出 21 1/2。",
        "D": "【分子計算進位失誤】計算 8 7/12 ＋ 4 5/12 時漏加滿 1 進位的數，誤算成 12，總和變 10 ＋ 12 − 5 ＝ 17。",
        "B": "【分數湊滿 1 忘記進位】計算 3 1/4 ＋ 1 3/4 時漏掉分數湊出的 1，錯減成 23 − 4 ＝ 19。"
      },
      "insight": "越長的混合算式越有鬼！按分母把分數分組歸隊，每組幾乎都能湊整或直接抵消。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "分母配對三步法：看分母分組 ➔ 帶符號搬家 ➔ 各組湊整或抵消",
        "兩個減數合併時：− 甲 − 乙 ＝ −（甲 ＋ 乙）"
      ],
      "conceptCompare": "【全部通分 84 硬算 vs 分組配對】7、12、4 的最小公倍數高達 84，硬算幾乎必錯；分組配對只要算 10 ＋ 13 − 5 ＝ 18。",
      "examVariations": "私中或 AMC 8 預備題常把其中一個分數偽裝成未約分數（如把 1 3/4 寫成 1 9/12 或 1 6/8），只要先約成最簡分數就會立刻露餡配對成功！"
    },
    "check": {
      "expr": "12 5/7 + 8 7/12 - 2 5/7 - 3 1/4 + 4 5/12 - 1 3/4",
      "expect": "18"
    }
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U06'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
