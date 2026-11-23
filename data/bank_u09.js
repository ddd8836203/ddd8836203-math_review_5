// U09 4D 滿血題庫分片（共 60 題）
(function (root) {
  const DATA = [
  {
    "id": "U09-S1-B-001",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-1 認識線對稱圖形與對稱軸",
    "section": "9-1",
    "sectionName": "認識線對稱圖形與對稱軸",
    "category": "生活平面圖形的線對稱辨識",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "美術課上老師發下四張不同形狀的紙卡：正方形安全出口牌、等腰三角形警告牌、斜邊不等長的平行四邊形旗幟、正六邊形螺帽模型。這四張紙卡之中，總共有幾張是線對稱圖形？",
    "options": [
      {
        "key": "A",
        "text": "3 張",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "4 張",
        "trapCode": "U09_PARALLELOGRAM_SYM"
      },
      {
        "key": "C",
        "text": "2 張",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "D",
        "text": "1 張",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生能否透過「對摺後兩側完全疊合」的定義，辨識常見幾何與生活圖形是否為線對稱圖形。",
      "steps": [
        {
          "type": "text",
          "text": "如果一個圖形沿著某條直線對摺後，兩邊能完全重合，就是線對稱圖形。正方形、等腰三角形和正六邊形都可以找到對稱軸；但一般的平行四邊形無論怎麼對摺，斜角都會錯開。"
        },
        {
          "type": "svg",
          "caption": "四種圖形對摺判斷：僅平行四邊形找不到能讓兩側重合的對稱軸",
          "svg": "<svg viewBox=\"0 0 380 185\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"22\" y=\"42\" width=\"60\" height=\"60\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"52\" y1=\"32\" x2=\"52\" y2=\"112\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"52\" y=\"135\" font-size=\"12\" text-anchor=\"middle\" fill=\"#0f172a\">正方形</text><text x=\"52\" y=\"155\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">是對稱</text><polygon points=\"142,42 110,102 174,102\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"142\" y1=\"32\" x2=\"142\" y2=\"112\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"142\" y=\"135\" font-size=\"12\" text-anchor=\"middle\" fill=\"#0f172a\">等腰三角形</text><text x=\"142\" y=\"155\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">是對稱</text><polygon points=\"212,48 268,48 250,102 194,102\" fill=\"rgba(239,68,68,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"231\" y1=\"36\" x2=\"231\" y2=\"112\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"231\" y=\"135\" font-size=\"12\" text-anchor=\"middle\" fill=\"#0f172a\">平行四邊形</text><text x=\"231\" y=\"155\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">非對稱</text><polygon points=\"325,38 353,54 353,88 325,104 297,88 297,54\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"325\" y1=\"30\" x2=\"325\" y2=\"112\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"325\" y=\"135\" font-size=\"12\" text-anchor=\"middle\" fill=\"#0f172a\">正六邊形</text><text x=\"325\" y=\"155\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">是對稱</text></svg>"
        },
        {
          "type": "eq",
          "expr": "4 － 1 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：3 張"
        }
      ],
      "distractorAnalysis": {
        "C": "【漏數等腰三角形或正六邊形】誤以為只有正方形或規則偶數邊圖形才對稱，忽略等腰三角形也具有 1 條對稱軸。",
        "D": "【計算或判讀失誤】將非對稱圖形的數量「1 張」當成題目所問的線對稱圖形數量。",
        "B": "【誤認平行四邊形為線對稱】看見平行四邊形對邊相等，誤以為它也能對摺重合，其實沿中線或對角線摺都無法疊合。"
      },
      "insight": "判斷線對稱圖形時，要在腦中實際「對摺一次」看頂點與邊會不會完全吻合，不能只看對邊長相一樣就打勾。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "線對稱圖形定義：沿對稱軸對摺後，兩側圖形完全疊合"
      ],
      "conceptCompare": "【平行四邊形 vs 等腰梯形】平行四邊形雖然上下左右對邊相等，卻沒有對稱軸；等腰梯形雖然只有兩腰相等，卻擁有 1 條垂直通過上下底中點的對稱軸。",
      "examVariations": "考試常把「平行四邊形」混入正多邊形與圓形中，問「有幾個是線對稱圖形」，記得要把一般平行四邊形扣掉。"
    },
    "check": {
      "expr": "4 - 1",
      "expect": "3"
    }
  },
  {
    "id": "U09-S1-B-002",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-1 認識線對稱圖形與對稱軸",
    "section": "9-1",
    "sectionName": "認識線對稱圖形與對稱軸",
    "category": "英文字母的對稱性判斷",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "英語教室佈置用了四個印刷體大寫字母木牌，分別是「W」、「H」、「Z」、「T」。請問這四個字母木牌中，共有幾個可以畫出對稱軸？",
    "options": [
      {
        "key": "A",
        "text": "2 個",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "B",
        "text": "4 個",
        "trapCode": "U09_PARALLELOGRAM_SYM"
      },
      {
        "key": "C",
        "text": "1 個",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "3 個",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生對符號與大寫字母結構的左右、上下對摺想像能力，區分線對稱與中心旋轉卻無對稱軸的字形。",
      "steps": [
        {
          "type": "text",
          "text": "逐一檢查四個字母：W 和 T 都能沿著中央直線左右對摺疊合；H 不只左右對摺疊合，上下對摺也會疊合，共有 2 條對稱軸；Z 的上下兩橫向相反方向伸出，不管直摺、橫摺或斜摺都無法疊合。"
        },
        {
          "type": "svg",
          "caption": "大寫字母 W、H、T 皆可畫出紅色虛線對稱軸，僅 Z 無法對摺疊合",
          "svg": "<svg viewBox=\"0 0 380 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"52\" y=\"102\" font-size=\"56\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1e293b\">W</text><line x1=\"52\" y1=\"36\" x2=\"52\" y2=\"116\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,3\"/><text x=\"52\" y=\"148\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">1 條</text><text x=\"142\" y=\"102\" font-size=\"56\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1e293b\">H</text><line x1=\"142\" y1=\"36\" x2=\"142\" y2=\"116\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,3\"/><line x1=\"108\" y1=\"80\" x2=\"176\" y2=\"80\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,3\"/><text x=\"142\" y=\"148\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">2 條</text><text x=\"234\" y=\"102\" font-size=\"56\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#64748b\">Z</text><text x=\"234\" y=\"148\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">0 條</text><text x=\"324\" y=\"102\" font-size=\"56\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1e293b\">T</text><line x1=\"324\" y1=\"36\" x2=\"324\" y2=\"116\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,3\"/><text x=\"324\" y=\"148\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">1 條</text></svg>"
        },
        {
          "type": "eq",
          "expr": "4 － 1 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：3 個"
        }
      ],
      "distractorAnalysis": {
        "A": "【漏算 T 或 W】只認出對稱特徵明顯的 H 與 W，忽略直線對稱的 T。",
        "B": "【把旋轉錯認成對稱】誤以為 Z 轉半圈長得一樣就算線對稱，忽略對摺時上下兩橫會錯開。",
        "C": "【誤解題意問成沒有對稱軸的數量】只數了沒有對稱軸的 Z 而選 1 個。"
      },
      "insight": "像 Z、N、S 這類「轉半圈長一樣」的字母，就像平行四邊形一樣沒有對稱軸，對摺時筆畫會跑到對面。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "常見有對稱軸字母：A、B、C、D、E、H、I、M、O、T、U、V、W、X、Y"
      ],
      "conceptCompare": "【線對稱 vs 旋轉對稱】H 和 X 既有對稱軸又旋轉對稱；N、S、Z 只有旋轉對稱，沒有任何對稱軸。",
      "examVariations": "常改考國字（例如「中、田、品、羽」），一樣用垂直或水平線對摺檢查筆畫是否對齊。"
    },
    "check": {
      "expr": "4 - 1",
      "expect": "3"
    }
  },
  {
    "id": "U09-S1-B-003",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-1 認識線對稱圖形與對稱軸",
    "section": "9-1",
    "sectionName": "認識線對稱圖形與對稱軸",
    "category": "長方形的對稱軸數量與對角線辨析",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖的長方形書籤，長 10 公分、寬 6 公分。如果想把書籤摺成兩半讓左右或上下邊緣完全重合，這張書籤一共有幾條對稱軸？",
    "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"75\" y=\"36\" width=\"210\" height=\"100\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2.2\"/><text x=\"180\" y=\"25\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">長 10 公分</text><text x=\"316\" y=\"90\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">寬 6 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "2 條",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "4 條",
        "trapCode": "U09_DIAG_NOT_AXIS"
      },
      {
        "key": "C",
        "text": "1 條",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "D",
        "text": "0 條",
        "trapCode": "U09_PARALLELOGRAM_SYM"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "釐清「長方形對角線不是對稱軸」的常見迷思，確認學生理解長方形僅有 2 條通過對邊中點的對稱軸。",
      "steps": [
        {
          "type": "text",
          "text": "把長方形沿著「長邊中點連線」左右對摺可以完全重合，沿著「寬邊中點連線」上下對摺也能完全重合；但若沿著斜的對角線對摺，長邊和短邊會歪斜凸出，無法完全疊合。"
        },
        {
          "type": "svg",
          "caption": "紅色虛線為長方形的 2 條對稱軸；藍色斜虛線（對角線）對摺無法疊合",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"75\" y=\"38\" width=\"210\" height=\"104\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"26\" x2=\"180\" y2=\"154\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><line x1=\"60\" y1=\"90\" x2=\"300\" y2=\"90\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><line x1=\"75\" y1=\"38\" x2=\"285\" y2=\"142\" stroke=\"#2563eb\" stroke-width=\"1.6\" stroke-dasharray=\"3,4\"/><text x=\"180\" y=\"175\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">紅線 2 條為對稱軸（藍斜線不重合）</text></svg>"
        },
        {
          "type": "answer",
          "text": "答：2 條"
        }
      ],
      "distractorAnalysis": {
        "B": "【誤把對角線當成對稱軸】把正方形的 4 條對稱軸記憶套用到長方形，誤以為長方形的兩條對角線也是對稱軸。",
        "C": "【只數了直向或橫向其中一條】忘記長方形把長邊對長邊摺、寬邊對寬邊摺都能疊合。",
        "D": "【把長方形和一般平行四邊形混淆】誤以為四邊不完全等長就沒有對稱軸。"
      },
      "insight": "長方形拿一張便條紙斜對角摺摺看最清楚：尖角一定會凸出長方形外面，所以長方形只有 2 條對稱軸。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "長方形：2 條對稱軸（對角線不是對稱軸）",
        "正方形：4 條對稱軸（含 2 條對角線）"
      ],
      "conceptCompare": "【長方形 vs 正方形】正方形因為四邊等長，斜對角對摺鄰邊剛好重疊；長方形長寬不等，對角線對摺長邊會多出一截。",
      "examVariations": "段考是非題與選擇題最愛出「長方形的對角線是它的對稱軸嗎？」，答案永遠是否定的。"
    },
    "check": {
      "expr": "2",
      "expect": "2"
    }
  },
  {
    "id": "U09-S1-B-004",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-1 認識線對稱圖形與對稱軸",
    "section": "9-1",
    "sectionName": "認識線對稱圖形與對稱軸",
    "category": "正多邊形的對稱軸規律",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "已知正三角形有 3 條對稱軸，正方形有 4 條對稱軸，正六邊形有 6 條對稱軸。請問一個每邊都一樣長、每個角都一樣大的正八邊形紙板，共有幾條對稱軸？",
    "options": [
      {
        "key": "A",
        "text": "4 條",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "B",
        "text": "16 條",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "8 條",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "6 條",
        "trapCode": "U09_DIAG_NOT_AXIS"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "歸納正多邊形「邊數等於對稱軸數量」的規律，並能區分偶數邊正多邊形的兩類對稱軸。",
      "steps": [
        {
          "type": "text",
          "text": "正多邊形有幾條邊，就有幾條對稱軸。正八邊形共有 8 個頂點與 8 條邊：對面頂點相連可畫出 4 條對稱軸，對邊中點相連也可畫出 4 條對稱軸，合起來共 8 條。"
        },
        {
          "type": "svg",
          "caption": "正八邊形對稱軸：紅虛線為對頂點連線（4 條），橘虛線為對邊中點連線（4 條）",
          "svg": "<svg viewBox=\"0 0 360 205\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"155,35 205,35 240,70 240,120 205,155 155,155 120,120 120,70\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"155\" y1=\"35\" x2=\"205\" y2=\"155\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"5,3\"/><line x1=\"205\" y1=\"35\" x2=\"155\" y2=\"155\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"5,3\"/><line x1=\"120\" y1=\"70\" x2=\"240\" y2=\"120\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"5,3\"/><line x1=\"120\" y1=\"120\" x2=\"240\" y2=\"70\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"5,3\"/><line x1=\"180\" y1=\"25\" x2=\"180\" y2=\"165\" stroke=\"#d97706\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"110\" y1=\"95\" x2=\"250\" y2=\"95\" stroke=\"#d97706\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"130\" y1=\"45\" x2=\"230\" y2=\"145\" stroke=\"#d97706\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><line x1=\"230\" y1=\"45\" x2=\"130\" y2=\"145\" stroke=\"#d97706\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"180\" y=\"190\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">4 ＋ 4 ＝ 8 條對稱軸</text></svg>"
        },
        {
          "type": "eq",
          "expr": "4 ＋ 4 ＝ 8"
        },
        {
          "type": "answer",
          "text": "答：8 條"
        }
      ],
      "distractorAnalysis": {
        "A": "【只數了其中一種對稱軸】只算到對頂點連線的 4 條，或只算到對邊中點連線的 4 條。",
        "B": "【把半條射線重複算成 1 條】從中心往 8 個頂點與 8 條邊各看一次，忘記兩端連線其實是同一條直線，誤算成 16 條。",
        "D": "【誤扣部分對稱軸】不確定斜邊是否能重合而隨意少算 2 條。"
      },
      "insight": "正幾邊形就有幾條對稱軸；切記同一條直線貫穿圖形兩端只算 1 條，不要左右各算 1 條！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "正多邊形的對稱軸條數 ＝ 邊數",
        "圓形的對稱軸條數 ＝ 無限多條"
      ],
      "conceptCompare": "【偶數邊 vs 奇數邊正多邊形】奇數邊（如正五邊形）每條對稱軸都一端過頂點、另一端過對邊中點；偶數邊（如正八邊形）則是頂點對頂點、邊中點對邊中點各占一半。",
      "examVariations": "進階題常考正多邊形內部所有對稱軸會相交於幾點（永遠只交於中心 1 點），或是圓形對稱軸有幾條。"
    },
    "check": {
      "expr": "4 + 4",
      "expect": "8"
    }
  },
  {
    "id": "U09-S1-B-005",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-1 認識線對稱圖形與對稱軸",
    "section": "9-1",
    "sectionName": "認識線對稱圖形與對稱軸",
    "category": "菱形與平行四邊形對稱軸比較",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "校慶教室布置要貼上 1 個非正方形的菱形紙板，和 1 個四個角都不是直角且鄰邊不等長的平行四邊形紙板。把這兩個紙板的對稱軸條數加起來，總共有幾條？",
    "options": [
      {
        "key": "A",
        "text": "4 條",
        "trapCode": "U09_PARALLELOGRAM_SYM"
      },
      {
        "key": "B",
        "text": "6 條",
        "trapCode": "U09_DIAG_NOT_AXIS"
      },
      {
        "key": "C",
        "text": "2 條",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "0 條",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "比較菱形（四邊等長、對角線即為對稱軸）與一般平行四邊形（無對稱軸）的差異。",
      "steps": [
        {
          "type": "text",
          "text": "菱形四條邊一樣長，沿著兩條對角線對摺時兩邊能完全重合，所以菱形有 2 條對稱軸；而鄰邊不等長、角又不是直角的一般平行四邊形，完全沒有對稱軸（0 條）。"
        },
        {
          "type": "svg",
          "caption": "菱形有 2 條紅色對稱軸（兩條對角線）；一般平行四邊形沒有對稱軸",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"95,35 145,90 95,145 45,90\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"95\" y1=\"25\" x2=\"95\" y2=\"155\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"35\" y1=\"90\" x2=\"155\" y2=\"90\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"95\" y=\"174\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">菱形：2 條</text><polygon points=\"235,45 315,45 285,135 205,135\" fill=\"rgba(239,68,68,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"235\" y1=\"45\" x2=\"285\" y2=\"135\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/><text x=\"260\" y=\"174\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">平行四邊形：0 條</text></svg>"
        },
        {
          "type": "eq",
          "expr": "2 ＋ 0 ＝ 2"
        },
        {
          "type": "answer",
          "text": "答：2 條"
        }
      ],
      "distractorAnalysis": {
        "A": "【誤認平行四邊形也有 2 條對稱軸】錯把平行四邊形的對角線也算成 2 條對稱軸，算成 2 ＋ 2 ＝ 4。",
        "D": "【誤以為菱形也沒有對稱軸】見菱形有斜邊就當作和平行四邊形一樣沒有對稱軸。",
        "B": "【誤把菱形對邊中點連線也算入】以為菱形有 4 條、平行四邊形有 2 條，錯加為 6 條。"
      },
      "insight": "四邊形對角線是不是對稱軸，要看「四條邊是不是一樣長」：菱形、正方形四邊等長，對角線就是對稱軸；長方形、一般平行四邊形鄰邊不等長，對角線就不是對稱軸。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "菱形（非正方形）：2 條對稱軸（就是兩條互相垂直的對角線）",
        "一般平行四邊形：0 條對稱軸"
      ],
      "conceptCompare": "【菱形 vs 長方形】兩者都剛好有 2 條對稱軸，但菱形的對稱軸是「兩條對角線」，長方形的對稱軸是「兩條對邊中點連線」。",
      "examVariations": "常結合梯形出題，問「正方形、長方形、菱形、等腰梯形、平行四邊形」共有幾種是線對稱圖形。"
    },
    "check": {
      "expr": "2 + 0",
      "expect": "2"
    }
  },
  {
    "id": "U09-S2-B-006",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-2 對稱點、對稱邊與對稱角",
    "section": "9-2",
    "sectionName": "對稱點、對稱邊與對稱角",
    "category": "辨識對稱點",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如下圖，六邊形 ABCDEF 是一個線對稱圖形，虛線為它的對稱軸。將這個圖形沿著虛線對摺時，點 B 會和哪一個頂點完全疊合？",
    "svg": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,32 105,74 125,146 180,174 235,146 255,74\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"18\" x2=\"180\" y2=\"188\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><text x=\"192\" y=\"26\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"88\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">B</text><text x=\"108\" y=\"156\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">C</text><text x=\"192\" y=\"186\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">D</text><text x=\"252\" y=\"156\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">E</text><text x=\"272\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">F</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "點 C",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "B",
        "text": "點 F",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "點 E",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "D",
        "text": "點 D",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生依對稱軸左右對摺後，找出對應疊合頂點（對稱點）的基礎能力。",
      "steps": [
        {
          "type": "text",
          "text": "虛線垂直通過點 A 與點 D，所以點 A 與點 D 都在對稱軸上，對摺後留在原地。左半邊較上面的點 B，沿著垂直對稱軸的方向翻到右半邊同一高度，剛好會和點 F 疊合。"
        },
        {
          "type": "svg",
          "caption": "紅色虛線為對稱軸，點 B 與點 F 連線垂直於對稱軸且距離相等",
          "svg": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,32 105,74 125,146 180,174 235,146 255,74\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"18\" x2=\"180\" y2=\"188\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><line x1=\"105\" y1=\"74\" x2=\"255\" y2=\"74\" stroke=\"#d97706\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/><polyline points=\"180,64 190,64 190,74\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><circle cx=\"105\" cy=\"74\" r=\"4.5\" fill=\"#dc2626\"/><circle cx=\"255\" cy=\"74\" r=\"4.5\" fill=\"#dc2626\"/><text x=\"192\" y=\"26\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"88\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">B</text><text x=\"108\" y=\"156\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">C</text><text x=\"192\" y=\"186\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">D</text><text x=\"252\" y=\"156\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">E</text><text x=\"272\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">F</text></svg>"
        },
        {
          "type": "answer",
          "text": "答：點 F"
        }
      ],
      "distractorAnalysis": {
        "C": "【錯找對側下方的點】雖然跨過了對稱軸，卻沒有保持與對稱軸垂直同一高度，錯連到左下對角方向的點 E。",
        "D": "【錯找在對稱軸上的頂點】把對稱軸端點 D 當作點 B 的對應位置。",
        "A": "【把同側相鄰點誤認成對稱點】沒有跨過對稱軸，錯找成同在左側的鄰近頂點 C。"
      },
      "insight": "找對稱點只要畫一條「垂直穿過對稱軸」的線段到另一側相同距離的位置即可。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對稱點連線一定「垂直」於對稱軸，且到軸的距離相等"
      ],
      "conceptCompare": "【軸上點 vs 軸外點】落在對稱軸上的頂點（如點 A、點 D）對摺時不會移動，它的對稱點就是它自己。",
      "examVariations": "若對稱軸改成水平線或斜線，找對稱點一樣要沿著垂直對稱軸的方向穿過去。"
    },
    "check": {
      "expr": "1",
      "expect": "1"
    }
  },
  {
    "id": "U09-S2-B-007",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-2 對稱點、對稱邊與對稱角",
    "section": "9-2",
    "sectionName": "對稱點、對稱邊與對稱角",
    "category": "辨識對稱邊與邊長相等性質",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "圖中的六邊形 ABCDEF 沿虛線對摺後兩側完全疊合。已知線段 AB 長 7 公分，線段 BC 長 5 公分，那麼線段 BC 的對稱邊是哪一條，長度又是多少公分？",
    "svg": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,28 96,76 118,154 180,180 242,154 264,76\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"190\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><text x=\"192\" y=\"24\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"80\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">B</text><text x=\"102\" y=\"160\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">C</text><text x=\"192\" y=\"190\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">D</text><text x=\"258\" y=\"160\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">E</text><text x=\"280\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">F</text><text x=\"115\" y=\"45\" font-size=\"12\" fill=\"#1d4ed8\">7 公分</text><text x=\"72\" y=\"120\" font-size=\"12\" fill=\"#1d4ed8\">5 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "線段 AF，長 7 公分",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "B",
        "text": "線段 DE，長 5 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "C",
        "text": "線段 EF，長 7 公分",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "線段 EF，長 5 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生先找出兩個端點的對稱點，再對應出「對稱邊」並利用「對稱邊等長」性質求長度。",
      "steps": [
        {
          "type": "text",
          "text": "點 B 的對稱點是點 F，點 C 的對稱點是點 E，所以把線段 BC 對摺到右邊，會和線段 EF 完全疊合。因為對稱邊一樣長，所以線段 EF 長 5 公分。"
        },
        {
          "type": "svg",
          "caption": "線段 BC 與線段 EF 為對稱邊（綠色粗線），長度同為 5 公分",
          "svg": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,28 96,76 118,154 180,180 242,154 264,76\" fill=\"rgba(59,130,246,0.08)\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><line x1=\"96\" y1=\"76\" x2=\"118\" y2=\"154\" stroke=\"#16a34a\" stroke-width=\"4\"/><line x1=\"264\" y1=\"76\" x2=\"242\" y2=\"154\" stroke=\"#16a34a\" stroke-width=\"4\"/><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"190\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><text x=\"192\" y=\"24\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"80\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">B</text><text x=\"102\" y=\"160\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">C</text><text x=\"192\" y=\"190\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">D</text><text x=\"258\" y=\"160\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">E</text><text x=\"280\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">F</text><text x=\"72\" y=\"122\" font-size=\"12\" font-weight=\"700\" fill=\"#16a34a\">5 公分</text><text x=\"292\" y=\"122\" font-size=\"12\" font-weight=\"700\" fill=\"#16a34a\">5 公分</text></svg>"
        },
        {
          "type": "answer",
          "text": "答：線段 EF，長 5 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【錯看成線段 AB 的對稱邊】把題目問的線段 BC 誤看成線段 AB，錯答成線段 AF。",
        "B": "【對稱邊位置下移錯位】線段 DE 的對稱邊是線段 DC，不是線段 BC。",
        "C": "【邊長抄錯】找對了對稱邊是線段 EF，卻誤把上邊線段 AB 的 7 公分抄成線段 EF 的長度。"
      },
      "insight": "先對點、再連線：B 對 F、C 對 E，因此線段 BC 一定對應到線段 EF（寫成線段 FE 也可以）。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "線對稱圖形的對稱邊長度完全相等"
      ],
      "conceptCompare": "【線段順序標示】線段 EF 與線段 FE 指的是同一條邊，不過按照對稱點順序記為 B→F、C→E 就不容易看錯。",
      "examVariations": "有時會把線段 CD 當成由兩個半邊組成的底邊，要看清楚題目問的是整條底邊還是左半邊。"
    },
    "check": {
      "expr": "5",
      "expect": "5"
    }
  },
  {
    "id": "U09-S2-B-008",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-2 對稱點、對稱邊與對稱角",
    "section": "9-2",
    "sectionName": "對稱點、對稱邊與對稱角",
    "category": "辨識對稱角與角度相等性質",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "右圖是一個風箏形狀的四邊形 ABCD，以虛線 AC 為對稱軸。已知角 B 是 105 度，頂角角 BAD 是 80 度，請問角 D 的度數是多少度？",
    "svg": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,26 95,90 180,174 265,90\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"186\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><text x=\"192\" y=\"24\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"78\" y=\"94\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">B</text><text x=\"192\" y=\"184\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">C</text><text x=\"280\" y=\"94\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">D</text><text x=\"128\" y=\"96\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">105 度</text><text x=\"180\" y=\"58\" font-size=\"12\" text-anchor=\"middle\" fill=\"#475569\">80 度</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "80 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      },
      {
        "key": "B",
        "text": "75 度",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "160 度",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "D",
        "text": "105 度",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生理解「對稱角完全疊合，所以度數相等」的性質，並排除頂角 80 度的干擾。",
      "steps": [
        {
          "type": "text",
          "text": "以直線 AC 為對稱軸對摺時，點 B 會剛好疊合到點 D，因此角 B 和角 D 是一組對稱角。對稱角的大小完全相同，所以角 D 也是 105 度。"
        },
        {
          "type": "svg",
          "caption": "紅色虛線 AC 為對稱軸，角 B 與角 D 為對稱角，度數皆為 105 度",
          "svg": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,26 95,90 180,174 265,90\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"186\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><text x=\"192\" y=\"24\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"78\" y=\"94\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">B</text><text x=\"192\" y=\"184\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">C</text><text x=\"280\" y=\"94\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">D</text><text x=\"128\" y=\"96\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">105 度</text><text x=\"232\" y=\"96\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">105 度</text></svg>"
        },
        {
          "type": "answer",
          "text": "答：105 度"
        }
      ],
      "distractorAnalysis": {
        "A": "【誤抄鄰角的度數】沒有找對稱角，誤把頂角 80 度當成角 D 的度數。",
        "B": "【誤用 180 度去減】以為對稱角會互補，算成 180 － 105 ＝ 75 度。",
        "C": "【誤將頂角乘以 2】誤把 80 度乘以 2 當成對稱角結果。"
      },
      "insight": "看到線對稱圖形問另一側對應角幾度時，先看摺起來誰蓋住誰，蓋在一起的兩角不用再計算，直接寫一樣的度數！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "線對稱圖形的對稱角度數相等"
      ],
      "conceptCompare": "【互補 vs 相等】平行四邊形的相鄰兩角和為 180 度，但線對稱圖形左右對應的對稱角則是完全「相等」。",
      "examVariations": "若題目進一步問「角 C 幾度」，就要再用四邊形內角和 360 度減去 80、105 和 105 度。"
    },
    "check": {
      "expr": "105",
      "expect": "105"
    }
  },
  {
    "id": "U09-S2-B-009",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-2 對稱點、對稱邊與對稱角",
    "section": "9-2",
    "sectionName": "對稱點、對稱邊與對稱角",
    "category": "對稱軸通過頂點與對邊的對應關係",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一張正五邊形色紙依順時針方向把五個頂點依序標示為點 A、點 B、點 C、點 D、點 E。若有一條對稱軸通過頂點 A 並垂直通過對邊線段 CD 的中點，沿這條對稱軸對摺後，下列哪一個敘述是正確的？",
    "options": [
      {
        "key": "A",
        "text": "點 C 會和點 A 疊合",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "B",
        "text": "點 B 會和點 C 疊合",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "C",
        "text": "點 B 會和點 E 疊合",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "角 C 的度數是角 D 的一半",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "訓練學生不依賴現成圖形，僅由順時針頂點命名與對稱軸位置，在腦中建構五邊形對稱對應關係。",
      "steps": [
        {
          "type": "text",
          "text": "正五邊形頂點順時針依序為 A、B、C、D、E，其中 A 在最上方，B 和 E 分別在右上方與左上方，C 和 D 分別在右下方與左下方。對稱軸從頂點 A 垂直穿過線段 CD 的中點，左右對摺後，點 B 和點 E 疊合，點 C 和點 D 疊合。"
        },
        {
          "type": "svg",
          "caption": "正五邊形 ABCDE 以通過點 A 與線段 CD 中點的紅虛線為對稱軸",
          "svg": "<svg viewBox=\"0 0 360 210\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,32 260,90 230,174 130,174 100,90\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"20\" x2=\"180\" y2=\"190\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><line x1=\"100\" y1=\"90\" x2=\"260\" y2=\"90\" stroke=\"#d97706\" stroke-width=\"1.6\" stroke-dasharray=\"3,3\"/><polyline points=\"180,164 190,164 190,174\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"192\" y=\"28\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"274\" y=\"94\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">B</text><text x=\"242\" y=\"186\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">C</text><text x=\"116\" y=\"186\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">D</text><text x=\"82\" y=\"94\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">E</text></svg>"
        },
        {
          "type": "answer",
          "text": "答：點 B 會和點 E 疊合"
        }
      ],
      "distractorAnalysis": {
        "B": "【把同側相鄰點看成對稱點】沒有跨越對稱軸，B 和 C 都在對稱軸同一側，對摺時不會相撞。",
        "D": "【誤判對稱角大小關係】角 C 與角 D 是對稱角，度數應該完全相等，不是一半。",
        "A": "【錯認頂點對應方向】點 A 在對稱軸上不會移動，底部的點 C 不可能摺上去跟點 A 疊合。"
      },
      "insight": "題目沒給圖時，自己隨手在計算紙畫一個五邊形順時針標上 A、B、C、D、E，把對稱軸畫下去，答案馬上浮現。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "奇數邊正多邊形的對稱軸：必通過「一個頂點」與「對邊中點」"
      ],
      "conceptCompare": "【順時針順序】讀幾何文字題時，頂點 A、B、C、D、E 一定是沿邊界依序排列，不能跳著標。",
      "examVariations": "常改問「線段 BC 的對稱邊是哪一條？」（答案為線段 ED）。"
    },
    "check": {
      "expr": "1",
      "expect": "1"
    }
  },
  {
    "id": "U09-S2-B-010",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-2 對稱點、對稱邊與對稱角",
    "section": "9-2",
    "sectionName": "對稱點、對稱邊與對稱角",
    "category": "綜合對稱角求解角度和",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖為一個線對稱五邊形 ABCDE，虛線通過點 A 並平分底邊線段 CD。圖中標示角 B 是 112 度，角 C 是 98 度。請問角 E 和角 D 的度數合起來是多少度？",
    "svg": "<svg viewBox=\"0 0 360 205\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,28 88,92 122,170 238,170 272,92\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"184\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><text x=\"192\" y=\"24\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"72\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">B</text><text x=\"108\" y=\"182\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">C</text><text x=\"252\" y=\"182\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">D</text><text x=\"286\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">E</text><text x=\"122\" y=\"98\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">112 度</text><text x=\"142\" y=\"158\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">98 度</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "196 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      },
      {
        "key": "B",
        "text": "224 度",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "C",
        "text": "210 度",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "200 度",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "結合辨識兩組對稱角後進行加法運算，檢驗學生能否正確對應左右兩側的對稱角。",
      "steps": [
        {
          "type": "text",
          "text": "沿著虛線對摺後，左邊的角 B 會和右邊的角 E 疊合，所以角 E ＝ 112 度；左下的角 C 會和右下的角 D 疊合，所以角 D ＝ 98 度。"
        },
        {
          "type": "svg",
          "caption": "角 E 與角 B 對稱（112 度），角 D 與角 C 對稱（98 度）",
          "svg": "<svg viewBox=\"0 0 360 205\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,28 88,92 122,170 238,170 272,92\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"184\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><text x=\"192\" y=\"24\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"72\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">B</text><text x=\"108\" y=\"182\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">C</text><text x=\"252\" y=\"182\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">D</text><text x=\"286\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">E</text><text x=\"122\" y=\"98\" font-size=\"12\" fill=\"#475569\">112 度</text><text x=\"236\" y=\"98\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">112 度</text><text x=\"142\" y=\"158\" font-size=\"12\" fill=\"#475569\">98 度</text><text x=\"218\" y=\"158\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">98 度</text></svg>"
        },
        {
          "type": "eq",
          "expr": "112 ＋ 98 ＝ 210"
        },
        {
          "type": "answer",
          "text": "答：210 度"
        }
      ],
      "distractorAnalysis": {
        "A": "【誤加同一角的兩倍】錯把 98 ＋ 98 當成角 E ＋ 角 D。",
        "D": "【整數加法進位計算錯誤】在計算 112 ＋ 98 時十位數少進 1 而誤算為 200。",
        "B": "【誤把 112 加兩次】錯把 112 ＋ 112 當成角 E ＋ 角 D。"
      },
      "insight": "線對稱圖形的兩側就像是照鏡子，左邊幾度、右邊對稱位置就一樣幾度，先把右邊的角度寫出來再相加最保險。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "角 E ＝ 角 B，角 D ＝ 角 C"
      ],
      "conceptCompare": "【對稱角對應】不要看到題目給兩個角度就直接想成 180 度減掉，一定要先分清楚誰是誰的對稱角。",
      "examVariations": "可能改問「五邊形內角和 540 度，若已知角 B、角 C，求頂角 A 是幾度？」（540 － 210 × 2 ＝ 120 度）。"
    },
    "check": {
      "expr": "112 + 98",
      "expect": "210"
    }
  },
  {
    "id": "U09-S3-B-011",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-3 垂直平分性質與周長角度",
    "section": "9-3",
    "sectionName": "垂直平分性質與周長角度",
    "category": "對稱點連線的垂直平分距離性質",
    "level": 3,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "在一個線對稱圖形中，點 P 和點 Q 是一組對稱點，直線 L 是這個圖形的對稱軸。線段 PQ 和直線 L 相交於點 M，如果點 P 到直線 L 的距離是 6 公分，請問線段 PQ 的總長度是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "3 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "B",
        "text": "12 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "18 公分",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "6 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗對稱軸「垂直平分」兩對稱點連線的性質，知道軸到兩側對稱點距離相等，總距離為單側的 2 倍。",
      "steps": [
        {
          "type": "text",
          "text": "因為直線 L 是對稱軸，所以點 P 到直線 L 的距離（線段 PM）會等於點 Q 到直線 L 的距離（線段 QM），都是 6 公分。整條線段 PQ 的長度就是兩段合起來的長度。"
        },
        {
          "type": "svg",
          "caption": "紅色對稱軸 L 垂直平分線段 PQ，線段 PM ＝ 線段 QM ＝ 6 公分",
          "svg": "<svg viewBox=\"0 0 360 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"180\" y1=\"22\" x2=\"180\" y2=\"152\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><line x1=\"80\" y1=\"88\" x2=\"280\" y2=\"88\" stroke=\"#0f172a\" stroke-width=\"2.2\"/><polyline points=\"180,76 192,76 192,88\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><circle cx=\"80\" cy=\"88\" r=\"5\" fill=\"#1d4ed8\"/><circle cx=\"180\" cy=\"88\" r=\"4.5\" fill=\"#dc2626\"/><circle cx=\"280\" cy=\"88\" r=\"5\" fill=\"#1d4ed8\"/><text x=\"195\" y=\"34\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">線 L</text><text x=\"72\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">點 P</text><text x=\"194\" y=\"108\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">點 M</text><text x=\"286\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">點 Q</text><text x=\"130\" y=\"76\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">6 公分</text><text x=\"230\" y=\"76\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">6 公分</text><text x=\"180\" y=\"170\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">總長 6 × 2 ＝ 12 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "6 × 2 ＝ 12"
        },
        {
          "type": "answer",
          "text": "答：12 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【錯把 6 公分當全段而除以 2】把點 P 到軸的距離誤認成線段 PQ 的全長，又除以 2 算成 3 公分。",
        "C": "【倍數乘法算錯】誤將 6 乘以 3 得到 18 公分。",
        "D": "【忘記乘以 2】直接回答單側距離 6 公分，忽略對稱點之間的距離跨越兩側。"
      },
      "insight": "「對稱點到對稱軸距離相等」：看到只給一邊到軸的距離、卻問兩個對稱點相距多遠，一定要記得乘以 2。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "線段 PQ ＝ 線段 PM × 2"
      ],
      "conceptCompare": "【單側距離 vs 兩點距離】點到對稱軸只有「一半」的距離；對稱點到對稱點才是「完整兩倍」的距離。",
      "examVariations": "若題目反過來給線段 PQ ＝ 14 公分，問點 P 到對稱軸多遠，就要除以 2 得到 7 公分。"
    },
    "check": {
      "expr": "6 * 2",
      "expect": "12"
    }
  },
  {
    "id": "U09-S3-B-012",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-3 垂直平分性質與周長角度",
    "section": "9-3",
    "sectionName": "垂直平分性質與周長角度",
    "category": "垂直平分線段的長度與交角",
    "level": 3,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "圖中的點 A 和點 B 是一對對稱點，虛線為對稱軸並與線段 AB 相交於點 O。已知線段 AB 總長 18 公分，請問「線段 AO 的長度」和「角 1 的度數」分別是多少？",
    "svg": "<svg viewBox=\"0 0 360 185\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"180\" y1=\"22\" x2=\"180\" y2=\"152\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"72\" y1=\"92\" x2=\"288\" y2=\"92\" stroke=\"#0f172a\" stroke-width=\"2.2\"/><path d=\"M 180,74 A 18,18 0 0,1 198,92\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"1.8\"/><circle cx=\"72\" cy=\"92\" r=\"4.5\" fill=\"#0f172a\"/><circle cx=\"180\" cy=\"92\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"288\" cy=\"92\" r=\"4.5\" fill=\"#0f172a\"/><text x=\"64\" y=\"80\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"194\" y=\"112\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">O</text><text x=\"292\" y=\"80\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">B</text><text x=\"210\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">角 1</text><text x=\"180\" y=\"172\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">線段 AB ＝ 18 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "9 公分、90 度",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "18 公分、90 度",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "C",
        "text": "9 公分、45 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      },
      {
        "key": "D",
        "text": "6 公分、90 度",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "同時驗證對稱軸「垂直（90 度）」與「平分（除以 2）」這兩大核心幾何性質。",
      "steps": [
        {
          "type": "text",
          "text": "對稱軸一定會「垂直平分」兩對稱點的連線。因為垂直，所以對稱軸和線段 AB 相交的角 1 是 90 度；因為平分，所以點 O 剛好在正中間，線段 AO 的長度是 18 公分的一半。"
        },
        {
          "type": "svg",
          "caption": "對稱軸垂直平分線段 AB：交角為 90 度直角，左右兩段各長 9 公分",
          "svg": "<svg viewBox=\"0 0 360 185\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"180\" y1=\"22\" x2=\"180\" y2=\"152\" stroke=\"#dc2626\" stroke-width=\"2.4\" stroke-dasharray=\"5,4\"/><line x1=\"72\" y1=\"92\" x2=\"288\" y2=\"92\" stroke=\"#0f172a\" stroke-width=\"2.2\"/><polyline points=\"180,78 194,78 194,92\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><circle cx=\"72\" cy=\"92\" r=\"4.5\" fill=\"#1d4ed8\"/><circle cx=\"180\" cy=\"92\" r=\"4\" fill=\"#dc2626\"/><circle cx=\"288\" cy=\"92\" r=\"4.5\" fill=\"#1d4ed8\"/><text x=\"64\" y=\"80\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"194\" y=\"112\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">O</text><text x=\"292\" y=\"80\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">B</text><text x=\"218\" y=\"76\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">90 度</text><text x=\"126\" y=\"78\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">9 公分</text><text x=\"234\" y=\"114\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">9 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "18 ÷ 2 ＝ 9"
        },
        {
          "type": "answer",
          "text": "答：9 公分、90 度"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記平分要除以 2】知道交角是 90 度，但誤把總長 18 公分直接當成半段線段 AO 的長度。",
        "C": "【把 90 度也跟著除以 2】把平分的概念誤用到角度上，將 90 度錯除為 45 度。",
        "D": "【除法計算錯誤】將 18 誤除以 3 得到 6 公分。"
      },
      "insight": "「垂直平分」四個字拆成兩件事：垂直＝夾角 90 度，平分＝距離對半切。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "垂直＝交角 90 度",
        "平分＝線段 AO ＝ 線段 BO ＝ 線段 AB ÷ 2"
      ],
      "conceptCompare": "【線段平分 vs 角度】平分只把線段 AB 對半平分，夾角永遠是垂直的 90 度直角，不會變成 45 度。",
      "examVariations": "常結合長方形或菱形出題，問兩對稱點連線跟對稱軸的夾角是不是直角。"
    },
    "check": {
      "expr": "18 / 2",
      "expect": "9"
    }
  },
  {
    "id": "U09-S3-B-013",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-3 垂直平分性質與周長角度",
    "section": "9-3",
    "sectionName": "垂直平分性質與周長角度",
    "category": "給半邊求線對稱圖形總周長",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，虛線為某個線對稱五邊形的對稱軸，圖中僅畫出左半邊。已知線段 AB 長 8 公分、線段 BC 長 6 公分、線段 CH 長 4 公分。把右半邊對稱補全後，整個五邊形的周長是多少公分？",
    "svg": "<svg viewBox=\"0 0 360 210\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"200,32 104,84 132,166 200,166\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"2.2\"/><line x1=\"200\" y1=\"18\" x2=\"200\" y2=\"188\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><text x=\"212\" y=\"34\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"88\" y=\"86\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">B</text><text x=\"116\" y=\"176\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">C</text><text x=\"214\" y=\"176\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">H</text><text x=\"130\" y=\"52\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">8 公分</text><text x=\"88\" y=\"132\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">6 公分</text><text x=\"166\" y=\"186\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">4 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "18 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "B",
        "text": "32 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "C",
        "text": "36 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "40 公分",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生理解線對稱圖形的「周長只算外圍邊界」，中間的對稱軸線段不算在周長內，且底邊半段也要對稱乘以 2。",
      "steps": [
        {
          "type": "text",
          "text": "補全右半邊後，右邊同樣有一條長 8 公分的邊、一條長 6 公分的邊，底邊右半段也是 4 公分（整個底邊共 8 公分）。先算出左半邊三段外圍邊的長度和，再乘以 2 就是完整五邊形的周長。"
        },
        {
          "type": "svg",
          "caption": "補全右半邊後，左右外圍各有 8、6、4 公分，中間紅虛線不算入周長",
          "svg": "<svg viewBox=\"0 0 360 210\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,32 88,84 114,166 246,166 272,84\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2.2\"/><line x1=\"180\" y1=\"18\" x2=\"180\" y2=\"186\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"180,154 192,154 192,166\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"192\" y=\"28\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"72\" y=\"86\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">B</text><text x=\"100\" y=\"176\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">C</text><text x=\"180\" y=\"184\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">H</text><text x=\"115\" y=\"50\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">8 公分</text><text x=\"245\" y=\"50\" font-size=\"12\" font-weight=\"700\" fill=\"#16a34a\">8 公分</text><text x=\"72\" y=\"130\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">6 公分</text><text x=\"288\" y=\"130\" font-size=\"12\" font-weight=\"700\" fill=\"#16a34a\">6 公分</text><text x=\"146\" y=\"186\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">4</text><text x=\"214\" y=\"186\" font-size=\"12\" font-weight=\"700\" fill=\"#16a34a\">4</text></svg>"
        },
        {
          "type": "eq",
          "expr": "（8 ＋ 6 ＋ 4）× 2 ＝ 36"
        },
        {
          "type": "answer",
          "text": "答：36 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【只算了左半邊就當全部】將 8 ＋ 6 ＋ 4 ＝ 18 當成完整圖形的周長，忘記乘以 2。",
        "B": "【漏把底邊右半段乘以 2】將 8 和 6 各算兩次，但底邊只算了 4 公分，誤算為 8 × 2 ＋ 6 × 2 ＋ 4 ＝ 32。",
        "D": "【加總或乘法計算錯誤】在計算（8 ＋ 6 ＋ 4）× 2 時誤算為 20 × 2 ＝ 40。"
      },
      "insight": "算補全後的周長，只要把「外圍半圈」的所有邊長相加再乘以 2 就搞定；如果題目有標出對稱軸本身長度，千萬不要把對稱軸也加進周長！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對稱圖形總周長 ＝ 單側外圍邊長總和 × 2"
      ],
      "conceptCompare": "【半邊周長 vs 總周長】半邊圖形本身可能包含中間的對稱軸線段，但補全之後對稱軸變成圖形內部的線，不算在整個圖形的周長裡。",
      "examVariations": "段考常故意給出對稱軸長度（例如線段 AM ＝ 9 公分）當誘答條件，看學生會不會把 9 公分也加進去。"
    },
    "check": {
      "expr": "(8 + 6 + 4) * 2",
      "expect": "36"
    }
  },
  {
    "id": "U09-S3-B-014",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-3 垂直平分性質與周長角度",
    "section": "9-3",
    "sectionName": "垂直平分性質與周長角度",
    "category": "線對稱四邊形內角和與未知角求解",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "有一個風箏造型的線對稱四邊形 ABCD，以對角線線段 AC 為對稱軸。已知角 A 是 70 度，角 C 是 50 度，那麼角 B 的度數是多少度？",
    "options": [
      {
        "key": "A",
        "text": "240 度",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "B",
        "text": "60 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      },
      {
        "key": "C",
        "text": "110 度",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "120 度",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "結合「四邊形內角和為 360 度」與「對稱角相等」兩項觀念，求算對稱圖形的未知角度。",
      "steps": [
        {
          "type": "text",
          "text": "四邊形四個內角的和是 360 度。用 360 度扣掉角 A（70 度）和角 C（50 度），剩下的就是角 B 和角 D 的度數和。因為線段 AC 是對稱軸，角 B 和角 D 是對稱角一樣大，所以平分除以 2 即可。"
        },
        {
          "type": "svg",
          "caption": "風箏形 ABCD 以紅虛線 AC 為對稱軸，角 B ＝ 角 D ＝ 120 度",
          "svg": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,26 105,86 180,174 255,86\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"184\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><text x=\"192\" y=\"24\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">A</text><text x=\"88\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">B</text><text x=\"192\" y=\"186\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">C</text><text x=\"270\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">D</text><text x=\"180\" y=\"56\" font-size=\"12\" text-anchor=\"middle\" fill=\"#1d4ed8\">70 度</text><text x=\"180\" y=\"148\" font-size=\"12\" text-anchor=\"middle\" fill=\"#1d4ed8\">50 度</text><text x=\"136\" y=\"94\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">120 度</text><text x=\"224\" y=\"94\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">120 度</text></svg>"
        },
        {
          "type": "eq",
          "expr": "（360 － 70 － 50）÷ 2 ＝ 120"
        },
        {
          "type": "answer",
          "text": "答：120 度"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記平分給兩個角】算出角 B 與角 D 的和為 240 度後，忘記除以 2。",
        "B": "【誤用三角形內角和 180 度去減】把四邊形當成三角形，錯算成（180 － 70 － 50）＝ 60 度（或錯除以 2 之前基準用錯）。",
        "C": "【減法計算失誤】在計算 360 － 120 時誤算成 220，再除以 2 得到 110 度。"
      },
      "insight": "先確定圖形是幾邊形（四邊形內角和 360 度），再把扣完後剩下的度數平分給一對對稱角，就能輕鬆求出單角。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "四邊形內角和 ＝ 360 度",
        "對稱角度數 ＝（360 － 其餘兩角）÷ 2"
      ],
      "conceptCompare": "【半邊三角形 vs 整個四邊形】對稱軸把風箏分成兩個全等三角形（內角和 180 度），但注意軸線會把角 A（70 度）和角 C（50 度）各平分成 35 度與 25 度，一樣能算出角 B ＝ 180 － 35 － 25 ＝ 120 度。",
      "examVariations": "可能改問「半邊的三角形 ABC 中角 BAC 是幾度？」，把 70 度除以 2 得到 35 度即可。"
    },
    "check": {
      "expr": "(360 - 70 - 50) / 2",
      "expect": "120"
    }
  },
  {
    "id": "U09-S3-B-015",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-3 垂直平分性質與周長角度",
    "section": "9-3",
    "sectionName": "垂直平分性質與周長角度",
    "category": "等腰梯形對稱邊長與周長反推",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "手工藝老師剪了一個等腰梯形對稱窗花，上底長 14 公分，下底長 22 公分，量出整個窗花的周長是 66 公分。請問這個窗花左邊的一條斜邊（腰）長是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "30 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "B",
        "text": "15 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "18 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "D",
        "text": "14 公分",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "利用等腰梯形左右兩腰為對稱邊（等長）的性質，由總周長與上下底反推出單側腰長。",
      "steps": [
        {
          "type": "text",
          "text": "等腰梯形以垂直通過上下底中點的直線為對稱軸，左右兩條斜邊（腰）是對稱邊，所以長度相等。從總周長 66 公分減掉上底 14 公分與下底 22 公分，剩下的就是兩條腰的長度和，再除以 2 就是一條腰的長度。"
        },
        {
          "type": "svg",
          "caption": "等腰梯形對稱窗花：兩條腰為對稱邊等長，各為 15 公分",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"130,45 230,45 275,140 85,140\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2.2\"/><line x1=\"180\" y1=\"28\" x2=\"180\" y2=\"158\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><text x=\"180\" y=\"34\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">上底 14 公分</text><text x=\"180\" y=\"176\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">下底 22 公分</text><text x=\"74\" y=\"96\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1d4ed8\">15 公分</text><text x=\"286\" y=\"96\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1d4ed8\">15 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "（66 － 14 － 22）÷ 2 ＝ 15"
        },
        {
          "type": "answer",
          "text": "答：15 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記除以 2】算出兩條腰合起來 30 公分後，就直接作答，沒算單邊一條的長度。",
        "C": "【錯用平均或減錯數字】誤把上底、下底平均（14 ＋ 22）÷ 2 ＝ 18 當成腰長。",
        "D": "【減法計算進退位錯誤】把 66 － 36 誤算成 28，再除以 2 得到 14 公分。"
      },
      "insight": "知道總周長反推對稱邊長時，記得先扣除「沒有左右成對」或「已知長度」的上下底，剩下的才平分給左右兩條對稱邊。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "等腰梯形腰長 ＝（周長 － 上底 － 下底）÷ 2"
      ],
      "conceptCompare": "【上底、下底 vs 兩腰】對稱軸從上下底正中間切過去，所以上底各半平分，但兩條腰是各自獨立在左右兩側的完整邊，共有兩條。",
      "examVariations": "常改問「等腰三角形周長 40 公分，底邊 12 公分，腰長幾公分？」解法完全相同：（40 － 12）÷ 2 ＝ 14 公分。"
    },
    "check": {
      "expr": "(66 - 14 - 22) / 2",
      "expect": "15"
    }
  },
  {
    "id": "U09-S4-B-016",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-4 格點補全與摺紙剪紙",
    "section": "9-4",
    "sectionName": "格點補全與摺紙剪紙",
    "category": "方格紙尋找對稱點位置",
    "level": 4,
    "difficulty": 4,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如下圖，方格紙上的虛線為對稱軸，在左側格點上有一點 A。如果要畫出點 A 的對稱點，應該要選右側哪一個點？",
    "svg": "<svg viewBox=\"0 0 360 205\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#cbd5e1\" stroke-width=\"1\"><line x1=\"52\" y1=\"28\" x2=\"308\" y2=\"28\"/><line x1=\"52\" y1=\"60\" x2=\"308\" y2=\"60\"/><line x1=\"52\" y1=\"92\" x2=\"308\" y2=\"92\"/><line x1=\"52\" y1=\"124\" x2=\"308\" y2=\"124\"/><line x1=\"52\" y1=\"156\" x2=\"308\" y2=\"156\"/><line x1=\"52\" y1=\"188\" x2=\"308\" y2=\"188\"/><line x1=\"52\" y1=\"28\" x2=\"52\" y2=\"188\"/><line x1=\"84\" y1=\"28\" x2=\"84\" y2=\"188\"/><line x1=\"116\" y1=\"28\" x2=\"116\" y2=\"188\"/><line x1=\"148\" y1=\"28\" x2=\"148\" y2=\"188\"/><line x1=\"180\" y1=\"28\" x2=\"180\" y2=\"188\"/><line x1=\"212\" y1=\"28\" x2=\"212\" y2=\"188\"/><line x1=\"244\" y1=\"28\" x2=\"244\" y2=\"188\"/><line x1=\"276\" y1=\"28\" x2=\"276\" y2=\"188\"/><line x1=\"308\" y1=\"28\" x2=\"308\" y2=\"188\"/></g><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"198\" stroke=\"#475569\" stroke-width=\"2.4\" stroke-dasharray=\"6,4\"/><circle cx=\"84\" cy=\"92\" r=\"5\" fill=\"#1d4ed8\"/><text x=\"68\" y=\"86\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">點 A</text><circle cx=\"244\" cy=\"92\" r=\"5\" fill=\"#0f172a\"/><text x=\"234\" y=\"114\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">B</text><circle cx=\"276\" cy=\"92\" r=\"5\" fill=\"#0f172a\"/><text x=\"272\" y=\"114\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">C</text><circle cx=\"308\" cy=\"92\" r=\"5\" fill=\"#0f172a\"/><text x=\"314\" y=\"114\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">D</text><circle cx=\"276\" cy=\"60\" r=\"5\" fill=\"#0f172a\"/><text x=\"290\" y=\"54\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">E</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "點 B",
        "trapCode": "U09_GRID_OFFSET_ONE"
      },
      {
        "key": "B",
        "text": "點 C",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "點 D",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "D",
        "text": "點 E",
        "trapCode": "U09_SYM_POINT_SWAP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生在方格紙上透過「垂直對稱軸數格數」，精確定位對稱點格點座標的能力。",
      "steps": [
        {
          "type": "text",
          "text": "從點 A 沿著水平格子線往右數到對稱軸，剛好隔了 3 格；繼續沿著同一條水平線往右數 3 格，就是點 C 的位置。"
        },
        {
          "type": "svg",
          "caption": "點 A 到紅色對稱軸距離 3 格，往右數 3 格在同一水平線上即為點 C",
          "svg": "<svg viewBox=\"0 0 360 205\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#cbd5e1\" stroke-width=\"1\"><line x1=\"52\" y1=\"28\" x2=\"308\" y2=\"28\"/><line x1=\"52\" y1=\"60\" x2=\"308\" y2=\"60\"/><line x1=\"52\" y1=\"92\" x2=\"308\" y2=\"92\"/><line x1=\"52\" y1=\"124\" x2=\"308\" y2=\"124\"/><line x1=\"52\" y1=\"156\" x2=\"308\" y2=\"156\"/><line x1=\"52\" y1=\"188\" x2=\"308\" y2=\"188\"/><line x1=\"52\" y1=\"28\" x2=\"52\" y2=\"188\"/><line x1=\"84\" y1=\"28\" x2=\"84\" y2=\"188\"/><line x1=\"116\" y1=\"28\" x2=\"116\" y2=\"188\"/><line x1=\"148\" y1=\"28\" x2=\"148\" y2=\"188\"/><line x1=\"180\" y1=\"28\" x2=\"180\" y2=\"188\"/><line x1=\"212\" y1=\"28\" x2=\"212\" y2=\"188\"/><line x1=\"244\" y1=\"28\" x2=\"244\" y2=\"188\"/><line x1=\"276\" y1=\"28\" x2=\"276\" y2=\"188\"/><line x1=\"308\" y1=\"28\" x2=\"308\" y2=\"188\"/></g><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"198\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><line x1=\"84\" y1=\"92\" x2=\"276\" y2=\"92\" stroke=\"#d97706\" stroke-width=\"2.5\"/><polyline points=\"180,82 190,82 190,92\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><circle cx=\"84\" cy=\"92\" r=\"5\" fill=\"#1d4ed8\"/><circle cx=\"276\" cy=\"92\" r=\"5\" fill=\"#16a34a\"/><text x=\"68\" y=\"86\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">點 A</text><text x=\"292\" y=\"86\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">點 C</text><text x=\"132\" y=\"82\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#d97706\">3 格</text><text x=\"228\" y=\"82\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#d97706\">3 格</text></svg>"
        },
        {
          "type": "answer",
          "text": "答：點 C"
        }
      ],
      "distractorAnalysis": {
        "A": "【數格子少算 1 格】數格點或格距時少算 1 格，只向右數了 2 格而選成點 B。",
        "D": "【數對格數卻跑錯橫列】雖然數對了距離對稱軸 3 格，卻不小心往上偏了一列而選成點 E。",
        "C": "【數格子多算 1 格】誤將最外側邊界數成 4 格，向右數 4 格錯選成點 D。"
      },
      "insight": "數格子要算「線段間隔數」而不是「點的個數」，一邊跨過 3 格寬度，另一邊就也要跨過 3 格寬度。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "格點找對稱點步驟：沿著垂直軸方向數幾格，過軸再數相同格數"
      ],
      "conceptCompare": "【點數 vs 格數】從對稱軸開始數 0、1、2、3 才不會把對稱軸本身算成第 1 格而少 1 格。",
      "examVariations": "格點補全題常要連續找出 4 到 5 個轉折點，全部點完再用直尺依序連起來。"
    },
    "check": {
      "expr": "3",
      "expect": "3"
    }
  },
  {
    "id": "U09-S4-B-017",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-4 格點補全與摺紙剪紙",
    "section": "9-4",
    "sectionName": "格點補全與摺紙剪紙",
    "category": "格點補全後的圖形面積計算",
    "level": 4,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，方格紙上每個小正方形邊長都是 1 公分，中間的虛線為對稱軸。將左側塗色部分沿虛線補全成完整的線對稱圖形後，整個圖形的面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 360 215\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#cbd5e1\" stroke-width=\"1\"><line x1=\"52\" y1=\"28\" x2=\"308\" y2=\"28\"/><line x1=\"52\" y1=\"60\" x2=\"308\" y2=\"60\"/><line x1=\"52\" y1=\"92\" x2=\"308\" y2=\"92\"/><line x1=\"52\" y1=\"124\" x2=\"308\" y2=\"124\"/><line x1=\"52\" y1=\"156\" x2=\"308\" y2=\"156\"/><line x1=\"52\" y1=\"188\" x2=\"308\" y2=\"188\"/><line x1=\"52\" y1=\"28\" x2=\"52\" y2=\"188\"/><line x1=\"84\" y1=\"28\" x2=\"84\" y2=\"188\"/><line x1=\"116\" y1=\"28\" x2=\"116\" y2=\"188\"/><line x1=\"148\" y1=\"28\" x2=\"148\" y2=\"188\"/><line x1=\"180\" y1=\"28\" x2=\"180\" y2=\"188\"/><line x1=\"212\" y1=\"28\" x2=\"212\" y2=\"188\"/><line x1=\"244\" y1=\"28\" x2=\"244\" y2=\"188\"/><line x1=\"276\" y1=\"28\" x2=\"276\" y2=\"188\"/><line x1=\"308\" y1=\"28\" x2=\"308\" y2=\"188\"/></g><polygon points=\"180,28 116,28 52,156 180,156\" fill=\"rgba(59,130,246,0.28)\" stroke=\"#1d4ed8\" stroke-width=\"2.2\"/><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"198\" stroke=\"#475569\" stroke-width=\"2.4\" stroke-dasharray=\"6,4\"/><text x=\"68\" y=\"204\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">1 格為 1 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "12 平方公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "B",
        "text": "16 平方公分",
        "trapCode": "U09_GRID_OFFSET_ONE"
      },
      {
        "key": "C",
        "text": "32 平方公分",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "24 平方公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "結合方格點補全圖形與「線對稱兩側面積相等」性質，再運用梯形或分割面積公式完成計算。",
      "steps": [
        {
          "type": "text",
          "text": "先看左半側塗色圖形，是一個上底 2 公分、下底 4 公分、高 4 公分的直角梯形，左半面積是（2 ＋ 4）× 4 ÷ 2 ＝ 12 平方公分。補全右半邊後，左右兩半面積完全相等，乘以 2 就是總面積。"
        },
        {
          "type": "svg",
          "caption": "補全右半邊成對稱等腰梯形，左右各 12 平方公分，合起來共 24 平方公分",
          "svg": "<svg viewBox=\"0 0 360 215\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#cbd5e1\" stroke-width=\"1\"><line x1=\"52\" y1=\"28\" x2=\"308\" y2=\"28\"/><line x1=\"52\" y1=\"60\" x2=\"308\" y2=\"60\"/><line x1=\"52\" y1=\"92\" x2=\"308\" y2=\"92\"/><line x1=\"52\" y1=\"124\" x2=\"308\" y2=\"124\"/><line x1=\"52\" y1=\"156\" x2=\"308\" y2=\"156\"/><line x1=\"52\" y1=\"188\" x2=\"308\" y2=\"188\"/><line x1=\"52\" y1=\"28\" x2=\"52\" y2=\"188\"/><line x1=\"84\" y1=\"28\" x2=\"84\" y2=\"188\"/><line x1=\"116\" y1=\"28\" x2=\"116\" y2=\"188\"/><line x1=\"148\" y1=\"28\" x2=\"148\" y2=\"188\"/><line x1=\"180\" y1=\"28\" x2=\"180\" y2=\"188\"/><line x1=\"212\" y1=\"28\" x2=\"212\" y2=\"188\"/><line x1=\"244\" y1=\"28\" x2=\"244\" y2=\"188\"/><line x1=\"276\" y1=\"28\" x2=\"276\" y2=\"188\"/><line x1=\"308\" y1=\"28\" x2=\"308\" y2=\"188\"/></g><polygon points=\"180,28 116,28 52,156 180,156\" fill=\"rgba(59,130,246,0.25)\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><polygon points=\"180,28 244,28 308,156 180,156\" fill=\"rgba(34,197,94,0.22)\" stroke=\"#16a34a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"198\" stroke=\"#dc2626\" stroke-width=\"2.4\" stroke-dasharray=\"6,4\"/><text x=\"148\" y=\"106\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1d4ed8\">12</text><text x=\"212\" y=\"106\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#16a34a\">12</text><text x=\"180\" y=\"206\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">總面積 ＝ 12 × 2 ＝ 24 平方公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "（2 ＋ 4）× 4 ÷ 2 × 2 ＝ 24"
        },
        {
          "type": "answer",
          "text": "答：24 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記乘以 2】只算出題目給的左半邊梯形面積 12 平方公分就選答。",
        "B": "【把梯形錯看成正方形或數錯底邊】把左半邊數錯成 8 格（乘 2 為 16），或是將上底錯數成 1 格。",
        "C": "【把梯形誤算成大長方形】補全後直接用最大寬度 8 公分乘以高 4 公分，錯算為 32 平方公分。"
      },
      "insight": "對稱軸兩邊不只有邊長和角度相等，連面積也是完全一模一樣！只要算出左半邊再乘以 2，或者把左右合併成大梯形算一次（4 ＋ 8）× 4 ÷ 2 ＝ 24 都可以。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對稱圖形總面積 ＝ 單側面積 × 2"
      ],
      "conceptCompare": "【面積雙倍 vs 周長雙倍】周長計算時中間對稱軸那條線要扣掉，但面積計算時兩半圖形直接拼在一起，面積剛好就是一半的 2 倍。",
      "examVariations": "若題目給的半邊是不規則階梯形，可以用數完整方格加拼補半格的方式算出半邊，再乘以 2。"
    },
    "check": {
      "expr": "(2 + 4) * 4 / 2 * 2",
      "expect": "24"
    }
  },
  {
    "id": "U09-S4-B-018",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-4 格點補全與摺紙剪紙",
    "section": "9-4",
    "sectionName": "格點補全與摺紙剪紙",
    "category": "斜向對稱軸格點對稱點定位",
    "level": 4,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "skipOptionNumMatch": true,
    "question": "觀察下圖的方格紙，斜向的虛線是對稱軸，點 P 落在「第 2 行、第 5 列」的交叉格點上。沿著斜向虛線對摺後，點 P 的對稱點會落在哪一個位置？",
    "svg": "<svg viewBox=\"0 0 360 230\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#cbd5e1\" stroke-width=\"1\"><line x1=\"96\" y1=\"26\" x2=\"264\" y2=\"26\"/><line x1=\"96\" y1=\"54\" x2=\"264\" y2=\"54\"/><line x1=\"96\" y1=\"82\" x2=\"264\" y2=\"82\"/><line x1=\"96\" y1=\"110\" x2=\"264\" y2=\"110\"/><line x1=\"96\" y1=\"138\" x2=\"264\" y2=\"138\"/><line x1=\"96\" y1=\"166\" x2=\"264\" y2=\"166\"/><line x1=\"96\" y1=\"194\" x2=\"264\" y2=\"194\"/><line x1=\"96\" y1=\"26\" x2=\"96\" y2=\"194\"/><line x1=\"124\" y1=\"26\" x2=\"124\" y2=\"194\"/><line x1=\"152\" y1=\"26\" x2=\"152\" y2=\"194\"/><line x1=\"180\" y1=\"26\" x2=\"180\" y2=\"194\"/><line x1=\"208\" y1=\"26\" x2=\"208\" y2=\"194\"/><line x1=\"236\" y1=\"26\" x2=\"236\" y2=\"194\"/><line x1=\"264\" y1=\"26\" x2=\"264\" y2=\"194\"/></g><line x1=\"88\" y1=\"202\" x2=\"272\" y2=\"18\" stroke=\"#475569\" stroke-width=\"2.2\" stroke-dasharray=\"6,4\"/><circle cx=\"152\" cy=\"54\" r=\"5\" fill=\"#1d4ed8\"/><text x=\"132\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">點 P</text><text x=\"96\" y=\"214\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">0</text><text x=\"124\" y=\"214\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">1</text><text x=\"152\" y=\"214\" font-size=\"11\" text-anchor=\"middle\" fill=\"#1d4ed8\">2</text><text x=\"180\" y=\"214\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">3</text><text x=\"208\" y=\"214\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">4</text><text x=\"236\" y=\"214\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">5</text><text x=\"264\" y=\"214\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">6</text><text x=\"80\" y=\"198\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">0</text><text x=\"80\" y=\"170\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">1</text><text x=\"80\" y=\"142\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">2</text><text x=\"80\" y=\"114\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">3</text><text x=\"80\" y=\"86\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">4</text><text x=\"80\" y=\"58\" font-size=\"11\" text-anchor=\"middle\" fill=\"#1d4ed8\">5</text><text x=\"80\" y=\"30\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">6</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "第 4 行、第 2 列",
        "trapCode": "U09_GRID_OFFSET_ONE"
      },
      {
        "key": "B",
        "text": "第 5 行、第 2 列",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "第 2 行、第 2 列",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "D",
        "text": "第 5 行、第 5 列",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "進階斜向對稱軸挑戰：檢驗學生是否記得「必須沿垂直於斜軸的方向」找對稱點，而非只沿水平或鉛直方向數格子。",
      "steps": [
        {
          "type": "text",
          "text": "當對稱軸是 45 度斜線時，垂直方向也是 45 度斜線（往右下斜穿小正方形對角線）。點 P（第 2 行、第 5 列）往右下斜穿 1.5 個方格對角線到達對稱軸，再繼續往右下斜穿 1.5 個方格對角線，就會到達「第 5 行、第 2 列」的交叉點。"
        },
        {
          "type": "svg",
          "caption": "斜向紅色虛線為對稱軸，點 P 與對稱點 Q 沿對角方向連線互相垂直平分",
          "svg": "<svg viewBox=\"0 0 360 230\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#cbd5e1\" stroke-width=\"1\"><line x1=\"96\" y1=\"26\" x2=\"264\" y2=\"26\"/><line x1=\"96\" y1=\"54\" x2=\"264\" y2=\"54\"/><line x1=\"96\" y1=\"82\" x2=\"264\" y2=\"82\"/><line x1=\"96\" y1=\"110\" x2=\"264\" y2=\"110\"/><line x1=\"96\" y1=\"138\" x2=\"264\" y2=\"138\"/><line x1=\"96\" y1=\"166\" x2=\"264\" y2=\"166\"/><line x1=\"96\" y1=\"194\" x2=\"264\" y2=\"194\"/><line x1=\"96\" y1=\"26\" x2=\"96\" y2=\"194\"/><line x1=\"124\" y1=\"26\" x2=\"124\" y2=\"194\"/><line x1=\"152\" y1=\"26\" x2=\"152\" y2=\"194\"/><line x1=\"180\" y1=\"26\" x2=\"180\" y2=\"194\"/><line x1=\"208\" y1=\"26\" x2=\"208\" y2=\"194\"/><line x1=\"236\" y1=\"26\" x2=\"236\" y2=\"194\"/><line x1=\"264\" y1=\"26\" x2=\"264\" y2=\"194\"/></g><line x1=\"88\" y1=\"202\" x2=\"272\" y2=\"18\" stroke=\"#dc2626\" stroke-width=\"2.4\" stroke-dasharray=\"6,4\"/><line x1=\"152\" y1=\"54\" x2=\"236\" y2=\"138\" stroke=\"#d97706\" stroke-width=\"2.2\"/><polyline points=\"187,89 194,82 201,89\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><circle cx=\"152\" cy=\"54\" r=\"5\" fill=\"#1d4ed8\"/><circle cx=\"236\" cy=\"138\" r=\"5\" fill=\"#16a34a\"/><text x=\"132\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">點 P</text><text x=\"248\" y=\"148\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">點 Q</text><text x=\"152\" y=\"214\" font-size=\"11\" text-anchor=\"middle\" fill=\"#1d4ed8\">2</text><text x=\"236\" y=\"214\" font-size=\"11\" text-anchor=\"middle\" fill=\"#16a34a\">5</text><text x=\"80\" y=\"142\" font-size=\"11\" text-anchor=\"middle\" fill=\"#16a34a\">2</text><text x=\"80\" y=\"58\" font-size=\"11\" text-anchor=\"middle\" fill=\"#1d4ed8\">5</text></svg>"
        },
        {
          "type": "answer",
          "text": "答：第 5 行、第 2 列"
        }
      ],
      "distractorAnalysis": {
        "A": "【斜格子數錯 1 格】往右下數對角線距離時數錯半格或一格，偏移到第 4 行、第 2 列。",
        "C": "【誤沿鉛直方向往下數】沒看斜線垂直方向，以為對稱點在同一行（第 2 行）往下數格而誤選第 2 行、第 2 列。",
        "D": "【誤沿水平方向往右數】沒看斜線垂直方向，錯把水平向右 3 格的位置（第 5 行、第 5 列）當成對稱點。"
      },
      "insight": "遇到 45 度斜對稱軸有個超好用的檢查法：只要把行號和列號「互換」就行！原本（2，5）就會變成（5，2）。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "通過原點的 45 度斜對稱軸：對稱點的行與列位置會互換"
      ],
      "conceptCompare": "【鉛直軸 vs 斜對稱軸】遇到斜對稱軸千萬不要再沿著水平格線數，一定要找和斜軸「垂直」的方格對角線去數。",
      "examVariations": "若給一條從左上到右下的斜對稱軸，一樣是用垂直對角線方向（左下到右上）數穿過幾格。"
    },
    "check": {
      "expr": "5 + 2",
      "expect": "7"
    }
  },
  {
    "id": "U09-S4-B-019",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-4 格點補全與摺紙剪紙",
    "section": "9-4",
    "sectionName": "格點補全與摺紙剪紙",
    "category": "單次對摺剪紙展開形狀預測",
    "level": 4,
    "difficulty": 4,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，小美把一張長方形色紙左右對摺後，在左側摺線的中央位置剪掉一個深色三角形缺口。把剩下的色紙全部攤平展開後，紙面正中央出現的洞會是什麼形狀？",
    "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"135\" y=\"34\" width=\"110\" height=\"126\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"135\" y1=\"24\" x2=\"135\" y2=\"170\" stroke=\"#0f172a\" stroke-width=\"3\"/><polygon points=\"135,64 175,97 135,130\" fill=\"#475569\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><text x=\"98\" y=\"98\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">摺線</text><text x=\"278\" y=\"98\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#475569\">開口側</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "上下兩個靠在一起的三角形洞",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "B",
        "text": "兩個分開的三角形洞",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "C",
        "text": "一個長方形的洞",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "D",
        "text": "一個菱形的洞",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生理解「剪在摺線上」展開後兩側缺口會相連成單一對稱洞孔的摺紙展開觀念。",
      "steps": [
        {
          "type": "text",
          "text": "摺線展開後就是整張色紙中間的對稱軸。左邊沒剪到的對稱部分也會出現一個左右翻轉的三角形缺口，因為兩者的底邊都貼在對稱軸上，所以合起來會連成一個完整的菱形洞。"
        },
        {
          "type": "svg",
          "caption": "紅色虛線為原摺線（對稱軸），展開後兩側三角形缺口連成一個菱形洞",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"34\" width=\"220\" height=\"126\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><polygon points=\"180,64 220,97 180,130 140,97\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"22\" x2=\"180\" y2=\"172\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><text x=\"180\" y=\"182\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">摺線展開即為對稱軸，連成 1 個菱形</text></svg>"
        },
        {
          "type": "answer",
          "text": "答：一個菱形的洞"
        }
      ],
      "distractorAnalysis": {
        "B": "【把摺線與開口側搞混】如果剪在「開口側」才會是左右分離的兩個三角形缺口；剪在摺線上展開一定會連在一起。",
        "C": "【展開邊緣形狀想像錯誤】沒注意到剪出的斜邊展開後依然是斜的，誤以為會變長方形。",
        "A": "【翻摺方向看反】沒有沿著豎直摺線左右展開，反而錯想成上下翻轉。"
      },
      "insight": "摺紙剪紙口訣：「剪在摺線上，展開連成 1 個洞；剪在開口邊或中間，展開變 2 個分開的洞」。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "摺線＝展開後的對稱軸",
        "沿摺線剪下的等腰三角形缺口，展開後底邊相接變成菱形"
      ],
      "conceptCompare": "【剪摺線 vs 剪開口】剪到摺線，左右兩片會相連成 1 個大洞；沒碰到摺線，左右兩片分開各自形成 1 個小洞。",
      "examVariations": "若在摺線剪出半個正方形，展開會變 1 個長方形；剪半個圓形，展開會變 1 個圓形。"
    },
    "check": {
      "expr": "1",
      "expect": "1"
    }
  },
  {
    "id": "U09-S4-B-020",
    "unitId": "U09",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U09 9-4 格點補全與摺紙剪紙",
    "section": "9-4",
    "sectionName": "格點補全與摺紙剪紙",
    "category": "連續兩次對摺的打洞展開數量",
    "level": 4,
    "difficulty": 4,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖的摺紙打洞步驟，小宇把一張正方形色紙先左右對摺，再上下對摺成四分之一的小正方形，接著在小正方形正中央打 1 個小圓洞。全部攤平展開後，色紙上共有幾個圓洞？",
    "svg": "<svg viewBox=\"0 0 360 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"34\" width=\"90\" height=\"90\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"75\" y1=\"34\" x2=\"75\" y2=\"124\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"75\" y=\"148\" font-size=\"12\" text-anchor=\"middle\" fill=\"#0f172a\">先左右對摺</text><rect x=\"155\" y=\"34\" width=\"45\" height=\"90\" fill=\"rgba(59,130,246,0.14)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"155\" y1=\"79\" x2=\"200\" y2=\"79\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"178\" y=\"148\" font-size=\"12\" text-anchor=\"middle\" fill=\"#0f172a\">再上下對摺</text><rect x=\"255\" y=\"56\" width=\"52\" height=\"52\" fill=\"rgba(59,130,246,0.22)\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"281\" cy=\"82\" r=\"6\" fill=\"#0f172a\"/><text x=\"281\" y=\"148\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1d4ed8\">中央打 1 洞</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "2 個",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "B",
        "text": "1 個",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "C",
        "text": "4 個",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "8 個",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生理解多次對摺後的紙張層數與線對稱翻倍展開關係。",
      "steps": [
        {
          "type": "text",
          "text": "正方形先左右對摺變成 2 層，再上下對摺變成 2 × 2 ＝ 4 層。因為圓洞打在四分之一小正方形的正中央，完全沒有碰到兩條摺線，所以 4 層紙各穿過 1 個洞，全部攤平後會有 4 個對稱的圓洞。"
        },
        {
          "type": "svg",
          "caption": "兩條紅色虛線為對稱軸，打在中央的 1 個洞展開後於四格各自對稱出現",
          "svg": "<svg viewBox=\"0 0 360 185\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"115\" y=\"24\" width=\"130\" height=\"130\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"162\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"106\" y1=\"89\" x2=\"254\" y2=\"89\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><circle cx=\"147\" cy=\"56\" r=\"7\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"213\" cy=\"56\" r=\"7\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"147\" cy=\"122\" r=\"7\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"213\" cy=\"122\" r=\"7\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"180\" y=\"177\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">兩條對稱軸：1 × 2 × 2 ＝ 4 個圓洞</text></svg>"
        },
        {
          "type": "eq",
          "expr": "1 × 2 × 2 ＝ 4"
        },
        {
          "type": "answer",
          "text": "答：4 個"
        }
      ],
      "distractorAnalysis": {
        "A": "【漏算其中一次對摺】只當作對摺一次（2 層），錯算為 2 個洞。",
        "B": "【誤以為洞打在中心交點】以為打 1 個洞展開就只會有正中央 1 個大洞，忽略洞打在離摺線有距離的正中央。",
        "D": "【層數多乘一次】把兩次對摺錯記為 8 層，誤算為 8 個圓洞。"
      },
      "insight": "對摺一次變 2 倍、對摺兩次變 4 倍！每多打一個「不碰摺線」的洞，展開後數量就直接乘以層數。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對摺 1 次展開層數 ＝ 2 層",
        "對摺 2 次展開層數 ＝ 4 層"
      ],
      "conceptCompare": "【打在中央 vs 打在摺線交點】如果圓洞是剪在「兩條摺線交會的角落」，展開後 4 層相連只會變成正中央 1 個大洞；打在沒碰摺線的地方才會變成 4 個分離的洞。",
      "examVariations": "常改考在小正方形中央打 2 個洞，展開就會變成 2 × 4 ＝ 8 個洞。"
    },
    "check": {
      "expr": "1 * 2 * 2",
      "expect": "4"
    }
  },
  {
    "id": "U09-S1-O-001",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-1",
    "sectionName": "認識線對稱圖形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L3 四邊形家族對稱軸數總和與性質辨析",
    "category": "四邊形家族對稱軸數總和與性質辨析",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小宇用色紙剪出四種不同形狀的卡片：長方形（長不等於寬）、菱形（四個角都不是直角）、等腰梯形，以及一般平行四邊形（四邊不等長、無直角）。請問這四張卡片的對稱軸數量加起來總共有幾條？",
    "options": [
      {
        "key": "A",
        "text": "9 條",
        "trapCode": "U09_DIAG_NOT_AXIS"
      },
      {
        "key": "B",
        "text": "7 條",
        "trapCode": "U09_PARALLELOGRAM_SYM"
      },
      {
        "key": "C",
        "text": "5 條",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "6 條",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否精確掌握長方形、菱形、等腰梯形與一般平行四邊形的對稱軸條數，破除「對角線就是對稱軸」與「平行四邊形是線對稱圖形」兩大迷思。",
      "steps": [
        {
          "type": "text",
          "text": "逐一確認四種四邊形對折後能完全疊合的摺線數量：長方形只有橫、豎 2 條中線（對角線斜折不會疊合）；菱形只有 2 條對角線；等腰梯形只有上底中點連到下底中點的 1 條；一般平行四邊形無論怎麼對折都無法完全疊合，故為 0 條。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"32\" width=\"80\" height=\"52\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><line x1=\"60\" y1=\"22\" x2=\"60\" y2=\"94\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"10\" y1=\"58\" x2=\"110\" y2=\"58\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"60\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">長方形：2 條</text><polygon points=\"175,24 212,58 175,92 138,58\" fill=\"#dcfce7\" stroke=\"#15803d\" stroke-width=\"2\"/><line x1=\"175\" y1=\"16\" x2=\"175\" y2=\"100\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"128\" y1=\"58\" x2=\"222\" y2=\"58\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"175\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">菱形：2 條</text><polygon points=\"264,34 306,34 324,84 246,84\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"285\" y1=\"22\" x2=\"285\" y2=\"96\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"285\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">等腰梯形：1 條</text><polygon points=\"374,34 442,34 422,84 354,84\" fill=\"#f1f5f9\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"398\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#64748b\">平行四邊形：0 條</text><text x=\"230\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">紅虛線為對稱軸，合計 2 ＋ 2 ＋ 1 ＋ 0 ＝ 5 條</text></svg>",
          "caption": "圖解：四種四邊形實際能完全疊合的對稱軸數量比較"
        },
        {
          "type": "eq",
          "expr": "2 ＋ 2 ＋ 1 ＋ 0 ＝ 5"
        },
        {
          "type": "answer",
          "text": "答：5 條"
        }
      ],
      "distractorAnalysis": {
        "B": "【誤認平行四邊形為線對稱】誤以為一般平行四邊形和長方形一樣有 2 條對稱軸，算成 2 ＋ 2 ＋ 1 ＋ 2 ＝ 7 條。",
        "D": "【常見圖形對稱軸數記錯】誤以為等腰梯形有 2 條對稱軸（或少算菱形／多算其他形狀），算成 2 ＋ 2 ＋ 2 ＋ 0 ＝ 6 條。",
        "A": "【誤把一般對角線當對稱軸】不僅把一般平行四邊形算成 2 條，還誤把長方形的 2 條對角線也當成對稱軸，錯算成 4 ＋ 2 ＋ 1 ＋ 2 ＝ 9 條。"
      },
      "insight": "長方形的對角線雖然能把圖形分成兩個全等三角形，但對折後頂點並不會重疊，所以長方形只有 2 條對稱軸；一般平行四邊形更是 0 條喔！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對稱軸判別法：沿線對折後兩側圖形必須「完全疊合」，僅面積相等不算對稱軸",
        "四邊形對稱軸口訣：正方 4、長方菱形 2、等腰梯與箏 1、平行四邊 0"
      ],
      "conceptCompare": "【長方形 vs 菱形 vs 正方形】長方形的對稱軸是兩組對邊中點連線（2 條）；菱形的對稱軸是兩條對角線（2 條）；正方形同時具備兩種性質，所以合計有 4 條！",
      "examVariations": "段考常把「平行四邊形、長方形、等腰三角形、正五邊形」混在一起，問「共有幾個線對稱圖形」或「對稱軸條數最多與最少的相差幾條」。"
    },
    "check": {
      "expr": "2 + 2 + 1 + 0",
      "expect": "5"
    }
  },
  {
    "id": "U09-S1-O-002",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-1",
    "sectionName": "認識線對稱圖形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L3 正多邊形對稱軸通則應用與極值比較",
    "category": "正多邊形對稱軸通則應用",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "每一條邊都等長、每一個角都相等的「正多邊形」，有幾條邊就有幾條對稱軸。美勞課時，老師發下正七邊形、正九邊形、正十二邊形各一張色紙。如果小晴挑選其中對稱軸數量「最多」的兩張色紙，把它們的對稱軸條數加起來，會比「正五邊形和正六邊形的對稱軸總數」多出幾條？",
    "options": [
      {
        "key": "A",
        "text": "8 條",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "B",
        "text": "5 條",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "C",
        "text": "12 條",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "10 條",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否理解正多邊形「邊數等於對稱軸數」的通則（包含奇數邊與偶數邊皆成立），並正確選出極大組合與基準組求差。",
      "steps": [
        {
          "type": "text",
          "text": "正七邊形有 7 條對稱軸、正九邊形有 9 條對稱軸、正十二邊形有 12 條對稱軸。挑選對稱軸最多的兩張，就是正九邊形與正十二邊形。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"20\" width=\"196\" height=\"86\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"116\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1d4ed8\">挑選最多兩張</text><text x=\"116\" y=\"70\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">正九邊形（9）＋正十二邊形（12）</text><text x=\"116\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1d4ed8\">合計 ＝ 21 條</text><rect x=\"246\" y=\"20\" width=\"196\" height=\"86\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"344\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#b45309\">比較基準組</text><text x=\"344\" y=\"70\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">正五邊形（5）＋正六邊形（6）</text><text x=\"344\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#b45309\">合計 ＝ 11 條</text><text x=\"230\" y=\"136\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">兩組相差：21 － 11 ＝ 10 條</text></svg>",
          "caption": "圖解：正多邊形對稱軸數量分組加總與求差"
        },
        {
          "type": "eq",
          "expr": "9 ＋ 12 ＝ 21"
        },
        {
          "type": "eq",
          "expr": "5 ＋ 6 ＝ 11"
        },
        {
          "type": "eq",
          "expr": "21 － 11 ＝ 10"
        },
        {
          "type": "answer",
          "text": "答：10 條"
        }
      ],
      "distractorAnalysis": {
        "A": "【常見圖形對稱軸數記錯】誤以為奇數邊正多邊形的對稱軸比較少，將正九邊形算錯或漏算，導致總和少算 2 條而成 8 條。",
        "C": "【加減算錯或漏減】算出 21 後，忘記減掉正五邊形（只減正六邊形 6），錯算成 15 或加減進退位錯得 12 條。",
        "B": "【誤選較小兩張】錯選了正七邊形與正九邊形相加（7 ＋ 9 ＝ 16），再減去 11 而得到 5 條。"
      },
      "insight": "不管邊數是奇數還是偶數，正多邊形永遠滿足「幾邊形就有幾條對稱軸」：奇數邊的對稱軸會連接「頂點與對邊中點」；偶數邊則一半連「對面頂點」、一半連「對邊中點」。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "正多邊形通則：正幾邊形就有幾條對稱軸（正三角形 3、正方形 4、正五邊形 5…）"
      ],
      "conceptCompare": "【奇數邊 vs 偶數邊正多邊形】正九邊形的 9 條對稱軸每一條都「一端過頂點、一端過對邊中點」；正十二邊形的 12 條對稱軸有 6 條連對角頂點、6 條連對邊中點。",
      "examVariations": "若題目改成「只保留偶數邊的正多邊形」或「把正六邊形沿一條對稱軸剪成兩個梯形後各自剩幾條對稱軸」，要小心圖形改變後對稱軸會減少。"
    },
    "check": {
      "expr": "(9 + 12) - (5 + 6)",
      "expect": "10"
    }
  },
  {
    "id": "U09-S2-O-003",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-2",
    "sectionName": "對稱點、對稱邊和對稱角",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L4 對稱六邊形外框周長與內部對稱軸干擾",
    "category": "線對稱圖形周長與對稱軸干擾",
    "level": 4,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，校慶園遊會製作了一個線對稱六邊形 ABCDEF 造型看板，虛線「線段 AD」是它的對稱軸，線段 AD 長 18 公分。已知看板左側的邊 AB 長 14 公分、邊 BC 長 9 公分、邊 CD 長 11 公分。如果在看板「最外圍一圈」貼上螢光膠帶，總共需要幾公分？",
    "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,22 276,66 258,128 180,168 102,128 84,66\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2.5\"/><line x1=\"180\" y1=\"12\" x2=\"180\" y2=\"178\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"6,4\"/><text x=\"180\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">點 A</text><text x=\"68\" y=\"68\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"86\" y=\"134\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"180\" y=\"184\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">點 D</text><text x=\"272\" y=\"134\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 E</text><text x=\"290\" y=\"68\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 F</text><text x=\"118\" y=\"38\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#0369a1\">14 公分</text><text x=\"78\" y=\"100\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#0369a1\">9 公分</text><text x=\"126\" y=\"160\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#0369a1\">11 公分</text><text x=\"188\" y=\"98\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">18 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "68 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "86 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "C",
        "text": "52 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "D",
        "text": "34 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生能否利用對稱邊等長的性質補齊未知側邊，同時排除「中間內部對稱軸長度 18 公分」的干擾，正確求出外圍周長。",
      "steps": [
        {
          "type": "text",
          "text": "因為線段 AD 是對稱軸，左右兩側完全對稱：邊 AF ＝ 邊 AB ＝ 14 公分、邊 FE ＝ 邊 BC ＝ 9 公分、邊 ED ＝ 邊 CD ＝ 11 公分。而線段 AD 位在圖形內部，不是外圍邊界，所以計算周長時不能加上 18 公分！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 420 185\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"210,22 302,64 284,124 210,162 136,124 118,64\" fill=\"#f0fdf4\" stroke=\"#15803d\" stroke-width=\"2.5\"/><line x1=\"210\" y1=\"14\" x2=\"210\" y2=\"172\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><text x=\"150\" y=\"38\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">14</text><text x=\"270\" y=\"38\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">對稱邊 14</text><text x=\"118\" y=\"98\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">9</text><text x=\"302\" y=\"98\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">對稱邊 9</text><text x=\"162\" y=\"154\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">11</text><text x=\"258\" y=\"154\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">對稱邊 11</text><text x=\"210\" y=\"96\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#64748b\">內部 18 不算外圍</text></svg>",
          "caption": "圖解：利用對稱邊相等補齊右側三邊，並排除內部對稱軸 18 公分"
        },
        {
          "type": "eq",
          "expr": "（14 ＋ 9 ＋ 11） × 2 ＝ 34 × 2 ＝ 68"
        },
        {
          "type": "answer",
          "text": "答：68 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【周長誤加對稱軸】正確算出外圍 68 公分後，又誤以為要貼到中間線段 AD，多加了 18 公分變成 86 公分。",
        "D": "【周長只算半邊】只把題幹給的三條邊加起來 14 ＋ 9 ＋ 11 ＝ 34 公分，忘記乘以 2 把右半邊算進去。",
        "C": "【周長漏算或誤加對稱軸】只算了左半邊三條外圍邊（14 ＋ 9 ＋ 11 ＝ 34），卻把中間對稱軸 18 公分也加進去，得到 34 ＋ 18 ＝ 52 公分。"
      },
      "insight": "問「圖形周長」就是沿著最外圍走一圈！畫在圖形裡面的對稱軸或高，都只是輔助線，千萬別被多給的長度騙進去加一筆。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "線對稱多邊形外圍周長 ＝ 單側外圍邊長總和 × 2（對稱軸本身不計入）"
      ],
      "conceptCompare": "【整個圖形周長 vs 半邊圖形周長】如果題目改問「沿對稱軸剪開後的左半邊四邊形 ABCD 周長」，這時原本的內部對稱軸 AD 變成了外圍邊界，才要加上 18 公分（34 ＋ 18 ＝ 52 公分）！",
      "examVariations": "進階考題會先給整個六邊形的總周長 68 公分與其中兩條邊，反推第三條對稱邊的長度。"
    },
    "check": {
      "expr": "(14 + 9 + 11) * 2",
      "expect": "68"
    }
  },
  {
    "id": "U09-S2-O-004",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-2",
    "sectionName": "對稱點、對稱邊和對稱角",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L4 線對稱四邊形對稱角與三角形內角和推理",
    "category": "線對稱角度對稱與內角和推理",
    "level": 4,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，四邊形 ABCD 是一個左右對稱的風箏造型，虛線「線段 AC」是它的對稱軸。已知 ∠ABC ＝ 106 度，且線段 AC 把 ∠BCD 平分成兩個一樣大的角，其中 ∠ACD ＝ 28 度，請問頂端的 ∠BAD 是幾度？",
    "svg": "<svg viewBox=\"0 0 360 195\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,26 266,86 180,170 94,86\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.5\"/><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"182\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"6,4\"/><text x=\"180\" y=\"15\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">點 A</text><text x=\"82\" y=\"90\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">點 B</text><text x=\"180\" y=\"192\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">點 C</text><text x=\"278\" y=\"90\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">點 D</text><text x=\"134\" y=\"92\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#b45309\">106 度</text><text x=\"218\" y=\"148\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">∠ACD 28 度</text><text x=\"180\" y=\"58\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">∠BAD ？</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "46 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      },
      {
        "key": "B",
        "text": "106 度",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "C",
        "text": "92 度",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "128 度",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生運用「對稱角相等」與「對稱軸平分頂角」的性質，配合三角形內角和 180 度求出完整頂角。",
      "steps": [
        {
          "type": "text",
          "text": "因為線段 AC 是對稱軸，所以左半邊的 ∠BCA 和右半邊的 ∠ACD 互為對稱角，都是 28 度。在左半邊的三角形 ABC 中，已知兩個角分別是 106 度與 28 度，可先算出頂端的一半 ∠BAC。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 420 185\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"210,22 296,80 210,162 124,80\" fill=\"#fffbeb\" stroke=\"#d97706\" stroke-width=\"2\"/><polygon points=\"210,22 210,162 124,80\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><line x1=\"210\" y1=\"14\" x2=\"210\" y2=\"174\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"165\" y=\"86\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">106 度</text><text x=\"186\" y=\"132\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">對稱 28 度</text><text x=\"236\" y=\"132\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#64748b\">28 度</text><text x=\"186\" y=\"52\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">46 度</text><text x=\"234\" y=\"52\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">46 度</text></svg>",
          "caption": "圖解：利用左半邊三角形 ABC 求出半角 ∠BAC ＝ 46 度，再翻倍得整個 ∠BAD"
        },
        {
          "type": "eq",
          "expr": "180 － 106 － 28 ＝ 46"
        },
        {
          "type": "text",
          "text": "∠BAD 由兩個對稱的 46 度合起來，所以把 46 度乘以 2 就是答案（也可用四邊形內角和 360 － 106 － 106 － 56 ＝ 92 驗算）。"
        },
        {
          "type": "eq",
          "expr": "46 × 2 ＝ 92"
        },
        {
          "type": "answer",
          "text": "答：92 度"
        }
      ],
      "distractorAnalysis": {
        "A": "【對稱角對應位置搞混】算出半邊三角形的頂角 ∠BAC ＝ 46 度後就直接作答，忘記 ∠BAD 包含左右兩個對稱角，必須乘以 2。",
        "B": "【對稱點／角對應寫反】沒分辨哪些角互為對稱角，誤以為 ∠BAD 和 ∠ABC 一樣大而直接選了 106 度。",
        "D": "【角度加減算錯】用四邊形內角和 360 度減去兩個 106 度後，誤把 ∠BCD 直接當成 28 度（忘記 28 度只是半角），算出 360 － 106 － 106 － 28 ＝ 120 多或計算滑手得 128 度。"
      },
      "insight": "對稱軸會把跨在軸上的角「對半平分」！看到「對稱軸穿過頂角」，記得先算單側三角形的半角再乘以 2，既快速又不易漏算。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "跨過對稱軸的頂角 ＝ 單側半角 × 2",
        "線對稱四邊形（箏形）兩側對稱角相等、四內角和 ＝ 360 度"
      ],
      "conceptCompare": "【在軸上的角 vs 在兩側的角】∠ABC 與 ∠ADC 分居對稱軸兩側，是「相等的對稱角」；∠BAD 與 ∠BCD 被對稱軸穿過，則是被對稱軸「垂直平分」。",
      "examVariations": "也可反過來給整個 ∠BAD ＝ 92 度與 ∠BCD ＝ 56 度，反推兩側對稱角 ∠ABC 是幾度：（360 － 92 － 56） ÷ 2 ＝ 106 度。"
    },
    "check": {
      "expr": "(180 - 106 - 28) * 2",
      "expect": "92"
    }
  },
  {
    "id": "U09-S3-O-005",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-3",
    "sectionName": "繪製線對稱圖形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L5 4×4 方格紙斜向對稱軸最少補色構造",
    "category": "斜向對稱軸方格補色問題",
    "level": 5,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖是一張 4 × 4 的方格紙，紅色虛線是從「右上角」連到「左下角」的斜向對稱軸，目前已經塗黑了 6 個小方格。請問「最少」還要再塗黑幾個小方格，才能讓整張圖形變成以這條斜線為對稱軸的線對稱圖形？",
    "svg": "<svg viewBox=\"0 0 220 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"30\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"70\" y=\"30\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"110\" y=\"30\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"30\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"70\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"70\" y=\"70\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"110\" y=\"70\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"70\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"110\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"70\" y=\"110\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"110\" y=\"110\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"110\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"150\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"70\" y=\"150\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"110\" y=\"150\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"150\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"22\" x2=\"22\" y2=\"198\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><text x=\"110\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">斜向對稱軸</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "2 格",
        "trapCode": "U09_GRID_OFFSET_ONE"
      },
      {
        "key": "B",
        "text": "3 格",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "4 格",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "D",
        "text": "5 格",
        "trapCode": "U09_GRID_OFFSET_ONE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生在斜向對稱軸下，能否垂直於對稱軸尋找對應格點，區分「已在軸上（免補）」、「已成對稱（免補）」與「尚缺對稱格（須補）」三種狀況。",
      "steps": [
        {
          "type": "text",
          "text": "把每個已塗黑的小方格垂直對稱軸翻折到另一側檢查（由上而下稱為第 1～4 列，由左而右稱為第 1～4 行）："
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 380 210\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"25\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"60\" y=\"25\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"100\" y=\"25\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"140\" y=\"25\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"20\" y=\"65\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"60\" y=\"65\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"100\" y=\"65\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"140\" y=\"65\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"20\" y=\"105\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"60\" y=\"105\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"100\" y=\"105\" width=\"40\" height=\"40\" fill=\"#3b82f6\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><rect x=\"140\" y=\"105\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"20\" y=\"145\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"60\" y=\"145\" width=\"40\" height=\"40\" fill=\"#3b82f6\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><rect x=\"100\" y=\"145\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"140\" y=\"145\" width=\"40\" height=\"40\" fill=\"#3b82f6\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><line x1=\"188\" y1=\"17\" x2=\"12\" y2=\"193\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><text x=\"206\" y=\"52\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">①（1列2行）↔（3列4行）已成對</text><text x=\"206\" y=\"80\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">②（2列3行）在斜軸上免補</text><text x=\"206\" y=\"108\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">③（1列1行）→ 補（4列4行）</text><text x=\"206\" y=\"136\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">④（2列2行）→ 補（3列3行）</text><text x=\"206\" y=\"164\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">⑤（3列1行）→ 補（4列2行）</text></svg>",
          "caption": "圖解：藍色為最少需補塗的 3 個對稱方格"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 1 ＋ 1 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：3 格"
        }
      ],
      "distractorAnalysis": {
        "A": "【方格塗色補對稱差 1 格】誤判原本（2列2行）或（3列1行）已經對稱，少補了 1 格，錯選 2 格。",
        "C": "【對稱點到軸距離沒相等】誤以為在斜向對稱軸上的（2列3行）也要在旁邊多塗 1 格，或是斜向數錯格數而變成補 4 格。",
        "D": "【方格塗色補對稱差錯】沒發現（1列2行）與（3列4行）已經互為對稱格，把不在斜軸上的 5 個黑格全部各自再補 1 格。"
      },
      "insight": "遇到斜向對稱軸最容易看花眼！只要把整張考卷稍微轉 45 度讓斜線變成垂直線，對稱格子馬上就一目了然，不會找錯位置。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "斜軸補對稱三步：1.先刪掉被軸穿過的格（免補）→ 2.畫出已配對的格（免補）→ 3.剩下每 1 單身格補 1 格"
      ],
      "conceptCompare": "【垂直軸 vs 斜向軸】垂直或水平軸只要數「左右／上下距離幾格」；斜向軸則要沿著對角線方向垂直數「幾個斜半格」或轉動紙張把斜軸擺正來找。",
      "examVariations": "高階變化會把 4 × 4 方格紙改為「同時要滿足兩條對稱軸（十字或雙對角線）」，或要求連成一塊不中斷的連通圖形。"
    },
    "check": {
      "expr": "1 + 1 + 1",
      "expect": "3"
    }
  },
  {
    "id": "U09-S3-O-006",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-3",
    "sectionName": "繪製線對稱圖形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L5 鏡面無數字指針時鐘時間逆推",
    "category": "鏡面時鐘時間逆推",
    "level": 5,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "牆上掛著一個只有 12 個整點圓點刻度、沒有任何數字的指針時鐘。小安從正對面的大鏡子裡，看見鏡中時鐘的長短針指著「8 時 35 分」的位置（如圖）。請問此時實際的正確時間是幾時幾分？",
    "svg": "<svg viewBox=\"0 0 220 205\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"22\" y=\"12\" width=\"176\" height=\"180\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"2.5\"/><circle cx=\"110\" cy=\"104\" r=\"68\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"2.5\"/><circle cx=\"110\" cy=\"44\" r=\"3\" fill=\"#334155\"/><circle cx=\"140\" cy=\"52\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"162\" cy=\"74\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"170\" cy=\"104\" r=\"3\" fill=\"#334155\"/><circle cx=\"162\" cy=\"134\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"140\" cy=\"156\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"110\" cy=\"164\" r=\"3\" fill=\"#334155\"/><circle cx=\"80\" cy=\"156\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"58\" cy=\"134\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"50\" cy=\"104\" r=\"3\" fill=\"#334155\"/><circle cx=\"58\" cy=\"74\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"80\" cy=\"52\" r=\"2.5\" fill=\"#64748b\"/><line x1=\"110\" y1=\"104\" x2=\"77\" y2=\"119\" stroke=\"#dc2626\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"104\" x2=\"83\" y2=\"150\" stroke=\"#2563eb\" stroke-width=\"2.8\" stroke-linecap=\"round\"/><circle cx=\"110\" cy=\"104\" r=\"4.5\" fill=\"#1e293b\"/><text x=\"110\" y=\"30\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#475569\">鏡中的時鐘</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "4 時 25 分",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "3 時 25 分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "3 時 35 分",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "D",
        "text": "9 時 25 分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      }
    ],
    "answer": "B",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "測驗學生對鏡像左右對稱（12 點到 6 點連線為垂直對稱軸）的空間翻轉能力，掌握鏡中時刻與真實時刻合起來為 12 小時的減法捷徑。",
      "steps": [
        {
          "type": "text",
          "text": "鏡子裡的時間是真實時鐘以「12 點到 6 點的垂直線」為對稱軸左右翻轉的結果。分針原本指向「7（35 分）」，翻轉後會對稱到「5（25 分）」；時針在 8 與 9 之間，翻轉後會對稱到 3 與 4 之間。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 430 175\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"95\" cy=\"88\" r=\"62\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"2\"/><line x1=\"95\" y1=\"20\" x2=\"95\" y2=\"156\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"95\" y1=\"88\" x2=\"64\" y2=\"102\" stroke=\"#dc2626\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"95\" y1=\"88\" x2=\"70\" y2=\"130\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"95\" cy=\"88\" r=\"4\" fill=\"#1e293b\"/><text x=\"95\" y=\"170\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#be123c\">鏡中：8 時 35 分</text><line x1=\"215\" y1=\"14\" x2=\"215\" y2=\"168\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><text x=\"215\" y=\"26\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">對稱軸</text><circle cx=\"335\" cy=\"88\" r=\"62\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2\"/><line x1=\"335\" y1=\"20\" x2=\"335\" y2=\"156\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"335\" y1=\"88\" x2=\"366\" y2=\"102\" stroke=\"#dc2626\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"335\" y1=\"88\" x2=\"360\" y2=\"130\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"335\" cy=\"88\" r=\"4\" fill=\"#1e293b\"/><text x=\"335\" y=\"170\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#047857\">實際：3 時 25 分</text></svg>",
          "caption": "圖解：將鏡中時鐘沿垂直對稱軸翻轉還原，即得實際時刻 3 時 25 分（205 分鐘位置）"
        },
        {
          "type": "text",
          "text": "算術速解法：鏡中時間 ＋ 實際時間 ＝ 12 時 ＝ 11 時 60 分。用 11 時 60 分減去 8 時 35 分即可："
        },
        {
          "type": "eq",
          "expr": "11 時 60 分 － 8 時 35 分 ＝ 3 時 25 分（共 205 分）"
        },
        {
          "type": "answer",
          "text": "答：3 時 25 分"
        }
      ],
      "distractorAnalysis": {
        "C": "【鏡像翻轉不完全】只把時針從左側翻到右側變成 3 時，卻忘記分針也要左右翻轉，保留了 35 分。",
        "D": "【對稱點到軸距離沒相等】誤把時針方向看反或上下翻轉，導致小時數判斷錯誤為 9 時 25 分。",
        "A": "【時間減法借位算錯】直接拿 12 減 8 得 4 時、拿 60 減 35 得 25 分，忘記 60 分是向 12 時借位 1 小時來的，錯算出 4 時 25 分。"
      },
      "insight": "鏡中時鐘永遠與「垂直的 12－6 軸」左右對稱！記住「11 時 60 分 － 鏡中時刻 ＝ 真實時刻」（若剛好整點則用 12 時去減），10 秒內必對。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "鏡面指針時鐘公式：實際時刻 ＝ 11 時 60 分 － 鏡中時刻（整點時為 12 時 － 鏡中時刻）"
      ],
      "conceptCompare": "【牆上指針時鐘 vs 電子數字鐘】無數字指針鐘翻轉後看「刻度位置」；七段電子數字鐘除了每個數字左右鏡像翻轉（如 2 變 5）外，整個四位數的左右順序也會整個倒過來！",
      "examVariations": "進階題會問「相隔兩次看鏡子之間的實際經過分鐘數」，或「若是水平水面倒影（12 和 6 上下互換）時針分針該怎麼看」。"
    },
    "check": {
      "expr": "11 * 60 + 60 - (8 * 60 + 35)",
      "expect": "205"
    }
  },
  {
    "id": "U09-S3-O-007",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-3",
    "sectionName": "繪製線對稱圖形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L5 格線座標對稱點距離與平移複合計算",
    "category": "對稱點距離與格子平移複合",
    "level": 5,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "在一張每格邊長為 1 公分的大格子紙上，畫有一條垂直的對稱軸在「由左往右數第 12 條直線」的位置。已知點 P 位在「第 5 條直線」與「由下往上數第 7 條橫線」的交點上，點 Q 是點 P 以這條直線為對稱軸的對稱點，而點 R 則是從點 Q 出發「再往右移動 4 公分、往上移動 3 公分」後的位置。請問點 P 和點 R 在水平方向上相差幾公分？",
    "options": [
      {
        "key": "A",
        "text": "11 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "B",
        "text": "16 公分",
        "trapCode": "U09_GRID_OFFSET_ONE"
      },
      {
        "key": "C",
        "text": "14 公分",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "18 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否理解「對稱軸垂直平分兩對稱點連線（兩對稱點距離 ＝ 單側到軸距離 × 2）」，並結合平移計算水平距離差。",
      "steps": [
        {
          "type": "text",
          "text": "先算點 P 到垂直對稱軸的水平距離：在第 5 條線到第 12 條線之間，相差 12 － 5 ＝ 7 格（7 公分）。因為對稱點到對稱軸的距離相等，所以點 Q 在對稱軸右方 7 公分處（第 12 ＋ 7 ＝ 19 條直線）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 440 165\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"125\" x2=\"420\" y2=\"125\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"200\" y1=\"16\" x2=\"200\" y2=\"142\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><text x=\"200\" y=\"158\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">對稱軸（第 12 條線）</text><circle cx=\"88\" cy=\"92\" r=\"5\" fill=\"#1d4ed8\"/><text x=\"88\" y=\"114\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">點 P（第 5 條）</text><line x1=\"88\" y1=\"92\" x2=\"312\" y2=\"92\" stroke=\"#2563eb\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"144\" y=\"84\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">7 公分</text><text x=\"256\" y=\"84\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">7 公分</text><circle cx=\"312\" cy=\"92\" r=\"5\" fill=\"#059669\"/><text x=\"312\" y=\"114\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#059669\">點 Q（第 19 條）</text><line x1=\"312\" y1=\"92\" x2=\"376\" y2=\"92\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"376\" y1=\"92\" x2=\"376\" y2=\"44\" stroke=\"#d97706\" stroke-width=\"2\"/><circle cx=\"376\" cy=\"44\" r=\"5\" fill=\"#d97706\"/><text x=\"376\" y=\"32\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#b45309\">點 R（第 23 條）</text><text x=\"344\" y=\"82\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\">右 4</text><text x=\"398\" y=\"72\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\">上 3</text></svg>",
          "caption": "圖解：點 P 先對稱到第 19 條線的點 Q，再右移 4 公分到第 23 條線的點 R"
        },
        {
          "type": "text",
          "text": "點 Q 再往右移動 4 公分到達點 R（第 19 ＋ 4 ＝ 23 條直線），而「往上移動 3 公分」不影響水平距離。所以點 P 與點 R 的水平距離是："
        },
        {
          "type": "eq",
          "expr": "（12 － 5） × 2 ＋ 4 ＝ 14 ＋ 4 ＝ 18"
        },
        {
          "type": "answer",
          "text": "答：18 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【對稱點到軸距離沒相等】只把點 P 到軸的距離 7 公分直接加上右移的 4 公分，忘記點 Q 也在軸的另一側距離 7 公分，算成 7 ＋ 4 ＝ 11 公分。",
        "B": "【數格子差 1 格】數第 5 條線到第 12 條線的間隔數時錯算成 6 格，變成 6 × 2 ＋ 4 ＝ 16 公分。",
        "C": "【漏算最後平移步驟】只算出了點 P 到點 Q 的距離 7 × 2 ＝ 14 公分，忘記點 R 又往右移動了 4 公分。"
      },
      "insight": "問「水平方向相差幾公分」時，「往上移動 3 公分」是垂直方向的干擾條件！先算兩對稱點間距（單側距離的 2 倍），再加減水平移動量即可。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩對稱點的總距離 ＝ 單一點到對稱軸距離 × 2",
        "直線編號差 ＝ 間隔格數（第 5 條到第 12 條共 12 － 5 ＝ 7 格）"
      ],
      "conceptCompare": "【數「格子」vs 數「格線」】在網格圖上，「第 5 條線」到「第 12 條線」共有 12 － 5 ＝ 7 個間隔，切記不要用植樹問題加 1 變成 8 公分！",
      "examVariations": "若題目改成「點 P 與點 R 最後在垂直方向相差幾公分」，因為垂直對稱軸翻折不改變高度，垂直差就單純等於往上移動的 3 公分。"
    },
    "check": {
      "expr": "(12 - 5) * 2 + 4",
      "expect": "18"
    }
  },
  {
    "id": "U09-S4-O-008",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-4",
    "sectionName": "線對稱圖形的應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L6 兩次對折剪去外角與中心交點後的展開剩餘面積",
    "category": "對折剪紙展開剩餘面積",
    "level": 6,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，小婷拿一張邊長 20 公分的正方形色紙，先由下往上對折，再由右往左對折，折成一個邊長 10 公分的四層小正方形。接著她在「四層完全沒有折線的左上外角」剪去一個邊長 3 公分的小正方形，又在「兩條折線交會的右下中心角」剪去一個邊長 2 公分的小正方形。請問把色紙完全攤平展開後，剩下的紙張面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 260 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"65\" y=\"30\" width=\"130\" height=\"130\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><rect x=\"65\" y=\"30\" width=\"39\" height=\"39\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><rect x=\"169\" y=\"134\" width=\"26\" height=\"26\" fill=\"#ffffff\" stroke=\"#059669\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"65\" y1=\"160\" x2=\"195\" y2=\"160\" stroke=\"#059669\" stroke-width=\"3\"/><line x1=\"195\" y1=\"30\" x2=\"195\" y2=\"160\" stroke=\"#059669\" stroke-width=\"3\"/><text x=\"130\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">10 公分</text><text x=\"84\" y=\"54\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">剪 3×3</text><text x=\"182\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#059669\">2×2</text><text x=\"130\" y=\"178\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">下邊與右邊皆為對折線</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "360 平方公分",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "B",
        "text": "387 平方公分",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "C",
        "text": "348 平方公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "366 平方公分",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生理解「對折兩次形成四層紙」對面積扣除的影響：無論剪在角上還是中心交點，每一刀穿過 4 層紙，展開後都確實少掉 4 倍的剪去面積。",
      "steps": [
        {
          "type": "text",
          "text": "原本大正方形的面積為 20 × 20 ＝ 400 平方公分。因為連續對折兩次，紙張共有 4 層重疊：在左上外角剪掉 3 × 3 ＝ 9 平方公分，展開後四個角落各缺一塊（共扣 4 × 9 ＝ 36 平方公分）；在右下中心角剪掉 2 × 2 ＝ 4 平方公分，展開後會在正中央合成一個邊長 4 公分的大正方形洞（共扣 4 × 4 ＝ 16 平方公分）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 420 185\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"20\" width=\"140\" height=\"140\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><line x1=\"95\" y1=\"14\" x2=\"95\" y2=\"166\" stroke=\"#059669\" stroke-width=\"1.8\" stroke-dasharray=\"5,3\"/><line x1=\"19\" y1=\"90\" x2=\"171\" y2=\"90\" stroke=\"#059669\" stroke-width=\"1.8\" stroke-dasharray=\"5,3\"/><rect x=\"25\" y=\"20\" width=\"21\" height=\"21\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><rect x=\"144\" y=\"20\" width=\"21\" height=\"21\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><rect x=\"25\" y=\"139\" width=\"21\" height=\"21\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><rect x=\"144\" y=\"139\" width=\"21\" height=\"21\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><rect x=\"81\" y=\"76\" width=\"28\" height=\"28\" fill=\"#ffffff\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"190\" y=\"52\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">原面積：20 × 20 ＝ 400</text><text x=\"190\" y=\"82\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">四角缺口：4 × （3 × 3） ＝ 36</text><text x=\"190\" y=\"112\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">中央大洞：4 × （2 × 2） ＝ 16</text><text x=\"190\" y=\"142\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#1d4ed8\">剩餘：400 － 36 － 16 ＝ 348</text></svg>",
          "caption": "圖解：展開後的四個角落缺口與中央合體洞口面積分布"
        },
        {
          "type": "eq",
          "expr": "400 － 4 × （3 × 3） － 4 × （2 × 2） ＝ 400 － 36 － 16 ＝ 348"
        },
        {
          "type": "answer",
          "text": "答：348 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【展開乘數迷思】雖然把外角 3 × 3 乘以 4 層，卻誤以為中央只變成「1 個洞」所以只扣 2 × 2 ＝ 4，錯算成 400 － 36 － 4 ＝ 360 平方公分。",
        "B": "【忘記對折層數】完全忘記這張紙有對折兩次（共 4 層），直接拿 400 － 9 － 4 ＝ 387 平方公分。",
        "D": "【只算對折一層】錯算成其中一個缺口只有 2 層（如 400 － 18 － 16 ＝ 366 平方公分）。"
      },
      "insight": "問「剪完展開的面積」其實超單純！只要在 4 層重疊的地方實實在在剪掉，不管是外角、折線邊還是中心點，剪下的碎紙片攤開都是原面積的 4 倍！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對折次數與層數：對折 1 次 2 層、對折 2 次 4 層、對折 3 次 8 層",
        "剩餘面積 ＝ 原面積 － 剪下區域面積 × 總層數"
      ],
      "conceptCompare": "【問「洞的個數」vs 問「剩餘面積」】在中心角剪一刀，展開後雖然會合體成「1 個」大洞，但這個大洞的面積依然是單層小洞的「4 倍」，別把洞的數量和面積搞混了！",
      "examVariations": "若改問「展開後的周長」，四角剪掉 3 × 3 不影響外圍周長，但中央合體的 4 × 4 洞口會使總周長多出 16 公分。"
    },
    "check": {
      "expr": "20 * 20 - 4 * (3 * 3) - 4 * (2 * 2)",
      "expect": "348"
    }
  },
  {
    "id": "U09-S4-O-009",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-4",
    "sectionName": "線對稱圖形的應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L6 電子七段數字雙重鏡像逆推還原",
    "category": "電子數字鏡像與位置翻轉逆推",
    "level": 6,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，某個電子密碼鎖的顯示螢幕（標準七段電子數字）正對著右邊牆上的一面直立大鏡子。小傑站在側面從鏡子裡看到螢幕上的四位數顯示為「2 0 8 5」。請問密碼鎖實際顯示的四位數密碼是多少？",
    "svg": "<svg viewBox=\"0 0 320 140\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"25\" width=\"210\" height=\"86\" rx=\"10\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2.5\"/><text x=\"130\" y=\"82\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"800\" fill=\"#38bdf8\">2 0 8 5</text><line x1=\"256\" y1=\"16\" x2=\"256\" y2=\"124\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><text x=\"130\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#334155\">鏡子裡看到的樣子</text><text x=\"288\" y=\"72\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">鏡面軸</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "5802",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "B",
        "text": "2805",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "5082",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "D",
        "text": "2085",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生區分「整排數位位置的左右對調」與「單一數字筆畫自身的左右鏡像翻轉」，解決雙層對稱還原問題。",
      "steps": [
        {
          "type": "text",
          "text": "在垂直鏡面中，會同時發生兩件事：① 整體四個數字的「位置順序」會左右顛倒（從 2、0、8、5 倒過來排成 5、8、0、2）；② 每一個標準電子數字「本身的形狀」也會左右翻轉（0 和 8 本身左右對稱不變，但電子數字「5」左右翻轉會變成「2」，電子數字「2」左右翻轉會變成「5」）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 430 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"25\" width=\"164\" height=\"66\" rx=\"8\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"100\" y=\"68\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#38bdf8\">2  0  8  5</text><text x=\"100\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">鏡中影像</text><line x1=\"215\" y1=\"14\" x2=\"215\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><text x=\"215\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">垂直鏡面對稱翻轉</text><rect x=\"248\" y=\"25\" width=\"164\" height=\"66\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"330\" y=\"68\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#047857\">2  8  0  5</text><text x=\"330\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#047857\">實際密碼：2805</text></svg>",
          "caption": "圖解：將鏡中 2 0 8 5 依「位置對調＋字形翻轉」雙步驟還原為 2805"
        },
        {
          "type": "eq",
          "expr": "順序倒寫（5 8 0 2） → 各自翻轉（2 8 0 5） ＝ 2805"
        },
        {
          "type": "answer",
          "text": "答：2805"
        }
      ],
      "distractorAnalysis": {
        "C": "【對稱點／邊對應順序寫反】只把每個數字單獨左右翻轉（2 變 5、5 變 2），卻忘了四個數字的左右排列位置也會互換，錯寫成 5082。",
        "D": "【對稱點到軸距離沒相等】誤以為鏡面反射與原圖完全一致，直接照抄鏡中顯示的 2085。",
        "A": "【摺紙剪紙展開鏡像顛倒】只做了「順序左右倒寫」（把 2085 反寫成 5802），忘記電子數字 2 和 5 本身的形狀也要左右翻轉。"
      },
      "insight": "驗算鏡面數字最穩的方法：把你算出的「2805」寫在紙上，從最右邊的「5」開始由右往左一個個翻回鏡面（5→2、0→0、8→8、2→5），檢查是否剛好還原成題目說的「2085」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "標準七段電子數字左右鏡像配對：0↔0、1↔1、8↔8、2↔5（其餘 3、4、6、7、9 翻轉後不是正常數字）"
      ],
      "conceptCompare": "【直立鏡面（左右翻）vs 水平水面（上下翻）】若是水面在數字正下方，數字「位置順序不變」，但字形上下翻轉後 2 還是變 5、5 變 2，而 6 會變成 9！",
      "examVariations": "也可改問「將寫著數字的透明投影片往後翻面透視」，效果與照直立鏡子完全相同。"
    },
    "check": {
      "expr": "2805",
      "expect": "2805"
    }
  },
  {
    "id": "U09-S4-O-010",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-4",
    "sectionName": "線對稱圖形的應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L6 長方形紙條斜折對稱角與平角推理",
    "category": "紙條摺疊對稱角推理",
    "level": 6,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，小美把一張長方形紙條 ABCD 沿著摺線 EF 往左上方摺疊，讓右側的頂點 C、D 翻摺到新位置 P、Q。如果摺疊後測量得到左下方露出來的夾角 ∠BEP ＝ 52 度，請問摺疊後形成的 ∠PEF 是幾度？",
    "svg": "<svg viewBox=\"0 0 380 185\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"45\" width=\"300\" height=\"100\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><polygon points=\"35,45 245,45 196,145 35,145\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><polygon points=\"196,145 245,45 162,4 114,96\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><line x1=\"196\" y1=\"145\" x2=\"245\" y2=\"45\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,3\"/><text x=\"28\" y=\"42\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">A</text><text x=\"28\" y=\"158\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">B</text><text x=\"342\" y=\"158\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#64748b\">C</text><text x=\"342\" y=\"42\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#64748b\">D</text><text x=\"196\" y=\"164\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">E</text><text x=\"248\" y=\"38\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">F</text><text x=\"102\" y=\"100\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">P</text><text x=\"152\" y=\"16\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">Q</text><text x=\"148\" y=\"138\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">52 度</text><text x=\"195\" y=\"106\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">∠PEF？</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "64 度",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "52 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      },
      {
        "key": "C",
        "text": "128 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      },
      {
        "key": "D",
        "text": "38 度",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生理解「摺痕即為對稱軸」，因此摺疊前後重疊的兩個角（∠PEF 與 ∠FEC）相等，再配合平角 180 度反推。",
      "steps": [
        {
          "type": "text",
          "text": "把紙條沿著摺線 EF 翻折過去後，原本的 ∠FEC 剛好疊合到 ∠PEF 上，因此 ∠PEF ＝ ∠FEC。而這兩個角加上旁邊的 ∠BEP，剛好在底邊 BC 上拼成一個 180 度的平角。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 380 155\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"122\" x2=\"340\" y2=\"122\" stroke=\"#475569\" stroke-width=\"2.5\"/><line x1=\"190\" y1=\"122\" x2=\"130\" y2=\"40\" stroke=\"#1d4ed8\" stroke-width=\"2.5\"/><line x1=\"190\" y1=\"122\" x2=\"234\" y2=\"32\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,3\"/><circle cx=\"190\" cy=\"122\" r=\"4\" fill=\"#1e293b\"/><text x=\"46\" y=\"142\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">B</text><text x=\"190\" y=\"142\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">E（平角 180 度）</text><text x=\"334\" y=\"142\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#64748b\">C</text><text x=\"122\" y=\"34\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">P</text><text x=\"240\" y=\"26\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">F（摺線）</text><text x=\"128\" y=\"104\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#d97706\">52 度</text><text x=\"186\" y=\"74\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">64 度</text><text x=\"248\" y=\"96\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">對稱 64 度</text></svg>",
          "caption": "圖解：點 E 處平角 180 度由 ∠BEP（52 度）與兩個相等的對稱角組成"
        },
        {
          "type": "eq",
          "expr": "（180 － 52） ÷ 2 ＝ 128 ÷ 2 ＝ 64"
        },
        {
          "type": "answer",
          "text": "答：64 度"
        }
      ],
      "distractorAnalysis": {
        "C": "【忘記除以 2】正確算出 180 － 52 ＝ 128 度後，忘記這 128 度包含「折前」和「折後」兩個一樣大的角，沒有除以 2 就直接作答。",
        "D": "【錯用直角計算】誤把長方形平角當成 90 度直角來減，錯算出 90 － 52 ＝ 38 度。",
        "B": "【對稱角對應位置搞混】誤以為 ∠PEF 會直接等於旁邊沒有被折到的 ∠BEP（52 度）。"
      },
      "insight": "所有「摺紙求角度」題型的唯一金鑰：摺線就是對稱軸，所以「折上去蓋住的角」永遠等於「原本還沒折的角」！抓住這對相等的角，再用平角 180 度扣減除以 2 就搞定。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "紙條摺疊平角關係：剩餘未蓋住角 ＋ 2 × 摺疊角 ＝ 180 度"
      ],
      "conceptCompare": "【摺紙單倍角 vs 雙倍角】如果題目改問「∠BEP 是幾度，已知摺疊角 ∠PEF ＝ 64 度」，就要反過來扣兩次 64 度：180 － 64 × 2 ＝ 52 度。",
      "examVariations": "進階題會利用長方形上下邊平行的性質，再接續追問上方頂角 ∠EFQ 或 ∠AFP 的度數。"
    },
    "check": {
      "expr": "(180 - 52) / 2",
      "expect": "64"
    }
  },
  {
    "id": "U09-RV-O-011",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L7 三次對折含斜邊半圓缺口剪洞展開計數",
    "category": "三次對折剪洞計數",
    "level": 7,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，小豪把一張大正方形白紙先「左右對折」一次，再「上下對折」一次，最後「沿著對角線（圖中最長的斜邊）」再對折一次，共對折了 3 次，折成一個 8 層重疊的等腰直角三角形。接著他在三角形紙片「內部（不碰任何邊界）」打了 3 個圓孔，又在「第 3 次對折線（斜邊）」的中間剪了 1 個半圓形缺口（缺口不碰到頂點）。請問把這張紙完全展開後，整張紙上一共有幾個完整的圓孔？",
    "svg": "<svg viewBox=\"0 0 230 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"45,155 185,155 185,25\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2.2\"/><line x1=\"45\" y1=\"155\" x2=\"185\" y2=\"25\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><circle cx=\"145\" cy=\"92\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><circle cx=\"160\" cy=\"125\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><circle cx=\"115\" cy=\"130\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><path d=\"M 105,99 A 10,10 0 0,0 121,84 Z\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"90\" y=\"68\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">第 3 次對折線</text><text x=\"115\" y=\"174\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">內部 3 圓孔 ＋ 斜邊 1 半圓缺口</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "24 個",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "B",
        "text": "32 個",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "16 個",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "D",
        "text": "28 個",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生對三次對折（8 層）空間展開的精準計數能力，特別是區分「內部獨立孔洞（乘 8）」與「壓在對折線上的半圓缺口（兩側合併為 1 圓，故僅乘 4）」之差異。",
      "steps": [
        {
          "type": "text",
          "text": "對折 3 次總共有 2 × 2 × 2 ＝ 8 層重疊。① 三角形「內部」的 3 個圓孔完全不碰折線，所以展開後每 1 個孔都會變成 8 個獨立圓孔，共 3 × 8 ＝ 24 個。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 420 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"150\" height=\"150\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"95\" y1=\"14\" x2=\"95\" y2=\"176\" stroke=\"#059669\" stroke-width=\"1.8\" stroke-dasharray=\"5,3\"/><line x1=\"14\" y1=\"95\" x2=\"176\" y2=\"95\" stroke=\"#059669\" stroke-width=\"1.8\" stroke-dasharray=\"5,3\"/><line x1=\"20\" y1=\"20\" x2=\"170\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"170\" y1=\"20\" x2=\"20\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><circle cx=\"58\" cy=\"58\" r=\"6\" fill=\"#fde68a\" stroke=\"#dc2626\" stroke-width=\"2\"/><circle cx=\"132\" cy=\"58\" r=\"6\" fill=\"#fde68a\" stroke=\"#dc2626\" stroke-width=\"2\"/><circle cx=\"58\" cy=\"132\" r=\"6\" fill=\"#fde68a\" stroke=\"#dc2626\" stroke-width=\"2\"/><circle cx=\"132\" cy=\"132\" r=\"6\" fill=\"#fde68a\" stroke=\"#dc2626\" stroke-width=\"2\"/><circle cx=\"75\" cy=\"35\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"35\" cy=\"75\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"115\" cy=\"35\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"155\" cy=\"75\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"75\" cy=\"155\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"35\" cy=\"115\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"115\" cy=\"155\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"155\" cy=\"115\" r=\"3.5\" fill=\"#2563eb\"/><text x=\"190\" y=\"50\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">內部 3 孔 × 8 層 ＝ 24 個藍孔</text><text x=\"190\" y=\"84\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">斜折線半圓展開兩半合併成 1 圓</text><text x=\"190\" y=\"114\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">4 個區域共有 4 個黃色圓孔</text><text x=\"190\" y=\"148\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#059669\">合計：24 ＋ 4 ＝ 28 個完整圓孔</text></svg>",
          "caption": "圖解：展開後四個象限各有 6 個內部孔（共 24 個）與 1 個對角線合併孔（共 4 個）"
        },
        {
          "type": "text",
          "text": "② 剪在「第 3 次對折線（斜邊）」上的 1 個半圓缺口，只要往回打開第 3 次對折，左右兩個半圓就會合體成 1 個完整圓孔；接著再打開前兩次對折，四個區域共有 4 個完整圓孔。"
        },
        {
          "type": "eq",
          "expr": "3 × 8 ＋ 4 ＝ 24 ＋ 4 ＝ 28"
        },
        {
          "type": "answer",
          "text": "答：28 個"
        }
      ],
      "distractorAnalysis": {
        "A": "【漏算折線半圓合併】只算了內部的 3 × 8 ＝ 24 個圓孔，忽略了斜對折線上的半圓缺口展開後也能合併出 4 個完整圓孔。",
        "B": "【乘錯倍數】把斜邊上的半圓缺口也比照內部圓孔直接乘以 8 層，錯算成 24 ＋ 8 ＝ 32 個。",
        "C": "【層數誤算】誤以為對折 3 次只有 4 層（或 2 ＋ 2 ＋ 2 ＝ 6 層），算成 16 個。"
      },
      "insight": "剪紙計數鐵律：打在「紙片裡面」乘以總層數；剪在「某一條單層對折邊上」會兩兩合併，只剩總層數的一半；剪在「兩軸交會點」則四塊合一！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對折 N 次層數 ＝ 2 的 N 次方（3 次為 2 × 2 × 2 ＝ 8 層）",
        "內部打孔數 ＝ 孔數 × 8；單一對折線半圓數 ＝ 缺口數 × 4"
      ],
      "conceptCompare": "【剪在「第 3 次對折線」vs 剪在「最外層原紙邊界」】同樣是三角形的一條邊，若剪在原本正方形的最外層邊界上，展開後只會變成外框凹槽，內部不會產生圓孔！",
      "examVariations": "更難的題目會在兩條折線交會的頂點（原紙中心點）再剪一個四分之一圓缺口，展開後會合體成 1 個中央大圓孔。"
    },
    "check": {
      "expr": "3 * 8 + 4",
      "expect": "28"
    }
  },
  {
    "id": "U09-RV-O-012",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L7 4×4 方格紙雙垂直對稱軸連環翻折最少補色",
    "category": "雙軸對稱方格最少補色",
    "level": 7,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖是一張 4 × 4 的方格紙，畫有一條垂直中線與一條水平中線兩條紅色虛線。目前已經塗黑了 3 個小方格。如果要讓整張圖形「同時」以這兩條虛線為對稱軸（兩條線都是對稱軸），請問「最少」還要再塗黑幾個小方格？",
    "svg": "<svg viewBox=\"0 0 220 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"30\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"70\" y=\"30\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"110\" y=\"30\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"30\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"70\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"70\" y=\"70\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"110\" y=\"70\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"70\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"110\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"70\" y=\"110\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"110\" y=\"110\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"110\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"150\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"70\" y=\"150\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"110\" y=\"150\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"150\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"18\" x2=\"110\" y2=\"202\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><line x1=\"18\" y1=\"110\" x2=\"202\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><text x=\"110\" y=\"14\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">垂直對稱軸</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "9 格",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "B",
        "text": "3 格",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "C",
        "text": "6 格",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "5 格",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生掌握「雙垂直對稱軸連環翻折」會讓四個角落成一組（每組 4 格），並能辨識已經處於同一組斜對角的黑格無須重複擴充。",
      "steps": [
        {
          "type": "text",
          "text": "同時以垂直軸和水平軸對稱時，4 × 4 棋盤中的每一格都會和另外 3 個位置組成「4 格一家親」：① 左上角（1列1行）連環翻折兩次後，會跑到的右下角（4列4行）剛好已經塗黑了！所以這一組 4 格（四個頂角）裡面已經有 2 格黑格，只要再補右上角（1列4行）與左下角（4列1行）共 2 格！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 400 205\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"60\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"100\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"140\" y=\"20\" width=\"40\" height=\"40\" fill=\"#3b82f6\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><rect x=\"20\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"60\" y=\"60\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"100\" y=\"60\" width=\"40\" height=\"40\" fill=\"#10b981\" stroke=\"#047857\" stroke-width=\"2\"/><rect x=\"140\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"20\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"60\" y=\"100\" width=\"40\" height=\"40\" fill=\"#10b981\" stroke=\"#047857\" stroke-width=\"2\"/><rect x=\"100\" y=\"100\" width=\"40\" height=\"40\" fill=\"#10b981\" stroke=\"#047857\" stroke-width=\"2\"/><rect x=\"140\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"20\" y=\"140\" width=\"40\" height=\"40\" fill=\"#3b82f6\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><rect x=\"60\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"100\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"140\" y=\"140\" width=\"40\" height=\"40\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"12\" x2=\"100\" y2=\"188\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,3\"/><line x1=\"12\" y1=\"100\" x2=\"188\" y2=\"100\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,3\"/><text x=\"202\" y=\"52\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">第一組（四個角落）：</text><text x=\"202\" y=\"72\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">已有 2 黑格，補藍色 2 格</text><text x=\"202\" y=\"110\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#047857\">第二組（中央 4 格）：</text><text x=\"202\" y=\"130\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">已有 1 黑格，補綠色 3 格</text><text x=\"202\" y=\"166\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">最少共補：2 ＋ 3 ＝ 5 格</text></svg>",
          "caption": "圖解：將雙軸翻折分組後，第一組補藍 2 格、第二組補綠 3 格"
        },
        {
          "type": "text",
          "text": "② 內圈（2列2行）這組則只有 1 個黑格，必須在另外三個象限補齊綠色 3 格。合計最少再塗 2 ＋ 3 ＝ 5 格。"
        },
        {
          "type": "eq",
          "expr": "（4 － 2） ＋ （4 － 1） ＝ 2 ＋ 3 ＝ 5"
        },
        {
          "type": "answer",
          "text": "答：5 格"
        }
      ],
      "distractorAnalysis": {
        "A": "【未察覺斜對角同一組】以為 3 個黑格分別屬於 3 個不同組別，每個黑格各自還要再補 3 格，錯算成 3 × 3 ＝ 9 格。",
        "B": "【只做單軸對稱】只挑選了垂直軸（或水平軸）其中一條做單次對稱補色，只補了 3 格就以為完成了。",
        "C": "【補色數量算錯】誤以為 4 × 4 只要四個角落補 3 格、中間補 3 格，算成 6 格。"
      },
      "insight": "雙軸對稱要一氣呵成！先隨便對「垂直軸」補好，再拿著「剛補好全部格子」對「水平軸」再翻一次——你就會神奇地發現右下角本來就已經黑了，立刻省掉重複計算！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "偶數階方格（如 4 × 4）雙垂直軸對稱：全圖黑格總數必為 4 的倍數",
        "最少補色法：逐軸連鎖翻折後，減去原本重複的格子數"
      ],
      "conceptCompare": "【4 × 4（偶數格）vs 5 × 5（奇數格）】4 × 4 沒有格子壓在十字線上，每組固定 4 格；5 × 5 則有格子壓在十字軸上或交點上，每組可能是 1 格、2 格或 4 格！",
      "examVariations": "若題目先對「垂直軸」補一次、再對「水平軸」補一次，這就是最不容易算錯的「接力補色法」。"
    },
    "check": {
      "expr": "(4 - 2) + (4 - 1)",
      "expect": "5"
    }
  },
  {
    "id": "U09-RV-O-013",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L7 正十二邊形內接正三角形組合對稱軸判別",
    "category": "正多邊形組合對稱軸通則",
    "level": 7,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖是一個正十二邊形的鐘面外框，12 個頂點剛好對應時鐘 1 到 12 的數字位置。老師把其中「12、4、8」這三個頂點連接起來，在正十二邊形內部畫出一個紅色三角形。請問這個「正十二邊形加上內部紅色三角形」的整個組合圖形，一共有幾條對稱軸？",
    "svg": "<svg viewBox=\"0 0 220 220\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"110,30 150,41 179,70 190,110 179,150 150,179 110,190 70,179 41,150 30,110 41,70 70,41\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2.2\"/><polygon points=\"110,30 179,150 41,150\" fill=\"#fecdd3\" fill-opacity=\"0.65\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><text x=\"110\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#e11d48\">12</text><text x=\"158\" y=\"36\" text-anchor=\"start\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">1</text><text x=\"188\" y=\"70\" text-anchor=\"start\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">2</text><text x=\"200\" y=\"114\" text-anchor=\"start\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">3</text><text x=\"188\" y=\"158\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#e11d48\">4</text><text x=\"156\" y=\"192\" text-anchor=\"start\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">5</text><text x=\"110\" y=\"208\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">6</text><text x=\"64\" y=\"192\" text-anchor=\"end\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">7</text><text x=\"32\" y=\"158\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#e11d48\">8</text><text x=\"20\" y=\"114\" text-anchor=\"end\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">9</text><text x=\"32\" y=\"70\" text-anchor=\"end\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">10</text><text x=\"62\" y=\"36\" text-anchor=\"end\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">11</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "12 條",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "B",
        "text": "1 條",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "C",
        "text": "3 條",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "6 條",
        "trapCode": "U09_DIAG_NOT_AXIS"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生「組合圖形對稱軸必須同時是每個子圖形的共同對稱軸」之核心概念，破除只看外框或只找垂直單一軸的盲點。",
      "steps": [
        {
          "type": "text",
          "text": "外框正十二邊形雖然原本有 12 條對稱軸，但加入內部的紅色圖形後，對折時「紅色三角形也必須完全疊合」才算數！頂點 12、4、8 每隔 4 格取一點（12 ÷ 3 ＝ 4），因此它是一個「正三角形」，本身有 3 條對稱軸。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 440 185\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"110,25 145,34 171,60 180,95 171,130 145,156 110,165 75,156 49,130 40,95 49,60 75,34\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"110,25 171,130 49,130\" fill=\"#fecdd3\" fill-opacity=\"0.65\" stroke=\"#e11d48\" stroke-width=\"2.2\"/><line x1=\"110\" y1=\"16\" x2=\"110\" y2=\"174\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"42\" y1=\"134\" x2=\"178\" y2=\"56\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"178\" y1=\"134\" x2=\"42\" y2=\"56\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"110\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#2563eb\">12－6</text><text x=\"184\" y=\"54\" text-anchor=\"start\" font-size=\"11\" font-weight=\"800\" fill=\"#2563eb\">2－8</text><text x=\"36\" y=\"54\" text-anchor=\"end\" font-size=\"11\" font-weight=\"800\" fill=\"#2563eb\">10－4</text><text x=\"220\" y=\"56\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">紅色正三角形的 3 條對稱軸：</text><text x=\"220\" y=\"84\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">① 12 到 6、② 4 到 10、③ 8 到 2</text><text x=\"220\" y=\"114\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">這 3 條也都是正十二邊形的對稱軸！</text><text x=\"220\" y=\"146\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#e11d48\">共同對稱軸合計：3 條</text></svg>",
          "caption": "圖解：12－6、4－10、8－2 三條藍虛線同時平分正十二邊形與紅色正三角形"
        },
        {
          "type": "eq",
          "expr": "12 ÷ 4 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：3 條"
        }
      ],
      "distractorAnalysis": {
        "A": "【常見圖形對稱軸數記錯】只看到外框是正十二邊形就直接選 12 條，忽略內部三角形在多數軸上無法重疊。",
        "B": "【只看垂直正放方向】只看到直直畫下來的 12－6 對稱軸，忘記把圖形轉個角度看，漏掉 4－10 和 8－2 兩條斜軸。",
        "D": "【誤把一般對角線算進去】以為正十二邊形只剩一半（6 條），沒發現其他 3 條不會把正三角形對折疊合。"
      },
      "insight": "複合圖形的對稱軸通則：「對稱軸必須同時通過內外所有圖形的對稱軸」！當正十二邊形內接一個等間隔的正多邊形時，共同對稱軸數就是比較少的內接正多邊形（3 條）。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "組合圖形對稱軸 ＝ 外圖形與內圖形「共同擁有」的對稱軸"
      ],
      "conceptCompare": "【內接正三角形（12, 4, 8）vs 內接正方形（12, 3, 6, 9）】若改成連接 12、3、6、9 形成正方形，共同對稱軸就有 4 條；若連接長方形（如 12、2、6、8），就只剩 2 條！",
      "examVariations": "若內部塗色的點改為「12、4、7」（不等邊三角形），因為各邊間隔為 4、3、5，整個組合圖形就會變成 0 條對稱軸！"
    },
    "check": {
      "expr": "12 / 4",
      "expect": "3"
    }
  },
  {
    "id": "U09-RV-O-014",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L8 雙軸鏡像展開拉直最短路徑（30 度夾角變正三角形）",
    "category": "對稱摺疊拉直最短路徑",
    "level": 8,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，兩條筆直的鏡面牆壁 OA 與 OB 相交於點 O，夾角 ∠AOB ＝ 30 度。在兩面牆中間的空地上有一個出發點 P，距離牆角 O 點剛好 24 公分（線段 OP ＝ 24 公分）。小智想先跑到牆壁 OA 上的某一點 Q，再跑到牆壁 OB 上的某一點 R，最後回到點 P。透過兩側對稱展開拉直可知，這樣走一圈的最短總路徑長（PQ ＋ QR ＋ RP）圍成一個正方形時，這個正方形的邊長是多少公分？",
    "svg": "<svg viewBox=\"0 0 340 190\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"150\" x2=\"305\" y2=\"150\" stroke=\"#334155\" stroke-width=\"2.5\"/><line x1=\"45\" y1=\"150\" x2=\"285\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2.5\"/><line x1=\"45\" y1=\"150\" x2=\"225\" y2=\"102\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><polygon points=\"225,102 205,63 238,150\" fill=\"#fef3c7\" fill-opacity=\"0.6\" stroke=\"#d97706\" stroke-width=\"2.2\"/><circle cx=\"45\" cy=\"150\" r=\"4\" fill=\"#1e293b\"/><circle cx=\"225\" cy=\"102\" r=\"4.5\" fill=\"#dc2626\"/><circle cx=\"205\" cy=\"63\" r=\"4\" fill=\"#1d4ed8\"/><circle cx=\"238\" cy=\"150\" r=\"4\" fill=\"#1d4ed8\"/><text x=\"36\" y=\"166\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">O</text><text x=\"294\" y=\"20\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">A</text><text x=\"312\" y=\"154\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">B</text><text x=\"234\" y=\"104\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">P</text><text x=\"196\" y=\"54\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">Q</text><text x=\"238\" y=\"168\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">R</text><text x=\"122\" y=\"140\" text-anchor=\"start\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">30 度</text><text x=\"148\" y=\"114\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#475569\">OP ＝ 24 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "12 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "B",
        "text": "6 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "8 公分",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "9 公分",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗經典奧數「將軍飲馬／雙鏡面反射最短路徑」模型：把折線對稱展開拉直成直線段，並發現夾角翻倍為 60 度構成正三角形的幾何精髓。",
      "steps": [
        {
          "type": "text",
          "text": "分別以牆壁 OA 和 OB 為對稱軸，在牆外找出點 P 的對稱點 M 與對稱點 N。由對稱邊相等知：OM ＝ OP ＝ 24 公分、ON ＝ OP ＝ 24 公分，而且繞一圈的長度 PQ ＋ QR ＋ RP ＝ MQ ＋ QR ＋ RN。當 M、Q、R、N 四點排成「一條直線段 MN」時，路徑最短！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 400 205\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"125\" x2=\"265\" y2=\"125\" stroke=\"#475569\" stroke-width=\"1.8\"/><line x1=\"45\" y1=\"125\" x2=\"240\" y2=\"40\" stroke=\"#475569\" stroke-width=\"1.8\"/><line x1=\"45\" y1=\"125\" x2=\"175\" y2=\"16\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"45\" y1=\"125\" x2=\"198\" y2=\"185\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"175\" y1=\"16\" x2=\"198\" y2=\"185\" stroke=\"#15803d\" stroke-width=\"3\"/><circle cx=\"45\" cy=\"125\" r=\"4\" fill=\"#1e293b\"/><circle cx=\"175\" cy=\"16\" r=\"4.5\" fill=\"#15803d\"/><circle cx=\"198\" cy=\"185\" r=\"4.5\" fill=\"#15803d\"/><circle cx=\"208\" cy=\"92\" r=\"4\" fill=\"#94a3b8\"/><text x=\"36\" y=\"138\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">O</text><text x=\"186\" y=\"20\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">M（對稱點）</text><text x=\"208\" y=\"188\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">N（對稱點）</text><text x=\"218\" y=\"96\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#64748b\">原 P</text><text x=\"102\" y=\"64\" text-anchor=\"end\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">OM＝24</text><text x=\"112\" y=\"168\" text-anchor=\"end\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">ON＝24</text><text x=\"246\" y=\"148\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">∠MON ＝ 2 × 30 ＝ 60 度</text><text x=\"246\" y=\"170\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">正三角形 MN ＝ 24 公分</text></svg>",
          "caption": "圖解：將 P 對稱翻轉至 M 與 N，夾角變 60 度構成正三角形，拉直最短總長 MN ＝ 24 公分"
        },
        {
          "type": "text",
          "text": "接著看角度：∠MOA ＝ ∠AOP、∠NOB ＝ ∠BOP，所以 ∠MON 剛好是原來 30 度的兩倍，即 60 度！在三角形 OMN 中，OM ＝ ON ＝ 24 公分且頂角為 60 度，兩個底角都是 （180 － 60） ÷ 2 ＝ 60 度，因此三角形 OMN 是「正三角形」！正三角形三邊等長，最短總路徑 MN ＝ 24 公分。把這段 24 公分的路徑圍成正方形，每邊長就是："
        },
        {
          "type": "eq",
          "expr": "24 ÷ 4 ＝ 6"
        },
        {
          "type": "answer",
          "text": "答：6 公分"
        }
      ],
      "distractorAnalysis": {
        "C": "【誤認最短路徑為 24 再除以 3】以為三角形三條邊都等於未知或拿 24 除以 3，得到 8 公分。",
        "D": "【對稱角對應位置搞混】誤將折線長度算成 1.5 倍（36 公分），再除以 4 得到 9 公分。",
        "A": "【誤以為路徑倍增】把最短總路徑誤以為是兩條對稱邊相加 24 ＋ 24 ＝ 48 公分，再除以 4 錯算出 12 公分。"
      },
      "insight": "遇到折來折去的最短路徑題，口訣就是「遇牆翻折找鏡像，兩點拉直成直線」！而 30 度夾角經過兩側對稱翻倍剛好變成 60 度，立刻變出三邊等長的正三角形，完全不需要國中定理就能秒解！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對稱拉直法：折線最短總長 ＝ 兩鏡像對稱點之間的直線距離",
        "等腰三角形只要有一個內角是 60 度，必為正三角形（三邊等長）"
      ],
      "conceptCompare": "【只反射 1 次 vs 反射 2 次】若只碰一面牆（A 到牆 P 再到 B），只需對其中一點做 1 次鏡像；本題連碰兩面牆再回原點，必須把起點 P 分別對兩面牆各做 1 次鏡像！",
      "examVariations": "若題目改成「正三角形的三條高」或「角度 45 度反彈回原點」，都可以運用對稱翻折把夾角翻倍為 60 度或 90 度來觀察。"
    },
    "check": {
      "expr": "24 / 4",
      "expect": "6"
    }
  },
  {
    "id": "U09-RV-O-015",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L8 鏡面無數字時鐘雙時刻逆推與經過時間差",
    "category": "鏡面時鐘雙時刻逆推",
    "level": 8,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "客廳裡有一個只有刻度圓點、沒有數字的圓形時鐘，正對著一面直立牆鏡。小安在上午讀書前，從鏡子裡看到時鐘顯示「9 時 40 分」；過了一段專心讀書的時間後（期間時針前進不到半圈），她再往鏡子看了一次，發現鏡中的時鐘顯示為「7 時 15 分」。請問這段期間「實際上」經過了多少分鐘？",
    "options": [
      {
        "key": "A",
        "text": "145 分鐘",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "115 分鐘",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "C",
        "text": "165 分鐘",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "D",
        "text": "95 分鐘",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生先分別把兩個鏡面時刻正確反推為真實時刻，再求取真實經過的分鐘數，防範借位與單純翻轉時針之錯誤。",
      "steps": [
        {
          "type": "text",
          "text": "先分別用「11 時 60 分 － 鏡中時刻」還原兩次的實際時間：第一次看鏡子顯示 9 時 40 分，實際是 11 時 60 分 － 9 時 40 分 ＝ 2 時 20 分；第二次看鏡子顯示 7 時 15 分，實際是 11 時 60 分 － 7 時 15 分 ＝ 4 時 45 分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 430 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"20\" width=\"172\" height=\"92\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"104\" y=\"46\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">第一次（鏡中 9 時 40 分）</text><text x=\"104\" y=\"72\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">11 時 60 分 － 9 時 40 分</text><text x=\"104\" y=\"98\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#047857\">實際 ＝ 2 時 20 分</text><rect x=\"240\" y=\"20\" width=\"172\" height=\"92\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"326\" y=\"46\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#b45309\">第二次（鏡中 7 時 15 分）</text><text x=\"326\" y=\"72\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">11 時 60 分 － 7 時 15 分</text><text x=\"326\" y=\"98\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#047857\">實際 ＝ 4 時 45 分</text><text x=\"215\" y=\"138\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">經過時間：4 時 45 分 － 2 時 20 分 ＝ 2 小時 25 分 ＝ 145 分鐘</text></svg>",
          "caption": "圖解：先將兩次鏡面時刻對稱還原為真實時刻，再相減求經過時間"
        },
        {
          "type": "eq",
          "expr": "4 時 45 分 － 2 時 20 分 ＝ 2 時 25 分"
        },
        {
          "type": "eq",
          "expr": "2 × 60 ＋ 25 ＝ 145"
        },
        {
          "type": "answer",
          "text": "答：145 分鐘"
        }
      ],
      "distractorAnalysis": {
        "B": "【分針忘記左右翻轉】第二次把 7 時 15 分錯還原成 4 時 15 分（只翻轉時針、分針未翻轉），算成 4 時 15 分 － 2 時 20 分 ＝ 1 小時 55 分（115 分鐘）。",
        "D": "【雙重翻轉減法算錯】把 9 時 40 分錯當成 2 時 40 分，再減 4 時 15 分得到 95 分鐘。",
        "C": "【鏡像時間倒退方向弄反】算「9 時 40 分」與「7 時 15 分」的差時，錯把分鐘當成 40 分加到 60 分或看錯刻度，多算了 20 分鐘而得 165 分鐘。"
      },
      "insight": "鏡中時鐘的指針會「逆時針倒著走」！所以真實時間經過多久，就剛好等於鏡中時刻「倒退了多少」（9 時 40 分倒退到 7 時 15 分，剛好倒退 2 小時 25 分 ＝ 145 分鐘），雙重驗證完全一致！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "鏡中經過時間對偶性：鏡中時鐘倒轉的分鐘數 ＝ 現實時鐘順轉的分鐘數"
      ],
      "conceptCompare": "【單次還原 vs 時間差】問「現在幾點幾分」必須精準還原 11 時 60 分之減法；若問「經過幾分鐘」，只要在鏡中時間反著算「從前一次倒退到後一次的時間差」，連還原都不用就能互相驗算！",
      "examVariations": "若時間跨過鏡中的 12 點（例如從鏡中 1 時 20 分倒退到 10 時 50 分），先個別還原為實際的 10 時 40 分到 13 時 10 分（1 時 10 分），一樣能精確相減。"
    },
    "check": {
      "expr": "(11 * 60 + 60 - (7 * 60 + 15)) - (11 * 60 + 60 - (9 * 60 + 40))",
      "expect": "145"
    }
  },
  {
    "id": "U09-RV-O-016",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L8 兩次對折剪角與中心洞展開後總周長變化",
    "category": "對折剪紙展開總周長",
    "level": 8,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，把一張長 24 公分、寬 16 公分的長方形紙張先左右對折，再上下對折，折成一個長 12 公分、寬 8 公分的四層小長方形。接著在小長方形「完全沒有折線的右上自由角」剪去一個邊長 3 公分的正方形，又在「兩條折線交會的左下中心角」剪去一個邊長 2 公分的正方形。請問把紙張完全展開後，這張紙片「所有邊緣（包含外圍輪廓以及內部洞口邊緣）」的總周長是多少公分？",
    "svg": "<svg viewBox=\"0 0 260 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"55\" y=\"25\" width=\"150\" height=\"100\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><rect x=\"172\" y=\"25\" width=\"33\" height=\"33\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><rect x=\"55\" y=\"101\" width=\"24\" height=\"24\" fill=\"#ffffff\" stroke=\"#059669\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"55\" y1=\"25\" x2=\"55\" y2=\"125\" stroke=\"#059669\" stroke-width=\"3\"/><line x1=\"55\" y1=\"125\" x2=\"205\" y2=\"125\" stroke=\"#059669\" stroke-width=\"3\"/><text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">長 12 公分</text><text x=\"214\" y=\"80\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">寬 8</text><text x=\"188\" y=\"46\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#dc2626\">3×3</text><text x=\"67\" y=\"117\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#059669\">2×2</text><text x=\"130\" y=\"152\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">左邊與下邊為兩條對折線</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "88 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "B",
        "text": "120 公分",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "C",
        "text": "96 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "72 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生結合「角上剪正方形周長不變（平移補齊概念）」與「中心角對折展開合併成 4 × 4 內部孔洞」兩大幾何規律，精準計算展開總周長。",
      "steps": [
        {
          "type": "text",
          "text": "原本長方形的周長為 （24 ＋ 16） × 2 ＝ 80 公分。① 在自由角剪去 3 × 3 正方形後，展開後四個角落各缺一小塊；把每個缺角往內凹的兩條邊「往外平移補回去」，外圍周長剛好和原本一模一樣，依然是 80 公分（完全不增不減）！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 400 185\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"22\" width=\"160\" height=\"110\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><line x1=\"100\" y1=\"16\" x2=\"100\" y2=\"138\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"14\" y1=\"77\" x2=\"186\" y2=\"77\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><rect x=\"20\" y=\"22\" width=\"18\" height=\"18\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><rect x=\"162\" y=\"22\" width=\"18\" height=\"18\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><rect x=\"20\" y=\"114\" width=\"18\" height=\"18\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><rect x=\"162\" y=\"114\" width=\"18\" height=\"18\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><rect x=\"88\" y=\"65\" width=\"24\" height=\"24\" fill=\"#ffffff\" stroke=\"#059669\" stroke-width=\"2.2\"/><text x=\"100\" y=\"158\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">四角內凹平移後外圍周長仍為 80</text><text x=\"202\" y=\"46\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">外圍周長：（24 ＋ 16）× 2 ＝ 80</text><text x=\"202\" y=\"78\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">中央展開為邊長 4 公分正方形洞</text><text x=\"202\" y=\"108\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">洞口周長：4 × 4 ＝ 16 公分</text><text x=\"202\" y=\"140\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">總周長：80 ＋ 16 ＝ 96 公分</text></svg>",
          "caption": "圖解：四角缺口不改變外圍周長（80 公分），中央合體 4×4 洞口增加 16 公分"
        },
        {
          "type": "text",
          "text": "② 而在兩條折線交會的左下中心角剪去邊長 2 公分的小正方形，沿著兩條對稱軸打開後，四塊小缺口合體成正中央一個「邊長為 2 × 2 ＝ 4 公分」的完整大正方形洞口！這個洞口的 4 條邊全是新增加的紙張邊緣，共多出 4 × 4 ＝ 16 公分。"
        },
        {
          "type": "eq",
          "expr": "（24 ＋ 16） × 2 ＋ （2 × 2） × 4 ＝ 80 ＋ 16 ＝ 96"
        },
        {
          "type": "answer",
          "text": "答：96 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【周長漏算半倍】知道四角周長不變（80 公分），但算中央洞口周長時誤把邊長當成 2 公分，只加了 2 × 4 ＝ 8 公分，錯得 88 公分。",
        "D": "【剪去誤以為變短】以為剪掉洞口會讓周長減少，拿 80 減去 8 得到 72 公分。",
        "B": "【摺紙展開誤判周長增加】誤以為四個外角剪掉 3 × 3 正方形後，每個角都會多出 6 公分（4 × 6 ＝ 24 公分），錯加在總周長上而得 120 公分。"
      },
      "insight": "剪紙周長有兩個相反的規律：「在角落剪」會把邊線推向裡面，總周長不變；「在邊上往內凹」或「在中間挖出洞」才會真正創造出新的邊界，讓總周長變大！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "四角剪去矩形缺口：外圍周長不變（平移定理）",
        "中心交點剪去 2 × 2 正方形：展開成 1 個邊長為 4 的正方形孔洞（邊長加倍）"
      ],
      "conceptCompare": "【中心挖洞 vs 邊緣挖凹槽】如果在只有「1 條折線」的邊緣中間剪去邊長 2 公分的正方形，展開後會在外框長出一個 4 × 2 的長方形凹槽，增加的周長只有「2 條深為 2 公分的垂直邊（2 × 2 ＝ 4 公分）」；但在中心交會點剪掉，4 條邊全都是新邊緣！",
      "examVariations": "若題目改成問「剪完展開後的紙張面積」，則兩個缺口都要按 4 層扣除：384 － 36 － 16 ＝ 332 平方公分。"
    },
    "check": {
      "expr": "(24 + 16) * 2 + (2 * 2) * 4",
      "expect": "96"
    }
  },
  {
    "id": "U09-RV-O-017",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L9 8×8 棋盤雙垂直對稱軸連環翻折與平移追蹤",
    "category": "雙垂直對稱軸連環翻折",
    "level": 9,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖是一張 8 × 8 的方格棋盤，由左到右為第 1～8 行，由下到上為第 1～8 列。棋盤上有兩條互相垂直的紅色對稱軸：垂直軸畫在「第 4 行與第 5 行的交界線上」，水平軸畫在「第 4 列與第 5 列的交界線上」。一顆棋子原本放在「第 2 行、第 7 列」的格子內。小智先讓棋子「以垂直軸為對稱軸翻折」，接著從新位置「往右移動 1 格、往下移動 2 格」，最後再「以水平軸為對稱軸翻折」。請問棋子最後停在哪一個格子裡？",
    "svg": "<svg viewBox=\"0 0 240 240\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"36\" y=\"20\" width=\"184\" height=\"184\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"59\" y1=\"20\" x2=\"59\" y2=\"204\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"82\" y1=\"20\" x2=\"82\" y2=\"204\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"105\" y1=\"20\" x2=\"105\" y2=\"204\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"151\" y1=\"20\" x2=\"151\" y2=\"204\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"174\" y1=\"20\" x2=\"174\" y2=\"204\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"197\" y1=\"20\" x2=\"197\" y2=\"204\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"36\" y1=\"43\" x2=\"220\" y2=\"43\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"36\" y1=\"66\" x2=\"220\" y2=\"66\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"36\" y1=\"89\" x2=\"220\" y2=\"89\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"36\" y1=\"135\" x2=\"220\" y2=\"135\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"36\" y1=\"158\" x2=\"220\" y2=\"158\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"36\" y1=\"181\" x2=\"220\" y2=\"181\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"128\" y1=\"14\" x2=\"128\" y2=\"210\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,3\"/><line x1=\"30\" y1=\"112\" x2=\"226\" y2=\"112\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,3\"/><circle cx=\"70.5\" cy=\"54.5\" r=\"8\" fill=\"#2563eb\"/><text x=\"47\" y=\"222\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#475569\">1</text><text x=\"70\" y=\"222\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#2563eb\">2</text><text x=\"116\" y=\"222\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#475569\">4</text><text x=\"140\" y=\"222\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#475569\">5</text><text x=\"208\" y=\"222\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#475569\">8</text><text x=\"22\" y=\"196\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#475569\">1</text><text x=\"22\" y=\"128\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#475569\">4</text><text x=\"22\" y=\"105\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#475569\">5</text><text x=\"22\" y=\"59\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#2563eb\">7</text><text x=\"22\" y=\"36\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#475569\">8</text><text x=\"128\" y=\"12\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">垂直對稱軸</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "第 7 行、第 4 列",
        "trapCode": "U09_GRID_OFFSET_ONE"
      },
      {
        "key": "B",
        "text": "第 8 行、第 4 列",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "第 8 行、第 3 列",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "D",
        "text": "第 1 行、第 4 列",
        "trapCode": "U09_SYM_POINT_SWAP"
      }
    ],
    "answer": "B",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "測驗學生在「先翻折、再平移、再翻折」的連環動態過程中，是否能精確計算格子與對稱軸線的距離（注意對稱軸畫在格線上而非格子中心），避免偏移 1 格。",
      "steps": [
        {
          "type": "text",
          "text": "因為 8 格的垂直軸畫在第 4 行與第 5 行的交界線上，左右對稱配對是：1↔8、2↔7、3↔6、4↔5（兩個對稱行編號相加永遠等於 9）；水平軸也是：1↔8、2↔7、3↔6、4↔5。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 195\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"18\" width=\"160\" height=\"160\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"1.8\"/><line x1=\"100\" y1=\"12\" x2=\"100\" y2=\"184\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"14\" y1=\"98\" x2=\"186\" y2=\"98\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><circle cx=\"50\" cy=\"48\" r=\"6.5\" fill=\"#2563eb\"/><circle cx=\"150\" cy=\"48\" r=\"6.5\" fill=\"#d97706\"/><circle cx=\"170\" cy=\"88\" r=\"6.5\" fill=\"#7c3aed\"/><circle cx=\"170\" cy=\"108\" r=\"6.5\" fill=\"#059669\"/><line x1=\"57\" y1=\"48\" x2=\"143\" y2=\"48\" stroke=\"#2563eb\" stroke-width=\"1.8\" stroke-dasharray=\"4,2\"/><line x1=\"150\" y1=\"55\" x2=\"170\" y2=\"81\" stroke=\"#d97706\" stroke-width=\"1.8\"/><line x1=\"170\" y1=\"95\" x2=\"170\" y2=\"101\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"36\" y=\"38\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#2563eb\">起(2,7)</text><text x=\"150\" y=\"36\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#d97706\">①(7,7)</text><text x=\"154\" y=\"88\" text-anchor=\"end\" font-size=\"10\" font-weight=\"800\" fill=\"#7c3aed\">②(8,5)</text><text x=\"154\" y=\"114\" text-anchor=\"end\" font-size=\"10\" font-weight=\"800\" fill=\"#059669\">③(8,4)</text><text x=\"202\" y=\"48\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">起點：第 2 行、第 7 列</text><text x=\"202\" y=\"80\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\">① 垂直軸：9 － 2 ＝ 7 →（7, 7）</text><text x=\"202\" y=\"112\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#7c3aed\">② 右 1 下 2：7＋1＝8、7－2＝5 →（8, 5）</text><text x=\"202\" y=\"144\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#059669\">③ 水平軸：9 － 5 ＝ 4 →（8, 4）</text></svg>",
          "caption": "圖解：追蹤棋子經過 ①垂直翻折 → ②右 1 下 2 平移 → ③水平翻折的完整軌跡"
        },
        {
          "type": "eq",
          "expr": "① 9 － 2 ＝ 7 行 → ② 7 ＋ 1 ＝ 8 行，7 － 2 ＝ 5 列 → ③ 9 － 5 ＝ 4 列"
        },
        {
          "type": "answer",
          "text": "答：第 8 行、第 4 列"
        }
      ],
      "distractorAnalysis": {
        "C": "【對稱點到軸距離沒相等】第三步把緊貼水平軸上方的第 5 列往下翻折時，誤隔開 1 列算成第 3 列（正解應緊貼軸下方的第 4 列）。",
        "D": "【對稱點／邊對應順序寫反】第三步明明只做「水平軸上下翻折（行數不變）」，卻把第 8 行也跟著左右翻成第 1 行。",
        "A": "【方格塗色補對稱差 1 格】第一步垂直軸翻折時數錯距離，誤把第 2 行翻折成第 6 行（錯用 8 － 2 ＝ 6），再右移 1 格變成第 7 行。"
      },
      "insight": "對稱軸若畫在「第 4 格和第 5 格的中間線上」，緊貼著軸的 4 與 5 剛好互為對稱，所以兩側對稱編號之和一定等於 4 ＋ 5 ＝ 9（如果是 10 × 10 棋盤就是 5 ＋ 6 ＝ 11）！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "8 × 8 棋盤中線對稱配對律：對稱位置 ＝ 9 － 原位置",
        "雙軸對稱動態追蹤：垂直軸只改變「行」、水平軸只改變「列」"
      ],
      "conceptCompare": "【先翻折再平移 vs 先平移再翻折】「平移」與「翻折」的順序絕對不能隨便對調！如果先把（2,7）右移 1 格到（3,7）再對垂直軸翻折，行數會變成 9 － 3 ＝ 6，和題目的第 8 行完全不同。",
      "examVariations": "高階題會「只告訴你最後終點位置，要你從終點反推回最一開始的起點位置」，做法就是把三個步驟全部倒著反算回來！"
    },
    "check": {
      "expr": "(9 - 2 + 1) * 10 + (9 - (7 - 2))",
      "expect": "84"
    }
  },
  {
    "id": "U09-RV-O-018",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L9 5×5 奇數方格雙軸對稱（軸上格與中心格）最少補色",
    "category": "奇數方格雙軸對稱補色",
    "level": 9,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖是一張 5 × 5 的方格紙（由上而下為第 1～5 列，由左而右為第 1～5 行），紅色垂直對稱軸剛好穿過「第 3 行的正中央」，紅色水平對稱軸剛好穿過「第 3 列的正中央」。目前已經塗黑了 6 個小方格。如果要讓整張方格紙「同時」以這兩條紅線為對稱軸，請問「最少」還要再塗黑幾個小方格？",
    "svg": "<svg viewBox=\"0 0 230 230\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"35\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"67\" y=\"35\" width=\"32\" height=\"32\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"99\" y=\"35\" width=\"32\" height=\"32\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"131\" y=\"35\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"163\" y=\"35\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"35\" y=\"67\" width=\"32\" height=\"32\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"67\" y=\"67\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"99\" y=\"67\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"131\" y=\"67\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"163\" y=\"67\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"35\" y=\"99\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"67\" y=\"99\" width=\"32\" height=\"32\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"99\" y=\"99\" width=\"32\" height=\"32\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"131\" y=\"99\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"163\" y=\"99\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"35\" y=\"131\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"67\" y=\"131\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"99\" y=\"131\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"131\" y=\"131\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"163\" y=\"131\" width=\"32\" height=\"32\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"35\" y=\"163\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"67\" y=\"163\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"99\" y=\"163\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"131\" y=\"163\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><rect x=\"163\" y=\"163\" width=\"32\" height=\"32\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/><line x1=\"115\" y1=\"22\" x2=\"115\" y2=\"208\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,3\"/><line x1=\"22\" y1=\"115\" x2=\"208\" y2=\"115\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,3\"/><text x=\"115\" y=\"16\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">兩條軸皆穿過第 3 格中心</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "7 格",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "9 格",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "C",
        "text": "6 格",
        "trapCode": "U09_GRID_OFFSET_ONE"
      },
      {
        "key": "D",
        "text": "11 格",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗在奇數階（5 × 5）雙垂直對稱軸系統中，學生能否正確辨別三種對稱族群：交點中心（1 格自足）、單軸上（2 格一組）、非軸區（4 格一組），且同時抓出非軸區已成斜對角的共享格子。",
      "steps": [
        {
          "type": "text",
          "text": "把現有的 6 個黑格分成四個族群檢查（以「列、行」標記）：① 正中央（3列3行）同時壓在兩條軸上，自己就對稱，補 0 格；② 在垂直軸上的（1列3行）只要補最下方（5列3行）共 1 格；③ 在水平軸上的（3列2行）只要補右側（3列4行）共 1 格。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 195\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"50\" y=\"20\" width=\"30\" height=\"30\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"80\" y=\"20\" width=\"30\" height=\"30\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"110\" y=\"20\" width=\"30\" height=\"30\" fill=\"#10b981\" stroke=\"#047857\" stroke-width=\"1.6\"/><rect x=\"140\" y=\"20\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"20\" y=\"50\" width=\"30\" height=\"30\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"50\" y=\"50\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"80\" y=\"50\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"110\" y=\"50\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"140\" y=\"50\" width=\"30\" height=\"30\" fill=\"#3b82f6\" stroke=\"#1d4ed8\" stroke-width=\"1.6\"/><rect x=\"20\" y=\"80\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"50\" y=\"80\" width=\"30\" height=\"30\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"80\" y=\"80\" width=\"30\" height=\"30\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"110\" y=\"80\" width=\"30\" height=\"30\" fill=\"#a855f7\" stroke=\"#7e22ce\" stroke-width=\"1.6\"/><rect x=\"140\" y=\"80\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"20\" y=\"110\" width=\"30\" height=\"30\" fill=\"#3b82f6\" stroke=\"#1d4ed8\" stroke-width=\"1.6\"/><rect x=\"50\" y=\"110\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"80\" y=\"110\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"110\" y=\"110\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"140\" y=\"110\" width=\"30\" height=\"30\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"20\" y=\"140\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><rect x=\"50\" y=\"140\" width=\"30\" height=\"30\" fill=\"#10b981\" stroke=\"#047857\" stroke-width=\"1.6\"/><rect x=\"80\" y=\"140\" width=\"30\" height=\"30\" fill=\"#f97316\" stroke=\"#c2410c\" stroke-width=\"1.6\"/><rect x=\"110\" y=\"140\" width=\"30\" height=\"30\" fill=\"#10b981\" stroke=\"#047857\" stroke-width=\"1.6\"/><rect x=\"140\" y=\"140\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><line x1=\"95\" y1=\"14\" x2=\"95\" y2=\"176\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"14\" y1=\"95\" x2=\"176\" y2=\"95\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"190\" y=\"42\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">中心（3列3行）：補 0 格</text><text x=\"190\" y=\"68\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#c2410c\">垂直軸（1列3行）：補橘色 1 格</text><text x=\"190\" y=\"94\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#7e22ce\">水平軸（3列2行）：補紫色 1 格</text><text x=\"190\" y=\"120\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">（2列1行）與（4列5行）同組：補藍 2 格</text><text x=\"190\" y=\"146\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#047857\">（1列2行）單身一組：補綠色 3 格</text><text x=\"190\" y=\"174\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">合計：0 ＋ 1 ＋ 1 ＋ 2 ＋ 3 ＝ 7 格</text></svg>",
          "caption": "圖解：中心格補 0、軸上格各補 1、同組斜對角補 2、單身非軸格補 3"
        },
        {
          "type": "text",
          "text": "④ 非軸區的（2列1行）連環對兩軸翻折後，與右下方的（4列5行）剛好屬於同一組 4 格家族！所以這一組已有 2 格，只需補（2列5行）與（4列1行）共 2 格；⑤ 最後（1列2行）單獨一組，需補齊其餘 3 格。總共最少再塗 0 ＋ 1 ＋ 1 ＋ 2 ＋ 3 ＝ 7 格。"
        },
        {
          "type": "eq",
          "expr": "0 ＋ 1 ＋ 1 ＋ 2 ＋ 3 ＝ 7"
        },
        {
          "type": "answer",
          "text": "答：7 格"
        }
      ],
      "distractorAnalysis": {
        "B": "【沒發現斜對角同一組】沒察覺（2列1行）與（4列5行）經過兩軸翻折後同屬一組，各補 3 格導致多算 2 格，算成 9 格。",
        "D": "【把軸上格也當成 4 格組】沒注意到（1列3行）和（3列2行）本身就坐在對稱軸上各只需補 1 格，錯當成各自要補 3 格而多出 4 格，變成 11 格。",
        "C": "【方格塗色補對稱差 1 格】數格子時遺漏了其中 1 格（例如把（1列2行）錯算成只需要補 2 格），得到 6 格。"
      },
      "insight": "奇數階方格紙最迷人的地方在於「座位等級不同」：坐在十字路口正中央的 1 格免陪、坐在馬路（單一軸）上的 2 格成雙、坐在街區裡面的才需要 4 格大團圓！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "奇數階雙軸對稱族群大小：交叉中心（1 格）、單軸上（2 格）、象限內（4 格）"
      ],
      "conceptCompare": "【總黑格數的奇偶性】因為除了正中心（3列3行）是 1 格之外，其餘所有組別都是 2 格或 4 格（偶數），所以只有在「正中心格有塗黑」時，全圖黑格總數才會是奇數（本題 6 ＋ 7 ＝ 13 格）！",
      "examVariations": "若題目改成「另外還要求『兩條斜對角線』也同時是對稱軸（合計 4 條對稱軸）」，則非軸非對角線上的格子會變成 8 格一家親！"
    },
    "check": {
      "expr": "0 + 1 + 1 + 2 + 3",
      "expect": "7"
    }
  },
  {
    "id": "U09-RV-O-019",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L10 長方形紙條雙端斜折交叉角度推理",
    "category": "紙條雙重斜折交叉角度",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，有一張長方形紙條，小軒先從左下端點 E 處沿著斜線 EF 把左邊往右上方折起來，使被折起來的原下邊與摺線 EF 夾角為 56 度；接著再從右下端點 G 處沿著斜線 GH 把右邊往左上方折起來，使被折起來的原下邊與摺線 GH 夾角為 49 度。兩條折上去的原下邊在紙條上方交會於點 P（形成三角形 PEG），請問在交點 P 處所夾的夾角 ∠EPG 是幾度？",
    "svg": "<svg viewBox=\"0 0 380 200\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"35\" y1=\"168\" x2=\"345\" y2=\"168\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"150\" y1=\"168\" x2=\"230\" y2=\"168\" stroke=\"#334155\" stroke-width=\"2.5\"/><line x1=\"150\" y1=\"168\" x2=\"82\" y2=\"68\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"6,3\"/><line x1=\"230\" y1=\"168\" x2=\"308\" y2=\"78\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"6,3\"/><line x1=\"150\" y1=\"168\" x2=\"210\" y2=\"22\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"230\" y1=\"168\" x2=\"210\" y2=\"22\" stroke=\"#059669\" stroke-width=\"2.5\"/><circle cx=\"150\" cy=\"168\" r=\"4\" fill=\"#1e293b\"/><circle cx=\"230\" cy=\"168\" r=\"4\" fill=\"#1e293b\"/><circle cx=\"210\" cy=\"22\" r=\"4.5\" fill=\"#dc2626\"/><text x=\"150\" y=\"186\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">E</text><text x=\"230\" y=\"186\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">G</text><text x=\"74\" y=\"62\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">F</text><text x=\"316\" y=\"74\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">H</text><text x=\"210\" y=\"14\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">P（∠EPG？）</text><text x=\"102\" y=\"156\" text-anchor=\"end\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">原下邊夾 56 度</text><text x=\"276\" y=\"156\" text-anchor=\"start\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">原下邊夾 49 度</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "30 度",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "75 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      },
      {
        "key": "C",
        "text": "150 度",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "105 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生在兩側連續對折的模型中，靈活運用「對稱疊合倍角關係（單摺線蓋住 2 個相等角）＋平角 180 度＋三角形內角和 180 度」完成三階段推角。",
      "steps": [
        {
          "type": "text",
          "text": "先看左端點 E：原下邊往右上翻折後，對稱軸摺線 EF 左右兩側各有一個 56 度，一共蓋住了 56 × 2 ＝ 112 度。因此三角形 PEG 左底角 ∠PEG ＝ 180 － 112 ＝ 68 度。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 420 185\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"150\" x2=\"390\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><line x1=\"140\" y1=\"150\" x2=\"240\" y2=\"150\" stroke=\"#334155\" stroke-width=\"2.5\"/><line x1=\"140\" y1=\"150\" x2=\"76\" y2=\"58\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"240\" y1=\"150\" x2=\"312\" y2=\"64\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><polygon points=\"140,150 240,150 214,22\" fill=\"#eff6ff\" fill-opacity=\"0.7\" stroke=\"#1d4ed8\" stroke-width=\"2.2\"/><text x=\"96\" y=\"138\" text-anchor=\"end\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">兩倍 56＝112</text><text x=\"164\" y=\"138\" text-anchor=\"start\" font-size=\"11\" font-weight=\"800\" fill=\"#1d4ed8\">68 度</text><text x=\"286\" y=\"138\" text-anchor=\"start\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">兩倍 49＝98</text><text x=\"222\" y=\"120\" text-anchor=\"end\" font-size=\"11\" font-weight=\"800\" fill=\"#059669\">82 度</text><text x=\"214\" y=\"52\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">30 度</text><text x=\"210\" y=\"174\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">△PEG：180 － 68 － 82 ＝ 30 度</text></svg>",
          "caption": "圖解：先以平角扣除雙倍摺角算出底角 68 度與 82 度，再求頂角 30 度"
        },
        {
          "type": "text",
          "text": "再看右端點 G：摺線 GH 左右兩側各有一個 49 度，一共蓋住了 49 × 2 ＝ 98 度。因此右底角 ∠PGE ＝ 180 － 98 ＝ 82 度。最後在三角形 PEG 中扣除兩個底角："
        },
        {
          "type": "eq",
          "expr": "∠PEG ＝ 180 － 56 × 2 ＝ 68"
        },
        {
          "type": "eq",
          "expr": "∠PGE ＝ 180 － 49 × 2 ＝ 82"
        },
        {
          "type": "eq",
          "expr": "∠EPG ＝ 180 － 68 － 82 ＝ 30"
        },
        {
          "type": "answer",
          "text": "答：30 度"
        }
      ],
      "distractorAnalysis": {
        "C": "【算錯目標或漏減 180】正確算出兩個底角之和為 68 ＋ 82 ＝ 150 度，卻忘了再用 180 度去減就當成答案。",
        "D": "【對稱角關係搞混】直接把兩邊的摺角相加 56 ＋ 49 ＝ 105 度當作交角。",
        "B": "【忘記摺疊雙倍角】直接把題目給的 56 度與 49 度當作三角形的兩個底角，錯算成 180 － 56 － 49 ＝ 75 度。"
      },
      "insight": "這題其實藏著一個超高段的心算捷徑！因為 180 － （180 － 2 × 甲） － （180 － 2 × 乙） ＝ 2 × （甲 ＋ 乙） － 180 ＝ 2 × （56 ＋ 49） － 180 ＝ 210 － 180 ＝ 30 度！先推底角再減最穩，用這個關係驗算更能 100% 鎖定滿分！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "雙側摺疊交角捷徑：∠EPG ＝ 2 × （左摺角 ＋ 右摺角） － 180 度"
      ],
      "conceptCompare": "【為何兩摺角加起來要大於 90 度才會交叉？】若左摺角 ＋ 右摺角 剛好等於 90 度，兩個底角合計 180 － 90 ＝ 90？不對！兩個摺角各乘 2 等於 180 度，兩個底角會變成平行線（2 × 90 ＝ 180），必須大於 90 度（本題 56 ＋ 49 ＝ 105 ＞ 90）才會向上交會出點 P！",
      "examVariations": "若兩邊改為從長方形上下兩條平行邊分別對折，可再延伸結合平行線性質求轉折角度。"
    },
    "check": {
      "expr": "180 - (180 - 56 * 2) - (180 - 49 * 2)",
      "expect": "30"
    }
  },
  {
    "id": "U09-RV-O-020",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合奧數應用",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L10 雙垂直對稱軸連環翻折生成八邊形之區域面積",
    "category": "雙軸翻折八邊形面積",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，在每格邊長 1 公分的格子紙上，畫有互相垂直的「對稱軸甲」與「對稱軸乙」，兩條軸相交於點 O。在軸甲右側、軸乙上方的區域內，點 A 距離軸甲 2 公分、距離軸乙 6 公分；點 B 距離軸甲 5 公分、距離軸乙 2 公分。若把點 A 與點 B 各自對軸甲翻折、對軸乙翻折，並對兩條軸連環翻折，會得到包含點 A 與點 B 在內共 8 個對稱頂點。依外圍順序將這 8 個頂點連起來，會圍成一個同時以軸甲與軸乙為對稱軸的八邊形。請問這個八邊形的總面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 300 240\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"200\" height=\"200\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"120\" y1=\"12\" x2=\"120\" y2=\"228\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"6,3\"/><line x1=\"12\" y1=\"120\" x2=\"228\" y2=\"120\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"6,3\"/><polygon points=\"152,24 200,88 200,152 152,216 88,216 40,152 40,88 88,24\" fill=\"#dbeafe\" fill-opacity=\"0.45\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><circle cx=\"120\" cy=\"120\" r=\"3.5\" fill=\"#1e293b\"/><circle cx=\"152\" cy=\"24\" r=\"5\" fill=\"#1d4ed8\"/><circle cx=\"200\" cy=\"88\" r=\"5\" fill=\"#059669\"/><line x1=\"120\" y1=\"24\" x2=\"152\" y2=\"24\" stroke=\"#1d4ed8\" stroke-width=\"1.8\" stroke-dasharray=\"3,2\"/><line x1=\"120\" y1=\"88\" x2=\"200\" y2=\"88\" stroke=\"#059669\" stroke-width=\"1.8\" stroke-dasharray=\"3,2\"/><text x=\"112\" y=\"135\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\">O</text><text x=\"120\" y=\"11\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">軸甲</text><text x=\"236\" y=\"124\" text-anchor=\"start\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">軸乙</text><text x=\"162\" y=\"24\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">A（右2,上6）</text><text x=\"208\" y=\"88\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#059669\">B（右5,上2）</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "120 平方公分",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "96 平方公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "48 平方公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "D",
        "text": "72 平方公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "結合「雙垂直對稱軸空間對稱」與「大長方形扣除四個直角三角形（割補法求面積）」，測驗學生在不須依賴未知數工具下，善用四分對稱簡化複雜多邊形面積的最高階能力。",
      "steps": [
        {
          "type": "text",
          "text": "因為整個八邊形同時以軸甲、軸乙為對稱軸，四個區域的面積一模一樣！我們只要先算「右上方 1 個區域（長 5 公分、寬 6 公分的長方形，扣掉右上角缺掉的直角三角形）」的面積，再乘以 4 就行了。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"20\" width=\"150\" height=\"150\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/><polygon points=\"119,26 155,74 155,116 119,164 79,164 43,116 43,74 79,26\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><rect x=\"99\" y=\"26\" width=\"56\" height=\"69\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><polygon points=\"119,26 155,26 155,74\" fill=\"#fecdd3\" stroke=\"#e11d48\" stroke-width=\"1.8\"/><line x1=\"99\" y1=\"14\" x2=\"99\" y2=\"176\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"5,3\"/><line x1=\"18\" y1=\"95\" x2=\"180\" y2=\"95\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"5,3\"/><text x=\"196\" y=\"42\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#b45309\">右上 1 份面積算法：</text><text x=\"196\" y=\"68\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">橘框長方形：5 × 6 ＝ 30</text><text x=\"196\" y=\"96\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">紅三角形：底 3、高 4</text><text x=\"196\" y=\"124\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">紅三角形面積：3 × 4 ÷ 2 ＝ 6</text><text x=\"196\" y=\"152\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">1 份 ＝ 24；總面積 ＝ 24 × 4 ＝ 96</text></svg>",
          "caption": "圖解：只需計算右上角「5×6 長方形減去 3×4 直角三角形」得到 24，再乘 4 即為總面積 96"
        },
        {
          "type": "text",
          "text": "在右上區域中：最大寬度到點 B（5 公分），最大高度到點 A（6 公分），包起來的長方形面積是 5 × 6 ＝ 30 平方公分。右上角切掉的直角三角形，底是 5 － 2 ＝ 3 公分、高是 6 － 2 ＝ 4 公分，面積為 3 × 4 ÷ 2 ＝ 6 平方公分。因此 1 份是 30 － 6 ＝ 24 平方公分，乘以 4 份即得整個八邊形面積。"
        },
        {
          "type": "eq",
          "expr": "5 × 6 － （5 － 2） × （6 － 2） ÷ 2 ＝ 30 － 6 ＝ 24"
        },
        {
          "type": "eq",
          "expr": "24 × 4 ＝ 96"
        },
        {
          "type": "answer",
          "text": "答：96 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記扣除四個斜角三角形】只算了包住整個八邊形的大長方形面積（寬 10 × 高 12 ＝ 120 平方公分），忘記把四個角落沒塗到的斜三角形扣掉。",
        "C": "【周長或面積漏算一半】算出上半部兩個象限（2 × 24 ＝ 48 平方公分）後就忘記還有下半部，只剩一半面積。",
        "D": "【三角形面積忘記除以 2】算角落三角形面積時算成 3 × 4 ＝ 12（忘記除以 2），導致 120 － 4 × 12 ＝ 72 平方公分。"
      },
      "insight": "面對雙軸對稱的多邊形面積，千萬別傻傻把 8 個點全拆成梯形慢慢加！「化繁為簡」只算其中 1 個象限的面積（大長方形 － 角三角形），最後再乘以 4，又快又不易算錯！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "雙軸對稱圖形總面積 ＝ 單一象限面積 × 4",
        "包圍法面積 ＝ 外接大長方形（寬 10 × 高 12 ＝ 120）－ 四角三角形（4 × 6 ＝ 24）＝ 96"
      ],
      "conceptCompare": "【單區乘法 vs 整圖外框扣角法】也能先算整張外框大長方形（寬 5 × 2 ＝ 10、高 6 × 2 ＝ 12，面積 120），再扣掉 4 個相同的角落直角三角形（4 × 6 ＝ 24），120 － 24 ＝ 96 平方公分，用來互相驗算最可靠！",
      "examVariations": "若把點 A 換成落在軸甲上（距離軸甲 0 公分、距離軸乙 6 公分），且點 B 落在軸乙上（距離軸甲 5 公分、距離軸乙 0 公分），這個八邊形就會縮成一個對角線長分別為 12 與 10 的菱形（面積 12 × 10 ÷ 2 ＝ 60）！"
    },
    "check": {
      "expr": "4 * (5 * 6 - (5 - 2) * (6 - 2) / 2)",
      "expect": "96"
    }
  },
  {
    "id": "U09-S1-M-001",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-1",
    "sectionName": "認識線對稱圖形",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "正多邊形對稱軸數量心算",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖是正六邊形與正方形徽章，這兩個圖形的對稱軸合計共有幾條？",
    "svg": "<svg viewBox=\"0 0 360 140\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"95,20 138,45 138,95 95,120 52,95 52,45\" fill=\"#ede9fe\" stroke=\"#7c3aed\" stroke-width=\"2.2\"/><text x=\"95\" y=\"75\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#5b21b6\">正六邊形</text><rect x=\"215\" y=\"25\" width=\"90\" height=\"90\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2.2\"/><text x=\"260\" y=\"75\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">正方形</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "10 條",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "8 條",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "C",
        "text": "12 條",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "D",
        "text": "9 條",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否熟記「正幾邊形就有幾條對稱軸」，並能快速心算兩個正多邊形的對稱軸總數。",
      "steps": [
        {
          "type": "text",
          "text": "正多邊形的對稱軸數量就等於它的邊數：正六邊形有 6 條對稱軸，正方形（正四邊形）有 4 條對稱軸。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"105,20 144,42 144,88 105,110 66,88 66,42\" fill=\"#f5f3ff\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"105\" y1=\"14\" x2=\"105\" y2=\"116\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"60\" y1=\"65\" x2=\"150\" y2=\"65\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"64\" y1=\"41\" x2=\"146\" y2=\"89\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"146\" y1=\"41\" x2=\"64\" y2=\"89\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"105\" y=\"138\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#5b21b6\">正六邊形：6 條</text><text x=\"210\" y=\"72\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#334155\">＋</text><rect x=\"270\" y=\"25\" width=\"80\" height=\"80\" fill=\"#f0f9ff\" stroke=\"#0284c7\" stroke-width=\"2\"/><line x1=\"310\" y1=\"18\" x2=\"310\" y2=\"112\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"263\" y1=\"65\" x2=\"357\" y2=\"65\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"265\" y1=\"20\" x2=\"355\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"355\" y1=\"20\" x2=\"265\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"310\" y=\"138\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">正方形：4 條</text><text x=\"415\" y=\"72\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#15803d\">＝ 10 條</text></svg>",
          "caption": "圖解：正六邊形 6 條對稱軸加上正方形 4 條對稱軸，合計 10 條"
        },
        {
          "type": "eq",
          "expr": "6 ＋ 4 ＝ 10"
        },
        {
          "type": "answer",
          "text": "答：10 條"
        }
      ],
      "distractorAnalysis": {
        "C": "【誤認正六邊形倍數】誤以為正六邊形有 8 條對稱軸，加上正方形 4 條算成 12 條。",
        "D": "【加法粗心】誤把 6 ＋ 4 心算成 9。",
        "B": "【漏算對角線或邊數】把正方形算成只有 2 條，或把正六邊形只算 4 條，錯算成 8 條。"
      },
      "insight": "只要圖形有「正」字（邊長全等、角全等），邊數就是對稱軸條數，直接相加最快！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "正 N 邊形共有 N 條對稱軸（如正三角形 3 條、正方形 4 條、正六邊形 6 條）"
      ],
      "conceptCompare": "【正多邊形 vs 一般多邊形】正方形有 4 條對稱軸，但長方形只有 2 條，一般平行四邊形則有 0 條。",
      "examVariations": "考題常改問「正八邊形比正五邊形多幾條對稱軸」，直接用 8 － 5 ＝ 3 秒殺。"
    },
    "check": {
      "expr": "6 + 4",
      "expect": "10"
    }
  },
  {
    "id": "U09-S1-M-002",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-1",
    "sectionName": "認識線對稱圖形",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "英文字母線對稱快篩",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "大寫英文字母「Ｓ、Ｍ、Ａ、Ｒ、Ｔ」五個印刷體中，共有幾個是線對稱圖形？",
    "options": [
      {
        "key": "A",
        "text": "2 個",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "B",
        "text": "4 個",
        "trapCode": "U09_PARALLELOGRAM_SYM"
      },
      {
        "key": "C",
        "text": "5 個",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "3 個",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生能否快速判別常見大寫英文字母是否具線對稱性，並避開旋轉對稱字母 S 的陷阱。",
      "steps": [
        {
          "type": "text",
          "text": "逐一畫出直對稱軸檢查：M、A、T 沿正中間直直對摺都能完全疊合，各有 1 條對稱軸；S 怎麼摺都無法疊合（只有 0 條），R 左右不對稱（0 條）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"20\" width=\"72\" height=\"64\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"54\" y=\"64\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"700\" fill=\"#991b1b\">Ｓ</text><text x=\"54\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">0 條（不對稱）</text><rect x=\"106\" y=\"20\" width=\"72\" height=\"64\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"142\" y=\"64\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"700\" fill=\"#166534\">Ｍ</text><line x1=\"142\" y1=\"24\" x2=\"142\" y2=\"80\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"142\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">1 條</text><rect x=\"194\" y=\"20\" width=\"72\" height=\"64\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"230\" y=\"64\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"700\" fill=\"#166534\">Ａ</text><line x1=\"230\" y1=\"24\" x2=\"230\" y2=\"80\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"230\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">1 條</text><rect x=\"282\" y=\"20\" width=\"72\" height=\"64\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"318\" y=\"64\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"700\" fill=\"#991b1b\">Ｒ</text><text x=\"318\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">0 條（不對稱）</text><rect x=\"370\" y=\"20\" width=\"72\" height=\"64\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"406\" y=\"64\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"700\" fill=\"#166534\">Ｔ</text><line x1=\"406\" y1=\"24\" x2=\"406\" y2=\"80\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"406\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">1 條</text></svg>",
          "caption": "圖解：M、A、T 各有 1 條鉛直對稱軸，S 與 R 對摺無法疊合"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 1 ＋ 1 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：3 個"
        }
      ],
      "distractorAnalysis": {
        "A": "【漏判字母】只挑出 M 和 A，漏掉 T 也有正中間這條對稱軸。",
        "B": "【中了 S 的視覺陷阱】以為上下長得很像的 S 可以斜摺或對摺疊合，多算 1 個變 4 個。",
        "C": "【把單字當全部對稱】沒有逐字檢查，誤以為 5 個字母都是線對稱。"
      },
      "insight": "字母 S、N、Z 雖然看起來工整，但對摺後方向會反過來，通通不是線對稱圖形！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "線對稱大寫字母速記：A、H、I、M、O、T、U、V、W、X、Y（直軸）；B、C、D、E、H、I、K、O、X（橫軸）"
      ],
      "conceptCompare": "【線對稱 vs 旋轉平衡】S、N、Z 轉半圈看起來一樣，但對摺後彎曲方向會交錯，並不是線對稱。",
      "examVariations": "題目可能把問法改成「哪些字母有兩條以上的對稱軸」，答案就是 H、I、O、X。"
    },
    "check": {
      "expr": "1 + 1 + 1",
      "expect": "3"
    }
  },
  {
    "id": "U09-S1-M-003",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-1",
    "sectionName": "認識線對稱圖形",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "四邊形對稱軸與對角線陷阱辨識",
    "level": 2,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖的長方形、菱形和一般平行四邊形，這三個四邊形合計共有幾條對稱軸？",
    "svg": "<svg viewBox=\"0 0 420 130\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"25\" width=\"96\" height=\"58\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2.2\"/><text x=\"73\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">長方形</text><polygon points=\"210,18 258,54 210,90 162,54\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.2\"/><text x=\"210\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">菱形</text><polygon points=\"312,25 396,25 372,83 288,83\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><text x=\"342\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b91c1c\">一般平行四邊形</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "2 條",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "B",
        "text": "6 條",
        "trapCode": "U09_PARALLELOGRAM_SYM"
      },
      {
        "key": "C",
        "text": "8 條",
        "trapCode": "U09_DIAG_NOT_AXIS"
      },
      {
        "key": "D",
        "text": "4 條",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否看穿「一般平行四邊形有 0 條對稱軸」與「長方形對角線不是對稱軸」兩大必考陷阱。",
      "steps": [
        {
          "type": "text",
          "text": "長方形只有上下、左右對摺的 2 條對稱軸（斜對角線對摺不會重疊）；菱形沿兩條對角線對摺有 2 條；一般平行四邊形對摺完全無法疊合，是 0 條！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"22\" width=\"96\" height=\"58\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><line x1=\"73\" y1=\"14\" x2=\"73\" y2=\"88\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><line x1=\"17\" y1=\"51\" x2=\"129\" y2=\"51\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"73\" y=\"112\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">長方形：2 條</text><polygon points=\"220,16 266,51 220,86 174,51\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"220\" y1=\"10\" x2=\"220\" y2=\"92\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><line x1=\"166\" y1=\"51\" x2=\"274\" y2=\"51\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"220\" y=\"112\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">菱形：2 條</text><polygon points=\"335,22 420,22 396,80 311,80\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"366\" y=\"56\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\">✕ 無法疊合</text><text x=\"366\" y=\"112\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b91c1c\">平行四邊形：0 條</text></svg>",
          "caption": "圖解：長方形 2 條、菱形 2 條、一般平行四邊形 0 條，合計 4 條"
        },
        {
          "type": "eq",
          "expr": "2 ＋ 2 ＋ 0 ＝ 4"
        },
        {
          "type": "answer",
          "text": "答：4 條"
        }
      ],
      "distractorAnalysis": {
        "B": "【誤認平行四邊形是線對稱】以為一般平行四邊形也有 2 條對稱軸，算成 2 ＋ 2 ＋ 2 ＝ 6。",
        "C": "【誤把長方形對角線當對稱軸】以為長方形 4 條、菱形 2 條、平行四邊形 2 條，錯算成 8 條。",
        "A": "【漏算菱形或長方形】只記得其中一種圖形有 2 條，算成 2 條。"
      },
      "insight": "遇到四邊形秒辨口訣：「長方形 2、菱形 2、正方形 4、平行四邊形 0（特殊才算）！」"
    },
    "extensionStudy": {
      "coreFormulas": [
        "四邊形對稱軸數量：正方形 4 條、長方形 2 條、菱形 2 條、等腰梯形 1 條、一般平行四邊形 0 條"
      ],
      "conceptCompare": "【長方形對角線 vs 正方形對角線】正方形 4 邊等長，對角線是對稱軸；長方形長寬不等，對角線摺過去頂點會錯開。",
      "examVariations": "段考常把「平行四邊形」混在正多邊形選單中，問「哪一個圖形對稱軸最少」。"
    },
    "check": {
      "expr": "2 + 2 + 0",
      "expect": "4"
    }
  },
  {
    "id": "U09-S1-M-004",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-1",
    "sectionName": "認識線對稱圖形",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "國字造型對稱快辨",
    "level": 2,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "把標準方正字體的國字「山、田、品、心、尺」拿來對摺，共有幾個字不是線對稱圖形？",
    "options": [
      {
        "key": "A",
        "text": "2 個",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "3 個",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "C",
        "text": "4 個",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "1 個",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生在無圖輔助下，能用腦中對摺法快速找出不對稱的國字。",
      "steps": [
        {
          "type": "text",
          "text": "在腦中把每個字正中垂直對摺：「山」、「田」、「品」左右完全相同（田還有橫軸與斜軸），都是線對稱圖形；「心」與「尺」怎麼摺左右都無法重疊，共 2 個不是。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"20\" width=\"72\" height=\"64\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"54\" y=\"62\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#166534\">山</text><line x1=\"54\" y1=\"24\" x2=\"54\" y2=\"80\" stroke=\"#dc2626\" stroke-width=\"1.6\" stroke-dasharray=\"4,3\"/><text x=\"54\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">線對稱</text><rect x=\"106\" y=\"20\" width=\"72\" height=\"64\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"142\" y=\"62\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#166534\">田</text><line x1=\"142\" y1=\"24\" x2=\"142\" y2=\"80\" stroke=\"#dc2626\" stroke-width=\"1.6\" stroke-dasharray=\"4,3\"/><text x=\"142\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">線對稱</text><rect x=\"194\" y=\"20\" width=\"72\" height=\"64\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"230\" y=\"62\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#166534\">品</text><line x1=\"230\" y1=\"24\" x2=\"230\" y2=\"80\" stroke=\"#dc2626\" stroke-width=\"1.6\" stroke-dasharray=\"4,3\"/><text x=\"230\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">線對稱</text><rect x=\"282\" y=\"20\" width=\"72\" height=\"64\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"318\" y=\"62\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#991b1b\">心</text><text x=\"318\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">非線對稱</text><rect x=\"370\" y=\"20\" width=\"72\" height=\"64\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"406\" y=\"62\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#991b1b\">尺</text><text x=\"406\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">非線對稱</text></svg>",
          "caption": "圖解：「心」和「尺」筆畫左右不對稱，共 2 個不是線對稱圖形"
        },
        {
          "type": "eq",
          "expr": "5 － 3 ＝ 2"
        },
        {
          "type": "answer",
          "text": "答：2 個"
        }
      ],
      "distractorAnalysis": {
        "B": "【看反題意】題目問「有幾個不是」，卻數成「有幾個是線對稱圖形」（3 個）。",
        "C": "【誤判字數】將「品」或「山」誤判為不對稱。",
        "D": "【看漏「心」或「尺」】以為「心」像愛心圖案一樣左右對稱，其實國字「心」的點與臥鉤不對稱。"
      },
      "insight": "注意題目問的是「是」還是「不是」！國字「心」雖然像愛心，但寫起來左邊一點、右邊兩點且有彎鉤，並不對稱喔！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "常見對稱國字：中、日、田、品、山、王、大、十、串（對稱字可先看正中直軸）"
      ],
      "conceptCompare": "【國字「心」vs 愛心符號】愛心符號有 1 條對稱軸，但國字「心」的筆畫左右不同，不是線對稱圖形。",
      "examVariations": "段考常把「是」與「不是」對調出題，讀題最後四個字一定要圈起來！"
    },
    "check": {
      "expr": "5 - 3",
      "expect": "2"
    }
  },
  {
    "id": "U09-S2-M-005",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-2",
    "sectionName": "對稱點、對稱邊和對稱角",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "對稱點垂直距離倍數心算",
    "level": 3,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖虛線為對稱軸，點 A 和點 B 互為對稱點。已知點 A 距離對稱軸 7 公分，線段 AB 長幾公分？",
    "svg": "<svg viewBox=\"0 0 360 130\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"180\" y1=\"14\" x2=\"180\" y2=\"116\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><line x1=\"82\" y1=\"64\" x2=\"278\" y2=\"64\" stroke=\"#0284c7\" stroke-width=\"2\"/><polyline points=\"180,52 192,52 192,64\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><circle cx=\"82\" cy=\"64\" r=\"5\" fill=\"#0284c7\"/><circle cx=\"278\" cy=\"64\" r=\"5\" fill=\"#0284c7\"/><text x=\"82\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">點 A</text><text x=\"278\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">點 B</text><text x=\"131\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">7 公分</text><text x=\"229\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">？公分</text><text x=\"180\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">對稱軸</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "7 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "B",
        "text": "28 公分",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "C",
        "text": "21 公分",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "14 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否掌握「兩對稱點到對稱軸的距離相等」與「連線垂直對稱軸」，能直接乘 2 心算全長。",
      "steps": [
        {
          "type": "text",
          "text": "對稱點在對稱軸的兩側，而且到對稱軸的距離完全相等。點 A 到對稱軸是 7 公分，點 B 到對稱軸也是 7 公分，合起來線段 AB 就是 7 × 2 ＝ 14 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"230\" y1=\"14\" x2=\"230\" y2=\"104\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><line x1=\"110\" y1=\"56\" x2=\"350\" y2=\"56\" stroke=\"#0284c7\" stroke-width=\"2.4\"/><circle cx=\"110\" cy=\"56\" r=\"5\" fill=\"#0284c7\"/><circle cx=\"350\" cy=\"56\" r=\"5\" fill=\"#0284c7\"/><text x=\"110\" y=\"38\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">點 A</text><text x=\"350\" y=\"38\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">點 B</text><text x=\"170\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">7 公分</text><text x=\"290\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">也是 7 公分</text><text x=\"230\" y=\"122\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">7 ＋ 7 ＝ 14（公分）</text></svg>",
          "caption": "圖解：左右兩段到對稱軸各 7 公分，線段 AB 總長 14 公分"
        },
        {
          "type": "eq",
          "expr": "7 × 2 ＝ 14"
        },
        {
          "type": "answer",
          "text": "答：14 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記乘 2】只拿單邊到對稱軸的距離 7 公分作答，忘記對稱軸另一邊還有 7 公分。",
        "C": "【倍數算錯】誤把 7 乘以 3 算成 21 公分。",
        "B": "【重複乘 2】把已經算出來的 14 公分又再乘 2，錯算成 28 公分。"
      },
      "insight": "對稱軸就像平面鏡！點離鏡子 7 公分，鏡裡也有一個 7 公分，兩點相距直接乘 2！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對稱點連線長 ＝ 單邊到對稱軸距離 × 2"
      ],
      "conceptCompare": "【點到軸 vs 點到點】「點 A 到對稱軸距離」是單邊一半；「線段 AB（兩對稱點距離）」是兩倍全長。",
      "examVariations": "可能反過來給你「線段 AB ＝ 18 公分」，問點 A 到對稱軸幾公分（18 ÷ 2 ＝ 9 公分）。"
    },
    "check": {
      "expr": "7 * 2",
      "expect": "14"
    }
  },
  {
    "id": "U09-S2-M-006",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-2",
    "sectionName": "對稱點、對稱邊和對稱角",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "對稱距離反推比較心算",
    "level": 3,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖虛線為對稱軸，點 A 與點 B 對稱且相距 16 公分，點 C 距對稱軸 5 公分，點 B 比點 C 離軸遠幾公分？",
    "svg": "<svg viewBox=\"0 0 360 140\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"180\" y1=\"14\" x2=\"180\" y2=\"126\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><line x1=\"68\" y1=\"46\" x2=\"292\" y2=\"46\" stroke=\"#0284c7\" stroke-width=\"2\"/><circle cx=\"68\" cy=\"46\" r=\"5\" fill=\"#0284c7\"/><circle cx=\"292\" cy=\"46\" r=\"5\" fill=\"#0284c7\"/><text x=\"68\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">點 A</text><text x=\"292\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">點 B</text><text x=\"124\" y=\"66\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">全長 16 公分</text><line x1=\"180\" y1=\"96\" x2=\"250\" y2=\"96\" stroke=\"#16a34a\" stroke-width=\"2\"/><circle cx=\"250\" cy=\"96\" r=\"5\" fill=\"#16a34a\"/><text x=\"266\" y=\"90\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">點 C</text><text x=\"215\" y=\"116\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">5 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "6 公分",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "11 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "C",
        "text": "8 公分",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "D",
        "text": "3 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生先將兩對稱點距離除以 2 求出單邊距離，再和另一點到對稱軸距離做比較。",
      "steps": [
        {
          "type": "text",
          "text": "點 A 與點 B 互為對稱點，全長 16 公分被對稱軸平分成兩段，所以點 B 距離對稱軸是 16 ÷ 2 ＝ 8 公分；再減去點 C 到對稱軸的 5 公分，得出相差 3 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"210\" y1=\"14\" x2=\"210\" y2=\"118\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"90\" y1=\"42\" x2=\"330\" y2=\"42\" stroke=\"#0284c7\" stroke-width=\"2\"/><circle cx=\"90\" cy=\"42\" r=\"4.5\" fill=\"#0284c7\"/><circle cx=\"330\" cy=\"42\" r=\"4.5\" fill=\"#0284c7\"/><text x=\"150\" y=\"32\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">8 公分</text><text x=\"270\" y=\"32\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">點 B 距軸 8 公分</text><line x1=\"210\" y1=\"82\" x2=\"285\" y2=\"82\" stroke=\"#16a34a\" stroke-width=\"2\"/><circle cx=\"285\" cy=\"82\" r=\"4.5\" fill=\"#16a34a\"/><text x=\"248\" y=\"72\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">點 C 距軸 5 公分</text><text x=\"250\" y=\"114\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">相差：8 － 5 ＝ 3（公分）</text></svg>",
          "caption": "圖解：先算點 B 到對稱軸為 16 ÷ 2 ＝ 8 公分，再減去 5 公分"
        },
        {
          "type": "eq",
          "expr": "16 ÷ 2 － 5 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：3 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記除以 2】直接拿總長 16 減去 5，錯算成 16 － 5 ＝ 11 公分。",
        "C": "【只算到一半】算出點 B 到對稱軸為 8 公分就停筆，忘記減去點 C 的 5 公分。",
        "A": "【誤把差距乘 2】算出差距 3 公分後又多乘一次 2，得到 6 公分。"
      },
      "insight": "看到「對稱點相距多少」，第一步先除以 2 換成「到對稱軸的距離」，就能和另一點站在同一個標準比較！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "單邊距軸距離 ＝ 兩對稱點相距 ÷ 2"
      ],
      "conceptCompare": "【點距離 vs 軸距離】16 公分是「A 到 B」的跨軸距離，5 公分是「C 到軸」的單邊距離，不可直接相減。",
      "examVariations": "題目常改成問「點 B 的距離加上點 C 的對稱點距軸共幾公分」，變成 8 ＋ 5 ＝ 13 公分。"
    },
    "check": {
      "expr": "16 / 2 - 5",
      "expect": "3"
    }
  },
  {
    "id": "U09-S2-M-007",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-2",
    "sectionName": "對稱點、對稱邊和對稱角",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "對稱軸垂直性質求角心算",
    "level": 4,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖風箏以直虛線為對稱軸，點 B 與點 D 對稱。已知頂部半角 ∠1 ＝ 35 度，直角三角形中 ∠2 是幾度？",
    "svg": "<svg viewBox=\"0 0 360 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,20 105,68 180,140 255,68\" fill=\"#fef9c3\" stroke=\"#ca8a04\" stroke-width=\"2.2\"/><line x1=\"180\" y1=\"12\" x2=\"180\" y2=\"148\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"105\" y1=\"68\" x2=\"255\" y2=\"68\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><polyline points=\"180,56 192,56 192,68\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><text x=\"92\" y=\"73\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">B</text><text x=\"268\" y=\"73\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">D</text><text x=\"162\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">∠1</text><text x=\"134\" y=\"63\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">∠2</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "35 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      },
      {
        "key": "B",
        "text": "145 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      },
      {
        "key": "C",
        "text": "55 度",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "70 度",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生運用「對稱點連線與對稱軸垂直（90 度）」加上三角形內角和心算未知角度。",
      "steps": [
        {
          "type": "text",
          "text": "因為點 B 和點 D 互為對稱點，線段 BD 一定垂直對稱軸，中間形成 90 度直角！在三角形上方左半部裡，∠1 與 ∠2 合起來剛好是 90 度。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"160,20 75,78 160,78\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2.2\"/><line x1=\"160\" y1=\"12\" x2=\"160\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"148,78 148,66 160,66\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"142\" y=\"50\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">35 度</text><text x=\"108\" y=\"73\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">∠2</text><text x=\"176\" y=\"80\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">直角 ＝ 90 度</text><text x=\"350\" y=\"54\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">三角形內角和 180 度</text><text x=\"350\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">180 － 90 － 35 ＝ 55（度）</text></svg>",
          "caption": "圖解：對稱點連線垂直對稱軸成 90 度，直接用 90 － 35 算出 ∠2 ＝ 55 度"
        },
        {
          "type": "eq",
          "expr": "180 － 90 － 35 ＝ 55"
        },
        {
          "type": "answer",
          "text": "答：55 度"
        }
      ],
      "distractorAnalysis": {
        "A": "【誤以為同三角形兩角相等】以為 ∠2 和 ∠1 是對稱角而誤選 35 度。",
        "B": "【錯用平角減去】直接拿 180 － 35 ＝ 145 度，忘記扣掉中間的直角 90 度。",
        "D": "【錯用乘法】把 ∠1 直接乘 2 算成整個頂角 70 度。"
      },
      "insight": "對稱點連線遇到對稱軸就是 90 度直角！直角三角形裡只要 90 減掉已知銳角就能秒殺！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對稱點連線 ⊥ 對稱軸（交角為 90 度）",
        "直角三角形兩銳角和 ＝ 90 度"
      ],
      "conceptCompare": "【對稱角 vs 同側餘角】∠1 在軸的左邊，它在軸的右邊才有相等的對稱角；∠2 和 ∠1 在同一邊，相加等於 90 度。",
      "examVariations": "考題常不直接標直角記號，改考「點 B 與點 D 對稱」讓你自己想到中間有 90 度。"
    },
    "check": {
      "expr": "180 - 90 - 35",
      "expect": "55"
    }
  },
  {
    "id": "U09-S2-M-008",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-2",
    "sectionName": "對稱點、對稱邊和對稱角",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "雙對稱軸連續鏡射方位推理",
    "level": 4,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "skipOptionNumMatch": true,
    "question": "下圖有縱、橫兩條對稱軸。點 A 在右上方，先以縱軸對稱到點 B，再以橫軸將點 B 對稱到點 C，點 C 在哪個區域？",
    "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"180\" y1=\"14\" x2=\"180\" y2=\"136\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"60\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#0284c7\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><text x=\"180\" y=\"13\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">縱軸</text><text x=\"316\" y=\"79\" text-anchor=\"start\" font-size=\"11\" font-weight=\"700\" fill=\"#0284c7\">橫軸</text><circle cx=\"235\" cy=\"42\" r=\"5\" fill=\"#7c3aed\"/><text x=\"246\" y=\"46\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#5b21b6\">點 A</text><text x=\"118\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#64748b\">左上方</text><text x=\"118\" y=\"110\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#64748b\">左下方</text><text x=\"242\" y=\"110\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#64748b\">右下方</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "右下方",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "B",
        "text": "左上方",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "C",
        "text": "左下方",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "右上方",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生在腦中進行兩次連續線對稱翻轉（先左右過縱軸、再上下過橫軸），追蹤最終對稱點方位。",
      "steps": [
        {
          "type": "text",
          "text": "第一步：點 A 在右上方，以縱軸為對稱軸「左右翻轉」，會到達左上方的點 B。第二步：再以橫軸為對稱軸「上下翻轉」，點 B 就會往下翻到左下方，這就是點 C！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 145\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"230\" y1=\"14\" x2=\"230\" y2=\"132\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"90\" y1=\"72\" x2=\"370\" y2=\"72\" stroke=\"#0284c7\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><circle cx=\"300\" cy=\"42\" r=\"5\" fill=\"#7c3aed\"/><circle cx=\"160\" cy=\"42\" r=\"5\" fill=\"#dc2626\"/><circle cx=\"160\" cy=\"104\" r=\"5\" fill=\"#16a34a\"/><line x1=\"292\" y1=\"42\" x2=\"168\" y2=\"42\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"96\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"312\" y=\"46\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#5b21b6\">點 A（起點）</text><text x=\"148\" y=\"46\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">點 B（1. 過縱軸）</text><text x=\"148\" y=\"108\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">點 C（2. 過橫軸）</text></svg>",
          "caption": "圖解：右上方（A）➔ 過縱軸到左上方（B）➔ 過橫軸到左下方（C）"
        },
        {
          "type": "eq",
          "expr": "右上方 ➔ 左上方 ➔ 左下方"
        },
        {
          "type": "answer",
          "text": "答：左下方"
        }
      ],
      "distractorAnalysis": {
        "A": "【漏掉過縱軸】只做了過橫軸的上下翻轉，從右上方直接往下跑到右下方。",
        "B": "【只做完第一步】找到過縱軸的點 B（左上方），忘記還有第二次過橫軸。",
        "D": "【以為對稱兩次會回原位】對同一條軸翻兩次才會回原位，對兩條不同軸翻轉會跳到對角區域。"
      },
      "insight": "過縱軸改「左右」、過橫軸改「上下」！「右上」改左再改下，一秒得出「左下」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "過鉛直軸對稱：左右互換（上下不變）；過水平軸對稱：上下互換（左右不變）"
      ],
      "conceptCompare": "【過兩次垂直軸 vs 過兩次同一軸】過同一條軸對稱兩次會回到原點；過縱、橫兩條垂直軸各一次會移到斜對角位置。",
      "examVariations": "若最後問「再對縱軸對稱一次到點 D」，點 D 就會從左下方再過縱軸回到右下方。"
    },
    "check": {
      "expr": "2",
      "expect": "2"
    }
  },
  {
    "id": "U09-S3-M-009",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-3",
    "sectionName": "畫線對稱圖形",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "方格圖左右配對補塗心算",
    "level": 5,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "想讓下圖中以直虛線為軸的兩側格子完全疊合，最少還要再多塗黑幾個小方格？",
    "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(120,15)\"><rect x=\"0\" y=\"0\" width=\"30\" height=\"30\" fill=\"#334155\" stroke=\"#94a3b8\"/><rect x=\"30\" y=\"0\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"60\" y=\"0\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"90\" y=\"0\" width=\"30\" height=\"30\" fill=\"#334155\" stroke=\"#94a3b8\"/><rect x=\"0\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"30\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"60\" y=\"30\" width=\"30\" height=\"30\" fill=\"#334155\" stroke=\"#94a3b8\"/><rect x=\"90\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"0\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"30\" y=\"60\" width=\"30\" height=\"30\" fill=\"#334155\" stroke=\"#94a3b8\"/><rect x=\"60\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"90\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"0\" y=\"90\" width=\"30\" height=\"30\" fill=\"#334155\" stroke=\"#94a3b8\"/><rect x=\"30\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"60\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"90\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><line x1=\"60\" y1=\"-6\" x2=\"60\" y2=\"126\" stroke=\"#dc2626\" stroke-width=\"2.6\" stroke-dasharray=\"5,4\"/></g></svg>",
    "options": [
      {
        "key": "A",
        "text": "3 個",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "2 個",
        "trapCode": "U09_GRID_OFFSET_ONE"
      },
      {
        "key": "C",
        "text": "4 個",
        "trapCode": "U09_GRID_OFFSET_ONE"
      },
      {
        "key": "D",
        "text": "5 個",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生雙向檢查線對稱方格圖的能力：不只把左邊補到右邊，也要把右邊有的黑格補回左邊。",
      "steps": [
        {
          "type": "text",
          "text": "由上往下逐列對照左右兩側：第 1 列左右外側都黑，不用補（0 個）；第 2 列右內側黑，須在左內側補 1 個；第 3 列左內側黑，須在右內側補 1 個；第 4 列左外側黑，須在右外側補 1 個。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 148\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(80,14)\"><rect x=\"0\" y=\"0\" width=\"28\" height=\"28\" fill=\"#334155\" stroke=\"#94a3b8\"/><rect x=\"28\" y=\"0\" width=\"28\" height=\"28\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"56\" y=\"0\" width=\"28\" height=\"28\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"84\" y=\"0\" width=\"28\" height=\"28\" fill=\"#334155\" stroke=\"#94a3b8\"/><rect x=\"0\" y=\"28\" width=\"28\" height=\"28\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"28\" y=\"28\" width=\"28\" height=\"28\" fill=\"#ef4444\" stroke=\"#991b1b\"/><rect x=\"56\" y=\"28\" width=\"28\" height=\"28\" fill=\"#334155\" stroke=\"#94a3b8\"/><rect x=\"84\" y=\"28\" width=\"28\" height=\"28\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"0\" y=\"56\" width=\"28\" height=\"28\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"28\" y=\"56\" width=\"28\" height=\"28\" fill=\"#334155\" stroke=\"#94a3b8\"/><rect x=\"56\" y=\"56\" width=\"28\" height=\"28\" fill=\"#ef4444\" stroke=\"#991b1b\"/><rect x=\"84\" y=\"56\" width=\"28\" height=\"28\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"0\" y=\"84\" width=\"28\" height=\"28\" fill=\"#334155\" stroke=\"#94a3b8\"/><rect x=\"28\" y=\"84\" width=\"28\" height=\"28\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"56\" y=\"84\" width=\"28\" height=\"28\" fill=\"#ffffff\" stroke=\"#94a3b8\"/><rect x=\"84\" y=\"84\" width=\"28\" height=\"28\" fill=\"#ef4444\" stroke=\"#991b1b\"/><line x1=\"56\" y1=\"-6\" x2=\"56\" y2=\"118\" stroke=\"#dc2626\" stroke-width=\"2.4\" stroke-dasharray=\"4,3\"/></g><text x=\"315\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">第 1 列：已對稱（補 0）</text><text x=\"315\" y=\"74\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">第 2 列：左內補 1 格</text><text x=\"315\" y=\"100\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">第 3、4 列：右補 2 格</text><text x=\"315\" y=\"128\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">合計最少補 1 ＋ 2 ＝ 3 格</text></svg>",
          "caption": "圖解：紅色方格為必須補塗的位置，左補 1 格、右補 2 格，共 3 個"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 2 ＝ 3"
        },
        {
          "type": "answer",
          "text": "答：3 個"
        }
      ],
      "distractorAnalysis": {
        "C": "【誤算已對稱的第一列】多算 1 格，以為 4 列每一列都缺 1 格。",
        "D": "【數成原本總黑格數】把原本圖上就有的 5 個黑格數成還要補的數量。",
        "B": "【只看左邊補右邊】只把左邊第 3、4 列少掉的 2 格補到右邊，漏掉第 2 列也要從右邊補回左邊 1 格。"
      },
      "insight": "方格補對稱最容易漏掉「右邊有、左邊沒有」的格子！一列一列左右雙向檢查就零失誤！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "方格補對稱法則：逐列找出「只出現單邊」的黑格數量，即是需補塗的最少格數"
      ],
      "conceptCompare": "【單向填補 vs 雙向補齊】有時對稱軸兩側都有黑格，必須左補右、右也補左，才能讓左右完全一樣。",
      "examVariations": "可能改成斜對角線為對稱軸的 4×4 方格，對照座標行、列互換即可。"
    },
    "check": {
      "expr": "1 + 2",
      "expect": "3"
    }
  },
  {
    "id": "U09-S3-M-010",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-3",
    "sectionName": "畫線對稱圖形",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "對摺打洞乘倍心算",
    "level": 5,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "把正方形色紙連續對摺 2 次後，在中間遠離摺線處鑽出 3 個圓洞，全部攤開後紙上共有幾個洞？",
    "options": [
      {
        "key": "A",
        "text": "6 個",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "B",
        "text": "9 個",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "12 個",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "24 個",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否理解「對摺 1 次紙張層數乘 2」，能快速估算打洞後的總洞數。",
      "steps": [
        {
          "type": "text",
          "text": "對摺 1 次變成 2 層，對摺 2 次變成 2 × 2 ＝ 4 層。在遠離摺線的中間位置鑽出 3 個洞，每個洞都會貫穿 4 層紙，展開後共有 3 × 4 ＝ 12 個洞。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 125\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"22\" width=\"80\" height=\"80\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"65\" y1=\"22\" x2=\"65\" y2=\"102\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"25\" y1=\"62\" x2=\"105\" y2=\"62\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><circle cx=\"45\" cy=\"42\" r=\"3\" fill=\"#0284c7\"/><circle cx=\"85\" cy=\"42\" r=\"3\" fill=\"#0284c7\"/><circle cx=\"45\" cy=\"82\" r=\"3\" fill=\"#0284c7\"/><circle cx=\"85\" cy=\"82\" r=\"3\" fill=\"#0284c7\"/><circle cx=\"38\" cy=\"50\" r=\"3\" fill=\"#0284c7\"/><circle cx=\"92\" cy=\"50\" r=\"3\" fill=\"#0284c7\"/><circle cx=\"38\" cy=\"74\" r=\"3\" fill=\"#0284c7\"/><circle cx=\"92\" cy=\"74\" r=\"3\" fill=\"#0284c7\"/><circle cx=\"52\" cy=\"52\" r=\"3\" fill=\"#0284c7\"/><circle cx=\"78\" cy=\"52\" r=\"3\" fill=\"#0284c7\"/><circle cx=\"52\" cy=\"72\" r=\"3\" fill=\"#0284c7\"/><circle cx=\"78\" cy=\"72\" r=\"3\" fill=\"#0284c7\"/><text x=\"285\" y=\"44\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">對摺 2 次 ＝ 2 × 2 ＝ 4 層</text><text x=\"285\" y=\"72\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0369a1\">每層 3 個洞 ➔ 共 3 × 4 ＝ 12 個洞</text><text x=\"285\" y=\"100\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#64748b\">（四塊區域各 3 個，互不重疊）</text></svg>",
          "caption": "圖解：對摺 2 次分成 4 個對稱區域，每個區域出現 3 個洞，共 12 個"
        },
        {
          "type": "eq",
          "expr": "3 × 2 × 2 ＝ 12"
        },
        {
          "type": "answer",
          "text": "答：12 個"
        }
      ],
      "distractorAnalysis": {
        "A": "【只乘 2】以為對摺 2 次就是乘以 2，錯算成 3 × 2 ＝ 6 個。",
        "B": "【乘數算錯】把 4 層誤記成 3 層，錯算成 3 × 3 ＝ 9 個。",
        "D": "【多乘一次 2】把對摺 2 次誤當成 8 層（對摺 3 次），錯算成 3 × 8 ＝ 24 個。"
      },
      "insight": "對摺就是「一直乘 2」！對摺幾次就連乘幾個 2，再乘以單次打的洞數，馬上算出總洞數！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對摺 N 次後的紙張層數 ＝ 2 連乘 N 次（1 次 2 層、2 次 4 層、3 次 8 層）",
        "總洞數 ＝ 層數 × 打洞數（孔洞不壓到摺線時）"
      ],
      "conceptCompare": "【孔在中間 vs 孔壓摺線】孔在紙張中間不碰摺線時，層數直接乘倍；若半圓缺口剪在摺線上，攤開會合併成大洞。",
      "examVariations": "段考可能反問「攤開後有 24 個洞，原本打 3 個洞，請問共對摺了幾次？」（24 ÷ 3 ＝ 8 層 ➔ 3 次）。"
    },
    "check": {
      "expr": "3 * 2 * 2",
      "expect": "12"
    }
  },
  {
    "id": "U09-S3-M-011",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-3",
    "sectionName": "畫線對稱圖形",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "格線對稱點距離差心算",
    "level": 6,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖每格寬 2 公分，直虛線為對稱軸。點 P 在左 3 格、點 Q 在右 5 格，點 P 的對稱點距點 Q 幾公分？",
    "svg": "<svg viewBox=\"0 0 380 120\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(30,22)\"><line x1=\"0\" y1=\"36\" x2=\"320\" y2=\"36\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"0\" y1=\"68\" x2=\"320\" y2=\"68\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"128\" y1=\"0\" x2=\"128\" y2=\"86\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><line x1=\"32\" y1=\"30\" x2=\"32\" y2=\"72\" stroke=\"#cbd5e1\"/><line x1=\"64\" y1=\"30\" x2=\"64\" y2=\"72\" stroke=\"#cbd5e1\"/><line x1=\"96\" y1=\"30\" x2=\"96\" y2=\"72\" stroke=\"#cbd5e1\"/><line x1=\"160\" y1=\"30\" x2=\"160\" y2=\"72\" stroke=\"#cbd5e1\"/><line x1=\"192\" y1=\"30\" x2=\"192\" y2=\"72\" stroke=\"#cbd5e1\"/><line x1=\"224\" y1=\"30\" x2=\"224\" y2=\"72\" stroke=\"#cbd5e1\"/><line x1=\"256\" y1=\"30\" x2=\"256\" y2=\"72\" stroke=\"#cbd5e1\"/><line x1=\"288\" y1=\"30\" x2=\"288\" y2=\"72\" stroke=\"#cbd5e1\"/><circle cx=\"32\" cy=\"36\" r=\"5\" fill=\"#0284c7\"/><circle cx=\"288\" cy=\"36\" r=\"5\" fill=\"#16a34a\"/><text x=\"32\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">點 P</text><text x=\"288\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">點 Q</text><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">左方 3 格</text><text x=\"208\" y=\"56\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">右方 5 格</text><text x=\"16\" y=\"88\" text-anchor=\"start\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">每格寬 2 公分</text></g></svg>",
    "options": [
      {
        "key": "A",
        "text": "2 公分",
        "trapCode": "U09_GRID_OFFSET_ONE"
      },
      {
        "key": "B",
        "text": "16 公分",
        "trapCode": "U09_SYM_POINT_SWAP"
      },
      {
        "key": "C",
        "text": "8 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "D",
        "text": "4 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生能先在同側定位「點 P 的對稱點」，再與點 Q 計算格數差並乘上每格長度。",
      "steps": [
        {
          "type": "text",
          "text": "點 P 在對稱軸左方 3 格，它的對稱點就會出現在對稱軸「右方 3 格」的位置。它和同在右方 5 格的點 Q 相差 5 － 3 ＝ 2 格，每格 2 公分，所以相距 4 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 125\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"185\" y1=\"14\" x2=\"185\" y2=\"95\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><line x1=\"65\" y1=\"48\" x2=\"385\" y2=\"48\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/><circle cx=\"95\" cy=\"48\" r=\"5\" fill=\"#0284c7\"/><circle cx=\"275\" cy=\"48\" r=\"5\" fill=\"#dc2626\"/><circle cx=\"335\" cy=\"48\" r=\"5\" fill=\"#16a34a\"/><text x=\"95\" y=\"32\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">P（左 3 格）</text><text x=\"275\" y=\"32\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">P 對稱點（右 3 格）</text><text x=\"345\" y=\"32\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">Q（右 5 格）</text><text x=\"305\" y=\"72\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">差 2 格</text><text x=\"230\" y=\"112\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">（5 － 3） × 2 ＝ 4（公分）</text></svg>",
          "caption": "圖解：先找到點 P 的對稱點在右方 3 格，與右方 5 格的點 Q 相差 2 格"
        },
        {
          "type": "eq",
          "expr": "（5 － 3） × 2 ＝ 4"
        },
        {
          "type": "answer",
          "text": "答：4 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記乘以每格寬度】算出相差 2 格就直接回答 2 公分，忽略每格寬 2 公分。",
        "B": "【直接算點 P 到點 Q】沒有先找點 P 的對稱點，直接拿 3 ＋ 5 ＝ 8 格再乘 2 算成 16 公分。",
        "C": "【只算格子或倍數混淆】誤算成 （5 ＋ 3） ＝ 8 公分，或把相差 2 格再多乘一次 2。"
      },
      "insight": "遇到「點 P 的對稱點」與「點 Q」比較，一定要先把點 P 翻過軸放到同一側，再用減法算格數差！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "同側兩點距離 ＝ 格數差 × 每格長度"
      ],
      "conceptCompare": "【點 P 到點 Q vs P 的對稱點到點 Q】P 和 Q 在軸的兩邊要「相加」；P 的對稱點和 Q 都在右邊，要「相減」。",
      "examVariations": "若點 Q 改成在「左方 5 格」，P 的對稱點仍在右方 3 格，這時兩點在軸的兩側就變成 （3 ＋ 5） × 2 ＝ 16 公分。"
    },
    "check": {
      "expr": "(5 - 3) * 2",
      "expect": "4"
    }
  },
  {
    "id": "U09-S3-M-012",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-3",
    "sectionName": "畫線對稱圖形",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "對摺裁剪面積反推原邊長",
    "level": 6,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "正方形色紙對摺 1 次後，沿摺線剪去寬 3 公分的長條（兩層一起剪），展開後面積少了 48 平方公分，原色紙邊長幾公分？",
    "options": [
      {
        "key": "A",
        "text": "8 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "16 公分",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "C",
        "text": "6 公分",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "4 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生理解對摺裁剪時「剪掉的寬度會展開成雙倍」，反推正方形原邊長的逆向思維。",
      "steps": [
        {
          "type": "text",
          "text": "對摺 1 次時紙張有兩層，沿摺線剪掉寬 3 公分的長條，展開後相當於在中間剪掉 3 × 2 ＝ 6 公分寬的一整條長方形！總共減少 48 平方公分，用面積除以寬 6 公分就得出邊長。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"20\" width=\"96\" height=\"96\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><rect x=\"49\" y=\"20\" width=\"48\" height=\"96\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.6\" stroke-dasharray=\"4,3\"/><line x1=\"73\" y1=\"12\" x2=\"73\" y2=\"124\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><text x=\"73\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#991b1b\">減去 48</text><text x=\"73\" y=\"84\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">寬 3＋3＝6</text><text x=\"295\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">展開後剪掉的寬度：3 × 2 ＝ 6（公分）</text><text x=\"295\" y=\"82\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#15803d\">原邊長 ＝ 48 ÷ 6 ＝ 8（公分）</text></svg>",
          "caption": "圖解：兩層各剪去寬 3 公分，展開後共剪掉寬 6 公分的長條，面積 48 除以 6 得邊長 8 公分"
        },
        {
          "type": "eq",
          "expr": "48 ÷ （3 × 2） ＝ 8"
        },
        {
          "type": "answer",
          "text": "答：8 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記紙有兩層】直接拿 48 ÷ 3 ＝ 16 公分，忽略對摺時一刀同時剪到兩層。",
        "C": "【誤把展開寬當邊長】算出展開寬度 3 × 2 ＝ 6 公分後就誤選 6 公分。",
        "D": "【除法多除一次 2】把正確邊長 8 公分又再除以 2，錯選 4 公分。"
      },
      "insight": "對摺 1 次再剪一刀，展開會變成「雙倍寬度」！先乘 2 算出真正失去的寬度，再除以寬就是原長！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對摺 1 次切去寬度 W ➔ 展開失去總寬度 ＝ 2 × W"
      ],
      "conceptCompare": "【單層裁剪 vs 對摺裁剪】單層剪寬 3 公分只少 3 × 邊長；對摺 1 次兩層一起剪，面積會少 （3 × 2） × 邊長。",
      "examVariations": "也可反過來考：原邊長 8 公分對摺剪去 3 公分寬長條，剩下兩片總面積是 64 － 48 ＝ 16 平方公分。"
    },
    "check": {
      "expr": "48 / 2 / 3",
      "expect": "8"
    }
  },
  {
    "id": "U09-S4-M-013",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-4",
    "sectionName": "線對稱圖形的應用",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "半邊周長求全周長扣重疊軸",
    "level": 7,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖虛線是對稱軸，已知左半邊圖形的周長為 26 公分，且虛線段長 7 公分，整個線對稱圖形的周長是多少公分？",
    "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,22 108,52 126,124 180,124\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2.2\"/><polygon points=\"180,22 252,52 234,124 180,124\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"22\" x2=\"180\" y2=\"124\" stroke=\"#dc2626\" stroke-width=\"2.6\" stroke-dasharray=\"5,4\"/><text x=\"102\" y=\"36\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">左半周長 26 公分</text><text x=\"190\" y=\"80\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">軸長 7 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "38 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "45 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "C",
        "text": "52 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "D",
        "text": "19 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生計算線對稱全圖周長時，是否記得扣掉藏在圖形內部的「兩條重疊對稱軸」。",
      "steps": [
        {
          "type": "text",
          "text": "左半邊周長 26 公分裡面包含「外圍邊長 ＋ 7 公分對稱軸」，所以單純左半邊的外圍只有 26 － 7 ＝ 19 公分！左右合起來的全圖周長就是 19 × 2 ＝ 38 公分（或 26 × 2 － 7 × 2）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 140\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"120,20 55,48 72,114 120,114\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2.4\"/><line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"114\" stroke=\"#dc2626\" stroke-width=\"2.4\" stroke-dasharray=\"5,4\"/><text x=\"96\" y=\"132\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">單側外框：26 － 7 ＝ 19</text><text x=\"295\" y=\"46\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\">對稱軸在圖形內部，不算周長！</text><text x=\"295\" y=\"76\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">方法一：（26 － 7） × 2 ＝ 38 公分</text><text x=\"295\" y=\"106\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#15803d\">方法二：26 × 2 － 7 × 2 ＝ 38 公分</text></svg>",
          "caption": "圖解：先減去被包在內部的 7 公分對稱軸，再乘 2 得全圖周長 38 公分"
        },
        {
          "type": "eq",
          "expr": "（26 － 7） × 2 ＝ 38"
        },
        {
          "type": "answer",
          "text": "答：38 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【只扣一次對稱軸】算成 26 × 2 － 7 ＝ 45 公分，左右各含一條軸所以要扣兩次 7。",
        "D": "【只算出單側外框】算出 26 － 7 ＝ 19 公分後忘記乘 2 變成全圖。",
        "C": "【直接乘 2 忘扣軸】把半邊周長 26 直接乘 2 算成 52 公分，把中間重疊的對稱軸重複算兩次。"
      },
      "insight": "半邊拼全圖求周長：「先扣軸，再乘 2」！把藏進肚子裡的對稱軸先丟掉，再翻倍最快不會錯！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "線對稱全圖周長 ＝ （半邊周長 － 對稱軸長） × 2"
      ],
      "conceptCompare": "【全圖面積 vs 全圖周長】半邊拼全圖時，面積直接「× 2」；周長則因為中間對稱軸變成內部線段，必須扣掉 2 倍軸長。",
      "examVariations": "也可能給你全圖周長 38 公分與軸長 7 公分，反推半邊圖形的周長為 38 ÷ 2 ＋ 7 ＝ 26 公分。"
    },
    "check": {
      "expr": "(26 - 7) * 2",
      "expect": "38"
    }
  },
  {
    "id": "U09-S4-M-014",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-4",
    "sectionName": "線對稱圖形的應用",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "雙對稱軸四分之一外框乘四心算",
    "level": 7,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖八邊形有縱、橫兩條對稱軸，右上四分之一外框的三段長依序為 3、5、2 公分，全圖周長是多少公分？",
    "svg": "<svg viewBox=\"0 0 360 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"150,24 210,24 252,58 252,98 210,132 150,132 108,98 108,58\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"1.8\"/><polyline points=\"180,24 210,24 252,58 252,78\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"180\" y1=\"12\" x2=\"180\" y2=\"144\" stroke=\"#0284c7\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><line x1=\"84\" y1=\"78\" x2=\"276\" y2=\"78\" stroke=\"#0284c7\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><text x=\"198\" y=\"18\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">3 公分</text><text x=\"244\" y=\"38\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">5 公分</text><text x=\"260\" y=\"72\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">2 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "20 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "B",
        "text": "40 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "30 公分",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "10 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生運用「兩條互相垂直對稱軸將圖形外框平分成四等分」的性質，1 秒心算全周長。",
      "steps": [
        {
          "type": "text",
          "text": "縱、橫兩條對稱軸把這個八邊形的外框分成完全一樣的 4 份！因為紅色外框沒有包含裡面的虛線對稱軸，先加出這四分之一的長度 3 ＋ 5 ＋ 2 ＝ 10 公分，再乘以 4 就是全周長。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"95,22 145,22 178,52 178,86 145,116 95,116 62,86 62,52\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"1.5\"/><polyline points=\"120,22 145,22 178,52 178,69\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"120\" y1=\"12\" x2=\"120\" y2=\"126\" stroke=\"#0284c7\" stroke-width=\"1.6\" stroke-dasharray=\"4,3\"/><line x1=\"48\" y1=\"69\" x2=\"192\" y2=\"69\" stroke=\"#0284c7\" stroke-width=\"1.6\" stroke-dasharray=\"4,3\"/><text x=\"315\" y=\"42\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\">右上外框 ＝ 3 ＋ 5 ＋ 2 ＝ 10（公分）</text><text x=\"315\" y=\"74\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0369a1\">兩條對稱軸把外框分成相同的 4 份</text><text x=\"315\" y=\"106\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#15803d\">全圖周長 ＝ 10 × 4 ＝ 40（公分）</text></svg>",
          "caption": "圖解：紅線為整個外框的 4 分之 1，長度 10 公分乘以 4 得全周長 40 公分"
        },
        {
          "type": "eq",
          "expr": "（3 ＋ 5 ＋ 2） × 4 ＝ 40"
        },
        {
          "type": "answer",
          "text": "答：40 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【只乘以 2】習慣看到對稱只乘 2，忘記有縱、橫兩條對稱軸會分成 4 份，算出 10 × 2 ＝ 20。",
        "C": "【誤算為 3 份】心算倍數失誤，把 10 × 4 錯算成 30。",
        "D": "【只加完紅線沒倍增】算完 3 ＋ 5 ＋ 2 ＝ 10 公分就直接選答。"
      },
      "insight": "看到縱、橫兩條對稱軸十字切開，外框立刻變「4 份一模一樣」！算完一份直接 × 4！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "雙垂直對稱軸外框周長 ＝ 四分之一外框長 × 4"
      ],
      "conceptCompare": "【四分之一外框 vs 四分之一區域周長】本題給的是外框三段（不含對稱軸），直接 × 4；若包含兩條對稱軸半段，則必須先扣除。",
      "examVariations": "也可能改成正方形四個角各削去等腰直角三角形，利用對稱性心算八邊形周長。"
    },
    "check": {
      "expr": "(3 + 5 + 2) * 4",
      "expect": "40"
    }
  },
  {
    "id": "U09-S4-M-015",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-4",
    "sectionName": "線對稱圖形的應用",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "拼合周長差反推對稱軸長度",
    "level": 8,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "兩張完全一樣的三角形紙沿對稱軸拼成線對稱圖形。每張紙周長 24 公分，拼成後全圖周長 32 公分，這條對稱軸長幾公分？",
    "options": [
      {
        "key": "A",
        "text": "16 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "B",
        "text": "8 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "12 公分",
        "trapCode": "U09_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "4 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生逆向思維：拼合前後周長減少的總長度，其實剛好是「2 倍對稱軸長」。",
      "steps": [
        {
          "type": "text",
          "text": "原本兩張三角形分開時，總周長是 24 × 2 ＝ 48 公分。拼成線對稱圖形後周長只剩 32 公分，少了 48 － 32 ＝ 16 公分！這 16 公分正是兩張紙貼在一起的「2 條」對稱軸邊，所以除以 2 就得軸長 8 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 480 135\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,22 25,112 70,112\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><polygon points=\"86,22 86,112 131,112\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"78\" y=\"128\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">分開：24＋24＝48</text><text x=\"162\" y=\"72\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#475569\">➔</text><polygon points=\"220,22 175,112 265,112\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><line x1=\"220\" y1=\"22\" x2=\"220\" y2=\"112\" stroke=\"#dc2626\" stroke-width=\"2.4\" stroke-dasharray=\"4,3\"/><text x=\"220\" y=\"128\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">拼合周長：32</text><text x=\"372\" y=\"52\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">消失兩條重疊邊：48 － 32 ＝ 16</text><text x=\"372\" y=\"84\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">對稱軸長 ＝ 16 ÷ 2 ＝ 8（公分）</text></svg>",
          "caption": "圖解：兩邊貼合後各有 1 條邊藏進內部，消失的 16 公分除以 2 即為對稱軸長"
        },
        {
          "type": "eq",
          "expr": "（24 × 2 － 32） ÷ 2 ＝ 8"
        },
        {
          "type": "answer",
          "text": "答：8 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記除以 2】算出周長共少掉 16 公分就直接當對稱軸長度，忘記是兩張紙各藏 1 條邊。",
        "C": "【誤除以 4 或算錯差】把 24 直接除以 2 當成答案 12 公分。",
        "D": "【多除以一次 2】算出 8 公分後又誤除以 2 變成 4 公分。"
      },
      "insight": "兩張全等圖形貼合拼成線對稱，「總周長減少量 ＝ 對稱軸長 × 2」，除 2 秒算出接縫有多長！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "拼合對稱軸長 ＝ （半邊周長 × 2 － 全圖周長） ÷ 2"
      ],
      "conceptCompare": "【拼合周長減少 vs 剪開周長增加】把線對稱圖形沿軸剪開成兩張，總周長會「多出 2 倍對稱軸」；反過來拼合會「減少 2 倍對稱軸」。",
      "examVariations": "題目可能把三角形換成五邊形或任意半邊紙卡，公式完全相同！"
    },
    "check": {
      "expr": "(24 * 2 - 32) / 2",
      "expect": "8"
    }
  },
  {
    "id": "U09-S4-M-016",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "9-4",
    "sectionName": "線對稱圖形的應用",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "線對稱四邊形對稱角與內角和推理",
    "level": 8,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖以線段 AC 為對稱軸，已知頂部半角 ∠1 ＝ 35 度、∠B ＝ 115 度，底角 ∠BCD 是幾度？",
    "svg": "<svg viewBox=\"0 0 360 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,22 104,74 180,136 256,74\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.2\"/><line x1=\"180\" y1=\"14\" x2=\"180\" y2=\"144\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><text x=\"180\" y=\"15\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">A</text><text x=\"94\" y=\"78\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">B（115 度）</text><text x=\"180\" y=\"150\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">C</text><text x=\"266\" y=\"78\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">D</text><text x=\"162\" y=\"52\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">∠1</text><text x=\"162\" y=\"116\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">∠BCD＝？</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "60 度",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "95 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      },
      {
        "key": "C",
        "text": "210 度",
        "trapCode": "U09_ANGLE_SYM_CONFUSE"
      },
      {
        "key": "D",
        "text": "130 度",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生結合「對稱軸平分頂角」、「兩對稱角相等」與「四邊形內角和 360 度」的快速心算。",
      "steps": [
        {
          "type": "text",
          "text": "因為線段 AC 是對稱軸，頂角 ∠BAD ＝ 35 × 2 ＝ 70 度，而且 ∠D 與 ∠B 互為對稱角，所以 ∠D ＝ 115 度。再用四邊形內角和 360 度扣掉這三個角，就得到 ∠BCD。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 140\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"120,20 55,68 120,120 185,68\" fill=\"#fef9c3\" stroke=\"#ca8a04\" stroke-width=\"2\"/><line x1=\"120\" y1=\"14\" x2=\"120\" y2=\"126\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><text x=\"120\" y=\"52\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">70 度</text><text x=\"50\" y=\"72\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">115 度</text><text x=\"190\" y=\"72\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">115 度</text><text x=\"335\" y=\"42\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">頂角＝ 35 × 2 ＝ 70 度</text><text x=\"335\" y=\"70\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">對稱角 ∠D ＝ ∠B ＝ 115 度</text><text x=\"335\" y=\"100\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">360 － 70 － 115 × 2 ＝ 60（度）</text></svg>",
          "caption": "圖解：先將半角乘 2 得頂角 70 度、補出對稱角 115 度，再用 360 度相減"
        },
        {
          "type": "eq",
          "expr": "360 － 35 × 2 － 115 × 2 ＝ 60"
        },
        {
          "type": "answer",
          "text": "答：60 度"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記把頂角 ∠1 乘 2】直接用 360 － 35 － 115 × 2 ＝ 95 度，漏掉右半邊的 35 度。",
        "C": "【把對稱角與頂角都漏乘 2】只算 360 － 35 － 115 ＝ 210 度。",
        "D": "【誤把 180 當成四邊形或算錯補角】心算角度加總出錯，得出 130 度。"
      },
      "insight": "也可看右半邊三角形 ABC：內角和 180 － 35 － 115 ＝ 30 度，得到底角的一半，再乘 2 ＝ 60 度更快！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "線對稱四邊形：對稱軸兩側角相等，內角和 ＝ 360 度"
      ],
      "conceptCompare": "【全圖 360 度法 vs 半邊 180 度法】用半邊三角形內角和 180 度先算出一半，最後再 × 2，心算數字更小更快！",
      "examVariations": "若圖形改為「圓形內接風箏」或給出底角 ∠BCD 反推 ∠B，可用 （360 － 頂角 － 底角） ÷ 2。"
    },
    "check": {
      "expr": "360 - 35 * 2 - 115 * 2",
      "expect": "60"
    }
  },
  {
    "id": "U09-RV-M-017",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合應用",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "三連摺剪紙洞數倍增心算",
    "level": 9,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "把正方形紙依序左右對摺、上下對摺、再沿對角線對摺成三角形，在中央遠離摺線處打 2 個圓洞，全部展開後共有幾個洞？",
    "options": [
      {
        "key": "A",
        "text": "6 個",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "B",
        "text": "16 個",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "8 個",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "D",
        "text": "32 個",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生在完全無圖的情況下，心算連續三次不同方向對摺後的紙張層數與打洞總數。",
      "steps": [
        {
          "type": "text",
          "text": "每次對摺層數都變成原來的 2 倍：左右摺（2 層）➔ 上下摺（4 層）➔ 對角線摺（8 層）。最後在中央不碰摺線處打 2 個洞，2 × 8 ＝ 16 個洞。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"25\" width=\"82\" height=\"50\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><text x=\"61\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">第 1 摺</text><text x=\"61\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">2 層</text><text x=\"114\" y=\"56\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#475569\">➔</text><rect x=\"126\" y=\"25\" width=\"82\" height=\"50\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><text x=\"167\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">第 2 摺</text><text x=\"167\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">4 層</text><text x=\"220\" y=\"56\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#475569\">➔</text><rect x=\"232\" y=\"25\" width=\"82\" height=\"50\" rx=\"8\" fill=\"#ede9fe\" stroke=\"#7c3aed\" stroke-width=\"1.8\"/><text x=\"273\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#5b21b6\">第 3 摺</text><text x=\"273\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#5b21b6\">8 層</text><text x=\"326\" y=\"56\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#475569\">➔</text><rect x=\"338\" y=\"25\" width=\"102\" height=\"50\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.8\"/><text x=\"389\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">打 2 個洞</text><text x=\"389\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">共 16 個</text><text x=\"230\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">2 × 2 × 2 × 2 ＝ 16（個）</text></svg>",
          "caption": "圖解：三次對摺形成 8 層直角三角形，打 2 個洞展開共 16 個洞"
        },
        {
          "type": "eq",
          "expr": "2 × 2 × 2 × 2 ＝ 16"
        },
        {
          "type": "answer",
          "text": "答：16 個"
        }
      ],
      "distractorAnalysis": {
        "A": "【用加法算摺紙次數】誤以為摺 3 次變成 3 倍，算成 2 × 3 ＝ 6 個。",
        "D": "【多乘一次 2】心算連乘時數多了一個 2，算成 32 個。",
        "C": "【漏掉最後一次對角線摺】只算成 4 層 × 2 ＝ 8 個，或只算出層數 8 就停筆。"
      },
      "insight": "不管摺法是上下、左右還是對角線，只要「完整對摺 1 次」層數就是 × 2！3 次對摺 ＝ 8 塊等腰直角三角形！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "正方形連摺 3 次（橫、縱、斜）➔ 正好對應正方形的 4 條對稱軸把紙平分成 8 塊"
      ],
      "conceptCompare": "【摺紙倍增 vs 剪角開洞】本題孔在三角形中央（遠離三條邊），所以展開後完全獨立不合併，直接 8 × 2 ＝ 16 個。",
      "examVariations": "高階題會問「若改在斜邊摺線正中央剪半圓」，因為斜邊是自由邊或摺線，必須看清楚哪一條才是開口邊！"
    },
    "check": {
      "expr": "2 * 2 * 2 * 2",
      "expect": "16"
    }
  },
  {
    "id": "U09-RV-M-018",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合應用",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "複合正方形拼圖對角線陷阱辨識",
    "level": 9,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖是用 7 個相同小正方形拼成的「工」字形圖案，不能裁剪或移動，這個圖案總共有幾條對稱軸？",
    "svg": "<svg viewBox=\"0 0 360 140\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(135,25)\"><rect x=\"0\" y=\"0\" width=\"30\" height=\"30\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.8\"/><rect x=\"30\" y=\"0\" width=\"30\" height=\"30\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.8\"/><rect x=\"60\" y=\"0\" width=\"30\" height=\"30\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.8\"/><rect x=\"30\" y=\"30\" width=\"30\" height=\"30\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.8\"/><rect x=\"0\" y=\"60\" width=\"30\" height=\"30\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.8\"/><rect x=\"30\" y=\"60\" width=\"30\" height=\"30\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.8\"/><rect x=\"60\" y=\"60\" width=\"30\" height=\"30\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.8\"/></g></svg>",
    "options": [
      {
        "key": "A",
        "text": "1 條",
        "trapCode": "U09_AXIS_COUNT_WRONG"
      },
      {
        "key": "B",
        "text": "4 條",
        "trapCode": "U09_DIAG_NOT_AXIS"
      },
      {
        "key": "C",
        "text": "2 條",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "3 條",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生不被外圍 3×3 正方形的假象迷惑，能逐一驗證斜對角線是否真的能讓缺口疊合。",
      "steps": [
        {
          "type": "text",
          "text": "這個「工」字上下摺（橫軸）會完全疊合，左右摺（直軸）也會完全疊合！但如果沿 45 度斜對角線對摺，上排中間的正方形會摺到中間左側的空白處，沒辦法疊合，所以只有 2 條對稱軸。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(45,22)\"><rect x=\"0\" y=\"0\" width=\"28\" height=\"28\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.6\"/><rect x=\"28\" y=\"0\" width=\"28\" height=\"28\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.6\"/><rect x=\"56\" y=\"0\" width=\"28\" height=\"28\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.6\"/><rect x=\"28\" y=\"28\" width=\"28\" height=\"28\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.6\"/><rect x=\"0\" y=\"56\" width=\"28\" height=\"28\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.6\"/><rect x=\"28\" y=\"56\" width=\"28\" height=\"28\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.6\"/><rect x=\"56\" y=\"56\" width=\"28\" height=\"28\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.6\"/><line x1=\"42\" y1=\"-8\" x2=\"42\" y2=\"92\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"-8\" y1=\"42\" x2=\"92\" y2=\"42\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"-6\" y1=\"-6\" x2=\"90\" y2=\"90\" stroke=\"#dc2626\" stroke-width=\"1.6\" stroke-dasharray=\"2,3\"/></g><text x=\"300\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">綠色縱軸、橫軸：對摺疊合（2 條）</text><text x=\"300\" y=\"74\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">紅色斜對角線：上方格落入左側空白（✕）</text><text x=\"300\" y=\"106\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">合計：1 ＋ 1 ＝ 2（條）</text></svg>",
          "caption": "圖解：「工」字只有正中鉛直與水平 2 條對稱軸，斜對角線無法疊合"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 1 ＝ 2"
        },
        {
          "type": "answer",
          "text": "答：2 條"
        }
      ],
      "distractorAnalysis": {
        "A": "【漏數橫軸】只看到左右對稱的 1 條鉛直軸，忘記「工」字上下也完全對稱。",
        "B": "【中了正方形外觀陷阱】看成 3×3 正方形以為有 4 條，沒有檢查中間左右兩邊的缺口位置。",
        "D": "【誤算對稱軸數量】錯以為少了一條對角線還有 3 條。"
      },
      "insight": "拼圖缺了某些格子時，畫斜線一定要「檢查缺口會不會跑到實心格子上」！像「工」字橫寬直長不一樣感，就跟長方形一樣只有 2 條！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "對稱軸檢驗口訣：直、橫、兩斜線，只要有一格摺過去落入空白處，該線就不是對稱軸"
      ],
      "conceptCompare": "【「工」字 7 格 vs 「十」字 5 格】中間一格加上下左右 4 格的「十」字有 4 條對稱軸；上下兩排全滿的「工」字只有 2 條對稱軸。",
      "examVariations": "如果把中間左、右兩格也補滿（共 9 格）變成大正方形，對稱軸立刻增加為 4 條。"
    },
    "check": {
      "expr": "1 + 1",
      "expect": "2"
    }
  },
  {
    "id": "U09-RV-M-019",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合應用",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "雙摺剪中心角展開內洞周長心算",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "邊長 10 公分的正方形紙對摺 2 次，從下圖兩摺線交會角剪去邊長 3 公分的正方形，展開後中央洞口的周長是幾公分？",
    "svg": "<svg viewBox=\"0 0 360 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"125\" y=\"25\" width=\"96\" height=\"96\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><rect x=\"125\" y=\"25\" width=\"50\" height=\"50\" fill=\"#fecaca\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"125\" y1=\"25\" x2=\"221\" y2=\"25\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"5,4\"/><line x1=\"125\" y1=\"25\" x2=\"125\" y2=\"121\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"5,4\"/><text x=\"150\" y=\"54\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#991b1b\">剪去 3</text><text x=\"116\" y=\"76\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">摺線</text><text x=\"173\" y=\"18\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">摺線（兩線交會角）</text><text x=\"232\" y=\"76\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">摺後 5 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "12 公分",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "B",
        "text": "24 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "48 公分",
        "trapCode": "U09_FOLD_CUT_REVERSE"
      },
      {
        "key": "D",
        "text": "36 公分",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生空間想像力：從兩條摺線交會處（全紙正中心）剪去小正方形，攤開後會連成 1 個大正方形洞，而非 4 個分開的小洞。",
      "steps": [
        {
          "type": "text",
          "text": "兩條摺線交會的角落正是原本大正方形的「正中心」！從這裡剪掉邊長 3 公分的小正方形，沿兩條摺線向左右、上下展開後，會合成 1 個邊長為 3 × 2 ＝ 6 公分的正方形大洞，洞口周長為 6 × 4 ＝ 24 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 140\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"20\" width=\"100\" height=\"100\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><rect x=\"65\" y=\"40\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><line x1=\"95\" y1=\"14\" x2=\"95\" y2=\"126\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4,3\"/><line x1=\"39\" y1=\"70\" x2=\"151\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4,3\"/><text x=\"95\" y=\"74\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">邊長 6</text><text x=\"305\" y=\"44\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\">4 塊小剪角在正中心連成 1 個大洞！</text><text x=\"305\" y=\"76\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0369a1\">洞口邊長 ＝ 3 × 2 ＝ 6（公分）</text><text x=\"305\" y=\"108\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#15803d\">洞口周長 ＝ 6 × 4 ＝ 24（公分）</text></svg>",
          "caption": "圖解：展開後四個 3×3 缺角在正中央合成一個 6×6 的正方形大洞"
        },
        {
          "type": "eq",
          "expr": "（3 × 2） × 4 ＝ 24"
        },
        {
          "type": "answer",
          "text": "答：24 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記展開會倍增】直接拿 3 × 4 ＝ 12 公分，沒有想到展開後洞口邊長會變成 2 倍。",
        "C": "【誤以為 4 個獨立小洞】用對摺 2 次 4 層直接把小洞周長乘 4，算成 12 × 4 ＝ 48 公分，沒發現 4 塊其實連在一起。",
        "D": "【面積與周長混淆】算出洞口邊長 6 公分後，算成面積 6 × 6 ＝ 36。"
      },
      "insight": "看準剪的地方！剪在「摺線交會點」會合成 1 個雙倍邊長的大洞；剪在「正中間沒碰摺線」才會變成 4 個小洞！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "摺線交會角剪邊長 A 的正方形 ➔ 展開中央合併為邊長 2 × A 的單一正方形洞"
      ],
      "conceptCompare": "【剪交會角 vs 剪四個開放外角】若剪在兩條「開口邊」交會的角落，展開後是原正方形的四個外角被削掉，全紙外圍周長反而保持 40 公分不變。",
      "examVariations": "也可改問「展開後剩下紙張的面積」（10 × 10 － 6 × 6 ＝ 64 平方公分）。"
    },
    "check": {
      "expr": "(3 * 2) * 4",
      "expect": "24"
    }
  },
  {
    "id": "U09-RV-M-020",
    "legacyId": null,
    "unitId": "U09",
    "targetUnitId": "U09",
    "section": "REVIEW",
    "sectionName": "線對稱綜合應用",
    "batch": "純腦力體操",
    "source": "康軒五上U09純腦力體操",
    "category": "雙垂直對稱軸點對稱矩形周長心算",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖縱軸甲與橫軸乙皆為對稱軸。點 P 距甲 4 公分、距乙 3 公分，依兩軸對稱出其餘三點，四點圍成長方形周長幾公分？",
    "svg": "<svg viewBox=\"0 0 360 155\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"180\" y1=\"16\" x2=\"180\" y2=\"142\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"60\" y1=\"82\" x2=\"300\" y2=\"82\" stroke=\"#0284c7\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><text x=\"180\" y=\"13\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">甲</text><text x=\"312\" y=\"86\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#0284c7\">乙</text><circle cx=\"116\" cy=\"40\" r=\"5\" fill=\"#7c3aed\"/><line x1=\"116\" y1=\"40\" x2=\"180\" y2=\"40\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"3,3\"/><line x1=\"116\" y1=\"40\" x2=\"116\" y2=\"82\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"3,3\"/><text x=\"105\" y=\"36\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#5b21b6\">點 P</text><text x=\"148\" y=\"32\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">4 公分</text><text x=\"106\" y=\"64\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#0284c7\">3 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "28 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "14 公分",
        "trapCode": "U09_MIRROR_DIST_WRONG"
      },
      {
        "key": "C",
        "text": "24 公分",
        "trapCode": "U09_SYM_PERIMETER_HALF"
      },
      {
        "key": "D",
        "text": "48 公分",
        "trapCode": "U09_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生綜合「垂直對稱軸倍增兩維度距離」與「長方形周長」的高階空間心算能力。",
      "steps": [
        {
          "type": "text",
          "text": "點 P 過縱軸甲對稱過去，水平距離變成 4 × 2 ＝ 8 公分（長方形的長）；過橫軸乙對稱下來，鉛直距離變成 3 × 2 ＝ 6 公分（長方形的寬）。長 8 公分、寬 6 公分的長方形，周長是 （8 ＋ 6） × 2 ＝ 28 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 475 145\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"55\" y=\"28\" width=\"124\" height=\"84\" fill=\"#f5f3ff\" stroke=\"#7c3aed\" stroke-width=\"2.2\"/><line x1=\"117\" y1=\"14\" x2=\"117\" y2=\"128\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><line x1=\"35\" y1=\"70\" x2=\"199\" y2=\"70\" stroke=\"#0284c7\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><circle cx=\"55\" cy=\"28\" r=\"4.5\" fill=\"#7c3aed\"/><circle cx=\"179\" cy=\"28\" r=\"4.5\" fill=\"#7c3aed\"/><circle cx=\"179\" cy=\"112\" r=\"4.5\" fill=\"#7c3aed\"/><circle cx=\"55\" cy=\"112\" r=\"4.5\" fill=\"#7c3aed\"/><text x=\"117\" y=\"138\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#5b21b6\">長 8 公分、寬 6 公分</text><text x=\"335\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">長 ＝ 4 × 2 ＝ 8（公分）</text><text x=\"335\" y=\"72\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0284c7\">寬 ＝ 3 × 2 ＝ 6（公分）</text><text x=\"335\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">周長 ＝ （8 ＋ 6） × 2 ＝ 28（公分）</text></svg>",
          "caption": "圖解：橫向與縱向距離各自乘 2 得到長 8、寬 6，再算長方形周長 28 公分"
        },
        {
          "type": "eq",
          "expr": "（4 × 2 ＋ 3 × 2） × 2 ＝ 28"
        },
        {
          "type": "answer",
          "text": "答：28 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記對稱距離要乘 2】直接把 4 和 3 當成長方形的長與寬，算成 （4 ＋ 3） × 2 ＝ 14 公分。",
        "C": "【誤用 4 × 3 × 2】將兩邊距離相乘再乘 2，錯算出 24 公分。",
        "D": "【面積當周長】算出長 8 與寬 6 後，算成面積 8 × 6 ＝ 48 平方公分。"
      },
      "insight": "到軸的距離永遠是「一半」！長方形四條邊都各包住兩條對稱軸的一倍，所以 （4 ＋ 3） × 4 ＝ 28 公分直接秒殺！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "雙軸對稱矩形周長 ＝ （距縱軸 ＋ 距橫軸） × 4"
      ],
      "conceptCompare": "【矩形周長 vs 矩形面積】周長是 （8 ＋ 6） × 2 ＝ 28 公分；若題目改問這四點圍成的長方形面積，則是 8 × 6 ＝ 48 平方公分。",
      "examVariations": "進階題常反推：四點圍成的長方形面積是 48 平方公分，且點 P 距縱軸 4 公分，反推點 P 距橫軸幾公分（48 ÷ 8 ÷ 2 ＝ 3 公分）。"
    },
    "check": {
      "expr": "(4 * 2 + 3 * 2) * 2",
      "expect": "28"
    }
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U09'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
