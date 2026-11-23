// U10 4D 滿血題庫分片（共 60 題）
(function (root) {
  const DATA = [
  {
    "id": "U10-S1-B-001",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-1 角柱與角錐的構成要素",
    "section": "10-1",
    "sectionName": "角柱與角錐的構成要素",
    "category": "角柱的頂點邊面數量加總",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小智的書桌上放了一個六角柱造型的木頭筆筒。請問這個六角柱筆筒的頂點個數、邊的數量和面的總數，三個數加起來一共有多少？",
    "options": [
      {
        "key": "A",
        "text": "36",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "26",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "C",
        "text": "38",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "32",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否掌握角柱的頂點數、邊數與面數和底面邊數的倍數或加減關係。",
      "steps": [
        {
          "type": "text",
          "text": "六角柱的底面是六邊形，底面邊數是 6。利用角柱口訣：頂點＝底邊×2，邊＝底邊×3，面＝底邊＋2。"
        },
        {
          "type": "svg",
          "caption": "六角柱立體結構圖：上下各有 6 個頂點與 6 條邊，側面還有 6 條高",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"110,36 160,36 185,54 160,72 110,72 85,54\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"110,126 160,126 185,144 160,162 110,162 85,144\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><polyline points=\"85,144 110,162 160,162 185,144\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"85\" y1=\"54\" x2=\"85\" y2=\"144\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"110\" y1=\"72\" x2=\"110\" y2=\"162\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><line x1=\"160\" y1=\"72\" x2=\"160\" y2=\"162\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><line x1=\"185\" y1=\"54\" x2=\"185\" y2=\"144\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"110\" y1=\"36\" x2=\"110\" y2=\"126\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"160\" y1=\"36\" x2=\"160\" y2=\"126\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><circle cx=\"110\" cy=\"36\" r=\"3.5\" fill=\"#dc2626\"/><circle cx=\"160\" cy=\"36\" r=\"3.5\" fill=\"#dc2626\"/><circle cx=\"185\" cy=\"54\" r=\"3.5\" fill=\"#dc2626\"/><circle cx=\"160\" cy=\"72\" r=\"3.5\" fill=\"#dc2626\"/><circle cx=\"110\" cy=\"72\" r=\"3.5\" fill=\"#dc2626\"/><circle cx=\"85\" cy=\"54\" r=\"3.5\" fill=\"#dc2626\"/><text x=\"270\" y=\"58\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">頂點：6×2＝12</text><text x=\"270\" y=\"92\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">邊數：6×3＝18</text><text x=\"270\" y=\"126\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">面數：6＋2＝8</text></svg>"
        },
        {
          "type": "eq",
          "expr": "6 × 2 ＋ 6 × 3 ＋ （6 ＋ 2） ＝ 12 ＋ 18 ＋ 8 ＝ 38"
        },
        {
          "type": "answer",
          "text": "答：38"
        }
      ],
      "distractorAnalysis": {
        "A": "【底面邊數誤算】把六角柱的兩個底面漏算其中一個，或誤以 5 邊代入計算，少算了 2 個面或數條邊。",
        "D": "【頂點、邊、面倍數混淆】將邊數誤算成 6×2＝12，導致總數變成 12＋12＋8＝32。",
        "B": "【誤用角錐口訣】把六角柱當成六角錐計算（頂點 7＋邊 12＋面 7＝26），忘記角柱有上下兩個全等底面。"
      },
      "insight": "角柱上、下兩個底面形狀一模一樣，所以頂點數和側邊數都是底邊數的 2 倍與 3 倍，面數則是底邊數加上上下 2 個底面。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角柱頂點數 ＝ 底邊數 × 2",
        "角柱邊數 ＝ 底邊數 × 3",
        "角柱面數 ＝ 底邊數 ＋ 2"
      ],
      "conceptCompare": "【六角柱 vs 六角錐】六角柱有 2 個六邊形底面，總面數 8 個；六角錐只有 1 個六邊形底面，總面數 7 個。",
      "examVariations": "段考常反過來給「頂點＋面＝20」，要求推算底面是幾邊形，只要記得兩者相加再減去 2 就會等於底邊數的 3 倍。"
    },
    "check": {
      "expr": "6*2 + 6*3 + (6+2)",
      "expect": "38"
    }
  },
  {
    "id": "U10-S1-B-002",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-1 角柱與角錐的構成要素",
    "section": "10-1",
    "sectionName": "角柱與角錐的構成要素",
    "category": "角錐邊數判斷",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "露營區搭建了一座如圖所示的五角錐造型帳篷，底部圍成五邊形，上面有五片三角形布面在頂端會合。請問這座帳篷的骨架共有幾條邊？",
    "svg": "<svg viewBox=\"0 0 320 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"105,130 160,148 215,130 198,104 122,104\" fill=\"rgba(245,158,11,0.14)\" stroke=\"#0f172a\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><polyline points=\"105,130 160,148 215,130\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2.2\"/><line x1=\"160\" y1=\"24\" x2=\"105\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"2.2\"/><line x1=\"160\" y1=\"24\" x2=\"160\" y2=\"148\" stroke=\"#0f172a\" stroke-width=\"2.2\"/><line x1=\"160\" y1=\"24\" x2=\"215\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"2.2\"/><line x1=\"160\" y1=\"24\" x2=\"122\" y2=\"104\" stroke=\"#64748b\" stroke-width=\"1.6\" stroke-dasharray=\"4,3\"/><line x1=\"160\" y1=\"24\" x2=\"198\" y2=\"104\" stroke=\"#64748b\" stroke-width=\"1.6\" stroke-dasharray=\"4,3\"/><circle cx=\"160\" cy=\"24\" r=\"3.5\" fill=\"#dc2626\"/><text x=\"160\" y=\"164\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">五角錐帳篷（底面為五邊形）</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "15 條",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "B",
        "text": "6 條",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "C",
        "text": "10 條",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "8 條",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生區分角錐與角柱的邊數計算方式，理解角錐側面邊數集中到同一個頂點的結構。",
      "steps": [
        {
          "type": "text",
          "text": "五角錐的底面有 5 條邊，從這 5 個底面頂點向上連到尖端頂點，又會有 5 條斜邊。"
        },
        {
          "type": "svg",
          "caption": "藍色為底面 5 條邊，紅色為連接尖端的 5 條斜邊",
          "svg": "<svg viewBox=\"0 0 360 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"75,126 130,146 185,126 168,98 92,98\" fill=\"rgba(37,99,235,0.12)\" stroke=\"#2563eb\" stroke-width=\"2.4\"/><line x1=\"130\" y1=\"26\" x2=\"75\" y2=\"126\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><line x1=\"130\" y1=\"26\" x2=\"130\" y2=\"146\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><line x1=\"130\" y1=\"26\" x2=\"185\" y2=\"126\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><line x1=\"130\" y1=\"26\" x2=\"92\" y2=\"98\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><line x1=\"130\" y1=\"26\" x2=\"168\" y2=\"98\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"272\" y=\"68\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">底面邊：5 條</text><text x=\"272\" y=\"98\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">側面斜邊：5 條</text><text x=\"272\" y=\"128\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">共 5×2＝10 條</text></svg>"
        },
        {
          "type": "eq",
          "expr": "5 × 2 ＝ 10"
        },
        {
          "type": "answer",
          "text": "答：10 條"
        }
      ],
      "distractorAnalysis": {
        "A": "【誤用角柱邊數公式】把五角錐當成五角柱來算，誤算成 5×3＝15 條邊，其實角錐上方只有一個尖點，沒有上底面。",
        "B": "【頂點數、面數與邊數混淆】五角錐的頂點數和面數都是 5＋1＝6，把面數或頂點數誤當成邊數。",
        "D": "【漏數隱藏在後方的邊】看立體圖時只數了看得到的實線邊（3 條斜邊＋5 條底邊或少數後面），沒有依底邊數乘以 2 計算。"
      },
      "insight": "角錐就像帳篷一樣只有 1 個地面多邊形，每個角各拉一根繩子往頂端聚攏，所以邊數永遠是「底邊數 × 2」。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角錐邊數 ＝ 底邊數 × 2",
        "角錐頂點數 ＝ 底邊數 ＋ 1",
        "角錐面數 ＝ 底邊數 ＋ 1"
      ],
      "conceptCompare": "【角錐 vs 角柱邊數】角柱有上底、下底與側面三組邊（×3）；角錐只有下底與側面斜邊兩組邊（×2）。",
      "examVariations": "題目若改問「立體圖中看不見的虛線有幾條」，須實際觀察視角，看有幾條底邊與斜邊被擋在背面。"
    },
    "check": {
      "expr": "5 * 2",
      "expect": "10"
    }
  },
  {
    "id": "U10-S1-B-003",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-1 角柱與角錐的構成要素",
    "section": "10-1",
    "sectionName": "角柱與角錐的構成要素",
    "category": "由邊數反推角柱底面形狀",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "美勞教室裡有一個實心木製角柱教具，小凱仔細摸遍了每一條稜線，數出它正好有 21 條邊。這個木製角柱的底面是什麼圖形？",
    "options": [
      {
        "key": "A",
        "text": "七邊形",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "六邊形",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "五邊形",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "D",
        "text": "十邊形",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生能否逆向運用角柱邊數公式，由總邊數推回底面多邊形的邊數與名稱。",
      "steps": [
        {
          "type": "text",
          "text": "角柱的總邊數＝底面邊數×3（上底面邊數、下底面邊數與側面高各占一組）。把總邊數除以 3，就能算出底面有幾條邊。"
        },
        {
          "type": "svg",
          "caption": "角柱 21 條邊平分成上底 7 條、下底 7 條與側面 7 條，因此底面是七邊形",
          "svg": "<svg viewBox=\"0 0 360 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"34\" width=\"92\" height=\"52\" rx=\"8\" fill=\"rgba(37,99,235,0.12)\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"70\" y=\"56\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">上底邊數</text><text x=\"70\" y=\"76\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">7 條</text><rect x=\"134\" y=\"34\" width=\"92\" height=\"52\" rx=\"8\" fill=\"rgba(220,38,38,0.12)\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"180\" y=\"56\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">側面邊數</text><text x=\"180\" y=\"76\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">7 條</text><rect x=\"244\" y=\"34\" width=\"92\" height=\"52\" rx=\"8\" fill=\"rgba(22,163,74,0.12)\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"290\" y=\"56\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">下底邊數</text><text x=\"290\" y=\"76\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">7 條</text><text x=\"180\" y=\"122\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">總邊數 21 ÷ 3 ＝ 7（七邊形）</text><text x=\"180\" y=\"146\" font-size=\"12\" text-anchor=\"middle\" fill=\"#475569\">此角柱為七角柱，共有 9 個面、14 個頂點</text></svg>"
        },
        {
          "type": "eq",
          "expr": "21 ÷ 3 ＝ 7"
        },
        {
          "type": "answer",
          "text": "答：七邊形"
        }
      ],
      "distractorAnalysis": {
        "B": "【乘除減算失誤】算完 7 後誤以為要扣掉 1 個面而選六邊形，或把 21 記成 18 除以 3。",
        "C": "【公式除數誤用】誤以為角柱要先扣掉上下兩個底面再除，或與面數公式混淆。",
        "D": "【誤用角錐邊數除以 2】把角柱當成角錐來反推，用 21 除以 2 近似估成 10 邊形，其實奇數總邊數不可能是角錐。"
      },
      "insight": "只要看到題目說「角柱有幾條邊」，立刻除以 3 就是底邊數；如果說「角柱有幾個頂點」，就除以 2；如果說「角柱有幾個面」，就減 2。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角柱底邊數 ＝ 總邊數 ÷ 3",
        "角柱底邊數 ＝ 頂點數 ÷ 2",
        "角柱底邊數 ＝ 總面數 － 2"
      ],
      "conceptCompare": "【奇數邊數判別法】角錐的總邊數一定是偶數（底邊×2）；角柱的總邊數一定是 3 的倍數（底邊×3），因此 21 條邊只可能是七角柱，不可能是角錐。",
      "examVariations": "考題可能改問「一個有 9 個面的角柱，它的側面有幾個長方形？」先用 9－2＝7 算出是七角柱，就能答出 7 個側面。"
    },
    "check": {
      "expr": "21 / 3",
      "expect": "7"
    }
  },
  {
    "id": "U10-S1-B-004",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-1 角柱與角錐的構成要素",
    "section": "10-1",
    "sectionName": "角柱與角錐的構成要素",
    "category": "角柱與角錐側面形狀及數量比較",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "元宵節提的八角燈籠是一個八角柱，而書桌上的金字塔紙鎮是一個四角錐。請問這兩個立體物件的「側面」分別是什麼形狀，且兩者的側面個數相差幾個？",
    "options": [
      {
        "key": "A",
        "text": "長方形與三角形，相差 2 個",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "都是三角形，相差 4 個",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "C",
        "text": "長方形與三角形，相差 8 個",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "D",
        "text": "長方形與三角形，相差 4 個",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生辨別角柱（側面為長方形）與角錐（側面為三角形）的特徵，並比較兩者的側面數量。",
      "steps": [
        {
          "type": "text",
          "text": "八角柱的側面都是長方形，共有 8 個側面；四角錐的側面都是三角形，共有 4 個側面。"
        },
        {
          "type": "svg",
          "caption": "八角柱側面為 8 個長方形，四角錐側面為 4 個三角形",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"48\" y=\"36\" width=\"84\" height=\"84\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"76\" y1=\"36\" x2=\"76\" y2=\"120\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><line x1=\"104\" y1=\"36\" x2=\"104\" y2=\"120\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><text x=\"90\" y=\"142\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">八角柱側面：長方形</text><text x=\"90\" y=\"160\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">共有 8 個側面</text><polygon points=\"270,32 222,116 318,116\" fill=\"rgba(220,38,38,0.12)\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"270\" y1=\"32\" x2=\"260\" y2=\"126\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><polyline points=\"222,116 260,126 318,116\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"270\" y=\"142\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">四角錐側面：三角形</text><text x=\"270\" y=\"160\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">共有 4 個側面</text></svg>"
        },
        {
          "type": "eq",
          "expr": "8 － 4 ＝ 4"
        },
        {
          "type": "answer",
          "text": "答：長方形與三角形，相差 4 個"
        }
      ],
      "distractorAnalysis": {
        "A": "【計算或面數比較誤差】錯把四角錐總面數（5 個）和八角柱側面做比較，或減法誤算成 2。",
        "B": "【柱體與錐體側面形狀混淆】誤以為柱體與錐體的側面都是三角形，忽略角柱的上下底面平行等大，側面必為長方形（或正方形）。",
        "C": "【把總面數當側面數】沒有減掉四角錐的 4 個側面，直接寫成八角柱的側面個數 8。"
      },
      "insight": "不管底面是幾邊形，「角柱」的側面都是長方形，「角錐」的側面都是三角形，且側面個數永遠等於底面的邊數。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角柱側面形狀 ＝ 長方形（個數 ＝ 底邊數）",
        "角錐側面形狀 ＝ 三角形（個數 ＝ 底邊數）"
      ],
      "conceptCompare": "【側面 vs 底面】當題目問「共有幾個長方形面」時，若底面剛好是長方形（如長方體），則 6 個面全算進去；若底面是三角形（如三角柱），則只有 3 個長方形側面。",
      "examVariations": "常考「某個立體圖形有 6 個三角形的面和 1 個六邊形的面，它是什麼形體？」答案就是六角錐。"
    },
    "check": {
      "expr": "8 - 4",
      "expect": "4"
    }
  },
  {
    "id": "U10-S1-B-005",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-1 角柱與角錐的構成要素",
    "section": "10-1",
    "sectionName": "角柱與角錐的構成要素",
    "category": "實作黏土球與竹籤拼搭推算面數",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小妍在自然科學角用黏土球當作頂點、竹籤當作邊，剛好用完 9 顆黏土球和 16 根竹籤，搭成一個完整的角錐模型。請問這個角錐一共有幾個面？",
    "options": [
      {
        "key": "A",
        "text": "9 個",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "8 個",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "10 個",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "D",
        "text": "16 個",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生將實物操作（黏土球＝頂點、竹籤＝邊）對應到角錐構成要素，並驗證八角錐的頂點與面數相等。",
      "steps": [
        {
          "type": "text",
          "text": "黏土球代表頂點，竹籤代表邊。因為是角錐，頂點數＝底邊數＋1，所以底邊數＝9－1＝8（八角錐）；用邊數 8×2＝16 驗算也完全符合。"
        },
        {
          "type": "svg",
          "caption": "八角錐底面有 8 顆頂點加上頂端 1 顆尖點，共 9 個面（8 個側面＋1 個底面）",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"120\" cy=\"128\" rx=\"72\" ry=\"24\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#2563eb\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><circle cx=\"120\" cy=\"30\" r=\"5\" fill=\"#dc2626\"/><circle cx=\"52\" cy=\"128\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"70\" cy=\"144\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"104\" cy=\"151\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"138\" cy=\"151\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"172\" cy=\"144\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"188\" cy=\"128\" r=\"4\" fill=\"#2563eb\"/><line x1=\"120\" y1=\"30\" x2=\"52\" y2=\"128\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><line x1=\"120\" y1=\"30\" x2=\"104\" y2=\"151\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><line x1=\"120\" y1=\"30\" x2=\"138\" y2=\"151\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><line x1=\"120\" y1=\"30\" x2=\"188\" y2=\"128\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><text x=\"272\" y=\"62\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">頂點：9－1＝8（八角錐）</text><text x=\"272\" y=\"96\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">驗算邊數：8×2＝16 根</text><text x=\"272\" y=\"130\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">總面數：8＋1＝9 個</text></svg>"
        },
        {
          "type": "eq",
          "expr": "（9 － 1） ＋ 1 ＝ 9"
        },
        {
          "type": "answer",
          "text": "答：9 個"
        }
      ],
      "distractorAnalysis": {
        "C": "【誤用角柱面數口訣】算出底邊為 8 後，套用角柱的「底邊＋2」，算出 8＋2＝10。",
        "D": "【把竹籤數量當成面數】誤將邊的數量 16 直接當成面數。",
        "B": "【只算側面漏掉底面】算對這是八角錐之後，只回答了側面的 8 個三角形，忘記加上底部的 1 個八邊形底面。"
      },
      "insight": "角錐有一個很特別的規律：它的「頂點數」和「面數」永遠一樣多，都是「底邊數＋1」，因為每條底邊都各對應 1 個側面與 1 個底面頂點，再加上最上面的尖點與最下面的底面。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角錐頂點數 ＝ 角錐面數 ＝ 底邊數 ＋ 1"
      ],
      "conceptCompare": "【角錐的頂點與面 vs 角柱】角錐的頂點數和面數相等；角柱的頂點數（底邊×2）通常比面數（底邊＋2）多（只有四角柱除外，8 個頂點多於 6 個面；三角柱 6 頂點 5 面）。",
      "examVariations": "進階題常給「只有 10 顆黏土球與 18 根竹籤」，問最多能搭出幾角柱或幾角錐。"
    },
    "check": {
      "expr": "(9 - 1) + 1",
      "expect": "9"
    }
  },
  {
    "id": "U10-S2-B-006",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-2 圓柱、圓錐與展開圖",
    "section": "10-2",
    "sectionName": "圓柱、圓錐與展開圖",
    "category": "圓柱體展開圖的平面組成",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "包裝工廠要設計一款圓柱形茶葉鐵罐的全身展開紙板。當師傅把一個完整的圓柱體鐵罐剪開並攤平後，這個展開圖是由哪些平面圖形所組成的？",
    "options": [
      {
        "key": "A",
        "text": "1 個圓形和 2 個長方形",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "B",
        "text": "1 個圓形和 1 個扇形",
        "trapCode": "U10_CYLINDER_CONE_NET_MIX"
      },
      {
        "key": "C",
        "text": "2 個圓形和 1 個扇形",
        "trapCode": "U10_CYLINDER_CONE_NET_MIX"
      },
      {
        "key": "D",
        "text": "2 個圓形和 1 個長方形",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生熟記圓柱的展開圖特徵：兩個大小相等的圓形底面分別位在一個長方形側面的兩側。",
      "steps": [
        {
          "type": "text",
          "text": "圓柱有上、下兩個全等的圓形底面，以及一個彎曲的側面。把側面沿著垂直線剪開攤平後，會變成一個長方形。"
        },
        {
          "type": "svg",
          "caption": "圓柱展開圖：上下各有 1 個全等圓形，中間為 1 個長方形側面",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"130\" cy=\"42\" r=\"24\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"2\"/><rect x=\"62\" y=\"68\" width=\"176\" height=\"54\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#d97706\" stroke-width=\"2\"/><circle cx=\"180\" cy=\"148\" r=\"24\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"150\" y=\"100\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">長方形側面</text><text x=\"296\" y=\"46\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">上底圓形</text><text x=\"296\" y=\"152\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">下底圓形</text></svg>"
        },
        {
          "type": "eq",
          "expr": "2 ＋ 1 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：2 個圓形和 1 個長方形"
        }
      ],
      "distractorAnalysis": {
        "B": "【與圓錐展開圖混淆】把圓柱想成了圓錐，圓錐展開圖才是由 1 個圓形和 1 個扇形組成。",
        "C": "【誤把圓柱側面當扇形】知道圓柱有 2 個圓形底面，卻錯把長方形側面記成扇形。",
        "A": "【數量配置顛倒】把 2 個圓形與 1 個長方形記反了，變成 1 個圓形與 2 個長方形。"
      },
      "insight": "圓柱兩個圓形底面展開時，必須分別在長方形的「一上一下」（或一左一右）兩側，長方形的長還要剛好能包住圓形一圈。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓柱展開圖 ＝ 2 個全等圓形 ＋ 1 個長方形"
      ],
      "conceptCompare": "【圓柱 vs 圓錐展開圖】圓柱側面直直立起，攤開是長方形；圓錐側面往頂點收尖，攤開是扇形。",
      "examVariations": "若問「無蓋的圓柱筆筒」展開圖由什麼組成，則只有 1 個圓形和 1 個長方形。"
    },
    "check": {
      "expr": "2 + 1",
      "expect": "3"
    },
    "skipOptionNumMatch": true
  },
  {
    "id": "U10-S2-B-007",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-2 圓柱、圓錐與展開圖",
    "section": "10-2",
    "sectionName": "圓柱、圓錐與展開圖",
    "category": "圓錐側面展開形狀與頂點數",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "遊樂園販賣的圓錐形甜筒如果加上一片圓形餅乾封底，就變成一個完整的圓錐體。請問這個圓錐體的側面展開後是什麼圖形，而且整個圓錐一共有幾個頂點？",
    "options": [
      {
        "key": "A",
        "text": "扇形，1 個頂點",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "三角形，1 個頂點",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "C",
        "text": "扇形，0 個頂點",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "長方形，0 個頂點",
        "trapCode": "U10_CYLINDER_CONE_NET_MIX"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生分辨圓錐的側面展開形狀（扇形而非三角形）以及圓錐的頂點數量（1 個尖端頂點）。",
      "steps": [
        {
          "type": "text",
          "text": "圓錐從側面看起來雖然像三角形，但因為底面是圓弧而不是直線，把側面剪開攤平後會是一片「扇形」，頂端只有 1 個尖尖的頂點。"
        },
        {
          "type": "svg",
          "caption": "圓錐有 1 個頂點，側面剪開攤平後是扇形，底面是 1 個圓形",
          "svg": "<svg viewBox=\"0 0 360 180\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 46,120 A 46,16 0 1,0 138,120 A 46,16 0 1,0 46,120 Z\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"92\" y1=\"28\" x2=\"46\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"92\" y1=\"28\" x2=\"138\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"92\" cy=\"28\" r=\"4\" fill=\"#dc2626\"/><text x=\"92\" y=\"158\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">1 個頂點</text><path d=\"M 250,36 L 194,104 A 88,88 0 0,0 306,104 Z\" fill=\"rgba(245,158,11,0.18)\" stroke=\"#d97706\" stroke-width=\"2\"/><circle cx=\"250\" cy=\"144\" r=\"22\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"250\" y=\"88\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">扇形側面</text><text x=\"318\" y=\"148\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">圓形底面</text></svg>"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 0 ＝ 1"
        },
        {
          "type": "answer",
          "text": "答：扇形，1 個頂點"
        }
      ],
      "distractorAnalysis": {
        "B": "【視角錯覺誤認三角形】看平面照片覺得圓錐側面尖尖的像三角形，忽略三角形底邊是直的，繞不出一圈圓形底座。",
        "C": "【誤記圓錐無頂點】以為有曲面的圓形家族都不算頂點，其實圓錐最上方明確有一個尖端頂點，只有圓柱和球體才是 0 個頂點。",
        "D": "【與圓柱混為一談】把圓錐當成圓柱，誤以為側面展開是長方形、沒有頂點。"
      },
      "insight": "圓柱與球體「沒有頂點」（0 個），而圓錐最上方有「1 個頂點」；扇形的弧線邊捲起來之後，剛好會接住圓形底面的邊緣。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓錐展開圖 ＝ 1 個圓形 ＋ 1 個扇形",
        "頂點數比較：球（0 個）＝ 圓柱（0 個）＜ 圓錐（1 個）"
      ],
      "conceptCompare": "【圓錐側面（扇形） vs 角錐側面（三角形）】角錐底邊是直的，所以側面是平坦的三角形；圓錐底面是圓弧，所以側面必須是扇形才能密合捲起。",
      "examVariations": "題目有時會給 4 張不同大小弧長的扇形紙卡，問哪一張才能和指定的圓形底面摺成圓錐。"
    },
    "check": {
      "expr": "1",
      "expect": "1"
    }
  },
  {
    "id": "U10-S2-B-008",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-2 圓柱、圓錐與展開圖",
    "section": "10-2",
    "sectionName": "圓柱、圓錐與展開圖",
    "category": "正方體展開圖找相對面",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖是一個印有六個字母的正方體骰子展開圖。如果沿著虛線把它摺疊成一顆正方體骰子，請問哪一個字母所在的面會和「面 C」剛好相對？",
    "svg": "<svg viewBox=\"0 0 320 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"100\" y=\"20\" width=\"44\" height=\"44\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"122\" y=\"47\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">A</text><rect x=\"56\" y=\"64\" width=\"44\" height=\"44\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"78\" y=\"91\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">B</text><rect x=\"100\" y=\"64\" width=\"44\" height=\"44\" fill=\"rgba(245,158,11,0.22)\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"122\" y=\"91\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">C</text><rect x=\"144\" y=\"64\" width=\"44\" height=\"44\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"166\" y=\"91\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">D</text><rect x=\"188\" y=\"64\" width=\"44\" height=\"44\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"210\" y=\"91\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">E</text><rect x=\"100\" y=\"108\" width=\"44\" height=\"44\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"122\" y=\"135\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">F</text><text x=\"160\" y=\"174\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#475569\">正方體展開圖</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "面 A",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "B",
        "text": "面 D",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      },
      {
        "key": "C",
        "text": "面 F",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "D",
        "text": "面 E",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生運用「跳一格（一字型隔一格相對）」口訣，從展開圖正確找出摺合後的相對面。",
      "steps": [
        {
          "type": "text",
          "text": "把面 C 當作最底下的面：面 A 往上折到後面、面 F 往上折到前面、面 B 和面 D 分別折到左、右兩側，而最右邊的面 E 會往左蓋到正上方，剛好與面 C 相對。"
        },
        {
          "type": "svg",
          "caption": "同一直排隔一格就會相對：B 對 D、C 對 E、A 對 F",
          "svg": "<svg viewBox=\"0 0 360 185\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"88\" y=\"20\" width=\"40\" height=\"40\" fill=\"rgba(34,197,94,0.16)\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"108\" y=\"45\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">A</text><rect x=\"48\" y=\"60\" width=\"40\" height=\"40\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"68\" y=\"85\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">B</text><rect x=\"88\" y=\"60\" width=\"40\" height=\"40\" fill=\"rgba(220,38,38,0.18)\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><text x=\"108\" y=\"85\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">C</text><rect x=\"128\" y=\"60\" width=\"40\" height=\"40\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"148\" y=\"85\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">D</text><rect x=\"168\" y=\"60\" width=\"40\" height=\"40\" fill=\"rgba(220,38,38,0.18)\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><text x=\"188\" y=\"85\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">E</text><rect x=\"88\" y=\"100\" width=\"40\" height=\"40\" fill=\"rgba(34,197,94,0.16)\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"108\" y=\"125\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">F</text><text x=\"282\" y=\"58\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">面 C 與面 E 相對</text><text x=\"282\" y=\"92\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">面 B 與面 D 相對</text><text x=\"282\" y=\"126\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">面 A 與面 F 相對</text></svg>"
        },
        {
          "type": "eq",
          "expr": "3 － 1 ＝ 2"
        },
        {
          "type": "answer",
          "text": "答：面 E"
        }
      ],
      "distractorAnalysis": {
        "A": "【相鄰面與相對面搞混】面 A 和面 C 有一條共同摺線相連，摺起來後會互相垂直相鄰，不可能成為相對面。",
        "B": "【只隔一半或看成相鄰面】面 D 緊挨在面 C 右側，摺起後是面 C 的右側相鄰面，應該跳過面 D 才會是對面。",
        "C": "【上下直行與左右橫列混淆】面 F 和面 C 緊鄰，是面 A 的對面，不是面 C 的對面。"
      },
      "insight": "展開圖找相對面最快的口訣是「同行或同列，跳過一格就是對面」；若這兩個面共用同一條摺線，摺起來必定相鄰垂直，絕對不會相對。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "展開圖中同一排「相隔 1 格」的兩面必定互相平行（相對）",
        "共用同一條邊的兩面必定互相垂直（相鄰）"
      ],
      "conceptCompare": "【相對面 vs 相鄰面】正方體任何一個面都有 1 個相對面（平行）和 4 個相鄰面（垂直）。",
      "examVariations": "段考常改用「Z 字型」展開圖（兩端 Z 字頭尾隔行相對）或問「哪兩個頂點摺起來會重疊在一起」。"
    },
    "check": {
      "expr": "3 - 1",
      "expect": "2"
    },
    "skipOptionNumMatch": true
  },
  {
    "id": "U10-S2-B-009",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-2 圓柱、圓錐與展開圖",
    "section": "10-2",
    "sectionName": "圓柱、圓錐與展開圖",
    "category": "長方體展開圖邊長對應與總邊長",
    "level": 2,
    "difficulty": 2,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖的長方體餅乾盒展開圖，四個側面長方形的高度都是 10 公分，寬度依序為 7 公分、4 公分、7 公分、4 公分。摺回長方體餅乾盒後，盒子「全部 12 條邊」的長度總和是多少公分？",
    "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"48\" y=\"24\" width=\"70\" height=\"40\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><rect x=\"48\" y=\"64\" width=\"70\" height=\"64\" fill=\"rgba(245,158,11,0.12)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><rect x=\"118\" y=\"64\" width=\"44\" height=\"64\" fill=\"rgba(245,158,11,0.12)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><rect x=\"162\" y=\"64\" width=\"70\" height=\"64\" fill=\"rgba(245,158,11,0.12)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><rect x=\"232\" y=\"64\" width=\"44\" height=\"64\" fill=\"rgba(245,158,11,0.12)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><rect x=\"48\" y=\"128\" width=\"70\" height=\"40\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><text x=\"83\" y=\"100\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">7</text><text x=\"140\" y=\"100\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">4</text><text x=\"197\" y=\"100\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">7</text><text x=\"254\" y=\"100\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">4</text><text x=\"312\" y=\"100\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 10 公分</text><text x=\"210\" y=\"178\" font-size=\"12\" text-anchor=\"middle\" fill=\"#475569\">圖中單位皆為公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "42 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      },
      {
        "key": "B",
        "text": "84 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "62 公分",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "D",
        "text": "21 公分",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生由展開圖判讀長方體的長、寬、高三種邊長，並計算長方體 12 條邊的總和。",
      "steps": [
        {
          "type": "text",
          "text": "從展開圖側面依序為 7、4、7、4 且高為 10，可知摺成的長方體長為 7 公分、寬為 4 公分、高為 10 公分。長方體有 4 條長、4 條寬、4 條高。"
        },
        {
          "type": "svg",
          "caption": "摺成後有 4 條長（7 公分）、4 條寬（4 公分）與 4 條高（10 公分）",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"62\" width=\"90\" height=\"74\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#dc2626\" stroke-width=\"2\"/><polygon points=\"50,62 84,36 174,36 140,62\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"140,62 174,36 174,110 140,136\" fill=\"rgba(22,163,74,0.10)\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"95\" y=\"154\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">長 7（4條）</text><text x=\"176\" y=\"132\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">寬 4（4條）</text><text x=\"26\" y=\"100\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 10</text><text x=\"276\" y=\"72\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">（7＋4＋10）× 4</text><text x=\"276\" y=\"104\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">＝ 21 × 4 ＝ 84 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "（7 ＋ 4 ＋ 10） × 4 ＝ 21 × 4 ＝ 84"
        },
        {
          "type": "answer",
          "text": "答：84 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【只乘以 2 未乘以 4】只算了上下各一組長寬，或把總邊數記成乘以 2（21×2＝42 公分）。",
        "C": "【誤把展開圖外圍當總邊】只把展開圖上看的見的部分線段相加，沒有換算成摺合後完整的 12 條邊。",
        "D": "【只算一組長＋寬＋高】算出 7＋4＋10＝21 後就停下來，忘記每種邊長都有 4 條。"
      },
      "insight": "長方體一共有 12 條邊，可以分成「長、寬、高」各 4 條，所以算總邊長只要先把（長＋寬＋高）算出來，再乘以 4 就不會漏算。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "長方體總邊長 ＝ （長 ＋ 寬 ＋ 高） × 4"
      ],
      "conceptCompare": "【展開圖邊數 vs 立體邊數】兩片紙面相接的地方在展開圖中是同一條摺線，但立體摺起來後，長方體恰好會有 12 條邊。",
      "examVariations": "考題可能改給「12 條邊總長 84 公分，長 7 公分、寬 4 公分，求高是多少？」只要先用 84÷4＝21，再減 7 減 4 即可。"
    },
    "check": {
      "expr": "(7 + 4 + 10) * 4",
      "expect": "84"
    }
  },
  {
    "id": "U10-S2-B-010",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-2 圓柱、圓錐與展開圖",
    "section": "10-2",
    "sectionName": "圓柱、圓錐與展開圖",
    "category": "角錐展開圖的正確與錯誤辨識",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小豪剪了四張紙板，每張都有 1 個正方形和 4 個相同的等腰三角形。觀察下圖的甲、乙、丙、丁四種排列方式，哪一張紙板不剪斷直接摺疊，會因為面重疊而「無法」組成正四角錐？",
    "svg": "<svg viewBox=\"0 0 420 165\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(10,10)\"><rect x=\"35\" y=\"45\" width=\"30\" height=\"30\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"35,45 65,45 50,18\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"35,75 65,75 50,102\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"35,45 35,75 8,60\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"65,45 65,75 92,60\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><text x=\"50\" y=\"132\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">甲</text></g><g transform=\"translate(115,10)\"><rect x=\"18\" y=\"72\" width=\"30\" height=\"30\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"18,72 48,72 33,44\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"48,72 33,44 63,44\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"48,72 63,44 78,72\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"63,44 78,72 93,44\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><text x=\"52\" y=\"132\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">乙</text></g><g transform=\"translate(222,10)\"><rect x=\"35\" y=\"48\" width=\"30\" height=\"30\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"35,48 65,48 50,20\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"35,78 65,78 50,106\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"35,48 35,78 8,63\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"65,48 50,20 80,20\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><text x=\"46\" y=\"132\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">丙</text></g><g transform=\"translate(322,10)\"><rect x=\"35\" y=\"48\" width=\"30\" height=\"30\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"35,48 65,48 50,20\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"35,78 65,78 50,106\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"35,48 35,78 8,63\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><polygon points=\"35,48 50,20 20,20\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><text x=\"44\" y=\"132\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">丁</text></g></svg>",
    "options": [
      {
        "key": "A",
        "text": "圖甲",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "B",
        "text": "圖丁",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "圖乙",
        "trapCode": "U10_CYLINDER_CONE_NET_MIX"
      },
      {
        "key": "D",
        "text": "圖丙",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生在腦中想像角錐展開圖摺起時，相鄰三角形是否能分別蓋住正方形四個邊而不重疊。",
      "steps": [
        {
          "type": "text",
          "text": "把正方形底面平放：圖甲四邊各有 1 片三角形；圖乙四片沿斜邊相接剛好繞底面一圈；圖丙右上方那片翻折後剛好蓋住右邊；唯獨圖丁左上角那片翻折後會壓到左邊的三角形，造成左邊重疊、右邊破洞。"
        },
        {
          "type": "svg",
          "caption": "圖丁左邊兩片三角形摺起時重疊，右邊沒有側面可以蓋上",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"88\" y=\"58\" width=\"46\" height=\"46\" fill=\"rgba(59,130,246,0.14)\" stroke=\"#0f172a\" stroke-width=\"2\"/><polygon points=\"88,58 134,58 111,16\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><polygon points=\"88,104 134,104 111,146\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><polygon points=\"88,58 88,104 46,81\" fill=\"rgba(220,38,38,0.22)\" stroke=\"#dc2626\" stroke-width=\"2\"/><polygon points=\"88,58 111,16 65,16\" fill=\"rgba(220,38,38,0.22)\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"134\" y1=\"58\" x2=\"134\" y2=\"104\" stroke=\"#16a34a\" stroke-width=\"3\" stroke-dasharray=\"4,3\"/><text x=\"258\" y=\"56\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">左側兩片三角形重疊</text><text x=\"258\" y=\"90\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">右側邊緣空著沒面蓋住</text><text x=\"258\" y=\"124\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">因此圖丁無法組成正四角錐</text></svg>"
        },
        {
          "type": "eq",
          "expr": "4 － 1 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：圖丁"
        }
      ],
      "distractorAnalysis": {
        "C": "【誤認連成扇狀會捲歪】圖乙四個三角形依序共用斜邊，底邊剛好圍成正方形的四條邊，是正確展開圖。",
        "D": "【未檢查摺線旋轉方向】圖丙右側三角形接在上方三角形的右側斜邊，往下翻折剛好會落到正方形右邊。",
        "A": "【不熟悉星形基本展開圖】圖甲是最標準的正四角錐展開圖，四個三角形分別從正方形四邊折起就會在頂端合攏。"
      },
      "insight": "檢查角錐展開圖能不能成功摺起，可以先鎖定正方形當底面，再逐片追蹤每片三角形會覆蓋正方形的「上、下、左、右」哪一條邊，若出現重複覆蓋同一邊就一定失敗。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角錐展開圖驗證法：四個側面必須剛好各覆蓋底面的一條邊，不可重疊"
      ],
      "conceptCompare": "【星形展開 vs 扇狀展開】角錐展開圖不只有四面放射的星形，把四片三角形肩並肩排成扇狀再接 1 個底面同樣能摺成。",
      "examVariations": "考試也可能把正方體展開圖「四個正方形排成田字形（2×2）」混入選項，記住展開圖出現田字形必會重疊而無法摺成正方體。"
    },
    "check": {
      "expr": "4 - 1",
      "expect": "3"
    },
    "skipOptionNumMatch": true
  },
  {
    "id": "U10-S3-B-011",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-3 柱體與錐體的垂直平行面",
    "section": "10-3",
    "sectionName": "柱體與錐體的垂直平行面",
    "category": "長方體面與面的垂直關係",
    "level": 3,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖的長方體玩具箱，頂面是「面 ABCD」，底面是「面 EFGH」。在這個長方體之中，總共有幾個面與頂面「面 ABCD」互相垂直？",
    "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"76,66 196,66 238,38 118,38\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"2\"/><rect x=\"76\" y=\"66\" width=\"120\" height=\"76\" fill=\"rgba(148,163,184,0.08)\" stroke=\"#0f172a\" stroke-width=\"2\"/><polygon points=\"196,66 238,38 238,114 196,142\" fill=\"rgba(148,163,184,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"118\" y1=\"38\" x2=\"118\" y2=\"114\" stroke=\"#64748b\" stroke-width=\"1.6\" stroke-dasharray=\"4,3\"/><line x1=\"76\" y1=\"142\" x2=\"118\" y2=\"114\" stroke=\"#64748b\" stroke-width=\"1.6\" stroke-dasharray=\"4,3\"/><line x1=\"118\" y1=\"114\" x2=\"238\" y2=\"114\" stroke=\"#64748b\" stroke-width=\"1.6\" stroke-dasharray=\"4,3\"/><text x=\"114\" y=\"30\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">A</text><text x=\"246\" y=\"34\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">B</text><text x=\"204\" y=\"76\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">C</text><text x=\"66\" y=\"70\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">D</text><text x=\"110\" y=\"110\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#64748b\">E</text><text x=\"248\" y=\"118\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">F</text><text x=\"202\" y=\"154\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">G</text><text x=\"66\" y=\"150\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">H</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "4 個",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "2 個",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "5 個",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "D",
        "text": "1 個",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生在長方體立體圖中辨識面與面之間的垂直與平行關係，區分 4 個相鄰垂直面與 1 個相對平行面。",
      "steps": [
        {
          "type": "text",
          "text": "長方體一共有 6 個面。扣掉頂面「面 ABCD」本身，和與它面對面平行的底面「面 EFGH」，剩下圍在四周的 4 個側面（前、後、左、右）全都與頂面互相垂直。"
        },
        {
          "type": "svg",
          "caption": "頂面 ABCD 與底面 EFGH 互相平行，與四個相鄰側面（紅框）都互相垂直",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"42,60 142,60 176,34 76,34\" fill=\"rgba(37,99,235,0.20)\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><rect x=\"42\" y=\"60\" width=\"100\" height=\"70\" fill=\"rgba(220,38,38,0.12)\" stroke=\"#dc2626\" stroke-width=\"2\"/><polygon points=\"142,60 176,34 176,104 142,130\" fill=\"rgba(220,38,38,0.12)\" stroke=\"#dc2626\" stroke-width=\"2\"/><rect x=\"42\" y=\"60\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\"/><text x=\"272\" y=\"56\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">平行面：底面 EFGH（1個）</text><text x=\"272\" y=\"92\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">垂直面：前後左右側面（4個）</text><text x=\"272\" y=\"128\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">算式：6 － 2 ＝ 4 個</text></svg>"
        },
        {
          "type": "eq",
          "expr": "6 － 2 ＝ 4"
        },
        {
          "type": "answer",
          "text": "答：4 個"
        }
      ],
      "distractorAnalysis": {
        "B": "【只數平面圖正面看得到的兩面】看立體圖時只數了正面與右面這兩個看得清楚的側面，漏數了背面與左面。",
        "C": "【誤把其他所有面都算進去】直接用 6－1＝5，忘記底面 EFGH 和頂面平行，永遠不會相交垂直。",
        "D": "【把平行與垂直搞混】與面 ABCD 互相「平行」的才是 1 個（底面 EFGH），題目問的是互相「垂直」的側面。"
      },
      "insight": "在長方體或正方體中，選定任何一個面，都有「1 個面和它平行，4 個面和它垂直」，合起來加上自己剛好是全部 6 個面。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "長方體／正方體任意一面：1 個平行面 ＋ 4 個垂直面"
      ],
      "conceptCompare": "【平行面 vs 垂直面】平行面在對面，永遠不會碰在一起；垂直面就在身邊，和選定的面共用一條直角邊。",
      "examVariations": "題目常追問「和邊 AB 互相垂直的邊有幾條？」答案一樣是 4 條（分別在兩端點各有 2 條）；和邊 AB 互相平行的邊則有 3 條。"
    },
    "check": {
      "expr": "6 - 2",
      "expect": "4"
    }
  },
  {
    "id": "U10-S3-B-012",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-3 柱體與錐體的垂直平行面",
    "section": "10-3",
    "sectionName": "柱體與錐體的垂直平行面",
    "category": "奇數邊正角柱的平行面對數",
    "level": 3,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "桌上平放著一個底面是正五邊形的「正五角柱」餅乾鐵盒，它的五個側面都和桌面互相垂直。請問這個正五角柱餅乾鐵盒總共有幾「對」互相平行的面？",
    "options": [
      {
        "key": "A",
        "text": "5 對",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      },
      {
        "key": "B",
        "text": "1 對",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "3 對",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "D",
        "text": "0 對",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否理解正多邊形底面邊數的奇偶性如何影響側面的平行關係，避免盲目套用長方體 3 對的結論。",
      "steps": [
        {
          "type": "text",
          "text": "正五角柱的上底面和下底面永遠互相平行，這是第 1 對。再從正上方往下看 5 個側面，正五邊形的 5 條邊互相斜交，沒有任何兩條對邊互相平行，所以側面之間沒有平行面。"
        },
        {
          "type": "svg",
          "caption": "正五角柱俯視圖：5 個側面彼此皆斜交不平行，只有上下底面這 1 對互相平行",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"100,32 148,66 130,122 70,122 52,66\" fill=\"rgba(59,130,246,0.14)\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><line x1=\"70\" y1=\"122\" x2=\"156\" y2=\"122\" stroke=\"#94a3b8\" stroke-width=\"1.4\" stroke-dasharray=\"3,3\"/><line x1=\"100\" y1=\"32\" x2=\"162\" y2=\"76\" stroke=\"#dc2626\" stroke-width=\"1.4\" stroke-dasharray=\"3,3\"/><text x=\"100\" y=\"152\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">正五邊形俯視：無平行對邊</text><text x=\"272\" y=\"62\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">上下底面：互相平行（1 對）</text><text x=\"272\" y=\"96\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">五個側面：沒有互相平行的面</text><text x=\"272\" y=\"130\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">共 1 ＋ 0 ＝ 1 對</text></svg>"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 0 ＝ 1"
        },
        {
          "type": "answer",
          "text": "答：1 對"
        }
      ],
      "distractorAnalysis": {
        "A": "【混淆垂直與平行的對象】誤將「和底面互相垂直的 5 個側面」當成有 5 對平行面。",
        "C": "【誤把長方體結論套用到五角柱】以為所有柱體都像長方體一樣有三組平行面，忽略長方體是偶數邊（四邊形）。",
        "D": "【忘記上下兩個底面】只檢查了 5 個側面找不到平行，就誤選 0 對，漏掉角柱最關鍵的上下平行底面。"
      },
      "insight": "正角柱有幾對平行面要看底面邊數是奇數還是偶數：奇數邊（三角柱、五角柱）側面沒有相對平行的面，永遠只有「1 對」上下底面平行；偶數邊（四角柱 3 對、正六角柱 4 對）則要加上側面相對的對數。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "奇數邊正角柱平行面對數 ＝ 1 對（僅上下底面）",
        "偶數邊正角柱平行面對數 ＝ 底邊數 ÷ 2 ＋ 1"
      ],
      "conceptCompare": "【正五角柱 vs 正六角柱】正五角柱只有 1 對平行面；正六角柱除了上下底面 1 對，6 個側面還有 3 對相對平行，合計 4 對平行面。",
      "examVariations": "若題目問「正五角柱中，與底面垂直的面有幾個？」答案則是 5 個側面。"
    },
    "check": {
      "expr": "1 + 0",
      "expect": "1"
    }
  },
  {
    "id": "U10-S3-B-013",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-3 柱體與錐體的垂直平行面",
    "section": "10-3",
    "sectionName": "柱體與錐體的垂直平行面",
    "category": "長方體禮物盒十字緞帶總長",
    "level": 3,
    "difficulty": 3,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "蛋糕店要幫一個長 20 公分、寬 15 公分、高 8 公分的長方體蛋糕盒綁上「十字形」緞帶（如下圖所示），另外在盒頂打一個漂亮的蝴蝶結需要預留 25 公分。請問這條緞帶總共需要多長？",
    "svg": "<svg viewBox=\"0 0 320 185\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,68 190,68 232,40 112,40\" fill=\"rgba(245,158,11,0.14)\" stroke=\"#0f172a\" stroke-width=\"2\"/><rect x=\"70\" y=\"68\" width=\"120\" height=\"56\" fill=\"rgba(245,158,11,0.08)\" stroke=\"#0f172a\" stroke-width=\"2\"/><polygon points=\"190,68 232,40 232,96 190,124\" fill=\"rgba(245,158,11,0.18)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"91\" y1=\"54\" x2=\"211\" y2=\"54\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"211\" y1=\"54\" x2=\"211\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"172\" y1=\"40\" x2=\"130\" y2=\"68\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"130\" y1=\"68\" x2=\"130\" y2=\"124\" stroke=\"#dc2626\" stroke-width=\"3\"/><circle cx=\"151\" cy=\"54\" r=\"6\" fill=\"#dc2626\"/><text x=\"130\" y=\"144\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">長 20 公分</text><text x=\"256\" y=\"114\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">寬 15 公分</text><text x=\"36\" y=\"100\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">高 8 公分</text><text x=\"160\" y=\"170\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">打結預留 25 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "127 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "111 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      },
      {
        "key": "C",
        "text": "102 公分",
        "trapCode": "U10_RIBBON_FORGET_KNOT"
      },
      {
        "key": "D",
        "text": "92 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生運用長方體平行面的對邊等長概念，計算立體十字捆綁緞帶經過各面的總長度並加上蝴蝶結預留長度。",
      "steps": [
        {
          "type": "text",
          "text": "沿著蛋糕盒繞十字形一圈，緞帶會貼著「上面和下面」各走 1 個長與 1 個寬（長 2 段、寬 2 段），並且在「前、後、左、右」四個側面各垂直走過 1 個高（高 4 段），最後加上打結 25 公分。"
        },
        {
          "type": "svg",
          "caption": "十字緞帶路徑分解：2 段長（20）＋ 2 段寬（15）＋ 4 段高（8）＋ 打結 25",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"30\" width=\"100\" height=\"50\" fill=\"rgba(220,38,38,0.12)\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"74\" y=\"52\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">2 段長</text><text x=\"74\" y=\"70\" font-size=\"12\" text-anchor=\"middle\" fill=\"#0f172a\">20×2＝40</text><rect x=\"132\" y=\"30\" width=\"100\" height=\"50\" fill=\"rgba(37,99,235,0.12)\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"182\" y=\"52\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">2 段寬</text><text x=\"182\" y=\"70\" font-size=\"12\" text-anchor=\"middle\" fill=\"#0f172a\">15×2＝30</text><rect x=\"240\" y=\"30\" width=\"100\" height=\"50\" fill=\"rgba(22,163,74,0.12)\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"290\" y=\"52\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">4 段高</text><text x=\"290\" y=\"70\" font-size=\"12\" text-anchor=\"middle\" fill=\"#0f172a\">8×4＝32</text><text x=\"180\" y=\"114\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#d97706\">加上打結預留 25 公分</text><text x=\"180\" y=\"144\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">40 ＋ 30 ＋ 32 ＋ 25 ＝ 127 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "20 × 2 ＋ 15 × 2 ＋ 8 × 4 ＋ 25 ＝ 40 ＋ 30 ＋ 32 ＋ 25 ＝ 127"
        },
        {
          "type": "answer",
          "text": "答：127 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【側面高度只數了 2 條】只算了看得到的正面和右面 2 條高（8×2＝16），忘記背面與左面各還有 1 條高，算出 40＋30＋16＋25＝111。",
        "D": "【長和寬漏算盒子底面】只看盒蓋上面的 1 個長與 1 個寬，忘記底面平行那側也經過一樣的長與寬（20＋15＋32＋25＝92）。",
        "C": "【忘記加上打結處長度】正確算出繞盒子本體的 40＋30＋32＝102 公分，卻遺漏題目最後提到的打結 25 公分。"
      },
      "insight": "綁十字緞帶有個黃金比例「2 長 ＋ 2 寬 ＋ 4 高 ＋ 打結」：想像有兩條圈帶套在盒子上，每條圈帶都走過 2 個高，所以總共會經過 4 個高！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "十字緞帶總長 ＝ 長 × 2 ＋ 寬 × 2 ＋ 高 × 4 ＋ 打結長度"
      ],
      "conceptCompare": "【十字綁法 vs 雙十字綁法】若長的方向綁兩條平行圈帶，長就會乘以 4、高也會跟著增加到 6 條，動手畫俯視圖最準確。",
      "examVariations": "段考常反過來給「緞帶總長 127 公分、打結 25 公分、長 20、寬 15，求盒子高度」，只要先減 25、減 2 長、減 2 寬，再除以 4 即得高度。"
    },
    "check": {
      "expr": "20 * 2 + 15 * 2 + 8 * 4 + 25",
      "expect": "127"
    }
  },
  {
    "id": "U10-S3-B-014",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-3 柱體與錐體的垂直平行面",
    "section": "10-3",
    "sectionName": "柱體與錐體的垂直平行面",
    "category": "柱體與錐體面關係概念辨識",
    "level": 3,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "美術課的幾何木塊箱裡有正方體、三角柱和正四角錐。關於這些立體圖形中「面與面」的垂直或平行關係，下面哪一個說法是正確的？",
    "options": [
      {
        "key": "A",
        "text": "正方體相鄰的兩個面互相垂直，相對的兩個面互相平行",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "正四角錐的底面和它的四個三角形側面互相垂直",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      },
      {
        "key": "C",
        "text": "所有角柱的每一個側面之間都一定互相平行",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      },
      {
        "key": "D",
        "text": "正四角錐擁有一組互相平行的上下底面",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生統整柱體與錐體的垂直、平行面性質，釐清角錐側面是傾斜夾角而非直角垂直。",
      "steps": [
        {
          "type": "text",
          "text": "正方體的每個角都是直角，因此相鄰兩面夾角 90 度互相垂直，相對兩面距離處處相等互相平行；而角錐的側面必須向中央頂點傾斜靠攏，與底面並不是垂直關係，也沒有上下兩個平行底面。"
        },
        {
          "type": "svg",
          "caption": "正方體鄰面直角垂直、對面平行；四角錐側面傾斜，與底面不垂直",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"44\" y=\"52\" width=\"72\" height=\"72\" fill=\"rgba(59,130,246,0.14)\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"44,52 72,30 144,30 116,52\" fill=\"rgba(59,130,246,0.22)\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"116,52 144,30 144,102 116,124\" fill=\"rgba(22,163,74,0.14)\" stroke=\"#16a34a\" stroke-width=\"2\"/><rect x=\"44\" y=\"52\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><text x=\"94\" y=\"152\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">正方體：鄰面垂直、對面平行</text><polygon points=\"270,32 222,120 318,120\" fill=\"rgba(245,158,11,0.14)\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"270\" y1=\"32\" x2=\"260\" y2=\"130\" stroke=\"#d97706\" stroke-width=\"1.8\"/><polyline points=\"222,120 260,130 318,120\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"270\" y=\"152\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">四角錐：側面傾斜不垂直</text></svg>"
        },
        {
          "type": "eq",
          "expr": "90 ＝ 90"
        },
        {
          "type": "answer",
          "text": "答：正方體相鄰的兩個面互相垂直，相對的兩個面互相平行"
        }
      ],
      "distractorAnalysis": {
        "B": "【把角柱的垂直性質套到角錐】直角柱的側面才和底面垂直；角錐的側面往中央尖點斜斜立起，和底面夾角小於 90 度。",
        "C": "【忽略角柱側面會相交】三角柱的三個側面彼此在邊緣相交成 60 度，只有像正方體或正六角柱的「正對面」側面才會平行。",
        "D": "【把角錐和角柱搞混】角錐只有 1 個底面，沒有第 2 個平行的底面。"
      },
      "insight": "只要記住：角柱看「上下底面永遠平行、側面垂直底面」；角錐則是「只有一個底面、側面斜斜交於頂點」，就不會選錯觀念題。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "直角柱：上底面 ∥ 下底面，側面 ⊥ 底面",
        "角錐：無互相平行的面，側面與底面不垂直"
      ],
      "conceptCompare": "【直角柱 vs 角錐的垂直關係】直角柱任何一個側面與底面都呈 90 度垂直；角錐的側面必須向內傾斜才能在頂端相會，因此不可能垂直於底面。",
      "examVariations": "是非題常出「所有角錐中，都不會有任何一對互相平行的面」，這是正確的。"
    },
    "check": {
      "expr": "90",
      "expect": "90"
    },
    "skipOptionNumMatch": true
  },
  {
    "id": "U10-S3-B-015",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-3 柱體與錐體的垂直平行面",
    "section": "10-3",
    "sectionName": "柱體與錐體的垂直平行面",
    "category": "長方體紙箱裝正方體禮盒（空間擺放）",
    "level": 3,
    "difficulty": 3,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "爸爸準備了一個長 25 公分、寬 18 公分、高 12 公分的長方體空紙箱，想要整齊裝入邊長 6 公分的正方體魔術方塊紙盒（不可壓扁變形）。當魔術方塊全部朝同一方向擺放時，這個大紙箱「最多」可以裝進幾個？",
    "options": [
      {
        "key": "A",
        "text": "12 個",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      },
      {
        "key": "B",
        "text": "25 個",
        "trapCode": "U10_PACK_VOL_INSTEAD_FIT"
      },
      {
        "key": "C",
        "text": "24 個",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "27 個",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生區分「實體空間裝箱擺放（各邊長除以小盒邊長取整數商）」與「純體積相除」的根本差異。",
      "steps": [
        {
          "type": "text",
          "text": "因為正方體不能切開來塞縫隙，必須分別算出長、寬、高各能排幾個：長邊 25÷6＝4 餘 1（只能放 4 個），寬邊 18÷6＝3 個，高邊 12÷6＝2 層。"
        },
        {
          "type": "svg",
          "caption": "每層可排 4×3＝12 個（右側剩 1 公分空隙），疊 2 層共可裝 24 個",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"34\" width=\"174\" height=\"96\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2.2\"/><rect x=\"30\" y=\"34\" width=\"40\" height=\"32\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><rect x=\"70\" y=\"34\" width=\"40\" height=\"32\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><rect x=\"110\" y=\"34\" width=\"40\" height=\"32\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><rect x=\"150\" y=\"34\" width=\"40\" height=\"32\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><rect x=\"30\" y=\"66\" width=\"40\" height=\"32\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><rect x=\"70\" y=\"66\" width=\"40\" height=\"32\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><rect x=\"110\" y=\"66\" width=\"40\" height=\"32\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><rect x=\"150\" y=\"66\" width=\"40\" height=\"32\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><rect x=\"30\" y=\"98\" width=\"40\" height=\"32\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><rect x=\"70\" y=\"98\" width=\"40\" height=\"32\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><rect x=\"110\" y=\"98\" width=\"40\" height=\"32\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><rect x=\"150\" y=\"98\" width=\"40\" height=\"32\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"1.4\"/><rect x=\"190\" y=\"34\" width=\"14\" height=\"96\" fill=\"rgba(220,38,38,0.18)\"/><text x=\"117\" y=\"152\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">底層 4×3＝12 個（右邊餘 1 公分空隙）</text><text x=\"282\" y=\"72\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">疊 12÷6＝2 層</text><text x=\"282\" y=\"104\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">4×3×2＝24 個</text></svg>"
        },
        {
          "type": "eq",
          "expr": "4 × 3 × 2 ＝ 24"
        },
        {
          "type": "answer",
          "text": "答：24 個"
        }
      ],
      "distractorAnalysis": {
        "A": "【只算了底層忘記高度】只算出底面一層可以放 4×3＝12 個，忘記高度 12 公分可以疊到 2 層。",
        "D": "【餘數無條件進位誤算】看到 25 除以 6 有餘數或估算錯誤，誤多算出個數。",
        "B": "【用總體積直接相除的致命陷阱】錯算（25×18×12）÷（6×6×6）＝ 5400 ÷ 216 ＝ 25，但右側剩餘的 1 公分空隙根本塞不進完整的魔術方塊，不可把空隙拼湊算成第 25 個。"
      },
      "insight": "裝箱問題永遠是「長÷邊長、寬÷邊長、高÷邊長，三個都只取整數商（無條件捨去餘數）」再相乘！絕對不能拿大盒總體積除以小盒總體積。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "裝箱個數 ＝ （大長 ÷ 小邊的整數商） × （大寬 ÷ 小邊的整數商） × （大高 ÷ 小邊的整數商）"
      ],
      "conceptCompare": "【倒水／體積問題 vs 裝積木問題】如果是「倒水」，餘下的 1 公分空隙也能裝滿水，才用總體積相除；如果是「裝固體積木／餅乾盒」，餘數空間必須捨去。",
      "examVariations": "若小盒子是「長方體（例如 6×4×3）」而非正方體，就要比較直放、橫放等不同方向哪一種浪費的空間最少。"
    },
    "check": {
      "expr": "4 * 3 * 2",
      "expect": "24"
    }
  },
  {
    "id": "U10-S4-B-016",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-4 球體與切面應用",
    "section": "10-4",
    "sectionName": "球體與切面應用",
    "category": "球體截面的形狀與最大圓位置",
    "level": 4,
    "difficulty": 4,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "爸爸切一顆圓形西瓜時，不管從哪個角度平平切下一刀，切出來的西瓜截面都是圓形。如果想切出面積「最大」的圓形西瓜片，刀面必須怎麼切才行？",
    "options": [
      {
        "key": "A",
        "text": "貼近西瓜表皮淺淺切一刀",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "B",
        "text": "無論切在哪個位置，切出來的圓都一樣大",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "C",
        "text": "刀面剛好通過西瓜正中央的「球心」切開",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "垂直切一定會比水平切出的圓面積更大",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生掌握球體切面的核心性質：所有切面皆為圓形，且離球心越近切面越大，通過球心的切面最大。",
      "steps": [
        {
          "type": "text",
          "text": "把球體切成兩片時，切面永遠是圓形；刀面距離正中央的「球心」越近，切出來的圓就越大。只有剛好通過球心（對半切）時，圓的直徑才會等於整顆球的直徑，面積最大。"
        },
        {
          "type": "svg",
          "caption": "越靠近球心切面圓越大；通過球心的切面圓直徑等於球體直徑，是最大圓",
          "svg": "<svg viewBox=\"0 0 360 185\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"115\" cy=\"92\" r=\"68\" fill=\"rgba(34,197,94,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><ellipse cx=\"115\" cy=\"42\" rx=\"44\" ry=\"10\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"1.6\"/><ellipse cx=\"115\" cy=\"92\" rx=\"68\" ry=\"16\" fill=\"rgba(220,38,38,0.18)\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><ellipse cx=\"115\" cy=\"134\" rx=\"52\" ry=\"12\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#d97706\" stroke-width=\"1.6\"/><circle cx=\"115\" cy=\"92\" r=\"4\" fill=\"#dc2626\"/><text x=\"276\" y=\"46\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">離球心遠：小圓</text><text x=\"276\" y=\"96\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">通過球心：最大圓</text><text x=\"276\" y=\"138\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#d97706\">未過球心：較小圓</text></svg>"
        },
        {
          "type": "eq",
          "expr": "1 ＝ 1"
        },
        {
          "type": "answer",
          "text": "答：刀面剛好通過西瓜正中央的「球心」切開"
        }
      ],
      "distractorAnalysis": {
        "A": "【切面大小概念相反】貼近表皮邊緣切，只會切出小小一片圓形，面積最小。",
        "B": "【把球體誤當成圓柱體】圓柱體橫切每一片圓都一樣大，但球體兩端窄、中間寬，切的位置不同，圓的大小會改變。",
        "D": "【誤把方向當成決定大小的主因】球體在各個方向都完全對稱，決定切面大小的是「有沒有靠近球心」，不是直切或橫切。"
      },
      "insight": "圓柱體水平切每一刀都一樣大，但球體必須切在正中央「通過球心」才能得到最大圓；只要偏離球心，切面圓就一定會變小。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "球體任一切面皆為圓形",
        "切面距離球心越近 ➔ 圓越大；通過球心 ➔ 最大圓"
      ],
      "conceptCompare": "【球體切面 vs 圓柱切面】圓柱體平行底面切出的圓永遠相等（若斜切會變橢圓）；球體無論任何角度平切都是正圓，但只有通過球心才是最大圓。",
      "examVariations": "考題常畫出球內四條不同距離的切線，問「哪一個切面的周長或半徑最長」，直接找離球心最近的那一條即可。"
    },
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "skipOptionNumMatch": true
  },
  {
    "id": "U10-S4-B-017",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-4 球體與切面應用",
    "section": "10-4",
    "sectionName": "球體與切面應用",
    "category": "球體半徑與最大切面直徑換算",
    "level": 4,
    "difficulty": 4,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "自然教室有一顆半徑 15 公分的球體地球儀，如圖所示，中心圓點 O 代表這顆地球儀的球心。請問從球心 O 到球面任意一點的距離是多少，且沿著通過球心 O 切開的截面圓直徑是幾公分？",
    "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"150\" cy=\"90\" r=\"68\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"90\" rx=\"68\" ry=\"18\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.6\" stroke-dasharray=\"5,3\"/><line x1=\"150\" y1=\"90\" x2=\"218\" y2=\"90\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><circle cx=\"150\" cy=\"90\" r=\"4\" fill=\"#dc2626\"/><text x=\"140\" y=\"84\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">O</text><text x=\"184\" y=\"76\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">15 公分</text><text x=\"150\" y=\"174\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">地球儀模型（O 為球心）</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "15 公分，直徑 15 公分",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "B",
        "text": "15 公分，直徑 30 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "30 公分，直徑 30 公分",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "D",
        "text": "7 公分，直徑 15 公分",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生理解球的半徑定義（球心到球面任一點等長）以及通過球心切面圓直徑＝球體直徑＝2×半徑。",
      "steps": [
        {
          "type": "text",
          "text": "球心到球面上任何一點的距離都相等，都叫做球的「半徑」，也就是 15 公分。而通過球心 O 切開的截面是最大圓，它的直徑就是 2 倍半徑。"
        },
        {
          "type": "svg",
          "caption": "通過球心 O 的剖面圓：兩側半徑各 15 公分，總直徑為 30 公分",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"115\" cy=\"88\" r=\"62\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"53\" y1=\"88\" x2=\"177\" y2=\"88\" stroke=\"#dc2626\" stroke-width=\"2.4\"/><circle cx=\"115\" cy=\"88\" r=\"4\" fill=\"#0f172a\"/><text x=\"84\" y=\"76\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">15</text><text x=\"146\" y=\"76\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">15</text><text x=\"115\" y=\"108\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">球心 O</text><text x=\"272\" y=\"64\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">球心到球面距離 ＝ 15 公分</text><text x=\"272\" y=\"98\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">最大切面直徑 ＝ 15 × 2</text><text x=\"272\" y=\"128\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">＝ 30 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "15 × 2 ＝ 30"
        },
        {
          "type": "answer",
          "text": "答：15 公分，直徑 30 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【半徑與直徑混淆】把通過球心切面圓的直徑也當成 15 公分，忘記直徑必須橫跨球心左右兩端，是半徑的 2 倍。",
        "D": "【誤把 15 公分當成直徑再除以 2】看錯題目給的條件，把半徑 15 公分誤認為直徑而去對半估算。",
        "C": "【把球心到球面距離記成直徑】誤把直徑 30 公分當成球心到球面的距離。"
      },
      "insight": "球體跟平面上的圓形一樣：「球心到球面」就是半徑，橫穿過球心連接兩側球面的線段就是直徑，永遠滿足「直徑 ＝ 半徑 × 2」。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "球心到球面任一點距離 ＝ 半徑",
        "過球心最大切面直徑 ＝ 半徑 × 2"
      ],
      "conceptCompare": "【圓心 vs 球心】平面圓形只有前後左右在同一平面的點到圓心等距；立體球體則是上下左右前後所有立體空間中的表面點到球心都等距。",
      "examVariations": "常改問「在球內畫一條最長的線段，兩端都在球面上，這條線段長幾公分？」這條最長線段必過球心，即為直徑。"
    },
    "check": {
      "expr": "15 * 2",
      "expect": "30"
    }
  },
  {
    "id": "U10-S4-B-018",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-4 球體與切面應用",
    "section": "10-4",
    "sectionName": "球體與切面應用",
    "category": "多顆球疊放圓柱筒的高度計算",
    "level": 4,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "體育組要把 3 顆大小完全一樣的網球，一顆疊一顆放進一個透明圓柱形球筒裡（如下圖，球筒寬度剛好緊貼網球）。已知每顆網球的半徑都是 3 公分，請問這個圓柱球筒內部至少要多高才能剛好蓋上蓋子？",
    "svg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"115\" y=\"20\" width=\"54\" height=\"162\" fill=\"rgba(59,130,246,0.06)\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"142\" cy=\"47\" r=\"27\" fill=\"rgba(132,204,22,0.22)\" stroke=\"#4d7c0f\" stroke-width=\"1.8\"/><circle cx=\"142\" cy=\"101\" r=\"27\" fill=\"rgba(132,204,22,0.22)\" stroke=\"#4d7c0f\" stroke-width=\"1.8\"/><circle cx=\"142\" cy=\"155\" r=\"27\" fill=\"rgba(132,204,22,0.22)\" stroke=\"#4d7c0f\" stroke-width=\"1.8\"/><line x1=\"142\" y1=\"47\" x2=\"169\" y2=\"47\" stroke=\"#dc2626\" stroke-width=\"2\"/><circle cx=\"142\" cy=\"47\" r=\"3\" fill=\"#dc2626\"/><text x=\"236\" y=\"52\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">半徑 3 公分</text><text x=\"236\" y=\"106\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">3 顆直直疊放</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "18 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "9 公分",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "C",
        "text": "12 公分",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "6 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生連結球的半徑、直徑與圓柱容器高度的應用關係，避免誤拿半徑直接乘以顆數。",
      "steps": [
        {
          "type": "text",
          "text": "每顆網球占用圓柱筒的高度等於它的「直徑」。先算一顆球的直徑＝半徑 3×2＝6 公分；3 顆直直疊放，總高度就是 6×3＝18 公分。"
        },
        {
          "type": "svg",
          "caption": "每顆球佔據高度為直徑 6 公分，3 顆總高度為 6×3＝18 公分",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"86\" y=\"18\" width=\"50\" height=\"150\" fill=\"rgba(59,130,246,0.06)\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"111\" cy=\"43\" r=\"25\" fill=\"rgba(132,204,22,0.22)\" stroke=\"#4d7c0f\" stroke-width=\"1.8\"/><circle cx=\"111\" cy=\"93\" r=\"25\" fill=\"rgba(132,204,22,0.22)\" stroke=\"#4d7c0f\" stroke-width=\"1.8\"/><circle cx=\"111\" cy=\"143\" r=\"25\" fill=\"rgba(132,204,22,0.22)\" stroke=\"#4d7c0f\" stroke-width=\"1.8\"/><line x1=\"111\" y1=\"18\" x2=\"111\" y2=\"168\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"258\" y=\"52\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#4d7c0f\">1 顆直徑 ＝ 3 × 2 ＝ 6 公分</text><text x=\"258\" y=\"92\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">3 顆疊高 ＝ 6 × 3</text><text x=\"258\" y=\"128\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">＝ 18 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "3 × 2 × 3 ＝ 18"
        },
        {
          "type": "answer",
          "text": "答：18 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【直接用半徑乘以球數】只算 3×3＝9 公分，忘了 1 顆球的高度是「直徑」（2 倍半徑），不是半徑。",
        "C": "【顆數或倍數算錯】誤算成 6×2＝12 公分，少算 1 顆網球佔用的高度。",
        "D": "【只算了 1 顆球的直徑】算出直徑 3×2＝6 公分後就當成最後答案，忘了筒子裡疊了 3 顆球。"
      },
      "insight": "只要看到題目給球體的「半徑」，立刻先在旁邊寫出「直徑 ＝ 半徑 × 2」，就能避開 9 成以上的球體裝盒陷阱！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "多顆相同球體緊密排成一列總長度 ＝ 球半徑 × 2 × 顆數"
      ],
      "conceptCompare": "【圓柱球筒內徑 vs 筒高】這個球筒的圓形底面直徑剛好等於 1 顆球的直徑（6 公分），而筒高則等於 3 顆球的直徑總和（18 公分）。",
      "examVariations": "進階題常改成「長方體盒子內底層排 2×3 顆球、疊 2 層，問盒子長、寬、高各至少幾公分」。"
    },
    "check": {
      "expr": "3 * 2 * 3",
      "expect": "18"
    }
  },
  {
    "id": "U10-S4-B-019",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-4 球體與切面應用",
    "section": "10-4",
    "sectionName": "球體與切面應用",
    "category": "多個球體平行切面圓面積大小排序",
    "level": 4,
    "difficulty": 4,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖是一個透明球體模型，圓點 O 是球心，裡面有甲、乙、丙、丁四個相互平行的圓形切面。根據各個切面與球心 O 的距離遠近，這四個切面的面積由「大到小」排列應該是哪一項？",
    "svg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"145\" cy=\"100\" r=\"76\" fill=\"rgba(59,130,246,0.08)\" stroke=\"#0f172a\" stroke-width=\"2\"/><ellipse cx=\"145\" cy=\"34\" rx=\"38\" ry=\"7\" fill=\"rgba(168,85,247,0.18)\" stroke=\"#7e22ce\" stroke-width=\"1.6\"/><ellipse cx=\"145\" cy=\"58\" rx=\"63\" ry=\"10\" fill=\"rgba(37,99,235,0.16)\" stroke=\"#2563eb\" stroke-width=\"1.6\"/><ellipse cx=\"145\" cy=\"100\" rx=\"76\" ry=\"12\" fill=\"rgba(220,38,38,0.18)\" stroke=\"#dc2626\" stroke-width=\"2\"/><ellipse cx=\"145\" cy=\"122\" rx=\"72\" ry=\"11\" fill=\"rgba(22,163,74,0.16)\" stroke=\"#16a34a\" stroke-width=\"1.6\"/><circle cx=\"145\" cy=\"100\" r=\"4\" fill=\"#0f172a\"/><text x=\"132\" y=\"96\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">O</text><text x=\"246\" y=\"38\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#7e22ce\">切面丙</text><text x=\"246\" y=\"62\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">切面甲</text><text x=\"246\" y=\"104\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">切面乙</text><text x=\"246\" y=\"128\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">切面丁</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "丙 ＞ 甲 ＞ 丁 ＞ 乙",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "B",
        "text": "乙 ＞ 甲 ＞ 丁 ＞ 丙",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "C",
        "text": "丙 ＞ 甲 ＞ 乙 ＞ 丁",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "乙 ＞ 丁 ＞ 甲 ＞ 丙",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生能否同時觀察球心上下兩側的切面位置，以「切面離球心的距離」判斷截面圓面積大小順序。",
      "steps": [
        {
          "type": "text",
          "text": "球體切面離球心 O 越近，圓面積就越大：切面乙剛好穿過球心 O 是最大圓；接著在球心下方的切面丁比球心上方的切面甲更靠近 O；最靠近頂部的切面丙離 O 最遠，圓最小。"
        },
        {
          "type": "svg",
          "caption": "比較與球心 O 的垂直距離：乙（0）＜ 丁 ＜ 甲 ＜ 丙，距離越短圓越大",
          "svg": "<svg viewBox=\"0 0 360 185\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"105\" cy=\"92\" r=\"68\" fill=\"rgba(59,130,246,0.06)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><line x1=\"66\" y1=\"34\" x2=\"144\" y2=\"34\" stroke=\"#7e22ce\" stroke-width=\"2.2\"/><line x1=\"46\" y1=\"56\" x2=\"164\" y2=\"56\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><line x1=\"37\" y1=\"92\" x2=\"173\" y2=\"92\" stroke=\"#dc2626\" stroke-width=\"2.6\"/><line x1=\"41\" y1=\"112\" x2=\"169\" y2=\"112\" stroke=\"#16a34a\" stroke-width=\"2.2\"/><line x1=\"105\" y1=\"34\" x2=\"105\" y2=\"112\" stroke=\"#0f172a\" stroke-width=\"1.4\" stroke-dasharray=\"3,3\"/><circle cx=\"105\" cy=\"92\" r=\"4\" fill=\"#0f172a\"/><text x=\"268\" y=\"46\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">1. 乙（剛好過球心 O）</text><text x=\"268\" y=\"76\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">2. 丁（非常靠近 O）</text><text x=\"268\" y=\"106\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">3. 甲（離 O 較遠）</text><text x=\"268\" y=\"136\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#7e22ce\">4. 丙（最遠，最小）</text></svg>"
        },
        {
          "type": "eq",
          "expr": "4 － 0 ＝ 4"
        },
        {
          "type": "answer",
          "text": "答：乙 ＞ 丁 ＞ 甲 ＞ 丙"
        }
      ],
      "distractorAnalysis": {
        "A": "【大小方向排反】把「從大到小」看成「從小到大」，排出相反順序。",
        "B": "【只看球心上方忽略下方距離】只先排完球心上面的甲，沒注意到球心下方的丁其實離球心 O 更近。",
        "C": "【依圖上位置由上往下排】沒有比較離球心的距離，直接照圖上高度由最上面一路排到最下面。"
      },
      "insight": "比較球體不同切面的大小時，不管切面在球心的上方還是下方，只要拿尺或目測「切面到球心 O 的垂直距離」，距離越短的圓一定越大！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "切面到球心的距離越短 ➔ 截面圓半徑與面積越大"
      ],
      "conceptCompare": "【對稱切面】如果在球心「上方 3 公分」和「下方 3 公分」各切一刀，因為距離球心都是 3 公分，切出來的兩個圓形面積會一模一樣大。",
      "examVariations": "題目若改成「哪兩個切面的圓面積可能完全相等？」就找球心上下兩側距離球心一樣遠的兩個平面。"
    },
    "check": {
      "expr": "4 - 0",
      "expect": "4"
    },
    "skipOptionNumMatch": true
  },
  {
    "id": "U10-S4-B-020",
    "unitId": "U10",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U10 10-4 球體與切面應用",
    "section": "10-4",
    "sectionName": "球體與切面應用",
    "category": "球體裝入正方體展示盒與緞帶綜合應用",
    "level": 4,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "禮品店把一顆直徑 14 公分的球形地球儀撲滿，裝進一個剛好貼合六個面的「正方體」透明展示盒裡，再繞著展示盒外圍綁上十字形緞帶（如圖所示），並在頂端另外預留 20 公分打蝴蝶結。請問這條緞帶至少需要幾公分？",
    "svg": "<svg viewBox=\"0 0 320 185\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"90,56 170,56 206,32 126,32\" fill=\"rgba(59,130,246,0.08)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><rect x=\"90\" y=\"56\" width=\"80\" height=\"80\" fill=\"rgba(59,130,246,0.05)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><polygon points=\"170,56 206,32 206,112 170,136\" fill=\"rgba(59,130,246,0.08)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><circle cx=\"148\" cy=\"84\" r=\"40\" fill=\"rgba(245,158,11,0.18)\" stroke=\"#d97706\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><line x1=\"108\" y1=\"44\" x2=\"188\" y2=\"44\" stroke=\"#dc2626\" stroke-width=\"2.8\"/><line x1=\"188\" y1=\"44\" x2=\"188\" y2=\"124\" stroke=\"#dc2626\" stroke-width=\"2.8\"/><line x1=\"166\" y1=\"32\" x2=\"130\" y2=\"56\" stroke=\"#dc2626\" stroke-width=\"2.8\"/><line x1=\"130\" y1=\"56\" x2=\"130\" y2=\"136\" stroke=\"#dc2626\" stroke-width=\"2.8\"/><circle cx=\"148\" cy=\"44\" r=\"5\" fill=\"#dc2626\"/><text x=\"256\" y=\"76\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#d97706\">球直徑 14 公分</text><text x=\"256\" y=\"106\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">打結預留 20 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "112 公分",
        "trapCode": "U10_RIBBON_FORGET_KNOT"
      },
      {
        "key": "B",
        "text": "76 公分",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "C",
        "text": "132 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "104 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生整合球體直徑與外接正方體邊長的幾何轉換，再套用正方體十字緞帶路徑長度計算。",
      "steps": [
        {
          "type": "text",
          "text": "球體剛好貼合正方體的六個內壁，代表正方體的每一條邊長都等於球的直徑 14 公分。繞正方體綁十字緞帶時，共會經過 8 段邊長（上 2＋下 2＋四個側面各 1＝8 段），最後加上蝴蝶結 20 公分。"
        },
        {
          "type": "svg",
          "caption": "正方體邊長等於球直徑 14 公分，十字緞帶經過 8 段邊長共 112 公分，再加打結 20 公分",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"36\" y=\"34\" width=\"94\" height=\"94\" fill=\"rgba(59,130,246,0.08)\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"83\" cy=\"81\" r=\"47\" fill=\"rgba(245,158,11,0.16)\" stroke=\"#d97706\" stroke-width=\"1.8\"/><line x1=\"36\" y1=\"81\" x2=\"130\" y2=\"81\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><text x=\"83\" y=\"72\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">直徑 14</text><text x=\"83\" y=\"152\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">正方體邊長 ＝ 14 公分</text><text x=\"256\" y=\"56\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">十字緞帶繞 8 段邊長</text><text x=\"256\" y=\"88\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">14 × 8 ＝ 112 公分</text><text x=\"256\" y=\"122\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">112 ＋ 20 ＝ 132 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "14 × 8 ＋ 20 ＝ 112 ＋ 20 ＝ 132"
        },
        {
          "type": "answer",
          "text": "答：132 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記加蝴蝶結預留長度】算對了繞展示盒的 14×8＝112 公分，卻忘了加上打結預留的 20 公分。",
        "B": "【把球直徑誤當成半徑運算】誤拿半徑 7 公分當成正方體邊長來計算，得出 7×8＋20＝76 公分。",
        "D": "【誤把正方體 6 個面當成 6 段邊長】沒有追蹤十字緞帶走過的兩圈共 8 個面次，只算 14×6＋20＝104 公分。"
      },
      "insight": "正方體裡面裝進一顆剛好貼緊的球時，「球直徑 ＝ 正方體邊長」；再配合十字緞帶「經過 8 個邊長（2 長＋2 寬＋4 高＝8 邊）」就能輕鬆解開雙重關卡。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "正方體內剛好緊貼的球：正方體邊長 ＝ 球直徑",
        "正方體十字緞帶長 ＝ 邊長 × 8 ＋ 打結長度"
      ],
      "conceptCompare": "【正方體裝球 vs 圓柱筒裝球】正方體和球一樣寬，邊長等於直徑；若圓柱筒裝 2 顆球，筒高則等於 2 倍球直徑。",
      "examVariations": "考題可能改成「用長 132 公分的緞帶綁剛好裝進球體的正方體盒，已知蝴蝶結用掉 20 公分，求球的半徑是多少？」先算邊長 14 再除以 2 得半徑 7 公分。"
    },
    "check": {
      "expr": "14 * 8 + 20",
      "expect": "132"
    }
  },
  {
    "id": "U10-S1-O-001",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-1",
    "sectionName": "認識柱體和錐體",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L3 角柱與角錐面數頂點數反推邊數總和",
    "category": "柱體與錐體要素反推",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "積木盒裡有兩個實心立體木塊：一個是「剛好有 9 個面」的角錐，另一個是「剛好有 14 個頂點」的角柱。請問這兩個立體木塊的邊數加起來，總共有幾條邊？",
    "options": [
      {
        "key": "A",
        "text": "38 條",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "B",
        "text": "37 條",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "39 條",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "30 條",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生能否由角錐的面數與角柱的頂點數，先正確反推兩者各自的底面邊數，再分別求出邊數並相加。",
      "steps": [
        {
          "type": "text",
          "text": "先推算角錐的種類：角錐有 1 個底面和幾個三角形側面，所以底面邊數等於總面數減去 1 個底面。9 － 1 ＝ 8，這是一個八角錐，邊數是底面邊數的 2 倍。"
        },
        {
          "type": "text",
          "text": "再推算角柱的種類：角柱的頂點平均分在上、下兩個底面上，所以底面邊數等於頂點數除以 2。14 ÷ 2 ＝ 7，這是一個七角柱，邊數是底面邊數的 3 倍。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"208\" height=\"146\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/><text x=\"116\" y=\"34\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">八角錐（共 9 個面）</text><polygon points=\"116,46 82,110 150,110\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><text x=\"116\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1e293b\">底面邊數：9 － 1 ＝ 8</text><text x=\"116\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b91c1c\">邊數：8 × 2 ＝ 16 條</text><rect x=\"240\" y=\"12\" width=\"208\" height=\"146\" rx=\"8\" fill=\"#f0fdf4\" stroke=\"#22c55e\" stroke-width=\"1.5\"/><text x=\"344\" y=\"34\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">七角柱（共 14 個頂點）</text><rect x=\"314\" y=\"52\" width=\"60\" height=\"56\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><text x=\"344\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1e293b\">底面邊數：14 ÷ 2 ＝ 7</text><text x=\"344\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b91c1c\">邊數：7 × 3 ＝ 21 條</text></svg>",
          "caption": "圖解：八角錐與七角柱的底面邊數反推與邊數計算"
        },
        {
          "type": "eq",
          "expr": "（9 － 1）× 2 ＋ （14 ÷ 2）× 3 ＝ 16 ＋ 21 ＝ 37"
        },
        {
          "type": "answer",
          "text": "答：37 條"
        }
      ],
      "distractorAnalysis": {
        "A": "【角柱角錐公式互換】推出八角錐與七角柱後，卻把倍數套反，錯算成 8 × 3 ＋ 7 × 2 ＝ 38 條。",
        "C": "【底面邊數推算差 1】誤以為 9 個面的角錐就是九角錐（忘記減 1），算成 9 × 2 ＋ 21 ＝ 39 條。",
        "D": "【頂點與邊數混淆】算出八角錐有 16 條邊後，誤把七角柱的 14 個頂點直接當成 14 條邊相加，得 16 ＋ 14 ＝ 30 條。"
      },
      "insight": "遇到先給面數或頂點數的題目時，一定要先把「底面是幾邊形」算出來，再套用角柱邊數是 3 倍、角錐邊數是 2 倍的規律，才不會張冠李戴。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角錐底面邊數 ＝ 面數 － 1 ＝ 頂點數 － 1，角錐邊數 ＝ 底面邊數 × 2",
        "角柱底面邊數 ＝ 頂點數 ÷ 2 ＝ 面數 － 2，角柱邊數 ＝ 底面邊數 × 3"
      ],
      "conceptCompare": "【角錐的面 vs 角柱的面】角錐只有 1 個底面，所以面數是「底面邊數 ＋ 1」；角柱有上、下 2 個底面，所以面數是「底面邊數 ＋ 2」。",
      "examVariations": "常考將兩個未知角柱和角錐並排，改問「頂點總和」或「邊數相差幾條」，解題第一步都是先求各自底面邊數。"
    },
    "check": {
      "expr": "(9 - 1) * 2 + (14 / 2) * 3",
      "expect": "37"
    }
  },
  {
    "id": "U10-S1-O-002",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-1",
    "sectionName": "認識柱體和錐體",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L3 長方體差量還原與垂直於底面稜邊總長",
    "category": "長方體垂直邊與邊長還原",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小偉用木條製作一個長方體展示箱的骨架，已知其中一組「長、寬、高」相加的長度剛好是 35 公分，而且長比寬多 5 公分，寬比高多 3 公分。他把這個長方體平放在水平桌面上，請問所有「垂直於桌面」的木條，長度加起來共有幾公分？",
    "options": [
      {
        "key": "A",
        "text": "44 公分",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      },
      {
        "key": "B",
        "text": "24 公分",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "32 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "64 公分",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "結合和差線段圖求長、寬、高，再辨識長方體中哪些稜邊與底面（桌面）互相垂直並求總長。",
      "steps": [
        {
          "type": "text",
          "text": "先用基準量求「高」：寬比高多 3 公分，長比寬多 5 公分，所以長比高多 3 ＋ 5 ＝ 8 公分。從總和 35 公分扣掉多出的 3 公分與 8 公分，剩下剛好是 3 條「高」的長度。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"20\" y=\"28\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">高</text><rect x=\"55\" y=\"16\" width=\"80\" height=\"16\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\"/><text x=\"20\" y=\"58\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">寬</text><rect x=\"55\" y=\"46\" width=\"80\" height=\"16\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><rect x=\"135\" y=\"46\" width=\"30\" height=\"16\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"150\" y=\"41\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\">3</text><text x=\"20\" y=\"88\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">長</text><rect x=\"55\" y=\"76\" width=\"80\" height=\"16\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><rect x=\"135\" y=\"76\" width=\"80\" height=\"16\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"175\" y=\"107\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\">多 3 ＋ 5 ＝ 8</text><text x=\"135\" y=\"132\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">高 ＝（35 － 3 － 8）÷ 3 ＝ 8 公分</text><rect x=\"295\" y=\"48\" width=\"115\" height=\"76\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"325\" y=\"24\" width=\"115\" height=\"76\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"295\" y1=\"48\" x2=\"325\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"410\" y1=\"48\" x2=\"440\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"295\" y1=\"124\" x2=\"325\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"410\" y1=\"124\" x2=\"440\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"295\" y1=\"48\" x2=\"295\" y2=\"124\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"410\" y1=\"48\" x2=\"410\" y2=\"124\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"325\" y1=\"24\" x2=\"325\" y2=\"100\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"440\" y1=\"24\" x2=\"440\" y2=\"100\" stroke=\"#dc2626\" stroke-width=\"3\"/><text x=\"365\" y=\"152\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">4 條垂直於桌面的紅邊（高）</text></svg>",
          "caption": "圖解：先以線段圖求出高，再找出 4 條垂直於桌面的高"
        },
        {
          "type": "eq",
          "expr": "（35 － 3 － 3 － 5）÷ 3 ＝ 8"
        },
        {
          "type": "text",
          "text": "長方體平放在桌面上時，與桌面（下底面）互相垂直的稜邊是直立的 4 條「高」，每條 8 公分，共 8 × 4 ＝ 32 公分。"
        },
        {
          "type": "eq",
          "expr": "8 × 4 ＝ 32"
        },
        {
          "type": "answer",
          "text": "答：32 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【垂直與平行方向混淆】算出寬是 11 公分後，誤以為寬是垂直於桌面的邊，錯算成 11 × 4 ＝ 44 公分。",
        "B": "【垂直邊條數漏算 1 條】正確算出高為 8 公分，卻誤以為只有 3 條垂直邊，算成 8 × 3 ＝ 24 公分。",
        "D": "【長邊當成垂直邊】誤把最長的邊（16 公分）當成直立高度，錯算成 16 × 4 ＝ 64 公分。"
      },
      "insight": "長方體中，與某個底面互相垂直的邊必定是連接上、下兩個底面的 4 條側邊（高），千萬不要拿底面上的長或寬來乘以 4。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "長方體有 12 條邊：4 條長、4 條寬、4 條高",
        "長方體中，垂直於底面的邊共有 4 條（就是 4 條高）"
      ],
      "conceptCompare": "【平行面邊數 vs 垂直面邊數】平放在桌上的長方體，與桌面「垂直」的邊有 4 條（高）；而在上底面上與桌面「平行」的邊則有 4 條（2 條長和 2 條寬）。",
      "examVariations": "題目常改給長方體的「全部 12 條邊總和」（要先除以 4 才是一組長寬高），再搭配差量條件問垂直於某側面的邊長總和。"
    },
    "check": {
      "expr": "((35 - 3 - 3 - 5) / 3) * 4",
      "expect": "32"
    }
  },
  {
    "id": "U10-S2-O-003",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-2",
    "sectionName": "柱體和錐體的構成要素",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L4 由角柱頂點邊面總和反推幾角柱與要素差",
    "category": "角柱要素總和反推",
    "level": 4,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "把一個實心角柱的「頂點個數」、「邊的條數」和「面的個數」這三個數字全部加起來，總和剛好等於 62。請問這個角柱的「邊數」比它的「面數」多出多少？",
    "options": [
      {
        "key": "A",
        "text": "8",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "B",
        "text": "9",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "C",
        "text": "20",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "18",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否掌握角柱頂點、邊、面與底面邊數的倍數關係，並利用份數線段法反推未知幾角柱。",
      "steps": [
        {
          "type": "text",
          "text": "把角柱「底面的邊數」當成 1 份（□）：頂點有 2 份（上、下底面各 1 份），邊有 3 份（上底面、下底面、側邊各 1 份），面有 1 份再加 2 個底面。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"20\" y=\"34\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">頂點（2 份）</text><rect x=\"120\" y=\"20\" width=\"45\" height=\"18\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><rect x=\"165\" y=\"20\" width=\"45\" height=\"18\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><text x=\"20\" y=\"68\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">邊數（3 份）</text><rect x=\"120\" y=\"54\" width=\"45\" height=\"18\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><rect x=\"165\" y=\"54\" width=\"45\" height=\"18\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><rect x=\"210\" y=\"54\" width=\"45\" height=\"18\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><text x=\"20\" y=\"102\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">面數（1 份＋2）</text><rect x=\"120\" y=\"88\" width=\"45\" height=\"18\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><rect x=\"165\" y=\"88\" width=\"30\" height=\"18\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\"/><text x=\"180\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#b91c1c\">＋2</text><text x=\"340\" y=\"68\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">共 6 份 ＋ 2 ＝ 62</text><text x=\"230\" y=\"142\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">1 份 ＝（62 － 2）÷ 6 ＝ 10 ➔ 原為十角柱</text></svg>",
          "caption": "圖解：利用份數法算出角柱底面邊數（1 份 ＝ 10）"
        },
        {
          "type": "eq",
          "expr": "（62 － 2）÷（2 ＋ 3 ＋ 1）＝ 60 ÷ 6 ＝ 10"
        },
        {
          "type": "text",
          "text": "得知這是十角柱，因此邊數 ＝ 10 × 3 ＝ 30 條，面數 ＝ 10 ＋ 2 ＝ 12 個，兩者相差 30 － 12 ＝ 18。"
        },
        {
          "type": "eq",
          "expr": "10 × 3 －（10 ＋ 2）＝ 30 － 12 ＝ 18"
        },
        {
          "type": "answer",
          "text": "答：18"
        }
      ],
      "distractorAnalysis": {
        "B": "【誤套角錐數量公式】推出底面為十邊形後，誤用十角錐的邊數 20 與面數 11 相減，算出 20 － 11 ＝ 9。",
        "C": "【忘記加上下 2 個底面】算出 30 條邊後，忘記面數還要加上 2 個底面，錯算成 30 － 10 ＝ 20。",
        "A": "【頂點與邊數混淆】把「邊數減面數」誤算成「頂點數減面數」，錯算成 20 － 12 ＝ 8。"
      },
      "insight": "角柱的頂點、邊、面三者總和永遠是「底面邊數 × 6 ＋ 2」，先減 2 再除以 6 就能秒殺反推它是幾角柱。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角柱要素總和 ＝ 底面邊數 × 6 ＋ 2",
        "角錐要素總和 ＝ 底面邊數 × 4 ＋ 2（頂點 1 份＋1、邊 2 份、面 1 份＋1）"
      ],
      "conceptCompare": "【角柱總和 6 份＋2 vs 角錐總和 4 份＋2】角柱與角錐的要素總和都剛好多了常數 2，但角柱要除以 6 才能得到底面邊數，角錐則是除以 4。",
      "examVariations": "若題目改成給「角錐的頂點、邊、面總和是 38」，算法就是（38 － 2）÷ 4 ＝ 9（九角錐）。"
    },
    "check": {
      "expr": "((62 - 2) / 6) * 3 - (((62 - 2) / 6) + 2)",
      "expect": "18"
    }
  },
  {
    "id": "U10-S2-O-004",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-2",
    "sectionName": "柱體和錐體的構成要素",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L4 角錐與角柱交叉等量條件聯立反推",
    "category": "柱體與錐體交叉反推",
    "level": 4,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "美術館的入口廣場有一座角錐造型的玻璃屋頂，還有一座角柱造型的石碑。已知玻璃角錐的「邊數」剛好等於石碑角柱的「頂點數」；而且玻璃角錐的「面數」加上石碑角柱的「邊數」，合起來一共是 61。請問這座石碑角柱的底面是幾邊形？",
    "options": [
      {
        "key": "A",
        "text": "20 邊形",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "B",
        "text": "15 邊形",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "12 邊形",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "D",
        "text": "14 邊形",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否能從「角錐邊數＝角柱頂點數」發現兩個形體的底面邊數相同，再合併份數反推底面邊數。",
      "steps": [
        {
          "type": "text",
          "text": "先看第一個條件：角錐的邊數是「角錐底面邊數 × 2」，角柱的頂點數是「角柱底面邊數 × 2」。既然這兩個數量剛好相等，就代表玻璃角錐和石碑角柱的「底面邊數一樣多」，可以都設為同一份量（□）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"18\" width=\"428\" height=\"42\" rx=\"6\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/><text x=\"230\" y=\"44\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">角錐邊數（底面×2）＝ 角柱頂點（底面×2）➔ 兩者底面邊數都是 1 份（□）</text><text x=\"22\" y=\"92\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">角錐面數（1 份＋1）</text><rect x=\"165\" y=\"78\" width=\"52\" height=\"18\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><rect x=\"217\" y=\"78\" width=\"30\" height=\"18\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\"/><text x=\"232\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#b91c1c\">＋1</text><text x=\"22\" y=\"122\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">角柱邊數（3 份）</text><rect x=\"165\" y=\"108\" width=\"52\" height=\"18\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><rect x=\"217\" y=\"108\" width=\"52\" height=\"18\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><rect x=\"269\" y=\"108\" width=\"52\" height=\"18\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><text x=\"385\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">共 4 份＋1 ＝ 61</text><text x=\"230\" y=\"150\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">1 份 ＝（61 － 1）÷ 4 ＝ 15（十五邊形）</text></svg>",
          "caption": "圖解：利用份數對照推出兩者底面都是十五邊形"
        },
        {
          "type": "text",
          "text": "再看第二個條件：角錐面數是「1 份 ＋ 1」，角柱邊數是「3 份」。兩者相加一共有 4 份 ＋ 1 ＝ 61，因此 1 份 ＝（61 － 1）÷ 4 ＝ 15。"
        },
        {
          "type": "eq",
          "expr": "（61 － 1）÷（1 ＋ 3）＝ 60 ÷ 4 ＝ 15"
        },
        {
          "type": "answer",
          "text": "答：15 邊形"
        }
      ],
      "distractorAnalysis": {
        "A": "【角柱邊數少算 1 份】誤把角柱邊數當成 2 份而不是 3 份，算成（61 － 1）÷ 3 ＝ 20 邊形。",
        "C": "【份數總和誤多算 1 份】把「角錐面數＋角柱邊數」誤當成共 5 份，錯算成（61 － 1）÷ 5 ＝ 12 邊形。",
        "D": "【底面邊數推算差 1】求得 15 邊形後誤以為還須扣掉 1 個底面（或算錯餘數），選成 14 邊形。"
      },
      "insight": "只要發現不同形體的兩個要素「倍數恰好相同」，就能立刻斷定它們的底面邊數相等，把兩個形體合併用同一份量來算。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角錐邊數 ＝ 底面邊數 × 2；角柱頂點數 ＝ 底面邊數 × 2",
        "角錐面數 ＝ 底面邊數 ＋ 1；角柱邊數 ＝ 底面邊數 × 3"
      ],
      "conceptCompare": "【同倍數橋樑】除了「角錐邊數＝角柱頂點數」代表兩者底面同邊數之外，「角錐面數＝角柱面數－1」也一樣代表兩者底面邊數相同。",
      "examVariations": "可能改成「角錐頂點數與角柱面數相同」，此時「角錐邊＋1 ＝ 角柱邊＋2」，代表角錐底面邊數比角柱多 1。"
    },
    "check": {
      "expr": "(61 - 1) / 4",
      "expect": "15"
    }
  },
  {
    "id": "U10-S3-O-005",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-3",
    "sectionName": "柱體和錐體的展開圖",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L5 正方體 2-3-1 展開圖相對面與數字等和推算",
    "category": "正方體展開圖相對面",
    "level": 5,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如下圖是一張正方體的展開圖（屬於 2－3－1 型），沿著虛線折成一個正方體之後，每一組「相對的面」上的兩個數字相加起來都相等。請問展開圖中「？」的那一面，應該填入哪一個數字？",
    "svg": "<svg viewBox=\"0 0 340 210\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"20\" width=\"60\" height=\"55\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2\"/><rect x=\"105\" y=\"20\" width=\"60\" height=\"55\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2\"/><rect x=\"105\" y=\"75\" width=\"60\" height=\"55\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2\"/><rect x=\"165\" y=\"75\" width=\"60\" height=\"55\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2\"/><rect x=\"225\" y=\"75\" width=\"60\" height=\"55\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2\"/><rect x=\"225\" y=\"130\" width=\"60\" height=\"55\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2\"/><line x1=\"105\" y1=\"20\" x2=\"105\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"105\" y1=\"75\" x2=\"165\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"165\" y1=\"75\" x2=\"165\" y2=\"130\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"225\" y1=\"75\" x2=\"225\" y2=\"130\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"225\" y1=\"130\" x2=\"285\" y2=\"130\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"75\" y=\"54\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#1e293b\">7</text><text x=\"135\" y=\"54\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#1e293b\">11</text><text x=\"135\" y=\"109\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#1e293b\">9</text><text x=\"195\" y=\"109\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#1e293b\">18</text><text x=\"255\" y=\"109\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#dc2626\">？</text><text x=\"255\" y=\"164\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#1e293b\">14</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "22",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "B",
        "text": "20",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "C",
        "text": "23",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      },
      {
        "key": "D",
        "text": "16",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生對正方體 2－3－1 型展開圖相對面的空間折合判定能力，並依每組相對面等和推算未知數。",
      "steps": [
        {
          "type": "text",
          "text": "先以中間橫排的三格來折合：「9」和「？」中間隔著「18」，所以「9」和「？」是相對的面。接著看上、下突出的兩格：把 11 往上折當上蓋、14 往下折當下底，因此「11」和「14」是相對的面。"
        },
        {
          "type": "text",
          "text": "最後剩下左上角的「7」：當 11 折成上蓋後，7 會往左側折下來變成左側面，恰好與當作右側面的「18」相對（7 ＋ 18 ＝ 25，11 ＋ 14 ＝ 25，兩組對面和都是 25！）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 420 205\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"55\" y=\"22\" width=\"52\" height=\"48\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><rect x=\"107\" y=\"22\" width=\"52\" height=\"48\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><rect x=\"107\" y=\"70\" width=\"52\" height=\"48\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><rect x=\"159\" y=\"70\" width=\"52\" height=\"48\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><rect x=\"211\" y=\"70\" width=\"52\" height=\"48\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><rect x=\"211\" y=\"118\" width=\"52\" height=\"48\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"81\" y=\"52\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#b45309\">7</text><text x=\"133\" y=\"52\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#15803d\">11</text><text x=\"133\" y=\"100\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#1d4ed8\">9</text><text x=\"185\" y=\"100\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#b45309\">18</text><text x=\"237\" y=\"100\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#dc2626\">？</text><text x=\"237\" y=\"148\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#15803d\">14</text><text x=\"340\" y=\"50\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">7 對 18（和 25）</text><text x=\"340\" y=\"85\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">11 對 14（和 25）</text><text x=\"340\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">9 對 ？ ➔ 25 － 9 ＝ 16</text><text x=\"210\" y=\"190\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">相同底色的兩格折起來後互相面對（相對面）</text></svg>",
          "caption": "圖解：2－3－1 型展開圖的三組同色相對面"
        },
        {
          "type": "eq",
          "expr": "11 ＋ 14 － 9 ＝ 25 － 9 ＝ 16"
        },
        {
          "type": "answer",
          "text": "答：16"
        }
      ],
      "distractorAnalysis": {
        "A": "【展開圖對面誤判】誤以為「11」和「18」才是對面（和為 29），並錯認「？」與「7」相對，算出 29 － 7 ＝ 22。",
        "B": "【Z 字端點看錯】找對了「9」對「？」，卻誤把「11」和「18」這兩個相鄰面當作一組對面，算出 11 ＋ 18 － 9 ＝ 20。",
        "C": "【相鄰垂直面當成平行對面】誤把互相垂直相鄰的「18」和「14」當成一組平行相對面，錯算成 18 ＋ 14 － 9 ＝ 23。"
      },
      "insight": "找正方體展開圖的對面有兩大口訣：「同排隔一格是對面」（9 對 ？）以及「Z 字型兩端隔兩格是對面」（11 對 14、7 對 18）。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "正方體展開圖對面判定：直線「目字隔一格」必為對面",
        "正方體展開圖對面判定：「Z 字兩端」（折兩次轉向）也必為對面"
      ],
      "conceptCompare": "【1-4-1 型 vs 2-3-1 型】1-4-1 型容易用直線隔一格找對面；2-3-1 型轉折較多，要先固定中間 3 格當主軸，再把最外側那一格折兩次轉進側面。",
      "examVariations": "段考常把數字換成「求乘積相等」或「三個對面數字合起來是某數」，核心仍是先精準配對三組相對面。"
    },
    "check": {
      "expr": "11 + 14 - 9",
      "expect": "16"
    }
  },
  {
    "id": "U10-S3-O-006",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-3",
    "sectionName": "柱體和錐體的展開圖",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L5 圓柱與圓錐側面展開圖尺寸與周長合計",
    "category": "圓柱與圓錐展開圖",
    "level": 5,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如下圖，美勞課要製作一個圓柱筆筒和一個圓錐派對帽。已知圓柱底面圓的圓周長是 24 公分，柱高是 15 公分；圓錐側面展開後的扇形半徑是 18 公分，而且圓錐底面的圓周長剛好是圓柱底面圓周長的 2 分之 1。如果分別把「圓柱側面展開圖（長方形）的周長」加上「圓錐側面展開圖（扇形）的周長」，合計共有幾公分？",
    "svg": "<svg viewBox=\"0 0 380 175\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"85\" cy=\"42\" rx=\"38\" ry=\"12\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M47,42 L47,125 A38,12 0 0,0 123,125 L123,42\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><ellipse cx=\"85\" cy=\"125\" rx=\"38\" ry=\"12\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"85\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">圓周長 24 公分</text><text x=\"152\" y=\"88\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">高 15 公分</text><polygon points=\"285,34 242,126 328,126\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><ellipse cx=\"285\" cy=\"126\" rx=\"43\" ry=\"11\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"342\" y=\"80\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">扇形半徑</text><text x=\"342\" y=\"97\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">18 公分</text><text x=\"285\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">底面圓周長為圓柱的一半</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "126 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "114 公分",
        "trapCode": "U10_CYLINDER_CONE_NET_MIX"
      },
      {
        "key": "C",
        "text": "138 公分",
        "trapCode": "U10_CYLINDER_CONE_NET_MIX"
      },
      {
        "key": "D",
        "text": "102 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否理解「圓柱側面長方形的長＝底面圓周長」以及「圓錐側面扇形的弧長＝底面圓周長」兩大核心性質。",
      "steps": [
        {
          "type": "text",
          "text": "圓柱的側面展開後是一個長方形：長邊等於底面圓周長 24 公分，寬邊等於柱高 15 公分。長方形周長 ＝（24 ＋ 15）× 2 ＝ 78 公分。"
        },
        {
          "type": "text",
          "text": "圓錐的側面展開後是一個扇形：兩條直邊都是半徑 18 公分，弧長等於圓錐底面圓周長（24 ÷ 2 ＝ 12 公分）。扇形周長 ＝ 18 ＋ 18 ＋ 12 ＝ 48 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"26\" y=\"34\" width=\"160\" height=\"86\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"106\" y=\"25\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">長＝底圓周長 24 公分</text><text x=\"106\" y=\"82\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">圓柱側面周長 78 公分</text><text x=\"208\" y=\"79\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">高 15</text><path d=\"M335,28 L272,110 A80,80 0 0,0 398,110 Z\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">18</text><text x=\"388\" y=\"65\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">18</text><text x=\"335\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b91c1c\">弧長 ＝ 12 ➔ 扇形周長 48 公分</text></svg>",
          "caption": "圖解：圓柱側面長方形與圓錐側面扇形的展開邊長對應"
        },
        {
          "type": "eq",
          "expr": "（24 ＋ 15）× 2 ＋（18 ＋ 18 ＋ 24 ÷ 2）＝ 78 ＋ 48 ＝ 126"
        },
        {
          "type": "answer",
          "text": "答：126 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【漏算扇形弧長】算圓錐側面扇形周長時，只加了兩條半徑 18 ＋ 18 ＝ 36 公分，忘記加上底面圓周長弧長 12 公分，錯算成 78 ＋ 36 ＝ 114 公分。",
        "C": "【圓錐弧長誤直接套用圓柱圓周長】忘記圓錐底面圓周長只有圓柱的一半，直接用 24 公分當弧長，算成 78 ＋ 18 ＋ 18 ＋ 24 ＝ 138 公分。",
        "D": "【長方形周長少算 1 條長邊】計算圓柱側面長方形周長時只算了 1 條底面圓周長（24 ＋ 15 × 2 ＝ 54），錯算成 54 ＋ 48 ＝ 102 公分。"
      },
      "insight": "圓柱側面長方形的「長」、圓錐側面扇形的「弧長」，兩者都是拿來緊緊包住「底面圓形」的，所以長度必定等於各自底面圓的圓周長。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓柱側面長方形周長 ＝（底面圓周長 ＋ 柱高）× 2",
        "圓錐側面扇形周長 ＝ 半徑 × 2 ＋ 底面圓周長（弧長）"
      ],
      "conceptCompare": "【圓柱側面 vs 圓錐側面】圓柱上下兩個底面圓一樣大，側面展開是長方形；圓錐只有 1 個底面和 1 個頂點，側面展開必定是扇形（絕不是三角形）。",
      "examVariations": "常改問「展開圖剪開後，如果把圓柱長方形的長邊裁短一半，底面要跟著怎麼變」或反推圓柱高與扇形弧長差。"
    },
    "check": {
      "expr": "(24 + 15) * 2 + (18 + 18 + 24 / 2)",
      "expect": "126"
    }
  },
  {
    "id": "U10-S3-O-007",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-3",
    "sectionName": "柱體和錐體的展開圖",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L5 正方體 1-4-1 展開圖折合後重合邊判定",
    "category": "展開圖折合重合邊",
    "level": 5,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "skipOptionNumMatch": true,
    "question": "如下圖是一張正方體的 1－4－1 型展開圖（由 A、B、C、D、E、F 六個正方形組成）。沿著虛線折成正方體時，請問標示粗紅線的那一條邊（位於 A 格的左側），將會和圖中哪一個編號的藍邊完全重合在一起？",
    "svg": "<svg viewBox=\"0 0 380 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"22\" width=\"54\" height=\"54\" fill=\"#fef2f2\" stroke=\"#475569\" stroke-width=\"1.5\"/><rect x=\"45\" y=\"76\" width=\"54\" height=\"54\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><rect x=\"99\" y=\"76\" width=\"54\" height=\"54\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><rect x=\"153\" y=\"76\" width=\"54\" height=\"54\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><rect x=\"207\" y=\"76\" width=\"54\" height=\"54\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><rect x=\"207\" y=\"130\" width=\"54\" height=\"54\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><line x1=\"45\" y1=\"76\" x2=\"99\" y2=\"76\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"99\" y1=\"76\" x2=\"99\" y2=\"130\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"153\" y1=\"76\" x2=\"153\" y2=\"130\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"207\" y1=\"76\" x2=\"207\" y2=\"130\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"207\" y1=\"130\" x2=\"261\" y2=\"130\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"45\" y1=\"22\" x2=\"45\" y2=\"76\" stroke=\"#dc2626\" stroke-width=\"4\"/><line x1=\"99\" y1=\"76\" x2=\"153\" y2=\"76\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><line x1=\"153\" y1=\"76\" x2=\"207\" y2=\"76\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><line x1=\"207\" y1=\"76\" x2=\"261\" y2=\"76\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><line x1=\"207\" y1=\"130\" x2=\"207\" y2=\"184\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><text x=\"72\" y=\"54\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">A</text><text x=\"72\" y=\"108\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">B</text><text x=\"126\" y=\"108\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">C</text><text x=\"180\" y=\"108\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">D</text><text x=\"234\" y=\"108\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">E</text><text x=\"234\" y=\"162\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">F</text><text x=\"26\" y=\"53\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">紅邊</text><text x=\"126\" y=\"67\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">①</text><text x=\"180\" y=\"67\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">②</text><text x=\"234\" y=\"67\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">③</text><text x=\"193\" y=\"162\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">④</text><text x=\"320\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">沿虛線向內折起</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "第 1 號藍邊（C 格上緣）",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "B",
        "text": "第 2 號藍邊（D 格上緣）",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      },
      {
        "key": "C",
        "text": "第 3 號藍邊（E 格上緣）",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "第 4 號藍邊（F 格左側）",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生在 1－4－1 型展開圖折合成正方體時，追蹤四面捲繞與垂直蓋面之邊緣重合關係的空間能力。",
      "steps": [
        {
          "type": "text",
          "text": "把中間橫排的 B、C、D、E 四格捲成一圈側面（例如 C 當底面，B 當左側面，D 當右側面，E 折到正上方當頂面），那麼 A 格剛好折起來蓋住「後側開口」，F 格折起來蓋住「前側開口」。"
        },
        {
          "type": "text",
          "text": "從「B 格上邊與 A 格下邊的連接處」開始依序沿著後側開口邊緣對齊：A 格往右邊轉向貼上 C（① 號邊），A 格上邊貼上對面的 D（② 號邊），而 A 格左側的紅邊轉到最上方，恰好貼合在頂面 E 的上緣（③ 號邊）！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 440 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"25\" width=\"170\" height=\"115\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text x=\"115\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">捲成一圈的後側開口四邊</text><rect x=\"75\" y=\"62\" width=\"80\" height=\"60\" fill=\"#fef2f2\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"115\" y=\"96\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">A 蓋住後面</text><line x1=\"75\" y1=\"62\" x2=\"155\" y2=\"62\" stroke=\"#dc2626\" stroke-width=\"3.5\"/><text x=\"115\" y=\"58\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">頂面 E（③ 紅邊貼合）</text><text x=\"48\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#475569\">接 B</text><text x=\"180\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\">D（②）</text><text x=\"115\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\">底面 C（①）</text><rect x=\"225\" y=\"25\" width=\"195\" height=\"115\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/><text x=\"322\" y=\"52\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">A 格四條邊在後面順時針貼合：</text><text x=\"322\" y=\"76\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1e293b\">A 下邊 ➔ 接 B 格上緣</text><text x=\"322\" y=\"96\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1e293b\">A 右邊 ➔ 貼 ①（C 上緣）</text><text x=\"322\" y=\"116\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1e293b\">A 上邊 ➔ 貼 ②（D 上緣）</text><text x=\"322\" y=\"136\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">A 左邊 ➔ 貼 ③（E 上緣）</text></svg>",
          "caption": "圖解：將 B、C、D、E 捲成框體後，A 格順著連接角貼合的對應邊"
        },
        {
          "type": "eq",
          "expr": "A 左邊重合編號 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：第 3 號藍邊（E 格上緣）"
        }
      ],
      "distractorAnalysis": {
        "A": "【折合轉向相反】誤以為 A 格往內折時左邊會往右去貼合 C（① 號邊），其實貼合 ① 號邊的是 A 的右邊。",
        "B": "【只看平面對邊位置】誤把 A 的上邊與左邊混為一談，其實貼合 ② 號邊（D 格上緣）的是 A 的上邊。",
        "D": "【前後側面混淆】④ 號邊位於折起後的前側面 F 上，而 A 格蓋住的是後側面，兩條邊在正方體上完全不相接。"
      },
      "insight": "找折合重合邊有個必殺技：先從相連的轉角（A 與 B 接點）當起點，沿著展開圖外框兩條邊同時像拉鍊一樣一節一節往外拉合，就能精準對應哪兩條邊會貼在一起。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "拉鍊合邊法：從凹轉角（90 度內角）兩側鄰邊開始，依序每轉一次 90 度就對應重合一條邊",
        "1－4－1 型中，中間 4 格捲成圓筒，兩側的 A、F 分別蓋住後口與前口"
      ],
      "conceptCompare": "【合邊時的方向陷阱】A 的左邊與 E 的上邊看似在展開圖最遙遠的兩端，但因為中間 4 格折成一圈剛好首尾相接，最左與最右反而會貼在一起。",
      "examVariations": "若改在紅邊上畫一個箭頭，常加考「重合時兩邊箭頭方向是同向還是反向」，同樣可用拉鍊法一節節對齊方向。"
    },
    "check": {
      "expr": "3",
      "expect": "3"
    }
  },
  {
    "id": "U10-S4-O-008",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-4",
    "sectionName": "球與立體形體應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L6 球體切面半徑直徑變化與最大切面比較",
    "category": "球體切面半徑與直徑",
    "level": 6,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "木雕師傅拿來一顆半徑 15 公分的標準球體木塊，打算沿著平行方向切出甲、乙、丙、丁四個圓形切面：甲切面恰好通過球心；乙切面距離球心 6 公分；丙切面距離球心 9 公分，測得丙切面的半徑是 12 公分；丁切面距離球心 12 公分，測得丁切面的半徑是 9 公分。請問這四個切面之中，「最大切面的直徑」比「丙切面的直徑」多出幾公分？",
    "options": [
      {
        "key": "A",
        "text": "3 公分",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "B",
        "text": "12 公分",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "C",
        "text": "9 公分",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "D",
        "text": "6 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否理解「球體通過球心的切面最大（半徑等於球半徑）」以及切面離球心越遠圓越小的性質，並小心區分半徑與直徑。",
      "steps": [
        {
          "type": "text",
          "text": "球體不論從哪個方向平切，切面都是圓形；越靠近球心的切面越大，恰好「通過球心」的切面是最大的圓，它的半徑就等於原本球的半徑 15 公分，直徑為 15 × 2 ＝ 30 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 440 175\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"120\" cy=\"88\" r=\"68\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"52\" y1=\"88\" x2=\"188\" y2=\"88\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><circle cx=\"120\" cy=\"88\" r=\"3.5\" fill=\"#dc2626\"/><text x=\"120\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">甲（過球心・直徑 30）</text><line x1=\"66\" y1=\"48\" x2=\"174\" y2=\"48\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><text x=\"120\" y=\"42\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#15803d\">丙（距球心 9・直徑 24）</text><line x1=\"80\" y1=\"32\" x2=\"160\" y2=\"32\" stroke=\"#d97706\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><text x=\"315\" y=\"52\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">甲最大切面直徑：15 × 2 ＝ 30 公分</text><text x=\"315\" y=\"82\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">丙切面直徑：12 × 2 ＝ 24 公分</text><text x=\"315\" y=\"114\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">相差：30 － 24 ＝ 6 公分</text><text x=\"315\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" fill=\"#64748b\">離球心越遠，切面圓直徑越小</text></svg>",
          "caption": "圖解：通過球心的甲切面最大，偏離球心的切面依距離遞減"
        },
        {
          "type": "text",
          "text": "丙切面的半徑為 12 公分，因此丙切面的直徑 ＝ 12 × 2 ＝ 24 公分。兩者直徑相差 30 － 24 ＝ 6 公分。"
        },
        {
          "type": "eq",
          "expr": "15 × 2 － 12 × 2 ＝ 30 － 24 ＝ 6"
        },
        {
          "type": "answer",
          "text": "答：6 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【半徑與直徑混淆】直接把球的半徑 15 減去丙切面半徑 12 算出 3 公分，忘記題目問的是「直徑」差距，還必須乘以 2。",
        "B": "【拿錯比較的切面對象】誤以為拿最大切面直徑 30 公分去減丁切面直徑 18 公分，錯算出 30 － 18 ＝ 12 公分。",
        "C": "【切面距球心距離當直徑差】直接拿丙切面距離球心的 9 公分當作差距答案，未將半徑換算為直徑再相減。"
      },
      "insight": "題目同時給出乙、丙、丁多個干擾數據時，先畫出球體側視切線圖，找出過球心的最大直徑，再小心核對題目問的是半徑還是直徑。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "球體最大切面必「通過球心」，該切面半徑 ＝ 球半徑，直徑 ＝ 球直徑",
        "切面離球心距離越遠，切面圓就越小；距離相等時，切面圓大小完全相同"
      ],
      "conceptCompare": "【直徑 vs 半徑】切面題最常見的陷阱就是題幹前面給「半徑」，最後問「直徑」或「周長」差距，計算前務必先圈出關鍵字。",
      "examVariations": "段考常考「從哪一刀切下去面積最大」或「在距離球心一樣遠的上下兩端各切一刀，兩個切面誰比較大」（一樣大）。"
    },
    "check": {
      "expr": "15 * 2 - 12 * 2",
      "expect": "6"
    }
  },
  {
    "id": "U10-S4-O-009",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-4",
    "sectionName": "球與立體形體應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L6 長方體十字緞帶捆綁與剩餘長度逆推蝴蝶結",
    "category": "長方體緞帶捆綁逆推",
    "level": 6,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "蛋糕店用一條全長 250 公分的金色緞帶包裝一個長 28 公分、寬 20 公分、高 12 公分的長方體蛋糕盒。店員先沿著「長與高」的方向繞盒子一圈，再沿著「寬與高」的方向垂直繞盒子一圈（頂面和底面都是十字交叉），接著在頂面中央打一個漂亮的蝴蝶結，最後把多出來的緞帶剪掉。測量被剪掉的剩餘緞帶長 34 公分，請問這個「蝴蝶結」本身用掉了幾公分的緞帶？",
    "options": [
      {
        "key": "A",
        "text": "96 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      },
      {
        "key": "B",
        "text": "72 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "106 公分",
        "trapCode": "U10_RIBBON_FORGET_KNOT"
      },
      {
        "key": "D",
        "text": "32 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否精確計算長方體十字捆綁所經過的「2 長、2 寬、4 高」，並結合剩餘緞帶逆推蝴蝶結長度。",
      "steps": [
        {
          "type": "text",
          "text": "先算繞盒子本身的緞帶長度：沿長與高繞一圈需要 2 條長和 2 條高；再沿寬與高垂直繞一圈需要 2 條寬和 2 條高。合起來一共貼合了 2 條長、2 條寬、4 條高。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"48\" width=\"120\" height=\"66\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><polygon points=\"25,48 60,22 180,22 145,48\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><polygon points=\"145,48 180,22 180,88 145,114\" fill=\"#fcd34d\" stroke=\"#d97706\" stroke-width=\"1.5\"/><line x1=\"85\" y1=\"48\" x2=\"85\" y2=\"114\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"85\" y1=\"48\" x2=\"120\" y2=\"22\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"42\" y1=\"35\" x2=\"162\" y2=\"35\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"162\" y1=\"35\" x2=\"162\" y2=\"101\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"102\" y=\"138\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">十字繞盒：2 長 ＋ 2 寬 ＋ 4 高</text><text x=\"325\" y=\"45\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">繞盒長：28×2 ＋ 20×2 ＋ 12×4 ＝ 144 公分</text><text x=\"325\" y=\"80\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">實際用掉：250 － 34 ＝ 216 公分</text><text x=\"325\" y=\"115\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">蝴蝶結：216 － 144 ＝ 72 公分</text><text x=\"325\" y=\"148\" text-anchor=\"middle\" font-size=\"11\" fill=\"#64748b\">不可忘記減去被剪掉的 34 公分</text></svg>",
          "caption": "圖解：十字捆綁經過 2 長 2 寬 4 高與逆推蝴蝶結算式"
        },
        {
          "type": "eq",
          "expr": "28 × 2 ＋ 20 × 2 ＋ 12 × 4 ＝ 56 ＋ 40 ＋ 48 ＝ 144"
        },
        {
          "type": "text",
          "text": "整條 250 公分剪掉剩餘的 34 公分，代表總共用掉 250 － 34 ＝ 216 公分。再扣掉繞盒的 144 公分，就得到蝴蝶結長度。"
        },
        {
          "type": "eq",
          "expr": "（250 － 34）－ 144 ＝ 216 － 144 ＝ 72"
        },
        {
          "type": "answer",
          "text": "答：72 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【側面高只算 2 條】計算繞盒長度時少算一半的高度（只算 12 × 2 ＝ 24），算出繞盒 120 公分，進而錯算蝴蝶結為 216 － 120 ＝ 96 公分。",
        "C": "【漏算剪掉的剩餘緞帶】忘記先從全長 250 公分減去剩餘剪掉的 34 公分，直接用 250 － 144 ＝ 106 公分。",
        "D": "【寬邊多算成 4 條】誤以為寬也要跟高一樣算 4 條（56 ＋ 80 ＋ 48 ＝ 184），算出 216 － 184 ＝ 32 公分。"
      },
      "insight": "長方體十字捆綁時，因為兩個方向都會經過側面往上下走，所以「高」會經過四個側面共 4 條，而「長」與「寬」各只在頂面和底面走 2 條。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "長方體單層十字捆綁長度 ＝ 長 × 2 ＋ 寬 × 2 ＋ 高 × 4 ＋ 打結長度",
        "打結長度 ＝ 原有緞帶長 － 剩餘剪掉長 － 繞盒所需長"
      ],
      "conceptCompare": "【高 × 4 vs 全部 × 4】很多同學會把長、寬、高全部乘以 4，那是做長方體「12 條稜邊骨架」的公式，不是十字捆綁緞帶公式。",
      "examVariations": "若題目改成「正方體禮盒十字捆綁」，因為長＝寬＝高，一共剛好走 2＋2＋4 ＝ 8 條邊長，再加上打結長。"
    },
    "check": {
      "expr": "(250 - 34) - (28 * 2 + 20 * 2 + 12 * 4)",
      "expect": "72"
    }
  },
  {
    "id": "U10-S4-O-010",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-4",
    "sectionName": "球與立體形體應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L6 長方體箱裝彈力球空間排法最大顆數",
    "category": "長方盒裝球最大顆數",
    "level": 6,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "玩具工廠要把一批「半徑 3 公分」的球形彈力球，全部整齊排進一個內部尺寸為「長 35 公分、寬 26 公分、高 19 公分」的長方體紙箱裡（彈力球不可擠壓變形，也不能超出箱口，且每層都對齊格子方向平放）。請問這個紙箱最多可以裝進幾顆彈力球？",
    "options": [
      {
        "key": "A",
        "text": "528 顆",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "B",
        "text": "80 顆",
        "trapCode": "U10_PACK_VOL_INSTEAD_FIT"
      },
      {
        "key": "C",
        "text": "60 顆",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "72 顆",
        "trapCode": "U10_PACK_VOL_INSTEAD_FIT"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否理解「裝球必須先將半徑換成直徑，再依長、寬、高三維分別除以直徑並無條件捨去」，避免落入總體積除法誤區。",
      "steps": [
        {
          "type": "text",
          "text": "每一顆彈力球都必須佔據長、寬、高各一個「球直徑」的方格空間。因為半徑是 3 公分，所以直徑 ＝ 3 × 2 ＝ 6 公分。"
        },
        {
          "type": "text",
          "text": "分別計算長、寬、高三個方向各自能放下幾顆球（餘數放不下就捨去）：長 35 ÷ 6 ＝ 5 顆餘 5 公分；寬 26 ÷ 6 ＝ 4 顆餘 2 公分；高 19 ÷ 6 ＝ 3 層餘 1 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"25\" width=\"210\" height=\"125\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><rect x=\"20\" y=\"25\" width=\"175\" height=\"110\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><circle cx=\"38\" cy=\"42\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"72\" cy=\"42\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"106\" cy=\"42\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"140\" cy=\"42\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"174\" cy=\"42\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"38\" cy=\"70\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"72\" cy=\"70\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"106\" cy=\"70\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"140\" cy=\"70\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"174\" cy=\"70\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"38\" cy=\"98\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"72\" cy=\"98\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"106\" cy=\"98\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"140\" cy=\"98\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"174\" cy=\"98\" r=\"13\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"38\" cy=\"125\" r=\"11\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"72\" cy=\"125\" r=\"11\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"106\" cy=\"125\" r=\"11\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"140\" cy=\"125\" r=\"11\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><circle cx=\"174\" cy=\"125\" r=\"11\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><text x=\"212\" y=\"85\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">剩 5</text><text x=\"345\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">球直徑：3 × 2 ＝ 6 公分</text><text x=\"345\" y=\"76\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1d4ed8\">長：35 ÷ 6 ＝ 5 顆（餘 5 捨去）</text><text x=\"345\" y=\"100\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1d4ed8\">寬：26 ÷ 6 ＝ 4 顆（餘 2 捨去）</text><text x=\"345\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1d4ed8\">高：19 ÷ 6 ＝ 3 層（餘 1 捨去）</text><text x=\"345\" y=\"152\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">最多裝：5 × 4 × 3 ＝ 60 顆</text></svg>",
          "caption": "圖解：底層每排 5 顆、共 4 排，剩餘空隙皆小於直徑 6 公分"
        },
        {
          "type": "eq",
          "expr": "5 × 4 × 3 ＝ 60"
        },
        {
          "type": "answer",
          "text": "答：60 顆"
        }
      ],
      "distractorAnalysis": {
        "B": "【誤用總體積相除】直接用箱子內部大小 35 × 26 × 19 ＝ 17290 除以單顆空間 6 × 6 × 6 ＝ 216，錯算出 80 顆（實際邊緣剩下的零碎空間不能拼成整顆球）。",
        "D": "【餘數錯誤進位】看到長方向 35 ÷ 6 ＝ 5 餘 5，誤把餘下的 5 公分進位多算 1 顆，變成 6 × 4 × 3 ＝ 72 顆。",
        "A": "【半徑直接當成直徑】沒注意題目給的是「半徑 3 公分」，直接用 3 去分別除 35、26、19，錯算成 11 × 8 × 6 ＝ 528 顆。"
      },
      "insight": "裝盒問題絕對不可以用「大空間總乘積 ÷ 小空間乘積」來算，因為球體無法切碎重組，只要一邊餘數小於直徑就一顆也塞不進去。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "裝球最大顆數 ＝（箱長 ÷ 球直徑取整數）×（箱寬 ÷ 球直徑取整數）×（箱高 ÷ 球直徑取整數）",
        "球直徑 ＝ 球半徑 × 2"
      ],
      "conceptCompare": "【裝球 vs 裝長方體】若裝的是一般長方體積木，不同擺放方向會得出不同顆數；若裝的是正球體，三個方向佔寬都是「直徑」，只需要小心無條件捨去餘數即可。",
      "examVariations": "常改問「把箱子改造成至少多出幾公分才能再多裝 1 排」，或比較兩個箱子誰能裝進比較多顆。"
    },
    "check": {
      "expr": "5 * 4 * 3",
      "expect": "60"
    }
  },
  {
    "id": "U10-RV-O-011",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L7 正方體切去多個角後頂點數與邊數變化",
    "category": "切角後頂點與邊數變化",
    "level": 7,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小軒拿來一塊實心正方體起司（原本有 8 個頂點、12 條邊、6 個面）。他用刀子在正方體的其中 5 個頂點角落處，分別斜切掉一個小三角錐，而且切出的 5 個三角形切面彼此完全沒有碰到或重疊。請問切完這 5 個角後，這塊起司剩下的「總頂點數」加上「總邊數」，合起來一共有多少？",
    "options": [
      {
        "key": "A",
        "text": "45",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "35",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "C",
        "text": "50",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "40",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生觀察正方體切去一角（形成三角形切面）時，原來 1 個頂點被替換成 3 個新頂點，且同時多出 3 條新邊的立體結構變化。",
      "steps": [
        {
          "type": "text",
          "text": "先看只切去「1 個角」時的變化：原本角落的 1 個舊頂點不見了，切面上出現一個三角形，多出 3 個新頂點，所以頂點數淨增加 3 － 1 ＝ 2 個。"
        },
        {
          "type": "text",
          "text": "同時看邊的變化：原本相連的 3 條邊依然保留著（只是變短），切面三角形則直接多出 3 條新邊，所以邊數淨增加 3 條。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"42\" width=\"95\" height=\"95\" fill=\"#fef9c3\" stroke=\"#ca8a04\" stroke-width=\"2\"/><polygon points=\"25,42 58,18 153,18 120,42\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><polygon points=\"120,42 153,18 153,113 120,137\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"2\"/><polygon points=\"95,42 120,25 120,66\" fill=\"#fecaca\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><circle cx=\"120\" cy=\"42\" r=\"4\" fill=\"#64748b\"/><line x1=\"95\" y1=\"42\" x2=\"120\" y2=\"42\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><line x1=\"120\" y1=\"25\" x2=\"120\" y2=\"42\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><line x1=\"120\" y1=\"66\" x2=\"120\" y2=\"42\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><circle cx=\"95\" cy=\"42\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"120\" cy=\"25\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"120\" cy=\"66\" r=\"4\" fill=\"#2563eb\"/><text x=\"122\" y=\"158\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">切 1 角：－1 舊角，＋3 藍點，＋3 紅邊</text><text x=\"315\" y=\"45\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">每切 1 角：頂點 ＋2、邊 ＋3</text><text x=\"315\" y=\"78\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1d4ed8\">切 5 角後新頂點：8 ＋ 5 × 2 ＝ 18 個</text><text x=\"315\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" fill=\"#15803d\">切 5 角後新邊數：12 ＋ 5 × 3 ＝ 27 條</text><text x=\"315\" y=\"142\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">總和：18 ＋ 27 ＝ 45</text></svg>",
          "caption": "圖解：正方體切去一角前後的頂點與邊數增減對照"
        },
        {
          "type": "eq",
          "expr": "（8 ＋ 5 × 2）＋（12 ＋ 5 × 3）＝ 18 ＋ 27 ＝ 45"
        },
        {
          "type": "answer",
          "text": "答：45"
        }
      ],
      "distractorAnalysis": {
        "B": "【只算三角形多出的 1 條斜邊】誤以為切一角邊數只增加 1 條（12 ＋ 5 ＝ 17），錯算成 18 ＋ 17 ＝ 35。",
        "D": "【頂點與邊都只加 2】以為新邊數也跟頂點一樣每個角只多 2 條（12 ＋ 10 ＝ 22），錯算成 18 ＋ 22 ＝ 40。",
        "C": "【忘記扣除消失的舊頂點】以為切去 1 角只會多出 3 個頂點而沒扣掉被切走的原本 1 個頂點，算成 8 ＋ 5 × 3 ＋ 27 ＝ 50。"
      },
      "insight": "切去獨立不重疊的小角時，「1 換 3」是頂點變多的關鍵（少 1 個舊角換來 3 個新角，淨增加 2 個頂點），而新出現的三角形切面則直接多了 3 條邊與 1 個面。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "三條邊交會的頂點切掉 1 個不重疊小角：頂點 ＋2、邊 ＋3、面 ＋1",
        "若正方體 8 個角全切（不重疊）：頂點 24 個、邊 36 條、面 14 個"
      ],
      "conceptCompare": "【只切一角 vs 切過原邊中點且切面相交】若兩刀切到了原本同一條邊的「同一點」，兩個新頂點會合併成 1 個，總頂點與邊數就會比獨立切法少。",
      "examVariations": "進階題常考「把正方體的 8 個角切到每條邊的中點恰好相接（變成截半立方體）」，這時原邊縮成 0，每點合併，面數一樣變 14 個，但頂點只剩 12 個。"
    },
    "check": {
      "expr": "(8 + 5 * 2) + (12 + 5 * 3)",
      "expect": "45"
    }
  },
  {
    "id": "U10-RV-O-012",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L7 2-2-2 階梯展開圖折合標準骰子與三次翻滾追蹤",
    "category": "展開圖對面與立體翻滾",
    "level": 7,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如下圖是一張「2－2－2 階梯型」標準骰子展開圖（折成正方體後，每一組相對兩面的點數相加都等於 7），目前僅標出數字 1、4、5，而 A、B、C 三面點數留白。折成骰子後，將它放在桌面上使「A 面朝上」、「1 面朝前」、「4 面朝左」。接著依序翻滾三次：先「向前翻滾 1 格」，再「向左翻滾 1 格」，最後「向後翻滾 1 格」。請問這三次翻滾完成後，每次「朝上那一面」的點數加起來共有幾點？",
    "svg": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"55\" y=\"20\" width=\"54\" height=\"50\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2\"/><rect x=\"109\" y=\"20\" width=\"54\" height=\"50\" fill=\"#eff6ff\" stroke=\"#1e293b\" stroke-width=\"2\"/><rect x=\"109\" y=\"70\" width=\"54\" height=\"50\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2\"/><rect x=\"163\" y=\"70\" width=\"54\" height=\"50\" fill=\"#eff6ff\" stroke=\"#1e293b\" stroke-width=\"2\"/><rect x=\"163\" y=\"120\" width=\"54\" height=\"50\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2\"/><rect x=\"217\" y=\"120\" width=\"54\" height=\"50\" fill=\"#eff6ff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"82\" y=\"52\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"#1e293b\">4</text><text x=\"136\" y=\"52\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"#dc2626\">A</text><text x=\"136\" y=\"102\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"#1e293b\">1</text><text x=\"190\" y=\"102\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"#dc2626\">B</text><text x=\"190\" y=\"152\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"#1e293b\">5</text><text x=\"244\" y=\"152\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"#dc2626\">C</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "10 點",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "B",
        "text": "15 點",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      },
      {
        "key": "C",
        "text": "11 點",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "9 點",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "結合 2－2－2 階梯展開圖的相對面推理，以及三維立體方塊連續翻滾時六個方位的面替換追蹤能力。",
      "steps": [
        {
          "type": "text",
          "text": "先依「2－2－2 階梯型」找相對面（Z 字型兩端）：4 與 B 相對，A 與 5 相對，1 與 C 相對。因為標準骰子對面和為 7，所以 B ＝ 7 － 4 ＝ 3，A ＝ 7 － 5 ＝ 2，C ＝ 7 － 1 ＝ 6。"
        },
        {
          "type": "text",
          "text": "初始擺放：上＝A(2)、下＝5、前＝1、後＝C(6)、左＝4、右＝B(3)。接著逐步追蹤三次翻滾後每次「朝上」的點數："
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"16\" width=\"104\" height=\"140\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"64\" y=\"38\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">初始位置</text><text x=\"64\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" fill=\"#334155\">上 2　下 5</text><text x=\"64\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" fill=\"#334155\">前 1　後 6</text><text x=\"64\" y=\"119\" text-anchor=\"middle\" font-size=\"11\" fill=\"#334155\">左 4　右 3</text><rect x=\"124\" y=\"16\" width=\"104\" height=\"140\" rx=\"6\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><text x=\"176\" y=\"38\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">1.向前翻 1 格</text><text x=\"176\" y=\"65\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">上 6（原後）</text><text x=\"176\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" fill=\"#334155\">前 2　後 5</text><text x=\"176\" y=\"119\" text-anchor=\"middle\" font-size=\"11\" fill=\"#334155\">左 4　右 3</text><rect x=\"236\" y=\"16\" width=\"104\" height=\"140\" rx=\"6\" fill=\"#f0fdf4\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><text x=\"288\" y=\"38\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">2.向左翻 1 格</text><text x=\"288\" y=\"65\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">上 3（原右）</text><text x=\"288\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" fill=\"#334155\">前 2　後 5</text><text x=\"288\" y=\"119\" text-anchor=\"middle\" font-size=\"11\" fill=\"#334155\">左 6　右 1</text><rect x=\"348\" y=\"16\" width=\"100\" height=\"140\" rx=\"6\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"398\" y=\"38\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">3.向後翻 1 格</text><text x=\"398\" y=\"65\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">上 2（原前）</text><text x=\"398\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" fill=\"#334155\">前 4　後 3</text><text x=\"398\" y=\"119\" text-anchor=\"middle\" font-size=\"11\" fill=\"#334155\">左 6　右 1</text><text x=\"230\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">三次朝上點數：6 ＋ 3 ＋ 2 ＝ 11 點</text></svg>",
          "caption": "圖解：三次翻滾後六個方位點數變化與朝上點數記錄表"
        },
        {
          "type": "eq",
          "expr": "（7 － 1）＋（7 － 4）＋（7 － 5）＝ 6 ＋ 3 ＋ 2 ＝ 11"
        },
        {
          "type": "answer",
          "text": "答：11 點"
        }
      ],
      "distractorAnalysis": {
        "A": "【展開圖相對面判錯】把 2－2－2 階梯型的對面抓錯，誤認 4 對 5、1 對 A，進而推錯 A、B、C 點數，算出總和為 10 點。",
        "B": "【翻滾方向弄反】往前翻當成往後翻（或向左翻時誤把原左面 4 翻到上方），算出 6 ＋ 4 ＋ 5 ＝ 15 點。",
        "D": "【誤把每次朝下點數相加】求出了正確翻滾方向，卻把「朝下」的 1 ＋ 4 ＋ 5 或誤算成 1 ＋ 3 ＋ 5 ＝ 9 點。"
      },
      "insight": "正方體翻滾時，有兩個方位是不動的（向前／向後翻時，左、右不動；向左／向右翻時，前、後不動），只要用六宮格記錄「上、下、前、後、左、右」就絕對不會錯。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "2－2－2 階梯型展開圖永遠是每跨兩格（走 Z 字）的兩面相對",
        "向前翻時，新上＝原後、新前＝原上；向左翻時，新上＝原右、新左＝原上"
      ],
      "conceptCompare": "【展開圖對面 vs 實際翻滾朝向】翻滾題常誤以為「向前翻會讓前面翻上來」，其實向前傾倒時是「原本在後面的那一面」轉到上方。",
      "examVariations": "段考常設計 3×3 棋盤路徑讓骰子翻滾 4～5 格，問最後到達終點時朝上的點數是幾點。"
    },
    "check": {
      "expr": "(7 - 1) + (7 - 4) + (7 - 5)",
      "expect": "11"
    }
  },
  {
    "id": "U10-RV-O-013",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L7 圓柱餅乾盒十字緞帶打結與側面水平繞圈總長",
    "category": "圓柱緞帶與展開圖綜合",
    "level": 7,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "禮物店要包裝一個圓柱形餅乾鐵盒，已知鐵盒底面圓的直徑是 18 公分，圓周長是 56.5 公分，鐵盒的高是 10 公分。店員先拿第一條金色緞帶，從頂面圓心十字交叉繞過鐵盒（頂面和底面各形成兩條交叉的直徑，側面垂直貼合 4 條高），並在頂面圓心打了 1 個用掉 26 公分的蝴蝶結；接著拿第二條紫色緞帶，沿著鐵盒側面的正中央「水平繞一圈」貼緊黏合（沒有打結，但接頭重疊處多用了 3 公分）。請問這兩條緞帶一共用掉了幾公分？",
    "options": [
      {
        "key": "A",
        "text": "171.5 公分",
        "trapCode": "U10_RIBBON_FORGET_KNOT"
      },
      {
        "key": "B",
        "text": "197.5 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "177.5 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      },
      {
        "key": "D",
        "text": "161.5 公分",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生區分圓柱體「十字縱向捆綁（走直徑與柱高）」與「水平橫向繞圈（走底面圓周長）」兩種路徑的能力。",
      "steps": [
        {
          "type": "text",
          "text": "先算第一條金色十字緞帶：頂面交叉兩條直徑（18 × 2 ＝ 36 公分），底面交叉兩條直徑（18 × 2 ＝ 36 公分），側面垂直貼合 4 條高（10 × 4 ＝ 40 公分），加上打結 26 公分，合計 36 ＋ 36 ＋ 40 ＋ 26 ＝ 138 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"105\" cy=\"42\" rx=\"52\" ry=\"16\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><path d=\"M53,42 L53,122 A52,16 0 0,0 157,122 L157,42\" fill=\"#fffbeb\" stroke=\"#d97706\" stroke-width=\"2\"/><ellipse cx=\"105\" cy=\"122\" rx=\"52\" ry=\"16\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"53\" y1=\"42\" x2=\"157\" y2=\"42\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><line x1=\"82\" y1=\"27\" x2=\"128\" y2=\"57\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><line x1=\"53\" y1=\"42\" x2=\"53\" y2=\"122\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><line x1=\"157\" y1=\"42\" x2=\"157\" y2=\"122\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><path d=\"M53,82 A52,16 0 0,0 157,82\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"3\"/><text x=\"105\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">紅：十字（4 直徑＋4 高＋結）</text><text x=\"318\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">金色：18 × 4 ＋ 10 × 4 ＋ 26 ＝ 138 公分</text><text x=\"318\" y=\"82\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#7c3aed\">紫色（水平圓周＋重疊）：56.5 ＋ 3 ＝ 59.5 公分</text><text x=\"318\" y=\"118\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">總長：138 ＋ 59.5 ＝ 197.5 公分</text><text x=\"318\" y=\"148\" text-anchor=\"middle\" font-size=\"11\" fill=\"#64748b\">水平繞一圈剛好等於側面展開長方形的長</text></svg>",
          "caption": "圖解：圓柱十字繞法（直徑與高）及側面水平環繞（圓周長）對照"
        },
        {
          "type": "text",
          "text": "再算第二條紫色水平緞帶：沿側面水平繞一圈的長度就等於側面展開圖長方形的長（也就是底面圓周長 56.5 公分），再加上接頭重疊 3 公分，共 56.5 ＋ 3 ＝ 59.5 公分。"
        },
        {
          "type": "eq",
          "expr": "（18 × 4 ＋ 10 × 4 ＋ 26）＋（56.5 ＋ 3）＝ 138 ＋ 59.5 ＝ 197.5"
        },
        {
          "type": "answer",
          "text": "答：197.5 公分"
        }
      ],
      "distractorAnalysis": {
        "C": "【側面垂直高少算一半】只算了左右看得到的 2 條高（10 × 2 ＝ 20），漏掉前後兩側面的高，算成 177.5 公分。",
        "D": "【把直徑當成半徑計算】頂面和底面誤算成 9 × 4 ＝ 36 公分（把直徑 18 除以 2 變成半徑來算），少算了 36 公分。",
        "A": "【忘記加上蝴蝶結】算完 4 條直徑、4 條高和水平一圈後，漏掉頂面打結的 26 公分，算出 171.5 公分。"
      },
      "insight": "圓柱體十字捆綁時，頂面和底面走的是「4 條直徑」，側面走的是「4 條柱高」；只有橫著繞側面腰身時，才走「底面圓周長」。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓柱單層十字捆綁 ＝ 底面直徑 × 4 ＋ 柱高 × 4 ＋ 打結長",
        "圓柱側面水平環繞 ＝ 底面圓周長 ＋ 接頭重疊長"
      ],
      "conceptCompare": "【長方體十字 vs 圓柱體十字】長方體頂底面走「2 長 ＋ 2 寬」；圓柱體兩個方向都是圓直徑，所以頂底面共走「4 條直徑」，側面一樣都走「4 條高」。",
      "examVariations": "常改問「把兩盒一樣高的圓柱鐵盒並排綁在一起，側面水平繞一圈變成多長」，此時繞法會變成 2 個半圓弧（合為 1 個圓周）加上中間 2 段直徑。"
    },
    "check": {
      "expr": "(18 * 4 + 10 * 4 + 26) + (56.5 + 3)",
      "expect": "197.5"
    }
  },
  {
    "id": "U10-RV-O-014",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L8 長方體雙井字雙繞緞帶含打結逆推盒子高度",
    "category": "長方體雙繞緞帶逆推",
    "level": 8,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "烘焙坊包裝一個長方體禮盒，已知盒子的長是 32 公分、寬是 24 公分。店員採用「雙井字捆綁法」：先沿著「長與高」的方向平繞盒子 2 圈，再沿著「寬與高」的方向垂直平繞盒子 2 圈（頂面和底面都會看到一個井字形交叉），最後在頂面加上一個用掉 40 公分的雙層蝴蝶結。結果整條長 392 公分的緞帶剛剛好全部用完，沒有任何剩餘。請問這個長方體禮盒的「高」是幾公分？",
    "options": [
      {
        "key": "A",
        "text": "21 公分",
        "trapCode": "U10_RIBBON_FORGET_KNOT"
      },
      {
        "key": "B",
        "text": "32 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      },
      {
        "key": "C",
        "text": "16 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "30 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否能推導「雙井字（每個方向繞 2 圈）」所經過的長、寬、高條數（4 長、4 寬、8 高），並從總緞帶長反推高度。",
      "steps": [
        {
          "type": "text",
          "text": "每繞一圈「長與高」需要 2 條長與 2 條高，繞 2 圈就是 4 條長與 4 條高；同樣地，繞 2 圈「寬與高」需要 4 條寬與 4 條高。合起來一共需要 4 條長、4 條寬、8 條高，以及 40 公分的蝴蝶結。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"24\" width=\"170\" height=\"118\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"24\" y1=\"58\" x2=\"194\" y2=\"58\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"24\" y1=\"106\" x2=\"194\" y2=\"106\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"74\" y1=\"24\" x2=\"74\" y2=\"142\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"144\" y1=\"24\" x2=\"144\" y2=\"142\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"118\" y=\"160\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">頂面：2 長 2 寬（合底面共 4 長 4 寬）</text><text x=\"330\" y=\"42\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">雙井字繞盒：4 長 ＋ 4 寬 ＋ 8 高</text><text x=\"330\" y=\"72\" text-anchor=\"middle\" font-size=\"11\" fill=\"#1e293b\">4 長 ＋ 4 寬 ＝ 128 ＋ 96 ＝ 224 公分</text><text x=\"330\" y=\"102\" text-anchor=\"middle\" font-size=\"12\" fill=\"#15803d\">8 條高總長：392 － 40 － 224 ＝ 128 公分</text><text x=\"330\" y=\"135\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">盒高：128 ÷ 8 ＝ 16 公分</text></svg>",
          "caption": "圖解：雙井字頂面俯視路徑與 8 條高反推計算"
        },
        {
          "type": "text",
          "text": "先把 4 條長和 4 條寬算出來：32 × 4 ＋ 24 × 4 ＝ 128 ＋ 96 ＝ 224 公分。從總長 392 公分扣掉蝴蝶結 40 公分與 224 公分，剩下的 128 公分就是 8 條高的總長。"
        },
        {
          "type": "eq",
          "expr": "（392 － 40 － 32 × 4 － 24 × 4）÷ 8 ＝ 128 ÷ 8 ＝ 16"
        },
        {
          "type": "answer",
          "text": "答：16 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記扣除蝴蝶結】直接用 392 － 224 ＝ 168 公分再除以 8，算出 21 公分。",
        "B": "【高只算了 4 條而不是 8 條】雙井字每個方向繞了 2 圈，高應該會走 8 條；若只除以 4，就會錯算成 128 ÷ 4 ＝ 32 公分。",
        "D": "【長和寬各少算一半圈數】誤以為雙井字長與寬仍然各只走 2 條（32 × 2 ＋ 24 × 2 ＝ 112），錯算成（392 － 40 － 112）÷ 8 ＝ 30 公分。"
      },
      "insight": "遇到多圈捆綁題，先算「單繞 1 圈十字」需要 2 長＋2 寬＋4 高，如果是「雙井字」代表繞了兩倍圈數，長寬高條數通通乘以 2（4 長＋4 寬＋8 高），但是蝴蝶結只打 1 個不用乘以 2。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "長方體雙井字捆綁總長 ＝（長 × 4 ＋ 寬 × 4 ＋ 高 × 8）＋ 打結長",
        "也可以想成：（單十字繞盒長 × 2）＋ 打結長"
      ],
      "conceptCompare": "【圈數倍增 vs 打結不倍增】把原本的十字捆綁再多繞一組變成井字時，繞盒部分會變成兩倍，但頂面的蝴蝶結仍然只有 1 個，逆推時別把蝴蝶結也除以 2。",
      "examVariations": "可能改成「長的方向繞 2 圈，寬的方向只繞 1 圈（共 4 長、2 寬、6 高）」，解題時要分別數清楚兩個方向的圈數。"
    },
    "check": {
      "expr": "(392 - 40 - 32 * 4 - 24 * 4) / 8",
      "expect": "16"
    }
  },
  {
    "id": "U10-RV-O-015",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L8 雙長方木箱裝球實際顆數與體積除法誤差比較",
    "category": "長方盒裝球與體積誤區",
    "level": 8,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "倉庫有甲、乙兩個長方體木箱：甲箱內部「長 32 公分、寬 28 公分、高 20 公分」，乙箱內部「長 40 公分、寬 44 公分、高 16 公分」。現在要將一批「直徑 8 公分」的保麗龍球緊貼邊界整齊裝進這兩個木箱（不可壓縮，也不能突出箱口）。然而小傑誤以為每一顆球只需佔用「8 × 8 × 8 ＝ 512」的空間，便直接把兩箱各自的「長 × 寬 × 高」加總後除以 512 來估算總顆數。請問小傑用錯誤方法算出的顆數，比這兩個木箱「實際最多一共可裝進的顆數」多出了幾顆？",
    "options": [
      {
        "key": "A",
        "text": "4 顆",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "11 顆",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "C",
        "text": "74 顆",
        "trapCode": "U10_PACK_VOL_INSTEAD_FIT"
      },
      {
        "key": "D",
        "text": "16 顆",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "深刻檢驗學生辨別「空間排列無條件捨去（邊長逐一除以直徑）」與「空間總乘積相除（體積除法陷阱）」之間的真實差距。",
      "steps": [
        {
          "type": "text",
          "text": "先算小傑的錯誤算法：甲箱乘積 ＝ 32 × 28 × 20 ＝ 17920，乙箱乘積 ＝ 40 × 44 × 16 ＝ 28160，兩箱合計 17920 ＋ 28160 ＝ 46080，除以 512 得 46080 ÷ 512 ＝ 90 顆。"
        },
        {
          "type": "text",
          "text": "再算實際排列的最大顆數（每維除以直徑 8 公分並捨去餘數）：甲箱為（32÷8）×（28÷8 取整 3）×（20÷8 取整 2）＝ 4 × 3 × 2 ＝ 24 顆；乙箱為（40÷8）×（44÷8 取整 5）×（16÷8）＝ 5 × 5 × 2 ＝ 50 顆。實際合計 24 ＋ 50 ＝ 74 顆。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"24\" width=\"130\" height=\"106\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><rect x=\"20\" y=\"24\" width=\"130\" height=\"88\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><text x=\"85\" y=\"62\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">甲箱底層 4×3＝12</text><text x=\"85\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#1e293b\">共 2 層（高剩 4 捨去）</text><text x=\"85\" y=\"124\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">寬剩 4 公分塞不下</text><text x=\"85\" y=\"152\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">甲實際：24 顆（誤算 35）</text><rect x=\"185\" y=\"24\" width=\"140\" height=\"106\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><rect x=\"185\" y=\"24\" width=\"140\" height=\"92\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><text x=\"255\" y=\"62\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">乙箱底層 5×5＝25</text><text x=\"255\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#1e293b\">高 16÷8 ＝ 2 層</text><text x=\"255\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">寬剩 4 公分塞不下</text><text x=\"255\" y=\"152\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">乙實際：50 顆（誤算 55）</text><text x=\"398\" y=\"68\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">誤算：90 顆</text><text x=\"398\" y=\"96\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">實際：74 顆</text><text x=\"398\" y=\"128\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">多出 16 顆</text></svg>",
          "caption": "圖解：甲、乙兩箱的實際排列限制與總乘積誤差比較"
        },
        {
          "type": "eq",
          "expr": "（32 × 28 × 20 ＋ 40 × 44 × 16）÷（8 × 8 × 8）－（4 × 3 × 2 ＋ 5 × 5 × 2）＝ 90 － 74 ＝ 16"
        },
        {
          "type": "answer",
          "text": "答：16 顆"
        }
      ],
      "distractorAnalysis": {
        "A": "【除不盡餘數誤進位】計算甲箱時把 28 ÷ 8 ＝ 3.5 與 20 ÷ 8 ＝ 2.5 四捨五入進位成 4 顆與 3 層（4 × 4 × 3 ＝ 48），與實際差距搞亂或算成 90 － 86 ＝ 4 顆。",
        "C": "【只算出實際裝球總數】正確算出兩箱實際一共可裝 24 ＋ 50 ＝ 74 顆，但忘記題目問的是誤算與實際兩者「相差幾顆」。",
        "B": "【只算了甲箱的誤差】只比較出甲箱誤差 35 － 24 ＝ 11 顆，漏掉乙箱也還有 55 － 50 ＝ 5 顆的差距。"
      },
      "insight": "只要有一個邊長不是球直徑的整數倍，剩餘的條狀空隙就只能浪費；體積相除會把「這裡剩 4 公分、那裡剩 4 公分」硬湊成一顆球，因而高估真實可裝數量。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "實際裝球數：長、寬、高各自除以直徑「無條件捨去」後相乘",
        "體積估算法誤區：（長 × 寬 × 高）÷（直徑 × 直徑 × 直徑）會把邊角廢料也計入顆數"
      ],
      "conceptCompare": "【整除條件檢驗】只有在長、寬、高「三個數字同時都是球直徑的倍數」時，實際可裝顆數才會跟總乘積相除完全相同。",
      "examVariations": "題目常問「甲箱的寬或高至少要各增加幾公分，才能剛剛好把誤算多出來的那些球全部塞進去」。"
    },
    "check": {
      "expr": "(32 * 28 * 20 + 40 * 44 * 16) / (8 * 8 * 8) - (4 * 3 * 2 + 5 * 5 * 2)",
      "expect": "16"
    }
  },
  {
    "id": "U10-RV-O-016",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L8 正方體 1-4-1 展開圖折合後三點共頂點判定",
    "category": "展開圖折合重合頂點",
    "level": 8,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "skipOptionNumMatch": true,
    "question": "如下圖是一張正方體的 1－4－1 型展開圖（由 A、B、C、D、E、F 六個正方形組成），圖中標記了一個紅色目標頂點 P，以及四個藍色角點（編號 1、2、3、4）。沿著虛線折成正方體之後，請問紅色目標頂點 P 會和哪兩個編號的藍色角點，同時重疊在正方體的同一個頂點上？",
    "svg": "<svg viewBox=\"0 0 360 225\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"102\" y=\"24\" width=\"54\" height=\"54\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><rect x=\"48\" y=\"78\" width=\"54\" height=\"54\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><rect x=\"102\" y=\"78\" width=\"54\" height=\"54\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><rect x=\"156\" y=\"78\" width=\"54\" height=\"54\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><rect x=\"210\" y=\"78\" width=\"54\" height=\"54\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><rect x=\"210\" y=\"132\" width=\"54\" height=\"54\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><line x1=\"102\" y1=\"78\" x2=\"156\" y2=\"78\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"102\" y1=\"78\" x2=\"102\" y2=\"132\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"156\" y1=\"78\" x2=\"156\" y2=\"132\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"210\" y1=\"78\" x2=\"210\" y2=\"132\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"210\" y1=\"132\" x2=\"264\" y2=\"132\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"129\" y=\"56\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">A</text><text x=\"75\" y=\"110\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">B</text><text x=\"129\" y=\"110\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">C</text><text x=\"183\" y=\"110\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">D</text><text x=\"237\" y=\"110\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">E</text><text x=\"237\" y=\"164\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">F</text><circle cx=\"48\" cy=\"78\" r=\"5.5\" fill=\"#dc2626\"/><circle cx=\"264\" cy=\"78\" r=\"5\" fill=\"#2563eb\"/><circle cx=\"102\" cy=\"24\" r=\"5\" fill=\"#2563eb\"/><circle cx=\"156\" cy=\"24\" r=\"5\" fill=\"#2563eb\"/><circle cx=\"48\" cy=\"132\" r=\"5\" fill=\"#2563eb\"/><text x=\"34\" y=\"75\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">P</text><text x=\"278\" y=\"75\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">①</text><text x=\"88\" y=\"21\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">②</text><text x=\"170\" y=\"21\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">③</text><text x=\"34\" y=\"142\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">④</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "點 2 和點 4",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      },
      {
        "key": "B",
        "text": "點 1 和點 3",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "C",
        "text": "點 1 和點 2",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "點 3 和點 4",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生對正方體展開圖「三個角點折合後相聚於同一個立方體頂點」之多面向空間追蹤能力。",
      "steps": [
        {
          "type": "text",
          "text": "把 C 格當作底面放在桌上，向上折起 B（左面）、D（右面），再把 E 蓋到正上方當成頂面。此時 E 格的右邊恰好接回 B 格的左邊，所以點 P 與 E 格右上角的點 ① 會先重疊在一起（位於左、後、頂三面交會點）。"
        },
        {
          "type": "text",
          "text": "接著把 A 格向上折起當作「後面」：A 格下邊原本就接在 C 格（底面）後緣，所以 A 格的左上角（點 ②）會往左貼上左面 B 的上方邊緣，剛好也與點 P 重疊！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"52\" width=\"96\" height=\"96\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><polygon points=\"24,52 64,24 160,24 120,52\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"120,52 160,24 160,120 120,148\" fill=\"#f1f5f9\" stroke=\"#475569\" stroke-width=\"1.5\"/><circle cx=\"64\" cy=\"24\" r=\"6\" fill=\"#dc2626\"/><text x=\"92\" y=\"18\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">後・左・頂（P、①、② 共點）</text><text x=\"112\" y=\"43\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">頂面 E</text><text x=\"72\" y=\"105\" text-anchor=\"middle\" font-size=\"11\" fill=\"#475569\">前面 F</text><text x=\"140\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" fill=\"#475569\">右 D</text><text x=\"320\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">1. E 折至頂面：右緣貼 B 左緣 ➔ ① 與 P 重合</text><text x=\"320\" y=\"80\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">2. A 折成後面：左上角貼 B 後上 ➔ ② 與 P 重合</text><text x=\"320\" y=\"114\" text-anchor=\"middle\" font-size=\"11\" fill=\"#64748b\">③ 位於右・後・頂；④ 位於前・左・頂</text><text x=\"320\" y=\"144\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">同時與 P 重合：點 1 和點 2</text></svg>",
          "caption": "圖解：立體正方體「後・左・頂」角點同時匯聚 P、①、② 三點"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 2 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：點 1 和點 2"
        }
      ],
      "distractorAnalysis": {
        "B": "【A 格左右角點看反】正確找到點 ① 會隨圓筒捲繞接回點 P，但誤把後面 A 格往左折時錯認成右上角點 ③ 會碰到左面。",
        "D": "【空間方位完全錯位】誤將前後左右折疊方向顛倒，點 ③ 與點 ④ 分別在後右頂與前左頂，完全不與點 P 相交。",
        "A": "【前後兩端頂點混淆】B 格左緣原本有上端 P 與下端 ④ 兩個點，折合時 P 在後側、④ 在前側，兩者分別屬於不同的頂點不會重合。"
      },
      "insight": "立體正方體的每一個頂點都是由「3 個面」相交而成，因此展開圖上在該角沒有直接相連的角點，折起來後最多會有 3 個分離的點同時會合於同一點。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "1－4－1 型中，最左邊界線（B 左緣）折成圓筒時必定與最右邊界線（E 右緣）重合",
        "點 P（後左上）＝ ①（E 右上）＝ ②（A 左上）"
      ],
      "conceptCompare": "【合邊 vs 合點】一條邊折合時只要貼合另一條邊即可；一個頂點折合時必須讓該處的三個鄰面轉角（前／後、左／右、上／下）在三個方位完全一致。",
      "examVariations": "段考常改成給一個展開圖，在四個角畫上顏色各異的圓點，問「哪幾個顏色最後會碰在同一個角上」。"
    },
    "check": {
      "expr": "1 + 2",
      "expect": "3"
    }
  },
  {
    "id": "U10-RV-O-017",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L9 大正方體互不相鄰三角挖去小正方體之頂點與邊數差",
    "category": "凹角挖切頂點與邊變化",
    "level": 9,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一個邊長 10 公分的大正方體實心木塊（原本有 8 個頂點、12 條邊、6 個面）。木工師傅挑選了大正方體上「3 個彼此互不相鄰（沒有共用同一條邊）」的頂點角落，在這 3 個角落各挖掉一個邊長 2 公分的小正方體（如凹槽般向內挖空，沒有切穿）。請問挖完這 3 個小正方體後，剩下的立體木塊「新的邊數」減去「新的頂點數」，答案是多少？",
    "options": [
      {
        "key": "A",
        "text": "10",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "13",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "24",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "D",
        "text": "4",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生精確盤點「正方體角落向內挖掉小正方體」時，原頂點消失與凹洞內角、面邊線產生之新頂點與新邊數變化。",
      "steps": [
        {
          "type": "text",
          "text": "先仔細觀察只挖掉「1 個小正方體角落」的變化：原本最外角的 1 個大頂點被挖空消失了，取而代之的是：原本 3 條邊上的 3 個截點、原本 3 個大面上的 3 個轉角點，以及凹進去最深處的 1 個內凹角點，共新增 3 ＋ 3 ＋ 1 ＝ 7 個頂點。所以頂點淨增加 7 － 1 ＝ 6 個。"
        },
        {
          "type": "text",
          "text": "再看邊的變化：原本 3 條邊沒有不見（只是縮短），在 3 個大面表面各多出 2 條凹口邊（共 6 條），凹洞最深處還有 3 條交會到內凹角點的邊。所以邊數淨增加 6 ＋ 3 ＝ 9 條。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"42\" width=\"96\" height=\"96\" fill=\"#fef3c7\" stroke=\"#ca8a04\" stroke-width=\"2\"/><polygon points=\"24,42 62,18 158,18 120,42\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><polygon points=\"120,42 158,18 158,114 120,138\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"2\"/><polygon points=\"86,42 104,30 120,30 120,76 86,76\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"104\" y1=\"30\" x2=\"104\" y2=\"58\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"86\" y1=\"58\" x2=\"104\" y2=\"58\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"104\" y1=\"58\" x2=\"120\" y2=\"76\" stroke=\"#dc2626\" stroke-width=\"2\"/><circle cx=\"104\" cy=\"58\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"86\" cy=\"42\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"104\" cy=\"30\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"120\" cy=\"76\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"120\" cy=\"30\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"86\" cy=\"58\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"86\" cy=\"76\" r=\"3.5\" fill=\"#2563eb\"/><text x=\"115\" y=\"158\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">挖 1 角：－1 舊角 ＋ 7 藍點 ＋ 9 邊</text><text x=\"316\" y=\"45\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">每挖 1 個獨立角：頂點 ＋6、邊 ＋9</text><text x=\"316\" y=\"76\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1d4ed8\">新頂點：8 ＋ 3 × 6 ＝ 26 個</text><text x=\"316\" y=\"106\" text-anchor=\"middle\" font-size=\"12\" fill=\"#15803d\">新邊數：12 ＋ 3 × 9 ＝ 39 條</text><text x=\"316\" y=\"140\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">邊減頂點：39 － 26 ＝ 13</text></svg>",
          "caption": "圖解：角落向內挖掉小正方體後的 7 個新頂點與 9 條新邊"
        },
        {
          "type": "eq",
          "expr": "（12 ＋ 3 × 9）－（8 ＋ 3 × 6）＝ 39 － 26 ＝ 13"
        },
        {
          "type": "answer",
          "text": "答：13"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記扣除消失的原角頂點】算出新增 7 個頂點卻沒減去被挖掉的原本 1 個頂點，錯算新頂點為 8 ＋ 3 × 7 ＝ 29，得 39 － 29 ＝ 10。",
        "D": "【誤認凹角與凸角數量完全相抵】以為角挖掉凹進去一個小正方體後，原本的頂點數 8 和邊數 12 都沒變，錯算成 12 － 8 ＝ 4。",
        "C": "【將新面數誤當成新頂點數】每挖 1 角面數多 3 個，共 6 ＋ 3 × 3 ＝ 15 個面；若誤拿邊數減面數，就會錯算出 39 － 15 ＝ 24。"
      },
      "insight": "向內凹切小正方體與斜切一刀不同：斜切 1 角只增 2 點 3 邊 1 面；向內凹挖 1 個小正方體則會增加 6 點 9 邊 3 面（正好都是斜切一刀的 3 倍變化量）。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角落挖掉 1 個不貫穿小正方體：頂點 ＋6、邊 ＋9、面 ＋3",
        "挖前「邊 － 頂 ＝ 4」，每挖 1 個角差值就增加（9 － 6）＝ 3"
      ],
      "conceptCompare": "【表面積不變 vs 頂點邊數大增】小五或小六常學「角挖掉小正方體，表面積不變」，但對頂點、邊數和面數而言，它們其實都明顯增加了。",
      "examVariations": "若改在「正方體的邊中點」挖一個小正方體凹槽（不碰到頂點），則原邊斷成兩段，會多出 8 個頂點、12 條邊與 4 個新面。"
    },
    "check": {
      "expr": "(12 + 3 * 9) - (8 + 3 * 6)",
      "expect": "13"
    }
  },
  {
    "id": "U10-RV-O-018",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L9 雙長方體三種拼合最省緞帶方案與獨立包裝省長比較",
    "category": "組合長方體緞帶極值",
    "level": 9,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "茶葉店有兩個完全一樣的長方體茶葉盒，每個小盒平放在桌上時「長 22 公分、寬 14 公分、高 8 公分」。小美想把這兩個小盒「不翻轉上下方向」緊密拼成一個大長方體（可選擇上下疊高、前後並排或左右並排三種拼法之一），並從拼好後的大頂面中央十字繞大長方體一圈，加上 1 個 25 公分的蝴蝶結；而小華則是把「兩個小盒各自獨立」做同樣的十字捆綁（每個小盒都要打 1 個 25 公分的蝴蝶結）。如果小美挑選「最省緞帶」的那種拼法來包裝，請問小美比小華省下了幾公分的緞帶？",
    "options": [
      {
        "key": "A",
        "text": "76 公分",
        "trapCode": "U10_RIBBON_FORGET_KNOT"
      },
      {
        "key": "B",
        "text": "101 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "85 公分",
        "trapCode": "U10_PACK_VOL_INSTEAD_FIT"
      },
      {
        "key": "D",
        "text": "97 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生比較三種立體拼合方向時「高 × 4」對十字緞帶總長的影響權重，找出極小值並精算省下的總長度。",
      "steps": [
        {
          "type": "text",
          "text": "先算小華分開綁兩盒：單盒需要 22 × 2 ＋ 14 × 2 ＋ 8 × 4 ＋ 25 ＝ 44 ＋ 28 ＋ 32 ＋ 25 ＝ 129 公分，兩盒總共需要 129 × 2 ＝ 258 公分。"
        },
        {
          "type": "text",
          "text": "再比較小美的三種拼法（加上蝴蝶結 25 公分）：① 上下疊成（22、14、高 16）：44 ＋ 28 ＋ 16×4 ＋ 25 ＝ 161 公分；② 前後並排成（22、寬 28、高 8）：44 ＋ 28×2 ＋ 32 ＋ 25 ＝ 157 公分；③ 左右並排成（長 44、14、高 8）：44×2 ＋ 28 ＋ 32 ＋ 25 ＝ 173 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"20\" width=\"126\" height=\"66\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"81\" y=\"42\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">① 上下疊（高 16）</text><text x=\"81\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" fill=\"#475569\">44＋28＋64＋25 ＝ 161</text><rect x=\"162\" y=\"20\" width=\"136\" height=\"66\" rx=\"6\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"230\" y=\"42\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#15803d\">② 前後排（寬 28・最省）</text><text x=\"230\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#15803d\">44＋56＋32＋25 ＝ 157</text><rect x=\"316\" y=\"20\" width=\"126\" height=\"66\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"379\" y=\"42\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">③ 左右排（長 44）</text><text x=\"379\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" fill=\"#475569\">88＋28＋32＋25 ＝ 173</text><text x=\"230\" y=\"118\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">小華分開綁兩盒：（44 ＋ 28 ＋ 32 ＋ 25）× 2 ＝ 258 公分</text><text x=\"230\" y=\"148\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">小美最省方案省下：258 － 157 ＝ 101 公分</text></svg>",
          "caption": "圖解：三種不翻轉拼法之緞帶總長比較與獨立包裝差距"
        },
        {
          "type": "text",
          "text": "因為「前後並排」沒有加倍高（權重 ×4），也沒有加倍最長的邊 22，只把寬 14 加倍成 28，所以只需要 157 公分是最省的。省下 258 － 157 ＝ 101 公分。"
        },
        {
          "type": "eq",
          "expr": "（22 × 2 ＋ 14 × 2 ＋ 8 × 4 ＋ 25）× 2 －（22 × 2 ＋ 14 × 4 ＋ 8 × 4 ＋ 25）＝ 258 － 157 ＝ 101"
        },
        {
          "type": "answer",
          "text": "答：101 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記少打 1 個蝴蝶結也省下 25 公分】只算了貼合面省下的 2 條長與 4 條高（44 ＋ 32 ＝ 76 公分），卻忘記合在一起綁還少打了 1 個 25 公分的蝴蝶結。",
        "C": "【誤選左右並排為最省拼法】誤以為左右貼合最小側面最省（173 公分），錯算成 258 － 173 ＝ 85 公分。",
        "D": "【誤選上下疊高為最省拼法】直覺以為把最大的底面疊在一起最省（161 公分），忽略高度加倍會被乘以 4 而變貴，錯算 258 － 161 ＝ 97 公分。"
      },
      "insight": "拼合包裝要最省緞帶，原則是「盡量不要加倍權重最大的『高（×4）』」，並且讓被加倍的邊越短越好，所以把『高』維持 8、把最短水平邊『寬 14』加倍才是最省方案。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "拼合省帶長 ＝ 少掉 1 份蝴蝶結 ＋ 貼合面垂直交叉的緞帶（2 條長＋4 條高）",
        "十字繞帶權重：長 × 2、寬 × 2、高 × 4"
      ],
      "conceptCompare": "【最省表面積 vs 最省十字緞帶】如果要求最省包裝紙（表面積最小），應該要把最大的面（22 × 14）貼合也就是上下疊；但要最省十字緞帶，卻是要讓『高』維持不變且貼合次大面（22 × 8）。",
      "examVariations": "高階變化會允許自由翻轉盒子朝向，此時就要固定把最短的邊當成「高」，並看另外兩邊怎麼拼最省。"
    },
    "check": {
      "expr": "(22 * 2 + 14 * 2 + 8 * 4 + 25) * 2 - (22 * 2 + 14 * 4 + 8 * 4 + 25)",
      "expect": "101"
    }
  },
  {
    "id": "U10-RV-O-019",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L10 球體切面半徑與長方箱大小球分區極限裝填",
    "category": "球體切面與複合裝箱極值",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "科學館要將兩種實心球體模型裝進一個內部為「長 54 公分、寬 35 公分、高 23 公分」的長方體貨櫃箱中：已知大球半徑為 5 公分；如果把大球在距離球心 3 公分處平切一刀，所切出的圓形切面半徑剛好是 4 公分，而「小球的直徑」恰好等於大球這個切面的半徑。店員先把盡可能多的大球緊靠箱子左後角對齊格子排滿；再用極薄隔板（厚度不計）把大球區外圍剩下的三個不重疊邊條空間（右側、前側、頂部）分開，並在這些剩餘邊條空間中繼續整齊塞滿小球。請問這個貨櫃箱總共最多可以裝進幾顆球（大球與小球合計）？",
    "options": [
      {
        "key": "A",
        "text": "135 顆",
        "trapCode": "U10_PACK_VOL_INSTEAD_FIT"
      },
      {
        "key": "B",
        "text": "100 顆",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "C",
        "text": "150 顆",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "130 顆",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "結合球體切面半徑與直徑的辨析，以及兩階段立體裝箱剩餘條形空間之無重疊極值計算。",
      "steps": [
        {
          "type": "text",
          "text": "先確認兩種球的直徑：大球半徑 5 公分 ➔ 大球直徑 ＝ 5 × 2 ＝ 10 公分；大球距球心 3 公分處的切面半徑是 4 公分，題意說明「小球直徑等於此切面半徑」，故小球直徑 ＝ 4 公分。"
        },
        {
          "type": "text",
          "text": "第一階段排入大球（佔 10 公分方格）：長 54 ÷ 10 ＝ 5 排（佔 50 公分，長方向剩 4 公分）；寬 35 ÷ 10 ＝ 3 排（佔 30 公分，寬方向剩 5 公分）；高 23 ÷ 10 ＝ 2 層（佔 20 公分，頂部剩 3 公分）。大球共裝 5 × 3 × 2 ＝ 30 顆。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"216\" height=\"140\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><rect x=\"20\" y=\"20\" width=\"190\" height=\"114\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><rect x=\"210\" y=\"20\" width=\"26\" height=\"140\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\"/><rect x=\"20\" y=\"134\" width=\"190\" height=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><text x=\"115\" y=\"70\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">大球區 50×30（5×3×2＝30顆）</text><text x=\"115\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" fill=\"#1e293b\">頂部剩高 3 ＜ 直徑 4 ➔ 0 顆</text><text x=\"115\" y=\"151\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#15803d\">前條 50×5（12×1×5＝60 顆）</text><text x=\"223\" y=\"52\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">右4</text><text x=\"352\" y=\"42\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">右側條（4×35×23）：1×8×5＝40 顆</text><text x=\"352\" y=\"72\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">前側條（50×5×23）：12×1×5＝60 顆</text><text x=\"352\" y=\"102\" text-anchor=\"middle\" font-size=\"12\" fill=\"#475569\">大球：30 顆　小球：100 顆</text><text x=\"352\" y=\"138\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">合計：30 ＋ 100 ＝ 130 顆</text></svg>",
          "caption": "圖解：俯視平面分區裝球與右側、前側條狀空間（高 23÷4＝5 層）"
        },
        {
          "type": "text",
          "text": "第二階段把邊條空間裝入直徑 4 公分的小球：頂部剩 3 公分高度小於 4 公分，塞不進小球；高方向 23 ÷ 4 ＝ 5 層餘 3 公分。右側條（4 × 35 × 23）可裝 1 × 8 × 5 ＝ 40 顆；前側不重疊區域（50 × 5 × 23）可裝 12 × 1 × 5 ＝ 60 顆。合計 30 ＋ 40 ＋ 60 ＝ 130 顆。"
        },
        {
          "type": "eq",
          "expr": "（5 × 3 × 2）＋（1 × 8 × 5 ＋ 12 × 1 × 5）＝ 30 ＋ 100 ＝ 130"
        },
        {
          "type": "answer",
          "text": "答：130 顆"
        }
      ],
      "distractorAnalysis": {
        "A": "【角落重疊空間重複計算】算前側條時也用全寬 54 公分算成 13 × 1 × 5 ＝ 65 顆，導致右下角的 4 × 5 × 23 區域重複算兩次（多算 5 顆），變成 135 顆。",
        "C": "【小球的高度層數誤進位】算小球高度 23 ÷ 4 ＝ 5.75 層時誤進位成 6 層，錯算成 30 ＋ 1 × 8 × 6 ＋ 12 × 1 × 6 ＝ 150 顆。",
        "B": "【只算出小球總數忘記加回大球】算對了邊條區能裝 40 ＋ 60 ＝ 100 顆小球，卻忘記加上原本裡面的 30 顆大球。"
      },
      "insight": "分區裝箱必須畫出「不重疊」的矩形切分線（把右下角落固定只歸給其中一個邊條區計算），並且緊記任何方向只要餘數小於直徑就必須捨去。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "分區不重疊裝球：大區邊界剩餘長度需逐區扣掉已算過的交角",
        "不論剩餘 3.9 公分還是 3 公分，只要小於球直徑 4 公分就只能放 0 顆"
      ],
      "conceptCompare": "【切角歸誰都一樣嗎？】這題若把右下角 4 × 5 交界區改歸前側（前側 54×5 裝 13×1×5＝65 顆，右側 4×30 裝 1×7×5＝35 顆），合計仍是 65 ＋ 35 ＝ 100 顆，這正檢驗了計算有無重疊失誤。",
      "examVariations": "若頂部空間剩餘剛好足夠放入更小一號的珠子，則可再多加一層頂部區域的計算。"
    },
    "check": {
      "expr": "(5 * 3 * 2) + (1 * 8 * 5 + 12 * 1 * 5)",
      "expect": "130"
    }
  },
  {
    "id": "U10-RV-O-020",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L10 未知角柱全頂點切角後頂點邊面總和雙重反推",
    "category": "切角與角柱雙重反推",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "老師製作了一座未知幾邊形的實心角柱木雕，上下兩個底面是完全相同的正多邊形。雕刻師在這個角柱的「每一個頂點」上，都各平切掉一個微小且彼此不相交的小三角錐（因為原角柱的每個頂點都剛好連著 3 條邊，所以切去 1 個角就會多出 1 個三角形新切面）。切完所有頂點後，小明把這個新立體木雕的「新頂點數」、「新邊數」和「新面數」全部加起來，總和竟然高達 146。請問切完後的新立體木雕，總共有幾條邊？",
    "options": [
      {
        "key": "A",
        "text": "48 條",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "B",
        "text": "81 條",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "72 條",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "56 條",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "綜合測驗角柱原本要素份數規律、全頂點獨立切角後頂點邊面之倍增推演，以及三要素總和逆推原形體的最高階能力。",
      "steps": [
        {
          "type": "text",
          "text": "設原本角柱的「底面邊數」為 1 份（□），則原本有頂點 2 份、邊 3 份、面 1 份＋2。因為每個頂點都連著 3 條邊，切掉 1 個不重疊小角時：原來 1 個頂點變成切面三角形的 3 個頂點（變成 3 倍！），多出 3 條新邊和 1 個新面。"
        },
        {
          "type": "text",
          "text": "全部 2 份頂點都切掉一角後：新頂點 ＝ 2 份 × 3 ＝ 6 份；新邊 ＝ 原 3 份 ＋ 2 份 × 3 ＝ 9 份；新面 ＝（1 份 ＋ 2）＋ 2 份 × 1 ＝ 3 份 ＋ 2。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"18\" width=\"190\" height=\"140\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/><text x=\"111\" y=\"42\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">切全體（2 份）頂點前後對照</text><text x=\"111\" y=\"68\" text-anchor=\"middle\" font-size=\"11\" fill=\"#1e293b\">原角柱：頂 2 份、邊 3 份、面 1 份＋2</text><text x=\"111\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#15803d\">切後頂：2 份 ＋ 2 份×2 ＝ 6 份</text><text x=\"111\" y=\"114\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">切後邊：3 份 ＋ 2 份×3 ＝ 9 份</text><text x=\"111\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\">切後面：1 份＋2 ＋ 2 份 ＝ 3 份＋2</text><text x=\"335\" y=\"45\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">切後三要素總份數</text><text x=\"335\" y=\"75\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1e293b\">6 份 ＋ 9 份 ＋ 3 份 ＋ 2 ＝ 146</text><text x=\"335\" y=\"105\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">18 份 ＝ 144 ➔ 1 份 ＝ 8（八角柱）</text><text x=\"335\" y=\"138\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">新邊數：8 × 9 ＝ 72 條</text></svg>",
          "caption": "圖解：全頂點切角前後的份數倍率推演與 18 份反推八角柱"
        },
        {
          "type": "eq",
          "expr": "（146 － 2）÷（6 ＋ 9 ＋ 3）＝ 144 ÷ 18 ＝ 8"
        },
        {
          "type": "text",
          "text": "反推出原本是「八角柱」（原本有 16 個頂點、24 條邊、10 個面），切完全部 16 個角後，新邊數為 8 × 9 ＝ 72 條（或 24 ＋ 16 × 3 ＝ 72 條）。"
        },
        {
          "type": "eq",
          "expr": "8 × 9 ＝ 72"
        },
        {
          "type": "answer",
          "text": "答：72 條"
        }
      ],
      "distractorAnalysis": {
        "A": "【把新頂點數當成新邊數】推出原八角柱後，誤把新頂點數 8 × 6 ＝ 48（或只算多出來的 16 × 3 ＝ 48 條邊）當成新木雕的總邊數。",
        "B": "【原底面邊數推算差 1】總份數算錯成多 1 邊形（誤認為原九角柱），算出 9 × 9 ＝ 81 條邊。",
        "D": "【誤認切 1 角只多出 2 條邊】算出原為八角柱（24 條邊）後，以為每切 1 個角邊數只多 2 條，錯算成 24 ＋ 16 × 2 ＝ 56 條。"
      },
      "insight": "角柱不論底面是幾邊形，它的每一個頂點都恰好只連著「2 條底邊 ＋ 1 條側邊 ＝ 3 條邊」，因此每個頂點切角後的規律跟正方體完全一模一樣！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角柱全頂點獨立切角後：新頂點 ＝ 原底邊 × 6、新邊 ＝ 原底邊 × 9、新面 ＝ 原底邊 × 3 ＋ 2",
        "全頂點切角後三要素總和 ＝ 原底邊 × 18 ＋ 2"
      ],
      "conceptCompare": "【原角柱 6 份＋2 vs 全切角後 18 份＋2】原本角柱總和是底面邊數的 6 倍加 2；把全部頂點各切一角後，倍數剛好放大為原來的 3 倍（變成 18 倍加 2）。",
      "examVariations": "若換成角錐也切全部頂點要注意：角錐的「尖頂（頂點）」會連著好幾條側邊（依底面邊數而定），切掉尖頂多出的邊數並不是固定 3 條，這也是角柱與角錐切角的最大差異。"
    },
    "check": {
      "expr": "((146 - 2) / 18) * 9",
      "expect": "72"
    }
  },
  {
    "id": "U10-S1-M-001",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-1",
    "sectionName": "柱體與錐體的認識",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "角柱角錐側面形狀快辨",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖有三角柱、四角錐、圓柱和五角柱四個立體積木，其中側面全是三角形的有幾個？",
    "svg": "<svg viewBox=\"0 0 420 135\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"12\" width=\"92\" height=\"110\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><polygon points=\"56,28 32,76 80,76\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"56,28 80,76 88,64 64,20\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><text x=\"56\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">三角柱</text><rect x=\"112\" y=\"12\" width=\"92\" height=\"110\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><polygon points=\"158,24 130,78 172,84\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><polygon points=\"158,24 172,84 188,70\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"158\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">四角錐</text><rect x=\"214\" y=\"12\" width=\"92\" height=\"110\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><ellipse cx=\"260\" cy=\"32\" rx=\"22\" ry=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><path d=\"M238,32 L238,76 A22,8 0 0,0 282,76 L282,32\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"2\"/><ellipse cx=\"260\" cy=\"32\" rx=\"22\" ry=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"260\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">圓柱</text><rect x=\"316\" y=\"12\" width=\"92\" height=\"110\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><polygon points=\"362,20 342,28 346,38 378,38 382,28\" fill=\"#ede9fe\" stroke=\"#7c3aed\" stroke-width=\"2\"/><polygon points=\"342,28 346,38 346,80 342,70\" fill=\"#ddd6fe\" stroke=\"#7c3aed\" stroke-width=\"1.8\"/><rect x=\"346\" y=\"38\" width=\"32\" height=\"42\" fill=\"#c4b5fd\" stroke=\"#7c3aed\" stroke-width=\"1.8\"/><polygon points=\"378,38 382,28 382,70 378,80\" fill=\"#ddd6fe\" stroke=\"#7c3aed\" stroke-width=\"1.8\"/><text x=\"362\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#5b21b6\">五角柱</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "2 個",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "B",
        "text": "3 個",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "C",
        "text": "1 個",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "0 個",
        "trapCode": "U10_CYLINDER_CONE_NET_MIX"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否能一眼區分「角柱側面是長方形」、「角錐側面是三角形」與「圓柱側面是曲面」。",
      "steps": [
        {
          "type": "text",
          "text": "逐一檢查側面形狀：角柱（三角柱、五角柱）的側面都是長方形；圓柱的側面是彎曲的面；只有「角錐」（四角錐）的側面全是三角形。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 125\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"18\" width=\"96\" height=\"86\" rx=\"8\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text x=\"64\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#334155\">三角柱</text><text x=\"64\" y=\"78\" text-anchor=\"middle\" font-size=\"12\" fill=\"#475569\">側面是長方形</text><rect x=\"126\" y=\"18\" width=\"96\" height=\"86\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.2\"/><text x=\"174\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#b45309\">四角錐</text><text x=\"174\" y=\"78\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">側面是三角形</text><rect x=\"236\" y=\"18\" width=\"96\" height=\"86\" rx=\"8\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text x=\"284\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#334155\">圓柱</text><text x=\"284\" y=\"78\" text-anchor=\"middle\" font-size=\"12\" fill=\"#475569\">側面是曲面</text><rect x=\"346\" y=\"18\" width=\"96\" height=\"86\" rx=\"8\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text x=\"394\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#334155\">五角柱</text><text x=\"394\" y=\"78\" text-anchor=\"middle\" font-size=\"12\" fill=\"#475569\">側面是長方形</text></svg>",
          "caption": "圖解：四角錐的側面全是三角形，其餘三個形體側面都不是三角形"
        },
        {
          "type": "eq",
          "expr": "0 ＋ 1 ＋ 0 ＋ 0 ＝ 1"
        },
        {
          "type": "answer",
          "text": "答：1 個"
        }
      ],
      "distractorAnalysis": {
        "A": "【看到三角柱就誤選】把「三角柱」的底面（三角形）誤以為側面也是三角形，多算成 2 個。",
        "D": "【把四角錐側面當正方形】看見「四」字就誤以為側面是四邊形，忽略所有角錐側面都是三角形。",
        "B": "【柱體錐體特徵倒置】誤以為三個角柱和角錐的側面都是三角形，或把柱體與錐體性質完全搞反。"
      },
      "insight": "看名字最後一個字就能秒殺：「柱」側面像柱子直直長方形，「錐」側面尖尖全是三角形！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角柱的側面全都是長方形（或正方形），有 2 個全等底面",
        "角錐的側面全都是三角形，只有 1 個底面"
      ],
      "conceptCompare": "【底面形狀 vs 側面形狀】「三角柱」是指底面為三角形，它的側面依然是長方形；「四角錐」底面是四邊形，但側面全是三角形。",
      "examVariations": "段考常把三角柱、三角錐、四角錐混在一起，問「哪幾個側面全等且都是三角形」，記住只找名稱結尾是「錐」的角錐就對了。"
    },
    "check": {
      "expr": "1",
      "expect": "1"
    }
  },
  {
    "id": "U10-S1-M-002",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-1",
    "sectionName": "柱體與錐體的認識",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "柱體與錐體底面個數心算",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "桌上擺了 3 個五角柱和 2 個六角錐積木，這 5 個立體積木的「底面」合起來共有幾個？",
    "options": [
      {
        "key": "A",
        "text": "10 個",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "B",
        "text": "5 個",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "C",
        "text": "7 個",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "D",
        "text": "8 個",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否牢記「每個角柱有 2 個底面、每個角錐只有 1 個底面」，並排除「五角、六角」的邊數干擾。",
      "steps": [
        {
          "type": "text",
          "text": "不管幾角柱，每個角柱固定有上下 2 個底面；不管幾角錐，每個角錐只有 1 個底面。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"16\" width=\"190\" height=\"86\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"1.8\"/><text x=\"115\" y=\"46\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1d4ed8\">3 個五角柱</text><text x=\"115\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">各有 2 個底面 ＝ 6 個</text><text x=\"230\" y=\"64\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#0f172a\">＋</text><rect x=\"250\" y=\"16\" width=\"190\" height=\"86\" rx=\"8\" fill=\"#fefce8\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/><text x=\"345\" y=\"46\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#a16207\">2 個六角錐</text><text x=\"345\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">各有 1 個底面 ＝ 2 個</text></svg>",
          "caption": "圖解：五角柱底面共 3 × 2 ＝ 6 個，六角錐底面共 2 × 1 ＝ 2 個"
        },
        {
          "type": "eq",
          "expr": "3 × 2 ＋ 2 × 1 ＝ 6 ＋ 2 ＝ 8"
        },
        {
          "type": "answer",
          "text": "答：8 個"
        }
      ],
      "distractorAnalysis": {
        "A": "【誤認角錐有 2 個底面】把六角錐也當成有 2 個底面，錯算成 3 × 2 ＋ 2 × 2 ＝ 10 個。",
        "B": "【只算放置朝下的底面】以為底面一定只有下面接觸桌面的 1 個，錯算成 3 ＋ 2 ＝ 5 個。",
        "C": "【底面數量搞反】誤把角柱算成 1 個底面、角錐算成 2 個底面，算出 3 × 1 ＋ 2 × 2 ＝ 7 個。"
      },
      "insight": "柱體有「上、下」兩個一樣平的底面；錐體頭尖尖的，底面只剩 1 個！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "任何角柱（或圓柱）都有 2 個全等且平行的底面",
        "任何角錐（或圓錐）都只有 1 個底面"
      ],
      "conceptCompare": "【底面個數與「幾角」無關】不管是三角柱還是十角柱，底面都一樣只有 2 個；「幾角」只決定底面是幾邊形與側面的個數。",
      "examVariations": "常改問「把 4 個三角錐和 3 個四角柱倒放，總共有幾個側面？」（4 × 3 ＋ 3 × 4 ＝ 24 個）。"
    },
    "check": {
      "expr": "3 * 2 + 2 * 1",
      "expect": "8"
    }
  },
  {
    "id": "U10-S1-M-003",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-1",
    "sectionName": "柱體與錐體的認識",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "柱體與錐體總面數心算比較",
    "level": 2,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "把一個七角柱和一個八角錐並排放在一起，哪一個形體的面比較多？相差幾個面？",
    "skipOptionNumMatch": true,
    "options": [
      {
        "key": "A",
        "text": "八角錐多 2 個面",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "B",
        "text": "七角柱多 1 個面",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "C",
        "text": "八角錐多 1 個面",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "一樣多，相差 0 個面",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生對角柱「底面邊數 ＋ 2」與角錐「底面邊數 ＋ 1」面數結構的心算比較，破解「八角一定比七角面多」的直覺迷思。",
      "steps": [
        {
          "type": "text",
          "text": "七角柱有 7 個側面加上 2 個底面，共 9 個面；八角錐有 8 個側面加上 1 個底面，也是 9 個面。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"16\" width=\"190\" height=\"86\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><text x=\"115\" y=\"44\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0369a1\">七角柱的面數</text><text x=\"115\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" fill=\"#0f172a\">7 側面 ＋ 2 底面 ＝ 9 面</text><text x=\"230\" y=\"64\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#15803d\">＝</text><rect x=\"250\" y=\"16\" width=\"190\" height=\"86\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><text x=\"345\" y=\"44\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#b45309\">八角錐的面數</text><text x=\"345\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" fill=\"#0f172a\">8 側面 ＋ 1 底面 ＝ 9 面</text></svg>",
          "caption": "圖解：七角柱與八角錐總面數都是 9 個面，剛好平手"
        },
        {
          "type": "eq",
          "expr": "（7 ＋ 2） － （8 ＋ 1） ＝ 9 － 9 ＝ 0"
        },
        {
          "type": "answer",
          "text": "答：一樣多，相差 0 個面"
        }
      ],
      "distractorAnalysis": {
        "B": "【八角錐忘記加底面】把七角柱算成 9 面，卻誤以為八角錐只有 8 個面，算出相差 1 面。",
        "C": "【只看「七」和「八」比較】未算底面，看到八角就誤以為 8 － 7 ＝ 多 1 個面。",
        "A": "【誤把角錐底面也算 2 個】把八角錐錯算成 8 ＋ 2 ＝ 10 面，導致比七角柱少計或亂推算。"
      },
      "insight": "角柱多 1 個底面、角錐少 1 個底面！所以「七」角柱與「八」角錐總面數竟然剛好平手！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角柱總面數 ＝ 底面邊數 ＋ 2",
        "角錐總面數 ＝ 底面邊數 ＋ 1"
      ],
      "conceptCompare": "【面數平手對照】四角柱（6 面）＝ 五角錐（6 面）；七角柱（9 面）＝ 八角錐（9 面）。角錐總要多一條底邊才能追上角柱的面數。",
      "examVariations": "若題目改成「十角柱與哪一個角錐的面數一樣多？」，立刻將 10 ＋ 1 ＝ 11，秒選十一角錐。"
    },
    "check": {
      "expr": "(7 + 2) - (8 + 1)",
      "expect": "0"
    }
  },
  {
    "id": "U10-S1-M-004",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-1",
    "sectionName": "柱體與錐體的認識",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "圓柱圓錐平面與曲面辨識",
    "level": 2,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖是一個圓柱和一個圓錐，這兩個立體形體所有的「平面」合起來共有幾個？",
    "svg": "<svg viewBox=\"0 0 360 135\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"100\" cy=\"30\" rx=\"34\" ry=\"10\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M66,30 L66,92 A34,10 0 0,0 134,92 L134,30\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><ellipse cx=\"100\" cy=\"30\" rx=\"34\" ry=\"10\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><ellipse cx=\"100\" cy=\"92\" rx=\"34\" ry=\"10\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"100\" y=\"122\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">圓柱</text><path d=\"M260,24 L226,92 A34,10 0 0,0 294,92 Z\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><ellipse cx=\"260\" cy=\"92\" rx=\"34\" ry=\"10\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.8\"/><text x=\"260\" y=\"122\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">圓錐</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "3 個",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "4 個",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "C",
        "text": "2 個",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "5 個",
        "trapCode": "U10_CYLINDER_CONE_NET_MIX"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生能否分辨圓柱與圓錐的「側面是曲面（不是平面）」，只有圓形底面才是平面。",
      "steps": [
        {
          "type": "text",
          "text": "圓柱的側面是彎曲的面，只有上下 2 個圓形底面是平面；圓錐的側面也是曲面，只有底下 1 個圓形底面是平面。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"16\" width=\"190\" height=\"86\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><text x=\"115\" y=\"44\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e40af\">圓柱（3 個面）</text><text x=\"115\" y=\"74\" text-anchor=\"middle\" font-size=\"12\" fill=\"#334155\">2 個平面 ＋ 1 個曲面</text><text x=\"230\" y=\"64\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#0f172a\">＋</text><rect x=\"250\" y=\"16\" width=\"190\" height=\"86\" rx=\"8\" fill=\"#fefce8\" stroke=\"#d97706\" stroke-width=\"1.8\"/><text x=\"345\" y=\"44\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#b45309\">圓錐（2 個面）</text><text x=\"345\" y=\"74\" text-anchor=\"middle\" font-size=\"12\" fill=\"#334155\">1 個平面 ＋ 1 個曲面</text></svg>",
          "caption": "圖解：只計算平平的圓形底面，共有 2 ＋ 1 ＝ 3 個平面"
        },
        {
          "type": "eq",
          "expr": "2 ＋ 1 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：3 個"
        }
      ],
      "distractorAnalysis": {
        "B": "【把展開圖當平面】以為圓柱側面展開是長方形所以算平面，或誤算為 4 個。",
        "C": "【漏算圓錐底面】只算了圓柱的 2 個底面，或把「2 個平面（圓柱、圓錐各自當 1 種）」數錯。",
        "D": "【總面數與平面混淆】把圓柱的 3 個面和圓錐的 2 個面直接相加成 5 個，忘了側面是曲面。"
      },
      "insight": "分辨平面和曲面很簡單：把形體放在桌面上會「滾來滾去」的那一面就是曲面！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓柱：2 個平面（圓形底面）＋ 1 個曲面（側面），共 3 個面",
        "圓錐：1 個平面（圓形底面）＋ 1 個曲面（側面），共 2 個面"
      ],
      "conceptCompare": "【滾動測試】圓柱和圓錐橫著放都能滾動，因為側面是曲面；球體任何方向都會滾動，整個表面只有 1 個曲面、0 個平面。",
      "examVariations": "若再加上「1 顆球」，平面總數仍是 3 個，但「曲面」總數會變成 1 ＋ 1 ＋ 1 ＝ 3 個。"
    },
    "check": {
      "expr": "2 + 1",
      "expect": "3"
    }
  },
  {
    "id": "U10-S2-M-005",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-2",
    "sectionName": "角柱與角錐的構成要素",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "角柱頂點邊面總和快算",
    "level": 3,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "把一個五角柱的「頂點數、邊數、面數」三個數字加起來，總和是多少？",
    "options": [
      {
        "key": "A",
        "text": "30",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "32",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "22",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "D",
        "text": "27",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否能快速心算角柱的頂點數（底邊數 × 2）、邊數（底邊數 × 3）與面數（底邊數 ＋ 2）並求總和。",
      "steps": [
        {
          "type": "text",
          "text": "五角柱的底面是五邊形（5 條邊）：頂點有 5 × 2 ＝ 10 個、邊有 5 × 3 ＝ 15 條、面有 5 ＋ 2 ＝ 7 個。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"18\" width=\"124\" height=\"82\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><text x=\"80\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">頂點數（× 2）</text><text x=\"80\" y=\"76\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0f172a\">5 × 2 ＝ 10</text><text x=\"154\" y=\"64\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">＋</text><rect x=\"168\" y=\"18\" width=\"124\" height=\"82\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"230\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">邊數（× 3）</text><text x=\"230\" y=\"76\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0f172a\">5 × 3 ＝ 15</text><text x=\"304\" y=\"64\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">＋</text><rect x=\"318\" y=\"18\" width=\"124\" height=\"82\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><text x=\"380\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">面數（＋ 2）</text><text x=\"380\" y=\"76\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0f172a\">5 ＋ 2 ＝ 7</text></svg>",
          "caption": "圖解：五角柱頂點 10 ＋ 邊 15 ＋ 面 7 ＝ 32"
        },
        {
          "type": "eq",
          "expr": "10 ＋ 15 ＋ 7 ＝ 32"
        },
        {
          "type": "answer",
          "text": "答：32"
        }
      ],
      "distractorAnalysis": {
        "C": "【誤套五角錐公式】算成五角錐的（5 ＋ 1）＋（5 × 2）＋（5 ＋ 1）＝ 22。",
        "D": "【邊數乘成 2 倍】誤以為邊數也是 5 × 2 ＝ 10 條，算成 10 ＋ 10 ＋ 7 ＝ 27。",
        "A": "【面數忘記加 2 個底面】把面數誤算成只有 5 個側面，算成 10 ＋ 15 ＋ 5 ＝ 30。"
      },
      "insight": "口算大絕招：角柱「頂點＋邊＋面」永遠等於「底面邊數 × 6 ＋ 2」，像這題 5 × 6 ＋ 2 ＝ 32 一秒出答案！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角柱：頂點 ＝ 底邊數 × 2、邊 ＝ 底邊數 × 3、面 ＝ 底邊數 ＋ 2",
        "角柱三要素總和 ＝ 底邊數 × 6 ＋ 2"
      ],
      "conceptCompare": "【角柱 × 6 ＋ 2 vs 角錐 × 4 ＋ 2】角柱三者相加每次跳 6；角錐（頂點＋1、邊×2、面＋1）三者相加則是「底邊數 × 4 ＋ 2」。",
      "examVariations": "反過來考「有一個角柱的頂點、邊、面加起來是 50，這是幾角柱？」直接用（50 － 2）÷ 6 ＝ 8，秒答八角柱！"
    },
    "check": {
      "expr": "5 * 2 + 5 * 3 + (5 + 2)",
      "expect": "32"
    }
  },
  {
    "id": "U10-S2-M-006",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-2",
    "sectionName": "角柱與角錐的構成要素",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "由角錐面數逆推邊數",
    "level": 3,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "有一個神秘的角錐積木，數一數它共有 10 個面，請問這個角錐共有幾條邊？",
    "options": [
      {
        "key": "A",
        "text": "18 條",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "20 條",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "24 條",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "D",
        "text": "16 條",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生能否由角錐「面數 ＝ 底面邊數 ＋ 1」逆推出幾角錐，再心算角錐邊數（底面邊數 × 2）。",
      "steps": [
        {
          "type": "text",
          "text": "角錐有 1 個底面，先從 10 個面扣掉 1 個底面，得知側面有 9 個，所以這是「九角錐」（底面是九邊形）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 115\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"20\" width=\"126\" height=\"74\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><text x=\"81\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">總共 10 個面</text><text x=\"81\" y=\"74\" text-anchor=\"middle\" font-size=\"12\" fill=\"#334155\">扣掉 1 個底面</text><path d=\"M150,57 L172,57\" stroke=\"#0f172a\" stroke-width=\"2\"/><polygon points=\"172,52 182,57 172,62\" fill=\"#0f172a\"/><rect x=\"188\" y=\"20\" width=\"118\" height=\"74\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><text x=\"247\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">九角錐</text><text x=\"247\" y=\"74\" text-anchor=\"middle\" font-size=\"12\" fill=\"#334155\">底面邊數 ＝ 9</text><path d=\"M312,57 L334,57\" stroke=\"#0f172a\" stroke-width=\"2\"/><polygon points=\"334,52 344,57 334,62\" fill=\"#0f172a\"/><rect x=\"350\" y=\"20\" width=\"92\" height=\"74\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"396\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">總邊數</text><text x=\"396\" y=\"74\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">9 × 2 ＝ 18</text></svg>",
          "caption": "圖解：先減 1 個底面找出是九角錐，再乘 2 算出共 18 條邊"
        },
        {
          "type": "eq",
          "expr": "（10 － 1） × 2 ＝ 9 × 2 ＝ 18"
        },
        {
          "type": "answer",
          "text": "答：18 條"
        }
      ],
      "distractorAnalysis": {
        "C": "【套成角柱公式】誤減 2 個底面成八角柱，又乘 3 算成（10 － 2）× 3 ＝ 24 條邊。",
        "D": "【誤扣 2 個底面】把角錐當成有 2 個底面，算出（10 － 2）× 2 ＝ 16 條邊。",
        "B": "【忘記扣掉 1 個底面】直接把 10 個面當成十角錐，誤算成 10 × 2 ＝ 20 條邊。"
      },
      "insight": "看到「錐體給面數或頂點數」，第一動作永遠是「先減 1」找出幾角錐，再乘 2 就是邊數！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角錐：底面邊數 ＝ 面數 － 1 ＝ 頂點數 － 1",
        "角錐總邊數 ＝ 底面邊數 × 2"
      ],
      "conceptCompare": "【角錐減 1 vs 角柱減 2】由面數反推名稱時，角錐只有 1 個底面要減 1；角柱有 2 個底面要減 2。",
      "examVariations": "換問法：「一個角錐的面數和頂點數加起來共 20 個，它有幾條邊？」先算（20 ÷ 2）－ 1 ＝ 9，答案依然是 18 條邊！"
    },
    "check": {
      "expr": "(10 - 1) * 2",
      "expect": "18"
    }
  },
  {
    "id": "U10-S2-M-007",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-2",
    "sectionName": "角柱與角錐的構成要素",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "同底角柱與角錐邊數差反推",
    "level": 4,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小安發現「某一個角柱」的邊數比「相同底面形狀的角錐」剛好多了 8 條邊，這是幾角柱？",
    "skipOptionNumMatch": true,
    "options": [
      {
        "key": "A",
        "text": "八角柱",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "九角柱",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "六角柱",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "D",
        "text": "四角柱",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否理解角柱有「上底、側邊、下底」3 組底面邊數的邊，角錐只有「下底、側邊」2 組，因此兩者邊數差剛好等於底面邊數。",
      "steps": [
        {
          "type": "text",
          "text": "相同底面的角柱有 3 份底面邊數的邊，角錐有 2 份底面邊數的邊，相差剛好是 1 份底面邊數。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"24\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">角柱邊數</text><rect x=\"102\" y=\"22\" width=\"96\" height=\"28\" rx=\"4\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><text x=\"150\" y=\"41\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1e3a8a\">底面邊</text><rect x=\"202\" y=\"22\" width=\"96\" height=\"28\" rx=\"4\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><text x=\"250\" y=\"41\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1e3a8a\">側邊</text><rect x=\"302\" y=\"22\" width=\"96\" height=\"28\" rx=\"4\" fill=\"#fca5a5\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"350\" y=\"41\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#991b1b\">多出的 8 條</text><text x=\"24\" y=\"88\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">角錐邊數</text><rect x=\"102\" y=\"68\" width=\"96\" height=\"28\" rx=\"4\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"150\" y=\"87\" text-anchor=\"middle\" font-size=\"12\" fill=\"#92400e\">底面邊</text><rect x=\"202\" y=\"68\" width=\"96\" height=\"28\" rx=\"4\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"250\" y=\"87\" text-anchor=\"middle\" font-size=\"12\" fill=\"#92400e\">側邊</text></svg>",
          "caption": "圖解：角柱多出的 1 份就是上底面的 8 條邊，所以是八角柱"
        },
        {
          "type": "eq",
          "expr": "8 ÷ （3 － 2） ＝ 8"
        },
        {
          "type": "answer",
          "text": "答：八角柱"
        }
      ],
      "distractorAnalysis": {
        "B": "【把面數差規則混入】誤以為像面數一樣要加 1，錯選成九角柱。",
        "C": "【誤減 2 個底面】對幾何差值關係不熟，把 8 減 2 猜成六角柱。",
        "D": "【誤以為相差是 2 倍】直接把 8 ÷ 2 ＝ 4，錯選成四角柱。"
      },
      "insight": "同底的「角柱」比「角錐」多出來的邊，其實就是屋頂那個平平的上底面！多幾條邊就是幾角柱！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "同底角柱邊數 － 同底角錐邊數 ＝ 底面邊數",
        "同底角柱頂點數 － 同底角錐頂點數 ＝ 底面邊數 － 1"
      ],
      "conceptCompare": "【為什麼頂點差不是底邊數？】角柱多了一個上底面有 8 個頂點，但角錐也有 1 個尖頂，所以頂點相差是 8 － 1 ＝ 7 個；邊數則是剛好相差 8 條！",
      "examVariations": "高階變化：「同底角柱與角錐的『面數』差 1 個，『頂點數』差 7 個，請問是幾角形底面？」7 ＋ 1 ＝ 8，仍是八角柱與八角錐！"
    },
    "check": {
      "expr": "8 / (3 - 2)",
      "expect": "8"
    }
  },
  {
    "id": "U10-S2-M-008",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-2",
    "sectionName": "角柱與角錐的構成要素",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "牙籤與黏土球骨架對應形體",
    "level": 4,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖盤子裡有 21 根牙籤（當邊）和 14 顆黏土球（當頂點），全部用完不剩下，能拼出哪一種形體骨架？",
    "svg": "<svg viewBox=\"0 0 380 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"14\" width=\"164\" height=\"92\" rx=\"12\" fill=\"#fefce8\" stroke=\"#ca8a04\" stroke-width=\"2\"/><line x1=\"46\" y1=\"34\" x2=\"150\" y2=\"34\" stroke=\"#b45309\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#d97706\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"98\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#92400e\">牙籤 21 根（邊）</text><rect x=\"200\" y=\"14\" width=\"164\" height=\"92\" rx=\"12\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><circle cx=\"252\" cy=\"42\" r=\"9\" fill=\"#3b82f6\"/><circle cx=\"282\" cy=\"42\" r=\"9\" fill=\"#60a5fa\"/><circle cx=\"312\" cy=\"42\" r=\"9\" fill=\"#3b82f6\"/><text x=\"282\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e40af\">黏土球 14 顆（頂點）</text></svg>",
    "skipOptionNumMatch": true,
    "options": [
      {
        "key": "A",
        "text": "七角錐",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      },
      {
        "key": "B",
        "text": "十角錐",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "C",
        "text": "九角柱",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "七角柱",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生能否同時利用「邊數 21」與「頂點數 14」反推是角柱還是角錐，並找出正確的底面邊數。",
      "steps": [
        {
          "type": "text",
          "text": "21 是奇數，不能被 2 整除，所以不可能是角錐（角錐邊數一定是 2 的倍數，必為偶數）！21 ÷ 3 ＝ 7，且頂點 14 ÷ 2 ＝ 7，雙重確認是七角柱。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"18\" width=\"195\" height=\"84\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"117\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\">檢驗角錐（邊須為偶數）</text><text x=\"117\" y=\"76\" text-anchor=\"middle\" font-size=\"12\" fill=\"#7f1d1d\">21 無法被 2 整除 ➔ 淘汰</text><rect x=\"245\" y=\"18\" width=\"195\" height=\"84\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"342\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">檢驗角柱（邊 ÷ 3，頂點 ÷ 2）</text><text x=\"342\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">21 ÷ 3 ＝ 7，14 ÷ 2 ＝ 7</text></svg>",
          "caption": "圖解：邊數 21 為奇數直接排除角錐，除以 3 得底面為七邊形"
        },
        {
          "type": "eq",
          "expr": "21 ÷ 3 ＝ 7"
        },
        {
          "type": "answer",
          "text": "答：七角柱"
        }
      ],
      "distractorAnalysis": {
        "A": "【忽略邊數限制】只看 21 ÷ 3 ＝ 7 就選七角錐，卻沒發現七角錐只有 14 條邊與 8 個頂點。",
        "B": "【硬湊奇偶數】誤以為 21 ÷ 2 約 10 條而隨便猜十角錐，實際十角錐邊數是 20 條、頂點 11 個。",
        "C": "【忘記除以 3】把頂點 14 與邊 21 的數字混用或只憑直覺多算 2 邊，錯猜成九角柱。"
      },
      "insight": "神速排除法：角錐的邊數一定是偶數！看到「奇數條邊」不用猶豫，直接鎖定「角柱」除以 3！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角錐邊數 ＝ 底邊數 × 2（必為 2 的倍數，一定是偶數）",
        "角柱邊數 ＝ 底邊數 × 3（必為 3 的倍數）"
      ],
      "conceptCompare": "【奇偶秒判】遇到骨架題給出「15 根、21 根、27 根」奇數根牙籤，不用算頂點就知道只能拼成角柱（五角柱、七角柱、九角柱）。",
      "examVariations": "若題目給「24 根牙籤、13 顆黏土球」，因為 13 － 1 ＝ 12 且 24 ÷ 2 ＝ 12，這時就要判斷成十二角錐（注意：八角柱的頂點是 16 個不是 13 個）。"
    },
    "check": {
      "expr": "21 / 3",
      "expect": "7"
    }
  },
  {
    "id": "U10-S3-M-009",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-3",
    "sectionName": "展開圖與平行垂直面",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "正方體展開圖相對面秒辨",
    "level": 5,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖是一個正方體展開圖，把它摺成正方體後，「丙」面的對面（互相平行的面）是哪一個面？",
    "svg": "<svg viewBox=\"0 0 360 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"125\" y=\"15\" width=\"42\" height=\"42\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"146\" y=\"42\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#0369a1\">甲</text><rect x=\"83\" y=\"57\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"104\" y=\"84\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">乙</text><rect x=\"125\" y=\"57\" width=\"42\" height=\"42\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.5\"/><text x=\"146\" y=\"84\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#b45309\">丙</text><rect x=\"167\" y=\"57\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"188\" y=\"84\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">丁</text><rect x=\"209\" y=\"57\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"230\" y=\"84\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">戊</text><rect x=\"167\" y=\"99\" width=\"42\" height=\"42\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"188\" y=\"126\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#0369a1\">己</text></svg>",
    "skipOptionNumMatch": true,
    "options": [
      {
        "key": "A",
        "text": "戊面",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "甲面",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "C",
        "text": "丁面",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      },
      {
        "key": "D",
        "text": "己面",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否掌握正方體展開圖「同一排隔一格相對」的空間摺疊口訣，準確找出互相平行的對面。",
      "steps": [
        {
          "type": "text",
          "text": "觀察中間橫向一排相連的四個面「乙、丙、丁、戊」：沿邊摺起來圍成一圈時，同一排相隔一格的面一定互相平行。丙往右跳過丁，對面就是戊。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"155\" y=\"15\" width=\"42\" height=\"42\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"176\" y=\"42\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0369a1\">甲</text><rect x=\"113\" y=\"57\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"134\" y=\"84\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#334155\">乙</text><rect x=\"155\" y=\"57\" width=\"42\" height=\"42\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.5\"/><text x=\"176\" y=\"84\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#b45309\">丙</text><rect x=\"197\" y=\"57\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"218\" y=\"84\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#334155\">丁</text><rect x=\"239\" y=\"57\" width=\"42\" height=\"42\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2.5\"/><text x=\"260\" y=\"84\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#15803d\">戊</text><rect x=\"197\" y=\"99\" width=\"42\" height=\"42\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"218\" y=\"126\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0369a1\">己</text><path d=\"M176,55 Q218,22 260,55\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"4,3\"/><text x=\"360\" y=\"82\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">同排隔一格：丙對戊</text></svg>",
          "caption": "圖解：同一橫排「乙丙丁戊」中隔一格配對，丙對戊、乙對丁、甲對己"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 2 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：戊面"
        }
      ],
      "distractorAnalysis": {
        "C": "【緊鄰垂直面混淆】丁面就在丙面正旁邊，摺起來會成 90 度垂直相鄰，不是對面。",
        "D": "【斜角錯判】己面在下面，它會與頂部的甲面互相平行，與丙面則是垂直相鄰。",
        "B": "【相鄰誤認】甲面和丙面共有一條邊，摺起來後互相垂直，不是平行對面；甲的對面是己。"
      },
      "insight": "展開圖找對面第一法則：「一排同方向連著走，隔一格就是對面！」有邊連在一起的永遠互相垂直！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "正方體展開圖找相對面：同一直排或橫排「隔一格」必相對",
        "正方體展開圖有邊相連的兩個面，摺起來必定互相垂直（不是平行）"
      ],
      "conceptCompare": "【平行面 vs 垂直面】正方體中，每一個面只有 1 個平行面（對面），其餘 4 個面全都是與它互相垂直的鄰面。",
      "examVariations": "若題目改問「和丙面互相垂直的面有哪幾個？」，直接排除對面戊，剩下的甲、乙、丁、己 4 個面全都是！"
    },
    "check": {
      "expr": "1 + 2",
      "expect": "3"
    }
  },
  {
    "id": "U10-S3-M-010",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-3",
    "sectionName": "展開圖與平行垂直面",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "階梯展開圖Z字型對面推理",
    "level": 5,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖是正方體的 2-2-2 階梯展開圖，摺成正方體後，「２」號面的對面是幾號面？",
    "svg": "<svg viewBox=\"0 0 340 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"75\" y=\"18\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"96\" y=\"45\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">１</text><rect x=\"117\" y=\"18\" width=\"42\" height=\"42\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.5\"/><text x=\"138\" y=\"45\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#b45309\">２</text><rect x=\"117\" y=\"60\" width=\"42\" height=\"42\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"138\" y=\"87\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#0369a1\">３</text><rect x=\"159\" y=\"60\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"180\" y=\"87\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">４</text><rect x=\"159\" y=\"102\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"180\" y=\"129\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">５</text><rect x=\"201\" y=\"102\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"222\" y=\"129\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">６</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "４ 號面",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "B",
        "text": "３ 號面",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      },
      {
        "key": "C",
        "text": "６ 號面",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "D",
        "text": "５ 號面",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生在沒有 4 連格的「階梯型展開圖」中，是否能運用「Z 字型兩端相對」的規則快速配對。",
      "steps": [
        {
          "type": "text",
          "text": "以中間「３」為底面想像摺起來：２ 號面往上立起來變成後牆；４ 號面往右立起來當右牆，接著連著 ４ 的 ５ 號面再往前包過來變成前門，正好與後牆 ２ 號面面對面平行！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"85\" y=\"16\" width=\"38\" height=\"38\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"1.8\"/><text x=\"104\" y=\"41\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#334155\">１</text><rect x=\"123\" y=\"16\" width=\"38\" height=\"38\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.5\"/><text x=\"142\" y=\"41\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#b45309\">２</text><rect x=\"123\" y=\"54\" width=\"38\" height=\"38\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"142\" y=\"79\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0369a1\">３</text><rect x=\"161\" y=\"54\" width=\"38\" height=\"38\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"180\" y=\"79\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0369a1\">４</text><rect x=\"161\" y=\"92\" width=\"38\" height=\"38\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2.5\"/><text x=\"180\" y=\"117\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#15803d\">５</text><rect x=\"199\" y=\"92\" width=\"38\" height=\"38\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"1.8\"/><text x=\"218\" y=\"117\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#334155\">６</text><polyline points=\"142,35 142,73 180,73 180,111\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.4\" stroke-dasharray=\"4,3\"/><text x=\"345\" y=\"62\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">Ｚ字型兩端必相對</text><text x=\"345\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">２對５、１對４、３對６</text></svg>",
          "caption": "圖解：２－３－４－５ 形成 Z 字型路徑，兩端的 ２ 與 ５ 相對"
        },
        {
          "type": "eq",
          "expr": "2 ＋ 3 ＝ 5"
        },
        {
          "type": "answer",
          "text": "答：５ 號面"
        }
      ],
      "distractorAnalysis": {
        "B": "【直接選相鄰面】２ 號面和 ３ 號面共用一條邊，摺起來互相垂直，不可能平行相對。",
        "C": "【跨步多跳一格】誤沿著樓梯一直跨到最遠的 ６ 號面，實際上 ６ 號面會蓋到最上面與 ３ 號面相對。",
        "A": "【斜對角直覺誤判】看見 ２ 和 ４ 呈斜角相鄰就誤以為相對，其實與 ４ 相對的是 １ 號面。"
      },
      "insight": "沒有 4 連排的展開圖，就找「Z 字型」！Z 字型的兩個頭尾面，摺起來永遠剛好對看！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "正方體展開圖找對面第二法則：由 4 格組成的「Z 字型」（拐兩次直角轉彎），兩端面必相對",
        "2-2-2 階梯展開圖配對：１ 對 ４、２ 對 ５、３ 對 ６"
      ],
      "conceptCompare": "【1-4-1 vs 2-2-2】1-4-1 用「同排隔一格」最明顯；2-2-2 階梯型全部只有兩格排在一起，必須使用「Z 字型兩端相對」秒殺。",
      "examVariations": "考題常改把兩個「相同的正方體階梯圖」貼在不同數字上，問「如果底面是 ６，頂面會是幾？」，對照 ３ 對 ６ 立刻選出 ３。"
    },
    "check": {
      "expr": "2 + 3",
      "expect": "5"
    }
  },
  {
    "id": "U10-S3-M-011",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-3",
    "sectionName": "展開圖與平行垂直面",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "圓柱展開圖側面長方形周長心算",
    "level": 6,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖是一個圓柱的展開圖，底面的圓周長是 24 公分，圓柱的高是 10 公分，側面長方形的周長是多少公分？",
    "svg": "<svg viewBox=\"0 0 380 155\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"190\" cy=\"24\" r=\"16\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><rect x=\"90\" y=\"44\" width=\"200\" height=\"66\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><circle cx=\"190\" cy=\"130\" r=\"16\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"190\" y=\"82\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">長 ＝ 圓周長 24 公分</text><text x=\"334\" y=\"82\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">高 10 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "68 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "240 公分",
        "trapCode": "U10_CYLINDER_CONE_NET_MIX"
      },
      {
        "key": "C",
        "text": "34 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      },
      {
        "key": "D",
        "text": "58 公分",
        "trapCode": "U10_RIBBON_FORGET_KNOT"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否知道「圓柱展開的長方形長邊 ＝ 底面圓周長」，並能正確求出長方形周長而非面積或半周長。",
      "steps": [
        {
          "type": "text",
          "text": "圓柱側面攤開是一個長方形：長剛好貼合底面繞一圈（等於底面圓周長 24 公分），寬就是圓柱的高（10 公分）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"90\" y=\"24\" width=\"210\" height=\"68\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.2\"/><text x=\"195\" y=\"18\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">長 ＝ 24 公分</text><text x=\"195\" y=\"110\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">長 ＝ 24 公分</text><text x=\"46\" y=\"63\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">寬 10</text><text x=\"344\" y=\"63\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">寬 10</text><text x=\"422\" y=\"63\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">共 68</text></svg>",
          "caption": "圖解：長方形四條邊為 24、10、24、10 公分，周長總和 68 公分"
        },
        {
          "type": "eq",
          "expr": "（24 ＋ 10） × 2 ＝ 34 × 2 ＝ 68"
        },
        {
          "type": "answer",
          "text": "答：68 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【周長與面積混用】直接算成 24 × 10 ＝ 240，那是長方形側面積（且單位應為平方公分）。",
        "D": "【少算一條高】只算 24 × 2 ＋ 10 ＝ 58，漏加右邊那一條寬 10 公分。",
        "C": "【只加兩邊忘了乘 2】把 24 ＋ 10 ＝ 34 當作周長，少算了另一條長和寬。"
      },
      "insight": "圓柱側面長方形的祕密：長邊一定跟圓形底面「牽手繞一圈」，所以長 ＝ 圓周長，寬 ＝ 柱高！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓柱側面展開長方形的長（或寬）＝ 底面圓的圓周長",
        "側面長方形周長 ＝ （底面圓周長 ＋ 圓柱的高） × 2"
      ],
      "conceptCompare": "【圓柱側面 vs 圓錐側面】圓柱側面展開是長方形（一邊等於圓周長）；圓錐側面展開則是扇形（扇形弧長等於圓周長）。",
      "examVariations": "反過來考：「圓柱展開側面長方形周長是 68 公分，圓柱高 10 公分，底面圓周長幾公分？」68 ÷ 2 － 10 ＝ 24 公分。"
    },
    "check": {
      "expr": "(24 + 10) * 2",
      "expect": "68"
    }
  },
  {
    "id": "U10-S3-M-012",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-3",
    "sectionName": "展開圖與平行垂直面",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "骰子展開圖相對面點數推理",
    "level": 6,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖是標準骰子（相對兩面點數和皆為 7）的展開圖，摺成骰子後，「▲」的點數比「★」多幾點？",
    "svg": "<svg viewBox=\"0 0 340 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"85\" y=\"18\" width=\"42\" height=\"42\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.2\"/><text x=\"106\" y=\"45\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#b45309\">★</text><rect x=\"85\" y=\"60\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"106\" y=\"87\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">１</text><rect x=\"127\" y=\"60\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"148\" y=\"87\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">２</text><rect x=\"169\" y=\"60\" width=\"42\" height=\"42\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2.2\"/><text x=\"190\" y=\"87\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#15803d\">▲</text><rect x=\"169\" y=\"102\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"190\" y=\"129\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">３</text><rect x=\"211\" y=\"102\" width=\"42\" height=\"42\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"232\" y=\"129\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">５</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "3 點",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "B",
        "text": "4 點",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      },
      {
        "key": "C",
        "text": "1 點",
        "trapCode": "U10_NET_OPPOSITE_WRONG"
      },
      {
        "key": "D",
        "text": "2 點",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生在 1-3-2 型展開圖中精準找出各面的對面，並結合「骰子對面和為 7」的條件進行兩步驟空間心算。",
      "steps": [
        {
          "type": "text",
          "text": "先把 ２ 當底面摺起來：中排隔一格，「▲」對面是 １，所以 ▲ ＝ 7 － 1 ＝ 6 點；★ 和 ３ 分別從左右兩側的後邊與前邊立起面對面，所以 ★ ＝ 7 － 3 ＝ 4 點（剩餘 ２ 對 ５）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"130\" height=\"86\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"85\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">▲ 與 １ 相對</text><text x=\"85\" y=\"78\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0f172a\">7 － 1 ＝ 6</text><rect x=\"166\" y=\"20\" width=\"130\" height=\"86\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"231\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">★ 與 ３ 相對</text><text x=\"231\" y=\"78\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0f172a\">7 － 3 ＝ 4</text><rect x=\"312\" y=\"20\" width=\"128\" height=\"86\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"376\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">兩數相差</text><text x=\"376\" y=\"78\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\">6 － 4 ＝ 2</text></svg>",
          "caption": "圖解：由 1-3-2 展開配對算出 ▲ ＝ 6、★ ＝ 4，相差 2 點"
        },
        {
          "type": "eq",
          "expr": "（7 － 1） － （7 － 3） ＝ 6 － 4 ＝ 2"
        },
        {
          "type": "answer",
          "text": "答：2 點"
        }
      ],
      "distractorAnalysis": {
        "A": "【★ 誤配對 ２】誤以為 ★ 與中間 ２ 相對或與 ５ 相對，算成 6 － 3 或 5 － 2 ＝ 3 點。",
        "B": "【直接只求 ★ 點數】算出 ★ ＝ 4 點後就急著選 4，忘了題目問的是「▲ 比 ★ 多幾點」。",
        "C": "【誤把 ▲ 配對 ２】把 ▲ 誤認成與 ２ 相對變 5 點，再拿 5 － 4 ＝ 1 點。"
      },
      "insight": "兩數減一減竟然發現：（7 － 1）－（7 － 3）剛好就等於 3 － 1 ＝ 2！找出誰對誰以後心算一秒結束！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "1-3-2 型展開圖：中排 3 格兩端相對，上下凸出若各分佈左右兩側，也會正好相對",
        "標準骰子三組對面永遠是：（1 對 6）、（2 對 5）、（3 對 4）"
      ],
      "conceptCompare": "【先檢查 2 對 5】這題展開圖中，２ 和 ５ 在摺完後正好是上底和下底（和為 7），剩下的 1, 3, 4, 6 只要抓出同排隔一格的 ▲ 對 １，另一對 ★ 就一定是對 ３！",
      "examVariations": "換問法：「如果將這顆骰子放在桌上，朝上的面是 ★，接觸桌面的那面點數是多少？」（答：3 點）。"
    },
    "check": {
      "expr": "(7 - 1) - (7 - 3)",
      "expect": "2"
    }
  },
  {
    "id": "U10-S4-M-013",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-4",
    "sectionName": "球與包裝空間應用",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "球體球心截面與圓筒堆疊直徑",
    "level": 7,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖 3 顆大小相同的球剛好疊滿圓筒盒，盒子總高 30 公分，單看一顆球「通過球心」的最大圓切面直徑是幾公分？",
    "svg": "<svg viewBox=\"0 0 320 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"88\" y=\"15\" width=\"54\" height=\"126\" rx=\"4\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"2\"/><circle cx=\"115\" cy=\"36\" r=\"21\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><circle cx=\"115\" cy=\"78\" r=\"21\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><circle cx=\"115\" cy=\"120\" r=\"21\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"94\" y1=\"36\" x2=\"136\" y2=\"36\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"3,2\"/><circle cx=\"115\" cy=\"36\" r=\"3\" fill=\"#dc2626\"/><line x1=\"160\" y1=\"15\" x2=\"160\" y2=\"141\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"154\" y1=\"15\" x2=\"166\" y2=\"15\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"154\" y1=\"141\" x2=\"166\" y2=\"141\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"235\" y=\"82\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e40af\">總高 30 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "5 公分",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "B",
        "text": "10 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "15 公分",
        "trapCode": "U10_PACK_VOL_INSTEAD_FIT"
      },
      {
        "key": "D",
        "text": "30 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否理解「球的直徑 ＝ 高度」，且「通過球心切出的最大圓截面直徑 ＝ 球的直徑」。",
      "steps": [
        {
          "type": "text",
          "text": "3 顆相同的球直直疊在一起剛好 30 公分高，所以每顆球的直徑就是 30 ÷ 3 ＝ 10 公分。球通過球心切開的圓最大，這個圓的直徑就等於整顆球的直徑。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"95\" cy=\"60\" r=\"40\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"55\" y1=\"60\" x2=\"135\" y2=\"60\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><circle cx=\"95\" cy=\"60\" r=\"3.5\" fill=\"#dc2626\"/><text x=\"280\" y=\"46\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e40af\">每顆球直徑 ＝ 30 ÷ 3 ＝ 10 公分</text><text x=\"280\" y=\"80\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">過球心切面圓直徑 ＝ 球直徑 ＝ 10 公分</text></svg>",
          "caption": "圖解：球心切面圓的直徑剛好就是這顆球的寬度（直徑 10 公分）"
        },
        {
          "type": "eq",
          "expr": "30 ÷ 3 ＝ 10"
        },
        {
          "type": "answer",
          "text": "答：10 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【直徑與半徑混淆】算出每顆球直徑 10 公分後又多除以 2，錯答成球的半徑 5 公分。",
        "C": "【誤除以 2】沒有看清題目疊了 3 顆球，或誤把 30 ÷ 2 算成 15 公分。",
        "D": "【沒除以球數】誤把整個圓筒總高 30 公分當成直徑。"
      },
      "insight": "球不管怎麼切都是圓形，只有「通過球心」這一刀切出的圓最大，直徑就剛好等於這顆球本身的直徑！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "疊滿 N 顆相同球的圓筒高度 ＝ 球直徑 × N",
        "過球心切出的最大圓直徑 ＝ 球的直徑 ＝ 2 × 球半徑"
      ],
      "conceptCompare": "【半徑 vs 直徑】題目若改問「通過球心切面的『半徑』是幾公分？」，才需要把 10 ÷ 2 ＝ 5 公分，審題要看清「直徑」還是「半徑」！",
      "examVariations": "常連同長方體盒子考「這個圓筒底面圓的直徑最小要幾公分？」因為要剛好塞進球，底面直徑同樣是 10 公分。"
    },
    "check": {
      "expr": "30 / 3",
      "expect": "10"
    }
  },
  {
    "id": "U10-S4-M-014",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-4",
    "sectionName": "球與包裝空間應用",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "長方體紙箱裝球邊長整除限制",
    "level": 7,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一個長 26 公分、寬 17 公分、高 16 公分的紙箱，要放入直徑 8 公分的棒球，最多可以裝幾顆？",
    "options": [
      {
        "key": "A",
        "text": "13 顆",
        "trapCode": "U10_PACK_VOL_INSTEAD_FIT"
      },
      {
        "key": "B",
        "text": "6 顆",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      },
      {
        "key": "C",
        "text": "12 顆",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "18 顆",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否掌握「盒裝球必須各邊長分別除以直徑取整數」，嚴防誤用「箱子體積除以單球正方體體積」的陷阱。",
      "steps": [
        {
          "type": "text",
          "text": "球不能切開來塞！分別計算長、寬、高各能擺幾顆：長 26 ÷ 8 ＝ 3 顆（餘 2 公分塞不下第 4 顆）；寬 17 ÷ 8 ＝ 2 顆（餘 1 公分）；高 16 ÷ 8 ＝ 2 層。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 125\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"18\" width=\"128\" height=\"86\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><text x=\"84\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">長：26 ÷ 8</text><text x=\"84\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">取 3 顆（餘 2）</text><rect x=\"166\" y=\"18\" width=\"128\" height=\"86\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><text x=\"230\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">寬：17 ÷ 8</text><text x=\"230\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">取 2 顆（餘 1）</text><rect x=\"312\" y=\"18\" width=\"128\" height=\"86\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"376\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">高：16 ÷ 8</text><text x=\"376\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">疊 2 層</text></svg>",
          "caption": "圖解：多餘的 2 公分與 1 公分空隙都放不下球，總數為 3 × 2 × 2 ＝ 12 顆"
        },
        {
          "type": "eq",
          "expr": "3 × 2 × 2 ＝ 12"
        },
        {
          "type": "answer",
          "text": "答：12 顆"
        }
      ],
      "distractorAnalysis": {
        "A": "【誤用總體積直接相除】算成（26 × 17 × 16）÷（8 × 8 × 8）＝ 7072 ÷ 512 ＝ 13.8… 誤以為能塞 13 顆，沒考慮餘數縫隙不能拼成一顆球。",
        "D": "【餘數錯誤進位】以為寬或長還剩一點空間就能勉強塞進去，算成 3 × 3 × 2 ＝ 18 顆。",
        "B": "【忘記疊第二層】只算了底層的 3 × 2 ＝ 6 顆，漏算高度 16 公分可以擺 2 層。"
      },
      "insight": "盒子裝球不看「總體積」，因為縫隙不能拿來湊一顆新球！一律「長、寬、高各算各的，餘數全捨去」再相乘！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "盒裝球最多數量 ＝（長 ÷ 球直徑的商）×（寬 ÷ 球直徑的商）×（高 ÷ 球直徑的商）"
      ],
      "conceptCompare": "【給半徑的大魔王陷阱】如果題目改寫「放入『半徑』4 公分的棒球」，切記先算出直徑 ＝ 4 × 2 ＝ 8 公分，再分別去除以長寬高！",
      "examVariations": "若把紙箱寬度再增加 7 公分變成 24 公分，每層就能從 2 排變 3 排，總共可多裝 3 × 1 × 2 ＝ 6 顆（變 18 顆）。"
    },
    "check": {
      "expr": "3 * 2 * 2",
      "expect": "12"
    }
  },
  {
    "id": "U10-S4-M-015",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-4",
    "sectionName": "球與包裝空間應用",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "長方體禮盒十字緞帶繞法心算",
    "level": 8,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖長方體禮盒長 15 公分、寬 10 公分、高 8 公分，採十字綁法包紮（含打結 20 公分），共用掉幾公分緞帶？",
    "svg": "<svg viewBox=\"0 0 360 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"90,52 210,52 250,28 130,28\" fill=\"#fef3c7\" stroke=\"#b45309\" stroke-width=\"2\"/><polygon points=\"90,52 210,52 210,118 90,118\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><polygon points=\"210,52 250,28 250,94 210,118\" fill=\"#fcd34d\" stroke=\"#b45309\" stroke-width=\"2\"/><line x1=\"150\" y1=\"52\" x2=\"150\" y2=\"118\" stroke=\"#dc2626\" stroke-width=\"3.2\"/><line x1=\"150\" y1=\"52\" x2=\"190\" y2=\"28\" stroke=\"#dc2626\" stroke-width=\"3.2\"/><line x1=\"110\" y1=\"40\" x2=\"230\" y2=\"40\" stroke=\"#dc2626\" stroke-width=\"3.2\"/><line x1=\"230\" y1=\"40\" x2=\"230\" y2=\"106\" stroke=\"#dc2626\" stroke-width=\"3.2\"/><circle cx=\"170\" cy=\"40\" r=\"5\" fill=\"#b91c1c\"/><text x=\"150\" y=\"138\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">長 15 公分</text><text x=\"298\" y=\"62\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">寬 10 公分</text><text x=\"46\" y=\"90\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">高 8 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "82 公分",
        "trapCode": "U10_RIBBON_FORGET_KNOT"
      },
      {
        "key": "B",
        "text": "102 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "86 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      },
      {
        "key": "D",
        "text": "116 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生在長方體十字綁法中，能否正確數出「2 條長 ＋ 2 條寬 ＋ 4 條高 ＋ 打結」的段數關係。",
      "steps": [
        {
          "type": "text",
          "text": "十字繞一圈會經過上面、下面、左、右、前、後 6 個面：長在頂面與底面各經過 1 次（2 段）；寬在頂面與底面各經過 1 次（2 段）；但高在四個側面各經過 1 次（共 4 段）！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14\" y=\"20\" width=\"100\" height=\"78\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><text x=\"64\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">長（2 段）</text><text x=\"64\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">15 × 2 ＝ 30</text><rect x=\"124\" y=\"20\" width=\"100\" height=\"78\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><text x=\"174\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">寬（2 段）</text><text x=\"174\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">10 × 2 ＝ 20</text><rect x=\"234\" y=\"20\" width=\"100\" height=\"78\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"284\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\">高（4 段）</text><text x=\"284\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">8 × 4 ＝ 32</text><rect x=\"344\" y=\"20\" width=\"100\" height=\"78\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"394\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">打結</text><text x=\"394\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">＋ 20 ＝ 102</text></svg>",
          "caption": "圖解：上下面各走 1 次長與寬，四個側面都要走高（共 4 條高）"
        },
        {
          "type": "eq",
          "expr": "15 × 2 ＋ 10 × 2 ＋ 8 × 4 ＋ 20 ＝ 30 ＋ 20 ＋ 32 ＋ 20 ＝ 102"
        },
        {
          "type": "answer",
          "text": "答：102 公分"
        }
      ],
      "distractorAnalysis": {
        "C": "【高只算 2 段】誤以為長、寬、高都各自乘 2，漏了前後左右共 4 條高，錯算成 30 ＋ 20 ＋ 16 ＋ 20 ＝ 86 公分。",
        "D": "【把長算成 4 段】誤以為長走了 4 段、高只走 2 段，算成 15 × 4 ＋ 10 × 2 ＋ 8 × 2 ＋ 20 ＝ 116 公分。",
        "A": "【漏加打結長度】算對繞盒身的 30 ＋ 20 ＋ 32 ＝ 82 公分，卻忘了加上打結用掉的 20 公分。"
      },
      "insight": "長方體十字綁法口訣：「長 2 條、寬 2 條，只有『高』會垂直經過四個側面變 4 條！」"
    },
    "extensionStudy": {
      "coreFormulas": [
        "長方體十字緞帶長 ＝ （長 ＋ 寬） × 2 ＋ 高 × 4 ＋ 打結長"
      ],
      "conceptCompare": "【雙十字綁法變形】若緞帶在長的方向多繞一圈變「井字型」，那長就會變 4 段、高變 6 段，考題看清箭頭數一數每面穿過幾條最穩。",
      "examVariations": "若題目改成「正方體禮盒，邊長 10 公分，十字綁法含打結 20 公分」，因為長寬高都是 10，直接 10 × 8 ＋ 20 ＝ 100 公分。"
    },
    "check": {
      "expr": "15 * 2 + 10 * 2 + 8 * 4 + 20",
      "expect": "102"
    }
  },
  {
    "id": "U10-S4-M-016",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "10-4",
    "sectionName": "球與包裝空間應用",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "圓柱十字綁帶逆推柱高",
    "level": 8,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "用一條長 120 公分的緞帶十字綁住底面直徑 14 公分的圓柱茶葉罐，打結處用掉 16 公分，這個茶葉罐高幾公分？",
    "options": [
      {
        "key": "A",
        "text": "16 公分",
        "trapCode": "U10_RIBBON_FORGET_KNOT"
      },
      {
        "key": "B",
        "text": "24 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      },
      {
        "key": "C",
        "text": "19 公分",
        "trapCode": "U10_RIBBON_SIDES_COUNT"
      },
      {
        "key": "D",
        "text": "12 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生能否逆向拆解圓柱十字綁帶結構：上下圓面各有 2 條直徑（共 4 條直徑），側面有 4 條高，加上打結總長 120 公分。",
      "steps": [
        {
          "type": "text",
          "text": "十字綁住圓柱時，頂面和底面各有 2 條交叉直徑（共 4 條直徑），側面垂直貼著 4 條罐身的高。先扣掉打結與 4 條直徑，剩下的再平分給 4 條高。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"130\" height=\"78\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"85\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\">4 條直徑＋打結</text><text x=\"85\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">14 × 4 ＋ 16 ＝ 72</text><rect x=\"166\" y=\"20\" width=\"130\" height=\"78\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><text x=\"231\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">剩下給 4 條高</text><text x=\"231\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">120 － 72 ＝ 48</text><rect x=\"312\" y=\"20\" width=\"128\" height=\"78\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"376\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">每條高</text><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">48 ÷ 4 ＝ 12</text></svg>",
          "caption": "圖解：總長 120 扣掉 4 條直徑（56）與打結（16），除以 4 得高 12 公分"
        },
        {
          "type": "eq",
          "expr": "（120 － 14 × 4 － 16） ÷ 4 ＝ 48 ÷ 4 ＝ 12"
        },
        {
          "type": "answer",
          "text": "答：12 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘了先扣打結處】只算（120 － 56）÷ 4 ＝ 16 公分，沒有扣掉打結的 16 公分。",
        "B": "【只除以 2 條高】誤以為側面只有左右 2 條高，把 48 ÷ 2 算成 24 公分。",
        "C": "【上下直徑只算 2 條】把圓面交叉看成各 1 條直徑（14 × 2 ＝ 28），算成（120 － 28 － 16）÷ 4 ＝ 19 公分。"
      },
      "insight": "圓柱十字綁法心法：「4 條直徑 ＋ 4 條高 ＋ 打結」＝（直徑 ＋ 高）× 4 ＋ 打結！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓柱十字緞帶長 ＝ （直徑 ＋ 柱高） × 4 ＋ 打結長",
        "逆算圓柱高 ＝ （緞帶總長 － 打結長） ÷ 4 － 直徑"
      ],
      "conceptCompare": "【心算更快的路】其實（120 － 16）÷ 4 ＝ 26 代表「1 條直徑 ＋ 1 條高」，再用 26 － 14 ＝ 12 公分，兩步直接心算出來！",
      "examVariations": "若題目改成「米字 3 圈交叉綁法」，上下會有 6 條直徑、側面有 6 條高，公式就改成（直徑 ＋ 柱高）× 6 ＋ 打結長。"
    },
    "check": {
      "expr": "(120 - 14 * 4 - 16) / 4",
      "expect": "12"
    }
  },
  {
    "id": "U10-RV-M-017",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合應用",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "球心距離與切面大小比較",
    "level": 9,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖實心球半徑 10 公分，甲切面通過球心，乙切面距球心 3 公分，丙切面距球心 6 公分，三個切面直徑由大到小為何？",
    "svg": "<svg viewBox=\"0 0 360 155\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"115\" cy=\"78\" r=\"60\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><ellipse cx=\"115\" cy=\"78\" rx=\"60\" ry=\"14\" fill=\"rgba(220,38,38,0.16)\" stroke=\"#dc2626\" stroke-width=\"2\"/><ellipse cx=\"115\" cy=\"54\" rx=\"52\" ry=\"11\" fill=\"rgba(217,119,6,0.14)\" stroke=\"#d97706\" stroke-width=\"2\"/><ellipse cx=\"115\" cy=\"34\" rx=\"38\" ry=\"8\" fill=\"rgba(22,163,74,0.14)\" stroke=\"#16a34a\" stroke-width=\"2\"/><circle cx=\"115\" cy=\"78\" r=\"3.5\" fill=\"#dc2626\"/><text x=\"210\" y=\"82\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">甲（過球心）</text><text x=\"210\" y=\"58\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">乙（距 3 公分）</text><text x=\"210\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">丙（距 6 公分）</text></svg>",
    "skipOptionNumMatch": true,
    "options": [
      {
        "key": "A",
        "text": "甲 ＝ 乙 ＝ 丙",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "B",
        "text": "甲 ＞ 乙 ＞ 丙",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "丙 ＞ 乙 ＞ 甲",
        "trapCode": "U10_SPHERE_CUT_CENTER"
      },
      {
        "key": "D",
        "text": "乙 ＞ 甲 ＞ 丙",
        "trapCode": "U10_PARALLEL_PERP_SWAP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否理解球體截面大小與「距離球心遠近」的反比關係：越靠近球心，切出的圓越大。",
      "steps": [
        {
          "type": "text",
          "text": "把球想成切西瓜：正中間通過球心的那一刀（甲，距球心 0 公分）最寬，直徑等於球直徑 10 × 2 ＝ 20 公分；切得越往邊緣（距離球心越遠），圓片就越小！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"130\" height=\"78\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"85\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\">甲（距 0 公分）</text><text x=\"85\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">直徑 20（最大）</text><rect x=\"166\" y=\"20\" width=\"130\" height=\"78\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><text x=\"231\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">乙（距 3 公分）</text><text x=\"231\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">較小（次之）</text><rect x=\"312\" y=\"20\" width=\"128\" height=\"78\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"376\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">丙（距 6 公分）</text><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">最偏邊緣（最小）</text></svg>",
          "caption": "圖解：距球心越近切面越大，順序為 甲 ＞ 乙 ＞ 丙"
        },
        {
          "type": "eq",
          "expr": "10 × 2 ＝ 20"
        },
        {
          "type": "answer",
          "text": "答：甲 ＞ 乙 ＞ 丙"
        }
      ],
      "distractorAnalysis": {
        "C": "【距離越大誤以為圓越大】沒有想像球面收縮的樣子，直接拿 6 ＞ 3 ＞ 0 排成丙 ＞ 乙 ＞ 甲。",
        "D": "【過球心條件混淆】忘記通過球心才是最大圓，誤把乙排到第一位。",
        "A": "【誤以為球切面都等大】錯把圓柱「平行底面切都一樣大」的性質套在球體上。"
      },
      "insight": "切西瓜原理：往正中央切過去（過球心）那片最大片，越靠近邊邊切出來越小片！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "球體切面大小：距離球心越近，圓面積與直徑越大；通過球心（距離為 0）為最大圓"
      ],
      "conceptCompare": "【圓柱切面 vs 球體切面】平行底面切圓柱，每一刀切出的圓都一樣大；但球體平行切每一刀大小都不同，只有過球心最大！",
      "examVariations": "若題目給丁切面距球心也是 3 公分（在球心另一側），那乙和丁就會一樣大（乙 ＝ 丁）。"
    },
    "check": {
      "expr": "10 * 2",
      "expect": "20"
    }
  },
  {
    "id": "U10-RV-M-018",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合應用",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "正方體貼紙塗色切塊計數",
    "level": 9,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖是一個 3×3×3 的魔術方塊，把最外層 6 個面全貼滿紅色貼紙後拆開，「剛好只貼到 2 面紅紙」的小方塊有幾個？",
    "svg": "<svg viewBox=\"0 0 320 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,48 160,48 160,138 70,138\" fill=\"#fee2e2\" stroke=\"#991b1b\" stroke-width=\"2\"/><polygon points=\"70,48 115,18 205,18 160,48\" fill=\"#fecaca\" stroke=\"#991b1b\" stroke-width=\"2\"/><polygon points=\"160,48 205,18 205,108 160,138\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\"/><line x1=\"100\" y1=\"48\" x2=\"100\" y2=\"138\" stroke=\"#991b1b\" stroke-width=\"1.4\"/><line x1=\"130\" y1=\"48\" x2=\"130\" y2=\"138\" stroke=\"#991b1b\" stroke-width=\"1.4\"/><line x1=\"70\" y1=\"78\" x2=\"160\" y2=\"78\" stroke=\"#991b1b\" stroke-width=\"1.4\"/><line x1=\"70\" y1=\"108\" x2=\"160\" y2=\"108\" stroke=\"#991b1b\" stroke-width=\"1.4\"/><line x1=\"85\" y1=\"38\" x2=\"175\" y2=\"38\" stroke=\"#991b1b\" stroke-width=\"1.4\"/><line x1=\"100\" y1=\"28\" x2=\"190\" y2=\"28\" stroke=\"#991b1b\" stroke-width=\"1.4\"/><line x1=\"100\" y1=\"48\" x2=\"145\" y2=\"18\" stroke=\"#991b1b\" stroke-width=\"1.4\"/><line x1=\"130\" y1=\"48\" x2=\"175\" y2=\"18\" stroke=\"#991b1b\" stroke-width=\"1.4\"/><line x1=\"175\" y1=\"38\" x2=\"175\" y2=\"128\" stroke=\"#991b1b\" stroke-width=\"1.4\"/><line x1=\"190\" y1=\"28\" x2=\"190\" y2=\"118\" stroke=\"#991b1b\" stroke-width=\"1.4\"/><line x1=\"160\" y1=\"78\" x2=\"205\" y2=\"48\" stroke=\"#991b1b\" stroke-width=\"1.4\"/><line x1=\"160\" y1=\"108\" x2=\"205\" y2=\"78\" stroke=\"#991b1b\" stroke-width=\"1.4\"/><text x=\"262\" y=\"82\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\">外層全貼滿紅紙</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "8 個",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "B",
        "text": "6 個",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "C",
        "text": "12 個",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "24 個",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生對正方體「頂點、邊、面」位置的空間定位能力：3 面貼紙在頂點、2 面貼紙在邊中間、1 面貼紙在面正中心。",
      "steps": [
        {
          "type": "text",
          "text": "拆解魔術方塊的小方塊位置：8 個角（頂點）都貼了 3 面紅紙；6 個大面的正中心只有 1 面貼紙；只有「12 條邊的正中間」那 1 顆，剛好夾在兩個面之間貼了 2 面紅紙！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"20\" width=\"130\" height=\"78\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><text x=\"83\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">3 面紅紙（頂點）</text><text x=\"83\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" fill=\"#0f172a\">8 個角落 ＝ 8 顆</text><rect x=\"165\" y=\"20\" width=\"130\" height=\"78\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><text x=\"230\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\">2 面紅紙（邊中間）</text><text x=\"230\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">12 條邊 × 1 ＝ 12 顆</text><rect x=\"312\" y=\"20\" width=\"130\" height=\"78\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><text x=\"377\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">1 面紅紙（面中心）</text><text x=\"377\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" fill=\"#0f172a\">6 個面 × 1 ＝ 6 顆</text></svg>",
          "caption": "圖解：2 面貼紙一定長在「邊」上（扣掉頂點），正方體有 12 條邊共 12 顆"
        },
        {
          "type": "eq",
          "expr": "12 × （3 － 2） ＝ 12 × 1 ＝ 12"
        },
        {
          "type": "answer",
          "text": "答：12 個"
        }
      ],
      "distractorAnalysis": {
        "A": "【把頂點當邊中間】算出的是 8 個頂點上「貼了 3 面紅紙」的角塊數量。",
        "B": "【把面中心當邊中間】算出的是 6 個面正中央「只貼了 1 面紅紙」的中心塊數量。",
        "D": "【忘了扣掉兩端頂點】以為每條邊有 2 顆或每面多重複算，錯算成 12 × 2 ＝ 24 個。"
      },
      "insight": "魔方塗色必殺對應：3 面塗色找「8 個頂點」、2 面塗色找「12 條邊」、1 面塗色找「6 個面中心」、0 面在最裡面！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "正方體三要素位置：3 面貼紙在頂點（固定 8 個）、2 面貼紙在邊上、1 面貼紙在面內"
      ],
      "conceptCompare": "【驗算總顆數】8（3面）＋ 12（2面）＋ 6（1面）＋ 1（最中心0面）＝ 27 顆，剛好等於 3 × 3 × 3！",
      "examVariations": "升級到「4×4×4」大方塊時，每條邊中間有 4 － 2 ＝ 2 顆 2 面塗色，所以共有 12 × 2 ＝ 24 顆！"
    },
    "check": {
      "expr": "12 * (3 - 2)",
      "expect": "12"
    }
  },
  {
    "id": "U10-RV-M-019",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合應用",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "正方體削角後頂點邊面數變化",
    "level": 10,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖正方體從右上角斜切掉一個小三角錐，切面是三角形，切完後的新立體圖形「頂點、邊、面」合計共幾個？",
    "svg": "<svg viewBox=\"0 0 340 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"75,45 145,45 175,75 175,135 75,135\" fill=\"#e0f2fe\" stroke=\"#1e40af\" stroke-width=\"2\"/><polygon points=\"75,45 115,20 185,20 145,45\" fill=\"#bfdbfe\" stroke=\"#1e40af\" stroke-width=\"2\"/><polygon points=\"145,45 185,20 215,50 215,110 175,135 175,75\" fill=\"#93c5fd\" stroke=\"#1e40af\" stroke-width=\"2\"/><polygon points=\"145,45 185,20 215,50 175,75\" fill=\"#fecaca\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><polyline points=\"185,20 185,50 215,50\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"268\" y=\"64\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">斜切掉一角</text><text x=\"268\" y=\"92\" text-anchor=\"middle\" font-size=\"12\" fill=\"#334155\">新切面為三角形</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "29 個",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "B",
        "text": "32 個",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "30 個",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "25 個",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生在立體截角時，能否從局部空間變化推算「頂點增加 2、邊增加 3、面增加 1」的幾何結構。",
      "steps": [
        {
          "type": "text",
          "text": "原本正方體有 8 頂點、12 邊、6 面（共 26）。削掉 1 個尖角時：1 個原頂點不見了，卻切出三角形的 3 個新頂點（8 － 1 ＋ 3 ＝ 10 頂點）；多了切面的 3 條新邊（12 ＋ 3 ＝ 15 邊）；多了 1 個新平面（6 ＋ 1 ＝ 7 面）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"20\" width=\"130\" height=\"78\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><text x=\"83\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">頂點（淨多 2）</text><text x=\"83\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">8 － 1 ＋ 3 ＝ 10</text><rect x=\"165\" y=\"20\" width=\"130\" height=\"78\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"230\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\">邊（淨多 3）</text><text x=\"230\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">12 ＋ 3 ＝ 15</text><rect x=\"312\" y=\"20\" width=\"130\" height=\"78\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"377\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">面（淨多 1）</text><text x=\"377\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">6 ＋ 1 ＝ 7</text></svg>",
          "caption": "圖解：每削掉一個角，頂點＋2、邊＋3、面＋1，總合從 26 變成 32"
        },
        {
          "type": "eq",
          "expr": "10 ＋ 15 ＋ 7 ＝ 32"
        },
        {
          "type": "answer",
          "text": "答：32 個"
        }
      ],
      "distractorAnalysis": {
        "A": "【以為頂點數不變】只想到多了 3 條邊和 1 面卻算成 26 ＋ 3 ＝ 29，忽略一個角變出三個新角。",
        "D": "【以為切掉就會變少】沒在腦中建立截面三角形，錯覺 26 － 1 ＝ 25 個。",
        "C": "【頂點少算 2 個】以為砍掉 1 個角就只是 1 換 1，誤算成 8 ＋ 15 ＋ 7 ＝ 30 個。"
      },
      "insight": "削角奇蹟：豆腐砍掉一個尖角，表面看似變少，其實切口會長出 1 個三角形（＋1 面、＋3 邊、＋2 頂點），總數反而多 6！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "正方體不經過其他頂點斜切一角：頂點數 ＋ 2、邊數 ＋ 3、面數 ＋ 1（總共 ＋ 6）"
      ],
      "conceptCompare": "【切一角 vs 切掉兩個角】如果把正方體兩個不相鄰的角都斜切掉，總和會增加 6 × 2 ＝ 12，變成 26 ＋ 12 ＝ 38 個！",
      "examVariations": "資優考題常變形：「如果這一刀剛好沿著正方體三個鄰近頂點切過去」，那原本 3 個頂點還在、沒長出新頂點，頂點反而變成 8 － 1 ＝ 7 個！"
    },
    "check": {
      "expr": "(8 - 1 + 3) + (12 + 3) + (6 + 1)",
      "expect": "32"
    }
  },
  {
    "id": "U10-RV-M-020",
    "legacyId": null,
    "unitId": "U10",
    "targetUnitId": "U10",
    "section": "REVIEW",
    "sectionName": "柱體、錐體和球綜合應用",
    "batch": "純腦力體操",
    "source": "康軒五上U10純腦力體操",
    "category": "雙角錐底面黏合面與邊總和",
    "level": 10,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "把兩個完全相同的六角錐「底面緊密黏合」做成一個雙錐陀螺，黏合後露在外面的「面數」和「邊數」合計共有多少？",
    "options": [
      {
        "key": "A",
        "text": "30",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "38",
        "trapCode": "U10_VERTEX_EDGE_FACE_MIX"
      },
      {
        "key": "C",
        "text": "32",
        "trapCode": "U10_BASE_N_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "24",
        "trapCode": "U10_PRISM_PYRAMID_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生對組合立體形體「內部隱藏面消失」與「共用邊重疊合併」的高階空間視覺扣減能力。",
      "steps": [
        {
          "type": "text",
          "text": "兩個六角錐原本各有 7 個面、12 條邊。把底面緊貼黏合後：2 個六邊形底面藏在肚子裡面不見了，外面剩下 6 ＋ 6 ＝ 12 個三角形側面；底邊的 6 條邊兩兩貼合變成共用邊，所以邊數從 24 條變成 24 － 6 ＝ 18 條。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 125\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"90,18 46,62 90,74 134,62\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.8\"/><polygon points=\"90,108 46,62 90,74 134,62\" fill=\"#fcd34d\" stroke=\"#d97706\" stroke-width=\"1.8\"/><line x1=\"90\" y1=\"18\" x2=\"90\" y2=\"74\" stroke=\"#b45309\" stroke-width=\"1.5\"/><line x1=\"90\" y1=\"108\" x2=\"90\" y2=\"74\" stroke=\"#b45309\" stroke-width=\"1.5\"/><rect x=\"166\" y=\"20\" width=\"130\" height=\"82\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><text x=\"231\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">外露面數（減 2 底）</text><text x=\"231\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">6 ＋ 6 ＝ 12</text><rect x=\"312\" y=\"20\" width=\"130\" height=\"82\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"377\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">總邊數（減 6 重疊）</text><text x=\"377\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">6 × 3 ＝ 18</text></svg>",
          "caption": "圖解：2 個底面藏進內部、底圈 6 條邊重疊，合計 12 ＋ 18 ＝ 30"
        },
        {
          "type": "eq",
          "expr": "（6 × 2） ＋ （6 × 3） ＝ 12 ＋ 18 ＝ 30"
        },
        {
          "type": "answer",
          "text": "答：30"
        }
      ],
      "distractorAnalysis": {
        "C": "【記得扣重疊邊卻忘了底面消失】邊數算對 18 條，但面數仍算 7 ＋ 7 ＝ 14 個，得到 14 ＋ 18 ＝ 32。",
        "D": "【把面數和邊數都誤算成 12】誤以為兩個角錐黏合後只有 12 面和 12 條斜邊，漏算中間共用的一圈 6 條邊。",
        "B": "【完全沒扣掉黏合重疊】直接把兩個六角錐的（7 ＋ 12）× 2 ＝ 38 當作答案，忽略內部底面消失且邊重疊。"
      },
      "insight": "底面黏底面超級口訣：雙六角錐「6 條共用腰邊、6 條上斜邊、6 條下斜邊」共 18 條邊（像六角柱一樣 6 × 3），再加 12 個三角形面就是 30！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩個相同底面邊數的角錐黏合後：面數 ＝ 底邊數 × 2、邊數 ＝ 底邊數 × 3、頂點數 ＝ 底邊數 ＋ 2"
      ],
      "conceptCompare": "【雙錐體 vs 單角柱】神奇吧！兩個六角錐黏合後有 12 面、18 邊、8 頂點；而單一個六角柱有 8 面、18 邊、12 頂點——兩者「邊數」剛好一樣，面數和頂點數則恰好對調！",
      "examVariations": "若改黏合「兩個五角柱的底面」形成更高的長柱，側面會拉直融合嗎？若只問幾何體本身仍是 1 個五角柱（7 面、15 邊、10 頂點）！"
    },
    "check": {
      "expr": "(6 * 2) + (6 * 3)",
      "expect": "30"
    }
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U10'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
