// U07 4D 滿血題庫分片（共 60 題）
(function (root) {
  const DATA = [
  {
    "id": "U07-S1-B-001",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-1 兩步驟連除與括號問題",
    "section": "7-1",
    "sectionName": "兩步驟連除與括號問題",
    "category": "連除兩步驟應用問題",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "麵包店剛烤好 180 個小餐包，每 6 個裝成 1 袋，每 5 袋裝成 1 箱，全部一共可以裝成幾箱？",
    "options": [
      {
        "key": "A",
        "text": "30 箱",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "150 箱",
        "trapCode": "U07_DIV_CHAIN_WRONG"
      },
      {
        "key": "C",
        "text": "6 箱",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "12 箱",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否能理解兩步驟連除問題的題意，並正確運用由左而右的連除或括號併式求得最終箱數。",
      "steps": [
        {
          "type": "text",
          "text": "先算出 180 個小餐包可以裝成幾袋，再把總袋數每 5 袋裝 1 箱，就是總共的箱數。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 480 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"25\" width=\"120\" height=\"82\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"72\" y=\"55\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1e293b\">180 個餐包</text><text x=\"72\" y=\"82\" font-size=\"13\" text-anchor=\"middle\" fill=\"#475569\">每 6 個裝 1 袋</text><line x1=\"136\" y1=\"66\" x2=\"174\" y2=\"66\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"155\" y=\"56\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0369a1\">÷ 6</text><rect x=\"178\" y=\"25\" width=\"120\" height=\"82\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"238\" y=\"55\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0369a1\">共 30 袋</text><text x=\"238\" y=\"82\" font-size=\"13\" text-anchor=\"middle\" fill=\"#475569\">每 5 袋裝 1 箱</text><line x1=\"302\" y1=\"66\" x2=\"340\" y2=\"66\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"321\" y=\"56\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#047857\">÷ 5</text><rect x=\"344\" y=\"25\" width=\"124\" height=\"82\" rx=\"8\" fill=\"#d1fae5\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"406\" y=\"55\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#047857\">共 6 箱</text><text x=\"406\" y=\"82\" font-size=\"13\" text-anchor=\"middle\" fill=\"#065f46\">合起來 ÷ 30</text><text x=\"240\" y=\"138\" font-size=\"13\" text-anchor=\"middle\" fill=\"#334155\">連除兩次等於除以兩數的乘積：180 ÷ （6 × 5） ＝ 6</text></svg>",
          "caption": "小餐包兩步驟分裝示意：先裝袋再裝箱，共裝成 6 箱"
        },
        {
          "type": "eq",
          "expr": "180 ÷ 6 ÷ 5 ＝ 30 ÷ 5 ＝ 6"
        },
        {
          "type": "answer",
          "text": "答：6 箱"
        }
      ],
      "distractorAnalysis": {
        "A": "【只算完第一步】只算了 180 ÷ 6 ＝ 30 袋，忘記把 30 袋再每 5 袋裝成 1 箱。",
        "D": "【除法計算進位錯誤】把 180 ÷ 6 誤算為 60 袋，再除以 5 得到 12 箱。",
        "B": "【連除順序錯成先除後乘】誤算成 180 ÷ 6 × 5 ＝ 150，越分裝箱數反而比袋數更多，不符合常理。"
      },
      "figureNote": "把連續分裝的過程畫成左到右的方框，就能看出第一步算出袋數、第二步算出箱數。",
      "insight": "遇到連續平分問題時，算式要由左而右依序除以兩個數，也可以先把每箱總個數乘起來再一起除。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "連除性質：甲 ÷ 乙 ÷ 丙 ＝ 甲 ÷ （乙 × 丙）"
      ],
      "conceptCompare": "【先算袋數 vs 先算每箱幾個】「180 ÷ 6 ÷ 5」是先算共有 30 袋再裝箱；「180 ÷ （6 × 5）」是先算 1 箱裝 30 個再除，兩種列法答案相同！",
      "examVariations": "段考常反過來問「180 個餐包剛好裝成 6 箱，每箱有 5 袋，每袋有幾個？」同樣用 180 ÷ 6 ÷ 5 ＝ 6 個。"
    },
    "check": {
      "expr": "180 / 6 / 5",
      "expect": "6"
    }
  },
  {
    "id": "U07-S1-B-002",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-1 兩步驟連除與括號問題",
    "section": "7-1",
    "sectionName": "兩步驟連除與括號問題",
    "category": "連除與括號併式簡化",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "學校圖書館新買了 480 本故事書，要平分給 4 個年級，每個年級有 6 個班級，平均每個班級可以分到幾本故事書？",
    "options": [
      {
        "key": "A",
        "text": "120 本",
        "trapCode": "U07_DIV_CHAIN_WRONG"
      },
      {
        "key": "B",
        "text": "20 本",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "720 本",
        "trapCode": "U07_DIV_CHAIN_WRONG"
      },
      {
        "key": "D",
        "text": "24 本",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否能利用「先算總班數再平分」或「連除兩次」解決班級分配問題。",
      "steps": [
        {
          "type": "text",
          "text": "方法一（連除）：先把 480 本平分給 4 個年級，再平分給各年級的 6 個班。"
        },
        {
          "type": "eq",
          "expr": "480 ÷ 4 ÷ 6 ＝ 120 ÷ 6 ＝ 20"
        },
        {
          "type": "text",
          "text": "方法二（加括號）：也可以先算出 4 個年級一共有 4 × 6 ＝ 24 個班，再用 480 除以總班數。"
        },
        {
          "type": "eq",
          "expr": "480 ÷ （4 × 6） ＝ 480 ÷ 24 ＝ 20"
        },
        {
          "type": "answer",
          "text": "答：20 本"
        }
      ],
      "distractorAnalysis": {
        "A": "【漏除第二步】只算到每個年級分到 480 ÷ 4 ＝ 120 本，忘記再平分給 6 個班級。",
        "D": "【乘法計算錯誤】想要先算總班數卻把 4 × 6 誤算成 20 班，導致算出 480 ÷ 20 ＝ 24 本。",
        "C": "【沒加括號誤解題意】誤以為算式是 480 ÷ 4 × 6 ＝ 720，反而越分越多本。"
      },
      "insight": "先算出總共有多少個班級（4 × 6），一定要加上括號再除，否則由左而右會變成先除後乘而算錯！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "總數 ÷ 年級數 ÷ 每班人數 ＝ 總數 ÷ （年級數 × 班級數）"
      ],
      "conceptCompare": "【480 ÷ （4 × 6） vs 480 ÷ 4 × 6】有括號代表先算出總班數 24 再一起除；沒有括號時必須由左而右先算 480 ÷ 4 再乘以 6，意義完全不同。",
      "examVariations": "常改為「已知平均每班分到 20 本，求原本買幾本」，反推算式為 20 × 6 × 4 ＝ 480 本。"
    },
    "check": {
      "expr": "480 / (4 * 6)",
      "expect": "20"
    }
  },
  {
    "id": "U07-S1-B-003",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-1 兩步驟連除與括號問題",
    "section": "7-1",
    "sectionName": "兩步驟連除與括號問題",
    "category": "先減後除的括號併式",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "媽媽帶了 900 元去逛街，買了一雙 360 元的運動鞋後，剩下的錢剛好買了 6 雙同樣價格的襪子，請問每雙襪子多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "運動鞋",
          "units": 360
        },
        {
          "label": "6 雙襪子",
          "units": 540
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "總金額 900 元（先減去鞋錢，再平分 6 雙）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "90 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "840 元",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      },
      {
        "key": "C",
        "text": "540 元",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "210 元",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生在併式計算「剩下的錢再平分」時，是否懂得用括號把減法先框起來計算。",
      "steps": [
        {
          "type": "text",
          "text": "題目要先算出買完運動鞋後還剩下多少錢，再將剩下的錢平分給 6 雙襪子，所以減法必須加上括號優先算。"
        },
        {
          "type": "bar",
          "baseLabel": "總金額 900 元",
          "baseVal": 900,
          "compLabel": "買運動鞋 360 元",
          "compVal": 360,
          "unit": "元",
          "diffNote": "剩下的 540 元拿去買 6 雙襪子"
        },
        {
          "type": "eq",
          "expr": "（900 − 360） ÷ 6 ＝ 540 ÷ 6 ＝ 90"
        },
        {
          "type": "answer",
          "text": "答：90 元"
        }
      ],
      "distractorAnalysis": {
        "B": "【併式漏加括號】寫成 900 − 360 ÷ 6 時，依照先乘除後加減會先算 360 ÷ 6 ＝ 60，再算 900 − 60 ＝ 840 元。",
        "C": "【只算剩餘總額】算出買完鞋後剩下 540 元就停下來，忘記再除以 6 求出每雙襪子的單價。",
        "D": "【加減方向誤判】誤將兩個金額相加算成（900 ＋ 360） ÷ 6 ＝ 210 元。"
      },
      "figureNote": "線段圖把 900 元分成運動鞋與 6 雙襪子兩段，先扣除鞋錢 360 元，剩下的長度就是 6 雙襪子總價。",
      "insight": "當問題要先算加減、再算乘除時，一定要幫加減法加上「括號」，否則電腦和數學規則都會先算乘除！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "單價 ＝ （總金額 − 已花費用） ÷ 購買數量"
      ],
      "conceptCompare": "【（900 − 360） ÷ 6 vs 900 − 360 ÷ 6】前者的意義是「把剩下的錢平分給 6 雙」；後者則是「900 元扣掉運動鞋價格的六分之一」，完全不符題意。",
      "examVariations": "若題目改成「買 6 雙 90 元的襪子後找回多少元」，算式則變成 900 − 90 × 6 ＝ 360 元，此時不需要括號。"
    },
    "check": {
      "expr": "(900 - 360) / 6",
      "expect": "90"
    }
  },
  {
    "id": "U07-S1-B-004",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-1 兩步驟連除與括號問題",
    "section": "7-1",
    "sectionName": "兩步驟連除與括號問題",
    "category": "先加後除的括號併式",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "五年級校外教學，男生有 144 人、女生有 120 人。如果每 24 人坐滿一輛小巴士，全部學生一共需要租幾輛小巴士？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "男生人數",
          "units": 144
        },
        {
          "label": "女生人數",
          "units": 120
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "五年級全體共 264 人（每 24 人坐 1 輛車）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "149 輛",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      },
      {
        "key": "B",
        "text": "11 輛",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "12 輛",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "264 輛",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否懂得先用括號合併男女生總人數，再除以每輛巴士的座位數。",
      "steps": [
        {
          "type": "text",
          "text": "先把男生和女生的人數加起來算出總人數，再看總人數裡有幾個 24 人，加法要先算必須加括號。"
        },
        {
          "type": "eq",
          "expr": "（144 ＋ 120） ÷ 24 ＝ 264 ÷ 24 ＝ 11"
        },
        {
          "type": "answer",
          "text": "答：11 輛"
        }
      ],
      "distractorAnalysis": {
        "A": "【漏加括號導致先除後加】若寫成 144 ＋ 120 ÷ 24，會變成先算女生坐 5 輛車，再加上男生的 144 人，得到荒謬的 149 輛。",
        "C": "【兩位數除法計算錯誤】算出總人數 264 人正確，但除法計算時把 264 ÷ 24 誤算為 12。",
        "D": "【只算總人數忘記除】算出五年級總共有 264 人後忘記除以每車人數。"
      },
      "figureNote": "線段圖將男生與女生接在一起代表總人數 264 人，再將這段總長度以每 24 人為一段去分組。",
      "insight": "併式時想一想「誰要先做？」只要加法或減法要先算，就一定要幫它穿上括號！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "所需車輛數 ＝ （男生人數 ＋ 女生人數） ÷ 每輛可載人數"
      ],
      "conceptCompare": "【（144 ＋ 120） ÷ 24 vs 144 ÷ 24 ＋ 120 ÷ 24】先合併再除是 11 輛；分別先除再加（6 ＋ 5 ＝ 11 輛）雖然結果也一樣，但如果各別除不盡時，就必須先相加再除才不會多算車數。",
      "examVariations": "段考常改變成「還有 12 位老師同行」，此時括號內要記得再加 12：（144 ＋ 120 ＋ 12） ÷ 24。"
    },
    "check": {
      "expr": "(144 + 120) / 24",
      "expect": "11"
    }
  },
  {
    "id": "U07-S1-B-005",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-1 兩步驟連除與括號問題",
    "section": "7-1",
    "sectionName": "兩步驟連除與括號問題",
    "category": "連除算式等價判斷",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "skipOptionNumMatch": true,
    "question": "下列四個算式中，哪一個算式的計算結果和「720 ÷ 8 ÷ 3」不相同？",
    "options": [
      {
        "key": "A",
        "text": "720 ÷ （8 × 3）",
        "trapCode": "U07_DIV_CHAIN_WRONG"
      },
      {
        "key": "B",
        "text": "720 ÷ （8 ÷ 3）",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "720 ÷ 3 ÷ 8",
        "trapCode": "U07_DIV_CHAIN_WRONG"
      },
      {
        "key": "D",
        "text": "（720 ÷ 8） ÷ 3",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否理解連除的運算性質，並能分辨「連除加括號時，括號內除號必須變成乘號」的規則。",
      "steps": [
        {
          "type": "text",
          "text": "先算出原本題目算式的值：720 ÷ 8 ÷ 3 ＝ 90 ÷ 3 ＝ 30。"
        },
        {
          "type": "eq",
          "expr": "選項 A：720 ÷ （8 × 3） ＝ 720 ÷ 24 ＝ 30（相同）"
        },
        {
          "type": "eq",
          "expr": "選項 B：720 ÷ 3 ÷ 8 ＝ 240 ÷ 8 ＝ 30（相同）"
        },
        {
          "type": "eq",
          "expr": "選項 C：720 ÷ （8 ÷ 3） ＝ 720 ÷ 8 × 3 ＝ 270（不相同）"
        },
        {
          "type": "answer",
          "text": "答：C（720 ÷ （8 ÷ 3） 的結果不相同）"
        }
      ],
      "distractorAnalysis": {
        "A": "【符合連除性質】連除兩個數等於除以這兩個數的乘積，結果同樣是 30。",
        "D": "【標準由左而右順序】加上前面括號剛好符合原本由左而右的計算順序，結果同樣是 30。",
        "C": "【除數交換性質正確】連續除以 8 再除以 3，和先除以 3 再除以 8 一樣，結果都是 30。"
      },
      "insight": "連除後面要加括號時，括號裡面的「÷」一定要變成「×」；就像先把兩位數的除數合併相乘再一次除掉！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "甲 ÷ 乙 ÷ 丙 ＝ 甲 ÷ （乙 × 丙） ＝ 甲 ÷ 丙 ÷ 乙",
        "甲 ÷ 乙 ÷ 丙 ≠ 甲 ÷ （乙 ÷ 丙）"
      ],
      "conceptCompare": "【連減 vs 連除的括號法則】連減加括號時，裡面的「−」要變「＋」；連除加括號時，裡面的「÷」要變「×」，兩者邏輯完全一致！",
      "examVariations": "段考常以「比較大小」題型出現，要求比較「720 ÷ 8 ÷ 3 □ 720 ÷ （8 ÷ 3）」要填上「＜」。"
    },
    "check": {
      "expr": "720 / 8 / 3",
      "expect": "30"
    }
  },
  {
    "id": "U07-S2-B-006",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-2 四則混合運算順序",
    "section": "7-2",
    "sectionName": "四則混合運算順序",
    "category": "先乘後加減混合計算",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "文具店裡，每枝彩色筆賣 24 元，每個橡皮擦賣 35 元。小華買了 1 個橡皮擦和 5 枝彩色筆，結帳時使用折價券折抵 15 元，小華一共要付多少元？",
    "options": [
      {
        "key": "A",
        "text": "280 元",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      },
      {
        "key": "B",
        "text": "105 元",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "170 元",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      },
      {
        "key": "D",
        "text": "140 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生在無括號的四則混合併式中，能否遵守「先算乘法，再由左而右算加減」的運算順序。",
      "steps": [
        {
          "type": "text",
          "text": "依照題意列成併式：35 ＋ 24 × 5 − 15。沒有括號時，必須先算 24 × 5，再從左到右依序加減。"
        },
        {
          "type": "eq",
          "expr": "35 ＋ 24 × 5 − 15 ＝ 35 ＋ 120 − 15"
        },
        {
          "type": "eq",
          "expr": "155 − 15 ＝ 140"
        },
        {
          "type": "answer",
          "text": "答：140 元"
        }
      ],
      "distractorAnalysis": {
        "A": "【未先乘除後加減】由左而右直接先算加法（35 ＋ 24） × 5 − 15 ＝ 280 元，違反先乘後加減規則。",
        "B": "【漏加橡皮擦金額】只算出彩色筆扣掉折價券的金額 24 × 5 − 15 ＝ 105 元，漏算了 35 元的橡皮擦。",
        "C": "【折價券加減方向反轉】把折抵 15 元誤當成多付 15 元，算成 35 ＋ 120 ＋ 15 ＝ 170 元。"
      },
      "insight": "遇到沒有括號的加減乘混合算式，先用筆在乘法下面畫一條底線提醒自己「先算這裡」，就能避免從頭傻傻加起來！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "無括號四則混合運算原則：先乘除、後加減；只有乘除或只有加減時，由左而右計算"
      ],
      "conceptCompare": "【35 ＋ 24 × 5 vs （35 ＋ 24） × 5】前者表示買 1 個 35 元的物品加上 5 枝 24 元的筆；後者則表示買了 5 組「橡皮擦配彩色筆」，價錢差非常多。",
      "examVariations": "段考常把問題改為「拿 500 元鈔票去付錢，可以找回多少元？」，算式為 500 − （35 ＋ 24 × 5 − 15） ＝ 360 元。"
    },
    "check": {
      "expr": "35 + 24 * 5 - 15",
      "expect": "140"
    }
  },
  {
    "id": "U07-S2-B-007",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-2 四則混合運算順序",
    "section": "7-2",
    "sectionName": "四則混合運算順序",
    "category": "含括號四則運算順序",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "計算算式「360 − （180 ＋ 90） ÷ 9」的結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "330",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "10",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      },
      {
        "key": "C",
        "text": "190",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "D",
        "text": "357",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否掌握「有括號先算括號內 ➔ 再算括號外乘除 ➔ 最後算加減」的標準運算順序。",
      "steps": [
        {
          "type": "text",
          "text": "依照四則運算優先順序：先算括號內的加法，再算除法，最後才用 360 去減。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 480 155\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"65\" y=\"42\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#334155\">360 −</text><rect x=\"115\" y=\"18\" width=\"128\" height=\"36\" rx=\"6\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"179\" y=\"42\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#b45309\">（180 ＋ 90）</text><text x=\"275\" y=\"42\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#334155\">÷ 9</text><text x=\"179\" y=\"78\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#d97706\">第 1 步：括號內 ＝ 270</text><text x=\"230\" y=\"108\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0284c7\">第 2 步：先乘除 270 ÷ 9 ＝ 30</text><text x=\"230\" y=\"138\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#047857\">第 3 步：再加減 360 − 30 ＝ 330</text></svg>",
          "caption": "四則運算三步驟順序：括號優先 ➔ 先除 ➔ 後減"
        },
        {
          "type": "eq",
          "expr": "360 − （180 ＋ 90） ÷ 9 ＝ 360 − 270 ÷ 9 ＝ 360 − 30 ＝ 330"
        },
        {
          "type": "answer",
          "text": "答：330"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記先除後減】先算出括號內是 270 後，卻由左而右先算 360 − 270 ＝ 90，再算 90 ÷ 9 ＝ 10。",
        "C": "【忽略括號且未變號】直接拿掉括號變成 360 − 180 ＋ 90 ÷ 9 ＝ 180 ＋ 10 ＝ 190。",
        "D": "【除法退位錯誤】把 270 ÷ 9 誤算為 3（漏掉個位數的 0），算成 360 − 3 ＝ 357。"
      },
      "figureNote": "把運算順序分成第 1、2、3 層寫出來，還沒輪到的數字要原封不動抄下來，就不會錯算成先減後除。",
      "insight": "算完括號得到 270 之後，算式變成「360 − 270 ÷ 9」，這時候還是要記得先除後減，不能看到 360 − 270 很好算就先減！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "四則混合優先序：1. 括號內  2. 乘或除  3. 加或減"
      ],
      "conceptCompare": "【誘答陷阱 360 − 270】題目故意設計成 360 − 270 ＝ 90 剛好能被 9 整除，專抓急著由左而右計算而忘記先乘除後加減的學生。",
      "examVariations": "段考常換成「500 − （120 ＋ 80） ÷ 4」，一樣要注意先算 200 ÷ 4 ＝ 50，再用 500 − 50 ＝ 450。"
    },
    "check": {
      "expr": "360 - (180 + 90) / 9",
      "expect": "330"
    }
  },
  {
    "id": "U07-S2-B-008",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-2 四則混合運算順序",
    "section": "7-2",
    "sectionName": "四則混合運算順序",
    "category": "乘除由左而右運算",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "飲料工廠的一條生產線，每小時可以生產 144 瓶紅茶，工作人員每 12 瓶裝成 1 箱。請問這條生產線連續運作 3 小時，一共可以裝成幾箱？",
    "options": [
      {
        "key": "A",
        "text": "4 箱",
        "trapCode": "U07_DIV_CHAIN_WRONG"
      },
      {
        "key": "B",
        "text": "42 箱",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "12 箱",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "36 箱",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生計算只有乘除的算式「144 ÷ 12 × 3」時，能否遵守由左而右的原則，不誤先算後面的乘法。",
      "steps": [
        {
          "type": "text",
          "text": "先算出 1 小時可以裝成幾箱（144 ÷ 12 ＝ 12 箱），再乘以 3 小時；如果列成併式「144 ÷ 12 × 3」，因為只有除和乘，必須從左到右算。"
        },
        {
          "type": "eq",
          "expr": "144 ÷ 12 × 3 ＝ 12 × 3 ＝ 36"
        },
        {
          "type": "text",
          "text": "也可以先算 3 小時共生產 144 × 3 ＝ 432 瓶，再除以 12 瓶每箱，同樣得到 36 箱。"
        },
        {
          "type": "answer",
          "text": "答：36 箱"
        }
      ],
      "distractorAnalysis": {
        "A": "【誤把乘法先算於除法前面】算 144 ÷ 12 × 3 時，錯以為乘法比除法優先而先算 12 × 3 ＝ 36，再算 144 ÷ 36 ＝ 4 箱。",
        "C": "【忘記乘以 3 小時】只算出每小時可裝 144 ÷ 12 ＝ 12 箱，忘記題目問的是 3 小時的總箱數。",
        "B": "【除法計算錯誤】把 144 ÷ 12 誤記為 14，乘以 3 得到 42 箱。"
      },
      "insight": "乘號「×」和除號「÷」是同等級的好朋友，沒有誰比較大！在算式裡同時出現時，一定要乖乖由左而右算。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "只有乘與除的算式：無括號時，嚴格由左而右依序計算"
      ],
      "conceptCompare": "【144 ÷ 12 × 3 vs 144 ÷ （12 × 3）】沒有括號時由左而右是 36；加上括號變成先算 12 × 3 ＝ 36 再除，結果變成 4，兩者絕對不能隨便畫等號。",
      "examVariations": "把算式換成「360 ÷ 15 × 4」或「240 ÷ 6 × 2」，題型重點都是檢驗「不可看到後面乘起來很整齊就先乘」。"
    },
    "check": {
      "expr": "144 / 12 * 3",
      "expect": "36"
    }
  },
  {
    "id": "U07-S2-B-009",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-2 四則混合運算順序",
    "section": "7-2",
    "sectionName": "四則混合運算順序",
    "category": "倍數差量兩天總和併式",
    "level": 2,
    "difficulty": 2,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "水果店昨天賣出 45 公斤蘋果，今天賣出的蘋果比昨天的 3 倍少 18 公斤，請問這兩天一共賣出多少公斤蘋果？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "昨天賣出",
          "units": 45
        },
        {
          "label": "今天賣出（3 倍少 18）",
          "units": 117
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "兩天一共賣出 162 公斤"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "117 公斤",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "162 公斤",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "198 公斤",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      },
      {
        "key": "D",
        "text": "152 公斤",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否能把「先求今天賣出量，再加昨天賣出量」正確寫成併式，並看清題目最終要問的是「兩天一共」。",
      "steps": [
        {
          "type": "text",
          "text": "先算出今天賣出的蘋果重量：昨天的 3 倍少 18 公斤，就是 45 × 3 − 18 ＝ 117 公斤。"
        },
        {
          "type": "bar",
          "baseLabel": "昨天 45 公斤",
          "baseVal": 45,
          "compLabel": "今天 117 公斤",
          "compVal": 117,
          "unit": "公斤",
          "diffNote": "今天比昨天多出 72 公斤，兩天合起來共 162 公斤"
        },
        {
          "type": "eq",
          "expr": "45 ＋ 45 × 3 − 18 ＝ 45 ＋ 135 − 18 ＝ 180 − 18 ＝ 162"
        },
        {
          "type": "answer",
          "text": "答：162 公斤"
        }
      ],
      "distractorAnalysis": {
        "A": "【答非所問只算今天】只算完今天賣出 45 × 3 − 18 ＝ 117 公斤就選答案，漏掉題目問的是「兩天一共」。",
        "D": "【乘法進位遺漏】把 45 × 3 誤算為 125，導致最後算出 45 ＋ 125 − 18 ＝ 152 公斤。",
        "C": "【把少看成多】誤把「少 18 公斤」算成「加 18 公斤」，變成 45 ＋ 135 ＋ 18 ＝ 198 公斤。"
      },
      "figureNote": "線段圖上下並列昨天與今天兩條長度，把兩條線段合起來的總長就是兩天共賣出的重量。",
      "insight": "碰到「甲是乙的幾倍少多少，問甲、乙一共多少」的題目，算完今天的量之後，一定要回來加上昨天的量！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "總和 ＝ 基準量 ＋ （基準量 × 倍數 − 少的部分）"
      ],
      "conceptCompare": "【問「今天賣多少」 vs 問「兩天共賣多少」】前者只要算 45 × 3 − 18 ＝ 117；後者則是 45 × 4 − 18 ＝ 162（昨天 1 倍 ＋ 今天 3 倍少 18）。",
      "examVariations": "段考常改問「兩天賣出的相差多少公斤？」，此時算式為 （45 × 3 − 18） − 45 ＝ 72 公斤。"
    },
    "check": {
      "expr": "45 + 45 * 3 - 18",
      "expect": "162"
    }
  },
  {
    "id": "U07-S2-B-010",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-2 四則混合運算順序",
    "section": "7-2",
    "sectionName": "四則混合運算順序",
    "category": "購物付錢找零兩段併式",
    "level": 2,
    "difficulty": 2,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小宇到早午餐店買了 4 瓶每瓶 35 元的鮮奶茶，和 3 份每份 65 元的鬆餅，他拿一張 500 元鈔票去結帳，店員應該找回多少元？",
    "options": [
      {
        "key": "A",
        "text": "335 元",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "555 元",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "C",
        "text": "175 元",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "165 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否能先用括號合併兩項物品的總價，或用連減方式列出算式求找零金額。",
      "steps": [
        {
          "type": "text",
          "text": "先分別算出 4 瓶鮮奶茶與 3 份鬆餅的價格並加總，再用 500 元減去總花費；加總的部分要加括號。"
        },
        {
          "type": "eq",
          "expr": "500 − （35 × 4 ＋ 65 × 3） ＝ 500 − （140 ＋ 195）"
        },
        {
          "type": "eq",
          "expr": "500 − 335 ＝ 165"
        },
        {
          "type": "answer",
          "text": "答：165 元"
        }
      ],
      "distractorAnalysis": {
        "A": "【算出花費忘記算找零】算對總消費金額 35 × 4 ＋ 65 × 3 ＝ 335 元，卻忘記用 500 元去扣掉。",
        "B": "【併式漏加括號】寫成 500 − 35 × 4 ＋ 65 × 3，沒加上括號導致先減完 140 後又加上 195，變成找回 555 元比 500 元還多。",
        "C": "【乘法計算進位錯誤】算 65 × 3 時誤算為 185 元，導致算出 500 − （140 ＋ 185） ＝ 175 元。"
      },
      "insight": "算找零時，用「付的錢 − （物品總和）」要記得括號；如果不加括號，就要寫成「500 − 35 × 4 − 65 × 3」兩次都用減的！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "找零 ＝ 付款金額 − （甲總價 ＋ 乙總價） ＝ 付款金額 − 甲總價 − 乙總價"
      ],
      "conceptCompare": "【500 − （140 ＋ 195） vs 500 − 140 ＋ 195】去括號時，括號前面如果是減號，裡面的「＋」一定要變成「−」，否則買東西反而越買錢越多。",
      "examVariations": "段考常增加「如果小宇帶的錢不夠或剛好有折價 30 元」，只要把 500 換成其他數或總價減 30 即可。"
    },
    "check": {
      "expr": "500 - (35 * 4 + 65 * 3)",
      "expect": "165"
    }
  },
  {
    "id": "U07-S3-B-011",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-3 分配律與連減簡算",
    "section": "7-3",
    "sectionName": "分配律與連減簡算",
    "category": "乘法對加法的分配律簡算",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "學校為新教室訂購了 25 套課桌椅，每張桌子 680 元，每張椅子 320 元，請問這 25 套桌椅一共需要多少元？",
    "options": [
      {
        "key": "A",
        "text": "25000 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "17320 元",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "C",
        "text": "8680 元",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "D",
        "text": "2500 元",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否能觀察「680 ＋ 320 ＝ 1000」的湊整特徵，靈活運用分配律把兩項合起來先相加再乘以 25。",
      "steps": [
        {
          "type": "text",
          "text": "原本的總價是 680 × 25 ＋ 320 × 25；利用分配律，先把 1 套桌椅的價錢（680 ＋ 320）合起來再乘以 25 套，剛好湊成整千，超好算！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 480 160\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"18\" y=\"24\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">把 25 張桌子與 25 張椅子配成 25 套（每套 1000 元）</text><rect x=\"24\" y=\"42\" width=\"190\" height=\"62\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"119\" y=\"68\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0369a1\">桌子 680 元</text><text x=\"119\" y=\"92\" font-size=\"13\" text-anchor=\"middle\" fill=\"#475569\">× 25 張</text><rect x=\"214\" y=\"42\" width=\"110\" height=\"62\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"269\" y=\"68\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#b45309\">椅子 320 元</text><text x=\"269\" y=\"92\" font-size=\"13\" text-anchor=\"middle\" fill=\"#475569\">× 25 張</text><text x=\"342\" y=\"76\" font-size=\"14\" font-weight=\"700\" fill=\"#047857\">合為 25 套</text><text x=\"240\" y=\"136\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1e293b\">（680 ＋ 320） × 25 ＝ 1000 × 25 ＝ 25000 元</text></svg>",
          "caption": "分配律湊整法：先將一桌一椅配成一套（1000 元），再乘 25 套"
        },
        {
          "type": "eq",
          "expr": "680 × 25 ＋ 320 × 25 ＝ （680 ＋ 320） × 25 ＝ 1000 × 25 ＝ 25000"
        },
        {
          "type": "answer",
          "text": "答：25000 元"
        }
      ],
      "distractorAnalysis": {
        "B": "【分配律漏乘第二項】只算了 680 × 25 ＝ 17000，忘記椅子 320 元也要乘以 25，誤算成 17000 ＋ 320 ＝ 17320 元。",
        "C": "【分配律漏乘第一項】算了 320 × 25 ＝ 8000，卻忘記桌子 680 元也要乘以 25，誤算成 680 ＋ 8000 ＝ 8680 元。",
        "D": "【乘法計算少一個 0】湊整算出 1000 × 25 時，少寫一個 0 變成 2500 元。"
      },
      "figureNote": "把相同份數（都是 25）的兩塊長方形並排拼在一起，底邊長變成 680 ＋ 320 ＝ 1000，面積就是總價。",
      "insight": "看到算式裡有「兩邊都乘以同一個數（× 25）」，先想想另外兩個數加起來是不是整百或整千，是的話一定要先合併計算！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "乘法對加法分配律：甲 × 丙 ＋ 乙 × 丙 ＝ （甲 ＋ 乙） × 丙"
      ],
      "conceptCompare": "【拆開算 vs 合起來算】拆開算要算兩次乘法（17000 ＋ 8000）；合起來算變成心算等級的 1000 × 25，不但快而且不易算錯。",
      "examVariations": "段考常把數字設計為 73 × 125 ＋ 27 × 125（湊百）或 365 × 4 ＋ 635 × 4（湊千）。"
    },
    "check": {
      "expr": "(680 + 320) * 25",
      "expect": "25000"
    }
  },
  {
    "id": "U07-S3-B-012",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-3 分配律與連減簡算",
    "section": "7-3",
    "sectionName": "分配律與連減簡算",
    "category": "乘法對減法的分配律簡算",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "雜貨店進貨了 47 箱餅乾，每箱進貨價都是 125 元，今天一共賣出了 39 箱。請問倉庫裡還沒賣出的餅乾，進貨成本總共是多少元？",
    "options": [
      {
        "key": "A",
        "text": "1000 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "4875 元",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "5836 元",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "D",
        "text": "10750 元",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否能利用「乘法對減法的分配律」把 47 × 125 − 39 × 125 合併成（47 − 39） × 125，並記得 8 × 125 ＝ 1000。",
      "steps": [
        {
          "type": "text",
          "text": "進貨 47 箱共花 47 × 125 元，賣出 39 箱的進貨成本是 39 × 125 元；利用分配律先把箱數相減，再乘以每箱 125 元。"
        },
        {
          "type": "eq",
          "expr": "47 × 125 − 39 × 125 ＝ （47 − 39） × 125 ＝ 8 × 125 ＝ 1000"
        },
        {
          "type": "answer",
          "text": "答：1000 元"
        }
      ],
      "distractorAnalysis": {
        "C": "【分配律只乘前一項】錯誤寫成 47 × 125 − 39 ＝ 5875 − 39 ＝ 5836 元，漏把 39 也乘以 125。",
        "D": "【減法誤算成加法】錯將剩下的箱數算成兩者相加（47 ＋ 39） × 125 ＝ 86 × 125 ＝ 10750 元。",
        "B": "【答非所問算出賣出成本】算出已賣出的 39 箱進貨成本 39 × 125 ＝ 4875 元，誤當作倉庫剩下的金額。"
      },
      "insight": "8 × 125 ＝ 1000 和 4 × 25 ＝ 100 是四年級與五年級最常考的黃金簡算配對，看到 125 就要找 8！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "乘法對減法分配律：甲 × 丙 − 乙 × 丙 ＝ （甲 − 乙） × 丙"
      ],
      "conceptCompare": "【47 × 125 − 39 × 125 vs （47 − 39） × 125】直接分開乘會算出四位數 5875 − 4875 很容易出錯；先算箱數差 8 箱再乘 125，一秒得出 1000 元。",
      "examVariations": "常改考「賣出 39 箱後，進貨的 47 箱與賣出的成本相差多少元？」，列式完全相同也是 1000 元。"
    },
    "check": {
      "expr": "(47 - 39) * 125",
      "expect": "1000"
    }
  },
  {
    "id": "U07-S3-B-013",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-3 分配律與連減簡算",
    "section": "7-3",
    "sectionName": "分配律與連減簡算",
    "category": "拆數應用分配律簡算",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "學校要購買 99 本自然百科，每本定價 46 元，請問全部一共要付多少元？",
    "options": [
      {
        "key": "A",
        "text": "4599 元",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "B",
        "text": "4646 元",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "C",
        "text": "4554 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "4564 元",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否能把接近整百的數（99）拆成（100 − 1），再展開分配律時確保「兩項都要乘以 46」。",
      "steps": [
        {
          "type": "text",
          "text": "把 99 本想成「100 本少 1 本」，列成（100 − 1） × 46，展開分配律時 100 和 1 都要各自乘以 46。"
        },
        {
          "type": "eq",
          "expr": "99 × 46 ＝ （100 − 1） × 46 ＝ 100 × 46 − 1 × 46"
        },
        {
          "type": "eq",
          "expr": "4600 − 46 ＝ 4554"
        },
        {
          "type": "answer",
          "text": "答：4554 元"
        }
      ],
      "distractorAnalysis": {
        "A": "【分配律只乘一邊】算成 100 × 46 − 1 ＝ 4599 元，忘記那「少買的 1 本」省下的價錢是 46 元而不是 1 元。",
        "B": "【符號弄反多加一本】把「少 1 本」誤看成「多 1 本」，算成 4600 ＋ 46 ＝ 4646 元。",
        "D": "【減法退位計算錯】算對 4600 − 46，但十位退位減錯算成 4564 元。"
      },
      "insight": "99 × 46 代表 99 個 46，也就是 100 個 46 扣掉 1 個 46；千萬不能只扣掉數字 1，要扣掉一整本的價錢 46 元！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "接近整百拆數法：99 × 甲 ＝ （100 − 1） × 甲 ＝ 100 × 甲 − 甲",
        "101 × 甲 ＝ （100 ＋ 1） × 甲 ＝ 100 × 甲 ＋ 甲"
      ],
      "conceptCompare": "【99 × 46 vs 101 × 46】99 是 100 少 1，要減去 1 個 46；101 是 100 多 1，要加上 1 個 46。",
      "examVariations": "段考常考「102 × 35」或「998 × 25」，方法都是把接近整百整千的數寫成 100 ＋ 2 或 1000 − 2 再展開分配律。"
    },
    "check": {
      "expr": "99 * 46",
      "expect": "4554"
    }
  },
  {
    "id": "U07-S3-B-014",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-3 分配律與連減簡算",
    "section": "7-3",
    "sectionName": "分配律與連減簡算",
    "category": "連減加括號湊整簡算",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "阿公錢包裡有 2500 元，買青菜花了 438 元，買水果花了 562 元，請問阿公還剩下多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "買青菜 438 ＋ 水果 562",
          "units": 1000
        },
        {
          "label": "剩下的錢",
          "units": 1500
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "原本共有 2500 元（兩次共花 1000 元）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "2376 元",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "B",
        "text": "1500 元",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1000 元",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "2624 元",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生能否辨識「438 ＋ 562 ＝ 1000」的連減簡算特徵，並正確使用連減加括號變號的性質。",
      "steps": [
        {
          "type": "text",
          "text": "連續減掉兩個花費，等於減去「這兩個花費加起來的總和」。括號外面是減號，加括號時裡面要變加號。"
        },
        {
          "type": "bar",
          "baseLabel": "原有 2500 元",
          "baseVal": 2500,
          "compLabel": "共花掉 1000 元",
          "compVal": 1000,
          "unit": "元",
          "diffNote": "先把 438 ＋ 562 湊成 1000，再相減就剩下 1500 元"
        },
        {
          "type": "eq",
          "expr": "2500 − 438 − 562 ＝ 2500 − （438 ＋ 562） ＝ 2500 − 1000 ＝ 1500"
        },
        {
          "type": "answer",
          "text": "答：1500 元"
        }
      ],
      "distractorAnalysis": {
        "A": "【連減加括號未變號】寫成 2500 − （562 − 438） ＝ 2376 元，變成兩個花費相減而不是相加。",
        "C": "【只算共花掉多少錢】把兩筆支出加起來算出共花 1000 元就直接選，忘了用 2500 去減。",
        "D": "【去括號與連減混淆】錯算成 2500 − 438 ＋ 562 ＝ 2624 元，錢買了東西反而比原本還多。"
      },
      "figureNote": "線段圖將買菜和買水果兩筆支出合併為 1000 元的一整段，直接從總長 2500 元扣掉就得到剩餘的長度。",
      "insight": "遇到連減算式時，先瞄一眼後面兩個減數的末位（8 配 2），能不能湊成整百或整千，合起來減會超級快！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "連減性質：甲 − 乙 − 丙 ＝ 甲 − （乙 ＋ 丙）"
      ],
      "conceptCompare": "【2500 − 438 − 562 vs 2500 − （562 − 438）】連續花兩筆錢要把花掉的「合起來減掉」，括號裡面一定是「＋」號。",
      "examVariations": "段考常考「2000 − 375 − 625」或「1584 − 437 − 584」（換順序先算 1584 − 584 ＝ 1000 再減 437）。"
    },
    "check": {
      "expr": "2500 - (438 + 562)",
      "expect": "1500"
    }
  },
  {
    "id": "U07-S3-B-015",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-3 分配律與連減簡算",
    "section": "7-3",
    "sectionName": "分配律與連減簡算",
    "category": "去括號變號與減法簡算",
    "level": 3,
    "difficulty": 3,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "米店倉庫原本有 754 包白米，貨車司機原本預計載走 254 包，但在裝車時發現其中有 138 包要留下來改明天再載，算式列成「754 − （254 − 138）」。請問倉庫最後還剩下幾包白米？",
    "options": [
      {
        "key": "A",
        "text": "362 包",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "B",
        "text": "628 包",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "870 包",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      },
      {
        "key": "D",
        "text": "638 包",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否理解「括號前是減號，拆掉括號時裡面的減號要變成加號」的算理，並利用 754 − 254 ＝ 500 進行簡算。",
      "steps": [
        {
          "type": "text",
          "text": "方法一（去括號簡算）：本來少載走了 138 包，所以倉庫要加回這 138 包；去括號時減號變加號，先算 754 − 254 剛好是整百！"
        },
        {
          "type": "eq",
          "expr": "754 − （254 − 138） ＝ 754 − 254 ＋ 138 ＝ 500 ＋ 138 ＝ 638"
        },
        {
          "type": "text",
          "text": "方法二（先算括號內）：254 − 138 ＝ 116，再用 754 − 116 ＝ 638 包。"
        },
        {
          "type": "answer",
          "text": "答：638 包"
        }
      ],
      "distractorAnalysis": {
        "A": "【去括號忘記變號】直接把括號擦掉算成 754 − 254 − 138 ＝ 362 包，反而把留下來的 138 包又多減了一次。",
        "C": "【錯把括號外的減號也變號】誤算成 754 ＋ 254 − 138 ＝ 870 包，剩下的白米比原本 754 包還多。",
        "B": "【退位減法算錯】直接算 254 − 138 時十位數沒退位誤算為 126，算出 754 − 126 ＝ 628 包。"
      },
      "insight": "去括號口訣：「括號前面是減號，拆掉括號裡面要變號（＋ 變 −，− 變 ＋）」！用故事想也很合理：本來多扣了 138，當然要補加回來。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "減法去括號變號律：甲 − （乙 − 丙） ＝ 甲 − 乙 ＋ 丙"
      ],
      "conceptCompare": "【754 − （254 − 138） vs 754 − （254 ＋ 138）】裡頭是減號去括號變加號；裡頭是加號去括號變減號。總之只要括號前面有「−」，裡面符號全部反過來！",
      "examVariations": "段考常直接考選擇題「下列哪個算式等於 836 − （236 − 95）？」，答案為 836 − 236 ＋ 95。"
    },
    "check": {
      "expr": "754 - (254 - 138)",
      "expect": "638"
    }
  },
  {
    "id": "U07-S4-B-016",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-4 平均問題與併式應用",
    "section": "7-4",
    "sectionName": "平均問題與併式應用",
    "category": "基本平均分數與移多補少",
    "level": 4,
    "difficulty": 4,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小敏這學期前四次數學小考的成績分別是 81 分、93 分、87 分、99 分，請問她這四次小考的平均成績是多少分？",
    "options": [
      {
        "key": "A",
        "text": "90 分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "85 分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "72 分",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "D",
        "text": "360 分",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否能用併式算出平均數「（總和） ÷ 個數」，並理解「移多補少」的平均意義。",
      "steps": [
        {
          "type": "text",
          "text": "先把四次小考成績加起來算出總分，再用總分除以考試次數 4 次；加總記得要加上括號。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 480 175\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"230\" y=\"24\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#334155\">第 4 次多出的 9 分補給第 1 次，第 2 次多出的 3 分補給第 3 次</text><rect x=\"60\" y=\"59\" width=\"45\" height=\"81\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"1.5\"/><text x=\"82\" y=\"130\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0369a1\">81 分</text><text x=\"82\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" fill=\"#475569\">第 1 次</text><rect x=\"145\" y=\"47\" width=\"45\" height=\"93\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"167\" y=\"130\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#b45309\">93 分</text><text x=\"167\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" fill=\"#475569\">第 2 次</text><rect x=\"230\" y=\"53\" width=\"45\" height=\"87\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"1.5\"/><text x=\"252\" y=\"130\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0369a1\">87 分</text><text x=\"252\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" fill=\"#475569\">第 3 次</text><rect x=\"315\" y=\"41\" width=\"45\" height=\"99\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"337\" y=\"130\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#b45309\">99 分</text><text x=\"337\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" fill=\"#475569\">第 4 次</text><line x1=\"40\" y1=\"50\" x2=\"380\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"6,4\"/><text x=\"386\" y=\"54\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">平均 90 分</text></svg>",
          "caption": "長條圖移多補少：把高於 90 分的部分補平到低於 90 分的次數，全部拉平為 90 分"
        },
        {
          "type": "eq",
          "expr": "（81 ＋ 93 ＋ 87 ＋ 99） ÷ 4 ＝ 360 ÷ 4 ＝ 90"
        },
        {
          "type": "answer",
          "text": "答：90 分"
        }
      ],
      "distractorAnalysis": {
        "B": "【連加進位錯誤】加總四個分數時漏掉十位數進位，將總分誤算為 340 分，再除以 4 得到 85 分。",
        "D": "【只算總分忘記除】算出四次總分共 360 分就直接當作答案，忘記平均要除以 4。",
        "C": "【除錯項目個數】算出總分 360 分後，卻誤以為有 5 次考試而除以 5，得到 360 ÷ 5 ＝ 72 分（比最低分 81 分還低，明顯不合理）。"
      },
      "figureNote": "觀察紅色平均虛線，第 1 次 81 剛好差 9 分、第 4 次 99 剛好超過 9 分；兩邊一補一平就能用眼看出平均是 90。",
      "insight": "算完平均分數之後，記得檢查一下「平均數一定介於最大分數和最小分數之間」，如果算出來比 81 還小或比 99 還大，就一定算錯了！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平均數 ＝ 全部總和 ÷ 項目個數"
      ],
      "conceptCompare": "【平均計算檢查法】90 介在最低 81 與最高 99 之間；選項 D 的 360 分與 A 的 72 分都不在 81～99 之間，馬上可排除。",
      "examVariations": "段考常考其中一次是「缺考 0 分」的 5 次平均，計算時分母一樣要算入那次 0 分，也就是除以 5 而不是除以 4。"
    },
    "check": {
      "expr": "(81 + 93 + 87 + 99) / 4",
      "expect": "90"
    }
  },
  {
    "id": "U07-S4-B-017",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-4 平均問題與併式應用",
    "section": "7-4",
    "sectionName": "平均問題與併式應用",
    "category": "含自己人數的費用均攤",
    "level": 4,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "阿澤和他的 4 位同學一起去野餐，買水果花了 340 元，買點心花了 260 元，全部費用由大家平均分攤，請問平均每人要付多少元？",
    "options": [
      {
        "key": "A",
        "text": "150 元",
        "trapCode": "U07_MISSING_SELF_COUNT"
      },
      {
        "key": "B",
        "text": "392 元",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      },
      {
        "key": "C",
        "text": "120 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "100 元",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生能否抓出「阿澤和他的 4 位同學」共是 5 個人，避免漏算自己，並正確列出雙括號併式。",
      "steps": [
        {
          "type": "text",
          "text": "先看清楚總人數：阿澤本人（1 人）加上他的 4 位同學，總共有 1 ＋ 4 ＝ 5 人分攤費用。"
        },
        {
          "type": "text",
          "text": "再把水果和點心的費用加總，除以總人數 5 人："
        },
        {
          "type": "eq",
          "expr": "（340 ＋ 260） ÷ （1 ＋ 4） ＝ 600 ÷ 5 ＝ 120"
        },
        {
          "type": "answer",
          "text": "答：120 元"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記把阿澤自己算進去】看到題目寫 4 位同學就直接除以 4，算成 600 ÷ 4 ＝ 150 元，漏掉了阿澤本人。",
        "B": "【併式漏加總花費括號】列成 340 ＋ 260 ÷ 5，先算 260 ÷ 5 ＝ 52，再加 340 得到 392 元。",
        "D": "【加法計算進位失誤】將 340 ＋ 260 誤算為 500 元，除以 5 得到 100 元。"
      },
      "insight": "讀到「某人和他的幾位朋友／同學／兄弟姐妹」，立刻在題目旁邊寫下「1 ＋ 幾」，這是段考最常出的文字陷阱！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平均分攤金額 ＝ 總花費 ÷ （自己 1 人 ＋ 同伴人數）"
      ],
      "conceptCompare": "【「阿澤和 4 位同學」 vs 「阿澤等 4 位同學」】「和 4 位同學」總共是 1 ＋ 4 ＝ 5 人；若題目寫「阿澤等 4 人」則阿澤已經包含在 4 人裡面，總共就是 4 人，一字之差人數不同！",
      "examVariations": "常改為「大明和 3 位哥哥姊姊合買禮物送媽媽」，同樣要算 1 ＋ 3 ＝ 4 人，媽媽是收禮物的人不參與出錢。"
    },
    "check": {
      "expr": "(340 + 260) / (1 + 4)",
      "expect": "120"
    }
  },
  {
    "id": "U07-S4-B-018",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-4 平均問題與併式應用",
    "section": "7-4",
    "sectionName": "平均問題與併式應用",
    "category": "由平均反推缺漏項目",
    "level": 4,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小宇參加五次投籃測驗，平均每次投進 18 球。已知前四次分別投進 15 球、21 球、17 球、16 球，請問第五次投進了幾球？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "前四次總球數",
          "units": 69
        },
        {
          "label": "第五次投進球數",
          "units": 21
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "五次總球數 ＝ 18 × 5 ＝ 90 球"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "21 球",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "3 球",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "C",
        "text": "51 球",
        "trapCode": "U07_AVG_FORGET_MULTIPLY"
      },
      {
        "key": "D",
        "text": "19 球",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否理解「總和 ＝ 平均 × 個數」，並懂得用五次總進球數減去前四次總和求出最後一次。",
      "steps": [
        {
          "type": "text",
          "text": "先利用平均求總和：五次平均投進 18 球，代表五次合計共投進 18 × 5 ＝ 90 球。"
        },
        {
          "type": "bar",
          "baseLabel": "五次總數 90 球",
          "baseVal": 90,
          "compLabel": "前四次 69 球",
          "compVal": 69,
          "unit": "球",
          "diffNote": "90 扣掉前四次的 69 球，剩下的 21 球就是第五次的成績"
        },
        {
          "type": "eq",
          "expr": "18 × 5 − （15 ＋ 21 ＋ 17 ＋ 16） ＝ 90 − 69 ＝ 21"
        },
        {
          "type": "answer",
          "text": "答：21 球"
        }
      ],
      "distractorAnalysis": {
        "B": "【總次數乘錯】忘記平均是 5 次的結果，錯將 18 只乘以已知的 4 次，算成 18 × 4 − 69 ＝ 3 球。",
        "C": "【忘記把平均乘以次數】直接拿前四次總和 69 去減平均數 18，得到 69 − 18 ＝ 51 球。",
        "D": "【前四次加總錯誤】把 15 ＋ 21 ＋ 17 ＋ 16 誤算成 71 球，再由 90 去減而得出 19 球。"
      },
      "figureNote": "線段圖把五次的總球數（18 × 5 ＝ 90）畫成一整條，扣除前四次合起來的 69 球，剩下的那小段就是第五次。",
      "insight": "只要題目給你「平均數」和「個數」，第一動作永遠是把它們相乘算出「總數」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "總和 ＝ 平均數 × 個數",
        "缺漏項 ＝ 全部總和 − 其餘各項之和"
      ],
      "conceptCompare": "【正算平均 vs 反算缺項】正算是先加總再除；反算是先把「平均 × 次數」得出總和，再把已知的數字一個個扣掉。",
      "examVariations": "段考常考「五次要達到平均 20 球，前四次共投 69 球，第五次至少要投幾球？」，解法相同：20 × 5 − 69 ＝ 31 球。"
    },
    "check": {
      "expr": "18 * 5 - (15 + 21 + 17 + 16)",
      "expect": "21"
    }
  },
  {
    "id": "U07-S4-B-019",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-4 平均問題與併式應用",
    "section": "7-4",
    "sectionName": "平均問題與併式應用",
    "category": "加入新成員後重新計算平均",
    "level": 4,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "籃球隊原本 5 名隊員的平均身高是 150 公分，今天新加入 1 名身高 180 公分的隊員後，現在這幾位隊員的平均身高是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "165 公分",
        "trapCode": "U07_AVG_FORGET_MULTIPLY"
      },
      {
        "key": "B",
        "text": "186 公分",
        "trapCode": "U07_MISSING_SELF_COUNT"
      },
      {
        "key": "C",
        "text": "155 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "160 公分",
        "trapCode": "U07_AVG_WRONG_COUNT"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生面對兩組人數不同之數值合併求平均時，能否先透過「原本平均 × 原人數」還原總身高，再除以最新總人數 6 人。",
      "steps": [
        {
          "type": "text",
          "text": "絕不能直接拿 150 和 180 相加除以 2，因為 150 公分代表了 5 個人，180 公分只代表 1 個人！"
        },
        {
          "type": "text",
          "text": "先算原本 5 名隊員的總身高：150 × 5 ＝ 750 公分。加上新隊員後變成 5 ＋ 1 ＝ 6 人。"
        },
        {
          "type": "eq",
          "expr": "（150 × 5 ＋ 180） ÷ （5 ＋ 1） ＝ （750 ＋ 180） ÷ 6 ＝ 930 ÷ 6 ＝ 155"
        },
        {
          "type": "answer",
          "text": "答：155 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【直接將兩數相加除以 2】忽略 150 公分是 5 個人的平均，錯算成（150 ＋ 180） ÷ 2 ＝ 165 公分。",
        "B": "【總人數漏加新隊員】總身高算對 930 公分，但忘記人數已經變成 6 人，仍除以原來的 5 人得到 186 公分。",
        "D": "【除法計算或人數估計錯誤】誤算總人數為 6 時除錯，或未經計算直接猜測接近中間的值 160 公分。"
      },
      "insight": "求新平均的鐵則：「新總和 ÷ 新總人數」。新總和要把舊平均先乘回舊人數再加新人；新總人數也要記得加 1！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "加入新成員後的平均 ＝ （原平均 × 原人數 ＋ 新成員數值） ÷ （原人數 ＋ 1）"
      ],
      "conceptCompare": "【為何不能 （150 ＋ 180） ÷ 2？】只有當 150 公分也是 1 個人（或是兩隊人數相同都是 5 人）時才能直接相加除以 2。",
      "examVariations": "也可以用移多補少法快速口算：新隊員比原平均 150 公分多出了 30 公分，這 30 公分平分給全部 6 個人，每人多 30 ÷ 6 ＝ 5 公分，所以新平均是 150 ＋ 5 ＝ 155 公分！"
    },
    "check": {
      "expr": "(150 * 5 + 180) / (5 + 1)",
      "expect": "155"
    }
  },
  {
    "id": "U07-S4-B-020",
    "unitId": "U07",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U07 7-4 平均問題與併式應用",
    "section": "7-4",
    "sectionName": "平均問題與併式應用",
    "category": "多人先墊費用均攤差額計算",
    "level": 4,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小杰、小安和小晴三人一起去露營，小杰先付了營地費 1200 元，小安先付了食材費 780 元，小晴先付了木炭與飲料費 420 元。三人約定所有費用平均分攤，結算時小晴還需要再給小杰多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "小杰已付",
          "units": 1200
        },
        {
          "label": "小安已付",
          "units": 780
        },
        {
          "label": "小晴已付",
          "units": 420
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "總花費 2400 元（平均每人應付 800 元）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "400 元",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "380 元",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "800 元",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "D",
        "text": "390 元",
        "trapCode": "U07_AVG_FORGET_MULTIPLY"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生在處理多人先墊付不同費用並平攤時，是否能先算出總花費與每人應付平均金額，再算出少付者須補繳的金額。",
      "steps": [
        {
          "type": "text",
          "text": "步驟 1：先把三人付的費用全部加起來，除以 3 算出每人平均應該負擔多少元。"
        },
        {
          "type": "bar",
          "baseLabel": "每人應付 800 元",
          "baseVal": 800,
          "compLabel": "小晴已付 420 元",
          "compVal": 420,
          "unit": "元",
          "diffNote": "小晴少付了 800 − 420 ＝ 380 元，必須再補出來給多墊錢的小杰"
        },
        {
          "type": "eq",
          "expr": "（1200 ＋ 780 ＋ 420） ÷ 3 ＝ 2400 ÷ 3 ＝ 800"
        },
        {
          "type": "text",
          "text": "步驟 2：比較每個人已付與應付 800 元的差距：小杰多付了 1200 − 800 ＝ 400 元，小安少付了 800 − 780 ＝ 20 元，小晴少付了 800 − 420 ＝ 380 元。"
        },
        {
          "type": "eq",
          "expr": "小晴應補給小杰：800 − 420 ＝ 380"
        },
        {
          "type": "answer",
          "text": "答：380 元"
        }
      ],
      "distractorAnalysis": {
        "A": "【算出小杰多付卻當作小晴要給全部】小杰確實多墊了 400 元，但那 400 元是由小晴補 380 元、小安補 20 元合起來補齊的，並非全由小晴一人出。",
        "D": "【只比較兩人差距而漏掉第三人】誤算成（1200 − 420） ÷ 2 ＝ 390 元，忘記小安也少付 20 元且費用是三人平攤。",
        "C": "【只算每人平均應付金額】算出每人應分攤 800 元就直接作答，忘記扣除小晴自己已經先付掉的 420 元。"
      },
      "figureNote": "把三人的長條疊加起來算出總花費 2400 元，每人應付 800 元的基準線一畫下去，誰付太多、誰少付多少立刻一目了然。",
      "insight": "平攤結帳三步驟：1. 全部加總除以人數算出「每人應付」➔ 2. 各自和應付金額比大小 ➔ 3. 檢查所有少付的加起來是不是剛好等於多付的！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "每人應付 ＝ 總花費 ÷ 總人數",
        "少付者需再補 ＝ 每人應付 − 自己已墊付"
      ],
      "conceptCompare": "【驗算小撇步】小晴補 380 元 ＋ 小安補 20 元 ＝ 400 元，剛好就是小杰多付的 400 元，驗算完全吻合才不會搞錯對象和金額！",
      "examVariations": "段考常同時問「小安和小晴分別要給小杰多少元？」，只要用 800 減去兩人各自已付的錢即可得出。"
    },
    "check": {
      "expr": "(1200 + 780 + 420) / 3 - 420",
      "expect": "380"
    }
  },
  {
    "id": "U07-S2-O-001",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L3 連減與去括號重組",
    "section": "7-2",
    "sectionName": "四則運算的性質",
    "category": "去括號變號與湊整簡算",
    "level": 3,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "利用加減法的去括號規則與湊整技巧，計算 2487 − （487 − 315） ＋ （185 − 120） ＝ ？",
    "options": [
      {
        "key": "A",
        "text": "1750",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "B",
        "text": "2380",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "2620",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      },
      {
        "key": "D",
        "text": "2280",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否掌握「減法去括號裡面要變號」，並能將尾數互補的數字重新分組湊成整百、整千。",
      "steps": [
        {
          "type": "text",
          "text": "先去掉括號：第一個括號前面是減號「−」，打開括號時裡面的「− 315」要變成「＋ 315」；第二個括號前面是加號「＋」，符號不變。"
        },
        {
          "type": "eq",
          "expr": "2487 − （487 − 315） ＋ （185 − 120） ＝ 2487 − 487 ＋ 315 ＋ 185 − 120"
        },
        {
          "type": "text",
          "text": "觀察數字尾數：2487 和 487 尾數相同可相減湊整千；315 和 185 尾數互補可相加湊整百。"
        },
        {
          "type": "eq",
          "expr": "＝ （2487 − 487） ＋ （315 ＋ 185） − 120 ＝ 2000 ＋ 500 − 120 ＝ 2380"
        },
        {
          "type": "answer",
          "text": "答：2380"
        }
      ],
      "distractorAnalysis": {
        "C": "【連減符號誤看成加號】最後把 − 120 錯算成 ＋ 120，得到 2500 ＋ 120 ＝ 2620。",
        "D": "【進位計算筆誤】計算 315 ＋ 185 時忘記進位錯算成 400，得到 2000 ＋ 400 − 120 ＝ 2280。",
        "A": "【去括號忘記變號】把 −（487 − 315） 錯拆成 − 487 − 315，變成 2000 − 315 ＋ 185 − 120 ＝ 1750。"
      },
      "insight": "括號前面若是減號，打開括號像「反轉開關」，裡面的加減都要對調；搬家配對時，數字要帶著它前面的符號一起走！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "去括號變號律：甲 − （乙 − 丙） ＝ 甲 − 乙 ＋ 丙",
        "帶符號搬家：加減同級運算可自由調換順序，但數字前面的「＋」或「−」必須跟著移動"
      ],
      "conceptCompare": "【括號前是「＋」vs「−」】括號前是「＋」可以直接拆掉括號；括號前是「−」，拆掉後括號裡每一項的加減號都要相反。",
      "examVariations": "考題常把數字微調成「3562 − （562 − 278） − 178」，可先湊成 3000 ＋ （278 − 178） ＝ 3100。"
    },
    "check": {
      "expr": "2487 - (487 - 315) + (185 - 120)",
      "expect": "2380"
    }
  },
  {
    "id": "U07-S2-O-002",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L3 連除與倍數分裝",
    "section": "7-2",
    "sectionName": "四則運算的性質",
    "category": "連除性質與雙層分裝應用",
    "level": 3,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "水果行把 4800 顆蘋果平分裝進 12 個大箱子，每個大箱子再平分裝成 25 小袋。如果每箱都賣掉 18 小袋，請問最後一共還剩下幾顆蘋果？",
    "options": [
      {
        "key": "A",
        "text": "3456 顆",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "1120 顆",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      },
      {
        "key": "C",
        "text": "1440 顆",
        "trapCode": "U07_DIV_CHAIN_WRONG"
      },
      {
        "key": "D",
        "text": "1344 顆",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生運用連除合併「除以（甲 × 乙）」算出每小袋顆數，再結合剩餘袋數求解。",
      "steps": [
        {
          "type": "text",
          "text": "先利用連除性質算出 1 小袋有幾顆蘋果：把 12 和 25 先相乘湊整成 300，再被 4800 除會好算很多。"
        },
        {
          "type": "eq",
          "expr": "4800 ÷ 12 ÷ 25 ＝ 4800 ÷ （12 × 25） ＝ 4800 ÷ 300 ＝ 16"
        },
        {
          "type": "text",
          "text": "每箱原本有 25 小袋，賣掉 18 小袋後每箱剩下 7 小袋；12 箱一共剩下 12 × 7 ＝ 84 小袋。"
        },
        {
          "type": "eq",
          "expr": "16 × 12 × （25 − 18） ＝ 192 × 7 ＝ 1344"
        },
        {
          "type": "mul",
          "a": "192",
          "b": "7",
          "note": "總共剩下的 84 小袋（或 12 箱合併）乘以每袋顆數驗算"
        },
        {
          "type": "answer",
          "text": "答：1344 顆"
        }
      ],
      "distractorAnalysis": {
        "A": "【算錯目標量】求出的是賣掉的蘋果總數 16 × 12 × 18 ＝ 3456 顆，而不是「剩下」的數量。",
        "C": "【連除加括號未變號或倍數算錯】把剩下小袋數誤算成 25 − 18 與倍數湊整錯算，或把每小袋誤算成 4800 ÷ 12 ÷ 25 與 12 混用多算成 1440 顆。",
        "B": "【去括號順序混亂】計算剩下的顆數時誤將剩餘袋數與箱數混淆，算成 16 × （12 × 25 ÷ 18） 近似或錯用 16 × 70 ＝ 1120 顆。"
      },
      "insight": "遇到除以 25 或 125 時，馬上找看看前面有沒有 4 或 12 可以先乘在一起湊成整百、整千再除！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "連除性質：甲 ÷ 乙 ÷ 丙 ＝ 甲 ÷ （乙 × 丙）",
        "整體思考：每箱都剩 7 ÷ 25 的數量，直接算（4800 ÷ 25） × 7 ＝ 192 × 7 ＝ 1344 更快！"
      ],
      "conceptCompare": "【連除併項 vs 交換位置】4800 ÷ 12 ÷ 25 ＝ 4800 ÷ （12 × 25），但千萬不可寫成 4800 ÷ （12 ÷ 25）。",
      "examVariations": "進階題會問「剩下蘋果佔全部箱子原本可裝數量的幾分之幾」或改給每袋顆數反推箱數。"
    },
    "check": {
      "expr": "(4800 / (12 * 25)) * 12 * (25 - 18)",
      "expect": "1344"
    }
  },
  {
    "id": "U07-S3-O-003",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L4 分配律面積拼貼",
    "section": "7-3",
    "sectionName": "乘法對加減法的分配律",
    "category": "乘法分配律與面積合併扣除",
    "level": 4,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "農夫有兩塊相鄰的長方形土地：一塊花圃長 78 公尺、寬 36 公尺，另一塊菜園長 78 公尺、寬 24 公尺。農夫把兩塊地合併後，在裡面開闢了一個長 78 公尺、寬 15 公尺的長方形蓄水池，請問剩下的種植面積是多少平方公尺？",
    "options": [
      {
        "key": "A",
        "text": "3510 平方公尺",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "5850 平方公尺",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "C",
        "text": "4680 平方公尺",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "D",
        "text": "3420 平方公尺",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生將三項同公因數的「加減混合」用乘法分配律合併簡算，並結合長方形寬度拼貼的幾何直覺。",
      "steps": [
        {
          "type": "text",
          "text": "三塊區域的長度都是 78 公尺，把寬度合起來扣除蓄水池的寬度，就是剩餘種植區的總寬度。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"25\" width=\"160\" height=\"80\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><rect x=\"205\" y=\"25\" width=\"110\" height=\"80\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><rect x=\"315\" y=\"25\" width=\"75\" height=\"80\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/><text x=\"125\" y=\"62\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#166534\">花圃</text><text x=\"125\" y=\"80\" text-anchor=\"middle\" font-size=\"12\" fill=\"#166534\">寬 36 公尺</text><text x=\"260\" y=\"62\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">菜園</text><text x=\"260\" y=\"80\" text-anchor=\"middle\" font-size=\"12\" fill=\"#92400e\">寬 24 公尺</text><text x=\"352\" y=\"62\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\">扣水池</text><text x=\"352\" y=\"80\" text-anchor=\"middle\" font-size=\"12\" fill=\"#991b1b\">寬 15 公尺</text><text x=\"24\" y=\"70\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">長78</text><text x=\"218\" y=\"132\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#3730a3\">合併後總寬 ＝ 36 ＋ 24 − 15 ＝ 45 公尺</text></svg>",
          "caption": "圖解：三塊土地同長 78 公尺，將花圃與菜園寬度相加並減去蓄水池寬度"
        },
        {
          "type": "eq",
          "expr": "78 × 36 ＋ 78 × 24 − 78 × 15 ＝ 78 × （36 ＋ 24 − 15） ＝ 78 × 45"
        },
        {
          "type": "text",
          "text": "再利用拆數湊整：把 78 拆成 39 × 2，把 2 乘給 45 變成 90，心算就能秒殺！"
        },
        {
          "type": "eq",
          "expr": "78 × 45 ＝ 39 × （2 × 45） ＝ 39 × 90 ＝ 3510"
        },
        {
          "type": "answer",
          "text": "答：3510 平方公尺"
        }
      ],
      "distractorAnalysis": {
        "B": "【符號誤加】把最後的「− 15」錯算成「＋ 15」，算出 78 × （36 ＋ 24 ＋ 15） ＝ 5850 平方公尺。",
        "D": "【乘法進位筆誤】正確算出寬為 45 公尺，但在計算 78 × 45 時十位漏進位錯算成 3420 平方公尺。",
        "C": "【忘記扣除蓄水池】只算了花圃和菜園合併的總面積 78 × （36 ＋ 24） ＝ 4680 平方公尺。"
      },
      "figureNote": "把相同長度 78 公尺擺在同一側並排，加減面積就等於直接把各自的寬度加減後再一起乘上 78。",
      "insight": "三項都可以提取公因數 78，而且碰到「雙數 × 5 的倍數（78 × 45）」時，借一個 2 給 45 變成 90，立刻少做一次兩位數乘法！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "三項分配律：甲 × 乙 ＋ 甲 × 丙 − 甲 × 丁 ＝ 甲 × （乙 ＋ 丙 − 丁）",
        "雙數配 5 倍數：看到 45、25、15 配上偶數，拆出 2 湊整成 90、50、30"
      ],
      "conceptCompare": "【分開算再相加 vs 合併寬度再相乘】分開乘要做三次兩位數乘法，提取公因數後只需算一次乘法 39 × 90。",
      "examVariations": "若改為其中一塊長是 39 公尺、寬 30 公尺，須先變形為 78 × 15 才能提出共同公因數 78。"
    },
    "check": {
      "expr": "78 * 36 + 78 * 24 - 78 * 15",
      "expect": "3510"
    }
  },
  {
    "id": "U07-S3-O-004",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L4 漏括號錯算反推",
    "section": "7-3",
    "sectionName": "乘法對加減法的分配律",
    "category": "分配律結構比對與錯算反推",
    "level": 4,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小宇在計算「（ □ ＋ 24 ） × 15」這道題目時，粗心漏寫了括號，直接算成「□ ＋ 24 × 15」，結果算出的答案比正確答案少了 420。請問正確答案應該是多少？",
    "options": [
      {
        "key": "A",
        "text": "780",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "B",
        "text": "390",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "810",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "30",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生運用分配律展開正確算式與錯誤算式，從兩者相差的值反推出未知框 □ 的大小，再代回求正確答案。",
      "steps": [
        {
          "type": "text",
          "text": "用乘法分配律把正確算式展開，再跟錯誤算式對齊比較："
        },
        {
          "type": "eq",
          "expr": "正確算式：（ □ ＋ 24 ） × 15 ＝ □ × 15 ＋ 24 × 15"
        },
        {
          "type": "eq",
          "expr": "錯誤算式：□ ＋ 24 × 15"
        },
        {
          "type": "text",
          "text": "兩邊都有「＋ 24 × 15」，所以相差的 420 完全來自前面「15 個 □」和「1 個 □」的差距！"
        },
        {
          "type": "eq",
          "expr": "□ × （15 − 1） ＝ 420，所以 □ ＝ 420 ÷ 14 ＝ 30"
        },
        {
          "type": "eq",
          "expr": "正確答案 ＝ （30 ＋ 24） × 15 ＝ 54 × 15 ＝ 810"
        },
        {
          "type": "answer",
          "text": "答：810"
        }
      ],
      "distractorAnalysis": {
        "A": "【沒扣掉原本的 1 個 □】以為少算了 15 個 □ 而非 14 個 □，錯算成 □ ＝ 420 ÷ 15 ＝ 28，代回得 （28 ＋ 24） × 15 ＝ 780。",
        "B": "【答成錯誤算式的結果】算出 □ ＝ 30 後，誤代回錯式算出 30 ＋ 360 ＝ 390。",
        "D": "【沒看清最後題問】只求出了未知框 □ ＝ 30，忘記還要代回原本算式求「正確答案」。"
      },
      "insight": "漏掉括號時，千萬不要硬猜 □！把正確式子用分配律打開，消掉兩邊一樣的尾巴，剩下的倍數差一除就出來了！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "倍數差比較：15 個 □ 減掉 1 個 □ ＝ 14 個 □",
        "求值必檢核題幹最後問「□ 是多少」還是「正確答案是多少」"
      ],
      "conceptCompare": "【漏寫括號 vs 看錯加減號】若把（□ ＋ 24）× 15 看成（□ − 24）× 15，差的是「2 倍的 24 × 15」；漏括號則是差了「(15 − 1) 倍的 □」。",
      "examVariations": "換成「甲 × （□ − 12） 漏括號算成 甲 × □ − 12」，此時相差的是 12 × （甲 − 1）。"
    },
    "check": {
      "expr": "(420 / (15 - 1) + 24) * 15",
      "expect": "810"
    }
  },
  {
    "id": "U07-S4-O-005",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L5 含自己總人數平均問題",
    "section": "7-4",
    "sectionName": "平均問題與併式應用",
    "category": "含自己總人數之平均與均攤",
    "level": 5,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小晴和她的 5 位好朋友去草地野餐，出發前那 5 位朋友平均每人帶了 24 片餅乾，小晴自己帶了 60 片餅乾。如果把全部的餅乾合起來平分給現場每個人，請問每人可以分到幾片餅乾？",
    "options": [
      {
        "key": "A",
        "text": "36 片",
        "trapCode": "U07_MISSING_SELF_COUNT"
      },
      {
        "key": "B",
        "text": "42 片",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "C",
        "text": "30 片",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "14 片",
        "trapCode": "U07_AVG_FORGET_MULTIPLY"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否看清「小晴和她的 5 位朋友」總人數是 1 ＋ 5 ＝ 6 人（避免漏算自己），並先乘回 5 人總片數再合併求平均。",
      "steps": [
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "先算全部有多少片餅乾：5 位朋友共有 24 × 5 ＝ 120 片，加上小晴帶的 60 片，一共 180 片。"
        },
        {
          "type": "eq",
          "expr": "（24 × 5 ＋ 60） ÷ （5 ＋ 1） ＝ 180 ÷ 6 ＝ 30"
        },
        {
          "type": "text",
          "text": "另一種移多補少想法：小晴比 5 位朋友平均多帶了 60 − 24 ＝ 36 片，把這多出的 36 片平分給全部 6 個人（含小晴自己），每人都能多拿 36 ÷ 6 ＝ 6 片，所以每人變成 24 ＋ 6 ＝ 30 片。"
        },
        {
          "type": "answer",
          "text": "答：30 片"
        }
      ],
      "distractorAnalysis": {
        "A": "【漏算小晴自己】算出了總餅乾 180 片，但除以「5 位朋友」沒加小晴本人，錯算成 180 ÷ 5 ＝ 36 片。",
        "D": "【忘記把平均乘回人數】沒先算 24 × 5 ＝ 120，直接拿 24 ＋ 60 ＝ 84 除以 6，得出 14 片。",
        "B": "【誤把兩個平均直接相加除以 2】把 24 和 60 直接相加除以 2，錯算成 （24 ＋ 60） ÷ 2 ＝ 42 片。"
      },
      "figureNote": "線段圖中 5 位朋友共佔 5 份（每份 24 片），小晴是第 6 人（60 片＝2.5 份），全部合併後要平分成 6 份。",
      "insight": "看到「誰和幾位朋友」，立刻圈出總人數「1 ＋ 朋友人數」，少加自己一個就會讓全部分數整除到假答案上！"
    },
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "5 位朋友(共120片)",
          "units": 5,
          "role": "base"
        },
        {
          "label": "小晴(60片)",
          "units": 2.5,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "合計 180 片，平分給 6 人"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "群體總數 ＝ 個人自己 ＋ 其他朋友人數",
        "新平均 ＝ 原平均 ＋ （多出來的量 ÷ 全部總人數）"
      ],
      "conceptCompare": "【平均不可直接相加除以 2】5 人的 24 片跟 1 人的 60 片人數權重不同，必須乘回總量再除總人數。",
      "examVariations": "若改問「小晴需要分給每位朋友幾片餅乾」，答案會是 6 片（自己留下 30 片，多出的 30 片分給 5 位朋友，每人拿 6 片）。"
    },
    "check": {
      "expr": "(24 * 5 + 60) / (5 + 1)",
      "expect": "30"
    }
  },
  {
    "id": "U07-S4-O-006",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L5 雙群組目標平均逆推",
    "section": "7-4",
    "sectionName": "平均問題與併式應用",
    "category": "分組平均與目標分數補齊",
    "level": 5,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "五年甲班共有 30 位學生，其中男生 16 人在期末數學測驗的平均分數是 82 分。如果全班 30 人的平均分數剛好要達到 89 分，請問班上 14 位女生的平均分數必須是多少分？",
    "options": [
      {
        "key": "A",
        "text": "97 分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "98 分",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "C",
        "text": "96 分",
        "trapCode": "U07_AVG_FORGET_MULTIPLY"
      },
      {
        "key": "D",
        "text": "95 分",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生區分不同人數的加權平均，能利用總分差或「移多補少高出目標的總分」求出另一組的平均分數。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 145\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"82\" x2=\"420\" y2=\"82\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><text x=\"55\" y=\"70\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#4f46e5\">目標線 89 分</text><rect x=\"55\" y=\"82\" width=\"150\" height=\"34\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"130\" y=\"103\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#991b1b\">男生 16 人 (82分)</text><text x=\"130\" y=\"133\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">每人少 7 分，共少 112 分</text><rect x=\"235\" y=\"44\" width=\"145\" height=\"38\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"307\" y=\"67\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#166534\">女生 14 人補回</text><text x=\"307\" y=\"32\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">需共多 112 分 (每人＋8分)</text></svg>",
          "caption": "圖解：移多補少看 89 分基準線，男生共少 112 分必須由 14 名女生剛好補齊"
        },
        {
          "type": "text",
          "text": "方法一（總分相減）：先算全班 30 人總分，扣掉男生 16 人的總分，再除以女生 14 人。"
        },
        {
          "type": "eq",
          "expr": "（30 × 89 − 16 × 82） ÷ 14 ＝ （2670 − 1312） ÷ 14 ＝ 1358 ÷ 14 ＝ 97"
        },
        {
          "type": "text",
          "text": "方法二（移多補少秒算）：男生 16 人每人比目標 89 少 7 分，共少 16 × 7 ＝ 112 分；這 112 分由 14 名女生平均多考來補齊，所以女生每人需比 89 分多 112 ÷ 14 ＝ 8 分，89 ＋ 8 ＝ 97 分。"
        },
        {
          "type": "answer",
          "text": "答：97 分"
        }
      ],
      "distractorAnalysis": {
        "B": "【除以錯誤人數或補分錯算】移多補少時誤算成 112 ÷ 12 或錯加 1 分變成 98 分。",
        "D": "【估算或計算差值筆誤】移多補少時誤把男生少的分數算成 16 × 5 ＝ 80 並錯算女生須補分數而得出 95 分。",
        "C": "【忽略男女生人數不同】直接用 89 × 2 − 82 ＝ 96 分，把 16 名男生跟 14 名女生當成各佔一半。"
      },
      "figureNote": "把 89 分當基準線，下面男生少幾分、上面女生就得補幾分，兩塊面積（總差）一定要完全相等。",
      "insight": "遇到兩個群體人數不同時，千萬不能直接（甲平均 ＋ 乙平均） ÷ 2；用「移多補少基準線」不必乘大數就能心算出來！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "總和 ＝ 平均 × 個數",
        "盈虧平衡法：低於目標的總虧分 ＝ 高於目標的總盈分"
      ],
      "conceptCompare": "【總分法 vs 基準差法】兩者答案完全相同，但基準差法數字小很多（只算 16 × 7 ÷ 14 ＝ 8），不容易計算錯誤。",
      "examVariations": "段考常考「少算一個缺考者後重新補考」，求補考者需考幾分才能拉高平均。"
    },
    "check": {
      "expr": "(30 * 89 - 16 * 82) / 14",
      "expect": "97"
    }
  },
  {
    "id": "U07-S4-O-007",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L5 三人墊付均攤轉移",
    "section": "7-4",
    "sectionName": "平均問題與併式應用",
    "category": "均攤計算與相互找補",
    "level": 5,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "甲、乙、丙三人合買一套桌遊與飲料，約定費用完全平分。結帳時甲先付了 540 元，乙先付了 420 元，丙只拿出身上所有的 120 元。為了讓三人出的錢一樣多，丙應該還要再給「甲」多少元？",
    "options": [
      {
        "key": "A",
        "text": "60 元",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "240 元",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "180 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "210 元",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生先求三人總花費與每人應分攤金額，再精準判斷「誰多付多少、誰該還給特定對象多少」。",
      "steps": [
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "先算三人總共花了多少元，再除以 3 找出每人應該分攤的金額："
        },
        {
          "type": "eq",
          "expr": "（540 ＋ 420 ＋ 120） ÷ 3 ＝ 1080 ÷ 3 ＝ 360"
        },
        {
          "type": "text",
          "text": "甲應該付 360 元，但卻先付了 540 元，表示甲幫大家多墊付了 540 − 360 ＝ 180 元；乙多墊付了 420 − 360 ＝ 60 元；丙共少付 360 − 120 ＝ 240 元，正好拆成 180 元給甲、60 元給乙。"
        },
        {
          "type": "eq",
          "expr": "540 − 360 ＝ 180"
        },
        {
          "type": "answer",
          "text": "答：180 元"
        }
      ],
      "distractorAnalysis": {
        "B": "【答成丙總共少付的錢】算出丙還差 360 − 120 ＝ 240 元，沒看清楚題目只問「給甲」多少元（240 元中有 60 元要給乙）。",
        "D": "【未先平分直接取兩人差的一半】誤算成 （540 − 120） ÷ 2 ＝ 210 元，忽略了乙出的 420 元。",
        "A": "【看錯對象給乙的錢】算成了丙應該給乙的 420 − 360 ＝ 60 元。"
      },
      "figureNote": "以每 60 元為 1 份來看：甲先付 9 份、乙先付 7 份、丙先付 2 份，合計 18 份每人應付 6 份，故甲多付 3 份（180 元）。",
      "insight": "算均攤補錢題時，先求出「每人應付金額」，比應付金額多付的人就是「等著收錢的人」，多付多少就該收多少！"
    },
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "甲先付 540 元",
          "units": 9,
          "role": "base"
        },
        {
          "label": "乙先付 420 元",
          "units": 7,
          "role": "compare"
        },
        {
          "label": "丙先付 120 元",
          "units": 2,
          "role": "extra"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "共 18 份（1080元），每人 6 份"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "每人應付 ＝ 全部總支出 ÷ 總人數",
        "多退少補：已付金額 − 每人應付 ＝ 多墊付（應收回）的金額"
      ],
      "conceptCompare": "【給誰多少 vs 一共少付多少】丙總共少付 240 元，是「給甲 180 元 ＋ 給乙 60 元」，驗算時檢查所有人最後實付是否都為 360 元。",
      "examVariations": "若有兩人少付、兩人多付，通常題目會問「兩人共給某人多少」或「最少人轉手結清方式」。"
    },
    "check": {
      "expr": "540 - (540 + 420 + 120) / 3",
      "expect": "180"
    }
  },
  {
    "id": "U07-RV-O-008",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L6 連除與括號去留綜合",
    "section": "REVIEW",
    "sectionName": "單元綜合應用",
    "category": "連乘連除湊整與括號規則",
    "level": 6,
    "difficulty": 4,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "計算 4800 ÷ 24 ÷ 4 ＋ 720 ÷ （12 × 3） ＝ ？",
    "options": [
      {
        "key": "A",
        "text": "230",
        "trapCode": "U07_DIV_CHAIN_WRONG"
      },
      {
        "key": "B",
        "text": "820",
        "trapCode": "U07_DIV_CHAIN_WRONG"
      },
      {
        "key": "C",
        "text": "80",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "70",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生在同一個算式中同時正確處理「連續除法（沒有括號）」與「除以括號內的積（先算括號）」，避免去括號與加括號搞反。",
      "steps": [
        {
          "type": "text",
          "text": "先依「先乘除後加減，有括號先算括號內」把題目切成加減號左右兩邊分頭計算："
        },
        {
          "type": "eq",
          "expr": "左邊：4800 ÷ 24 ÷ 4 ＝ 200 ÷ 4 ＝ 50"
        },
        {
          "type": "eq",
          "expr": "右邊：720 ÷ （12 × 3） ＝ 720 ÷ 36 ＝ 20"
        },
        {
          "type": "text",
          "text": "也可把右邊去括號變成連除：720 ÷ 12 ÷ 3 ＝ 60 ÷ 3 ＝ 20，兩邊相加得 50 ＋ 20 ＝ 70。"
        },
        {
          "type": "eq",
          "expr": "50 ＋ 20 ＝ 70"
        },
        {
          "type": "answer",
          "text": "答：70"
        }
      ],
      "distractorAnalysis": {
        "A": "【除以括號去括號忘記變除號】把 720 ÷ （12 × 3） 錯寫成 720 ÷ 12 × 3 ＝ 180，得到 50 ＋ 180 ＝ 230。",
        "B": "【連除錯加上括號未變乘】把左邊 4800 ÷ 24 ÷ 4 錯變成 4800 ÷ （24 ÷ 4） ＝ 4800 ÷ 6 ＝ 800，得到 800 ＋ 20 ＝ 820。",
        "C": "【整十計算失誤】計算 4800 ÷ 24 ÷ 4 或 720 ÷ 36 時錯多出 10，得出 60 ＋ 20 ＝ 80。"
      },
      "insight": "「加括號在除號後面」跟「加括號在減號後面」一樣都要變號！連除變除以積，除以積變連除，千萬別用除的去併除！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "連除加括號：甲 ÷ 乙 ÷ 丙 ＝ 甲 ÷ （乙 × 丙）",
        "去括號規則：甲 ÷ （乙 × 丙） ＝ 甲 ÷ 乙 ÷ 丙"
      ],
      "conceptCompare": "【4800 ÷ （24 × 4） vs 4800 ÷ （24 ÷ 4）】連續除以兩個數，代表除數越變越大（24 × 4 ＝ 96），不能寫成（24 ÷ 4）。",
      "examVariations": "進階題會混合小數或大數，例如 7200 ÷ （25 × 8） ＝ 7200 ÷ 200 ＝ 36。"
    },
    "check": {
      "expr": "4800 / 24 / 4 + 720 / (12 * 3)",
      "expect": "70"
    }
  },
  {
    "id": "U07-RV-O-009",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L6 雞兔同籠置換四則化",
    "section": "REVIEW",
    "sectionName": "單元綜合應用",
    "category": "假設替換思想與四則併式",
    "level": 6,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "動物保護園區裡有松鼠和鸚鵡共 28 隻，牠們一共有 78 隻腳（每隻松鼠有 4 隻腳，每隻鸚鵡有 2 隻腳）。請問園區裡的「松鼠比鸚鵡少幾隻」？",
    "options": [
      {
        "key": "A",
        "text": "11 隻",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "6 隻",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "17 隻",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "10 隻",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生直接用「全體假設法」四則併式解雞兔問題，並注意題目最終問兩者之差。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"18\" width=\"190\" height=\"52\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"119\" y=\"40\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#075985\">假設全部 28 隻都是鸚鵡</text><text x=\"119\" y=\"59\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0369a1\">總腳數 ＝ 28 × 2 ＝ 56 隻</text><path d=\"M 218 44 L 244 44\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/><polygon points=\"242,39 252,44 242,49\" fill=\"#4f46e5\"/><rect x=\"256\" y=\"18\" width=\"182\" height=\"52\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"347\" y=\"40\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">實際 78 隻腳，差 22 隻</text><text x=\"347\" y=\"59\" text-anchor=\"middle\" font-size=\"12\" fill=\"#b45309\">每換 1 隻松鼠 ＋2 隻腳</text><text x=\"230\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#4f46e5\">松鼠 ＝ 22 ÷ 2 ＝ 11 隻　｜　鸚鵡 ＝ 28 − 11 ＝ 17 隻</text></svg>",
          "caption": "圖解：全部看成 2 隻腳的鸚鵡後，將少算的 22 隻腳逐一補上（每隻多 2 腳即換成松鼠）"
        },
        {
          "type": "text",
          "text": "假設 28 隻全部都是 2 隻腳的鸚鵡，只會有 28 × 2 ＝ 56 隻腳，比實際的 78 隻腳少了 22 隻。"
        },
        {
          "type": "eq",
          "expr": "松鼠隻數 ＝ （78 − 28 × 2） ÷ （4 − 2） ＝ 22 ÷ 2 ＝ 11"
        },
        {
          "type": "eq",
          "expr": "鸚鵡隻數 ＝ 28 − 11 ＝ 17"
        },
        {
          "type": "eq",
          "expr": "松鼠比鸚鵡少 ＝ 17 − 11 ＝ 6"
        },
        {
          "type": "answer",
          "text": "答：6 隻"
        }
      ],
      "distractorAnalysis": {
        "A": "【只算出松鼠隻數】算到松鼠有 11 隻就直接選了答案，沒算出鸚鵡隻數再相減。",
        "D": "【減法或假設腳數筆誤】把總數 28 減去 11 時錯算成 18，或假設後錯用差值算出 10 隻。",
        "C": "【只算出鸚鵡隻數】算到鸚鵡有 17 隻就結束了，忘了求兩者相差幾隻。"
      },
      "figureNote": "用「每隻先站 2 隻腳」去想最快：28 隻站 56 隻腳，還在空中舉起的 22 隻腳全是松鼠的前腳（每隻 2 隻）。",
      "insight": "假設全是雞（2 隻腳），多出的腳除以 2 就是兔（4 隻腳）的數量！這也是「腳數折半減頭數 ＝ 39 − 28 ＝ 11」的秘密！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設法公式：四腳動物數量 ＝ （總腳數 − 總隻數 × 2） ÷ （4 − 2）",
        "抬腳秒殺法：總腳數 ÷ 2 − 總頭數 ＝ 四腳動物數量"
      ],
      "conceptCompare": "【假設全鸚鵡 vs 假設全松鼠】假設全松鼠（28 × 4 ＝ 112 腳）多出 34 腳，除以 2 得鸚鵡 17 隻，一樣可解出兩者差 6 隻。",
      "examVariations": "常見變形為「答對加 5 分、答錯倒扣 2 分」的競試分數題（每換 1 題差 5 ＋ 2 ＝ 7 分）。"
    },
    "check": {
      "expr": "(28 - (78 - 28 * 2) / (4 - 2)) - ((78 - 28 * 2) / (4 - 2))",
      "expect": "6"
    }
  },
  {
    "id": "U07-RV-O-010",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L6 基準數求平均",
    "section": "REVIEW",
    "sectionName": "單元綜合應用",
    "category": "基準數與盈虧相抵求平均",
    "level": 6,
    "difficulty": 4,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "有五位同學參加投籃測驗，每人進球數分別是 83 球、76 球、87 球、74 球、90 球。如果以「80 球」為基準，利用多出與不足的數量相抵，請問這五位同學平均每人投進幾球？",
    "options": [
      {
        "key": "A",
        "text": "84 球",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      },
      {
        "key": "B",
        "text": "90 球",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "C",
        "text": "82 球",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "86 球",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生使用「基準數法」求平均數：把大數字拆成「基準數 ＋ 盈虧差」，再用盈虧相抵除以個數，提升心算速度與數感。",
      "steps": [
        {
          "type": "text",
          "text": "把每個人的進球數跟「基準 80 球」比較：83 比 80 多 3，76 比 80 少 4，87 多 7，74 少 6，90 多 10。"
        },
        {
          "type": "eq",
          "expr": "多的總和 − 少的總和 ＝ （3 ＋ 7 ＋ 10） − （4 ＋ 6） ＝ 20 − 10 ＝ 10"
        },
        {
          "type": "text",
          "text": "多出來的 10 球要平分給 5 位同學，每人平均可以多出 10 ÷ 5 ＝ 2 球。"
        },
        {
          "type": "eq",
          "expr": "80 ＋ 10 ÷ 5 ＝ 80 ＋ 2 ＝ 82"
        },
        {
          "type": "answer",
          "text": "答：82 球"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記除以人數】算出多出來 10 球後，忘了除以 5 人就直接加到 80 上，變成 80 ＋ 10 ＝ 90 球。",
        "D": "【把不足的差額也當成加的】誤將 4 和 6 也加上去，算出 （3 ＋ 4 ＋ 7 ＋ 6 ＋ 10） ÷ 5 ＋ 80 ＝ 86 球。",
        "A": "【漏減不足 80 的部分】只把多於 80 的 （3 ＋ 7 ＋ 10） ＝ 20 除以 5 加回去，沒減掉少於 80 的 4 和 6，得出 84 球。"
      },
      "insight": "求接近的幾個數的平均時，先抓一個整十的基準數（例如 80），就像把每條長條底部切齊 80，只算頂端多出來或凹下去的小塊，速度快十倍！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準數平均法：平均 ＝ 基準數 ＋ （多出的總和 − 不足的總和） ÷ 總個數",
        "總和還原：總和 ＝ 基準數 × 個數 ＋ 淨差額"
      ],
      "conceptCompare": "【全部相加再除 5 vs 基準數法】直接加 83＋76＋87＋74＋90 ＝ 410，再算 410 ÷ 5 ＝ 82 也能算出；若遇到 10 個四位數，基準數法優勢極大。",
      "examVariations": "若總相抵為「不足」（例如少了 15 球），則平均要從基準數減掉 15 ÷ 5 ＝ 3。"
    },
    "check": {
      "expr": "80 + ((83 - 80) + (76 - 80) + (87 - 80) + (74 - 80) + (90 - 80)) / 5",
      "expect": "82"
    }
  },
  {
    "id": "U07-RV-O-011",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L7 二次提取公因數簡算",
    "section": "REVIEW",
    "sectionName": "奧數思維天梯",
    "category": "拆數構造公因數與分配律",
    "level": 7,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "請運用拆數與乘法分配律的結構觀察，巧妙計算：999 × 444 ＋ 333 × 668 ＝ ？",
    "options": [
      {
        "key": "A",
        "text": "370296",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "B",
        "text": "333000",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "666000",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "632700",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生面對「沒有明顯相同乘數」的乘加式子時，能看出 999 與 333 的 3 倍關係，將 3 搬移到另一個乘數製造公因數 333。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"20\" width=\"175\" height=\"46\" rx=\"6\" fill=\"#ede9fe\" stroke=\"#5b4bdb\" stroke-width=\"2\"/><text x=\"112\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#3730a3\">999 × 444 ＝ 333 × 3 × 444</text><path d=\"M 205 43 L 235 43\" stroke=\"#4f46e5\" stroke-width=\"2.2\"/><polygon points=\"233,38 243,43 233,48\" fill=\"#4f46e5\"/><rect x=\"247\" y=\"20\" width=\"188\" height=\"46\" rx=\"6\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"341\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#166534\">＝ 333 × 1332</text><text x=\"230\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#be123c\">再跟 ＋ 333 × 668 合併：333 × （1332 ＋ 668） ＝ 333 × 2000</text></svg>",
          "caption": "圖解：將 999 拆成 333 × 3 後，把 3 乘給 444 變成 1332，完美與 668 湊成 2000"
        },
        {
          "type": "text",
          "text": "把 999 拆成 333 × 3，利用乘法結合律先把 3 和 444 相乘："
        },
        {
          "type": "eq",
          "expr": "999 × 444 ＋ 333 × 668 ＝ 333 × （3 × 444） ＋ 333 × 668"
        },
        {
          "type": "eq",
          "expr": "＝ 333 × 1332 ＋ 333 × 668 ＝ 333 × （1332 ＋ 668） ＝ 333 × 2000 ＝ 666000"
        },
        {
          "type": "answer",
          "text": "答：666000"
        }
      ],
      "distractorAnalysis": {
        "A": "【拆出公因數卻忘記把 3 乘進去】把 999 改成 333 後漏乘了 3，錯算成 333 × （444 ＋ 668） ＝ 370296。",
        "B": "【湊整千估錯】誤以為括號內的 1332 ＋ 668 加起來是 1000，錯算出 333 × 1000 ＝ 333000。",
        "D": "【千位進位算錯】計算 1332 ＋ 668 時錯算成 1900，得出 333 × 1900 ＝ 632700。"
      },
      "figureNote": "透過乘法結合律把 999 的「3 倍」搬家給 444，是讓兩項出現相同公因數 333 的關鍵一步。",
      "insight": "遇到 999 跟 333、或 125 跟 25 這類「成倍數關係」的數字，把大的拆成倍數，立刻就能抽出公因數湊成整千！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "二次提取法：（倍數 × 甲） × 乙 ＋ 甲 × 丙 ＝ 甲 × （倍數 × 乙 ＋ 丙）",
        "看到 332 與 668（尾數互補成 1000）就是結構湊整的線索"
      ],
      "conceptCompare": "【湊 1000 − 1 拆法 vs 拆 333 × 3 提公因數】這題若硬把 999 拆成 1000 − 1，後面仍要算 333 × 668 非常麻煩；發現 999 ＝ 3 × 333 才是真正高明之處。",
      "examVariations": "常見兄弟題：「999 × 222 ＋ 333 × 334 ＝ 333 × （666 ＋ 334） ＝ 333000」。"
    },
    "check": {
      "expr": "999 * 444 + 333 * 668",
      "expect": "666000"
    }
  },
  {
    "id": "U07-RV-O-012",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L7 連續運算倒推還原",
    "section": "REVIEW",
    "sectionName": "奧數思維天梯",
    "category": "多步驟運算流程倒推",
    "level": 7,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一個神祕的數字 □ 依序經過以下四個運算關卡：先「加上 18」，再「乘以 4」，接著「減去 24」，最後「除以 6」，算出的結果剛好是 32。請問原本的數字 □ 是多少？",
    "options": [
      {
        "key": "A",
        "text": "24",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "B",
        "text": "180",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      },
      {
        "key": "C",
        "text": "54",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "36",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生列出多層括號併式，並由最外層向內逐一逆運算還原（加變減、乘變除）。",
      "steps": [
        {
          "type": "text",
          "text": "按照步驟順序寫成一條流程：□ ➔ ＋ 18 ➔ × 4 ➔ − 24 ➔ ÷ 6 ➔ 32。"
        },
        {
          "type": "text",
          "text": "從終點 32 往回走，每倒退一關，運算符號就要全部反過來（÷ 變 ×、− 變 ＋、× 變 ÷、＋ 變 −）："
        },
        {
          "type": "eq",
          "expr": "（（32 × 6 ＋ 24） ÷ 4） − 18"
        },
        {
          "type": "eq",
          "expr": "＝ （（192 ＋ 24） ÷ 4） − 18 ＝ （216 ÷ 4） − 18 ＝ 54 − 18 ＝ 36"
        },
        {
          "type": "text",
          "text": "帶回原順序驗算：36 ＋ 18 ＝ 54，54 × 4 ＝ 216，216 − 24 ＝ 192，192 ÷ 6 ＝ 32，完全符合！"
        },
        {
          "type": "answer",
          "text": "答：36"
        }
      ],
      "distractorAnalysis": {
        "A": "【倒推時加減沒有反轉】遇到減去 24 倒推時還是算成減去 24，誤算成 （32 × 6 − 24） ÷ 4 − 18 ＝ 42 − 18 ＝ 24。",
        "C": "【最後一步漏減】倒推到 216 ÷ 4 ＝ 54 時就停下來作答，忘了退回第一關「− 18」。",
        "B": "【倒推忘了加括號】寫成 32 × 6 ＋ 24 ÷ 4 − 18，先算了 24 ÷ 4 ＝ 6 而得到 192 ＋ 6 − 18 ＝ 180。"
      },
      "insight": "還原路線就像照鏡子走回頭路：「後做的要先拆，原本的符號全反過來」，且每一層都要用括號包好保護計算順序！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "倒推口訣：順序相反、符號對調（＋↔−、×↔÷）",
        "最後必做順向帶回驗算，100% 確認無誤"
      ],
      "conceptCompare": "【依序流程倒推 vs 不帶括號直接連寫】32 × 6 ＋ 24 ÷ 4 會因先乘除後加減而算錯，必須寫成 （32 × 6 ＋ 24） ÷ 4。",
      "examVariations": "若把某一關改成「加上自己的一半」或與分數結合，就須搭配線段圖比例還原。"
    },
    "check": {
      "expr": "((32 * 6 + 24) / 4) - 18",
      "expect": "36"
    }
  },
  {
    "id": "U07-RV-O-013",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L7 自創運算符號嵌套逆推",
    "section": "REVIEW",
    "sectionName": "奧數思維天梯",
    "category": "自定義新運算與雙層嵌套求解",
    "level": 7,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "我們規定一種新運算符號「☆」，對任意兩個數 甲 和 乙，規則都是：甲 ☆ 乙 ＝ 甲 × 3 ＋ 乙 × 2 − 4。例如：2 ☆ 5 ＝ 2 × 3 ＋ 5 × 2 − 4 ＝ 12。已知 （ □ ☆ 8 ） ☆ 5 ＝ 78，請問 □ 代表的數字是多少？",
    "options": [
      {
        "key": "A",
        "text": "24",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "4",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "12",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "D",
        "text": "6",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生看懂並套用新定義的四則規則，能把內層括號（□ ☆ 8）先視為一個整體「大框框」，由外向內兩層倒推求解。",
      "steps": [
        {
          "type": "text",
          "text": "先把內層（□ ☆ 8）當成一個暫時的大方塊，套入外層「大方塊 ☆ 5 ＝ 78」："
        },
        {
          "type": "eq",
          "expr": "大方塊 × 3 ＋ 5 × 2 − 4 ＝ 78"
        },
        {
          "type": "eq",
          "expr": "大方塊 × 3 ＋ 6 ＝ 78 ➔ 大方塊 ＝ （78 − 6） ÷ 3 ＝ 72 ÷ 3 ＝ 24"
        },
        {
          "type": "text",
          "text": "現在知道內層 □ ☆ 8 ＝ 24，再套一次規則："
        },
        {
          "type": "eq",
          "expr": "□ × 3 ＋ 8 × 2 − 4 ＝ 24"
        },
        {
          "type": "eq",
          "expr": "□ × 3 ＋ 12 ＝ 24 ➔ □ ＝ （24 − 12） ÷ 3 ＝ 12 ÷ 3 ＝ 4"
        },
        {
          "type": "answer",
          "text": "答：4"
        }
      ],
      "distractorAnalysis": {
        "C": "【逆推符號沒有反轉】算出 □ × 3 ＋ 12 ＝ 24 後，錯用 24 ＋ 12 ＝ 36 再除以 3，得出 12。",
        "D": "【新運算左右位置搞錯或忘算 − 4】未依「甲 × 3 ＋ 乙 × 2 − 4」對齊位置，或兩層反推時漏計常數導致錯算成 6。",
        "A": "【只解完外層括號】算出內層（□ ☆ 8） ＝ 24 就停下來，忘了繼續解出裡面的 □。"
      },
      "insight": "遇到雙層定義新運算，別被長式子嚇到！先把裡面的小括號貼上標籤當成「大方塊」，剝完外皮再剝裡皮，就像剝洋蔥一樣簡單！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "定義新運算鐵律：前數位置對前數（甲），後數位置對後數（乙），有括號先算括號",
        "雙層倒推：由外層向內層剝除，先算出整個小括號的值，再求小括號內的 □"
      ],
      "conceptCompare": "【一般乘加運算 vs 自創運算「☆」】「☆」沒有交換律（2 ☆ 5 不等於 5 ☆ 2），前後順序一定要嚴格對好位置。",
      "examVariations": "進階競賽會出「甲 ☆ 乙 ＝ （甲 ＋ 乙） ÷ 2」，考驗平均與結合律性質是否成立。"
    },
    "check": {
      "expr": "(((78 - (5 * 2 - 4)) / 3) - (8 * 2 - 4)) / 3",
      "expect": "4"
    }
  },
  {
    "id": "U07-RV-O-014",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L8 四數成組對稱消去",
    "section": "REVIEW",
    "sectionName": "奧數思維天梯",
    "category": "數列分組結合與對稱消去",
    "level": 8,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下面數字排列的加減規律並計算結果：100 ＋ 99 − 98 − 97 ＋ 96 ＋ 95 − 94 − 93 ＋ …… ＋ 4 ＋ 3 − 2 − 1 ＝ ？",
    "options": [
      {
        "key": "A",
        "text": "50",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      },
      {
        "key": "B",
        "text": "100",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "200",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "D",
        "text": "96",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生觀察「＋、＋、−、−」4 個一循環的符號規律，透過正確加上括號分組計算每一小段的值，再乘上組數求出總和。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"190\" height=\"50\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"115\" y=\"42\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#075985\">第 1 組：100 ＋ 99 − 98 − 97</text><text x=\"115\" y=\"60\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">＝ （100−98）＋（99−97） ＝ 4</text><rect x=\"250\" y=\"20\" width=\"190\" height=\"50\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"345\" y=\"42\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#166534\">第 25 組：4 ＋ 3 − 2 − 1</text><text x=\"345\" y=\"60\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">＝ （4−2）＋（3−1） ＝ 4</text><text x=\"230\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#4f46e5\">從 100 到 1 共 100 個數，每 4 個一組共 25 組 ➔ 4 × 25 ＝ 100</text></svg>",
          "caption": "圖解：每四個數為一組（＋ ＋ − −），每組相差恰好皆為 4"
        },
        {
          "type": "text",
          "text": "注意看符號順序是「＋、＋、−、−」，所以每 4 個連續的數剛好成為一個週期："
        },
        {
          "type": "eq",
          "expr": "（100 ＋ 99 − 98 − 97） ＋ （96 ＋ 95 − 94 − 93） ＋ …… ＋ （4 ＋ 3 − 2 − 1）"
        },
        {
          "type": "text",
          "text": "每組裡面，第 1 個數減第 3 個數是 2，第 2 個數減第 4 個數也是 2，所以每組結果都是 2 ＋ 2 ＝ 4。"
        },
        {
          "type": "eq",
          "expr": "100 ÷ 4 ＝ 25（組），總和 ＝ 4 × 25 ＝ 100"
        },
        {
          "type": "answer",
          "text": "答：100"
        }
      ],
      "distractorAnalysis": {
        "A": "【看錯符號規律誤當成 2】誤以為是 100 − 99 ＋ 98 − 97（每組差 2）或每組結果誤算為 2，算出 2 × 25 ＝ 50。",
        "D": "【少算最後一組或開頭錯項】未檢查整除性，誤算成有 24 組得出 4 × 24 ＝ 96。",
        "C": "【組數除錯】知道每組是 4，卻以為有 100 ÷ 2 ＝ 50 組，算出 4 × 50 ＝ 200。"
      },
      "figureNote": "把「＋、＋、−、−」四個綁成一組加括號（括號前都是「＋」，不用變號），每組穩定產出 4。",
      "insight": "長數列計算先找週期！看符號多久重複一次就幾個綁一組，再用頭尾數的個數除以週期長度算出組數！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "週期分組法：總結果 ＝ 每組數值 × （總項數 ÷ 每組項數）",
        "若不能剛好分完整組，須把開頭或結尾單獨留下不參與分組"
      ],
      "conceptCompare": "【2 個一組（＋ −）vs 4 個一組（＋ ＋ − −）】前者每組差 1，後者第 1 減第 3 得 2、第 2 減第 4 得 2，合計差 4。",
      "examVariations": "若題目從 101 開始到 1 結束（共 101 個數），多出開頭的 101 或結尾的 1，必須分組後單獨加減。"
    },
    "check": {
      "expr": "((100 + 99 - 98 - 97) * (100 / 4))",
      "expect": "100"
    }
  },
  {
    "id": "U07-RV-O-015",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L8 雙商品促銷週期與最省買法",
    "section": "REVIEW",
    "sectionName": "奧數思維天梯",
    "category": "買多送一週期分組與最優總價",
    "level": 8,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "文具大賣場舉辦週年慶：每枝 18 元的鋼珠筆「買 5 枝送 1 枝」，每塊 12 元的橡皮擦「買 3 塊送 1 塊」。五年一班需要準備 32 枝鋼珠筆和 20 塊橡皮擦當獎勵品，請問最少要付多少元？",
    "options": [
      {
        "key": "A",
        "text": "636 元",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "B",
        "text": "816 元",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "630 元",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "666 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生理解「買 5 送 1」的實際週期是一組拿 6 枝（不是 5 枝），能分別計算兩項商品所需付錢的個數與餘數。",
      "steps": [
        {
          "type": "text",
          "text": "「買 5 送 1」代表付 5 枝的錢就可以拿到 5 ＋ 1 ＝ 6 枝。看看 32 枝裡面包含幾組 6 枝："
        },
        {
          "type": "eq",
          "expr": "鋼珠筆：32 ÷ （5 ＋ 1） ＝ 5（組）…… 2（枝）"
        },
        {
          "type": "text",
          "text": "這 5 組共送了 5 枝，所以只需付 5 × 5 ＋ 2 ＝ 27 枝的錢，金額是 27 × 18 ＝ 486 元。"
        },
        {
          "type": "text",
          "text": "再看橡皮擦「買 3 送 1」，一組可拿 3 ＋ 1 ＝ 4 塊："
        },
        {
          "type": "eq",
          "expr": "橡皮擦：20 ÷ （3 ＋ 1） ＝ 5（組）剛好拿 20 塊，只需付 5 × 3 ＝ 15 塊的錢"
        },
        {
          "type": "eq",
          "expr": "總金額 ＝ 27 × 18 ＋ 15 × 12 ＝ 486 ＋ 180 ＝ 666"
        },
        {
          "type": "answer",
          "text": "答：666 元"
        }
      ],
      "distractorAnalysis": {
        "A": "【週期忘記加上送的數量】用 32 ÷ 5 ＝ 6 組計算送 6 枝、以及 20 ÷ 3 ＝ 6 組送 6 塊，算成 26 × 18 ＋ 14 × 12 ＝ 468 ＋ 168 ＝ 636 元。",
        "B": "【忘記扣掉贈品算原價】直接計算 32 × 18 ＋ 20 × 12 ＝ 576 ＋ 240 ＝ 816 元。",
        "C": "【餘數處理錯誤】誤把 32 枝筆算成只要付 25 枝的錢，算出 25 × 18 ＋ 180 ＝ 630 元。"
      },
      "insight": "遇到「買甲送乙」的商店促銷，永遠先把「甲 ＋ 乙」綁成一個『實拿大禮包』，再用需要總數去除以大禮包數量！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "買 A 送 B 的每組實拿數 ＝ A ＋ B",
        "總付款數量 ＝ 組數 × A ＋ 不足一組的餘數"
      ],
      "conceptCompare": "【買 5 送 1 vs 買 5 枝全部打折】若需求剛好是 5 的倍數卻不是 6 的倍數（如要買 29 枝：4 組得 24 枝後再單買 5 枝要付 25 枝錢，但直接買 5 組拿 30 枝也只要付 25 枝錢！），要特別留意「多拿 1 枝免費」的邊界！",
      "examVariations": "資優考常考「剛好要買 29 枝怎麼最省？」：單買 24＋5 付 25 枝，不如拿 5 組共 30 枝同樣付 25 枝的錢。"
    },
    "check": {
      "expr": "(5 * 5 + 2) * 18 + (5 * 3) * 12",
      "expect": "666"
    }
  },
  {
    "id": "U07-RV-O-016",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L8 雙組合差額置換推理",
    "section": "REVIEW",
    "sectionName": "奧數思維天梯",
    "category": "購物組合比較與消去置換",
    "level": 8,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "在園遊會攤位上，買 3 個漢堡和 2 杯紅茶共要 230 元；買 1 個漢堡和 2 杯紅茶共要 110 元。如果小傑要買 4 個漢堡和 5 杯紅茶，請問一共要付多少元？",
    "options": [
      {
        "key": "A",
        "text": "365 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "340 元",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "490 元",
        "trapCode": "U07_AVG_FORGET_MULTIPLY"
      },
      {
        "key": "D",
        "text": "335 元",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生運用「兩筆購物單相減消去相同商品」找出單價，再組合計算目標價錢。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"16\" width=\"205\" height=\"42\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"122\" y=\"42\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">3 漢堡 ＋ 2 紅茶 ＝ 230 元</text><rect x=\"20\" y=\"68\" width=\"205\" height=\"42\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"122\" y=\"94\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#075985\">1 漢堡 ＋ 2 紅茶 ＝ 110 元</text><path d=\"M 232 63 L 260 63\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><polygon points=\"258,58 268,63 258,68\" fill=\"#dc2626\"/><rect x=\"272\" y=\"28\" width=\"170\" height=\"70\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"357\" y=\"54\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#991b1b\">上減下消掉 2 紅茶</text><text x=\"357\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">2 漢堡 ＝ 120 元</text></svg>",
          "caption": "圖解：兩張帳單都買了 2 杯紅茶，價錢差 120 元就是多買 2 個漢堡的價錢"
        },
        {
          "type": "text",
          "text": "比對兩次買法，紅茶都是 2 杯沒變，漢堡差了 3 − 1 ＝ 2 個，價錢卻多出 230 − 110 ＝ 120 元！"
        },
        {
          "type": "eq",
          "expr": "1 個漢堡 ＝ （230 − 110） ÷ （3 − 1） ＝ 120 ÷ 2 ＝ 60"
        },
        {
          "type": "text",
          "text": "代回「1 漢堡 ＋ 2 紅茶 ＝ 110 元」，算出 2 杯紅茶是 110 − 60 ＝ 50 元，所以 1 杯紅茶 25 元。"
        },
        {
          "type": "eq",
          "expr": "4 × 60 ＋ 5 × 25 ＝ 240 ＋ 125 ＝ 365"
        },
        {
          "type": "answer",
          "text": "答：365 元"
        }
      ],
      "distractorAnalysis": {
        "C": "【忘了紅茶有 2 杯】算出 110 − 60 ＝ 50 元後沒除以 2，錯把 1 杯紅茶當 50 元，得出 240 ＋ 250 ＝ 490 元。",
        "D": "【把差額除以第一組的 3 個漢堡】錯算漢堡為 120 ÷ 3 ＝ 40 元，紅茶變成 35 元，得出 4 × 40 ＋ 5 × 35 ＝ 335 元。",
        "B": "【直接兩張帳單相加漏算第 5 杯紅茶】把 230 ＋ 110 ＝ 340 元誤當答案，那只買了 4 個漢堡和 4 杯紅茶，少算 1 杯紅茶的 25 元。"
      },
      "figureNote": "把兩組物品對齊比較，一樣的（2 杯紅茶）直接抵消，價差完全來自不一樣數量（2 個漢堡）。",
      "insight": "看到兩筆買東西的價錢，別急著猜單價！拿兩張帳單「相減消掉一樣的東西」，剩下的價差一除單價就現形！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "等量抵消法：先比較兩組數量完全相同的品項並扣掉，再由差價求單價",
        "小妙招：4 漢堡 ＋ 4 紅茶 ＝ 230 ＋ 110 ＝ 340 元，所以再多加 1 杯紅茶 25 元就是 365 元！"
      ],
      "conceptCompare": "【先求單價再相乘 vs 組合拼湊】有時候題目給的「倍數」正好可以整張帳單加起來（如本題 340 ＋ 25 ＝ 365），可互相驗算。",
      "examVariations": "若兩張帳單沒有一樣數量的品項（如 3 漢堡 2 紅茶 vs 2 漢堡 3 紅茶），可先整張加起來算「1 漢堡 ＋ 1 紅茶」的價格。"
    },
    "check": {
      "expr": "4 * ((230 - 110) / (3 - 1)) + 5 * ((110 - (230 - 110) / (3 - 1)) / 2)",
      "expect": "365"
    }
  },
  {
    "id": "U07-RV-O-017",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L9 多時點人數變動平均問題",
    "section": "REVIEW",
    "sectionName": "資優競賽精選",
    "category": "動態人數變動之總和還原與平均",
    "level": 9,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "籃球校隊原本有 12 名隊員，平均身高是 152 公分。這學期有 2 名身高分別為 143 公分和 145 公分的隊員畢業離隊，同時又有 4 名新隊員加入，結果現在全隊的平均身高變成了 154 公分。請問這 4 名新加入隊員的平均身高是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "155 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "160 公分",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "C",
        "text": "156 公分",
        "trapCode": "U07_AVG_FORGET_MULTIPLY"
      },
      {
        "key": "D",
        "text": "152 公分",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生追蹤「先減人、再加人」的動態總和變化，正確掌握三個時間點的總人數（12 人 ➔ 10 人 ➔ 14 人），不混淆人數分母。",
      "steps": [
        {
          "type": "text",
          "text": "先算原本 12 名隊員的總身高，再減掉畢業離隊的 2 人身高，求出留下來的 10 人總身高："
        },
        {
          "type": "eq",
          "expr": "留下 10 人總身高 ＝ 12 × 152 − （143 ＋ 145） ＝ 1824 − 288 ＝ 1536"
        },
        {
          "type": "text",
          "text": "接著有 4 名新隊員加入，現在全隊總人數變成 10 ＋ 4 ＝ 14 人，算出現在全隊總身高："
        },
        {
          "type": "eq",
          "expr": "現在 14 人總身高 ＝ 14 × 154 ＝ 2156"
        },
        {
          "type": "text",
          "text": "把現在總身高減去留下 10 人的總身高，就是新加入 4 人的總身高，再除以 4："
        },
        {
          "type": "eq",
          "expr": "（2156 − 1536） ÷ 4 ＝ 620 ÷ 4 ＝ 155"
        },
        {
          "type": "answer",
          "text": "答：155 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【沒算清楚離隊兩人的影響】只拿原本 12 人每人多補 2 公分，錯算成 154 ＋ （154 − 152） × 12 ÷ 4 ＝ 160 公分。",
        "D": "【誤認沒加減變化】看到進來的人多又以為平均變化小，錯算回原本的平均 152 公分。",
        "C": "【直接用新舊平均數推算】忽略離隊人數與人數變動，誤算成 154 × 2 − 152 ＝ 156 公分。"
      },
      "insight": "只要碰到人數「有進有出」，立刻畫出時間軸標清楚每一階段『共有幾人』，全部轉成「總身高（總和）」再相減最不會掉進人數陷阱！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "動態人數還原：現在總和 − （原本總和 − 離開者總和） ＝ 新加入者總和",
        "現在總人數 ＝ 原本人數 − 離開人數 ＋ 新進人數"
      ],
      "conceptCompare": "【總和法 vs 盈虧移補法】用 154 當基準看：留下 10 人本少（離隊 2 人帶走比 152 少 16，但留下 10 人比 154 總計少多少須非常小心）；人數有增減時用「總和法」最穩健。",
      "examVariations": "若改為「離隊 2 人未知身高，告訴你新進 4 人平均」，也可從總和差反推離隊 2 人的總身高。"
    },
    "check": {
      "expr": "((12 - 2 + 4) * 154 - (12 * 152 - (143 + 145))) / 4",
      "expect": "155"
    }
  },
  {
    "id": "U07-RV-O-018",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L9 均攤不變量與轉移倒推",
    "section": "REVIEW",
    "sectionName": "資優競賽精選",
    "category": "總量不變與雙向轉移倒推",
    "level": 9,
    "difficulty": 5,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "甲、乙、丙三個書架上原本共有 180 本書。現在從甲書架拿 15 本放到乙書架，再從乙書架拿 24 本放到丙書架，最後從丙書架拿 10 本放回甲書架，這時三個書架上的書本數剛好都一樣多！請問「乙書架」原本有多少本書？",
    "options": [
      {
        "key": "A",
        "text": "79 本",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "51 本",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      },
      {
        "key": "C",
        "text": "65 本",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "69 本",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生掌握「內部轉移、總和不變」的關鍵性質，先算出最後每個書架的本數，再單獨鎖定「乙書架」的進出數量逆推原數。",
      "steps": [
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "書本只是在三個書架之間搬來搬去，總數一直是 180 本沒變。最後三個書架一樣多，所以每個書架最後都有："
        },
        {
          "type": "eq",
          "expr": "180 ÷ 3 ＝ 60"
        },
        {
          "type": "text",
          "text": "專心追蹤「乙書架」的變化：原本的乙 ➔ 收到甲給的 ＋15 本 ➔ 送給丙 −24 本 ➔ 變成 60 本。"
        },
        {
          "type": "text",
          "text": "從 60 本倒推回去（送出的要討回來 ＋24，別人給的要還回去 −15）："
        },
        {
          "type": "eq",
          "expr": "60 ＋ 24 − 15 ＝ 69"
        },
        {
          "type": "answer",
          "text": "答：69 本"
        }
      ],
      "distractorAnalysis": {
        "B": "【倒推加減方向弄反】直接用 60 ＋ 15 − 24 ＝ 51 本，把收進來的當加、送出去的當減（這是順推不是倒推）。",
        "C": "【求錯書架】倒推算出的是甲書架原本的數量 60 ＋ 15 − 10 ＝ 65 本（丙原本則是 60 ＋ 10 − 24 ＝ 46 本）。",
        "A": "【把丙給甲的 10 本也算到乙身上】錯誤追蹤流動對象，多加了無關的 10 本變成 69 ＋ 10 ＝ 79 本。"
      },
      "figureNote": "線段圖呈現最後三架齊平各有 60 本（2 份代表 60 本基準參考），甲乙丙原本則是高低不等，合起來仍為 180 本。",
      "insight": "書架之間互搬書，總數永遠不變！而且只要盯緊題目問的那一個書架「進了幾本、出了幾本」，根本不必三個全部算！"
    },
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "甲原(65本)",
          "units": 2.2,
          "role": "base"
        },
        {
          "label": "乙原(69本)",
          "units": 2.3,
          "role": "compare"
        },
        {
          "label": "丙原(46本)",
          "units": 1.5,
          "role": "extra"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "總和恆為 180 本（最後各 60 本）"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "內部轉移不變量：不論互相交換幾次，整體總數恆不變",
        "倒推還原：原數量 ＝ 最後數量 ＋ 送出數量 − 收到數量"
      ],
      "conceptCompare": "【驗算必備】甲原 65、乙原 69、丙原 46，合計 65 ＋ 69 ＋ 46 ＝ 180 本，代表完全無誤。",
      "examVariations": "若改為「乙書架搬出一半給丙」這類倍數轉移，就需要從最後一層一步步由後往前倒推全部三人。"
    },
    "check": {
      "expr": "(180 / 3) + 24 - 15",
      "expect": "69"
    }
  },
  {
    "id": "U07-RV-O-019",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L10 AMC8級拆數重組與面積幾何化",
    "section": "REVIEW",
    "sectionName": "資優競賽壓軸",
    "category": "高階分配律構造與共同面積抵消",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "請不用暴力直式硬算，試著用「乘法分配律拆數」與「相同部分抵消」的想法，計算 2025 × 2024 − 2023 × 2026 的結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "4",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "B",
        "text": "0",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      },
      {
        "key": "C",
        "text": "2",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "6",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生利用小學五年級所學的「乘法對加法分配律」，把兩個相近乘積拆出共同的「2023 × 2024」後抵消相減，體會結構代換之美。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 145\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"25\" width=\"170\" height=\"82\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"2\"/><rect x=\"35\" y=\"107\" width=\"170\" height=\"18\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"120\" y=\"64\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1e293b\">共同區 2023 × 2024</text><text x=\"120\" y=\"120\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\">多 2 × 2024</text><text x=\"120\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#166534\">前式 2025 × 2024</text><rect x=\"255\" y=\"25\" width=\"150\" height=\"82\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"2\"/><rect x=\"405\" y=\"25\" width=\"24\" height=\"82\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"330\" y=\"64\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1e293b\">共同區 2023 × 2024</text><text x=\"417\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\">多2</text><text x=\"342\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">後式 2023 × 2026（多 2 × 2023）</text></svg>",
          "caption": "圖解：把兩乘積看成長方形面積，扣掉共同的 2023 × 2024，只比多出來的長條差"
        },
        {
          "type": "text",
          "text": "先把 2025 拆成 （2023 ＋ 2），再把 2026 拆成 （2024 ＋ 2），分別用分配律打開："
        },
        {
          "type": "eq",
          "expr": "2025 × 2024 ＝ （2023 ＋ 2） × 2024 ＝ 2023 × 2024 ＋ 2 × 2024"
        },
        {
          "type": "eq",
          "expr": "2023 × 2026 ＝ 2023 × （2024 ＋ 2） ＝ 2023 × 2024 ＋ 2023 × 2"
        },
        {
          "type": "text",
          "text": "把上面兩式相減，前面相同的「2023 × 2024」剛好全部消掉！只剩後面這一段："
        },
        {
          "type": "eq",
          "expr": "2 × 2024 − 2 × 2023 ＝ 2 × （2024 − 2023） ＝ 2 × 1 ＝ 2"
        },
        {
          "type": "answer",
          "text": "答：2"
        }
      ],
      "distractorAnalysis": {
        "A": "【只看各自差異直接相乘】看見 2025 − 2023 ＝ 2、2026 − 2024 ＝ 2，就錯算成 2 × 2 ＝ 4。",
        "D": "【拆解加減錯估】拆分乘積時誤以為多了 3 倍或把常數相錯算成 6。",
        "B": "【誤認兩組數字總和相同乘積就一樣】因為 2025 ＋ 2024 ＝ 4049，2023 ＋ 2026 ＝ 4049，就猜兩乘積相等而誤選 0。"
      },
      "figureNote": "兩個長方形重疊比較時，面積一樣大的中心 2023 × 2024 不必算出來，直接比旁邊突出來的 2 × 2024 和 2 × 2023 差多少就行！",
      "insight": "和相同的兩數相乘，兩數越接近乘積越大！（2025 與 2024 相差 1，比 2023 與 2026 相差 3 更接近，乘積一定較大，且拆完一消 3 秒秒殺！）"
    },
    "extensionStudy": {
      "coreFormulas": [
        "構造共同項：把兩邊都拆成含有「較小兩個數的乘積（2023 × 2024）」，再相減抵消",
        "二次提取公因數：2 × 2024 − 2 × 2023 ＝ 2 × （2024 − 2023）"
      ],
      "conceptCompare": "【週長相同，長寬越接近面積越大】2025 ＋ 2024 ＝ 2023 ＋ 2026，所以 2025 × 2024 一定大於 2023 × 2026，不可能等於 0。",
      "examVariations": "AMC 8 常把 2025 換成更大年份，例如 2026 × 2025 − 2024 × 2027，用相同拆法一樣立刻得到 2！"
    },
    "check": {
      "expr": "2025 * 2024 - 2023 * 2026",
      "expect": "2"
    }
  },
  {
    "id": "U07-RV-O-020",
    "unitId": "U07",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L10 三量差額置換與總和秒算",
    "section": "REVIEW",
    "sectionName": "資優競賽壓軸",
    "category": "等量代換、差額比較與分配律推理",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "甲、乙、丙三個正整數滿足以下三個條件：① 甲 ＋ 乙 ＝ 48，② 乙 ＋ 丙 ＝ 56，③ 甲 × 2 ＋ 丙 × 3 ＝ 129。請問 甲 ＋ 乙 ＋ 丙 的總和是多少？",
    "options": [
      {
        "key": "A",
        "text": "77",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "104",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "C",
        "text": "69",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "D",
        "text": "29",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生單純運用小學「消去共同項找差值」、「乘法分配律展開」與「整體合併」解決三數謎題。",
      "steps": [
        {
          "type": "text",
          "text": "先比較第 ① 條和第 ② 條算式：兩邊都有「乙」，但 乙 ＋ 丙 ＝ 56 比 甲 ＋ 乙 ＝ 48 多了 8，代表「丙 比 甲 多 8」，也就是 丙 ＝ 甲 ＋ 8。"
        },
        {
          "type": "text",
          "text": "把第 ③ 條算式裡的「丙」換成「甲 ＋ 8」，再用乘法分配律打開："
        },
        {
          "type": "eq",
          "expr": "甲 × 2 ＋ （甲 ＋ 8） × 3 ＝ 129"
        },
        {
          "type": "eq",
          "expr": "甲 × 2 ＋ 甲 × 3 ＋ 8 × 3 ＝ 129 ➔ 甲 × 5 ＋ 24 ＝ 129"
        },
        {
          "type": "eq",
          "expr": "甲 ＝ （129 − 24） ÷ 5 ＝ 105 ÷ 5 ＝ 21"
        },
        {
          "type": "text",
          "text": "不必再分別求出乙和丙，因為題目已經告訴我們 乙 ＋ 丙 ＝ 56，直接把 甲 加上去就是三數總和！"
        },
        {
          "type": "eq",
          "expr": "甲 ＋ 乙 ＋ 丙 ＝ 21 ＋ 56 ＝ 77"
        },
        {
          "type": "answer",
          "text": "答：77"
        }
      ],
      "distractorAnalysis": {
        "B": "【直接兩式相加未扣重複】把 48 ＋ 56 ＝ 104 當成三數和，等於把乙多算了一次（原本應扣除 乙 ＝ 27）。",
        "C": "【組合代錯重複多加甲】算出甲 ＝ 21 後，誤加到第 ① 條的 48 上變成 21 ＋ 48 ＝ 69，重複多加了甲。",
        "D": "【只求出丙或單一數】算出甲 ＝ 21 後進一步算出丙 ＝ 21 ＋ 8 ＝ 29 就當成答案，沒算三數總和。"
      },
      "insight": "兩條加法算式只要有相同的項目（都有乙），相減就能立刻看出「丙和甲差多少」；換成同一種東西再用分配律打開，小學五年級就能輕鬆破關！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "同項消去比較：（乙 ＋ 丙） − （甲 ＋ 乙） ＝ 丙 − 甲",
        "整體思考：求出 甲 ＝ 21 後直接代入 甲 ＋ （乙 ＋ 丙） ＝ 21 ＋ 56 ＝ 77"
      ],
      "conceptCompare": "【單獨求出三數 vs 整體湊和】也可以算 乙 ＝ 48 − 21 ＝ 27、丙 ＝ 21 ＋ 8 ＝ 29，再算 21 ＋ 27 ＋ 29 ＝ 77 當作雙重驗算！",
      "examVariations": "若第 ③ 條改給「甲 ＋ 丙 ＝ 52」，三式全部相加 48 ＋ 56 ＋ 52 ＝ 156 就是「2 倍的（甲 ＋ 乙 ＋ 丙）」，除以 2 即可秒殺！"
    },
    "check": {
      "expr": "(129 - 3 * (56 - 48)) / (2 + 3) + 56",
      "expect": "77"
    }
  },
  {
    "id": "U07-S1-M-001",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "四則混合運算與湊整",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "好朋友數乘法湊百簡算",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算大挑戰！請利用「好朋友數」的乘法交換律與結合律，秒殺算出 25 × 19 × 4 的結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "190",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "475",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "1900",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "1904",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否能一眼認出好朋友數 25 與 4 相乘等於 100，利用乘法交換律與結合律快速心算。",
      "steps": [
        {
          "type": "text",
          "text": "連乘算式中可以交換順序，先找好朋友數 25 和 4 牽手相乘得到 100，再乘以 19 就能馬上心算出來。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 132\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"18\" width=\"60\" height=\"34\" rx=\"6\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"100\" y=\"41\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#92400e\">25</text><text x=\"155\" y=\"41\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">×</text><rect x=\"180\" y=\"18\" width=\"60\" height=\"34\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"1.8\"/><text x=\"210\" y=\"41\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">19</text><text x=\"265\" y=\"41\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">×</text><rect x=\"290\" y=\"18\" width=\"60\" height=\"34\" rx=\"6\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"320\" y=\"41\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#92400e\">4</text><path d=\"M 100 54 Q 210 92 320 54\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><rect x=\"65\" y=\"94\" width=\"330\" height=\"28\" rx=\"8\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"1.5\"/><text x=\"230\" y=\"114\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#9a3412\">好朋友牽手：25 × 4 ＝ 100，再 × 19 ＝ 1900</text></svg>",
          "caption": "圖解：先將 25 與 4 連線湊成 100，最後再乘以 19"
        },
        {
          "type": "eq",
          "expr": "25 × 19 × 4 ＝ （25 × 4） × 19 ＝ 100 × 19 ＝ 1900"
        },
        {
          "type": "answer",
          "text": "答：1900"
        }
      ],
      "distractorAnalysis": {
        "A": "【少寫一個零】把好朋友數 25 × 4 誤記或誤算成 10，導致算出 10 × 19 ＝ 190。",
        "D": "【乘號看成加號】先把 19 誤看成加在後面，或把 100 × 19 後的 × 4 錯算成 ＋ 4，得出 1904。",
        "B": "【硬算漏乘最後一數】從左到右算出 25 × 19 ＝ 475 後，卻忘記繼續乘以最後的 4。"
      },
      "figureNote": "看到 25 就找 4（25 × 4 ＝ 100），看到 125 就找 8（125 × 8 ＝ 1000），是最快的心算黃金搭檔。",
      "insight": "連乘全部都是乘號時，好朋友可以跨過中間數字先牽手變 100！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "乘法交換律與結合律：甲 × 乙 × 丙 ＝ （甲 × 丙） × 乙",
        "好朋友數黃金搭檔：25 × 4 ＝ 100、125 × 8 ＝ 1000"
      ],
      "conceptCompare": "【連乘換位 vs 連除換位】連乘時數字可以自由調換順序先算；若出現除號（例如 25 ÷ 5 × 4），調換位置時必須連同前面的符號一起搬動！",
      "examVariations": "段考常把 4 藏進偶數裡，例如「25 × 36」，要自己拆成 25 × （4 × 9） ＝ 100 × 9 ＝ 900。"
    },
    "check": {
      "expr": "25 * 19 * 4",
      "expect": "1900"
    }
  },
  {
    "id": "U07-S1-M-002",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "四則混合運算與湊整",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "先乘除後加減與加減湊整",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "不用動筆算，仔細觀察算式結構：360 ＋ 40 × 5 － 160，正確的心算結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "1840",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      },
      {
        "key": "B",
        "text": "220",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "300",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "400",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生在看到 360 ＋ 40 剛好湊成 400 的誘惑時，能否守住「先乘除後加減」鐵律，再將 360 － 160 湊整。",
      "steps": [
        {
          "type": "text",
          "text": "算式中有加、減、乘三種符號，必須先算中間的乘法 40 × 5 ＝ 200，千萬不要被前面 360 ＋ 40 騙去先加！"
        },
        {
          "type": "eq",
          "expr": "360 ＋ 40 × 5 － 160 ＝ 360 ＋ 200 － 160"
        },
        {
          "type": "text",
          "text": "接著觀察尾數都是 60，可以先算 360 － 160 ＝ 200，再加上 200。"
        },
        {
          "type": "eq",
          "expr": "＝ （360 － 160） ＋ 200 ＝ 200 ＋ 200 ＝ 400"
        },
        {
          "type": "answer",
          "text": "答：400"
        }
      ],
      "distractorAnalysis": {
        "A": "【未先乘除後加減】被 360 ＋ 40 ＝ 400 吸引而由左到右硬算，算成 400 × 5 － 160 ＝ 2000 － 160 ＝ 1840。",
        "B": "【乘法少算一個零】先乘除觀念正確，但把 40 × 5 誤算成 20，變成 360 ＋ 20 － 160 ＝ 220。",
        "C": "【百位減法退位粗心】把 360 － 160 誤算成 100，再加 200 得出 300。"
      },
      "figureNote": "乘法符號就像強力的膠水，會把 40 和 5 緊緊黏在一起，一定要先處理完才能進行加減。",
      "insight": "先乘除、後加減！先解決 40 × 5 ＝ 200，剩下的 360 － 160 剛好互消變整百！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "四則運算順序：括號內先算 ➔ 先乘除 ➔ 後加減",
        "同級加減重組時，數字必須連同前面的「＋」或「－」一起搬家"
      ],
      "conceptCompare": "【360 ＋ 40 × 5 vs （360 ＋ 40） × 5】沒有括號時必須先算 40 × 5；只有加上括號把 360 ＋ 40 框起來，才可以先算加法。",
      "examVariations": "考卷常設計「100 － 25 × 4」或「250 ＋ 50 × 2」，專門誘騙習慣由左到右算的學生。"
    },
    "check": {
      "expr": "360 + 40 * 5 - 160",
      "expect": "400"
    }
  },
  {
    "id": "U07-S1-M-003",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "四則混合運算與湊整",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "拆數雙好朋友數湊整",
    "level": 2,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "計算 125 × 32 × 25 時，把 32 拆成「8 × 4」再分組配對，心算結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "10000",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "100000",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1100",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "D",
        "text": "20000",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否能把 32 拆成 8 × 4，同時湊出 125 × 8 ＝ 1000 與 4 × 25 ＝ 100 兩對好朋友數。",
      "steps": [
        {
          "type": "text",
          "text": "看到 125 想要找 8，看到 25 想要找 4，剛好 32 ＝ 8 × 4，把 32 拆開送給左右兩邊！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"85\" y=\"34\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#0f172a\">125</text><text x=\"155\" y=\"34\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#64748b\">×</text><rect x=\"202\" y=\"13\" width=\"56\" height=\"30\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><text x=\"230\" y=\"34\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#0369a1\">32</text><text x=\"305\" y=\"34\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#64748b\">×</text><text x=\"375\" y=\"34\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#0f172a\">25</text><line x1=\"216\" y1=\"45\" x2=\"172\" y2=\"72\" stroke=\"#0284c7\" stroke-width=\"2\"/><line x1=\"244\" y1=\"45\" x2=\"288\" y2=\"72\" stroke=\"#0284c7\" stroke-width=\"2\"/><rect x=\"62\" y=\"74\" width=\"136\" height=\"30\" rx=\"6\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><text x=\"130\" y=\"95\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#92400e\">125 × 8 ＝ 1000</text><rect x=\"262\" y=\"74\" width=\"136\" height=\"30\" rx=\"6\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"330\" y=\"95\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#166534\">4 × 25 ＝ 100</text><text x=\"230\" y=\"138\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#1e293b\">1000 × 100 ＝ 100000</text></svg>",
          "caption": "圖解：將 32 拆成 8 × 4，分別與 125、25 湊成 1000 與 100"
        },
        {
          "type": "eq",
          "expr": "125 × 32 × 25 ＝ （125 × 8） × （4 × 25） ＝ 1000 × 100 ＝ 100000"
        },
        {
          "type": "answer",
          "text": "答：100000"
        }
      ],
      "distractorAnalysis": {
        "C": "【乘法拆成加法】分別算出 125 × 8 ＝ 1000 和 4 × 25 ＝ 100 後，誤把兩組中間的乘號當成加號，算成 1000 ＋ 100 ＝ 1100。",
        "D": "【拆數算錯】把 32 拆成 8 ＋ 4 或把 4 × 25 錯算成 20，造成最後得出 20000。",
        "A": "【數錯零的個數】知道要算 1000 × 100，但心算時漏寫一個 0，把十萬寫成一萬（10000）。"
      },
      "figureNote": "1000 有 3 個零、100 有 2 個零，相乘後 1 後面共有 3 ＋ 2 ＝ 5 個零，也就是 100000。",
      "insight": "看到 125 和 25 同時出現，立刻把中間的偶數拆成「8 × 4」雙湊整！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "32 ＝ 8 × 4 ➔ （125 × 8） × （4 × 25） ＝ 1000 × 100",
        "整十整百相乘：先算非零數字，再把所有末尾的 0 合併補上"
      ],
      "conceptCompare": "【拆成 8 × 4 vs 拆成 8 ＋ 24】在連乘算式中必須拆成「乘法形式 8 × 4」才能直接用結合律；若拆成「加法 8 ＋ 24」則必須套用分配律！",
      "examVariations": "類似題常把 32 換成 64（拆成 8 × 8）或 16（拆成 8 × 2），例如 125 × 64 × 25 ＝ 1000 × 200 ＝ 200000。"
    },
    "check": {
      "expr": "125 * 32 * 25",
      "expect": "100000"
    }
  },
  {
    "id": "U07-S1-M-004",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "四則混合運算與湊整",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "加減尾數湊整重組",
    "level": 2,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察尾數找好朋友，心算 468 ＋ 275 ＋ 132 － 75 的結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "950",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "B",
        "text": "700",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "800",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "400",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否能在加減混合算式中，帶符號搬家進行尾數湊百與尾數抵消。",
      "steps": [
        {
          "type": "text",
          "text": "觀察尾數：468 和 132 的末兩位 68 ＋ 32 ＝ 100；而 ＋ 275 和 － 75 尾數相同，相減剛好抵消！"
        },
        {
          "type": "eq",
          "expr": "468 ＋ 275 ＋ 132 － 75 ＝ （468 ＋ 132） ＋ （275 － 75）"
        },
        {
          "type": "eq",
          "expr": "＝ 600 ＋ 200 ＝ 800"
        },
        {
          "type": "answer",
          "text": "答：800"
        }
      ],
      "distractorAnalysis": {
        "A": "【減號看成加號】將後面的「－ 75」誤看成「＋ 75」，算出 600 ＋ （275 ＋ 75） ＝ 950。",
        "B": "【加法忘記進位】468 ＋ 132 心算時忘了把個位與十位湊滿的 100 進到百位，錯算成 500 ＋ 200 ＝ 700。",
        "D": "【兩組中間算成相減】算出 600 和 200 後，誤將兩組用減法相減成 600 － 200 ＝ 400。"
      },
      "figureNote": "加減混合重組時，數字前面的符號就是它的衣服，搬家一定要連衣服一起帶走。",
      "insight": "互補尾數（68 與 32）相加變整百，相同尾數（275 與 75）相減直接消掉！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "帶符號搬家：甲 ＋ 乙 ＋ 丙 － 丁 ＝ （甲 ＋ 丙） ＋ （乙 － 丁）",
        "互補湊百：看到末兩位相加等於 100 的兩個數就先合併"
      ],
      "conceptCompare": "【帶符號搬家 vs 括號變號】前面是「＋」號時，加上括號裡面不用變號；前面是「－」號時，加上括號裡面才要變號。",
      "examVariations": "若題目改成「468 － 275 ＋ 132 ＋ 75」，記得搬家後變成 （468 ＋ 132） － （275 － 75） ＝ 600 － 200 ＝ 400。"
    },
    "check": {
      "expr": "468 + 275 + 132 - 75",
      "expect": "800"
    }
  },
  {
    "id": "U07-S2-M-005",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "連減、連除與去括號性質",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "連減加括號湊整找錢",
    "level": 3,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小涵帶了 850 元去文具店，買了一本 267 元的筆記本和一個 133 元的鉛筆盒，請問她還剩下多少元？",
    "options": [
      {
        "key": "A",
        "text": "450 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "716 元",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "C",
        "text": "550 元",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "400 元",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否理解「連減兩數等於減去兩數之和」的性質，將花費 267 與 133 先湊成整百後一次扣除。",
      "steps": [
        {
          "type": "text",
          "text": "原本 850 元連續扣掉兩個物品的價錢，可以先把總共花掉的錢加起來，再一起減掉。"
        },
        {
          "type": "eq",
          "expr": "850 － 267 － 133 ＝ 850 － （267 ＋ 133）"
        },
        {
          "type": "eq",
          "expr": "＝ 850 － 400 ＝ 450"
        },
        {
          "type": "answer",
          "text": "答：450 元"
        }
      ],
      "distractorAnalysis": {
        "B": "【連減加括號忘記變號】寫成 850 － （267 － 133） ＝ 850 － 134 ＝ 716，反而把兩件商品價錢相減了。",
        "C": "【湊整百漏進位】計算 267 ＋ 133 時漏進 1 個百，錯算成 300，得出 850 － 300 ＝ 550 元。",
        "D": "【答非所問】只算出總共花掉 267 ＋ 133 ＝ 400 元，忘記用 850 元去減。"
      },
      "figureNote": "連續花掉兩筆錢，總花費當然是兩筆相加，所以減號後面加括號時，裡面的減號要變成加號。",
      "insight": "連減兩數 ＝ 減掉「兩數相加」！先算 267 ＋ 133 ＝ 400，850 － 400 一秒搞定！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "連減性質：甲 － 乙 － 丙 ＝ 甲 － （乙 ＋ 丙）",
        "括號前面是「－」號時，加上或去掉括號，裡面的「＋」和「－」都要互換"
      ],
      "conceptCompare": "【850 － 267 － 133 vs 850 － （267 － 133）】前者是「兩樣都買」，花費要相加；後者是「少扣了 133」，結果完全不同。",
      "examVariations": "題目若改成先買 267 元再退貨 133 元，列式就會是 850 － 267 ＋ 133 ＝ 850 － （267 － 133）。"
    },
    "check": {
      "expr": "850 - 267 - 133",
      "expect": "450"
    }
  },
  {
    "id": "U07-S2-M-006",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "連減、連除與去括號性質",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "去括號減號變號抵消",
    "level": 3,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "利用去括號變號規則心算：543 － （243 － 68） 的答案是多少？",
    "options": [
      {
        "key": "A",
        "text": "368",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "854",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "C",
        "text": "300",
        "trapCode": "U07_MISSING_SELF_COUNT"
      },
      {
        "key": "D",
        "text": "232",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否掌握「括號前是減號，去括號後裡面的減號要變加號」，讓 543 與 243 先抵消成 300。",
      "steps": [
        {
          "type": "text",
          "text": "原本要減掉的量是「不到 243 的數」（還少了 68），所以如果先減掉完整的 243，就等於多減了 68，必須把 68 加回來！"
        },
        {
          "type": "eq",
          "expr": "543 － （243 － 68） ＝ 543 － 243 ＋ 68"
        },
        {
          "type": "eq",
          "expr": "＝ 300 ＋ 68 ＝ 368"
        },
        {
          "type": "answer",
          "text": "答：368"
        }
      ],
      "distractorAnalysis": {
        "B": "【符號全部變相反】誤把前面的減號也改寫成加號，錯算成 543 ＋ 243 ＋ 68 ＝ 854。",
        "C": "【漏算最後一項】只心算到 543 － 243 ＝ 300，忘記把後面應補回的 68 加上去。",
        "D": "【去括號忘記變號】直接把括號拿掉寫成 543 － 243 － 68 ＝ 300 － 68 ＝ 232，變成多扣了兩次 68。"
      },
      "figureNote": "減去（243 － 68），就像拿走 243 元又找回 68 元，總共等於先減 243 再加 68。",
      "insight": "括號前面是減號，拆括號裡面減號要變加號！543 － 243 ＝ 300，再 ＋ 68 秒得 368！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "去括號法則：甲 － （乙 － 丙） ＝ 甲 － 乙 ＋ 丙",
        "多扣要補回：扣掉比 乙 少 丙 的數 ＝ 先扣 乙，再加回 丙"
      ],
      "conceptCompare": "【543 － （243 － 68） vs 543 － （243 ＋ 68）】裡面是減號時拆開變加號；裡面是加號時拆開變減號。",
      "examVariations": "段考常考「864 － （164 ＋ 75）」或「1000 － （300 － 47）」，只要先看括號前面的符號就能判斷要不要變號。"
    },
    "check": {
      "expr": "543 - (243 - 68)",
      "expect": "368"
    }
  },
  {
    "id": "U07-S2-M-007",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "連減、連除與去括號性質",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "連除變除以兩數之積",
    "level": 4,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "心算挑戰：36000 ÷ 125 ÷ 8 的結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "2304",
        "trapCode": "U07_DIV_CHAIN_WRONG"
      },
      {
        "key": "B",
        "text": "36",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "360",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "4500",
        "trapCode": "U07_MISSING_SELF_COUNT"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否掌握「連除兩數等於除以兩數的積」，利用 125 × 8 ＝ 1000 直接把末尾三個零消去。",
      "steps": [
        {
          "type": "text",
          "text": "連續除以 125 再除以 8，等於一次除以「125 × 8」的積；記得加括號時，後面的除號要變成乘號！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 142\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"230\" y=\"32\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"#0f172a\">36000 ÷ 125 ÷ 8</text><path d=\"M 218 42 L 218 54 L 308 54 L 308 42\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><rect x=\"105\" y=\"62\" width=\"250\" height=\"28\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><text x=\"230\" y=\"81\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e40af\">合起來除以：125 × 8 ＝ 1000</text><text x=\"230\" y=\"122\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#166534\">36000 ÷ 1000 ＝ 36</text></svg>",
          "caption": "圖解：連除 125 與 8 合併為除以（125 × 8） ＝ 1000"
        },
        {
          "type": "eq",
          "expr": "36000 ÷ 125 ÷ 8 ＝ 36000 ÷ （125 × 8） ＝ 36000 ÷ 1000 ＝ 36"
        },
        {
          "type": "answer",
          "text": "答：36"
        }
      ],
      "distractorAnalysis": {
        "A": "【誤先把 ÷ 8 變成 × 8】把後面的除號誤算成乘號，算成 （36000 ÷ 125） × 8 ＝ 288 × 8 ＝ 2304。",
        "C": "【好朋友數少算一個零】把 125 × 8 誤記成 100，得出 36000 ÷ 100 ＝ 360。",
        "D": "【只除了一次忘記再除】先算了 36000 ÷ 8 ＝ 4500 後，忘記還要再除以 125。"
      },
      "figureNote": "連續平分成 125 份後每份再平分成 8 份，總共就是平分成 125 × 8 ＝ 1000 份。",
      "insight": "連除變除積！看到「÷ 125 ÷ 8」馬上合併成「÷ 1000」，劃掉三個零直接得 36！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "連除性質：甲 ÷ 乙 ÷ 丙 ＝ 甲 ÷ （乙 × 丙）",
        "125 × 8 ＝ 1000、25 × 4 ＝ 100"
      ],
      "conceptCompare": "【連除 vs 連乘】36000 ÷ 125 ÷ 8 等於 36000 ÷ （125 × 8），絕對不能寫成 36000 ÷ （125 ÷ 8）！",
      "examVariations": "反過來如果看到「48000 ÷ 16 ÷ 25」，可以把 16 拆成 4 × 4 變成 48000 ÷ 4 ÷ （4 × 25） ＝ 12000 ÷ 100 ＝ 120。"
    },
    "check": {
      "expr": "36000 / 125 / 8",
      "expect": "36"
    }
  },
  {
    "id": "U07-S2-M-008",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "連減、連除與去括號性質",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "除式去括號變號巧算",
    "level": 4,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "巧妙重組運算順序，心算 4200 ÷ （42 ÷ 5） 的結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "20",
        "trapCode": "U07_DIV_CHAIN_WRONG"
      },
      {
        "key": "B",
        "text": "500",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "50",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "100",
        "trapCode": "U07_MISSING_SELF_COUNT"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否理解「括號前是除號，去括號後裡面的除號要變成乘號」，讓 4200 ÷ 42 先約整成 100。",
      "steps": [
        {
          "type": "text",
          "text": "括號裡 42 ÷ 5 沒辦法整除，這時先去掉括號！因為括號前面是除號，去掉括號後裡面的「÷ 5」要變成「× 5」。"
        },
        {
          "type": "eq",
          "expr": "4200 ÷ （42 ÷ 5） ＝ 4200 ÷ 42 × 5"
        },
        {
          "type": "eq",
          "expr": "＝ 100 × 5 ＝ 500"
        },
        {
          "type": "answer",
          "text": "答：500"
        }
      ],
      "distractorAnalysis": {
        "A": "【去括號忘記除變乘】直接把括號拿掉寫成 4200 ÷ 42 ÷ 5 ＝ 100 ÷ 5 ＝ 20。",
        "D": "【只算前半步】算出 4200 ÷ 42 ＝ 100 後就停止，忘記再乘以 5。",
        "C": "【整百除法少算一個零】把 4200 ÷ 42 誤算成 10，再乘 5 得到 50。"
      },
      "figureNote": "把原本要除的數縮小為 5 分之 1（42 ÷ 5），除以一個比較小的數，商反而會放大 5 倍。",
      "insight": "括號前是除號，拆括號時裡面「乘除互換」！4200 ÷ 42 ＝ 100，再 × 5 就是 500！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "除式去括號：甲 ÷ （乙 ÷ 丙） ＝ 甲 ÷ 乙 × 丙",
        "除式去括號：甲 ÷ （乙 × 丙） ＝ 甲 ÷ 乙 ÷ 丙"
      ],
      "conceptCompare": "【減號去括號 vs 除號去括號】減號管加減互換（－ 變 ＋、＋ 變 －）；除號管乘除互換（÷ 變 ×、× 變 ÷），規律完全相通！",
      "examVariations": "換個寫法「（4200 × 5） ÷ 42」同樣可以先交換位置算 4200 ÷ 42 × 5 ＝ 500。"
    },
    "check": {
      "expr": "4200 / (42 / 5)",
      "expect": "500"
    }
  },
  {
    "id": "U07-S3-M-009",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "乘法分配律與提公因數",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "99拆數乘法分配律",
    "level": 5,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "不列直式，心算 78 × 99 的正確結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "7799",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "B",
        "text": "7878",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "C",
        "text": "7732",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "7722",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否熟練把 99 改寫成（100 － 1），再運用乘法對減法的分配律心算 7800 － 78。",
      "steps": [
        {
          "type": "text",
          "text": "99 個 78 就是「100 個 78 減掉 1 個 78」，把 99 拆成（100 － 1）再把 78 乘進去。"
        },
        {
          "type": "eq",
          "expr": "78 × 99 ＝ 78 × （100 － 1） ＝ 78 × 100 － 78 × 1"
        },
        {
          "type": "eq",
          "expr": "＝ 7800 － 78 ＝ 7722"
        },
        {
          "type": "answer",
          "text": "答：7722"
        }
      ],
      "distractorAnalysis": {
        "A": "【分配律漏乘一項】把 78 × （100 － 1） 寫成 78 × 100 － 1，忘記後面的 1 也要乘以 78，算成 7800 － 1 ＝ 7799。",
        "B": "【把 99 誤當 101】誤加了 1 個 78 而非減掉，算成 7800 ＋ 78 ＝ 7878。",
        "C": "【百位退位心算粗心】算對 7800 － 78，但心算 100 － 78 時誤算成 32，得出 7732。"
      },
      "figureNote": "任何兩位數乘以 99，都可以想成「後面補兩個 0，再減掉它自己」。",
      "insight": "乘以 99 ＝ 乘以 100 再扣掉 1 次自己！7800 － 78 ＝ 7722！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "乘法對減法分配律：甲 × （乙 － 丙） ＝ 甲 × 乙 － 甲 × 丙",
        "甲 × 99 ＝ 甲 × 100 － 甲"
      ],
      "conceptCompare": "【78 × 99 vs 78 × 101】前者少 1 個 78（7800 － 78 ＝ 7722）；後者多 1 個 78（7800 ＋ 78 ＝ 7878）。",
      "examVariations": "若遇到 78 × 999，作法完全一樣：78000 － 78 ＝ 77922；遇到 78 × 98，就減 2 個 78：7800 － 156 ＝ 7644。"
    },
    "check": {
      "expr": "78 * 99",
      "expect": "7722"
    }
  },
  {
    "id": "U07-S3-M-010",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "乘法分配律與提公因數",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "兩組提公因數湊百",
    "level": 5,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "運用乘法分配律的逆向合併，心算 37 × 64 ＋ 37 × 36 的答案是多少？",
    "options": [
      {
        "key": "A",
        "text": "2404",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      },
      {
        "key": "B",
        "text": "7400",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "C",
        "text": "3600",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "3700",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否能逆向提出共同乘數 37，把 64 個 37 與 36 個 37 合併成 100 個 37。",
      "steps": [
        {
          "type": "text",
          "text": "兩組乘法都有共同的 37，代表「64 個 37」加上「36 個 37」，合起來剛好是 100 個 37！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"75\" y=\"36\" width=\"192\" height=\"66\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><rect x=\"267\" y=\"36\" width=\"108\" height=\"66\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"64\" y=\"74\" text-anchor=\"end\" font-size=\"14\" font-weight=\"700\" fill=\"#0f172a\">37</text><text x=\"171\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#92400e\">長 64</text><text x=\"321\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e40af\">長 36</text><text x=\"171\" y=\"74\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#92400e\">37 × 64</text><text x=\"321\" y=\"74\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e40af\">37 × 36</text><path d=\"M 75 110 L 75 118 L 375 118 L 375 110\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.2\"/><text x=\"225\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#166534\">拼在一起總長 ＝ 64 ＋ 36 ＝ 100 ➔ 37 × 100 ＝ 3700</text></svg>",
          "caption": "圖解：兩個寬都是 37 的長方形拼成一個寬 37、總長 100 的大長方形"
        },
        {
          "type": "eq",
          "expr": "37 × 64 ＋ 37 × 36 ＝ 37 × （64 ＋ 36） ＝ 37 × 100 ＝ 3700"
        },
        {
          "type": "answer",
          "text": "答：3700"
        }
      ],
      "distractorAnalysis": {
        "B": "【公因數重複相加】提出公因數時誤把兩個 37 相加，寫成 （37 ＋ 37） × （64 ＋ 36） ＝ 74 × 100 ＝ 7400。",
        "C": "【公因數與配數混淆】64 ＋ 36 ＝ 100 後，誤把答案寫成 36 × 100 ＝ 3600。",
        "A": "【只乘前項直接加 36】算出 37 × 64 ＝ 2368 後，漏掉乘上 37 而只加上 36，得出 2404。"
      },
      "figureNote": "想像兩個高度一樣都是 37 的長方形並排拼起來，總面積就是「共同的高度 37 × 合併後的總寬度（64 ＋ 36）」。",
      "insight": "抓出兩組都有的公因數 37，把剩下的 64 和 36 送進括號相加湊 100！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "逆向分配律（提公因數）：甲 × 乙 ＋ 甲 × 丙 ＝ 甲 × （乙 ＋ 丙）",
        "公因數提出後只留一個在括號外面，不可變成兩個甲相加"
      ],
      "conceptCompare": "【37 × 64 ＋ 37 × 36 vs 37 × 64 ＋ 63 × 36】必須有相同的乘數才能直接提出來；如果沒有相同乘數，就要找倍數關係或無法直接合併。",
      "examVariations": "把加號改成減號一樣能湊整，例如「48 × 137 － 48 × 37 ＝ 48 × （137 － 37） ＝ 4800」。"
    },
    "check": {
      "expr": "37 * 64 + 37 * 36",
      "expect": "3700"
    }
  },
  {
    "id": "U07-S3-M-011",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "乘法分配律與提公因數",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "隱藏乘數1的提公因數",
    "level": 6,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察數字之間的隱藏關係，心算 999 × 8 ＋ 8 的結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "7992",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "B",
        "text": "8008",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "C",
        "text": "8000",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "15984",
        "trapCode": "U07_IGNORE_ORDER_OPS"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否能把單獨出現的「＋ 8」看成「＋ 1 × 8」，與 999 個 8 合併成 1000 個 8。",
      "steps": [
        {
          "type": "text",
          "text": "算式表示「999 個 8」再加上「1 個 8」，把後面的 8 改寫成 8 × 1，就能把公因數 8 提出來！"
        },
        {
          "type": "eq",
          "expr": "999 × 8 ＋ 8 ＝ 999 × 8 ＋ 1 × 8"
        },
        {
          "type": "eq",
          "expr": "＝ （999 ＋ 1） × 8 ＝ 1000 × 8 ＝ 8000"
        },
        {
          "type": "answer",
          "text": "答：8000"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記加最後一項】只算出 999 × 8 ＝ 7992，漏掉了後面還需要加上 8。",
        "B": "【把 999 當成 1000 又多加 8】將 999 看成 1000 卻沒有減去補償，誤算成 1000 × 8 ＋ 8 ＝ 8008。",
        "D": "【沒有先乘除後加減】先把後面的 8 ＋ 8 算成 16，變成 999 × 16 ＝ 15984。"
      },
      "figureNote": "任何單獨的數字「甲」都隱含了「甲 × 1」，補上「× 1」就能順利提取公因數。",
      "insight": "999 個 8 再加上 1 個 8，剛好就是整整 1000 個 8 ＝ 8000！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "隱藏乘數 1：乙 × 甲 ＋ 甲 ＝ （乙 ＋ 1） × 甲",
        "999 × 甲 ＋ 甲 ＝ 1000 × 甲"
      ],
      "conceptCompare": "【999 × 8 ＋ 8 vs 1001 × 8 － 8】兩者都是湊 1000 個 8，答案都剛好是 8000！",
      "examVariations": "如果題目變成「101 × 25 － 25」，一樣把後面寫成「－ 1 × 25」，得到 （101 － 1） × 25 ＝ 2500。"
    },
    "check": {
      "expr": "999 * 8 + 8",
      "expect": "8000"
    }
  },
  {
    "id": "U07-S3-M-012",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "乘法分配律與提公因數",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "102拆數分配律與尾數抵消",
    "level": 6,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "學校訂購 45 套自然實驗材料包，每套特價 102 元，再扣掉全班團體優惠 90 元。總共要付多少元？",
    "options": [
      {
        "key": "A",
        "text": "4590 元",
        "trapCode": "U07_MISSING_SELF_COUNT"
      },
      {
        "key": "B",
        "text": "4500 元",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "4412 元",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "D",
        "text": "4680 元",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否能把 102 拆成（100 ＋ 2）展開，並發現多出的 45 × 2 ＝ 90 剛好與優惠的 90 元互相抵消。",
      "steps": [
        {
          "type": "text",
          "text": "先依題意列出併式：45 × 102 － 90。把 102 拆成（100 ＋ 2），會發現奇妙的抵消！"
        },
        {
          "type": "eq",
          "expr": "45 × 102 － 90 ＝ 45 × （100 ＋ 2） － 90"
        },
        {
          "type": "eq",
          "expr": "＝ 45 × 100 ＋ 45 × 2 － 90 ＝ 4500 ＋ 90 － 90 ＝ 4500"
        },
        {
          "type": "answer",
          "text": "答：4500 元"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記扣掉團體優惠】只算完 45 × 102 ＝ 4590 元，忘記最後還要減去 90 元。",
        "C": "【分配律漏乘一項】將 45 × （100 ＋ 2） 展開時漏乘 45，錯寫成 4500 ＋ 2 － 90 ＝ 4412 元。",
        "D": "【減優惠誤算成加價】把「扣掉優惠 90 元」誤算成加上 90 元，得到 4590 ＋ 90 ＝ 4680 元。"
      },
      "figureNote": "102 元比 100 元多 2 元，45 套剛好共多 90 元，扣掉 90 元優惠後正好回到 45 套 × 100 元。",
      "insight": "把 102 拆成 100 ＋ 2，多出的 45 × 2 ＝ 90 和優惠 90 剛好抵消，心算秒得 4500！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "乘法對加法分配律：甲 × （乙 ＋ 丙） ＝ 甲 × 乙 ＋ 甲 × 丙",
        "102 ＝ 100 ＋ 2、101 ＝ 100 ＋ 1"
      ],
      "conceptCompare": "【45 × 102 － 90 vs 45 × （102 － 90）】沒有括號時必須先乘後減；只有題意是每套都折 90 元時才能寫在括號裡。",
      "examVariations": "生活常見「買 25 個 98 元便當，另付外送費 50 元」：25 × （100 － 2） ＋ 50 ＝ 2500 － 50 ＋ 50 ＝ 2500 元。"
    },
    "check": {
      "expr": "45 * 102 - 90",
      "expect": "4500"
    }
  },
  {
    "id": "U07-S4-M-013",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-4",
    "sectionName": "平均數與四則巧算應用",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "基準數心算平均數",
    "level": 7,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小宇這次月考四科成績分別是：國語 92 分、數學 95 分、自然 88 分、社會 85 分。不用把四個數全部相加再除以 4，用「基準數 90 分」移多補少，四科平均是多少分？",
    "options": [
      {
        "key": "A",
        "text": "90 分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "89 分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "91 分",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "D",
        "text": "360 分",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否能以整十數 90 為基準線，心算每科與基準的差距（＋2、＋5、－2、－5），透過移多補少秒殺平均數。",
      "steps": [
        {
          "type": "text",
          "text": "以 90 分為基準線，分別看每科多幾分或少幾分：國語 ＋2、數學 ＋5、自然 －2、社會 －5。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 172\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"260\" y1=\"14\" x2=\"260\" y2=\"144\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><text x=\"96\" y=\"36\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">國語 92 分</text><rect x=\"106\" y=\"20\" width=\"170\" height=\"22\" rx=\"4\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.6\"/><text x=\"284\" y=\"36\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">多 2 分</text><text x=\"96\" y=\"68\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">數學 95 分</text><rect x=\"106\" y=\"52\" width=\"194\" height=\"22\" rx=\"4\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.6\"/><text x=\"308\" y=\"68\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">多 5 分</text><text x=\"96\" y=\"100\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">自然 88 分</text><rect x=\"106\" y=\"84\" width=\"138\" height=\"22\" rx=\"4\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.6\"/><text x=\"268\" y=\"100\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">少 2 分</text><text x=\"96\" y=\"132\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">社會 85 分</text><rect x=\"106\" y=\"116\" width=\"114\" height=\"22\" rx=\"4\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.6\"/><text x=\"268\" y=\"132\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">少 5 分</text><text x=\"230\" y=\"162\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\">基準線 90 分：＋2 ＋ 5 － 2 － 5 ＝ 0（剛好補平）</text></svg>",
          "caption": "圖解：國語與數學多出的 2 分、5 分，剛好補平自然與社會缺少的 2 分、5 分"
        },
        {
          "type": "eq",
          "expr": "90 ＋ （2 ＋ 5 － 2 － 5） ÷ 4 ＝ 90 ＋ 0 ＝ 90"
        },
        {
          "type": "answer",
          "text": "答：90 分"
        }
      ],
      "distractorAnalysis": {
        "B": "【正負抵消算錯】心算補差時把 2 ＋ 5 － 2 － 5 算成負數，誤以為平均低於 90 分。",
        "C": "【漏扣其中一科】只看到國語和數學共多 7 分，或少算了社會的 －5 分，誤得出平均高於 90 分。",
        "D": "【只算總分未除科數】算出四科總分 90 × 4 ＝ 360 分後，直接選了 360 分而忘記除以 4。"
      },
      "figureNote": "把紅虛線當成 90 分水位線，國語和數學突出的部分剛剛好填滿自然和社會凹進去的缺口！",
      "insight": "遇到數字都在 90 附近時，別硬加！直接算「超出或不足 90 多少」再移多補少最快！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準數求平均：平均數 ＝ 基準數 ＋ 各數與基準數差距的總和 ÷ 總個數",
        "總和 ＝ 平均數 × 個數"
      ],
      "conceptCompare": "【總和除以個數 vs 基準數移多補少】兩者算出的平均數一模一樣，但基準數法只需要算個位數加減，心算零負擔。",
      "examVariations": "若四科分數差距總和不是 0（例如多了 8 分），記得把多的 8 分平分給 4 科，平均就是 90 ＋ 8 ÷ 4 ＝ 92 分。"
    },
    "check": {
      "expr": "(92 + 95 + 88 + 85) / 4",
      "expect": "90"
    }
  },
  {
    "id": "U07-S4-M-014",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-4",
    "sectionName": "平均數與四則巧算應用",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "基準數反推平均達標",
    "level": 7,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "樂樂前四次小考分數分別為 86、93、88、91 分，如果希望這五次小考的平均剛好達到 90 分，第五次小考至少要考幾分？",
    "options": [
      {
        "key": "A",
        "text": "88 分",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "B",
        "text": "90 分",
        "trapCode": "U07_AVG_FORGET_MULTIPLY"
      },
      {
        "key": "C",
        "text": "94 分",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "D",
        "text": "92 分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生能否利用基準數 90 分的「缺額統計」，快速心算第五次必須多考幾分才能把總差距補成 0。",
      "steps": [
        {
          "type": "text",
          "text": "目標平均是 90 分，先算出前四次分別跟 90 分差多少：86（少 4）、93（多 3）、88（少 2）、91（多 1）。"
        },
        {
          "type": "eq",
          "expr": "前四次與 90 分的累積差距 ＝ －4 ＋ 3 － 2 ＋ 1 ＝ －2"
        },
        {
          "type": "text",
          "text": "累積還欠 2 分，所以第五次除了基本 90 分外，必須再多考 2 分把缺口補滿。"
        },
        {
          "type": "eq",
          "expr": "90 ＋ 2 ＝ 92"
        },
        {
          "type": "answer",
          "text": "答：92 分"
        }
      ],
      "distractorAnalysis": {
        "A": "【補差方向搞反】算出前四次累積差 2 分後，誤把 90 減去 2 算成 88 分，這樣平均會更低。",
        "B": "【以為第五次考目標平均即可】忽略前四次總共還少了 2 分，以為第五次考 90 分就能把平均拉到 90 分。",
        "C": "【只看最低分 86 補差】只看到第一次 86 分比 90 分少 4 分，忘記另外幾次有超出 90 分的部分可以幫忙補，誤答 90 ＋ 4 ＝ 94 分。"
      },
      "figureNote": "要讓五次平均等於 90 分，代表五次跟 90 分的「多出與不足」總和必須剛好互相抵消為 0。",
      "insight": "前四次總共還欠目標 2 分，第五次就靠自己多考 2 分（90 ＋ 2 ＝ 92 分）把欠的補回來！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "達標分數 ＝ 目標總分 － 已有總分 ＝ 目標平均 × 總次數 － 已有分數和",
        "基準缺口法：第五次分數 ＝ 目標平均 ＋ 前四次少於目標的總缺口"
      ],
      "conceptCompare": "【總分減法 vs 基準缺口法】總分法要算 90 × 5 － （86 ＋ 93 ＋ 88 ＋ 91）；缺口法心算「少4、多3、少2、多1 ➔ 少2」只要 3 秒！",
      "examVariations": "若前四次總和已經「多出 6 分」，第五次只需要考 90 － 6 ＝ 84 分就能保住平均 90 分。"
    },
    "check": {
      "expr": "90 * 5 - (86 + 93 + 88 + 91)",
      "expect": "92"
    }
  },
  {
    "id": "U07-S4-M-015",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-4",
    "sectionName": "平均數與四則巧算應用",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "多人墊付均攤找錢問題",
    "level": 8,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小安和 3 位同學合買一套桌遊，結帳時小安先付了 600 元，另外 3 位同學每人各付了 200 元（共合湊 1200 元）。如果要平均分攤這筆錢，每位同學應該向小安補交多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "每人應攤平均",
          "units": 3,
          "role": "base"
        },
        {
          "label": "同學每人已付",
          "units": 2,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "每位同學少付 1 份 ＝ 100 元"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "100 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "300 元",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "150 元",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      },
      {
        "key": "D",
        "text": "200 元",
        "trapCode": "U07_AVG_WRONG_COUNT"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生計算均攤時是否記得「小安和 3 位同學」共 4 人，並正確用每人應攤金額扣掉同學已付金額。",
      "steps": [
        {
          "type": "text",
          "text": "小安加上 3 位同學共有 1 ＋ 3 ＝ 4 人一起平分這 1200 元，先算出每人平均應該出多少元。"
        },
        {
          "type": "eq",
          "expr": "1200 ÷ （1 ＋ 3） ＝ 1200 ÷ 4 ＝ 300"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "每位同學只先付了 200 元，和應攤的 300 元相比，每人還差 300 － 200 ＝ 100 元要補給小安。"
        },
        {
          "type": "eq",
          "expr": "300 － 200 ＝ 100"
        },
        {
          "type": "answer",
          "text": "答：100 元"
        }
      ],
      "distractorAnalysis": {
        "B": "【答非所問】算出每人應攤 300 元後就停下來，忘記減去同學已經付過的 200 元。",
        "C": "【誤拿小安墊付總額除以人數】直接把小安付的 600 元除以 4 人，誤算出 600 ÷ 4 ＝ 150 元。",
        "D": "【平均人數漏算主角】只用 3 位同學去平分，算出 1200 ÷ 3 ＝ 400 元，再減 200 元得出 200 元。"
      },
      "figureNote": "以 100 元為 1 份，每人應攤 3 份（300 元），每位同學已付 2 份（200 元），相差的 1 份（100 元）就是每位同學要補交給小安的錢。",
      "insight": "算平均先數總人數「1 ＋ 3 ＝ 4 人」，每人應出 300 元，同學已出 200 元，各補 100 元給小安（共補回 300 元，小安實付 600 － 300 ＝ 300 元）！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "總人數 ＝ 主角 1 人 ＋ 夥伴人數",
        "補差額 ＝ 每人平均應付 － 該人已付金額"
      ],
      "conceptCompare": "【驗算小技巧】3 位同學各補 100 元給小安後，小安拿回 300 元，實付 600 － 300 ＝ 300 元；同學實付 200 ＋ 100 ＝ 300 元，四人完全相等！",
      "examVariations": "換個問法：「小安最後可以從同學那裡收回多少元？」答案就會是 100 × 3 ＝ 300 元，審題要看清是問「每位同學補交」還是「總共收回」。"
    },
    "check": {
      "expr": "(600 + 3 * 200) / (1 + 3) - 200",
      "expect": "100"
    }
  },
  {
    "id": "U07-S4-M-016",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "7-4",
    "sectionName": "平均數與四則巧算應用",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "移多補少倍數差心算",
    "level": 8,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "書櫃上層放的書是下層的 4 倍。如果從上層拿 15 本書到下層後，兩層的書剛好一樣多。請問原本下層有多少本書？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "原本上層",
          "units": 4,
          "role": "base"
        },
        {
          "label": "原本下層",
          "units": 1,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "相差 3 份 ＝ 15 × 2 ＝ 30 本"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "5 本",
        "trapCode": "U07_SUB_CHAIN_WRONG"
      },
      {
        "key": "B",
        "text": "10 本",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "40 本",
        "trapCode": "U07_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "6 本",
        "trapCode": "U07_AVG_WRONG_COUNT"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否掌握「移多補少差為給出量的 2 倍」不變關係，結合線段份數差快速心算。",
      "steps": [
        {
          "type": "text",
          "text": "上層拿 15 本給下層後兩層才一樣多，代表上層減 15 後等於下層加 15，所以原本上層比下層多 15 × 2 ＝ 30 本！"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "原本上層是 4 份、下層是 1 份，兩層相差 4 － 1 ＝ 3 份，對應剛才算出的 30 本，因此 1 份（下層）就是 10 本。"
        },
        {
          "type": "eq",
          "expr": "（15 × 2） ÷ （4 － 1） ＝ 30 ÷ 3 ＝ 10"
        },
        {
          "type": "answer",
          "text": "答：10 本"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記差是移動量的 2 倍】誤以為原本只相差 15 本，直接算成 15 ÷ （4 － 1） ＝ 5 本。",
        "C": "【答錯目標層數】算出下層 10 本後又乘以 4，把原本上層的 40 本當成答案。",
        "D": "【把倍數差誤算成倍數和】錯用 4 ＋ 1 ＝ 5 份去除 30 本，得出 30 ÷ 5 ＝ 6 本。"
      },
      "figureNote": "線段圖清楚顯示：上層 4 份比下層 1 份多出 3 份；把這多出的 3 份平分一半（1.5 份）給下層才會一樣高，所以多出的 3 份 ＝ 15 × 2 ＝ 30 本。",
      "insight": "「你給他 15 本就一樣多」代表原本「差了 15 × 2 ＝ 30 本」！30 ÷ （4 － 1） ＝ 10 秒殺！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "移多補少定理：甲給乙 丙 個後兩者相等 ➔ 原本甲比乙多 丙 × 2 個",
        "差倍關係：1 份量 ＝ 兩數差 ÷ （倍數 － 1）"
      ],
      "conceptCompare": "【拿走 15 本後相等 vs 給對方 15 本後相等】「從上層拿走 15 本丟掉」只差 15 本；「從上層移 15 本給下層」一減一加會拉近 30 本，所以原本差 30 本！",
      "examVariations": "驗算最快：上層 40 本 － 15 本 ＝ 25 本，下層 10 本 ＋ 15 本 ＝ 25 本，兩層果然一樣多！"
    },
    "check": {
      "expr": "(15 * 2) / (4 - 1)",
      "expect": "10"
    }
  },
  {
    "id": "U07-RV-M-017",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "REVIEW",
    "sectionName": "綜合心算巧算總複習",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "倍數變形提公因數",
    "level": 9,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "資優心算挑戰！不列直式，利用數字倍數拆解創造共同公因數，心算 333 × 64 ＋ 999 × 12 的結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "25308",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "B",
        "text": "11100",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "29304",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "33300",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗高階數感：當兩組乘法表面上沒有相同數字時，能否察覺 999 ＝ 333 × 3，主動構造出公因數 333。",
      "steps": [
        {
          "type": "text",
          "text": "表面上看不到相同數字，但仔細看 999 剛好是 333 的 3 倍！把 999 拆成 333 × 3，再把 3 乘給 12。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"230\" y=\"32\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#0f172a\">333 × 64 ＋ 999 × 12</text><line x1=\"285\" y1=\"40\" x2=\"285\" y2=\"64\" stroke=\"#0284c7\" stroke-width=\"2.2\"/><rect x=\"48\" y=\"66\" width=\"364\" height=\"30\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.6\"/><text x=\"230\" y=\"86\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0369a1\">把 999 拆成 333 × 3 ➔ 333 × （3 × 12） ＝ 333 × 36</text><text x=\"230\" y=\"132\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#166534\">333 × （64 ＋ 36） ＝ 333 × 100 ＝ 33300</text></svg>",
          "caption": "圖解：先將 999 × 12 變身為 333 × 36，再提公因數 333 湊百"
        },
        {
          "type": "eq",
          "expr": "333 × 64 ＋ 999 × 12 ＝ 333 × 64 ＋ 333 × 36 ＝ 333 × （64 ＋ 36） ＝ 33300"
        },
        {
          "type": "answer",
          "text": "答：33300"
        }
      ],
      "distractorAnalysis": {
        "A": "【直接提 333 忘記 999 是 3 倍】直接將 999 當成 333，漏乘 3 倍便合併成 333 × （64 ＋ 12） ＝ 333 × 76 ＝ 25308。",
        "B": "【公因數錯換成 111】誤把 333 和 999 一起改寫成 111 後忘記補償 3 倍，算出 111 × 100 ＝ 11100。",
        "C": "【倍數乘法心算失誤】把 3 × 12 誤算成 24，導致得出 333 × （64 ＋ 24） ＝ 333 × 88 ＝ 29304。"
      },
      "figureNote": "把 999 × 12 拆成 （333 × 3） × 12，利用結合律先算 3 × 12 ＝ 36，立刻跟前面的 64 湊成 100！",
      "insight": "沒有相同數就自己「變身」製造！999 × 12 ＝ 333 × 36，64 ＋ 36 ＝ 100 秒殺 33300！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "倍數變形提公因數：看到 999 與 333、或 48 與 24，把大數拆成「小數 × 倍數」",
        "（甲 × 乙） × 丙 ＝ 甲 × （乙 × 丙）"
      ],
      "conceptCompare": "【拆出公因數 vs 乘開硬算】硬算 333 × 64 與 999 × 12 既慢又容易錯；變形提取公因數只需心算 3 × 12 ＝ 36 和 64 ＋ 36 ＝ 100。",
      "examVariations": "奧數經典雙胞胎：「222 × 36 ＋ 666 × 21 ＝ 222 × 36 ＋ 222 × 63 ＝ 222 × 99 ＝ 22200 － 222 ＝ 21978」。"
    },
    "check": {
      "expr": "333 * 64 + 999 * 12",
      "expect": "33300"
    }
  },
  {
    "id": "U07-RV-M-018",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "REVIEW",
    "sectionName": "綜合心算巧算總複習",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "多項二次提取公因數",
    "level": 9,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "挑戰二次提公因數！利用分組簡算，心算 35 × 47 ＋ 35 × 53 ＋ 65 × 128 － 65 × 28 的結果是多少？",
    "options": [
      {
        "key": "A",
        "text": "20000",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      },
      {
        "key": "B",
        "text": "1000",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "13640",
        "trapCode": "U07_PAREN_SIGN_FLIP"
      },
      {
        "key": "D",
        "text": "10000",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生在四項混合算式中，能否先分兩組各自提取公因數湊出 100，再針對共同出現的 100 進行第二次提取公因數。",
      "steps": [
        {
          "type": "text",
          "text": "第一輪分組：前兩項都有 35，後兩項都有 65，分別提出來各自湊出 100。"
        },
        {
          "type": "eq",
          "expr": "35 × （47 ＋ 53） ＋ 65 × （128 － 28） ＝ 35 × 100 ＋ 65 × 100"
        },
        {
          "type": "text",
          "text": "第二輪合併：發現兩組現在都有共同公因數 100，再提一次公因數！"
        },
        {
          "type": "eq",
          "expr": "＝ （35 ＋ 65） × 100 ＝ 100 × 100 ＝ 10000"
        },
        {
          "type": "answer",
          "text": "答：10000"
        }
      ],
      "distractorAnalysis": {
        "B": "【乘整百少算一個零】兩次合併算對 100 × 100，卻心算少寫一個 0 而誤選 1000。",
        "C": "【後半段減號錯看成加號】將 65 × 128 － 65 × 28 錯算成 65 × （128 ＋ 28） ＝ 65 × 156 ＝ 10140，再加 3500 得出 13640。",
        "A": "【提公因數重複相加】把兩個 35 加成 70、兩個 65 加成 130，導致最後算出 （70 ＋ 130） × 100 ＝ 20000。"
      },
      "figureNote": "兩段式提公因數就像爬兩層樓梯：第一層生出兩個 100，第二層再把 100 提出來讓 35 ＋ 65 ＝ 100。",
      "insight": "第一輪各自湊出 100，第二輪把 100 提出來讓 35 ＋ 65 再湊一次 100，答案 10000！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "二次提公因數：先小分組各自湊整 ➔ 再把湊出的整百當作新的公因數合併",
        "100 × 100 ＝ 10000（四個零）"
      ],
      "conceptCompare": "【35 × 100 ＋ 65 × 100 vs 35 × 100 ＋ 65】只有當 65 後面也乘了 100 時，才能合併成 （35 ＋ 65） × 100。",
      "examVariations": "高年級資優考常出現六項分三組的題型，作法同樣是每組先湊相同整百，最後再合體。"
    },
    "check": {
      "expr": "35 * 47 + 35 * 53 + 65 * 128 - 65 * 28",
      "expect": "10000"
    }
  },
  {
    "id": "U07-RV-M-019",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "REVIEW",
    "sectionName": "綜合心算巧算總複習",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "連鎖二次異公因數提取",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "壓軸心算魔王題！觀察算式中隱藏的兩次連鎖合併，心算 125 × 36 ＋ 125 × 44 ＋ 875 × 80 的值是多少？",
    "options": [
      {
        "key": "A",
        "text": "8000",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "10000",
        "trapCode": "U07_MISSING_SELF_COUNT"
      },
      {
        "key": "C",
        "text": "80000",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "100000",
        "trapCode": "U07_DISTRIBUTE_PARTIAL"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗最高階分配律連鎖意識：先提公因數 125 創造出 80，再敏銳發現後面剛好也有 × 80，進而第二次提取 80 湊出 1000。",
      "steps": [
        {
          "type": "text",
          "text": "第一輪：前兩項都有 125，先提出 125 算出 36 ＋ 44 ＝ 80（不要急著把 125 × 80 乘開成 10000！）。"
        },
        {
          "type": "eq",
          "expr": "125 × 36 ＋ 125 × 44 ＋ 875 × 80 ＝ 125 × （36 ＋ 44） ＋ 875 × 80"
        },
        {
          "type": "eq",
          "expr": "＝ 125 × 80 ＋ 875 × 80"
        },
        {
          "type": "text",
          "text": "第二輪：兩邊居然都出現了「× 80」！馬上再提取公因數 80，125 ＋ 875 剛好湊成 1000！"
        },
        {
          "type": "eq",
          "expr": "＝ （125 ＋ 875） × 80 ＝ 1000 × 80 ＝ 80000"
        },
        {
          "type": "answer",
          "text": "答：80000"
        }
      ],
      "distractorAnalysis": {
        "A": "【湊千誤當湊百或漏零】把 125 ＋ 875 錯算成 100，或算完 1000 × 80 少寫一個 0 得出 8000。",
        "B": "【只算前半段漏加最後項】算出 125 × （36 ＋ 44） ＝ 10000 後就停止，忘記加上後面的 875 × 80。",
        "D": "【誤套好朋友數 100】誤以為最後剩下 1000 × 100，錯算出 100000。"
      },
      "figureNote": "故意「留著 125 × 80 先不乘開」，才能看見它跟後面的 875 × 80 擁有共同搭檔 80，這就是奧數簡算的留白智慧。",
      "insight": "先提 125 生出 80，再提 80 讓 125 ＋ 875 ＝ 1000！雙重連鎖湊整直接秒出 80000！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "連鎖二次提公因數：先提 甲 ➔ 算出新公因數 乙 ➔ 再提 乙 湊出整千",
        "互補湊千：125 ＋ 875 ＝ 1000、375 ＋ 625 ＝ 1000"
      ],
      "conceptCompare": "【見好就收先乘開 vs 留著再提一次】如果看到 125 × 80 就乘開成 10000，後面還要硬算 875 × 80；留著 × 80 就能繼續合併！",
      "examVariations": "把 125 和 875 換成 25 和 75 同樣精采：25 × 17 ＋ 25 × 23 ＋ 75 × 40 ＝ 25 × 40 ＋ 75 × 40 ＝ 100 × 40 ＝ 4000。"
    },
    "check": {
      "expr": "125 * 36 + 125 * 44 + 875 * 80",
      "expect": "80000"
    }
  },
  {
    "id": "U07-RV-M-020",
    "legacyId": null,
    "unitId": "U07",
    "targetUnitId": "U07",
    "section": "REVIEW",
    "sectionName": "綜合心算巧算總複習",
    "batch": "純腦力體操",
    "source": "康軒五上U07純腦力體操",
    "category": "加權平均數基準心算",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "某次班際數學競試，男生 20 人的平均分數是 84 分，女生 30 人的平均分數是 89 分。不用把所有總分乘開相加，利用「全班都先看成 84 分」的移多補少法，心算全班 50 人的平均分數是多少分？",
    "options": [
      {
        "key": "A",
        "text": "86.5 分",
        "trapCode": "U07_AVG_WRONG_COUNT"
      },
      {
        "key": "B",
        "text": "89 分",
        "trapCode": "U07_AVG_FORGET_MULTIPLY"
      },
      {
        "key": "C",
        "text": "87 分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "88 分",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否理解兩組人數不同時，不可直接把平均相加除以 2，而是要用「以少數組為基準＋多出總分平分全班」的心算策略。",
      "steps": [
        {
          "type": "text",
          "text": "把全班 50 人都先假設成 84 分，那麼女生這 30 人每人比 84 分多出 89 － 84 ＝ 5 分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"230\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">女生總共多出：30 × 5 ＝ 150 分，平均分給全班 50 人</text><path d=\"M 330 34 Q 230 10 130 42\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><rect x=\"35\" y=\"46\" width=\"160\" height=\"58\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"115\" y=\"70\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e40af\">男生 20 人</text><text x=\"115\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e3a8a\">基準 84 分</text><rect x=\"225\" y=\"46\" width=\"200\" height=\"58\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"325\" y=\"70\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#92400e\">女生 30 人</text><text x=\"325\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">89 分（多 5 分）</text><rect x=\"45\" y=\"118\" width=\"370\" height=\"32\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"230\" y=\"139\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#166534\">150 ÷ （20 ＋ 30） ＝ 3 分 ➔ 全班平均 84 ＋ 3 ＝ 87 分</text></svg>",
          "caption": "圖解：將女生多出的 150 分平分給全班 50 人，每人分得 3 分"
        },
        {
          "type": "eq",
          "expr": "84 ＋ （89 － 84） × 30 ÷ （20 ＋ 30） ＝ 84 ＋ 150 ÷ 50 ＝ 84 ＋ 3 ＝ 87"
        },
        {
          "type": "answer",
          "text": "答：87 分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忽略人數權重直接平均】以為全班平均就是兩個平均相加除以 2，誤算出 （84 ＋ 89） ÷ 2 ＝ 86.5 分。",
        "D": "【除法計算失誤】將 150 ÷ 50 誤算成 4 分（或把全班人數算成 40 人），得出 84 ＋ 4 ＝ 88 分。",
        "B": "【忘記先乘人數再平分】看出女生平均多 5 分，卻沒有乘以 30 人再除以 50 人，直接算成 84 ＋ 5 ＝ 89 分。"
      },
      "figureNote": "女生人數比男生多，所以全班平均一定會被女生拉得更靠近 89 分（87 分比正中間 86.5 分高）。",
      "insight": "人數不一樣不能直接除以 2！把女生多出來的 30 × 5 ＝ 150 分均分給全班 50 人，每人 ＋3 分，秒算 87 分！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "分組移多補少法：全班平均 ＝ 較低組平均 ＋ 多出總分 ÷ 總人數",
        "總平均 ＝ （甲組總分 ＋ 乙組總分） ÷ （甲組人數 ＋ 乙組人數）"
      ],
      "conceptCompare": "【人數相同 vs 人數不同】只有男生女生一樣多時，全班平均才剛好在 84 和 89 正中間（86.5 分）；人數較多的一方會把平均拉過去。",
      "examVariations": "也可以用「比例簡化」秒殺：20 人和 30 人剛好是 2 份和 3 份，用 5 份來算 （89 － 84） × 3 ÷ 5 ＝ 3 分，數字更小更快！"
    },
    "check": {
      "expr": "(20 * 84 + 30 * 89) / (20 + 30)",
      "expect": "87"
    }
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U07'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
