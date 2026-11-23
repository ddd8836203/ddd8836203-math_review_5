// U08 4D 滿血題庫分片（共 60 題）
(function (root) {
  const DATA = [
  {
    "id": "U08-S1-B-001",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-1 平行四邊形的面積",
    "section": "8-1",
    "sectionName": "平行四邊形的面積",
    "category": "平行四邊形面積基本計算與割補",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "農夫有一塊平行四邊形菜園，底邊長 18 公尺，從對邊垂直量出的高是 12 公尺，另一雙鄰邊長 15 公尺。這塊菜園的面積是多少平方公尺？",
    "options": [
      {
        "key": "A",
        "text": "270 平方公尺",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "B",
        "text": "216 平方公尺",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "66 平方公尺",
        "trapCode": "U08_PERIMETER_AS_AREA"
      },
      {
        "key": "D",
        "text": "196 平方公尺",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否理解平行四邊形面積公式「底 × 高」，並能區分垂直的「高」與傾斜的「鄰邊」。",
      "steps": [
        {
          "type": "text",
          "text": "把平行四邊形左邊的直角三角形剪下來移到右邊，可以拼成一個長 18 公尺、寬 12 公尺的長方形；斜邊 15 公尺不是高，計算面積時不需要用到。"
        },
        {
          "type": "svg",
          "caption": "割補示意：左端直角三角形移到右端，拼成底 18 公尺、高 12 公尺的長方形",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"110,45 290,45 240,145 60,145\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><polygon points=\"60,145 110,145 110,45\" fill=\"rgba(251,191,36,0.32)\" stroke=\"#d97706\" stroke-width=\"1.5\"/><polygon points=\"240,145 290,145 290,45\" fill=\"rgba(34,197,94,0.20)\" stroke=\"#16a34a\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><line x1=\"110\" y1=\"45\" x2=\"110\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><polyline points=\"110,135 120,135 120,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><path d=\"M 95,75 Q 190,18 272,72\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"180\" y=\"24\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">割補成長方形：底 18 公尺 × 高 12 公尺</text><text x=\"46\" y=\"96\" font-size=\"12\" text-anchor=\"middle\" fill=\"#475569\">斜邊 15</text><text x=\"148\" y=\"102\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 12 公尺</text><text x=\"165\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1d4ed8\">底 18 公尺</text></svg>"
        },
        {
          "type": "eq",
          "expr": "18 × 12 ＝ 216"
        },
        {
          "type": "answer",
          "text": "答：216 平方公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【誤把鄰邊當成高】誤用底 18 公尺乘以傾斜的鄰邊 15 公尺，得到 270 平方公尺。",
        "C": "【誤把周長當面積】把四條邊相加算成周長（18 ＋ 15）× 2 ＝ 66，並非菜園面積。",
        "D": "【乘法計算進位錯誤】列式正確為 18 × 12，但十位進位時少加了 20 而誤算為 196。"
      },
      "figureNote": "把左側斜出的直角三角形平移補到右側，原圖就變成等面積的長方形，長就是底、寬就是高。",
      "insight": "平行四邊形的面積只看「底」和「垂直於底的高」，傾斜的另一雙對邊只是干擾條件。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平行四邊形面積 ＝ 底 × 高"
      ],
      "conceptCompare": "【平行四邊形 vs 長方形】把平行四邊形沿高剪開再平移拼接，就能變成同底等高的長方形，所以面積算法都是長邊乘以垂直寬度。",
      "examVariations": "段考常同時給出兩組邊長與斜邊長，專考學生能不能挑出帶有直角記號的那條高。"
    },
    "check": {
      "expr": "18 * 12",
      "expect": "216"
    }
  },
  {
    "id": "U08-S1-B-002",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-1 平行四邊形的面積",
    "section": "8-1",
    "sectionName": "平行四邊形的面積",
    "category": "辨識平行四邊形對應底與高",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖中的平行四邊形卡片，標示為底的邊長 14 公分，對應的高是 9 公分，另一條鄰邊長 11 公分。這張卡片的面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"130,45 290,45 240,145 80,145\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"130\" y1=\"45\" x2=\"130\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"130,135 140,135 140,145\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><text x=\"72\" y=\"96\" font-size=\"13\" text-anchor=\"middle\" fill=\"#334155\">11 公分</text><text x=\"166\" y=\"100\" font-size=\"13\" text-anchor=\"middle\" fill=\"#334155\">高 9 公分</text><text x=\"160\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">底 14 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "126 平方公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "154 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "C",
        "text": "50 平方公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      },
      {
        "key": "D",
        "text": "99 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生讀圖能力，是否能找出與直角記號相連的「底」與「高」來計算平行四邊形面積。",
      "steps": [
        {
          "type": "text",
          "text": "從圖中的直角記號可以看出，高 9 公分垂直在長 14 公分的底邊上，所以要拿 14 公分當底、9 公分當高。"
        },
        {
          "type": "svg",
          "caption": "配對底與高：紅色虛線高 9 公分與藍色底邊 14 公分成直角",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"130,45 290,45 240,145 80,145\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"80\" y1=\"145\" x2=\"240\" y2=\"145\" stroke=\"#2563eb\" stroke-width=\"4\"/><line x1=\"130\" y1=\"45\" x2=\"130\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.8\" stroke-dasharray=\"5,4\"/><polyline points=\"130,135 140,135 140,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"72\" y=\"96\" font-size=\"12\" text-anchor=\"middle\" fill=\"#94a3b8\">11 公分不用</text><text x=\"168\" y=\"100\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 9 公分</text><text x=\"160\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">底 14 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "14 × 9 ＝ 126"
        },
        {
          "type": "answer",
          "text": "答：126 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【拿兩鄰邊相乘】誤用長方形長乘寬的方式計算 14 × 11 ＝ 154，忽略圖形是斜的。",
        "C": "【周長與面積混淆】算成（14 ＋ 11）× 2 ＝ 50，這是卡片四周的周長而不是面積。",
        "D": "【底邊配錯對】拿鄰邊 11 公分去乘高 9 公分，9 公分的高並沒有垂直於 11 公分的邊。"
      },
      "figureNote": "找到圖中的直角記號，直角記號壓在哪一條邊上，那一條就是對應的底。",
      "insight": "高一定和它對應的底互相垂直，配錯底邊就會算出錯誤面積。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "底和高必須互相垂直（夾角為直角）才能相乘"
      ],
      "conceptCompare": "【長方形 vs 平行四邊形】長方形四個角都是直角，所以鄰邊直接就是高；平行四邊形四個角不是直角時，鄰邊不等於高。",
      "examVariations": "段考常把平行四邊形斜放或把高畫在圖形外側延長線上，考驗底和高的配對能力。"
    },
    "check": {
      "expr": "14 * 9",
      "expect": "126"
    }
  },
  {
    "id": "U08-S1-B-003",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-1 平行四邊形的面積",
    "section": "8-1",
    "sectionName": "平行四邊形的面積",
    "category": "已知平行四邊形面積與底反推高",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "社區公園要鋪設一塊平行四邊形草皮，面積是 192 平方公尺，已知底邊長 16 公尺，這條底邊上的高是多少公尺？",
    "options": [
      {
        "key": "A",
        "text": "14 公尺",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "24 公尺",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "80 公尺",
        "trapCode": "U08_PERIMETER_AS_AREA"
      },
      {
        "key": "D",
        "text": "12 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否能逆向運用平行四邊形面積公式「高 ＝ 面積 ÷ 底」。",
      "steps": [
        {
          "type": "text",
          "text": "因為平行四邊形面積 ＝ 底 × 高，反過來知道面積 192 平方公尺和底 16 公尺，把面積除以底就能算出高。"
        },
        {
          "type": "svg",
          "caption": "逆推示意：總面積 192 平方公尺除以底 16 公尺，得到高 12 公尺",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"115,45 285,45 245,145 75,145\" fill=\"rgba(34,197,94,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"115\" y1=\"45\" x2=\"115\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><polyline points=\"115,135 125,135 125,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"198\" y=\"90\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#15803d\">面積 192 平方公尺</text><text x=\"198\" y=\"112\" font-size=\"12\" text-anchor=\"middle\" fill=\"#475569\">192 ÷ 16 ＝ 12</text><text x=\"82\" y=\"96\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 ？</text><text x=\"160\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1d4ed8\">底 16 公尺</text></svg>"
        },
        {
          "type": "eq",
          "expr": "192 ÷ 16 ＝ 12"
        },
        {
          "type": "answer",
          "text": "答：12 公尺"
        }
      ],
      "distractorAnalysis": {
        "B": "【套錯三角形公式】誤把平行四邊形當成三角形，先將面積乘以 2 再除以 16，算出兩倍的高 24 公尺。",
        "C": "【周長逆推混淆】把 192 當成周長，先除以 2 再減 16 得到 80 公尺。",
        "A": "【除法估商失誤】列式為 192 ÷ 16，但在除法試商時誤把個位商成 4 而得出 14 公尺。"
      },
      "figureNote": "面積 ＝ 底 × 高，反過來求底或高時只要直接做除法，不需要乘以 2。",
      "insight": "求出高之後可以馬上驗算：16 × 12 ＝ 192，確認與題目面積完全吻合。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平行四邊形的高 ＝ 面積 ÷ 底",
        "平行四邊形的底 ＝ 面積 ÷ 高"
      ],
      "conceptCompare": "【平行四邊形 vs 三角形反推】平行四邊形求底或高直接「面積 ÷ 已知邊」；三角形才需要「面積 × 2 ÷ 已知邊」。",
      "examVariations": "常改出已知面積與高求底邊，或搭配鋪草皮每平方公尺的費用一起計算。"
    },
    "check": {
      "expr": "192 / 16",
      "expect": "12"
    }
  },
  {
    "id": "U08-S1-B-004",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-1 平行四邊形的面積",
    "section": "8-1",
    "sectionName": "平行四邊形的面積",
    "category": "平行四邊形面積與長度單位換算",
    "level": 1,
    "difficulty": 1,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "美術教室有一張平行四邊形海報紙，底邊長 2 公尺，對應的高是 85 公分。這張海報紙的面積是多少平方公分？",
    "options": [
      {
        "key": "A",
        "text": "170 平方公分",
        "trapCode": "U08_UNIT_MIX_CM_M"
      },
      {
        "key": "B",
        "text": "1700 平方公分",
        "trapCode": "U08_UNIT_MIX_CM_M"
      },
      {
        "key": "C",
        "text": "570 平方公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      },
      {
        "key": "D",
        "text": "17000 平方公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生在計算平行四邊形面積前，是否會先將公尺與公分統一為相同單位。",
      "steps": [
        {
          "type": "text",
          "text": "題目問的是「多少平方公分」，先把底邊 2 公尺換算成 200 公分，再乘以高 85 公分。"
        },
        {
          "type": "svg",
          "caption": "單位統一示意：先把底 2 公尺改寫成 200 公分，再乘以高 85 公分",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"100,45 295,45 255,145 60,145\" fill=\"rgba(168,85,247,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"100\" y1=\"45\" x2=\"100\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><polyline points=\"100,135 110,135 110,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"180\" y=\"25\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#6b21a8\">1 公尺 ＝ 100 公分，2 公尺 ＝ 200 公分</text><text x=\"152\" y=\"100\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 85 公分</text><text x=\"162\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1d4ed8\">底 200 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "2 公尺 ＝ 200 公分"
        },
        {
          "type": "eq",
          "expr": "200 × 85 ＝ 17000"
        },
        {
          "type": "answer",
          "text": "答：17000 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【未做單位換算】直接拿 2 × 85 ＝ 170，忽略底邊單位是公尺而不是公分。",
        "B": "【單位進率記錯】把 1 公尺誤記成 10 公分，將 2 公尺換算成 20 公分而算成 1700。",
        "C": "【當成長方形周長】誤把 200 公分與 85 公分相加再乘 2，算出 570。"
      },
      "figureNote": "把「2 公尺」換成「200 公分」標回底邊上，單位一致後再相乘才不會錯。",
      "insight": "長度單位不同絕對不能直接相乘！先看題目最後問「平方公分」還是「平方公尺」，統一單位再列式。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 公尺 ＝ 100 公分",
        "1 平方公尺 ＝ 10000 平方公分"
      ],
      "conceptCompare": "【先換長度 vs 後換面積】先換成 200 公分再乘 85 公分最容易；若先算 2 × 0.85 ＝ 1.7 平方公尺，則要乘 10000 才會變成 17000 平方公分。",
      "examVariations": "也可能反過來給 250 公分和 120 公分，問「是多少平方公尺」，算出 30000 平方公分後要除以 10000 變成 3 平方公尺。"
    },
    "check": {
      "expr": "2 * 100 * 85",
      "expect": "17000"
    }
  },
  {
    "id": "U08-S1-B-005",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-1 平行四邊形的面積",
    "section": "8-1",
    "sectionName": "平行四邊形的面積",
    "category": "平行四邊形底與高倍數變化對面積影響",
    "level": 1,
    "difficulty": 1,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一張平行四邊形色紙原來的底是 6 公分、高是 5 公分。如果把它的底和高都放大成原來的 3 倍，放大後的面積是多少平方公分？",
    "options": [
      {
        "key": "A",
        "text": "270 平方公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "90 平方公分",
        "trapCode": "U08_SCALE_LINEAR_AREA"
      },
      {
        "key": "C",
        "text": "30 平方公分",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "72 平方公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否理解「底和高同時變 3 倍時，面積會變為 3 × 3 ＝ 9 倍」，避免受線性思維誤導。",
      "steps": [
        {
          "type": "text",
          "text": "先分別算出放大後的底與高：底變成 6 × 3 ＝ 18 公分，高變成 5 × 3 ＝ 15 公分，再把新的底和高相乘。"
        },
        {
          "type": "svg",
          "caption": "放大比較：原底 6 高 5 面積 30；底和高各變 3 倍後可排成 9 個原圖，面積 270",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"42,115 90,115 78,145 30,145\" fill=\"rgba(59,130,246,0.22)\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"42\" y1=\"115\" x2=\"42\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><polyline points=\"42,138 48,138 48,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\"/><text x=\"62\" y=\"166\" font-size=\"12\" text-anchor=\"middle\" fill=\"#1d4ed8\">原：6 × 5 ＝ 30</text><polygon points=\"165,45 309,45 273,135 129,135\" fill=\"rgba(34,197,94,0.16)\" stroke=\"#15803d\" stroke-width=\"2\"/><line x1=\"165\" y1=\"45\" x2=\"165\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"2.4\" stroke-dasharray=\"5,4\"/><polyline points=\"165,126 174,126 174,135\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"212\" y=\"96\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">新高 15 公分</text><text x=\"215\" y=\"158\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#15803d\">新底 18 公分</text><text x=\"215\" y=\"26\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">底和高都變 3 倍，面積變 9 倍</text></svg>"
        },
        {
          "type": "eq",
          "expr": "（6 × 3）×（5 × 3）＝ 18 × 15 ＝ 270"
        },
        {
          "type": "answer",
          "text": "答：270 平方公分"
        }
      ],
      "distractorAnalysis": {
        "C": "【忘記放大尺寸】直接計算原圖面積 6 × 5 ＝ 30，漏掉題目的放大條件。",
        "D": "【把倍數當成加法】誤把底和高各「加 3 公分」算成 9 × 8 ＝ 72。",
        "B": "【倍數線性誤判】先算出原面積 30，再誤以為底和高變 3 倍時面積也只變 3 倍，算出 90 平方公分。"
      },
      "figureNote": "原圖底 6 公分、高 5 公分，把底和高都乘 3 後，新圖裡面可以擺進 3 × 3 ＝ 9 個原圖。",
      "insight": "當底和高「同時」放大 3 倍，兩個乘數各乘以 3，面積就會放大 3 × 3 ＝ 9 倍。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "底變甲倍、高變乙倍，面積就變成（甲 × 乙）倍"
      ],
      "conceptCompare": "【只變一邊 vs 兩邊都變】只有底變 3 倍、高不變時，面積變 3 倍；底和高都變 3 倍時，面積變 9 倍。",
      "examVariations": "題目有時會改問「底變成 2 倍、高變成 4 倍，面積變成原來的幾倍？」答案是 2 × 4 ＝ 8 倍。"
    },
    "check": {
      "expr": "(6 * 3) * (5 * 3)",
      "expect": "270"
    }
  },
  {
    "id": "U08-S2-B-006",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-2 三角形的面積",
    "section": "8-2",
    "sectionName": "三角形的面積",
    "category": "三角形面積公式由來與基本計算",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "露營用的三角形警示旗，底邊長 24 公分，高是 15 公分。製作一面這樣的警示旗需要多少平方公分的布料？",
    "options": [
      {
        "key": "A",
        "text": "180 平方公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "360 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "39 平方公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      },
      {
        "key": "D",
        "text": "190 平方公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否理解兩個全等三角形可以拼成同底等高的平行四邊形，並熟練計算「底 × 高 ÷ 2」。",
      "steps": [
        {
          "type": "text",
          "text": "兩個一模一樣的三角形可以拼成一個底 24 公分、高 15 公分的平行四邊形，所以一個三角形的面積剛好是平行四邊形的一半。"
        },
        {
          "type": "svg",
          "caption": "拼圖推導：兩個全等三角形拼成平行四邊形，再除以 2 得單一三角形面積",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,145 230,145 140,45\" fill=\"rgba(59,130,246,0.20)\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"140,45 300,45 230,145\" fill=\"rgba(251,191,36,0.18)\" stroke=\"#d97706\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><line x1=\"140\" y1=\"45\" x2=\"140\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><polyline points=\"140,135 150,135 150,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"185\" y=\"25\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">兩個全等三角形 ＝ 1 個平行四邊形</text><text x=\"176\" y=\"100\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 15 公分</text><text x=\"150\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">底 24 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "24 × 15 ÷ 2 ＝ 360 ÷ 2 ＝ 180"
        },
        {
          "type": "answer",
          "text": "答：180 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記除以 2】算完底 × 高 ＝ 360 之後沒有除以 2，算出的是兩個三角形合起來的平行四邊形面積。",
        "C": "【誤用加法】把底和高直接相加 24 ＋ 15 ＝ 39，沒有使用面積乘法公式。",
        "D": "【除法計算失誤】把 360 ÷ 2 誤算成 190。"
      },
      "figureNote": "橘色虛線是拿另一個全等三角形倒過來拼成的部分，面積要記得除以 2 才是原本的一塊。",
      "insight": "計算三角形面積時，如果底或高是偶數，可以先除以 2 再相乘（例如 12 × 15 ＝ 180），算起來更快又不易錯。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "三角形面積 ＝ 底 × 高 ÷ 2"
      ],
      "conceptCompare": "【平行四邊形 vs 三角形】同底等高時，三角形面積永遠是平行四邊形面積的一半，算式一定多一個「÷ 2」。",
      "examVariations": "常出兩面或四面相同的三角形旗幟共需多少布料，若剛好做兩面就等於一個平行四邊形。"
    },
    "check": {
      "expr": "24 * 15 / 2",
      "expect": "180"
    }
  },
  {
    "id": "U08-S2-B-007",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-2 三角形的面積",
    "section": "8-2",
    "sectionName": "三角形的面積",
    "category": "直角三角形的底與高選取",
    "level": 2,
    "difficulty": 2,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖中的直角三角形木板，三條邊長分別是 12 公分、16 公分與 20 公分。這塊木板的面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"100,40 100,145 255,145\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><polyline points=\"100,133 112,133 112,145\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"64\" y=\"96\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">12 公分</text><text x=\"178\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">16 公分</text><text x=\"205\" y=\"84\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#334155\">20 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "192 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "96 平方公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "160 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "D",
        "text": "48 平方公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否知道直角三角形中「夾住直角的兩條邊」互為底和高，不會誤拿最長的斜邊來相乘。",
      "steps": [
        {
          "type": "text",
          "text": "直角三角形中，互相垂直的兩條邊（12 公分和 16 公分）就是一組對應的底和高，最長的斜邊 20 公分不是高。"
        },
        {
          "type": "svg",
          "caption": "挑對底和高：夾住紅色直角的 16 公分與 12 公分才是底與高",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"100,40 100,145 255,145\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"3.5\"/><line x1=\"100\" y1=\"145\" x2=\"255\" y2=\"145\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><polyline points=\"100,133 112,133 112,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><text x=\"58\" y=\"96\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 12 公分</text><text x=\"178\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">底 16 公分</text><text x=\"218\" y=\"84\" font-size=\"12\" text-anchor=\"middle\" fill=\"#94a3b8\">斜邊 20 不用</text></svg>"
        },
        {
          "type": "eq",
          "expr": "16 × 12 ÷ 2 ＝ 192 ÷ 2 ＝ 96"
        },
        {
          "type": "answer",
          "text": "答：96 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記除以 2】算出 16 × 12 ＝ 192 平方公分後，忘記三角形面積要除以 2。",
        "D": "【把周長當成面積】把三條邊直接相加 12 ＋ 16 ＋ 20 ＝ 48，算出的是周長而非面積。",
        "C": "【誤選斜邊當高】把 16 公分當底，卻誤拿斜邊 20 公分當高，算出 16 × 20 ÷ 2 ＝ 160。"
      },
      "figureNote": "只要找到圖中的直角記號，夾住直角的兩條邊就是可以直接相乘再除以 2 的底和高。",
      "insight": "直角三角形最長的斜邊通常沒有垂直對應的高標示，計算面積時要找兩條垂直邊。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "直角三角形面積 ＝ 兩條直角邊相乘 ÷ 2"
      ],
      "conceptCompare": "【求面積 vs 求斜邊上的高】先用兩條直角邊算出面積 96 平方公分，如果題目再問「20 公分這條斜邊上的高是多少」，就可以反推 96 × 2 ÷ 20 ＝ 9.6 公分！",
      "examVariations": "段考常考給直角三角形三邊長，先求面積，再進階問斜邊上的高。"
    },
    "check": {
      "expr": "12 * 16 / 2",
      "expect": "96"
    }
  },
  {
    "id": "U08-S2-B-008",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-2 三角形的面積",
    "section": "8-2",
    "sectionName": "三角形的面積",
    "category": "鈍角三角形外部高的辨識與面積計算",
    "level": 2,
    "difficulty": 2,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖中的鈍角三角形花圃，底邊長 10 公尺，延長底邊並從對面頂點畫出的高是 7 公尺，延長的虛線段長 4 公尺。這個花圃的面積是多少平方公尺？",
    "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"60,145 200,145 268,45\" fill=\"rgba(34,197,94,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"200\" y1=\"145\" x2=\"268\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"268\" y1=\"45\" x2=\"268\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"257,145 257,134 268,134\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><text x=\"130\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">底 10 公尺</text><text x=\"234\" y=\"168\" font-size=\"12\" text-anchor=\"middle\" fill=\"#475569\">4 公尺</text><text x=\"308\" y=\"98\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">高 7 公尺</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "35 平方公尺",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "70 平方公尺",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "14 平方公尺",
        "trapCode": "U08_OBTUSE_HEIGHT_MISSED"
      },
      {
        "key": "D",
        "text": "49 平方公尺",
        "trapCode": "U08_OBTUSE_HEIGHT_MISSED"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否理解鈍角三角形的外高意義，計算面積時只算原本實線的底，不可把延長虛線加進底邊。",
      "steps": [
        {
          "type": "text",
          "text": "鈍角三角形的高落在三角形外面，所以要延長底邊才能畫出高；但底邊長度還是只有原本實線的 10 公尺，延長的 4 公尺只是輔助線，不能加進去。"
        },
        {
          "type": "svg",
          "caption": "外高判讀：只取實線底邊 10 公尺與紅色外高 7 公尺相乘再除以 2",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"60,145 200,145 268,45\" fill=\"rgba(34,197,94,0.18)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"60\" y1=\"145\" x2=\"200\" y2=\"145\" stroke=\"#2563eb\" stroke-width=\"4\"/><line x1=\"200\" y1=\"145\" x2=\"268\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"268\" y1=\"45\" x2=\"268\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.8\" stroke-dasharray=\"5,4\"/><polyline points=\"257,145 257,134 268,134\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"130\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">真正的底 10 公尺</text><text x=\"246\" y=\"168\" font-size=\"12\" text-anchor=\"middle\" fill=\"#94a3b8\">延長 4 不加</text><text x=\"308\" y=\"98\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 7 公尺</text></svg>"
        },
        {
          "type": "eq",
          "expr": "10 × 7 ÷ 2 ＝ 70 ÷ 2 ＝ 35"
        },
        {
          "type": "answer",
          "text": "答：35 平方公尺"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記除以 2】算完底 10 × 高 7 ＝ 70 後沒有除以 2。",
        "C": "【誤把延長線當成底】只拿虛線段 4 公尺乘以高 7 公尺再除以 2，算出外面空白小三角形的面積。",
        "D": "【誤把延長線段加進底】把底邊錯算成 10 ＋ 4 ＝ 14 公尺，算出 14 × 7 ÷ 2 ＝ 49 平方公尺。"
      },
      "figureNote": "藍色實線才是花圃真正的底邊 10 公尺，右側灰色虛線只是幫忙對齊垂足的延長線。",
      "insight": "高畫在圖形外面時，花圃本身並沒有變寬！算面積永遠只看圖形實線的底與垂直高。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "鈍角三角形的底 ＝ 原本實線邊長（不含虛線延長段）"
      ],
      "conceptCompare": "【減法驗證法】大直角三角形面積（14 × 7 ÷ 2 ＝ 49）減去外側空白直角三角形面積（4 × 7 ÷ 2 ＝ 14），49 － 14 ＝ 35，與直接用 10 × 7 ÷ 2 完全相同！",
      "examVariations": "段考也常在沒有畫出外高時，要求學生自己用三角板延長底邊畫出鈍角三角形的高。"
    },
    "check": {
      "expr": "10 * 7 / 2",
      "expect": "35"
    }
  },
  {
    "id": "U08-S2-B-009",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-2 三角形的面積",
    "section": "8-2",
    "sectionName": "三角形的面積",
    "category": "已知三角形面積與高反推底邊",
    "level": 2,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "帆船模型的三角形風帆面積是 84 平方公分，如果這面風帆的高是 12 公分，它的底邊長是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "7 公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "28 公分",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "14 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "16 公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生逆用三角形面積公式求底邊時，是否記得先把面積乘以 2 還原成平行四邊形面積。",
      "steps": [
        {
          "type": "text",
          "text": "兩面一樣大的風帆可以拼成一個平行四邊形，平行四邊形的面積是 84 × 2 ＝ 168 平方公分，再除以高 12 公分就能找出底邊。"
        },
        {
          "type": "svg",
          "caption": "逆推示意：把面積先乘 2 拼成 168 平方公分，再除以高 12 公分得底 14 公分",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,145 230,145 135,45\" fill=\"rgba(59,130,246,0.20)\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"135,45 295,45 230,145\" fill=\"rgba(148,163,184,0.14)\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><line x1=\"135\" y1=\"45\" x2=\"135\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><polyline points=\"135,135 145,135 145,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"180\" y=\"25\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">還原平行四邊形面積：84 × 2 ＝ 168</text><text x=\"172\" y=\"100\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 12 公分</text><text x=\"150\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">底 ＝ 168 ÷ 12 ＝ 14 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "84 × 2 ÷ 12 ＝ 168 ÷ 12 ＝ 14"
        },
        {
          "type": "answer",
          "text": "答：14 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【反推忘記乘 2】直接用 84 ÷ 12 ＝ 7，忘記三角形面積原本是平行四邊形除以 2 的結果。",
        "D": "【除法計算進退位錯】算對 84 × 2 ＝ 168，但 168 ÷ 12 時把餘數 48 誤算成商 6 而得 16。",
        "B": "【除以 2 與乘以 2 錯亂】誤把 168 除以 6 或把結果再乘以 2，得出 28 公分。"
      },
      "figureNote": "還原成兩塊三角形合體的平行四邊形（面積 168），就能用 168 ÷ 12 算出底邊。",
      "insight": "求三角形的底或高時，「先把面積乘以 2」是最容易忘記的關鍵動作，算完記得代回 14 × 12 ÷ 2 ＝ 84 檢查。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "三角形的底 ＝ 面積 × 2 ÷ 高",
        "三角形的高 ＝ 面積 × 2 ÷ 底"
      ],
      "conceptCompare": "【正算 vs 反算】正算面積是最後「÷ 2」；反算底或高時要最先「× 2」。",
      "examVariations": "常出「平行四邊形和三角形面積相等，已知三角形的高，求三角形的底」，解題步驟同樣要先將面積乘 2。"
    },
    "check": {
      "expr": "84 * 2 / 12",
      "expect": "14"
    }
  },
  {
    "id": "U08-S2-B-010",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-2 三角形的面積",
    "section": "8-2",
    "sectionName": "三角形的面積",
    "category": "三角形單邊倍數變化對面積影響",
    "level": 2,
    "difficulty": 2,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "原有一個底 10 公分、高 6 公分的三角形紙片，如果底保持不變，把高變成原來的 4 倍，新三角形的面積是多少平方公分？",
    "options": [
      {
        "key": "A",
        "text": "60 平方公分",
        "trapCode": "U08_SCALE_LINEAR_AREA"
      },
      {
        "key": "B",
        "text": "240 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "120 平方公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "480 平方公分",
        "trapCode": "U08_SCALE_LINEAR_AREA"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生區分「僅單邊（高）變 4 倍」與「底高同時變 4 倍」的面積變化規律。",
      "steps": [
        {
          "type": "text",
          "text": "底維持 10 公分不變，高變成 6 × 4 ＝ 24 公分，再套用三角形面積公式計算。"
        },
        {
          "type": "svg",
          "caption": "單邊變倍示意：底同為 10 公分時，高變 4 倍，面積也剛好變為原面積 30 的 4 倍",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,145 120,145 75,115\" fill=\"rgba(59,130,246,0.22)\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"75\" y1=\"115\" x2=\"75\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><text x=\"75\" y=\"168\" font-size=\"12\" text-anchor=\"middle\" fill=\"#2563eb\">原底 10，高 6</text><text x=\"75\" y=\"100\" font-size=\"12\" text-anchor=\"middle\" fill=\"#334155\">面積 30</text><polygon points=\"185,145 275,145 230,30\" fill=\"rgba(34,197,94,0.18)\" stroke=\"#15803d\" stroke-width=\"2\"/><line x1=\"230\" y1=\"30\" x2=\"230\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.4\" stroke-dasharray=\"5,4\"/><polyline points=\"230,136 239,136 239,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"272\" y=\"90\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">新高 24</text><text x=\"230\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#15803d\">底仍是 10 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "10 ×（6 × 4）÷ 2 ＝ 10 × 24 ÷ 2 ＝ 120"
        },
        {
          "type": "answer",
          "text": "答：120 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記除以 2】算出 10 × 24 ＝ 240 之後漏掉除以 2。",
        "D": "【誤套兩邊都放大】把單邊變 4 倍誤以為面積變 4 × 4 ＝ 16 倍，算出 30 × 16 ＝ 480。",
        "A": "【倍數記錯】誤以為除以 2 會抵銷一半倍數，只把原面積 30 乘以 2 得 60。"
      },
      "figureNote": "只有「高」拉長成 4 倍、「底」沒變時，新面積剛好是原來 30 平方公分的 4 倍，也就是 120 平方公分。",
      "insight": "底不變時，三角形的面積跟高成正比：高變幾倍，面積就變幾倍。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "底固定時，高變為原來的甲倍，面積也變為原來的甲倍"
      ],
      "conceptCompare": "【只變高 vs 底高都變】只有高變 4 倍，面積變 4 倍（120）；若底和高同時變 4 倍，面積才會變 16 倍（480）。",
      "examVariations": "也常出成選擇判斷題：「將三角形的底放大 2 倍、高縮小為原來的一半，面積會怎樣？」答案是不變。"
    },
    "check": {
      "expr": "10 * (6 * 4) / 2",
      "expect": "120"
    }
  },
  {
    "id": "U08-S3-B-011",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-3 梯形的面積",
    "section": "8-3",
    "sectionName": "梯形的面積",
    "category": "梯形面積公式由來與基本計算",
    "level": 3,
    "difficulty": 3,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "河堤斜坡的橫切面是一個梯形，上底是 8 公尺，下底是 14 公尺，高是 6 公尺。這個梯形斜坡的面積是多少平方公尺？",
    "options": [
      {
        "key": "A",
        "text": "132 平方公尺",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "66 平方公尺",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "42 平方公尺",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "D",
        "text": "24 平方公尺",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否理解兩個全等梯形可拼成底為「上底 ＋ 下底」的平行四邊形，並正確使用「（上底 ＋ 下底）× 高 ÷ 2」。",
      "steps": [
        {
          "type": "text",
          "text": "拿兩個一樣的梯形，把其中一個倒過來拼在一起，會變成一個底為（8 ＋ 14）公尺、高為 6 公尺的平行四邊形，最後除以 2 就是一個梯形的面積。"
        },
        {
          "type": "svg",
          "caption": "拼合推導：兩個全等梯形拼成底（8 ＋ 14）公尺、高 6 公尺的平行四邊形",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"75,55 155,55 195,140 50,140\" fill=\"rgba(59,130,246,0.20)\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"155,55 300,55 275,140 195,140\" fill=\"rgba(251,191,36,0.18)\" stroke=\"#d97706\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><line x1=\"95\" y1=\"55\" x2=\"95\" y2=\"140\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><polyline points=\"95,130 105,130 105,140\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"115\" y=\"42\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">上底 8 公尺</text><text x=\"228\" y=\"42\" font-size=\"12\" text-anchor=\"middle\" fill=\"#b45309\">下底 14 公尺</text><text x=\"134\" y=\"102\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 6 公尺</text><text x=\"122\" y=\"164\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">下底 14 公尺</text><text x=\"236\" y=\"164\" font-size=\"12\" text-anchor=\"middle\" fill=\"#b45309\">上底 8 公尺</text></svg>"
        },
        {
          "type": "eq",
          "expr": "（8 ＋ 14）× 6 ÷ 2 ＝ 22 × 6 ÷ 2 ＝ 66"
        },
        {
          "type": "answer",
          "text": "答：66 平方公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記除以 2】算完（8 ＋ 14）× 6 ＝ 132 平方公尺後沒有除以 2，算出的是兩個梯形合起來的面積。",
        "D": "【漏加下底】只拿上底 8 公尺乘以高再除以 2，算出 24 平方公尺。",
        "C": "【漏加上底】只拿單一邊的下底 14 公尺乘以高再除以 2，算出 42 平方公尺。"
      },
      "figureNote": "左邊藍色加上右邊倒放的橘色梯形，上下兩條邊都剛好變成「8 ＋ 14 ＝ 22 公尺」。",
      "insight": "梯形公式一定要先用括號把「上底 ＋ 下底」加起來，再乘高、除以 2。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "梯形面積 ＝（上底 ＋ 下底）× 高 ÷ 2"
      ],
      "conceptCompare": "【三角形 vs 梯形】可以把三角形想像成「上底等於 0 的梯形」，所以兩者的面積都要除以 2。",
      "examVariations": "有時上底比下底長（倒梯形），只要找平行的那一雙對邊當上底和下底，公式完全一樣。"
    },
    "check": {
      "expr": "(8 + 14) * 6 / 2",
      "expect": "66"
    }
  },
  {
    "id": "U08-S3-B-012",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-3 梯形的面積",
    "section": "8-3",
    "sectionName": "梯形的面積",
    "category": "直角梯形辨識高與斜邊",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖中的直角梯形木桌桌面，上底是 12 公分，下底是 18 公分，垂直的邊長 10 公分，傾斜的邊長 13 公分。這張桌面的面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"90,45 210,45 270,145 90,145\" fill=\"rgba(59,130,246,0.10)\" stroke=\"#0f172a\" stroke-width=\"2\"/><polyline points=\"90,56 101,56 101,45\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><polyline points=\"90,134 101,134 101,145\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><text x=\"150\" y=\"34\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">12 公分</text><text x=\"180\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">18 公分</text><text x=\"55\" y=\"98\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">10 公分</text><text x=\"272\" y=\"94\" font-size=\"13\" text-anchor=\"middle\" fill=\"#334155\">13 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "195 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "B",
        "text": "150 平方公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "53 平方公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      },
      {
        "key": "D",
        "text": "300 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生在直角梯形中是否能認出垂直邊就是高，並排除傾斜邊長 13 公分的干擾。",
      "steps": [
        {
          "type": "text",
          "text": "直角梯形左邊那條 10 公分的邊同時垂直於上底 12 公分和下底 18 公分，所以它就是梯形的高；右邊傾斜的 13 公分不是高。"
        },
        {
          "type": "svg",
          "caption": "直角梯形高辨識：紅色垂直邊 10 公分為高，右側斜邊 13 公分不參與計算",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"90,45 210,45 270,145 90,145\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"90\" y1=\"45\" x2=\"210\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><line x1=\"90\" y1=\"145\" x2=\"270\" y2=\"145\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><line x1=\"90\" y1=\"45\" x2=\"90\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"3.5\"/><polyline points=\"90,56 101,56 101,45\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><polyline points=\"90,134 101,134 101,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"150\" y=\"34\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">上底 12 公分</text><text x=\"180\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">下底 18 公分</text><text x=\"52\" y=\"98\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 10 公分</text><text x=\"282\" y=\"94\" font-size=\"12\" text-anchor=\"middle\" fill=\"#94a3b8\">斜邊 13 不用</text></svg>"
        },
        {
          "type": "eq",
          "expr": "（12 ＋ 18）× 10 ÷ 2 ＝ 30 × 10 ÷ 2 ＝ 150"
        },
        {
          "type": "answer",
          "text": "答：150 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【誤把斜邊當成高】把右側傾斜的 13 公分當成高來算（12 ＋ 18）× 13 ÷ 2 ＝ 195。",
        "C": "【誤算周長】把四條邊直接相加 12 ＋ 18 ＋ 10 ＋ 13 ＝ 53，算出的是周長而非面積。",
        "D": "【忘記除以 2】算出（12 ＋ 18）× 10 ＝ 300 之後沒有除以 2。"
      },
      "figureNote": "左邊上下都有直角記號的紅線 10 公分就是平行兩底之間的距離，也就是梯形的高。",
      "insight": "只要兩條平行的底邊與其中一條腰成直角，那條腰本身就是梯形的高，不用另外畫虛線。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "直角梯形的垂直腰 ＝ 梯形的高"
      ],
      "conceptCompare": "【一般梯形 vs 直角梯形】一般梯形的高常畫在內部虛線上；直角梯形可以直接拿帶有直角記號的腰當高。",
      "examVariations": "如果題目把直角梯形轉 90 度立起來，變成左右兩邊平行、底在下面，這時高就是下面水平那條邊。"
    },
    "check": {
      "expr": "(12 + 18) * 10 / 2",
      "expect": "150"
    }
  },
  {
    "id": "U08-S3-B-013",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-3 梯形的面積",
    "section": "8-3",
    "sectionName": "梯形的面積",
    "category": "梯形面積與混合單位換算",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "工匠量出一塊梯形玻璃窗的上底是 90 公分，下底是 1.5 公尺，高是 80 公分。這塊玻璃窗的面積是多少平方公分？",
    "options": [
      {
        "key": "A",
        "text": "3660 平方公分",
        "trapCode": "U08_UNIT_MIX_CM_M"
      },
      {
        "key": "B",
        "text": "6000 平方公分",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "C",
        "text": "19200 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "D",
        "text": "9600 平方公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否能在梯形面積計算前，把帶有小數的「公尺」正確換算成「公分」。",
      "steps": [
        {
          "type": "text",
          "text": "題目要求回答「平方公分」，先把下底 1.5 公尺乘以 100 換算成 150 公分，再套用梯形面積公式。"
        },
        {
          "type": "svg",
          "caption": "單位換算：下底 1.5 公尺先換成 150 公分，與上底 90 公分、高 80 公分一致",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"115,45 245,45 290,145 70,145\" fill=\"rgba(14,165,233,0.14)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"130\" y1=\"45\" x2=\"130\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><polyline points=\"130,135 140,135 140,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"180\" y=\"33\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0369a1\">上底 90 公分</text><text x=\"176\" y=\"100\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 80 公分</text><text x=\"180\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0369a1\">下底 1.5 公尺 ＝ 150 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "1.5 公尺 ＝ 150 公分"
        },
        {
          "type": "eq",
          "expr": "（90 ＋ 150）× 80 ÷ 2 ＝ 240 × 80 ÷ 2 ＝ 9600"
        },
        {
          "type": "answer",
          "text": "答：9600 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【未統一單位直接加】沒有把 1.5 公尺換成公分，直接算（90 ＋ 1.5）× 80 ÷ 2 ＝ 3660。",
        "C": "【忘記除以 2】算對單位換算，卻在（90 ＋ 150）× 80 ＝ 19200 後忘記除以 2。",
        "B": "【漏加上底】只用下底 150 × 80 ÷ 2 ＝ 6000，忘記加上底 90 公分。"
      },
      "figureNote": "三個數字裡只要有一個單位是「公尺」，就要先乘 100 變成「公分」才能合起來相加或相乘。",
      "insight": "1.5 公尺就是 1 公尺 50 公分，也就是 150 公分；先換好單位就跟一般整數梯形題一樣好算。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "1.5 公尺 ＝ 1.5 × 100 公分 ＝ 150 公分",
        "梯形面積 ＝（上底 ＋ 下底）× 高 ÷ 2"
      ],
      "conceptCompare": "【平方公分 vs 平方公尺】9600 平方公分若要換成平方公尺，要除以 10000，等於 0.96 平方公尺。",
      "examVariations": "段考常把上底、下底、高三個尺寸故意混用公尺與公分，下筆前務必圈出每個數字的單位。"
    },
    "check": {
      "expr": "(90 + 1.5 * 100) * 80 / 2",
      "expect": "9600"
    }
  },
  {
    "id": "U08-S3-B-014",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-3 梯形的面積",
    "section": "8-3",
    "sectionName": "梯形的面積",
    "category": "已知梯形面積與上下底反推高",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一個梯形招牌的面積是 140 平方公分，已知它的上底是 10 公分、下底是 18 公分，這個招牌的高是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "10 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "5 公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "28 公分",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "D",
        "text": "20 公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生逆推梯形高的能力：先把面積乘 2 變成雙倍平行四邊形，再除以上下底之和。",
      "steps": [
        {
          "type": "text",
          "text": "先將梯形面積乘以 2，變成兩個相同梯形拼出的平行四邊形面積 280 平方公分；這個平行四邊形的底是（10 ＋ 18）＝ 28 公分，相除即為高。"
        },
        {
          "type": "svg",
          "caption": "逆推示意：面積 × 2 ＝ 280 平方公分，除以上下底之和 28 公分得高 10 公分",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"85,45 155,45 195,145 55,145\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"155,45 295,45 265,145 195,145\" fill=\"rgba(148,163,184,0.14)\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><line x1=\"105\" y1=\"45\" x2=\"105\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><polyline points=\"105,135 115,135 115,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"180\" y=\"25\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">兩個梯形總面積：140 × 2 ＝ 280</text><text x=\"142\" y=\"100\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 ？ 公分</text><text x=\"162\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">底 ＝ 上底 10 ＋ 下底 18 ＝ 28 公分</text></svg>"
        },
        {
          "type": "eq",
          "expr": "140 × 2 ÷（10 ＋ 18）＝ 280 ÷ 28 ＝ 10"
        },
        {
          "type": "answer",
          "text": "答：10 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【反推忘記乘 2】直接用 140 ÷ 28 ＝ 5，漏掉先把面積乘以 2。",
        "C": "【漏加下底】把面積乘 2 後只除以上底 10 公分（280 ÷ 10 ＝ 28），忘記加上下底 18 公分。",
        "D": "【加法計算錯誤】把 10 ＋ 18 誤算為 14，再除得 280 ÷ 14 ＝ 20 公分。"
      },
      "figureNote": "拼成兩個梯形的平行四邊形後，總面積 280、底是 10 ＋ 18 ＝ 28，高就是 280 ÷ 28 ＝ 10。",
      "insight": "遇到三角形或梯形「反推長度」的題目，第一步永遠先把已知面積乘以 2。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "梯形的高 ＝ 面積 × 2 ÷（上底 ＋ 下底）",
        "梯形的下底 ＝ 面積 × 2 ÷ 高 － 上底"
      ],
      "conceptCompare": "【反推高 vs 反推其中一底】求高時要除以「上底 ＋ 下底」；求上底或下底時，則是「面積 × 2 ÷ 高」後再減掉另一底。",
      "examVariations": "段考常考已知梯形面積、高和上底，反求下底長度。"
    },
    "check": {
      "expr": "140 * 2 / (10 + 18)",
      "expect": "10"
    }
  },
  {
    "id": "U08-S3-B-015",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-3 梯形的面積",
    "section": "8-3",
    "sectionName": "梯形的面積",
    "category": "梯形公式在堆疊總數的應用",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "倉庫裡把圓木堆成梯形，最上層有 5 根，往下每一層都比上一層多 1 根，共堆了 8 層，最下層有 12 根。這堆圓木一共有多少根？",
    "options": [
      {
        "key": "A",
        "text": "68 根",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "48 根",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "C",
        "text": "64 根",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "136 根",
        "trapCode": "U08_FORGET_DIV_TWO"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否能把梯形面積概念遷移到「每層等差堆疊總數」問題上。",
      "steps": [
        {
          "type": "text",
          "text": "把兩堆一模一樣的圓木一正一反併排起來，每一層合起來都剛好是 5 ＋ 12 ＝ 17 根，總共有 8 層，算出總數後再除以 2 就是原本一堆的根數。"
        },
        {
          "type": "svg",
          "caption": "堆疊配對：正反兩堆圓木拼起來，8 層各有 5 ＋ 12 根，再除以 2",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,45 140,45 190,145 50,145\" fill=\"rgba(217,119,6,0.22)\" stroke=\"#b45309\" stroke-width=\"2\"/><polygon points=\"140,45 280,45 260,145 190,145\" fill=\"rgba(59,130,246,0.14)\" stroke=\"#2563eb\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><line x1=\"32\" y1=\"45\" x2=\"32\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"4,3\"/><text x=\"105\" y=\"33\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#b45309\">頂層 5 根</text><text x=\"210\" y=\"33\" font-size=\"12\" text-anchor=\"middle\" fill=\"#2563eb\">倒放 12 根</text><text x=\"22\" y=\"98\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">8 層</text><text x=\"120\" y=\"166\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#b45309\">底層 12 根</text><text x=\"225\" y=\"166\" font-size=\"12\" text-anchor=\"middle\" fill=\"#2563eb\">倒放 5 根</text><text x=\"316\" y=\"98\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">共 17 × 8 ÷ 2</text></svg>"
        },
        {
          "type": "eq",
          "expr": "（5 ＋ 12）× 8 ÷ 2 ＝ 17 × 8 ÷ 2 ＝ 68"
        },
        {
          "type": "answer",
          "text": "答：68 根"
        }
      ],
      "distractorAnalysis": {
        "B": "【漏加頂層數量】只算 12 × 8 ÷ 2 ＝ 48 根，漏掉最上層的 5 根。",
        "C": "【乘法計算失誤】把（5 ＋ 12）× 4 也就是 17 × 4 誤算為 64 根。",
        "D": "【忘記除以 2】算完（5 ＋ 12）× 8 ＝ 136 后忘記除以 2，算出的是兩堆圓木的總和。"
      },
      "figureNote": "把圓木的頂層 5 根當上底、底層 12 根當下底、層數 8 當高，跟梯形拼合想法完全相同。",
      "insight": "凡是「每一層規律增加相同數量」的階梯或堆疊問題，都能直接借用（上底 ＋ 下底）× 高 ÷ 2 來算。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "堆疊總數 ＝（頂層數量 ＋ 底層數量）× 層數 ÷ 2"
      ],
      "conceptCompare": "【算層數要小心】如果題目沒直接說「共 8 層」，只說從 5 根排到 12 根、每層多 1 根，層數是 12 － 5 ＋ 1 ＝ 8 層（記得加 1）。",
      "examVariations": "段考常換成演奏廳座位每排多 2 個座位，或從 1 加到 20 的連加計算。"
    },
    "check": {
      "expr": "(5 + 12) * 8 / 2",
      "expect": "68"
    }
  },
  {
    "id": "U08-S4-B-016",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-4 複合圖形與等底等高",
    "section": "8-4",
    "sectionName": "複合圖形與等底等高",
    "category": "長方形挖去三角形之填補減法複合圖形",
    "level": 4,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖的造型看板，原本是一塊長 22 公分、寬 14 公分的長方形木板，從右邊剪去一個底 14 公分、高 6 公分的三角形凹槽。剩下的看板面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,38 280,38 220,93 280,148 70,148\" fill=\"rgba(59,130,246,0.14)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"280\" y1=\"38\" x2=\"280\" y2=\"148\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><line x1=\"220\" y1=\"93\" x2=\"280\" y2=\"93\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><polyline points=\"270,93 270,83 280,83\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><text x=\"38\" y=\"96\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">14 公分</text><text x=\"175\" y=\"170\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">22 公分</text><text x=\"254\" y=\"76\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#334155\">6 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "350 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "B",
        "text": "224 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "242 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "D",
        "text": "266 平方公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生運用「填補法（大圖形減去挖空部分）」解決複合圖形面積問題。",
      "steps": [
        {
          "type": "text",
          "text": "先算出完整大長方形的面積（22 × 14），再減去右邊被剪掉的白色三角形面積（14 × 6 ÷ 2）。"
        },
        {
          "type": "svg",
          "caption": "填補法示意：完整長方形 308 平方公分減去右邊紅色虛線三角形 42 平方公分",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"38\" width=\"210\" height=\"110\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"280,38 220,93 280,148\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"220\" y1=\"93\" x2=\"280\" y2=\"93\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"4,3\"/><polyline points=\"270,93 270,83 280,83\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"145\" y=\"96\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1d4ed8\">長方形 22 × 14 ＝ 308</text><text x=\"316\" y=\"96\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">底 14</text><text x=\"252\" y=\"76\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 6</text><text x=\"175\" y=\"170\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">總面積 308 － 挖掉三角形 42 ＝ 266</text></svg>"
        },
        {
          "type": "eq",
          "expr": "22 × 14 ＝ 308"
        },
        {
          "type": "eq",
          "expr": "14 × 6 ÷ 2 ＝ 42"
        },
        {
          "type": "eq",
          "expr": "308 － 42 ＝ 266"
        },
        {
          "type": "answer",
          "text": "答：266 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【加減法錯置】凹槽是被剪去的空白部分，卻把長方形和三角形面積相加 308 ＋ 42 ＝ 350。",
        "B": "【三角形忘記除以 2】算減去的三角形時只算 14 × 6 ＝ 84，得出 308 － 84 ＝ 224。",
        "C": "【底邊看錯】誤把長方形的長 22 公分當成凹槽三角形的底，算成 308 － 22 × 6 ÷ 2 ＝ 242。"
      },
      "figureNote": "右邊白色三角形是被剪掉的凹槽，它的底是長方形的寬 14 公分、高是往內凹入的 6 公分。",
      "insight": "遇到有凹槽或缺角的圖形時，「先補滿整個大圖形再扣掉空白」通常比拆成好幾塊梯形更快。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "填補法：複合圖形面積 ＝ 完整大圖形面積 － 空白缺角面積"
      ],
      "conceptCompare": "【分割法 vs 填補法】本題也能橫切分成兩個完全一樣的梯形：上底 16、下底 22、高 7，兩個合起來（16 ＋ 22）× 7 ÷ 2 × 2 ＝ 266。",
      "examVariations": "段考常將凹槽改在長方形內部或四角切掉兩個小三角形，解法同樣用大面積減去空白。"
    },
    "check": {
      "expr": "22 * 14 - 14 * 6 / 2",
      "expect": "266"
    }
  },
  {
    "id": "U08-S4-B-017",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-4 複合圖形與等底等高",
    "section": "8-4",
    "sectionName": "複合圖形與等底等高",
    "category": "正方形與三角形相加之分割複合圖形",
    "level": 4,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖的小木屋造型磁磚，下半部是邊長 12 公分的正方形，上半部是一個底為 12 公分、高為 8 公分的三角形屋頂。這塊磁磚的總面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,22 240,76 240,156 120,156 120,76\" fill=\"rgba(251,191,36,0.16)\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"180\" y1=\"22\" x2=\"180\" y2=\"76\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"180,67 189,67 189,76\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><text x=\"216\" y=\"52\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#334155\">高 8 公分</text><text x=\"86\" y=\"118\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">12 公分</text><text x=\"180\" y=\"176\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">12 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "182 平方公分",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "240 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "96 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "D",
        "text": "192 平方公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生運用「分割加法」分別求出三角形屋頂與正方形主體面積再合併。",
      "steps": [
        {
          "type": "text",
          "text": "沿著屋簷把磁磚分成上下兩塊：上面是底 12 公分、高 8 公分的三角形，下面是邊長 12 公分的正方形，兩塊面積相加。"
        },
        {
          "type": "svg",
          "caption": "分割加總：屋頂三角形面積 48 平方公分 ＋ 下半正方形面積 144 平方公分",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,22 240,76 120,76\" fill=\"rgba(251,191,36,0.28)\" stroke=\"#d97706\" stroke-width=\"2\"/><rect x=\"120\" y=\"76\" width=\"120\" height=\"80\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"180\" y1=\"22\" x2=\"180\" y2=\"76\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><polyline points=\"180,67 189,67 189,76\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"286\" y=\"54\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#b45309\">屋頂：12 × 8 ÷ 2 ＝ 48</text><text x=\"180\" y=\"120\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1d4ed8\">正方形：144</text><text x=\"82\" y=\"118\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1d4ed8\">12 公分</text><text x=\"180\" y=\"176\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">總面積：144 ＋ 48 ＝ 192</text></svg>"
        },
        {
          "type": "eq",
          "expr": "12 × 12 ＝ 144"
        },
        {
          "type": "eq",
          "expr": "12 × 8 ÷ 2 ＝ 48"
        },
        {
          "type": "eq",
          "expr": "144 ＋ 48 ＝ 192"
        },
        {
          "type": "answer",
          "text": "答：192 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【三角形忘記除以 2】算屋頂時算成 12 × 8 ＝ 96，總和變成 144 ＋ 96 ＝ 240。",
        "C": "【加誤算成減】把正方形面積減去屋頂面積 144 － 48 ＝ 96，誤以為屋頂是挖空。",
        "A": "【加法進位失誤】算對 144 和 48，但 144 ＋ 48 時個位進十位忘記進 1 而誤算為 182。"
      },
      "figureNote": "虛線把房子切出一個正方形和一個三角形，因為三角形和正方形緊貼，所以三角形的底就是正方形邊長 12 公分。",
      "insight": "拼貼組合的複合圖形先找隱藏的「共用邊」當成新圖形的底或高，再分段相加即可。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "分割法：複合圖形面積 ＝ 上方圖形面積 ＋ 下方圖形面積"
      ],
      "conceptCompare": "【也可從中間直切】若從屋頂頂點往下直切到底部，會變成兩個完全一樣的直角梯形（上底 12、下底 20、高 6），總面積（12 ＋ 20）× 6 ÷ 2 × 2 ＝ 192。",
      "examVariations": "段考常把屋頂三角形與下方矩形合起來，改問「如果總面積是 192，屋頂高是多少？」先扣掉矩形再反推高。"
    },
    "check": {
      "expr": "12 * 12 + 12 * 8 / 2",
      "expect": "192"
    }
  },
  {
    "id": "U08-S4-B-018",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-4 複合圖形與等底等高",
    "section": "8-4",
    "sectionName": "複合圖形與等底等高",
    "category": "十字道路農田平移併攏法",
    "level": 4,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖的長方形農田，總長 30 公尺、總寬 20 公尺，中間開闢了兩條互相垂直、寬度都是 2 公尺的十字小路，其餘部分用來種稻。實際種稻的面積是多少平方公尺？",
    "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"65\" y=\"32\" width=\"230\" height=\"125\" fill=\"rgba(34,197,94,0.20)\" stroke=\"#0f172a\" stroke-width=\"2\"/><rect x=\"165\" y=\"32\" width=\"22\" height=\"125\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><rect x=\"65\" y=\"84\" width=\"230\" height=\"20\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"180\" y=\"22\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">總長 30 公尺</text><text x=\"32\" y=\"98\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">20 公尺</text><text x=\"176\" y=\"174\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#475569\">路寬 2 公尺</text><text x=\"325\" y=\"98\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#475569\">路寬 2</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "500 平方公尺",
        "trapCode": "U08_ROAD_DOUBLE_SUB"
      },
      {
        "key": "B",
        "text": "504 平方公尺",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "496 平方公尺",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "D",
        "text": "560 平方公尺",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生運用「平移併攏法」求十字道路扣除後的實際種植面積，避免交叉重疊處重複扣減。",
      "steps": [
        {
          "type": "text",
          "text": "把兩條小路想像成推到最左邊和最上面，四塊綠色農田就會無縫併攏成一個新的長方形：新長是 30 － 2 ＝ 28 公尺，新寬是 20 － 2 ＝ 18 公尺。"
        },
        {
          "type": "svg",
          "caption": "平移併攏法：把道路推到邊緣後，農田變成 28 公尺 × 18 公尺的完整長方形",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"60\" y=\"32\" width=\"240\" height=\"125\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"1.8\"/><rect x=\"84\" y=\"52\" width=\"216\" height=\"105\" fill=\"rgba(34,197,94,0.28)\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"192\" y=\"22\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">併攏後新長：30 － 2 ＝ 28 公尺</text><text x=\"192\" y=\"108\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#15803d\">28 × 18 ＝ 504 平方公尺</text><text x=\"28\" y=\"105\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#15803d\">新寬 18</text><text x=\"180\" y=\"176\" font-size=\"12\" text-anchor=\"middle\" fill=\"#475569\">或是 600 － 60 － 40 ＋ 4 ＝ 504（加回交叉小正方形 4）</text></svg>"
        },
        {
          "type": "eq",
          "expr": "（30 － 2）×（20 － 2）＝ 28 × 18 ＝ 504"
        },
        {
          "type": "answer",
          "text": "答：504 平方公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【交叉區重複扣減】用 600 － 30 × 2 － 20 × 2 ＝ 500，卻忘記十字交叉那塊 2 × 2 ＝ 4 被扣了兩次。",
        "C": "【應加回卻再扣減】發現交叉塊面積是 4，不但沒加回反而多減一次 4，算成 500 － 4 ＝ 496。",
        "D": "【乘法計算失誤】列式為 28 × 18 正確，但誤把 28 × 20 減 28 × 2 錯算成 560。"
      },
      "figureNote": "只要把四塊綠地往右下靠攏，整片耕地面積就變成單純的長方形（30 － 2）×（20 － 2），不用煩惱交叉點。",
      "insight": "遇到十字路或井字路問題，「平移併攏法」最快也不會算錯；如果硬要用減的，千萬記得把重複扣掉的交叉面積加回來！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平移法：農田面積 ＝（總長 － 路寬）×（總寬 － 路寬）",
        "容斥扣法：總面積 － 橫路 － 直路 ＋ 交叉重疊區"
      ],
      "conceptCompare": "【斜向平行四邊形小路】就算其中一條小路是斜的平行四邊形，只要寬度處處相同，依然可以把兩塊農田水平推在一起併攏計算！",
      "examVariations": "段考常考兩條直路加一條橫路，只要把「總長減去兩條直路寬」再乘「總寬減去橫路寬」即可。"
    },
    "check": {
      "expr": "(30 - 2) * (20 - 2)",
      "expect": "504"
    }
  },
  {
    "id": "U08-S4-B-019",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-4 複合圖形與等底等高",
    "section": "8-4",
    "sectionName": "複合圖形與等底等高",
    "category": "平行線間等高圖形面積比較",
    "level": 4,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖，兩條平行的直線之間夾著一個平行四邊形和一個三角形，平行四邊形的底是 8 公分、高是 10 公分，三角形的底是 16 公分，這兩個圖形的高都等於兩平行線之間的距離。請問三角形的面積是平行四邊形面積的幾倍？",
    "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"42\" x2=\"342\" y2=\"42\" stroke=\"#64748b\" stroke-width=\"1.8\"/><line x1=\"18\" y1=\"145\" x2=\"342\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"1.8\"/><polygon points=\"58,42 122,42 104,145 40,145\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"185,145 313,145 235,42\" fill=\"rgba(34,197,94,0.16)\" stroke=\"#15803d\" stroke-width=\"2\"/><line x1=\"148\" y1=\"42\" x2=\"148\" y2=\"145\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><polyline points=\"148,136 157,136 157,145\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"168\" y=\"98\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#334155\">10 公分</text><text x=\"72\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">底 8 公分</text><text x=\"249\" y=\"168\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#15803d\">底 16 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "2 倍",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "4 倍",
        "trapCode": "U08_SCALE_LINEAR_AREA"
      },
      {
        "key": "C",
        "text": "1 倍",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "3 倍",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生理解「平行線間處處等高」，並能比較等高時平行四邊形與雙倍底長三角形的面積關係。",
      "steps": [
        {
          "type": "text",
          "text": "兩條平行線之間的垂直距離到處都相等，所以三角形的高也是 10 公分。分別算出兩個圖形的面積再相除比較。"
        },
        {
          "type": "svg",
          "caption": "平行線等高比較：兩圖高皆為 10 公分，面積都是 80 平方公分",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"42\" x2=\"342\" y2=\"42\" stroke=\"#64748b\" stroke-width=\"1.8\"/><line x1=\"18\" y1=\"145\" x2=\"342\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"1.8\"/><polygon points=\"58,42 122,42 104,145 40,145\" fill=\"rgba(59,130,246,0.16)\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"185,145 313,145 235,42\" fill=\"rgba(34,197,94,0.16)\" stroke=\"#15803d\" stroke-width=\"2\"/><line x1=\"58\" y1=\"42\" x2=\"58\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><line x1=\"235\" y1=\"42\" x2=\"235\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><polyline points=\"58,136 67,136 67,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><polyline points=\"235,136 244,136 244,145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><text x=\"180\" y=\"25\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">平行線間高相等（皆 10 公分）</text><text x=\"82\" y=\"98\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#1d4ed8\">面積 80</text><text x=\"264\" y=\"110\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#15803d\">面積 80</text><text x=\"72\" y=\"168\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#2563eb\">底 8</text><text x=\"249\" y=\"168\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#15803d\">底 16</text></svg>"
        },
        {
          "type": "eq",
          "expr": "8 × 10 ＝ 80"
        },
        {
          "type": "eq",
          "expr": "16 × 10 ÷ 2 ＝ 80"
        },
        {
          "type": "eq",
          "expr": "80 ÷ 80 ＝ 1"
        },
        {
          "type": "answer",
          "text": "答：1 倍"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記三角形要除以 2】只看到三角形的底 16 是平行四邊形底 8 的 2 倍，卻忘記三角形面積必須除以 2。",
        "B": "【倍數重複相乘】誤把底變 2 倍乘以 2 而算出 4 倍。",
        "D": "【倍數估算錯誤】沒有實際算出兩個面積就猜測為 3 倍。"
      },
      "figureNote": "紅色虛線代表兩平行線間的高都是 10 公分；三角形雖然底長 2 倍，但計算時還要除以 2，所以剛好一樣大。",
      "insight": "當三角形與平行四邊形「等高」時，只要三角形的底剛好是平行四邊形底的 2 倍，兩者面積就會完全相等。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平行線之間處處垂直距離相等（等高）",
        "等高時，三角形面積 ＝ 平行四邊形面積 ⟺ 三角形的底 ＝ 平行四邊形底 × 2"
      ],
      "conceptCompare": "【等底等高 vs 面積相等】若同在平行線間且底相等，三角形是平行四邊形的一半；想讓兩者面積相等，三角形的底就要加倍，或讓梯形的「上底 ＋ 下底」等於平行四邊形的「底 × 2」。",
      "examVariations": "段考常再加入一個上底 6、下底 10 的梯形放在同一組平行線間，因為（6 ＋ 10）÷ 2 ＝ 8，三個圖形面積竟然全部一樣大！"
    },
    "check": {
      "expr": "(16 * 10 / 2) / (8 * 10)",
      "expect": "1"
    }
  },
  {
    "id": "U08-S4-B-020",
    "unitId": "U08",
    "batch": "課本原型題",
    "source": "康軒五上 數學課本 U08 8-4 複合圖形與等底等高",
    "section": "8-4",
    "sectionName": "複合圖形與等底等高",
    "category": "梯形扣除內部三角形之複合圖形",
    "level": 4,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖，有一塊上底 16 公尺、下底 24 公尺、高 12 公尺的梯形公園，公園內規劃了一座底 10 公尺、高 8 公尺的三角形水池，其餘鋪設地磚。鋪設地磚的面積是多少平方公尺？",
    "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"95,38 265,38 305,152 55,152\" fill=\"rgba(251,191,36,0.18)\" stroke=\"#0f172a\" stroke-width=\"2\"/><polygon points=\"130,136 225,136 175,68\" fill=\"rgba(56,189,248,0.34)\" stroke=\"#0284c7\" stroke-width=\"2\"/><line x1=\"105\" y1=\"38\" x2=\"105\" y2=\"152\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><polyline points=\"105,142 115,142 115,152\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.6\"/><line x1=\"175\" y1=\"68\" x2=\"175\" y2=\"136\" stroke=\"#0369a1\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><polyline points=\"175,128 183,128 183,136\" fill=\"none\" stroke=\"#0369a1\" stroke-width=\"1.5\"/><text x=\"180\" y=\"26\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">上底 16 公尺</text><text x=\"180\" y=\"174\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">下底 24 公尺</text><text x=\"72\" y=\"98\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#334155\">高 12</text><text x=\"204\" y=\"110\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0369a1\">高 8</text><text x=\"176\" y=\"150\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0369a1\">底 10</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "280 平方公尺",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "B",
        "text": "160 平方公尺",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "104 平方公尺",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "D",
        "text": "200 平方公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生結合梯形與三角形公式，計算「外部大梯形減去內部空白三角形」的鋪設面積。",
      "steps": [
        {
          "type": "text",
          "text": "先算出整個梯形公園的面積，再扣掉中間藍色三角形水池的面積，剩下的就是地磚面積。"
        },
        {
          "type": "svg",
          "caption": "扣除法示意：大梯形面積 240 平方公尺減去內部水池 40 平方公尺，得 200 平方公尺",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"95,38 265,38 305,152 55,152\" fill=\"rgba(251,191,36,0.22)\" stroke=\"#b45309\" stroke-width=\"2\"/><polygon points=\"130,136 225,136 175,68\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><line x1=\"95\" y1=\"38\" x2=\"95\" y2=\"152\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"5,4\"/><polyline points=\"95,142 105,142 105,152\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><line x1=\"175\" y1=\"68\" x2=\"175\" y2=\"136\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-dasharray=\"4,3\"/><polyline points=\"175,128 183,128 183,136\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><text x=\"180\" y=\"25\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#b45309\">梯形：（16 ＋ 24）× 12 ÷ 2 ＝ 240</text><text x=\"64\" y=\"98\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#dc2626\">高 12</text><text x=\"212\" y=\"108\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0369a1\">水池 40</text><text x=\"180\" y=\"174\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#0f172a\">地磚面積：240 － 40 ＝ 200 平方公尺</text></svg>"
        },
        {
          "type": "eq",
          "expr": "（16 ＋ 24）× 12 ÷ 2 ＝ 40 × 12 ÷ 2 ＝ 240"
        },
        {
          "type": "eq",
          "expr": "10 × 8 ÷ 2 ＝ 40"
        },
        {
          "type": "eq",
          "expr": "240 － 40 ＝ 200"
        },
        {
          "type": "answer",
          "text": "答：200 平方公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【加減法錯置】把梯形和水池兩個面積加起來 240 ＋ 40 ＝ 280，沒有扣除水池。",
        "B": "【三角形忘記除以 2】算水池面積時忘記除以 2 算成 80，得出 240 － 80 ＝ 160。",
        "C": "【梯形漏加上底】算梯形公園時漏加上底 16 公尺，只算 24 × 12 ÷ 2 ＝ 144，再減 40 得 104。"
      },
      "figureNote": "大梯形包住內部的小三角形水池，把水池想像成挖空的區域，用大面積減小面積即可。",
      "insight": "碰到圖形內部有挖空水池、花圃或通道時，先把兩個圖形分開算對公式，最後再相減就不會混亂。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "挖空區域面積 ＝ 外部完整圖形面積 － 內部空白圖形面積"
      ],
      "conceptCompare": "【挖空減法 vs 貼合加法】圖形接在外面一起算總面積要用「加」；圖形包在裡面挖掉或留白要用「減」。",
      "examVariations": "段考常考「每平方公尺地磚費用 500 元」，算出 200 平方公尺後再乘以單價 500 元。"
    },
    "check": {
      "expr": "(16 + 24) * 12 / 2 - 10 * 8 / 2",
      "expect": "200"
    }
  },
  {
    "id": "U08-S1-O-001",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "平行四邊形的面積",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L3 平行四邊形雙底雙高反推與單位換算",
    "category": "平行四邊形雙底雙高反推與單位換算",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "木工師傅裁了一塊平行四邊形木板，其中一組底邊長 2.4 公尺，這條底邊上的高是 150 公分。如果改以另一組長度為 180 公分的邊當作底邊，那麼這條底邊對應的高是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "200 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "20 公分",
        "trapCode": "U08_UNIT_MIX_CM_M"
      },
      {
        "key": "C",
        "text": "112.5 公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "D",
        "text": "100 公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否理解「同一個平行四邊形不管選擇哪一組『底 × 高』，算出的面積都相同」，並正確完成公尺與公分的單位換算後反推另一組高。",
      "steps": [
        {
          "type": "text",
          "text": "先把單位統一成公分：2.4 公尺 ＝ 240 公分。再以「240 公分為底、150 公分為高」算出木板的總面積。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 195\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"95,35 335,35 280,150 40,150\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.5\"/><line x1=\"125\" y1=\"35\" x2=\"125\" y2=\"150\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><rect x=\"125\" y=\"138\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><line x1=\"95\" y1=\"35\" x2=\"215\" y2=\"95\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><text x=\"160\" y=\"174\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">底邊一：240 公分（2.4 公尺）</text><text x=\"132\" y=\"96\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">高一：150 公分</text><text x=\"322\" y=\"102\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">底邊二：180 公分</text><text x=\"188\" y=\"64\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">高二：？</text></svg>",
          "caption": "圖解：同一塊平行四邊形木板，兩組「底 × 高」算出來的面積完全相等"
        },
        {
          "type": "eq",
          "expr": "2.4 公尺 ＝ 240 公分"
        },
        {
          "type": "eq",
          "expr": "240 × 150 ＝ 36000"
        },
        {
          "type": "text",
          "text": "同一塊木板的面積都是 36000 平方公分，改以 180 公分當底邊時，用總面積除以 180 就是對應的高。"
        },
        {
          "type": "eq",
          "expr": "36000 ÷ 180 ＝ 200"
        },
        {
          "type": "answer",
          "text": "答：200 公分"
        }
      ],
      "distractorAnalysis": {
        "C": "【底與高配錯組】把兩組底邊與高錯配，拿 180 公分去乘 150 公分再除以 240 公分，錯算出 112.5 公分。",
        "D": "【錯套三角形公式】算出平行四邊形面積 36000 平方公分後，誤以為要除以 2 再除以底邊 180 公分，錯算成 100 公分。",
        "B": "【公尺換算公分失誤】誤把 2.4 公尺換算成 24 公分，算成 24 × 150 ÷ 180 ＝ 20 公分（正確應為 2.4 公尺 ＝ 240 公分）。"
      },
      "figureNote": "畫出平行四邊形的兩組底與高，藍色高垂直於 240 公分的水平底邊，紅色高垂直於 180 公分的斜側底邊，兩組乘積都等於木板面積。",
      "insight": "同一塊平行四邊形只有一個面積！記住「底一 × 高一 ＝ 底二 × 高二」，先算已知組的面積，再反除另一條底邊就秒殺！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平行四邊形同面積等式：底一 × 高一 ＝ 底二 × 高二",
        "長度單位換算：1 公尺 ＝ 100 公分"
      ],
      "conceptCompare": "【哪條高配哪條底？】高一定要和它所對應的底邊「互相垂直」，不可把鄰邊的長當成高，也不可把不同組的底和高直接相乘。",
      "examVariations": "進階考題常給「兩個高分別是 12 公分和 18 公分，且周長為 100 公分」，利用同面積關係先推出兩邊比例再求面積。"
    },
    "check": {
      "expr": "2.4 * 100 * 150 / 180",
      "expect": "200"
    }
  },
  {
    "id": "U08-S1-O-002",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "平行四邊形的面積",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L3 等底等高平行四邊形重疊去重",
    "category": "等底等高平行四邊形重疊去重",
    "level": 3,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，兩條互相平行的直線之間夾著平行四邊形 ABCD 與平行四邊形 ABEF（共用底邊 線段 AB ＝ 20 公分），兩平行線之間的垂直距離是 12 公分。如果兩個平行四邊形中間重疊的三角形 △ABG 面積是 80 平方公分，請問左右兩塊「沒有重疊」的鋪色區域（四邊形 ADCG 與四邊形 BGFE）合起來面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"15\" y1=\"36\" x2=\"445\" y2=\"36\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/><line x1=\"15\" y1=\"146\" x2=\"445\" y2=\"146\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/><polygon points=\"35,36 165,36 205,146 75,146\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><polygon points=\"235,36 365,36 205,146 75,146\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><polygon points=\"75,146 205,146 181,79\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"32\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 D</text><text x=\"165\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"235\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 F</text><text x=\"368\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 E</text><text x=\"68\" y=\"168\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"212\" y=\"168\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"140\" y=\"168\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">20 公分</text><text x=\"172\" y=\"70\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">點 G</text><text x=\"160\" y=\"128\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">重疊 80</text><line x1=\"405\" y1=\"36\" x2=\"405\" y2=\"146\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"412\" y=\"95\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">高 12</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "400 平方公分",
        "trapCode": "U08_ROAD_DOUBLE_SUB"
      },
      {
        "key": "B",
        "text": "160 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "C",
        "text": "320 平方公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "340 平方公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否理解「平行線之間同底等高的平行四邊形面積相等」，並分辨「兩塊合起來的聯集面積」與「扣除重疊後左右兩側非重疊面積總和」的差異。",
      "steps": [
        {
          "type": "text",
          "text": "平行四邊形 ABCD 與 ABEF 共用底邊 線段 AB ＝ 20 公分，而且夾在同兩條平行線之間，所以高都是 12 公分，兩者面積完全相等。"
        },
        {
          "type": "eq",
          "expr": "20 × 12 ＝ 240"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,28 165,28 205,134 75,134\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><polygon points=\"235,28 365,28 205,134 75,134\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><polygon points=\"75,134 205,134 181,70\" fill=\"#ffffff\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"108\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#92400e\">240 − 80</text><text x=\"275\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1e40af\">240 − 80</text><text x=\"158\" y=\"118\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">挖空 80</text><text x=\"230\" y=\"158\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">兩塊平行四邊形各扣 1 次重疊 80，合起來共扣 2 次</text></svg>",
          "caption": "圖解：把重疊的灰色 △ABG（80）挖空，黃色與藍色各有 240 − 80 ＝ 160 平方公分"
        },
        {
          "type": "text",
          "text": "左邊黃色區域是 ABCD 扣掉 △ABG，右邊藍色區域是 ABEF 扣掉 △ABG，兩塊面積相等且都要扣除重疊的 80 平方公分。"
        },
        {
          "type": "eq",
          "expr": "（240 − 80） × 2 ＝ 160 × 2 ＝ 320"
        },
        {
          "type": "answer",
          "text": "答：320 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【重疊部分只扣了一次】算出兩個平行四邊形總面積 480 後，只扣掉 1 次重疊的 80（算成兩塊聯集的總面積），忘記兩邊的非重疊區都要各自扣掉 △ABG。",
        "B": "【只算單側面積】算出其中一塊平行四邊形減去重疊區為 240 − 80 ＝ 160 平方公分後就當成答案，忘記題目要求「左右兩塊」合起來。",
        "D": "【減法計算失誤】計算 240 − 80 時錯算成 170，導致兩塊相加得出 170 × 2 ＝ 340 平方公分。"
      },
      "figureNote": "在兩條平行線間，所有共用 線段 AB 的平行四邊形面積都相等；挖掉中間共同的 △ABG 後，剩下的兩片翼形面積也必定相等。",
      "insight": "記住「等底等高面積相等」！而且問「非重疊部分」時，重疊處被挖空了兩次（兩邊各少一塊），別和「總覆蓋面積（只扣 1 次）」搞混囉！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "左右兩塊非重疊區域面積和 ＝ 兩圖形面積和 − 2 × 重疊面積",
        "總覆蓋面積（聯集）＝ 兩圖形面積和 − 1 × 重疊面積"
      ],
      "conceptCompare": "【扣 1 次 vs 扣 2 次】求「鋪在地上的總面積」時，重疊處只需扣 1 次；求「沒被重疊蓋到的區域總和」時，兩張紙各自都有一塊被蓋住，所以要扣 2 次！",
      "examVariations": "若題目改給「左邊四邊形 ADCG 面積是 155 平方公分」，因為等積變形，右邊四邊形 BGFE 也必然是 155 平方公分，可直接反推重疊區大小。"
    },
    "check": {
      "expr": "(20 * 12 - 80) * 2",
      "expect": "320"
    }
  },
  {
    "id": "U08-S2-O-003",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "三角形的面積",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L4 鈍角三角形外部高與等面積反推",
    "category": "鈍角三角形外部高與等面積反推",
    "level": 4,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，鈍角三角形 △ABC 中，底邊 線段 BC 長 14 公分。從頂點 A 向底邊 線段 BC 的延長線作垂直線交於點 H，量得外部高 線段 AH 長 15 公分，延長出去的線段 線段 CH 長 7 公分。如果有另一個「直角三角形」與 △ABC 的面積相等，且這個直角三角形的底邊長 21 公分，請問這個直角三角形的高是多少公分？",
    "svg": "<svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"65,142 205,142 275,36\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2.5\"/><line x1=\"205\" y1=\"142\" x2=\"275\" y2=\"142\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"275\" y1=\"36\" x2=\"275\" y2=\"142\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><rect x=\"263\" y=\"130\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"275\" y=\"25\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"58\" y=\"164\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"205\" y=\"164\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"284\" y=\"164\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 H</text><text x=\"135\" y=\"164\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1d4ed8\">14 公分</text><text x=\"242\" y=\"164\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">7 公分</text><text x=\"285\" y=\"92\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">外部高 15 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "10 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "15 公分",
        "trapCode": "U08_OBTUSE_HEIGHT_MISSED"
      },
      {
        "key": "C",
        "text": "5 公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "D",
        "text": "20 公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生在處理鈍角三角形的「外部高」時，是否清楚底邊仍只有原來的線段 BC（不可把延長線 CH 計入底邊），並能運用等面積概念反推另一個三角形的高。",
      "steps": [
        {
          "type": "text",
          "text": "計算鈍角三角形 △ABC 的面積時，延長線段 線段 CH 只是為了讓高垂直落下來，真正的底邊仍然是 線段 BC ＝ 14 公分，高是外部高 線段 AH ＝ 15 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"28,132 138,132 193,32\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><line x1=\"138\" y1=\"132\" x2=\"193\" y2=\"132\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><line x1=\"193\" y1=\"32\" x2=\"193\" y2=\"132\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><text x=\"83\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">真底邊 14</text><text x=\"168\" y=\"154\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#94a3b8\">延長 7 不算底</text><text x=\"199\" y=\"84\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">高 15</text><text x=\"250\" y=\"88\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#334155\">＝</text><polygon points=\"300,132 440,132 300,52\" fill=\"#dcfce7\" stroke=\"#15803d\" stroke-width=\"2\"/><rect x=\"300\" y=\"120\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"1.8\"/><text x=\"370\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">直角三角形底 21</text><text x=\"295\" y=\"92\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">高？</text></svg>",
          "caption": "圖解：左邊鈍角三角形（底 14、高 15）面積 105，與右邊直角三角形（底 21）面積相等"
        },
        {
          "type": "eq",
          "expr": "14 × 15 ÷ 2 ＝ 105"
        },
        {
          "type": "text",
          "text": "直角三角形的面積也是 105 平方公分。因為三角形面積 ＝ 底 × 高 ÷ 2，反推高時要先將面積乘以 2，再除以底邊 21 公分。"
        },
        {
          "type": "eq",
          "expr": "105 × 2 ÷ 21 ＝ 210 ÷ 21 ＝ 10"
        },
        {
          "type": "answer",
          "text": "答：10 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【鈍角外部延長線誤併入底邊】誤把延長線段 CH ＝ 7 公分也算進底邊長度，將底邊錯算成 14 ＋ 7 ＝ 21 公分，導致算出的高變成 15 公分。",
        "C": "【反推三角形的高忘記先乘以 2】算出 △ABC 面積是 105 平方公分後，直接拿 105 ÷ 21 ＝ 5 公分，忘記三角形面積反推時必須先乘以 2。",
        "D": "【前期忘記除以 2】計算 △ABC 面積時算成 14 × 15 ＝ 210（忘記除以 2），接著又反推 210 × 2 ÷ 21 ＝ 20 公分。"
      },
      "figureNote": "虛線延長段 線段 CH ＝ 7 公分只是「高」的輔助著陸跑道，不屬於 △ABC 的底邊；反推另一個直角三角形的高時，別忘了先把面積還原成 2 倍。",
      "insight": "外部高的「延長線」是考卷最愛放的煙霧彈！找底邊只看塗色三角形本身的那條邊；反推三角形底或高時，一定要先「面積 × 2」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "三角形面積 ＝ 真實底邊 × 對應高 ÷ 2",
        "反推三角形的高 ＝ 面積 × 2 ÷ 底邊"
      ],
      "conceptCompare": "【外部高 vs 延長線】作外部高時，把底邊延長只是為了標示垂直距離，「延長出去的那一段」絕對不能加進三角形的底邊長度。",
      "examVariations": "有時會考在「平行四邊形」的外部高，一樣只看平行四邊形原本的底邊長，不加延長段，且平行四邊形不須除以 2。"
    },
    "check": {
      "expr": "(14 * 15 / 2) * 2 / 21",
      "expect": "10"
    }
  },
  {
    "id": "U08-S2-O-004",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "三角形的面積",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L4 梯形對角線蝴蝶模型等積變形",
    "category": "梯形對角線蝴蝶模型等積變形",
    "level": 4,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，梯形 ABCD 的上底 線段 AD 與下底 線段 BC 互相平行，兩條對角線 線段 AC 與 線段 BD 相交於點 O。已知 △ABD 的面積是 30 平方公分，下方 △BOC 的面積是 27 平方公分，且左邊翅膀 △AOB 的面積是 18 平方公分。請問整個梯形 ABCD 的面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"150,35 280,35 350,150 110,150\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2.5\"/><polygon points=\"150,35 110,150 220,86\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.8\"/><polygon points=\"280,35 350,150 220,86\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.8\"/><line x1=\"150\" y1=\"35\" x2=\"350\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2\"/><line x1=\"280\" y1=\"35\" x2=\"110\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"142\" y=\"25\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"288\" y=\"25\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 D</text><text x=\"100\" y=\"170\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"360\" y=\"170\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"220\" y=\"72\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">點 O</text><text x=\"160\" y=\"96\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">18</text><text x=\"226\" y=\"132\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1d4ed8\">27</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "57 平方公分",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "B",
        "text": "75 平方公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "93 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "D",
        "text": "65 平方公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否掌握梯形內的「蝴蝶模型（等積變形）」：利用同底等高推出左右兩隻蝴蝶翅膀 △AOB 與 △DOC 面積相等，進而拼出完整梯形面積。",
      "steps": [
        {
          "type": "text",
          "text": "先看底邊為 線段 BC 的兩個三角形：△ABC 和 △DBC 在平行線之間，同底等高所以面積相等。兩者同時扣掉底下共同的 △BOC，就能知道左右兩隻蝴蝶翅膀面積相等：△DOC ＝ △AOB ＝ 18 平方公分！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"45,30 165,30 220,140 15,140\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"45,30 15,140 220,140\" fill=\"#bfdbfe\" fill-opacity=\"0.7\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"115\" y=\"158\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\">△ABC（含左翼與下底）</text><text x=\"240\" y=\"90\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#334155\">＝</text><polygon points=\"275,30 395,30 450,140 245,140\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"395,30 245,140 450,140\" fill=\"#fde68a\" fill-opacity=\"0.7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"345\" y=\"158\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#92400e\">△DBC（含右翼與下底）</text></svg>",
          "caption": "圖解：△ABC 與 △DBC 同底等高面積相等，同時減去下方的 △BOC，左右蝴蝶翅膀就一樣大"
        },
        {
          "type": "text",
          "text": "接著用 △ABD 的面積減去左邊翅膀 △AOB，就能求出上方 △AOD 的面積；再把梯形四塊面積全部加起來（或者直接用 △ABD 加上 △ABC）。"
        },
        {
          "type": "eq",
          "expr": "30 − 18 ＝ 12"
        },
        {
          "type": "eq",
          "expr": "12 ＋ 18 ＋ 18 ＋ 27 ＝ 75"
        },
        {
          "type": "answer",
          "text": "答：75 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【漏算右邊蝴蝶翅膀】誤以為梯形只由已知的 △ABD（30）和 △BOC（27）拼成，直接算 30 ＋ 27 ＝ 57，漏掉了右邊翅膀 △DOC。",
        "D": "【加總計算失誤】算出四塊分別為 12、18、18、27 後，加總時十位進位失誤錯算成 65 平方公分。",
        "C": "【重複計算 △AOB】沒有發現 △AOB 已經包含在 △ABD（30）裡面，直接把 30 ＋ 18 ＋ 18 ＋ 27 ＝ 93 全加起來。"
      },
      "figureNote": "在任何上底與下底平行的梯形裡，兩條對角線切出的左右兩塊三角形 △AOB 與 △DOC 就像對稱的蝴蝶翅膀，面積永遠相等！",
      "insight": "看到梯形畫出兩條對角線，立刻聯想「蝴蝶翅膀相等」！知道一隻翅膀 18，另一隻也馬上填上 18，四塊瞬間湊齊！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "梯形蝴蝶等積性質：△AOB 的面積 ＝ △DOC 的面積",
        "梯形總面積 ＝ △AOD ＋ △AOB ＋ △DOC ＋ △BOC"
      ],
      "conceptCompare": "【翅膀相等 vs 上下相等】在平行線梯形裡，左右兩翼（△AOB 與 △DOC）面積永遠相等；上下兩塊（△AOD 與 △BOC）除非是平行四邊形，否則面積不相等。",
      "examVariations": "進階題會額外給「下底是上底的幾倍」，再利用同底比高推出上方 △AOD 與下方 △BOC 的面積！"
    },
    "check": {
      "expr": "30 + 18 + 27",
      "expect": "75"
    }
  },
  {
    "id": "U08-S3-O-005",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-3",
    "sectionName": "梯形的面積",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L5 梯形割補切出平行四邊形反推下底",
    "category": "梯形割補切出平行四邊形反推下底",
    "level": 5,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "有一塊梯形花圃，下底比上底長 14 公尺，高是 12 公尺。園丁沿著斜腰平行的方向，從這塊梯形花圃中切出一個最大的平行四邊形來種玫瑰（這個平行四邊形的底邊就是梯形的上底），剩下的三角形部分則拿來種薰衣草。已知「原本梯形花圃的面積」比「種薰衣草的三角形面積」多 216 平方公尺，請問這塊梯形花圃的下底是多少公尺？",
    "options": [
      {
        "key": "A",
        "text": "18 公尺",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "B",
        "text": "36 公尺",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "39 公尺",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "D",
        "text": "32 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否能利用「圖形分割與差量對應」思考：梯形切成平行四邊形與三角形後，「梯形面積 − 三角形面積」正好就是切出來的平行四邊形面積，進而用五年級算術反推上底與下底。",
      "steps": [
        {
          "type": "text",
          "text": "把梯形花圃切出一個以「上底」為底邊的平行四邊形後，整個梯形就變成「一塊玫瑰平行四邊形 ＋ 一塊薰衣草三角形」。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"85,32 255,32 375,134 45,134\" fill=\"#fce7f3\" stroke=\"#be185d\" stroke-width=\"2\"/><polygon points=\"255,32 375,134 215,134\" fill=\"#ede9fe\" stroke=\"#6d28d9\" stroke-width=\"2\"/><line x1=\"255\" y1=\"32\" x2=\"215\" y2=\"134\" stroke=\"#6d28d9\" stroke-width=\"2.2\"/><line x1=\"125\" y1=\"32\" x2=\"125\" y2=\"134\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"170\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#be185d\">梯形上底（＝平行四邊形底）</text><text x=\"170\" y=\"106\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#9d174d\">玫瑰區：216 平方公尺</text><text x=\"275\" y=\"106\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#5b21b6\">薰衣草</text><text x=\"295\" y=\"156\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#5b21b6\">下底比上底多 14 公尺</text><text x=\"118\" y=\"62\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">高 12</text></svg>",
          "caption": "圖解：梯形減去薰衣草三角形，剩下的 216 平方公尺就是左邊玫瑰平行四邊形的面積"
        },
        {
          "type": "text",
          "text": "題目說「原本梯形面積 − 薰衣草三角形面積 ＝ 216 平方公尺」，這正好就是玫瑰平行四邊形的面積！用面積除以高 12 公尺，就能算出梯形上底。"
        },
        {
          "type": "eq",
          "expr": "216 ÷ 12 ＝ 18"
        },
        {
          "type": "text",
          "text": "梯形上底是 18 公尺，因為下底比上底長 14 公尺，把上底加上 14 公尺就是下底的長度。"
        },
        {
          "type": "eq",
          "expr": "18 ＋ 14 ＝ 32"
        },
        {
          "type": "answer",
          "text": "答：32 公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【只求出上底就當答案】算出平行四邊形的底（也就是梯形上底 18 公尺）後就停下來，忘記題目問的是「下底」（18 ＋ 14 ＝ 32 公尺）。",
        "C": "【算三角形面積忘記除以 2】求種薰衣草的三角形面積時算成 14 × 12 ＝ 168（忘記除以 2），導致錯算梯形面積為 384，進而反推出下底 39 公尺。",
        "B": "【除法計算失誤】計算 216 ÷ 12 時誤算成 22，再加 14 後得出錯誤下底 36 公尺。"
      },
      "figureNote": "從梯形上底頂點沿另一腰平行切一刀，左邊切出平行四邊形（底＝上底），右邊剩三角形（底＝下底−上底），兩塊的面積差題目都不用求全就能搞定！",
      "insight": "「全體 − 部分 ＝ 另一部分」！遇到「梯形面積減去剩餘三角形面積」的敘述，馬上反應這就是切出來的平行四邊形面積，直接除高求上底！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "梯形切平行四邊形：平行四邊形面積 ＝ 梯形面積 − 剩餘三角形面積",
        "梯形上底 ＝ 平行四邊形面積 ÷ 梯形的高"
      ],
      "conceptCompare": "【割補法 vs 硬算上下底和】這題不用知道總面積是多少，因為「差值 216」剛好就是左半塊平行四邊形的面積；知道面積和 12 公尺高就能秒殺上底！",
      "examVariations": "另一種考法會直接給「平行四邊形比三角形大 132 平方公尺」且「上底 18、下底 32」，反過來求梯形的高是多少！"
    },
    "check": {
      "expr": "216 / 12 + 14",
      "expect": "32"
    }
  },
  {
    "id": "U08-S3-O-006",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-3",
    "sectionName": "梯形的面積",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L5 靠牆直角梯形籬笆與梯形面積",
    "category": "靠牆直角梯形籬笆與梯形面積",
    "level": 5,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "王伯伯用總長 52 公尺的籬笆，靠著一面筆直的磚牆圍成一個直角梯形菜園（磚牆剛好當作梯形垂直的高，這一邊不需圍籬笆，其餘三邊為上底、下底與斜腰）。已知這個梯形的斜腰長 20 公尺，高是 16 公尺，請問這塊梯形菜園的面積是多少平方公尺？",
    "options": [
      {
        "key": "A",
        "text": "256 平方公尺",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "512 平方公尺",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "320 平方公尺",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "D",
        "text": "416 平方公尺",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否掌握梯形公式的核心概念——計算面積只需要知道「上底與下底的和」，不必分別算出上底和下底各是幾公尺，並懂得從總籬笆長扣除斜腰。",
      "steps": [
        {
          "type": "text",
          "text": "先看籬笆圍了哪三邊：上底 ＋ 下底 ＋ 斜腰 ＝ 52 公尺（磚牆那一邊不用圍籬笆）。把總長減去斜腰 20 公尺，就能直接得到「上底 ＋ 下底」的和！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"65\" y=\"25\" width=\"18\" height=\"130\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/><polygon points=\"83,35 235,35 335,145 83,145\" fill=\"#dcfce7\" stroke=\"#15803d\" stroke-width=\"2.5\"/><rect x=\"83\" y=\"35\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"1.8\"/><rect x=\"83\" y=\"133\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"1.8\"/><text x=\"52\" y=\"92\" text-anchor=\"end\" font-size=\"13\" font-weight=\"800\" fill=\"#334155\">磚牆</text><text x=\"94\" y=\"92\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">高 16 公尺</text><text x=\"160\" y=\"25\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">上底（籬笆）</text><text x=\"205\" y=\"168\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">下底（籬笆）</text><text x=\"300\" y=\"88\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#15803d\">斜腰 20 公尺</text></svg>",
          "caption": "圖解：左邊磚牆當高（16 公尺）不用圍籬笆，綠線三邊合計 52 公尺，扣掉斜腰 20 就是上下底的和"
        },
        {
          "type": "eq",
          "expr": "52 − 20 ＝ 32"
        },
        {
          "type": "text",
          "text": "我們雖然不知道上底和下底各是幾公尺，但「上底 ＋ 下底 ＝ 32 公尺」已經足夠代入梯形面積公式了！"
        },
        {
          "type": "eq",
          "expr": "32 × 16 ÷ 2 ＝ 512 ÷ 2 ＝ 256"
        },
        {
          "type": "answer",
          "text": "答：256 平方公尺"
        }
      ],
      "distractorAnalysis": {
        "B": "【梯形公式忘記除以 2】算出「上底＋下底」為 32 公尺後，計算 32 × 16 ＝ 512 平方公尺，忘記除以 2。",
        "C": "【誤將斜腰當成高】正確算出上底＋下底＝ 32 公尺後，誤拿斜腰 20 公尺當高，錯算成 32 × 20 ÷ 2 ＝ 320 平方公尺。",
        "D": "【未先扣除斜腰長】忘記 52 公尺包含斜腰 20 公尺，直接把籬笆全長 52 公尺當作「上底＋下底」，錯算成 52 × 16 ÷ 2 ＝ 416 平方公尺。"
      },
      "figureNote": "靠牆圍梯形時，要先弄清楚「牆壁佔了哪一邊」。這題磚牆是垂直的高，所以籬笆 52 公尺只有「上底＋下底＋斜腰」三邊。",
      "insight": "梯形求面積有一個超強秘訣：「只要知道『上底＋下底』的和就好，完全不需要把上底和下底拆開算！」"
    },
    "extensionStudy": {
      "coreFormulas": [
        "上底 ＋ 下底 ＝ 籬笆全長 − 斜腰長",
        "梯形面積 ＝ （上底 ＋ 下底） × 高 ÷ 2"
      ],
      "conceptCompare": "【靠牆是高 vs 靠牆是底】如果題目改成「磚牆當作下底」，那籬笆就包含「上底＋兩條腰」，考題一定要看清楚牆壁在哪一邊！",
      "examVariations": "變形題常給「梯形面積 256 平方公尺、高 16 公尺、斜腰 20 公尺」，反過來問總共需要多長的籬笆（256 × 2 ÷ 16 ＋ 20 ＝ 52 公尺）。"
    },
    "check": {
      "expr": "(52 - 20) * 16 / 2",
      "expect": "256"
    }
  },
  {
    "id": "U08-S3-O-007",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-3",
    "sectionName": "梯形的面積",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L5 梯形腰中點三角形一半模型",
    "category": "梯形腰中點三角形一半模型",
    "level": 5,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，梯形 ABCD 的上底 線段 AD 長 10 公分，下底 線段 BC 長 18 公分，高是 14 公分。點 E 是右邊腰 線段 CD 的正中點（中點），如果將點 A、點 B、點 E 連接起來形成中間的白色三角形 △ABE，請問左右上下兩塊鋪色三角形（△ADE 與 △BCE）合起來的面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 460 185\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"120,35 250,35 330,145 70,145\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"2.5\"/><polygon points=\"120,35 250,35 290,90\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><polygon points=\"70,145 330,145 290,90\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><line x1=\"120\" y1=\"35\" x2=\"290\" y2=\"90\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"70\" y1=\"145\" x2=\"290\" y2=\"90\" stroke=\"#334155\" stroke-width=\"2\"/><circle cx=\"290\" cy=\"90\" r=\"4\" fill=\"#dc2626\"/><text x=\"115\" y=\"25\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"256\" y=\"25\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 D</text><text x=\"64\" y=\"166\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"336\" y=\"166\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"304\" y=\"94\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">中點 E</text><text x=\"185\" y=\"25\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">10 公分</text><text x=\"200\" y=\"166\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">18 公分</text><line x1=\"395\" y1=\"35\" x2=\"395\" y2=\"145\" stroke=\"#2563eb\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"403\" y=\"94\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">高 14</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "196 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "98 平方公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "88 平方公分",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "126 平方公分",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否認識梯形中的「腰中點一半模型」：當點 E 為腰的中點時，上、下兩個三角形的高恰好都是梯形高的一半，且合起來剛好是整個梯形面積的一半。",
      "steps": [
        {
          "type": "text",
          "text": "點 E 是腰 線段 CD 的正中點，這表示點 E 剛好在整個梯形「一半高度」的位置！因此上方 △ADE 的高與下方 △BCE 的高，都是梯形總高 14 公分的一半（7 公分）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"100,26 230,26 310,138 50,138\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"100,26 230,26 270,82\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\"/><polygon points=\"50,138 310,138 270,82\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"40\" y1=\"82\" x2=\"365\" y2=\"82\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"5,3\"/><line x1=\"270\" y1=\"26\" x2=\"270\" y2=\"82\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"270\" y1=\"82\" x2=\"270\" y2=\"138\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><text x=\"278\" y=\"58\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#2563eb\">上高 7</text><text x=\"278\" y=\"114\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#16a34a\">下高 7</text><text x=\"372\" y=\"86\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">中點平分高度</text></svg>",
          "caption": "圖解：中點 E 把總高 14 公分平分成「上高 7 公分」與「下高 7 公分」"
        },
        {
          "type": "eq",
          "expr": "14 ÷ 2 ＝ 7"
        },
        {
          "type": "text",
          "text": "分別算出上方 △ADE 與下方 △BCE 的面積再相加（也可以先算整個梯形面積 196，再發現兩塊鋪色剛好佔了一半）。"
        },
        {
          "type": "eq",
          "expr": "10 × 7 ÷ 2 ＋ 18 × 7 ÷ 2 ＝ 35 ＋ 63 ＝ 98"
        },
        {
          "type": "answer",
          "text": "答：98 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【三角形公式忘記除以 2】算出兩個鋪色三角形的高都是 7 公分後，算面積時忘記除以 2，錯算成 10 × 7 ＋ 18 × 7 ＝ 196 平方公分。",
        "C": "【加法進位失誤】算出 △ADE ＝ 35 平方公分、△BCE ＝ 63 平方公分後，相加時十位進位漏加 1，錯算成 88 平方公分。",
        "D": "【漏算上底或錯用單底】誤以為鋪色面積可以直接用下底 18 乘以高 14 再除以 2，錯算成 18 × 14 ÷ 2 ＝ 126 平方公分。"
      },
      "figureNote": "點 E 既然在腰的正中間，它距離上底與距離下底就一樣高（各為總高的一半 7 公分）。而且中間白色 △ABE 的面積也剛好是梯形面積的一半（98 平方公分）！",
      "insight": "「梯形一腰的中點＋對側兩頂點」會直接切出梯形的一半模型：中間 △ABE ＝ 上下兩塊之和 ＝ 梯形總面積 ÷ 2！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "梯形腰中點一半模型：△ABE ＝ △ADE ＋ △BCE ＝ 梯形面積 ÷ 2",
        "（上底 ＋ 下底） × （高 ÷ 2） ÷ 2 ＝ 梯形面積 ÷ 2"
      ],
      "conceptCompare": "【中點 vs 任意點】只有當點 E 在「腰的正中點」時，上下兩塊三角形的高才都是梯形高的一半，白色三角形才剛好佔總面積的一半；若不在中點，只能把上下高分別算出來。",
      "examVariations": "奧數常不直接告訴你梯形的上底、下底和高，只給「白色 △ABE 面積是 98 平方公分」，反過來問整個梯形的面積是多少（98 × 2 ＝ 196 平方公分）！"
    },
    "check": {
      "expr": "(10 + 18) * 14 / 2 / 2",
      "expect": "98"
    }
  },
  {
    "id": "U08-S4-O-008",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "複合圖形的面積",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L6 三條交叉與傾斜道路平移去重",
    "category": "三條交叉與傾斜道路平移去重",
    "level": 6,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，社區有一塊長 40 公尺、寬 25 公尺的長方形草地，管理員在草地內部開闢了一條寬 200 公分的橫向長方形步道，以及兩條水平底寬各為 3 公尺的斜向平行四邊形步道。請問扣除這三條步道後，剩下的草地面積是多少平方公尺？",
    "svg": "<svg viewBox=\"0 0 460 195\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"25\" width=\"320\" height=\"135\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2.5\"/><rect x=\"40\" y=\"82\" width=\"320\" height=\"14\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"1.2\"/><polygon points=\"105,25 130,25 165,160 140,160\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"1.2\"/><polygon points=\"225,25 250,25 285,160 260,160\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"200\" y=\"17\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#15803d\">40 公尺</text><text x=\"368\" y=\"96\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#15803d\">25 公尺</text><text x=\"118\" y=\"182\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">路寬 3 公尺</text><text x=\"272\" y=\"182\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">路寬 3 公尺</text><text x=\"16\" y=\"92\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">200</text><text x=\"16\" y=\"106\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "770 平方公尺",
        "trapCode": "U08_ROAD_DOUBLE_SUB"
      },
      {
        "key": "B",
        "text": "170 平方公尺",
        "trapCode": "U08_UNIT_MIX_CM_M"
      },
      {
        "key": "C",
        "text": "758 平方公尺",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "D",
        "text": "782 平方公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否能將多條直路與斜向平行四邊形步道一起「平移合併」，把被切碎的六塊草地瞬間拼成一個完整的大長方形，並避開單位換算陷阱。",
      "steps": [
        {
          "type": "text",
          "text": "先把橫向步道的寬度單位換算成公尺：200 公分 ＝ 2 公尺。接著使用「道路平移法」：把斜向平行四邊形道路往左邊靠齊，橫向長方形道路往上邊靠齊，六塊綠色草地就能無縫合併成一個完整的大長方形！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"25\" width=\"160\" height=\"105\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><rect x=\"35\" y=\"68\" width=\"160\" height=\"12\" fill=\"#e2e8f0\"/><polygon points=\"75,25 90,25 110,130 95,130\" fill=\"#e2e8f0\"/><polygon points=\"130,25 145,25 165,130 150,130\" fill=\"#e2e8f0\"/><text x=\"115\" y=\"152\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">原本被切碎成 6 塊</text><text x=\"225\" y=\"84\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"800\" fill=\"#2563eb\">➔</text><rect x=\"260\" y=\"25\" width=\"165\" height=\"105\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><rect x=\"295\" y=\"40\" width=\"130\" height=\"90\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2.5\"/><text x=\"360\" y=\"82\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#15803d\">長：40 − 3 − 3 ＝ 34</text><text x=\"360\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#15803d\">寬：25 − 2 ＝ 23</text><text x=\"342\" y=\"152\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\">平移合併後：34 × 23</text></svg>",
          "caption": "圖解：斜向平行四邊形草地每層寬度不變，向左推緊後與向上推緊的草地剛好拼成 34 公尺 × 23 公尺的長方形"
        },
        {
          "type": "eq",
          "expr": "200 公分 ＝ 2 公尺"
        },
        {
          "type": "eq",
          "expr": "（40 − 3 × 2） × （25 − 2） ＝ 34 × 23 ＝ 782"
        },
        {
          "type": "answer",
          "text": "答：782 平方公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【重疊交叉處重複扣減】算出草地總面積 1000 後，減去兩條斜道 150 與一條橫道 80，忘記把兩處重疊交叉的小平行四邊形（共 12 平方公尺）加回來。",
        "B": "【公分與公尺換算錯誤】誤把橫向步道寬 200 公分換成 20 公尺，算出剩下長方形寬為 25 − 20 ＝ 5 公尺，錯算成 34 × 5 ＝ 170 平方公尺。",
        "C": "【重疊處加減方向顛倒】應該把重疊扣兩次的地方「加回」12 平方公尺，卻誤以為要「再減一次 12」，錯算出 770 − 12 ＝ 758 平方公尺。"
      },
      "figureNote": "兩條斜向平行四邊形道路只要水平寬度都是 3 公尺，不管傾斜角度怎麼歪，切出來的草地水平寬度總和永遠都會減少 3 ＋ 3 ＝ 6 公尺，向右推就能完全密合！",
      "insight": "看到「多條貫穿草地的路」，不要傻傻一塊一塊扣還要算重疊！直接把路擠到邊界，草地會變成「(總長 − 直斜路寬和) × (總寬 − 橫路寬)」，一步到位不重複！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "道路平移法剩餘面積 ＝ （總長 − 直斜道路總寬） × （總寬 − 橫向道路總寬）",
        "容斥驗算：1000 − 25 × 3 × 2 − 40 × 2 ＋ 3 × 2 × 2 ＝ 782"
      ],
      "conceptCompare": "【平直道路 vs 斜向平行四邊形道路】斜路和直路一樣適用平移法！重點在於確認題目給的「路寬 3 公尺」是否為沿底邊方向的水平寬度（若是水平底邊長 3 公尺，平移後長邊就減 3 公尺）。",
      "examVariations": "若是 L 形轉彎道路（沒有貫穿到對邊），就不能直接用整條平移減法，必須分段拆解或用「大面積減去道路面積」。"
    },
    "check": {
      "expr": "(40 - 3 * 2) * (25 - 200 / 100)",
      "expect": "782"
    }
  },
  {
    "id": "U08-S4-O-009",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "複合圖形的面積",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L6 平行四邊形內任意點一半模型與和差問題",
    "category": "平行四邊形內任意點一半模型與和差問題",
    "level": 6,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "在平行四邊形 ABCD 的內部有一點 P，將點 P 分別與四個頂點 A、B、C、D 連接起來，把平行四邊形分成四個三角形。已知上方 △PAB 的面積是 25 平方公分，下方 △PCD 的面積是 47 平方公分，且右邊 △PBC 的面積比左邊 △PDA 的面積多 16 平方公分。請問 △PBC 的面積是多少平方公分？",
    "options": [
      {
        "key": "A",
        "text": "36 平方公分",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "28 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "C",
        "text": "88 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "D",
        "text": "44 平方公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否理解平行四邊形內部任意點連接四頂點所構成的「雙一半模型」（相對兩組三角形之和皆等於平行四邊形面積的一半），並結合五年級和差問題求解。",
      "steps": [
        {
          "type": "text",
          "text": "過點 P 作平行於上下底邊與左右兩邊的輔助線，把平行四邊形切成四塊小平行四邊形，每塊小平行四邊形裡都各自有「塗色佔一半、白色佔一半」，所以上下兩塊面積和 ＝ 左右兩塊面積和 ＝ 整個平行四邊形的一半！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 185\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"105,30 355,30 315,150 65,150\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2.5\"/><polygon points=\"105,30 355,30 225,85\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.8\"/><polygon points=\"65,150 315,150 225,85\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.8\"/><line x1=\"87\" y1=\"85\" x2=\"337\" y2=\"85\" stroke=\"#2563eb\" stroke-width=\"1.6\" stroke-dasharray=\"5,3\"/><line x1=\"243\" y1=\"30\" x2=\"203\" y2=\"150\" stroke=\"#2563eb\" stroke-width=\"1.6\" stroke-dasharray=\"5,3\"/><line x1=\"105\" y1=\"30\" x2=\"225\" y2=\"85\" stroke=\"#334155\" stroke-width=\"1.8\"/><line x1=\"355\" y1=\"30\" x2=\"225\" y2=\"85\" stroke=\"#334155\" stroke-width=\"1.8\"/><line x1=\"65\" y1=\"150\" x2=\"225\" y2=\"85\" stroke=\"#334155\" stroke-width=\"1.8\"/><line x1=\"315\" y1=\"150\" x2=\"225\" y2=\"85\" stroke=\"#334155\" stroke-width=\"1.8\"/><text x=\"98\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"362\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"322\" y=\"168\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"58\" y=\"168\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 D</text><text x=\"230\" y=\"54\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#92400e\">25</text><text x=\"195\" y=\"132\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#92400e\">47</text><text x=\"132\" y=\"106\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">△PDA</text><text x=\"288\" y=\"106\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">△PBC</text></svg>",
          "caption": "圖解：過點 P 畫藍色輔助線分成 4 個小平行四邊形，可看出黃色兩塊面積和＝白色兩塊面積和"
        },
        {
          "type": "eq",
          "expr": "25 ＋ 47 ＝ 72"
        },
        {
          "type": "text",
          "text": "因此 △PBC ＋ △PDA ＝ 72 平方公分，又知道 △PBC 比 △PDA 多 16 平方公分，用和差問題求出較大的 △PBC。"
        },
        {
          "type": "eq",
          "expr": "（72 ＋ 16） ÷ 2 ＝ 88 ÷ 2 ＝ 44"
        },
        {
          "type": "answer",
          "text": "答：44 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【和差問題求錯對象】正確算出左右兩塊面積和為 72 後，用（72 − 16）÷ 2 ＝ 28，算成較小的 △PDA，而不是題目問的較大的 △PBC。",
        "C": "【和差公式忘記除以 2】算出（和＋差）＝ 72 ＋ 16 ＝ 88 後，忘記除以 2 就當作 △PBC 的面積。",
        "A": "【忽略面積差條件】算出左右兩塊之和是 72 平方公分後，誤以為左右兩塊一樣大而直接算 72 ÷ 2 ＝ 36 平方公分。"
      },
      "figureNote": "無論點 P 在平行四邊形內的哪個角落，「上＋下」永遠等於「左＋右」，因為點 P 到上下兩底的高相加剛好等於平行四邊形的高！",
      "insight": "看到「長方形或平行四邊形內部任意一點 P 連四個頂點」，馬上背口訣：「上＋下 ＝ 左＋右 ＝ 總面積的一半」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平行四邊形內任意點一半模型：△PAB ＋ △PCD ＝ △PBC ＋ △PDA ＝ 總面積 ÷ 2",
        "和差問題大數 ＝ （兩數和 ＋ 兩數差） ÷ 2"
      ],
      "conceptCompare": "【點 P 在內部 vs 點 P 在外部】點 P 在內部時是「上 ＋ 下 ＝ 左 ＋ 右」；若點 P 跑到平行四邊形外部某一側，就會變成「兩三角形的面積差」等於一半！",
      "examVariations": "若題目不給和差，改給「平行四邊形總面積 160、△PAB ＝ 32、△PBC ＝ 45」，就能直接連環推出 △PCD ＝ 80 − 32 ＝ 48 與 △PDA ＝ 80 − 45 ＝ 35！"
    },
    "check": {
      "expr": "(25 + 47 + 16) / 2",
      "expect": "44"
    }
  },
  {
    "id": "U08-S4-O-010",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "複合圖形的面積",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L6 雙正方形拼接大長方形減三個空白三角形",
    "category": "雙正方形拼接大長方形減三個空白三角形",
    "level": 6,
    "difficulty": 4,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，兩個正方形並排擺放在同一條水平線上，左邊大正方形 ABCD 的邊長是 16 公分，右邊小正方形 CEFG 的邊長是 10 公分（點 B、點 C、點 E 在同一條直線上）。連接 線段 AC、線段 CF 與 線段 AF 形成中間的鋪色三角形 △ACF，請問 △ACF 的面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 460 195\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"28\" width=\"144\" height=\"144\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2.2\"/><rect x=\"214\" y=\"82\" width=\"90\" height=\"90\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2.2\"/><polygon points=\"70,28 214,172 304,82\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"2.5\"/><text x=\"62\" y=\"22\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"218\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 D</text><text x=\"62\" y=\"182\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"214\" y=\"188\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"312\" y=\"188\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 E</text><text x=\"312\" y=\"80\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 F</text><text x=\"206\" y=\"76\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 G</text><text x=\"142\" y=\"188\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">16 公分</text><text x=\"259\" y=\"188\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">10 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "82 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "238 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "C",
        "text": "160 平方公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "140 平方公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生對不規則斜置三角形能否採用「補成大長方形再扣三個周圍直角三角形」的經典割補思維來求解。",
      "steps": [
        {
          "type": "text",
          "text": "△ACF 三條邊都是斜的，沒有現成的水平底和高。我們把右上角補齊，讓整個圖形變成一個「長 16 ＋ 10 ＝ 26 公分、寬 16 公分」的大長方形！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 185\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"75\" y=\"26\" width=\"234\" height=\"144\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\" stroke-dasharray=\"6,3\"/><rect x=\"75\" y=\"26\" width=\"144\" height=\"144\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/><rect x=\"219\" y=\"80\" width=\"90\" height=\"90\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/><polygon points=\"75,26 219,170 309,80\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"2.5\"/><text x=\"115\" y=\"130\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#0369a1\">白 1：128</text><text x=\"275\" y=\"148\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#0369a1\">白 2：50</text><text x=\"235\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#0369a1\">白 3：78</text><text x=\"318\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#0284c7\">高 16−10＝6</text><text x=\"192\" y=\"18\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#0284c7\">大長方形長：16 ＋ 10 ＝ 26</text></svg>",
          "caption": "圖解：補成藍色虛線大長方形（26 × 16 ＝ 416），再扣除周圍三個淺藍色直角三角形"
        },
        {
          "type": "eq",
          "expr": "（16 ＋ 10） × 16 ＝ 26 × 16 ＝ 416"
        },
        {
          "type": "text",
          "text": "分別算出大長方形裡「三個白色直角三角形」的面積，全部減掉就是 △ACF 的面積（白 1 底 16 高 16、白 2 底 10 高 10、白 3 底 26 高 6）。"
        },
        {
          "type": "eq",
          "expr": "416 − （16 × 16 ÷ 2） − （10 × 10 ÷ 2） − （26 × 6 ÷ 2） ＝ 416 − 128 − 50 − 78 ＝ 160"
        },
        {
          "type": "answer",
          "text": "答：160 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【三角形忘記除以 2】將上方補出來的空白直角三角形算成 26 × 6 ＝ 156（忘記除以 2），錯算出 416 − 128 − 50 − 156 ＝ 82 平方公分。",
        "B": "【漏扣右上角補出來的空白區域】把圖形補成 26 × 16 ＝ 416 的大長方形後，只扣掉兩個正方形內部的空白三角形 128 和 50，漏扣掉右上角大長方形補出來的空白直角三角形 78。",
        "D": "【連減計算失誤】計算 416 − 128 − 50 − 78 時，十位借位錯誤而算成 140 平方公分。"
      },
      "figureNote": "右上角補齊後形成的大長方形，剛好把斜放的 △ACF 包在正中間，四周只剩下三個乾乾淨淨的直角三角形！",
      "insight": "遇到「三條邊都斜歪歪、找不到垂直高」的三角形，第一招就是「用大長方形把它框起來」，扣掉周圍三個直角三角形就搞定！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "外框割補法：斜置三角形面積 ＝ 外包大長方形面積 − 周圍三個空白直角三角形面積",
        "外包大長方形長 ＝ 大正方形邊長 ＋ 小正方形邊長"
      ],
      "conceptCompare": "【直接補框 vs 拆成兩塊算】有人會想把 △ACF 切開分別算，但交點不在邊上很難切；用外包長方形一口氣框住，三個直角三角形的底和高通通是已知整數，最穩也最快！",
      "examVariations": "如果把線段 AC 換成連接大正方形左下角的「△BDF」，則會變成更神奇的「對角線平行拉窗簾」題型（面積只跟大正方形有關）！"
    },
    "check": {
      "expr": "(16 + 10) * 16 - (16 * 16 / 2) - (10 * 10 / 2) - ((16 + 10) * (16 - 10) / 2)",
      "expect": "160"
    }
  },
  {
    "id": "U08-RV-O-011",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用與幾何變形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L7 底高倍數伸縮與面積差量反推",
    "category": "底高倍數伸縮與面積差量反推",
    "level": 7,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "有一塊三角形農地，原本的底邊長 16 公尺。為了重新規劃種植區域，農夫將這塊三角形的底邊延長為原來的 3 倍，同時把高縮短為原來的 1/2（變成原來的一半），結果改造後的新三角形面積比原本多了 72 平方公尺。請問這塊三角形農地「原來」的高是多少公尺？",
    "options": [
      {
        "key": "A",
        "text": "9 公尺",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "18 公尺",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "4.5 公尺",
        "trapCode": "U08_SCALE_LINEAR_AREA"
      },
      {
        "key": "D",
        "text": "24 公尺",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否理解三角形底與高同時進行倍數伸縮時，新面積倍率為「底的倍數 × 高的倍數」，並能從面積差值逆推原面積與原來的高度。",
      "steps": [
        {
          "type": "text",
          "text": "把「原三角形面積」當作 1 份。因為底變成 3 倍、高變成 1/2 倍，新三角形面積就會變成原來的「3 × 1/2 ＝ 3/2 倍（也就是 1.5 份）」！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,135 125,135 80,35\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><text x=\"80\" y=\"155\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e40af\">原底 16（1 份面積）</text><text x=\"152\" y=\"92\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#475569\">➔</text><polygon points=\"185,135 445,135 315,85\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"315\" y=\"155\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">新底 3 倍、新高一半（1.5 份面積）</text><text x=\"315\" y=\"54\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">多出來的 0.5 份 ＝ 72 平方公尺</text></svg>",
          "caption": "圖解：底變 3 倍、高變 1/2，面積變成原來的 1.5 倍，多出來的 0.5 倍剛好是 72 平方公尺"
        },
        {
          "type": "eq",
          "expr": "3 × 1/2 − 1 ＝ 1.5 − 1 ＝ 0.5"
        },
        {
          "type": "text",
          "text": "多出來的 0.5 份（一半）剛好等於 72 平方公尺，因此「原三角形面積（1 份）」就是 72 × 2 ＝ 144 平方公尺！最後再反推原來的高。"
        },
        {
          "type": "eq",
          "expr": "72 × 2 ＝ 144"
        },
        {
          "type": "eq",
          "expr": "144 × 2 ÷ 16 ＝ 288 ÷ 16 ＝ 18"
        },
        {
          "type": "answer",
          "text": "答：18 公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【反推三角形的高忘記乘以 2】推出原來面積是 144 平方公尺後，直接拿 144 ÷ 16 ＝ 9 公尺，忘記三角形面積反推高要先乘以 2。",
        "C": "【伸縮倍率相乘錯誤】忽略高縮短為一半的影響，以為面積也直接變成原來的 3 倍、只多了 2 倍，錯算原面積為 72 ÷ 2 ＝ 36，進而推出 36 × 2 ÷ 16 ＝ 4.5 公尺。",
        "D": "【面積差倍率看錯】誤將增加的 72 平方公尺除以 3/8 而非 1/2，錯算出原面積為 192 平方公尺，得到高為 192 × 2 ÷ 16 ＝ 24 公尺。"
      },
      "figureNote": "不需要知道原來的高就能先算出面積倍率：底 3 倍使面積變 3 倍，高 1/2 再把那 3 倍切一半成 1.5 倍，多出的 0.5 倍就是 72 平方公尺！",
      "insight": "「面積倍率 ＝ 底的倍率 × 高的倍率」！算出新舊面積的「份數差」，馬上就能把原面積還原出來！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "伸縮面積倍率 ＝ 底邊倍率 × 高的倍率",
        "原三角形高 ＝ 原面積 × 2 ÷ 原底邊"
      ],
      "conceptCompare": "【倍數相乘 vs 倍數相加】當底放大 3 倍、高縮小為 1/2 時，面積變化是「3 × 1/2 ＝ 1.5 倍」，絕對不是「3 ＋ 1/2」或「3 − 1/2」！",
      "examVariations": "若題目改為「新梯形的上底與下底都變 2 倍、高變 3 倍」，因為上下底都放大 2 倍所以「上下底和」也變 2 倍，面積會變成原來的 2 × 3 ＝ 6 倍！"
    },
    "check": {
      "expr": "72 / (3 * 1 / 2 - 1) * 2 / 16",
      "expect": "18"
    }
  },
  {
    "id": "U08-RV-O-012",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用與幾何變形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L7 雙正方形對角線平行「拉窗簾」等積變形",
    "category": "雙正方形對角線平行「拉窗簾」等積變形",
    "level": 7,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，兩個正方形並排靠在一起，左邊大正方形 ABCD 的邊長是 18 公分，右邊小正方形 CEFG 的邊長是 11 公分（下底邊點 B、點 C、點 E 在同一條水平線上）。連接 線段 BD、線段 DF 與 線段 BF 形成鋪色三角形 △BDF，請問 △BDF 的面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 460 195\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"25\" width=\"144\" height=\"144\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2.2\"/><rect x=\"214\" y=\"81\" width=\"88\" height=\"88\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2.2\"/><polygon points=\"70,169 214,25 302,81\" fill=\"#ddd6fe\" stroke=\"#6d28d9\" stroke-width=\"2.5\"/><text x=\"62\" y=\"22\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"214\" y=\"18\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 D</text><text x=\"62\" y=\"184\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"214\" y=\"188\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"310\" y=\"188\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 E</text><text x=\"310\" y=\"80\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 F</text><text x=\"206\" y=\"76\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 G</text><text x=\"142\" y=\"188\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">18 公分</text><text x=\"258\" y=\"188\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">11 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "162 平方公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "99 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "C",
        "text": "324 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "D",
        "text": "200.5 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否掌握奧數經典的「拉窗簾（平行線間等積變形）」技巧：看出大小正方形的兩條同向對角線互相平行，直接把頂點沿著平行線拉回原點，化繁為簡。",
      "steps": [
        {
          "type": "text",
          "text": "仔細觀察大正方形的對角線 線段 BD，以及小正方形的對角線 線段 CF（從左下往右上都是 45 度斜線），這兩條對角線「互相平行」！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 185\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"75\" y=\"25\" width=\"136\" height=\"136\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.8\"/><rect x=\"211\" y=\"78\" width=\"83\" height=\"83\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.8\"/><polygon points=\"75,161 211,25 211,161\" fill=\"#bfdbfe\" fill-opacity=\"0.7\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"75,161 211,25 294,78\" fill=\"none\" stroke=\"#6d28d9\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"211\" y1=\"161\" x2=\"294\" y2=\"78\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,3\"/><text x=\"298\" y=\"68\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">點 F 沿平行線拉到點 C</text><text x=\"155\" y=\"122\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1e40af\">變成 △BDC</text><text x=\"143\" y=\"176\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">面積＝大正方形的一半</text></svg>",
          "caption": "圖解：線段 BD 與 線段 CF 互相平行，把頂點 F 沿著 線段 CF 拉到點 C，面積不變！"
        },
        {
          "type": "text",
          "text": "把 △BDF 的底邊固定在 線段 BD，將頂點 F 像拉窗簾一樣沿著平行線 線段 CF 滑動到點 C，因為「同底等高」，拉過去後的 △BDC 面積跟原來的 △BDF 完全相等！而 △BDC 剛好就是大正方形面積的一半（小正方形邊長 11 公分完全用不到）。"
        },
        {
          "type": "eq",
          "expr": "18 × 18 ÷ 2 ＝ 324 ÷ 2 ＝ 162"
        },
        {
          "type": "answer",
          "text": "答：162 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【誤拼大底與小邊】隨意拿大正方形邊長 18 公分與小正方形邊長 11 公分相乘再除以 2，錯算成 18 × 11 ÷ 2 ＝ 99 平方公分。",
        "D": "【外框法漏扣右上小三角形】用 29 × 18 補框扣掉左邊 162 與下方 159.5 後，漏扣右上角空白三角形 38.5 平方公分，錯算出 200.5 平方公分。",
        "C": "【正方形對半切忘記除以 2】發現面積等於大正方形的一半後，誤把大正方形整個面積 18 × 18 ＝ 324 當成答案，忘記除以 2。"
      },
      "figureNote": "用大長方形外框減三個直角三角形（522 − 162 − 159.5 − 38.5 ＝ 162）也會算出同樣的結果，但「拉窗簾」一秒就能看出答案竟然跟小正方形邊長無關！",
      "insight": "雙正方形並排時，同方向的兩條對角線必定平行！看到三角形的一條邊剛好是其中一條對角線、第三個頂點在另一條對角線上，立刻「拉窗簾」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "雙正方形拉窗簾：△BDF 面積 ＝ △BDC 面積 ＝ 大正方形面積 ÷ 2",
        "（只與大正方形邊長有關，與右邊小正方形邊長無關）"
      ],
      "conceptCompare": "【△BDF vs △ACF】同樣是雙正方形，上一題 △ACF 因為頂點沒有全落在對角線的平行關係上，要用「大長方形減三三角形」；這一題 △BDF 剛好符合對角線平行，直接拉窗簾秒殺！",
      "examVariations": "考題常故意「不告訴你小正方形的邊長」，只給你大正方形邊長 18 公分，專門考驗學生會不會發現拉窗簾不變性！"
    },
    "check": {
      "expr": "18 * 18 / 2",
      "expect": "162"
    }
  },
  {
    "id": "U08-RV-O-013",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用與幾何變形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L7 周長定值長方形推斜變平行四邊形與單位換算",
    "category": "周長定值長方形推斜變平行四邊形與單位換算",
    "level": 7,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "小傑用一根長 1.2 公尺的鐵絲剛好圍成一個寬 24 公分的長方形邊框，接著用手把這個長方形邊框向右推斜，變成一個平行四邊形。測量後發現，推斜後的平行四邊形面積比原本的長方形少了 216 平方公分。請問推斜後的平行四邊形，以原本長方形的「長邊」當作底邊時，對應的高是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "18 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "27 公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "C",
        "text": "6 公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "D",
        "text": "21 公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生能否結合「周長反推長方形長邊」、「長方形推斜變平行四邊形時底邊不變、高度下降導致面積減少」以及單位換算等三大觀念解題。",
      "steps": [
        {
          "type": "text",
          "text": "先把鐵絲總長換成公分：1.2 公尺 ＝ 120 公分。因為長方形周長包含「兩條長 ＋ 兩條寬」，所以「一條長 ＋ 一條寬」是周長的一半，再扣掉寬 24 公分就得到長邊。"
        },
        {
          "type": "eq",
          "expr": "1.2 公尺 ＝ 120 公分"
        },
        {
          "type": "eq",
          "expr": "120 ÷ 2 − 24 ＝ 60 − 24 ＝ 36"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"32\" width=\"150\" height=\"96\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><text x=\"110\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e40af\">底 36 公分</text><text x=\"110\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1e40af\">高 24（面積 864）</text><text x=\"215\" y=\"84\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#dc2626\">➔</text><polygon points=\"285,56 435,56 395,128 245,128\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"285\" y1=\"56\" x2=\"285\" y2=\"128\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><text x=\"320\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">底仍是 36 公分</text><text x=\"355\" y=\"96\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">新面積 648，高？</text></svg>",
          "caption": "圖解：邊框推斜時周長與底邊 36 公分都沒變，但高度變矮讓面積減少了 216 平方公分"
        },
        {
          "type": "text",
          "text": "原本長方形面積是 36 × 24 ＝ 864 平方公分；推斜後面積少了 216 平方公分，剩下的平行四邊形面積為 864 − 216 ＝ 648 平方公分，除以不變的底邊 36 公分即可求出新的高（或直接算高縮短了 216 ÷ 36 ＝ 6 公分）。"
        },
        {
          "type": "eq",
          "expr": "（36 × 24 − 216） ÷ 36 ＝ 648 ÷ 36 ＝ 18"
        },
        {
          "type": "answer",
          "text": "答：18 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【底邊代錯組】算出長邊為 36 公分後，誤拿寬邊 24 公分去反推高度減少量（216 ÷ 24 ＝ 9），算出 36 − 9 ＝ 27 公分。",
        "C": "【把減少量直接當答案】算出高比原來縮短了 216 ÷ 36 ＝ 6 公分後就當成最終答案，忘記還要用原來的寬 24 公分減去 6 公分。",
        "D": "【周長求長邊忘記除以 2】計算長方形的長邊時，從 120 減去兩條寬 48 得到 72 後忘記除以 2，誤以為底邊長是 72 公分，得出 24 − 216 ÷ 72 ＝ 21 公分。"
      },
      "figureNote": "長方形木框推斜變成平行四邊形時，「四條邊的長度都沒變（周長不變）」，但因為斜邊不再垂直底邊，平行四邊形的高一定比原來的寬還短，面積一定變小！",
      "insight": "記住「長方形拉斜：周長不變、面積變小」；而且底邊沒變，面積少多少除以底邊，就是高度縮短了幾公分！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "長方形周長反推長邊 ＝ 周長 ÷ 2 − 寬",
        "推斜後的高 ＝ （原面積 − 減少面積） ÷ 底邊 ＝ 原來的寬 − （減少面積 ÷ 底邊）"
      ],
      "conceptCompare": "【長方形拉斜 vs 平行四邊形剪拼】「剪下一角平移拼成長方形」時面積不變、周長變短；「整組邊框推斜」時周長不變、面積變小，兩者千萬別搞反！",
      "examVariations": "有時會反過來給「平行四邊形拉正成長方形後面積增加了 216 平方公分」，計算方向剛好相反（原高＋增加的高）。"
    },
    "check": {
      "expr": "24 - 216 / (1.2 * 100 / 2 - 24)",
      "expect": "18"
    }
  },
  {
    "id": "U08-RV-O-014",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用與幾何變形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L8 共頂點底邊倍數分段割補",
    "category": "共頂點底邊倍數分段割補",
    "level": 8,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，三角形 △ABC 的總面積是 180 平方公分。在底邊 線段 BC 上取一點 D，使得 線段 BD 的長度是 線段 DC 的 2 倍；接著在 線段 AD 上取一點 E，使得 線段 AE 的長度是 線段 ED 的 2 倍，並連接 線段 BE 與 線段 CE。請問兩塊鋪色三角形（△ABE 與 △ECD）合起來的面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,25 75,155 345,155\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2.5\"/><polygon points=\"180,25 75,155 230,112\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"1.8\"/><polygon points=\"255,155 345,155 230,112\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"180\" y1=\"25\" x2=\"255\" y2=\"155\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"75\" y1=\"155\" x2=\"230\" y2=\"112\" stroke=\"#334155\" stroke-width=\"1.8\"/><line x1=\"345\" y1=\"155\" x2=\"230\" y2=\"112\" stroke=\"#334155\" stroke-width=\"1.8\"/><circle cx=\"230\" cy=\"112\" r=\"4\" fill=\"#dc2626\"/><text x=\"180\" y=\"17\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"64\" y=\"172\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"255\" y=\"174\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 D</text><text x=\"355\" y=\"172\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"242\" y=\"108\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">點 E</text><text x=\"165\" y=\"176\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">2 份</text><text x=\"300\" y=\"176\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">1 份</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "90 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "80 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "C",
        "text": "100 平方公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "60 平方公分",
        "trapCode": "U08_SCALE_LINEAR_AREA"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生能否運用「等高三角形看底邊比例」的規則，依序進行兩層面積切分，不須求出真實底邊與高即可算出各小塊三角形的精確面積。",
      "steps": [
        {
          "type": "text",
          "text": "第一層切割：△ABD 與 △ADC 共用頂點 A（高相等），因為底邊 線段 BD 是 線段 DC 的 2 倍，所以把總面積 180 分成 2 ＋ 1 ＝ 3 份，△ABD 佔 2 份（120），△ADC 佔 1 份（60）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"165,24 60,148 330,148\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"165,24 60,148 215,107\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"1.8\"/><polygon points=\"240,148 330,148 215,107\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"165\" y1=\"24\" x2=\"240\" y2=\"148\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><line x1=\"60\" y1=\"148\" x2=\"215\" y2=\"107\" stroke=\"#475569\" stroke-width=\"1.8\"/><line x1=\"330\" y1=\"148\" x2=\"215\" y2=\"107\" stroke=\"#475569\" stroke-width=\"1.8\"/><text x=\"148\" y=\"96\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#92400e\">80</text><text x=\"172\" y=\"136\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#64748b\">40</text><text x=\"235\" y=\"92\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#64748b\">40</text><text x=\"278\" y=\"138\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#92400e\">20</text><text x=\"350\" y=\"64\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#2563eb\">先分左右 2：1</text><text x=\"350\" y=\"84\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">再沿 AD 分 2：1</text></svg>",
          "caption": "圖解：先以 2：1 切出左右 120 與 60，再沿著 AD 以 2：1 各自切分出 80、40、40、20"
        },
        {
          "type": "eq",
          "expr": "180 ÷ （2 ＋ 1） ＝ 60"
        },
        {
          "type": "text",
          "text": "第二層切割：在左邊 △ABD（120）裡，△ABE 與 △EBD 共用頂點 B，底邊 線段 AE 是 線段 ED 的 2 倍，所以 △ABE 佔 120 的 2 份（共 3 份）＝ 80；在右邊 △ADC（60）裡，△ECD 佔 60 的 1 份（共 3 份）＝ 20。"
        },
        {
          "type": "eq",
          "expr": "（60 × 2） ÷ 3 × 2 ＋ 60 ÷ 3 ＝ 80 ＋ 20 ＝ 100"
        },
        {
          "type": "answer",
          "text": "答：100 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【只算出一塊鋪色或反求成白色】只算出左上方 △ABE ＝ 80 平方公分就漏加 △ECD ＝ 20；或把兩塊白色區域（40 ＋ 40 ＝ 80）誤當成鋪色面積。",
        "D": "【兩層倍數比例混淆】把 △ABE 的 2 份誤看成 1 份（40），再與 △ECD 的 20 相加，錯算出 40 ＋ 20 ＝ 60 平方公分。",
        "A": "【誤當成中點對半切】看到有兩段分割就以為總面積平分一半，直接算 180 ÷ 2 ＝ 90 平方公分。"
      },
      "figureNote": "只要兩個三角形「共用同一個頂點」且「底邊在同一條直線上」，它們的高就完全相同，面積比就直接等於底邊長度比！",
      "insight": "「等高看底，等底看高」！遇到多層三角形切割，就像切蛋糕一樣，從最大刀開始，一層一層按照份數分配面積！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "等高三角形面積分配：某部分面積 ＝ 總面積 ÷ 總份數 × 所佔份數",
        "雙層切割：先算一級大三角形（120 與 60），再算二級小三角形（80、40、40、20）"
      ],
      "conceptCompare": "【2 倍 vs 3 等分】「線段 BD 是 線段 DC 的 2 倍」代表全長分成 2 ＋ 1 ＝ 3 份，千萬不要直接拿總面積除以 2！",
      "examVariations": "考題也常給其中一塊小三角形的面積（例如已知 △ECD ＝ 20 平方公分），讓你倒推回整個 △ABC 的總面積（20 × 3 ＝ 60，60 × 3 ＝ 180）。"
    },
    "check": {
      "expr": "180 * 2 / 3 * 2 / 3 + 180 * 1 / 3 * 1 / 3",
      "expect": "100"
    }
  },
  {
    "id": "U08-RV-O-015",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用與幾何變形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L8 長方形雙一半模型重疊區域反推",
    "category": "長方形雙一半模型重疊區域反推",
    "level": 8,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，長方形 ABCD 的長是 36 公分、寬是 20 公分。點 E 在上邊 線段 AD 上，點 F 在下邊 線段 BC 上，連接 線段 EB、線段 EC、線段 FA 與 線段 FD 後，線段 EB 與 線段 FA 相交於點 M，線段 EC 與 線段 FD 相交於點 N。已知三個區域的面積分別為 △ABM ＝ 60 平方公分、△BFM ＝ 120 平方公分、△CFN ＝ 72 平方公分，請問右邊三角形 △CDN 的面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 460 195\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"65\" y=\"30\" width=\"324\" height=\"130\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2.5\"/><polygon points=\"65,30 65,160 119,95\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"1.5\"/><polygon points=\"65,160 227,160 119,95\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/><polygon points=\"227,160 389,160 281,95\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"1.5\"/><line x1=\"146\" y1=\"30\" x2=\"65\" y2=\"160\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"146\" y1=\"30\" x2=\"389\" y2=\"160\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"227\" y1=\"160\" x2=\"65\" y2=\"30\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"227\" y1=\"160\" x2=\"389\" y2=\"30\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"56\" y=\"26\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"146\" y=\"22\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 E</text><text x=\"398\" y=\"26\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 D</text><text x=\"56\" y=\"176\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"227\" y=\"178\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 F</text><text x=\"398\" y=\"176\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"128\" y=\"96\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">M</text><text x=\"272\" y=\"96\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">N</text><text x=\"86\" y=\"100\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">60</text><text x=\"142\" y=\"146\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e40af\">120</text><text x=\"308\" y=\"146\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">72</text><text x=\"364\" y=\"100\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">？</text><text x=\"268\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">長 36 公分</text><text x=\"404\" y=\"100\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">寬 20</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "168 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "B",
        "text": "108 平方公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "468 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "D",
        "text": "120 平方公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生在複雜重疊幾何圖中，能否同時辨識出兩個「長方形一半模型」（△EBC 與 △FAD），先鎖定其中一塊的互補區域總和，再輕鬆反推未知區域。",
      "steps": [
        {
          "type": "text",
          "text": "長方形總面積是 36 × 20 ＝ 720 平方公分，因此它的一半面積是 720 ÷ 2 ＝ 360 平方公分。接著看圖中的大三角形 △FAD：它以長方形上底 線段 AD 為底、寬 線段 AB 為高，所以 △FAD 的面積正好是長方形的一半（360）！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"26\" width=\"175\" height=\"105\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"35,26 210,26 128,131\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"1.8\"/><polygon points=\"35,26 35,131 128,131\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.8\"/><polygon points=\"210,26 210,131 128,131\" fill=\"#fecaca\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"122\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#334155\">△FAD 外側兩塊合計＝一半 360</text><text x=\"235\" y=\"84\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#2563eb\">➔</text><rect x=\"260\" y=\"26\" width=\"175\" height=\"105\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"260,26 260,131 290,78\" fill=\"#fde68a\"/><polygon points=\"260,131 353,131 290,78\" fill=\"#bfdbfe\"/><polygon points=\"353,131 435,131 378,78\" fill=\"#bbf7d0\"/><polygon points=\"435,26 435,131 378,78\" fill=\"#fecaca\"/><line x1=\"305\" y1=\"26\" x2=\"260\" y2=\"131\" stroke=\"#334155\" stroke-width=\"1.5\"/><line x1=\"305\" y1=\"26\" x2=\"435\" y2=\"131\" stroke=\"#334155\" stroke-width=\"1.5\"/><line x1=\"353\" y1=\"131\" x2=\"260\" y2=\"26\" stroke=\"#334155\" stroke-width=\"1.5\"/><line x1=\"353\" y1=\"131\" x2=\"435\" y2=\"26\" stroke=\"#334155\" stroke-width=\"1.5\"/><text x=\"348\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">60 ＋ 120 ＋ 72 ＋ ？ ＝ 360</text></svg>",
          "caption": "圖解：△FAD 佔一半面積，所以它外側的左右兩塊（由 60、120、72 與 ？ 組成）合起來也佔一半 360"
        },
        {
          "type": "text",
          "text": "既然中間 △FAD 佔了一半，那麼留在 △FAD 左側與右側的兩個直角三角形（△FAB 與 △FDC）合起來就佔了另一半 360 平方公分！而這兩側正好就是 60、120、72 和未知的 △CDN 四塊拼成的。"
        },
        {
          "type": "eq",
          "expr": "36 × 20 ÷ 2 ＝ 360"
        },
        {
          "type": "eq",
          "expr": "360 − 60 − 120 − 72 ＝ 108"
        },
        {
          "type": "answer",
          "text": "答：108 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【算出中間四邊形就停步】用一半模型算出中間四邊形 EMFN ＝ 360 − 120 − 72 ＝ 168 後誤以為就是答案，忘記還要再扣掉左邊 △ABM ＝ 60。",
        "D": "【減法計算失誤】計算 360 − 60 − 120 − 72 時誤將 180 − 72 算成 120 平方公分。",
        "C": "【一半模型忘記除以 2】未把長方形面積 720 除以 2 成 360，直接拿 720 − 60 − 120 − 72 ＝ 468 平方公分。"
      },
      "figureNote": "其實用「△EBC 也佔一半（360）」先算出中間菱形 EMFN ＝ 360 − 120 − 72 ＝ 168，再利用雙一半重疊性質「中間四邊形 ＝ 左翼＋右翼」，一樣會算出 168 − 60 ＝ 108！",
      "insight": "在長方形裡看到三角形的底邊佔滿整條長（或整條寬）、頂點在對邊上，別猶豫，它立刻吃掉「一半」，剩下的兩側合計也剛好是「另一半」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "長方形雙一半推論：中間重疊四邊形 EMFN ＝ 左翼 △ABM ＋ 右翼 △CDN",
        "補集一半：△FAB ＋ △FDC ＝ 長方形面積 ÷ 2"
      ],
      "conceptCompare": "【求左右翼 vs 求中間四邊形】如果題目問中間四邊形 EMFN，只要用「一半減掉底下兩塊（360 − 120 − 72 ＝ 168）」；問右邊 △CDN 時，看補集 △FAB ＋ △FDC ＝ 360 更快！",
      "examVariations": "若是把長方形換成「平行四邊形」，因為底與高依然相同，這個雙一半模型照樣 100% 成立！"
    },
    "check": {
      "expr": "36 * 20 / 2 - 60 - 120 - 72",
      "expect": "108"
    }
  },
  {
    "id": "U08-RV-O-016",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用與幾何變形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L8 梯形分割平行四邊形與等高面積差反推高",
    "category": "梯形分割平行四邊形與等高面積差反推高",
    "level": 8,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，梯形 ABCD 的上底 線段 AD 長 14 公分，下底 線段 BC 長 22 公分。從頂點 D 畫一條與腰 線段 AB 平行的線段 線段 DE 交下底於點 E，把梯形分成左邊的平行四邊形 ABED 與右邊的三角形 △DEC。如果平行四邊形 ABED 的面積比 △DEC 的面積多 120 平方公分，請問這個梯形的高是多少公分？",
    "svg": "<svg viewBox=\"0 0 460 185\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"105,35 245,35 205,145 65,145\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2.2\"/><polygon points=\"245,35 325,145 205,145\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2.2\"/><text x=\"98\" y=\"25\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"252\" y=\"25\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 D</text><text x=\"58\" y=\"166\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"205\" y=\"166\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 E</text><text x=\"334\" y=\"166\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"175\" y=\"25\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">14 公分</text><text x=\"195\" y=\"182\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#334155\">下底總長 22 公分</text><text x=\"155\" y=\"96\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e40af\">ABED</text><text x=\"250\" y=\"114\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">△DEC</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "20 公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "24 公分",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "15 公分",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "D",
        "text": "12 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否能把「同一高度下，平行四邊形與三角形的面積比較」透過「把三角形折半變成等寬長方形」的方式視覺化轉化，不必設未知數就能求出高。",
      "steps": [
        {
          "type": "text",
          "text": "平行四邊形 ABED 的對邊相等，所以底邊 線段 BE ＝ 線段 AD ＝ 14 公分；因此右邊三角形的底邊 線段 EC ＝ 22 − 14 ＝ 8 公分。兩塊圖形的高都跟梯形的高一樣。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"30\" width=\"140\" height=\"90\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><text x=\"110\" y=\"72\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1e40af\">ABED 寬 14</text><text x=\"110\" y=\"92\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\">面積＝14 × 高</text><text x=\"200\" y=\"80\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#334155\">−</text><rect x=\"220\" y=\"30\" width=\"40\" height=\"90\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"240\" y=\"142\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">8÷2＝4</text><text x=\"285\" y=\"80\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#334155\">＝</text><rect x=\"310\" y=\"30\" width=\"100\" height=\"90\" fill=\"#fecaca\" stroke=\"#dc2626\" stroke-width=\"2.2\"/><text x=\"360\" y=\"72\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">面積差 120</text><text x=\"360\" y=\"92\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">寬度＝14−4＝10</text><text x=\"360\" y=\"142\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">高＝120 ÷ 10 ＝ 12</text></svg>",
          "caption": "圖解：平行四邊形相當於寬 14 的長方形，底 8 的三角形相當於寬 4 的長方形，兩者差一塊寬 10 的長方形"
        },
        {
          "type": "text",
          "text": "同樣高度下，底 8 公分的三角形面積（8 × 高 ÷ 2）跟「底 4 公分的平行四邊形（4 × 高）」一樣大！因此平行四邊形 ABED 比 △DEC 多出來的部分，剛好是一個「寬 14 − 4 ＝ 10 公分、高為梯形高」的矩形面積！"
        },
        {
          "type": "eq",
          "expr": "（22 − 14） ÷ 2 ＝ 8 ÷ 2 ＝ 4"
        },
        {
          "type": "eq",
          "expr": "120 ÷ （14 − 4） ＝ 120 ÷ 10 ＝ 12"
        },
        {
          "type": "answer",
          "text": "答：12 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【三角形等效寬度忘記除以 2】算出 △DEC 底邊長為 8 公分後，未把 8 除以 2 換成等面積長方形寬 4 公分，直接算 120 ÷（14 − 8）＝ 20 公分。",
        "C": "【誤把兩底差當成面積差的除數】沒有考量三角形與平行四邊形公式的差別，直接用面積差 120 除以（22 − 14）＝ 15 公分。",
        "B": "【誤以為要乘以 2 還原】算出梯形的高為 12 公分後，誤套三角形反推習慣而多乘以 2，錯選 24 公分。"
      },
      "figureNote": "把等高的平行四邊形和三角形都想像成「寬度不同的長方形條」：平行四邊形保留原底 14，三角形底邊要折半成 4，比一比就差了 10 公分寬！",
      "insight": "等高的「平行四邊形 vs 三角形」比大小，先把三角形的底「除以 2」變成等面積的平行四邊形，再直接把底邊相減，除一下就出高！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "等高三角形換算等積平行四邊形底寬 ＝ 三角形底邊 ÷ 2",
        "高 ＝ 兩圖形面積差 ÷ （平行四邊形底 − 三角形等效底寬）"
      ],
      "conceptCompare": "【直接減底 vs 底折半再減】很多同學直接拿 14 − 8 ＝ 6，那是拿「兩個平行四邊形」去比，忘記三角形本身已經除以 2 了！",
      "examVariations": "也可以把問題變成「平行四邊形 ABED 與 △DEC 面積之和是 216 平方公分」，同樣算法：等效總寬 ＝ 14 ＋ 4 ＝ 18，高 ＝ 216 ÷ 18 ＝ 12（這就是梯形上下底平均乘以高的道理！）。"
    },
    "check": {
      "expr": "120 / (14 - (22 - 14) / 2)",
      "expect": "12"
    }
  },
  {
    "id": "U08-RV-O-017",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用與幾何變形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L9 任意四邊形四邊中點連線雙重一半模型",
    "category": "任意四邊形四邊中點連線雙重一半模型",
    "level": 9,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，有一個任意四邊形 ABCD 廣場，設計師找出四條邊的中點：點 E、點 F、點 G、點 H 分別是 線段 AB、線段 BC、線段 CD、線段 DA 的中點，並依序連接成中央的藍色噴水池（四邊形 EFGH），四周的四個角落三角形則種植花草。已知其中三個花草區的面積分別是 △AEH ＝ 38 平方公尺、△BEF ＝ 41 平方公尺、△CFG ＝ 52 平方公尺，請問「中央噴水池 EFGH」的面積比「第四個花草區 △DGH」的面積多多少平方公尺？",
    "svg": "<svg viewBox=\"0 0 460 195\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"105,35 345,25 385,150 65,160\" fill=\"#dcfce7\" stroke=\"#1e293b\" stroke-width=\"2.2\"/><polygon points=\"85,97.5 225,30 365,87.5 225,155\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2.2\"/><text x=\"98\" y=\"26\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"352\" y=\"20\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"394\" y=\"158\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"56\" y=\"170\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 D</text><text x=\"225\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#0369a1\">中點 E</text><text x=\"376\" y=\"88\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#0369a1\">中點 F</text><text x=\"225\" y=\"176\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#0369a1\">中點 G</text><text x=\"72\" y=\"98\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#0369a1\">中點 H</text><text x=\"142\" y=\"54\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">38</text><text x=\"322\" y=\"52\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">41</text><text x=\"330\" y=\"138\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">52</text><text x=\"122\" y=\"140\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">？</text><text x=\"225\" y=\"98\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#0369a1\">噴水池 EFGH</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "49 平方公尺",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "B",
        "text": "41 平方公尺",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "131 平方公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "141 平方公尺",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生能否透過連對角線與輔助線，利用兩次「等底等高折半」證明「任意四邊形對角兩塊中點三角形之和 ＝ 總面積的四分之一」，進而同時推出第四塊面積與中央四邊形面積。",
      "steps": [
        {
          "type": "text",
          "text": "先連一條對角線 線段 BD，再連一條輔助線 線段 BH！看 △ABD：因為 H 是中點，△ABH 佔 △ABD 的一半；再因為 E 是中點，△AEH 又佔 △ABH 的一半！所以 △AEH ＝ △ABD 的 1/4。同理，對面 △CFG ＝ △CBD 的 1/4！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"80,26 245,20 275,142 50,150\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"80,26 162.5,23 65,88\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\"/><polygon points=\"260,81 275,142 162.5,146\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"245\" y1=\"20\" x2=\"50\" y2=\"150\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"245\" y1=\"20\" x2=\"65\" y2=\"88\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"155\" y=\"102\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#2563eb\">對角線 BD</text><text x=\"295\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">△AEH ＝ 1/4 △ABD</text><text x=\"295\" y=\"78\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">△CFG ＝ 1/4 △CBD</text><text x=\"295\" y=\"104\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\">兩對角和 ＝ 1/4 總面積</text><text x=\"295\" y=\"128\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#0369a1\">中央 EFGH ＝ 1/2 總面積</text></svg>",
          "caption": "圖解：連對角線 BD 與輔助線 BH，折半再折半可知對角兩塊之和剛好是整個廣場的 1/4"
        },
        {
          "type": "text",
          "text": "因此對角的兩塊花草區 △AEH ＋ △CFG ＝ 38 ＋ 52 ＝ 90 平方公尺，剛好等於「整個廣場的 1/4」！另外一組對角 △BEF ＋ △DGH 也一定等於 90 平方公尺，而中央噴水池 EFGH（佔總面積的 1/2）剛好是 90 的 2 倍！"
        },
        {
          "type": "eq",
          "expr": "38 ＋ 52 ＝ 90"
        },
        {
          "type": "eq",
          "expr": "90 − 41 ＝ 49"
        },
        {
          "type": "eq",
          "expr": "90 × 2 − 49 ＝ 180 − 49 ＝ 131"
        },
        {
          "type": "answer",
          "text": "答：131 平方公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【只求出 △DGH 就當答案】算出第四個角落 △DGH ＝ 49 平方公尺後就結束作答，忘記題目問的是「噴水池 EFGH 比 △DGH 多多少平方公尺」。",
        "B": "【誤把四分之一當一半】誤以為中央噴水池的面積只等於 38 ＋ 52 ＝ 90 平方公尺（少乘以 2），得出 90 − 49 ＝ 41 平方公尺。",
        "D": "【減法借位失誤】計算 180 − 49 時十位忘記退位，錯算出 141 平方公尺。"
      },
      "figureNote": "無論外圍四邊形 ABCD 長得有多歪七扭八，只要依序連出四邊中點，對角兩三角形面積和永遠相等（各佔 1/4），中央四邊形面積永遠佔總面積的 1/2！",
      "insight": "「四邊中點連起來，對角之和兩兩相等（各佔 1/4），中間那塊剛剛好佔全部的一半（1/2）」！用折半再折半就能輕鬆證明！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "中點四邊形對角和等式：△AEH ＋ △CFG ＝ △BEF ＋ △DGH ＝ 四邊形總面積 ÷ 4",
        "中央四邊形 EFGH ＝ 四邊形總面積 ÷ 2 ＝ 2 × （△AEH ＋ △CFG）"
      ],
      "conceptCompare": "【中點連線 vs 任意點 P】這題是四個「邊的中點」彼此連線；如果改成內部一點 P 連向四邊中點（如第 20 題），則是「對角兩個四邊形之和」各自佔一半！",
      "examVariations": "若題目只給四邊形總面積 360 平方公尺，可以直接秒殺中央 EFGH ＝ 360 ÷ 2 ＝ 180 平方公尺！"
    },
    "check": {
      "expr": "(38 + 52) * 2 - ((38 + 52) - 41)",
      "expect": "131"
    }
  },
  {
    "id": "U08-RV-O-018",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用與幾何變形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L9 下底為上底三倍之梯形蝴蝶面積推算",
    "category": "下底為上底三倍之梯形蝴蝶面積推算",
    "level": 9,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，梯形 ABCD 的上底 線段 AD 與下底 線段 BC 互相平行，且下底 線段 BC 的長度剛好是上底 線段 AD 的 3 倍。兩條對角線 線段 AC 與 線段 BD 相交於點 O，量得上方三角形 △AOD 的面積是 18 平方公分。請問整個梯形 ABCD 的面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"180,32 260,32 340,152 100,152\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2.5\"/><polygon points=\"180,32 260,32 220,62\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.8\"/><line x1=\"180\" y1=\"32\" x2=\"340\" y2=\"152\" stroke=\"#1e293b\" stroke-width=\"2\"/><line x1=\"260\" y1=\"32\" x2=\"100\" y2=\"152\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"172\" y=\"24\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"268\" y=\"24\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 D</text><text x=\"92\" y=\"168\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"348\" y=\"168\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"220\" y=\"80\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">點 O</text><text x=\"220\" y=\"51\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">18</text><text x=\"220\" y=\"24\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#2563eb\">1 份</text><text x=\"220\" y=\"172\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#2563eb\">下底為上底的 3 倍</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "180 平方公分",
        "trapCode": "U08_SCALE_LINEAR_AREA"
      },
      {
        "key": "B",
        "text": "288 平方公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "234 平方公分",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "D",
        "text": "162 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生能否僅用五年級「等高看底」與「同底看高」的交替轉換，推導出梯形四塊面積「1：3：3：9」的進階蝴蝶模型，完全不需要任何國中知識。",
      "steps": [
        {
          "type": "text",
          "text": "先看 △ABC 與 △ADC：兩者在平行線間的高相等，且底邊 線段 BC 是 線段 AD 的 3 倍，所以 △ABC 面積是 △ADC 的 3 倍。換個角度看，△ABC 與 △ADC 共用同一條底邊 線段 AC，因此點 B 到 線段 AC 的垂直高，也是點 D 到 線段 AC 的垂直高的 3 倍！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"120,26 195,26 270,146 45,146\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"120,26 195,26 157.5,56\" fill=\"#fde68a\"/><polygon points=\"120,26 45,146 157.5,56\" fill=\"#bfdbfe\"/><polygon points=\"195,26 270,146 157.5,56\" fill=\"#bfdbfe\"/><polygon points=\"45,146 270,146 157.5,56\" fill=\"#bbf7d0\"/><line x1=\"120\" y1=\"26\" x2=\"270\" y2=\"146\" stroke=\"#1e293b\" stroke-width=\"1.8\"/><line x1=\"195\" y1=\"26\" x2=\"45\" y2=\"146\" stroke=\"#1e293b\" stroke-width=\"1.8\"/><text x=\"157.5\" y=\"45\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">18</text><text x=\"108\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1e40af\">54</text><text x=\"208\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#1e40af\">54</text><text x=\"157.5\" y=\"122\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#15803d\">162</text><text x=\"292\" y=\"48\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#1e40af\">翅膀 ＝ 18 × 3 ＝ 54</text><text x=\"292\" y=\"76\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">下底 ＝ 54 × 3 ＝ 162</text><text x=\"292\" y=\"106\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#334155\">面積比 1：3：3：9</text><text x=\"292\" y=\"134\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">共 16 份 ＝ 288</text></svg>",
          "caption": "圖解：利用共用底邊的高的倍數關係，四塊面積依序乘 3 倍，形成 18、54、54、162 的完美結構"
        },
        {
          "type": "text",
          "text": "接著看 △AOB 與 △AOD：它們共用底邊 線段 AO，高的比是 3 倍，所以 △AOB ＝ 18 × 3 ＝ 54；由蝴蝶等積性質，右翼 △DOC ＝ 54；最後 △BOC 與 △DOC 共用底邊 線段 OC，高又是 3 倍，所以 △BOC ＝ 54 × 3 ＝ 162！"
        },
        {
          "type": "eq",
          "expr": "18 ＋ 54 ＋ 54 ＋ 162 ＝ 288"
        },
        {
          "type": "answer",
          "text": "答：288 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【下底面積倍數未平方】算出左右兩隻翅膀都是 54 平方公分後，誤以為下方 △BOC 也只是 △AOD 的 3 倍（54 平方公分），錯算出 18 ＋ 54 ＋ 54 ＋ 54 ＝ 180 平方公分。",
        "C": "【漏算右翼 △DOC】正確推出 △AOB ＝ 54 與 △BOC ＝ 162，但最後加總時漏掉了右邊翅膀 △DOC 的 54 平方公分，算成 18 ＋ 54 ＋ 162 ＝ 234 平方公分。",
        "D": "【只算下方大三角形】費盡心力算出下方 △BOC ＝ 162 平方公分後直接當作答案，忘記還要加回上方與左右兩隻翅膀。"
      },
      "figureNote": "只要下底是上底的 3 倍，對角線切出的四塊面積比永遠是「上 1：左 3：右 3：下 9」，加起來剛好是上三角形的 16 倍！",
      "insight": "梯形蝴蝶進階口訣：如果下底是上底的「幾倍」，先乘一次倍數算出「左右翅膀」，再乘一次倍數算出「下底大塊」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "下底為上底的 3 倍時：△AOB ＝ △DOC ＝ 3 × △AOD，△BOC ＝ 3 × △DOC ＝ 9 × △AOD",
        "梯形總面積 ＝ （1 ＋ 3 ＋ 3 ＋ 9） × △AOD ＝ 16 × △AOD"
      ],
      "conceptCompare": "【長度 3 倍 vs 面積 9 倍】上下兩塊三角形（△AOD 與 △BOC）的底邊是 3 倍、高也是 3 倍，所以面積會變成 3 × 3 ＝ 9 倍，千萬不要只乘 1 次 3 倍！",
      "examVariations": "若把題目改成「下底是上底的 2 倍」，四塊比例就會變成「1：2：2：4」，總面積則是上三角形的 9 倍。"
    },
    "check": {
      "expr": "18 + 18 * 3 + 18 * 3 + 18 * 3 * 3",
      "expect": "288"
    }
  },
  {
    "id": "U08-RV-O-019",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用與幾何變形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L10 三角形各邊不等倍延長「風車擴張」",
    "category": "三角形各邊不等倍延長「風車擴張」",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，中間的小三角形 △ABC 面積是 12 平方公分。現在分別延長三條邊：將 線段 AB 往點 B 方向延長到點 D 使 線段 BD ＝ 2 × 線段 AB；將 線段 BC 往點 C 方向延長到點 E 使 線段 CE ＝ 線段 BC；將 線段 CA 往點 A 方向延長到點 F 使 線段 AF ＝ 2 × 線段 CA。依序連接 點 D、點 E、點 F 圍成大三角形 △DEF，請問 △DEF 的總面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 460 195\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"220,76 260,76 220,126\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><polygon points=\"220,76 260,76 340,76 180,176 220,126\" fill=\"none\"/><polygon points=\"340,76 180,176 220,26\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.2\"/><line x1=\"220\" y1=\"76\" x2=\"340\" y2=\"76\" stroke=\"#334155\" stroke-width=\"1.8\"/><line x1=\"260\" y1=\"76\" x2=\"180\" y2=\"176\" stroke=\"#334155\" stroke-width=\"1.8\"/><line x1=\"220\" y1=\"126\" x2=\"220\" y2=\"26\" stroke=\"#334155\" stroke-width=\"1.8\"/><text x=\"206\" y=\"70\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"260\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"210\" y=\"138\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"350\" y=\"80\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">點 D</text><text x=\"172\" y=\"186\" text-anchor=\"end\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">點 E</text><text x=\"232\" y=\"24\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">點 F</text><text x=\"232\" y=\"96\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#854d0e\">12</text><text x=\"305\" y=\"94\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\">BD＝2倍AB</text><text x=\"148\" y=\"150\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\">CE＝BC</text><text x=\"180\" y=\"48\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\">AF＝2倍CA</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "120 平方公分",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "156 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "C",
        "text": "72 平方公分",
        "trapCode": "U08_SCALE_LINEAR_AREA"
      },
      {
        "key": "D",
        "text": "168 平方公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生在完全沒有底與高數值的狀況下，能否自行畫出三條輔助線（線段 CD、線段 AE、線段 BF），利用「等高時底邊幾倍面積就幾倍」的連動推導，破解奧數極高難度的風車擴張題。",
      "steps": [
        {
          "type": "text",
          "text": "這題的秘訣是「幫三片大翅膀各切一刀」！連接輔助線 線段 CD、線段 AE、線段 BF，把外圍三片翅膀各自切成兩小塊，再從中間 △ABC（12）出發，順著「等高看底邊倍數」一塊一塊往外乘出去！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 185\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"340,72 180,168 220,24\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2\"/><polygon points=\"220,72 260,72 220,120\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><line x1=\"220\" y1=\"72\" x2=\"340\" y2=\"72\" stroke=\"#475569\" stroke-width=\"1.6\"/><line x1=\"260\" y1=\"72\" x2=\"180\" y2=\"168\" stroke=\"#475569\" stroke-width=\"1.6\"/><line x1=\"220\" y1=\"120\" x2=\"220\" y2=\"24\" stroke=\"#475569\" stroke-width=\"1.6\"/><line x1=\"220\" y1=\"120\" x2=\"340\" y2=\"72\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"220\" y1=\"72\" x2=\"180\" y2=\"168\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"260\" y1=\"72\" x2=\"220\" y2=\"24\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"232\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#854d0e\">12</text><text x=\"275\" y=\"90\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">24</text><text x=\"255\" y=\"118\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">24</text><text x=\"206\" y=\"130\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#2563eb\">12</text><text x=\"196\" y=\"88\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#16a34a\">24</text><text x=\"282\" y=\"54\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#16a34a\">48</text><text x=\"10\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">右翼 BDE：24＋24＝48</text><text x=\"10\" y=\"56\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#2563eb\">左翼 CEF：12＋24＝36</text><text x=\"10\" y=\"78\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#16a34a\">上翼 AFD：24＋48＝72</text></svg>",
          "caption": "圖解：三條彩色虛線把外圍三片翅膀各切一刀，面積沿著「共頂點倍底」一圈一圈翻倍算出"
        },
        {
          "type": "text",
          "text": "逐翼拆解：① 右翼 △BDE 連 線段 CD：△BCD ＝ 2 × △ABC ＝ 24，又因 CE ＝ BC，△DCE ＝ △BCD ＝ 24，右翼共 48。② 左翼 △CEF 連 線段 AE：△ACE ＝ 12，又因 AF ＝ 2 × CA，△AEF ＝ 24，左翼共 36。③ 上翼 △AFD 連 線段 BF：△ABF ＝ 24，又因 BD ＝ 2 × AB，△BFD ＝ 48，上翼共 72！"
        },
        {
          "type": "eq",
          "expr": "12 ＋ （24 ＋ 24） ＋ （12 ＋ 24） ＋ （24 ＋ 48） ＝ 12 ＋ 48 ＋ 36 ＋ 72 ＝ 168"
        },
        {
          "type": "answer",
          "text": "答：168 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記加回中間原三角形】算出外圍三片翅膀面積為 48 ＋ 36 ＋ 72 ＝ 156 平方公分後就當成答案，忘記加上正中間的 △ABC ＝ 12 平方公分。",
        "C": "【漏算第二段延長的連動倍數】誤以為外圍三片翅膀只等於 2 × 12 ＋ 1 × 12 ＋ 2 × 12 ＝ 60，加上中間 12 後錯算成 72 平方公分。",
        "A": "【兩段倍數用相加取代相乘】計算外圍三片翅膀時，誤將延長倍數用「相加」代替「相乘」，算出 12 ＋ 36 ＋ 24 ＋ 48 ＝ 120 平方公分。"
      },
      "figureNote": "每片大翅膀都不要一次看整體！用一條虛線把它切成「先沿第一邊延長、再沿第二邊延長」的兩小塊三角形，每一步就只是單純的底邊倍數問題！",
      "insight": "三角形風車擴張萬用心法：「把原三角形頂點連到對外頂點」切開翅膀，順著旋轉方向兩段倍數相乘再相加！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "單翼雙重延長面積 ＝ 原面積 × 本邊延長倍數 × （1 ＋ 下一邊延長倍數）",
        "總面積 ＝ 原三角形 ＋ 三片翅膀之和"
      ],
      "conceptCompare": "【等倍延長 vs 不等倍延長】如果三條邊都剛好延長「1 倍」，三片翅膀就會各是原面積的 2 倍，總面積剛好是 1 ＋ 2 ＋ 2 ＋ 2 ＝ 7 倍；但一旦延長倍數不相等，就必須畫輔助線分開算！",
      "examVariations": "更難的題目會反過來給你大三角形 △DEF 的面積是 168 平方公分，讓你推算原三角形 △ABC 的面積（168 ÷ 14 ＝ 12 平方公分）。"
    },
    "check": {
      "expr": "12 * (1 + 2 * (1 + 1) + 1 * (1 + 2) + 2 * (1 + 2))",
      "expect": "168"
    }
  },
  {
    "id": "U08-RV-O-020",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用與幾何變形",
    "batch": "奧數天梯",
    "source": "自編奧數天梯・L10 長方形四邊中點連內部點之雙一半模型壓軸反推",
    "category": "長方形四邊中點連內部點之雙一半模型壓軸反推",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，長方形 ABCD 中，點 E、點 F、點 G、點 H 分別是四條邊的中點，點 P 是長方形內部任意一點。連接 線段 PE、線段 PF、線段 PG、線段 PH 後，把長方形分成甲、乙、丙、丁四塊四邊形區域。已知甲區面積為 74 平方公分、乙區面積為 72 平方公分、丙區面積為 118 平方公分，且長方形的寬 線段 AB 是 16 公分。如果另外畫一個三角形，它的面積恰好等於「丁區」的面積，而且它的底邊長剛好等於這個長方形的「長邊」，請問這個三角形的高是多少公分？",
    "svg": "<svg viewBox=\"0 0 460 195\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"75\" y=\"30\" width=\"288\" height=\"135\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2.5\"/><line x1=\"75\" y1=\"97.5\" x2=\"155\" y2=\"96\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"219\" y1=\"165\" x2=\"155\" y2=\"96\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"363\" y1=\"97.5\" x2=\"155\" y2=\"96\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"219\" y1=\"30\" x2=\"155\" y2=\"96\" stroke=\"#334155\" stroke-width=\"2\"/><circle cx=\"155\" cy=\"96\" r=\"4.5\" fill=\"#dc2626\"/><text x=\"66\" y=\"25\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 A</text><text x=\"66\" y=\"175\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 B</text><text x=\"372\" y=\"175\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 C</text><text x=\"372\" y=\"25\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">點 D</text><text x=\"64\" y=\"102\" text-anchor=\"end\" font-size=\"12\" font-weight=\"800\" fill=\"#0284c7\">E</text><text x=\"219\" y=\"182\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#0284c7\">F</text><text x=\"374\" y=\"102\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#0284c7\">G</text><text x=\"219\" y=\"22\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#0284c7\">H</text><text x=\"164\" y=\"88\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">點 P</text><text x=\"140\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">甲 74</text><text x=\"138\" y=\"136\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#1e40af\">乙 72</text><text x=\"266\" y=\"136\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">丙 118</text><text x=\"266\" y=\"64\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\">丁？</text><text x=\"28\" y=\"102\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">寬 16</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "5 公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "15 公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "C",
        "text": "10 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "8 公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "作為壓軸 L10 題，測驗學生能否自主添畫「點 P 連向四頂點」的 4 條輔助線，用四組中點等積三角形證明「甲＋丙 ＝ 乙＋丁 ＝ 長方形面積的一半」，並連鎖反推長邊與三角形的高。",
      "steps": [
        {
          "type": "text",
          "text": "畫出四條關鍵輔助線：連接 點 P 到四個頂點 A、B、C、D！因為 E、F、G、H 都是各邊的中點，每條邊上的兩個小三角形都是「等底等高面積相等」（如 △APE ＝ △BPE、△BPF ＝ △CPF、△CPG ＝ △DPG、△DPH ＝ △APH）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"25\" width=\"235\" height=\"125\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"40,25 40,87.5 105,86 157.5,25\" fill=\"#fde68a\"/><polygon points=\"275,150 275,87.5 105,86 157.5,150\" fill=\"#fde68a\"/><line x1=\"40\" y1=\"87.5\" x2=\"105\" y2=\"86\" stroke=\"#334155\" stroke-width=\"1.8\"/><line x1=\"157.5\" y1=\"150\" x2=\"105\" y2=\"86\" stroke=\"#334155\" stroke-width=\"1.8\"/><line x1=\"275\" y1=\"87.5\" x2=\"105\" y2=\"86\" stroke=\"#334155\" stroke-width=\"1.8\"/><line x1=\"157.5\" y1=\"25\" x2=\"105\" y2=\"86\" stroke=\"#334155\" stroke-width=\"1.8\"/><line x1=\"40\" y1=\"25\" x2=\"105\" y2=\"86\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><line x1=\"40\" y1=\"150\" x2=\"105\" y2=\"86\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><line x1=\"275\" y1=\"150\" x2=\"105\" y2=\"86\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><line x1=\"275\" y1=\"25\" x2=\"105\" y2=\"86\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/><text x=\"292\" y=\"48\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">黃色（甲＋丙）＝ 一半</text><text x=\"292\" y=\"72\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">74 ＋ 118 ＝ 192</text><text x=\"292\" y=\"96\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#1e40af\">長方形面積 ＝ 384</text><text x=\"292\" y=\"120\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">長邊 ＝ 384 ÷ 16 ＝ 24</text><text x=\"292\" y=\"144\" text-anchor=\"start\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">丁 ＝ 192 − 72 ＝ 120</text></svg>",
          "caption": "圖解：紅色虛線連出 8 塊小三角形，每邊兩兩相等，因此對角「甲＋丙」與「乙＋丁」都剛好佔長方形一半"
        },
        {
          "type": "text",
          "text": "重新配對這 8 個小三角形會發現：「甲區 ＋ 丙區」剛好各拿了每一邊的一半，所以「甲 ＋ 丙 ＝ 乙 ＋ 丁 ＝ 長方形面積的一半」！依序推出長方形總面積、長邊長與丁區面積，最後反推三角形的高。"
        },
        {
          "type": "eq",
          "expr": "（74 ＋ 118） × 2 ＝ 192 × 2 ＝ 384"
        },
        {
          "type": "eq",
          "expr": "384 ÷ 16 ＝ 24"
        },
        {
          "type": "eq",
          "expr": "（192 − 72） × 2 ÷ 24 ＝ 120 × 2 ÷ 24 ＝ 10"
        },
        {
          "type": "answer",
          "text": "答：10 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【反推三角形的高忘記乘以 2】正確算出丁區為 120 平方公分與長方形長邊為 24 公分後，算三角形高時直接拿 120 ÷ 24 ＝ 5 公分，忘記三角形要先乘以 2。",
        "B": "【底邊誤代成寬邊】算出丁區面積為 120 平方公分後，誤拿題目給的寬邊 16 公分當成底邊去反推，算成 120 × 2 ÷ 16 ＝ 15 公分。",
        "D": "【減法計算失誤】算出長方形一半為 192 平方公分後，計算 192 − 72 時錯算成 96，進而得出 96 × 2 ÷ 24 ＝ 8 公分。"
      },
      "figureNote": "只要把點 P 連向四個頂點，原本奇形怪狀的四塊四邊形馬上變身成 4 對「等底等高」的雙胞胎三角形，瞬間看穿「對角之和佔一半」的秘密！",
      "insight": "看到「長方形四邊中點連向內部任意點 P」，立刻連四條輔助線到頂點！口訣：「對角相加永遠相等，各佔總面積的一半」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "四邊中點與內部點關係：甲 ＋ 丙 ＝ 乙 ＋ 丁 ＝ 長方形面積 ÷ 2",
        "三角形反推高 ＝ 面積 × 2 ÷ 底邊"
      ],
      "conceptCompare": "【連頂點（9 題）vs 連中點（20 題）】如果點 P 只連四個頂點，是上下兩塊之和等於一半；如果點 P 只連四邊中點，則是對角兩塊之和等於一半！兩者證明技巧一脈相承。",
      "examVariations": "甚至不用是長方形，把外框換成「任意平行四邊形」或「任意四邊形」，「對角兩塊之和相等」依然完全成立（因為只用到邊的中點等底等高）！"
    },
    "check": {
      "expr": "((74 + 118) - 72) * 2 / ((74 + 118) * 2 / 16)",
      "expect": "10"
    }
  },
  {
    "id": "U08-S1-M-001",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "平行四邊形的面積",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "平行四邊形對應底高辨識心算",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "觀察下圖的平行四邊形磁磚，請選出正確的底和高心算面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 360 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"95,28 285,28 245,112 55,112\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2.2\"/><line x1=\"95\" y1=\"28\" x2=\"95\" y2=\"112\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"95,100 107,100 107,112\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"150\" y=\"136\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">12 公分</text><text x=\"128\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">5 公分</text><text x=\"296\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\">9 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "42 平方公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      },
      {
        "key": "B",
        "text": "108 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "C",
        "text": "60 平方公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "45 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生心算平行四邊形面積時，能否抓出互相垂直的「底」與「高」，不被斜邊長度誘惑。",
      "steps": [
        {
          "type": "text",
          "text": "平行四邊形的面積是「底 × 高」，紅色虛線和底邊 12 公分形成直角，所以底是 12 公分、高是 5 公分；斜斜的 9 公分不是高。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"115,22 295,22 255,98 75,98\" fill=\"#f0f9ff\" stroke=\"#0284c7\" stroke-width=\"2\"/><line x1=\"75\" y1=\"98\" x2=\"255\" y2=\"98\" stroke=\"#0284c7\" stroke-width=\"4\"/><line x1=\"115\" y1=\"22\" x2=\"115\" y2=\"98\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"5,3\"/><polyline points=\"115,86 127,86 127,98\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"165\" y=\"118\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">底 ＝ 12 公分</text><text x=\"152\" y=\"64\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">高 ＝ 5 公分</text><text x=\"325\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#94a3b8\">斜邊 9 公分（不用）</text><text x=\"230\" y=\"144\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">找垂直記號：12 × 5 ＝ 60（平方公分）</text></svg>",
          "caption": "圖解：鎖定直角記號配對底 12 公分與高 5 公分，斜邊 9 公分不參與計算"
        },
        {
          "type": "eq",
          "expr": "12 × 5 ＝ 60"
        },
        {
          "type": "answer",
          "text": "答：60 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【周長當面積】把兩鄰邊相加再乘 2，算成 （12 ＋ 9） × 2 ＝ 42。",
        "D": "【配錯底與高】拿斜邊 9 公分去乘垂直高 5 公分，算成 9 × 5 ＝ 45。",
        "B": "【誤把斜邊當高】直接拿底 12 公分乘以斜邊 9 公分，錯算成 12 × 9 ＝ 108。"
      },
      "insight": "計算面積先找「直角記號」！垂直的那兩條才能相乘，斜邊只是來干擾的！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平行四邊形面積 ＝ 底 × 高（底和高必須互相垂直）"
      ],
      "conceptCompare": "【周長 vs 面積】周長是四條邊加起來（12 ＋ 9） × 2；面積是「底 × 垂直的高」（12 × 5），斜邊不能直接當作高。",
      "examVariations": "段考常同時標出兩條高或一條斜邊，只要先找小正方形直角符號就能零失誤配對。"
    },
    "check": {
      "expr": "12 * 5",
      "expect": "60"
    }
  },
  {
    "id": "U08-S1-M-002",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "平行四邊形的面積",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "平行四邊形已知面積反推高",
    "level": 1,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一塊面積 72 平方公分的平行四邊形木板，底邊長 9 公分，它對應的高是幾公分？",
    "options": [
      {
        "key": "A",
        "text": "16 公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "8 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "27 公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      },
      {
        "key": "D",
        "text": "6 公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否熟記平行四邊形面積公式並能直接心算反推：高 ＝ 面積 ÷ 底。",
      "steps": [
        {
          "type": "text",
          "text": "因為平行四邊形面積 ＝ 底 × 高，反過來知道面積 72 和底 9，直接用除法就能求出高，不需要像三角形那樣乘 2。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 125\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"20\" width=\"115\" height=\"46\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"92\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#92400e\">面積 72</text><text x=\"172\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#334155\">÷</text><rect x=\"195\" y=\"20\" width=\"95\" height=\"46\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"242\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0369a1\">底 9 公分</text><text x=\"312\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#334155\">＝</text><rect x=\"335\" y=\"20\" width=\"95\" height=\"46\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"382\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#15803d\">高 8 公分</text><text x=\"230\" y=\"100\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\">平行四邊形反推高：直接「面積 ÷ 底」，不需乘 2</text></svg>",
          "caption": "圖解：平行四邊形已知面積與底時，用面積直接除以底即可得到高"
        },
        {
          "type": "eq",
          "expr": "72 ÷ 9 ＝ 8"
        },
        {
          "type": "answer",
          "text": "答：8 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【和三角形反推搞混】誤把平行四邊形當成三角形，先將面積乘 2 再除，算成 72 × 2 ÷ 9 ＝ 16。",
        "D": "【乘法口訣粗心】把 72 ÷ 9 誤記成 6（9 × 8 ＝ 72 記成 9 × 6）。",
        "C": "【把面積當成周長】誤用長方形周長反推邊長的方式，算成 72 ÷ 2 － 9 ＝ 27。"
      },
      "insight": "平行四邊形公式沒有除以 2，反推高就直接「面積 ÷ 底」，用九九乘法 1 秒算完！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平行四邊形的高 ＝ 面積 ÷ 底",
        "平行四邊形的底 ＝ 面積 ÷ 高"
      ],
      "conceptCompare": "【平行四邊形反推 vs 三角形反推】平行四邊形面積 ÷ 底 ＝ 高；三角形因為公式原本有 ÷ 2，反推時才需要先「面積 × 2 ÷ 底」。",
      "examVariations": "題目可能把問句換成「已知面積與高，反推底邊長」，同樣用面積 ÷ 高即可。"
    },
    "check": {
      "expr": "72 / 9",
      "expect": "8"
    }
  },
  {
    "id": "U08-S1-M-003",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "平行四邊形的面積",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "等底等高推斜不變性",
    "level": 2,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖夾在兩條平行線之間的長方形與平行四邊形，平行四邊形面積是幾平方公分？",
    "svg": "<svg viewBox=\"0 0 420 155\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"34\" x2=\"400\" y2=\"34\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"6,4\"/><line x1=\"20\" y1=\"114\" x2=\"400\" y2=\"114\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"6,4\"/><rect x=\"55\" y=\"34\" width=\"110\" height=\"80\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/><text x=\"110\" y=\"136\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#3730a3\">8 公分</text><text x=\"32\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#3730a3\">6 公分</text><polygon points=\"255,34 365,34 325,114 215,114\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"270\" y=\"136\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">8 公分</text><text x=\"368\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">7 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "24 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "56 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "C",
        "text": "48 平方公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "30 平方公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否理解兩平行線間距離處處相等，能把長方形的寬 6 公分直接平移當作平行四邊形的高。",
      "steps": [
        {
          "type": "text",
          "text": "兩條平行線之間的垂直距離都一樣長！左邊長方形的高是 6 公分，所以右邊平行四邊形的高也是 6 公分（7 公分是斜邊）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"28\" x2=\"440\" y2=\"28\" stroke=\"#94a3b8\" stroke-width=\"1.6\" stroke-dasharray=\"5,4\"/><line x1=\"20\" y1=\"104\" x2=\"440\" y2=\"104\" stroke=\"#94a3b8\" stroke-width=\"1.6\" stroke-dasharray=\"5,4\"/><rect x=\"55\" y=\"28\" width=\"105\" height=\"76\" fill=\"#eef2ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/><line x1=\"160\" y1=\"28\" x2=\"160\" y2=\"104\" stroke=\"#dc2626\" stroke-width=\"2.8\"/><text x=\"107\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#3730a3\">底 8 公分</text><text x=\"32\" y=\"70\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">6 公分</text><polygon points=\"275,28 380,28 345,104 240,104\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"275\" y1=\"28\" x2=\"275\" y2=\"104\" stroke=\"#dc2626\" stroke-width=\"2.8\" stroke-dasharray=\"4,3\"/><text x=\"292\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#92400e\">底 8 公分</text><text x=\"308\" y=\"70\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">高 ＝ 6 公分</text><text x=\"230\" y=\"145\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">平行線間同底等高，面積一樣：8 × 6 ＝ 48</text></svg>",
          "caption": "圖解：平行線間垂直距離相等，右圖平行四邊形的高也是 6 公分"
        },
        {
          "type": "eq",
          "expr": "8 × 6 ＝ 48"
        },
        {
          "type": "answer",
          "text": "答：48 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【誤用斜邊當高】沒注意到平行線間的高都是 6 公分，誤把斜邊 7 公分拿來乘，算出 8 × 7 ＝ 56。",
        "D": "【把周長當面積】拿平行四邊形兩邊相加乘 2，算出 （8 ＋ 7） × 2 ＝ 30。",
        "A": "【誤多除以 2】算對底 × 高 ＝ 48 後，卻多此一舉再除以 2 得到 24。"
      },
      "insight": "只要夾在同一組平行線之間，不管圖形怎麼往右推斜，只要底一樣長、面積就完全相等！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平行線之間垂直距離處處相等（等高）",
        "同底等高的長方形與平行四邊形，面積完全相等"
      ],
      "conceptCompare": "【周長變大 vs 面積不變】把長方形推斜成平行四邊形（底、高不變）時，兩條斜邊變長所以周長會變大，但面積依然不變！",
      "examVariations": "考卷常並排畫 3～4 個夾在平行線間的平行四邊形或三角形，要求直接比較面積大小。"
    },
    "check": {
      "expr": "8 * 6",
      "expect": "48"
    }
  },
  {
    "id": "U08-S1-M-004",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "平行四邊形的面積",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "公分與公尺單位統一心算",
    "level": 2,
    "difficulty": 1,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "花園裡有一塊平行四邊形草皮，底是 4 公尺、高是 250 公分，面積是多少平方公尺？",
    "options": [
      {
        "key": "A",
        "text": "1000 平方公尺",
        "trapCode": "U08_UNIT_MIX_CM_M"
      },
      {
        "key": "B",
        "text": "100 平方公尺",
        "trapCode": "U08_UNIT_MIX_CM_M"
      },
      {
        "key": "C",
        "text": "5 平方公尺",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "D",
        "text": "10 平方公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否能先將公分與公尺統一單位，再利用 4 × 2.5 ＝ 10 快速心算面積。",
      "steps": [
        {
          "type": "text",
          "text": "題目問的是「平方公尺」，所以先把高的 250 公分除以 100 換算成 2.5 公尺（2 公尺半）。"
        },
        {
          "type": "eq",
          "expr": "250 公分 ＝ 2.5 公尺"
        },
        {
          "type": "text",
          "text": "心算技巧：看到 4 和 2.5（像 4 × 25 ＝ 100），馬上知道 4 × 2.5 ＝ 10！"
        },
        {
          "type": "eq",
          "expr": "4 × 2.5 ＝ 10"
        },
        {
          "type": "answer",
          "text": "答：10 平方公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【未統一單位直接相乘】沒發現一個是公尺、一個是公分，直接算出 4 × 250 ＝ 1000 平方公尺。",
        "B": "【面積單位進率搞混】先算出 400 × 250 ＝ 100000 平方公分後，誤以為 1 平方公尺 ＝ 1000 平方公分而少除一個 10。",
        "C": "【公式多除以 2】單位換算正確得到 10，卻誤用三角形公式再除以 2 變成 5。"
      },
      "insight": "底與高單位不同時，先換成題目問的單位再相乘！看到 4 × 2.5 ＝ 10 簡直秒殺！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 公尺 ＝ 100 公分",
        "1 平方公尺 ＝ 10000 平方公分"
      ],
      "conceptCompare": "【先換長度 vs 後換面積】先把公分換成公尺（÷ 100）再相乘，比先乘出幾十萬平方公分再除以 10000 容易心算得多！",
      "examVariations": "段考常出現「底 5 公尺、高 120 公分」或「底 80 公分、高 2 公尺」的混搭題。"
    },
    "check": {
      "expr": "4 * (250 / 100)",
      "expect": "10"
    }
  },
  {
    "id": "U08-S2-M-005",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "三角形的面積",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "先除二再相乘心算技巧",
    "level": 3,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一張底為 24 公分、高為 17 公分的三角形書籤，利用先除 2 再乘心算面積是多少平方公分？",
    "options": [
      {
        "key": "A",
        "text": "408 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "102 平方公分",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "204 平方公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "82 平方公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生計算三角形面積時，懂得先將偶數的底 24 除以 2 變小為 12，再乘以 17 來加速心算。",
      "steps": [
        {
          "type": "text",
          "text": "24 × 17 不好直接心算，先把偶數的底 24 ÷ 2 ＝ 12，再算 12 × 17 ＝ （10 ＋ 2） × 17 ＝ 170 ＋ 34 ＝ 204！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"18\" width=\"120\" height=\"44\" rx=\"8\" fill=\"#eef2ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/><text x=\"90\" y=\"45\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#312e81\">24 ÷ 2 ＝ 12</text><text x=\"172\" y=\"45\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#334155\">×</text><rect x=\"195\" y=\"18\" width=\"80\" height=\"44\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"235\" y=\"45\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#92400e\">17</text><text x=\"298\" y=\"45\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#334155\">＝</text><rect x=\"320\" y=\"18\" width=\"110\" height=\"44\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"375\" y=\"45\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#15803d\">204</text><text x=\"230\" y=\"100\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\">先讓偶數除以 2 變小：12 × 17 ＝ 170 ＋ 34 ＝ 204</text></svg>",
          "caption": "圖解：把偶數底邊先除以 2 縮小成 12，再拆成 10 ＋ 2 心算乘以 17"
        },
        {
          "type": "eq",
          "expr": "（24 ÷ 2） × 17 ＝ 12 × 17 ＝ 204"
        },
        {
          "type": "answer",
          "text": "答：204 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記除以 2】直接算出 24 × 17 ＝ 408，卻忘了三角形面積必須除以 2。",
        "B": "【重複除以 2】把 24 先除以 2 得 12、乘 17 得 204 後，最後又再除以 2 一次變成 102。",
        "D": "【周長公式混淆】誤把底與高相加再乘 2，算成 （24 ＋ 17） × 2 ＝ 82。"
      },
      "insight": "算三角形或梯形面積時，誰是偶數就先讓誰除以 2，數字立刻少一半、心算零負擔！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "三角形面積 ＝ （底 ÷ 2） × 高 ＝ 底 × （高 ÷ 2）"
      ],
      "conceptCompare": "【先除再乘 vs 先乘再除】連乘除中只要挑一個數先 ÷ 2，不可底和高都各 ÷ 2，否則會變成除以 4！",
      "examVariations": "若遇到底 18、高 15 時，也可以先算 18 ÷ 2 ＝ 9 再乘 15；若是底 25、高 16，則先算 16 ÷ 2 ＝ 8 再乘 25 ＝ 200。"
    },
    "check": {
      "expr": "24 * 17 / 2",
      "expect": "204"
    }
  },
  {
    "id": "U08-S2-M-006",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "三角形的面積",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "鈍角三角形外高辨識",
    "level": 3,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "圖中鈍角三角形的底邊長 10 公分，虛線延長 4 公分後垂直高 6 公分，面積是多少？",
    "svg": "<svg viewBox=\"0 0 380 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"55,112 225,112 295,28\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.2\"/><line x1=\"225\" y1=\"112\" x2=\"295\" y2=\"112\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"295\" y1=\"28\" x2=\"295\" y2=\"112\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"283,112 283,100 295,100\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"140\" y=\"136\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">10 公分</text><text x=\"260\" y=\"136\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\">4 公分</text><text x=\"330\" y=\"75\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">6 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "42 平方公分",
        "trapCode": "U08_OBTUSE_HEIGHT_MISSED"
      },
      {
        "key": "B",
        "text": "30 平方公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "60 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "D",
        "text": "18 平方公分",
        "trapCode": "U08_OBTUSE_HEIGHT_MISSED"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生面對鈍角三角形高落在外部延長線時，是否知道「底」只取原本三角形的實線邊長，不包含虛線延長部分。",
      "steps": [
        {
          "type": "text",
          "text": "虛線 4 公分只是為了量高度而畫出來的輔助延長線，並不屬於三角形真正的底邊！所以底仍是 10 公分、高是 6 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"60,104 240,104 315,24\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"60\" y1=\"104\" x2=\"240\" y2=\"104\" stroke=\"#0284c7\" stroke-width=\"4\"/><line x1=\"240\" y1=\"104\" x2=\"315\" y2=\"104\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/><line x1=\"315\" y1=\"24\" x2=\"315\" y2=\"104\" stroke=\"#dc2626\" stroke-width=\"2.8\" stroke-dasharray=\"5,3\"/><polyline points=\"303,104 303,92 315,92\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"150\" y=\"124\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">真正的底 ＝ 10 公分</text><text x=\"282\" y=\"124\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#94a3b8\">輔助線 4 公分</text><text x=\"362\" y=\"68\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">高 ＝ 6 公分</text><text x=\"230\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">延長線不加入底邊：10 × 6 ÷ 2 ＝ 30</text></svg>",
          "caption": "圖解：只取實線底邊 10 公分與外高 6 公分相乘除以 2，輔助虛線 4 公分不可加入"
        },
        {
          "type": "eq",
          "expr": "10 × 6 ÷ 2 ＝ 30"
        },
        {
          "type": "answer",
          "text": "答：30 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【誤把延長線加進底邊】以為整個底部都要算，算成 （10 ＋ 4） × 6 ÷ 2 ＝ 42。",
        "C": "【忘記除以 2】只算了底 × 高 ＝ 10 × 6 ＝ 60，漏掉三角形必須除以 2。",
        "D": "【誤用補減大三角形方式錯誤】拿 10 － 4 ＝ 6 當作底，算成 6 × 6 ÷ 2 ＝ 18。"
      },
      "insight": "鈍角三角形的高常常飛到圖形外面，但「虛線延長線」只是量尺，千萬別把延長線算進底邊長度！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "鈍角三角形面積 ＝ 原實線底邊 × 外高 ÷ 2"
      ],
      "conceptCompare": "【為何可以這樣算？】其實等於「包含延長線的大直角三角形面積 － 多出來的小直角三角形面積」，化簡後剛好就是原底邊 × 外高 ÷ 2！",
      "examVariations": "段考也常把高畫在左外側或上方延長線上，口訣永遠不變：看實線底邊，不加虛線。"
    },
    "check": {
      "expr": "10 * 6 / 2",
      "expect": "30"
    }
  },
  {
    "id": "U08-S2-M-007",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "三角形的面積",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "三角形面積反推高心算",
    "level": 4,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一面三角形三角旗面積是 54 平方公分，已知底邊長 12 公分，它的高是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "15 公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      },
      {
        "key": "B",
        "text": "4.5 公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "9 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "18 公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生反推三角形的高時，記得先把面積乘以 2 還原成平行四邊形，再除以底邊。",
      "steps": [
        {
          "type": "text",
          "text": "把兩面一模一樣的三角旗拼在一起，就會變成底 12 公分、面積為 54 × 2 ＝ 108 平方公分的平行四邊形，再除以 12 就是高！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,92 195,92 145,22\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"145,22 270,22 195,92\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"132\" y=\"72\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">54</text><text x=\"205\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">54</text><text x=\"132\" y=\"110\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">底 12 公分</text><text x=\"355\" y=\"52\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">先拼成兩倍：54 × 2 ＝ 108</text><text x=\"355\" y=\"80\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">再除底邊：108 ÷ 12 ＝ 9 公分</text></svg>",
          "caption": "圖解：將兩個相同三角形拼成平行四邊形，面積變兩倍 108 再除以底 12"
        },
        {
          "type": "eq",
          "expr": "54 × 2 ÷ 12 ＝ 108 ÷ 12 ＝ 9"
        },
        {
          "type": "answer",
          "text": "答：9 公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【反推忘記先乘 2】直接把三角形當成平行四邊形算，算成 54 ÷ 12 ＝ 4.5 公分。",
        "D": "【乘以 2 後又沒除正確】誤算成 54 ÷ 3 ＝ 18 或把 108 ÷ 12 算成 18。",
        "A": "【誤套周長半周公式】算成 54 ÷ 2 － 12 ＝ 15。"
      },
      "insight": "三角形反推口訣：「看見三角形求底高，面積先乘 2 再除掉！」（也可先算 54 ÷ 12 ＝ 4.5 再 × 2 ＝ 9 喔！）"
    },
    "extensionStudy": {
      "coreFormulas": [
        "三角形的高 ＝ 面積 × 2 ÷ 底",
        "三角形的底 ＝ 面積 × 2 ÷ 高"
      ],
      "conceptCompare": "【先 × 2 再 ÷ 底 vs 先 ÷ 底再 × 2】遇到 54 × 2 ÷ 12，也可以看成「底的一半是 6 公分，54 ÷ 6 ＝ 9 公分」，心算更神速！",
      "examVariations": "心算技巧進階：把底 12 先 ÷ 2 變成 6，直接心算 54 ÷ 6 ＝ 9，連乘 108 都省了！"
    },
    "check": {
      "expr": "54 * 2 / 12",
      "expect": "9"
    }
  },
  {
    "id": "U08-S2-M-008",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "三角形的面積",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "直角三角形直角邊識別",
    "level": 4,
    "difficulty": 2,
    "work": "sm",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖是一個三邊長分別為 5 公分、12 公分與 13 公分的直角三角形，它的面積是幾平方公分？",
    "svg": "<svg viewBox=\"0 0 360 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"90,32 90,118 275,118\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2.2\"/><polyline points=\"90,104 104,104 104,118\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"55\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">5 公分</text><text x=\"182\" y=\"138\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">12 公分</text><text x=\"205\" y=\"68\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\">13 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "60 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "30 平方公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "78 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "D",
        "text": "32.5 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生在直角三角形三邊都給出時，能選出構成直角的兩條較短邊當底與高，避開最長斜邊。",
      "steps": [
        {
          "type": "text",
          "text": "直角三角形中最長的 13 公分是斜邊，夾住直角的兩條邊 5 公分和 12 公分才是互相垂直的底和高！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,28 70,108 235,108\" fill=\"#f0fdf4\" stroke=\"#16a34a\" stroke-width=\"2\"/><line x1=\"70\" y1=\"28\" x2=\"70\" y2=\"108\" stroke=\"#dc2626\" stroke-width=\"3.5\"/><line x1=\"70\" y1=\"108\" x2=\"235\" y2=\"108\" stroke=\"#0284c7\" stroke-width=\"3.5\"/><polyline points=\"70,95 83,95 83,108\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"36\" y=\"72\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">5 公分</text><text x=\"152\" y=\"128\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">12 公分</text><text x=\"182\" y=\"60\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#94a3b8\">13 公分（斜邊）</text><text x=\"345\" y=\"70\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">直角兩邊相乘 ÷ 2</text><text x=\"345\" y=\"96\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">5 × （12 ÷ 2） ＝ 30</text></svg>",
          "caption": "圖解：夾住直角的兩短邊 5 公分與 12 公分互為底高，先算 12 ÷ 2 ＝ 6 再乘 5"
        },
        {
          "type": "eq",
          "expr": "5 × 12 ÷ 2 ＝ 5 × 6 ＝ 30"
        },
        {
          "type": "answer",
          "text": "答：30 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記除以 2】選對了 5 和 12，卻忘記除以 2 而直接算出 5 × 12 ＝ 60。",
        "C": "【誤選 12 與 13 相乘】拿 12 公分去乘斜邊 13 公分再除以 2，錯算出 78。",
        "D": "【誤把斜邊當底或高】拿 5 公分去乘最長斜邊 13 公分再除以 2，得到 32.5。"
      },
      "insight": "直角三角形不用另外畫高！夾住直角的那兩條短邊直接相乘除以 2，永遠比斜邊快！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "直角三角形面積 ＝ 兩直角邊相乘 ÷ 2"
      ],
      "conceptCompare": "【三邊長大小順序】直角三角形中「斜邊最長」，所以如果題目沒給圖只說三邊是 6、8、10 公分，10 一定是斜邊，面積一定算 6 × 8 ÷ 2！",
      "examVariations": "經典進階題：算出直角三角形面積 30 後，再回頭反推「13 公分斜邊上的高是多少」！"
    },
    "check": {
      "expr": "5 * 12 / 2",
      "expect": "30"
    }
  },
  {
    "id": "U08-S3-M-009",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-3",
    "sectionName": "梯形的面積",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "梯形湊十與先除二簡算",
    "level": 5,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一塊上底 13 公分、下底 17 公分、高 18 公分的梯形布料，用湊整心算面積是多少平方公分？",
    "options": [
      {
        "key": "A",
        "text": "117 平方公分",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "B",
        "text": "540 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "153 平方公分",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "D",
        "text": "270 平方公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生在計算梯形面積時，利用上底與下底湊整十，再將偶數高先除以 2 的超快心算策略。",
      "steps": [
        {
          "type": "text",
          "text": "先算上底 ＋ 下底 ＝ 13 ＋ 17 ＝ 30（剛好湊成整十！），再把高 18 ÷ 2 ＝ 9，最後 30 × 9 ＝ 270 瞬間算完！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"18\" width=\"155\" height=\"44\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"102\" y=\"45\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">13 ＋ 17 ＝ 30</text><text x=\"198\" y=\"45\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#334155\">×</text><rect x=\"215\" y=\"18\" width=\"115\" height=\"44\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"272\" y=\"45\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">18 ÷ 2 ＝ 9</text><text x=\"348\" y=\"45\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#334155\">＝</text><rect x=\"365\" y=\"18\" width=\"75\" height=\"44\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"402\" y=\"45\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#15803d\">270</text><text x=\"230\" y=\"98\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\">雙重簡算：上下底湊 30 × 高先除二變 9 ＝ 270</text></svg>",
          "caption": "圖解：上下底 13 與 17 湊整 30，高 18 先除以 2 變成 9，心算 30 × 9 ＝ 270"
        },
        {
          "type": "eq",
          "expr": "（13 ＋ 17） × （18 ÷ 2） ＝ 30 × 9 ＝ 270"
        },
        {
          "type": "answer",
          "text": "答：270 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記除以 2】算出了 （13 ＋ 17） × 18 ＝ 540，卻忘記梯形面積最後要除以 2。",
        "C": "【漏加上底】計算時忘記加 13，直接用下底算成 17 × 18 ÷ 2 ＝ 153。",
        "A": "【漏加下底】計算時忘記加 17，只用上底算成 13 × 18 ÷ 2 ＝ 117。"
      },
      "insight": "梯形公式 （上底 ＋ 下底） × 高 ÷ 2，記得「上下底先湊整，高是偶數先砍半」！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "梯形面積 ＝ （上底 ＋ 下底） × 高 ÷ 2"
      ],
      "conceptCompare": "【為何 （13 ＋ 17） × 18 ÷ 2 等於 30 × 9？】乘除同級時，先把高 18 ÷ 2 變成 9，跟最後再 ÷ 2 的結果完全一樣，但乘起來輕鬆十倍！",
      "examVariations": "算堆疊的木頭或合唱團人數總和時，其實也是「（頂層 ＋ 底層） × 層數 ÷ 2」的梯形心算術！"
    },
    "check": {
      "expr": "(13 + 17) * 18 / 2",
      "expect": "270"
    }
  },
  {
    "id": "U08-S3-M-010",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-3",
    "sectionName": "梯形的面積",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "梯形已知面積反推上底",
    "level": 5,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一個梯形花台面積是 60 平方公尺，已知高 6 公尺、下底 12 公尺，上底長幾公尺？",
    "options": [
      {
        "key": "A",
        "text": "20 公尺",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "B",
        "text": "10 公尺",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "8 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "2 公尺",
        "trapCode": "U08_FORGET_DIV_TWO"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否掌握梯形反推上底的兩步驟心算：先「面積 × 2 ÷ 高」求出上下底的和，再減去下底。",
      "steps": [
        {
          "type": "text",
          "text": "把兩個一樣的梯形倒扣拼成一個平行四邊形，總面積變成 60 × 2 ＝ 120 平方公尺；除以高 6 公尺得出「上底 ＋ 下底 ＝ 20 公尺」。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"55,25 115,25 145,95 25,95\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><polygon points=\"115,25 235,25 205,95 145,95\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"85\" y=\"65\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">60</text><text x=\"175\" y=\"65\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">60</text><text x=\"85\" y=\"114\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">下底 12</text><text x=\"175\" y=\"114\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">上底 ？</text><text x=\"345\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">兩底和 ＝ 60 × 2 ÷ 6 ＝ 20</text><text x=\"345\" y=\"80\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">上底 ＝ 20 － 12 ＝ 8 公尺</text></svg>",
          "caption": "圖解：兩個梯形拼成底為（上底＋下底）的平行四邊形，先算出兩底和 20 再扣下底"
        },
        {
          "type": "eq",
          "expr": "60 × 2 ÷ 6 － 12 ＝ 20 － 12 ＝ 8"
        },
        {
          "type": "answer",
          "text": "答：8 公尺"
        }
      ],
      "distractorAnalysis": {
        "A": "【算出兩底和就停手】求出 60 × 2 ÷ 6 ＝ 20 後直接當成答案，忘記減去下底 12 公尺。",
        "B": "【忘記先乘 2】沒有把面積乘 2，直接算 60 ÷ 6 ＝ 10 就當成答案。",
        "D": "【忘記乘 2 且反減】只算 60 ÷ 6 ＝ 10，發現比下底 12 小就用 12 － 10 ＝ 2。"
      },
      "insight": "梯形反推某個底，一定要先算出「上底 ＋ 下底」的總和，最後再減掉已知的那一個底！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "上底 ＋ 下底 ＝ 面積 × 2 ÷ 高",
        "上底 ＝ 面積 × 2 ÷ 高 － 下底"
      ],
      "conceptCompare": "【反推高 vs 反推底】求高只要兩步（面積 × 2 ÷ 兩底和）；求上底多一步（面積 × 2 ÷ 高 再 － 下底）。",
      "examVariations": "心算快招：直接先把下底 12 的一半是 6，60 ÷ 6 ＝ 10...不對！最穩還是「面積先乘 2 變 120 ➔ 除高 6 變 20 ➔ 減 12 得 8」。"
    },
    "check": {
      "expr": "60 * 2 / 6 - 12",
      "expect": "8"
    }
  },
  {
    "id": "U08-S3-M-011",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-3",
    "sectionName": "梯形的面積",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "直角梯形直角腰當高心算",
    "level": 6,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖這塊直角梯形木板，各邊長度標示如圖，請心算它的面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 360 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"85,32 195,32 275,116 85,116\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2.2\"/><polyline points=\"85,102 99,102 99,116\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><polyline points=\"85,46 99,46 99,32\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"140\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#9a3412\">7 公分</text><text x=\"180\" y=\"138\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#9a3412\">13 公分</text><text x=\"52\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">8 公分</text><text x=\"265\" y=\"72\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\">10 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "80 平方公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "100 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "C",
        "text": "160 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "D",
        "text": "38 平方公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生在直角梯形四條邊都標示出來時，能準確辨識垂直的腰 8 公分才是高，而斜腰 10 公分不能用來算面積。",
      "steps": [
        {
          "type": "text",
          "text": "左邊那條同時垂直上底和下底的邊（8 公分）就是梯形的高；右邊斜斜的 10 公分是斜腰，算面積不用它！上底 7 ＋ 下底 13 ＝ 20，再 × 8 ÷ 2 ＝ 80。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"65,28 155,28 225,104 65,104\" fill=\"#fff7ed\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"65\" y1=\"28\" x2=\"65\" y2=\"104\" stroke=\"#dc2626\" stroke-width=\"3.5\"/><polyline points=\"65,92 77,92 77,104\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><text x=\"110\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#9a3412\">上底 7</text><text x=\"145\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#9a3412\">下底 13</text><text x=\"34\" y=\"70\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">高 8</text><text x=\"225\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#94a3b8\">斜腰 10（不用）</text><text x=\"355\" y=\"62\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">7 ＋ 13 ＝ 20</text><text x=\"355\" y=\"90\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">20 × （8 ÷ 2） ＝ 80</text></svg>",
          "caption": "圖解：直角邊 8 公分就是高，排除斜邊 10 公分後用 20 × 4 ＝ 80 心算"
        },
        {
          "type": "eq",
          "expr": "（7 ＋ 13） × 8 ÷ 2 ＝ 20 × 4 ＝ 80"
        },
        {
          "type": "answer",
          "text": "答：80 平方公分"
        }
      ],
      "distractorAnalysis": {
        "C": "【忘記除以 2】選對上底 7、下底 13、高 8，卻忘記除以 2 得出 160。",
        "D": "【把周長當成面積】直接把四條邊全部加起來，算成 7 ＋ 13 ＋ 8 ＋ 10 ＝ 38。",
        "B": "【誤把斜腰當成高】拿上下底和 20 去乘右邊斜腰 10 公分再除以 2，錯算出 100。"
      },
      "insight": "直角梯形的直角邊「本身就是高」！看到直角記號就能忽略旁邊的斜腰，心算 20 × 4 ＝ 80！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "直角梯形的垂直腰 ＝ 梯形的高"
      ],
      "conceptCompare": "【直立直角梯形 vs 躺平直角梯形】考試有時會把直角梯形轉 90 度躺平（兩條平行邊變左右直邊），一樣先找一組平行的邊當上下底，垂直底邊的那條就是高！",
      "examVariations": "有時題目會給直角梯形周長和三邊長，要先用周長減掉斜腰與兩底才能算出高喔！"
    },
    "check": {
      "expr": "(7 + 13) * 8 / 2",
      "expect": "80"
    }
  },
  {
    "id": "U08-S3-M-012",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-3",
    "sectionName": "梯形的面積",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "梯形切最大三角形剩餘心算",
    "level": 6,
    "difficulty": 3,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "從圖中的梯形色紙剪下一個最大的三角形（空白部分），剩下的鋪色面積是幾平方公分？",
    "svg": "<svg viewBox=\"0 0 360 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"105,32 215,32 275,118 75,118\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"75,118 275,118 175,32\" fill=\"#ffffff\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"175\" y1=\"32\" x2=\"175\" y2=\"118\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><polyline points=\"175,106 187,106 187,118\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><text x=\"160\" y=\"23\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">6 公分</text><text x=\"175\" y=\"139\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\">10 公分</text><text x=\"205\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">7 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "35 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "B",
        "text": "21 平方公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "42 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "D",
        "text": "56 平方公分",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否看出從梯形剪去最大三角形後，剩下的兩個小三角形合起來就是「以上底為底、梯形高為高」的三角形。",
      "steps": [
        {
          "type": "text",
          "text": "最大的空白三角形佔了整個下底 10 公分，剩下的兩塊藍色小三角形的高都是 7 公分，且它們的底加起來剛好就是上底 6 公分！所以直接算 6 × 7 ÷ 2 ＝ 21 就能秒殺。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 140\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,26 165,26 225,104 40,104\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"1.5\"/><polygon points=\"70,26 115,26 40,104\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.8\"/><polygon points=\"115,26 165,26 225,104\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1.8\"/><line x1=\"115\" y1=\"26\" x2=\"115\" y2=\"104\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><text x=\"117\" y=\"18\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">兩藍色底相加 ＝ 6 公分</text><text x=\"138\" y=\"70\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">高 7</text><text x=\"345\" y=\"52\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">免算整塊再相減！</text><text x=\"345\" y=\"82\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">剩餘面積 ＝ 6 × 7 ÷ 2 ＝ 21</text></svg>",
          "caption": "圖解：剩下兩塊鋪色三角形合起來的底正好是上底 6 公分，高為 7 公分"
        },
        {
          "type": "eq",
          "expr": "6 × 7 ÷ 2 ＝ 21"
        },
        {
          "type": "answer",
          "text": "答：21 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【算成剪下的空白三角形】看錯題目問的目標，算出剪掉的最大空白三角形 10 × 7 ÷ 2 ＝ 35。",
        "D": "【算出整個梯形面積】只算了原梯形 （6 ＋ 10） × 7 ÷ 2 ＝ 56，忘記扣掉剪下部分。",
        "C": "【忘記除以 2】知道剩餘底是 6、高是 7，但忘了三角形面積要除以 2 而選 42。"
      },
      "insight": "梯形裡頭「下底 × 高 ÷ 2」是最大三角形，「上底 × 高 ÷ 2」就是剩下的全部！根本不用相減！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "梯形內最大三角形面積 ＝ 較長的底 × 高 ÷ 2",
        "剪去最大三角形後剩餘面積 ＝ 較短的底 × 高 ÷ 2"
      ],
      "conceptCompare": "【梯形拆雙三角】把梯形沿對角線切開，就是「上底 × 高 ÷ 2」與「下底 × 高 ÷ 2」兩個三角形！",
      "examVariations": "如果題目沒有給圖，問「從上底 8 公分、下底 14 公分、高 5 公分的梯形剪出最大三角形」，記得一定要選下底 14 當底邊！"
    },
    "check": {
      "expr": "6 * 7 / 2",
      "expect": "21",
      "extraChecks": [
        {
          "expr": "(6 + 10) * 7 / 2 - 10 * 7 / 2",
          "expect": "21"
        }
      ]
    }
  },
  {
    "id": "U08-S4-M-013",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "面積的應用",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "底高雙向倍數變化心算",
    "level": 7,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一塊平行四邊形色紙原面積是 15 平方公分，若底邊放大為 3 倍、高放大為 2 倍，新面積是多少平方公分？",
    "options": [
      {
        "key": "A",
        "text": "90 平方公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "45 平方公分",
        "trapCode": "U08_SCALE_LINEAR_AREA"
      },
      {
        "key": "C",
        "text": "75 平方公分",
        "trapCode": "U08_SCALE_LINEAR_AREA"
      },
      {
        "key": "D",
        "text": "180 平方公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否理解底與高同時放大時，面積倍數必須將兩者的放大倍數「相乘」，而非相加。",
      "steps": [
        {
          "type": "text",
          "text": "面積 ＝ 底 × 高，當底變成原來的 3 倍、高變成原來的 2 倍時，面積就會變成原來的 3 × 2 ＝ 6 倍！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"55,20 110,20 95,55 40,55\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><polygon points=\"110,20 165,20 150,55 95,55\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><polygon points=\"165,20 220,20 205,55 150,55\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.8\"/><polygon points=\"40,55 95,55 80,90 25,90\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><polygon points=\"95,55 150,55 135,90 80,90\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><polygon points=\"150,55 205,55 190,90 135,90\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><text x=\"122\" y=\"114\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">底 3 倍 × 高 2 倍 ＝ 共 6 塊</text><text x=\"340\" y=\"52\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">總倍率 ＝ 3 × 2 ＝ 6 倍</text><text x=\"340\" y=\"82\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">15 × 6 ＝ 90 平方公分</text></svg>",
          "caption": "圖解：底變 3 倍、高變 2 倍，一共可鋪滿 3 × 2 ＝ 6 塊原本的平行四邊形"
        },
        {
          "type": "eq",
          "expr": "15 × 3 × 2 ＝ 15 × 6 ＝ 90"
        },
        {
          "type": "answer",
          "text": "答：90 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【只算一邊放大】只乘了底放大的 3 倍（15 × 3 ＝ 45），漏乘高的 2 倍。",
        "D": "【乘法計算粗心】多乘了一次 2，算出 15 × 6 × 2 ＝ 180。",
        "C": "【倍數用加的】把放大 3 倍和 2 倍誤相加為 3 ＋ 2 ＝ 5 倍，算出 15 × 5 ＝ 75。"
      },
      "insight": "底和高是相乘的夥伴，倍數變化也一定要「相乘」！3 倍 × 2 倍 ＝ 6 倍，15 × 6 ＝ 90！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "新面積倍率 ＝ 底的倍數 × 高的倍數"
      ],
      "conceptCompare": "【面積倍數 vs 周長倍數】若長方形長寬都變為 3 倍，周長只變 3 倍，但面積會變為 3 × 3 ＝ 9 倍！",
      "examVariations": "對三角形也完全適用！三角形底變 3 倍、高變 2 倍，面積同樣變 3 × 2 ＝ 6 倍（因為 ÷ 2 沒有改變倍數關係）。"
    },
    "check": {
      "expr": "15 * 3 * 2",
      "expect": "90"
    }
  },
  {
    "id": "U08-S4-M-014",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "面積的應用",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "十字道路平移心算術",
    "level": 7,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如下圖，長 22 公尺、寬 14 公尺的公園草地中有寬 2 公尺的十字路，草地總面積是幾平方公尺？",
    "svg": "<svg viewBox=\"0 0 380 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"65\" y=\"22\" width=\"240\" height=\"104\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><rect x=\"165\" y=\"22\" width=\"24\" height=\"104\" fill=\"#fef3c7\"/><rect x=\"65\" y=\"64\" width=\"240\" height=\"22\" fill=\"#fef3c7\"/><line x1=\"165\" y1=\"22\" x2=\"165\" y2=\"126\" stroke=\"#d97706\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/><line x1=\"189\" y1=\"22\" x2=\"189\" y2=\"126\" stroke=\"#d97706\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/><line x1=\"65\" y1=\"64\" x2=\"305\" y2=\"64\" stroke=\"#d97706\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/><line x1=\"65\" y1=\"86\" x2=\"305\" y2=\"86\" stroke=\"#d97706\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/><text x=\"185\" y=\"144\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#166534\">長 22 公尺</text><text x=\"33\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#166534\">14 公尺</text><text x=\"248\" y=\"79\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#92400e\">路寬 2 公尺</text><text x=\"218\" y=\"46\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#92400e\">路寬 2 公尺</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "240 平方公尺",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "236 平方公尺",
        "trapCode": "U08_ROAD_DOUBLE_SUB"
      },
      {
        "key": "C",
        "text": "244 平方公尺",
        "trapCode": "U08_ROAD_DOUBLE_SUB"
      },
      {
        "key": "D",
        "text": "280 平方公尺",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生能否利用「道路平移靠邊法」避開十字交叉重疊計算，直接心算剩餘大長方形面積。",
      "steps": [
        {
          "type": "text",
          "text": "不用大長方形慢慢扣！把十字路往旁邊推到底，四塊草地會自動拼成一塊完整的長方形：新長 22 － 2 ＝ 20 公尺，新寬 14 － 2 ＝ 12 公尺。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"18\" width=\"175\" height=\"82\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/><rect x=\"35\" y=\"18\" width=\"150\" height=\"64\" fill=\"#86efac\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"110\" y=\"54\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#14532d\">20 × 12 ＝ 240</text><text x=\"110\" y=\"118\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#166534\">拼合長 22 － 2 ＝ 20</text><text x=\"340\" y=\"42\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">道路推到邊緣後：</text><text x=\"340\" y=\"68\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">新長 20 公尺、新寬 12 公尺</text><text x=\"340\" y=\"96\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">20 × 12 ＝ 240 平方公尺</text></svg>",
          "caption": "圖解：將兩條路分別滑到右邊與下邊，草地拼合成 20 × 12 的整塊長方形"
        },
        {
          "type": "eq",
          "expr": "（22 － 2） × （14 － 2） ＝ 20 × 12 ＝ 240"
        },
        {
          "type": "answer",
          "text": "答：240 平方公尺"
        }
      ],
      "distractorAnalysis": {
        "B": "【十字重疊重複扣除】用總面積 308 減去兩條路 44 和 28 得到 236，卻忘記把中間重複扣掉的 2 × 2 ＝ 4 加回來。",
        "C": "【誤多加一次交叉面積】在正確結果 240 上又多加了一個 2 × 2 ＝ 4，錯算成 244。",
        "D": "【只扣掉一條路寬】算成 20 × 14 ＝ 280，漏掉了橫向道路寬度的扣除。"
      },
      "insight": "遇到十字路就「往邊推」！長減路寬、寬減路寬，馬上變成超好心算的 20 × 12 ＝ 240！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "十字道路剩餘面積 ＝ （原長 － 路寬） × （原寬 － 路寬）"
      ],
      "conceptCompare": "【平移法 vs 扣減補回法】平移法只要兩個減法與一個乘法；如果道路是斜的（平行四邊形道路），只要寬度等寬，平行平移依然完全成立！",
      "examVariations": "如果有 2 條直路、1 條橫路，就變成（原長 － 2 × 路寬） × （原寬 － 1 × 路寬）。"
    },
    "check": {
      "expr": "(22 - 2) * (14 - 2)",
      "expect": "240",
      "extraChecks": [
        {
          "expr": "22 * 14 - 22 * 2 - 14 * 2 + 2 * 2",
          "expect": "240"
        }
      ]
    }
  },
  {
    "id": "U08-S4-M-015",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "面積的應用",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "平行線間等高比例心算",
    "level": 8,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "下圖兩圖形夾在平行線之間，已知平行四邊形面積是 40 平方公分，右邊三角形面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 420 155\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"32\" x2=\"400\" y2=\"32\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"6,4\"/><line x1=\"20\" y1=\"114\" x2=\"400\" y2=\"114\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"6,4\"/><polygon points=\"70,32 165,32 135,114 40,114\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"88\" y=\"136\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">8 公分</text><polygon points=\"220,114 365,114 300,32\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"292\" y=\"136\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">12 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "60 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "B",
        "text": "20 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "C",
        "text": "30 平方公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "45 平方公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生是否知道夾在同組平行線間的圖形「高都相等」，能從已知圖形反推高再算出三角形面積。",
      "steps": [
        {
          "type": "text",
          "text": "兩個圖形夾在相同的平行線之間，所以高一樣長！先用平行四邊形面積 40 ÷ 底 8 ＝ 高 5 公分，再算右邊三角形 12 × 5 ÷ 2 ＝ 30 平方公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"26\" x2=\"440\" y2=\"26\" stroke=\"#94a3b8\" stroke-width=\"1.6\" stroke-dasharray=\"5,4\"/><line x1=\"20\" y1=\"102\" x2=\"440\" y2=\"102\" stroke=\"#94a3b8\" stroke-width=\"1.6\" stroke-dasharray=\"5,4\"/><polygon points=\"65,26 155,26 125,102 35,102\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><line x1=\"65\" y1=\"26\" x2=\"65\" y2=\"102\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\"/><text x=\"80\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\">底 8</text><text x=\"105\" y=\"68\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">高 5</text><polygon points=\"225,102 385,102 315,26\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"315\" y1=\"26\" x2=\"315\" y2=\"102\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\"/><text x=\"305\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#92400e\">底 12</text><text x=\"345\" y=\"68\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">同高 5</text><text x=\"230\" y=\"142\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">先求高 40 ÷ 8 ＝ 5，再算三角形 12 × 5 ÷ 2 ＝ 30</text></svg>",
          "caption": "圖解：平行線間同高 5 公分，右邊三角形直接算出 12 × 5 ÷ 2 ＝ 30"
        },
        {
          "type": "eq",
          "expr": "40 ÷ 8 ＝ 5，12 × 5 ÷ 2 ＝ 30"
        },
        {
          "type": "answer",
          "text": "答：30 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【忘記除以 2】算出同高是 5 公分後，算成 12 × 5 ＝ 60 而忘記除以 2。",
        "B": "【誤認兩者同底】直接把平行四邊形面積 40 除以 2 變成 20，沒注意到三角形底是 12 而不是 8。",
        "D": "【比例心算粗心】算錯底邊比例，誤以為 40 加 5 得出 45。"
      },
      "insight": "夾在平行線中間，高就像共用鑰匙！只要先求出一個圖形的高，所有圖形的高通通知道！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平行線間等高：先反推共用高 ＝ 已知面積 ÷ 已知底"
      ],
      "conceptCompare": "【先求高法 vs 倍數比較法】三角形底 12 是平行四邊形底 8 的 1.5 倍，但三角形多了一個 ÷ 2，所以面積 ＝ 40 × 1.5 ÷ 2 ＝ 30！",
      "examVariations": "段考也常把其中一個圖形換成梯形，例如告訴你梯形上下底和與平行四邊形面積相同，反推底邊長。"
    },
    "check": {
      "expr": "40 / 8 * 12 / 2",
      "expect": "30"
    }
  },
  {
    "id": "U08-S4-M-016",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "面積的應用",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "同高挖空底邊合併心算",
    "level": 8,
    "difficulty": 4,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，大梯形內挖掉一個同高的空白三角形，請心算鋪色部分面積是多少平方公分？",
    "svg": "<svg viewBox=\"0 0 380 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"90,30 265,30 305,118 55,118\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\"/><polygon points=\"115,118 240,118 175,30\" fill=\"#ffffff\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"175\" y1=\"30\" x2=\"175\" y2=\"118\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><text x=\"177\" y=\"21\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">上底 14 公分</text><text x=\"177\" y=\"139\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\">全下底 16 公分</text><text x=\"222\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">高 10 公分</text><text x=\"177\" y=\"109\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">空白底 10 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "80 平方公分",
        "trapCode": "U08_TRAPEZOID_MISS_BASE"
      },
      {
        "key": "B",
        "text": "150 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "C",
        "text": "200 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "D",
        "text": "100 平方公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗學生是否發現大梯形與空白三角形同高 10 公分，能用分配律將底合併心算或分別心算相減。",
      "steps": [
        {
          "type": "text",
          "text": "方法一（心算合併）：梯形上下底和 14 ＋ 16 ＝ 30，挖掉的空白三角形同高且底為 10，所以剩下鋪色底和 ＝ 30 － 10 ＝ 20，再算 20 × 10 ÷ 2 ＝ 100！"
        },
        {
          "type": "eq",
          "expr": "（14 ＋ 16 － 10） × 10 ÷ 2 ＝ 20 × 5 ＝ 100"
        },
        {
          "type": "text",
          "text": "方法二（標準相減驗算）：梯形 （14 ＋ 16） × 10 ÷ 2 ＝ 150，減去三角形 10 × 10 ÷ 2 ＝ 50，同樣等於 100。"
        },
        {
          "type": "answer",
          "text": "答：100 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【只算原梯形忘記挖空】算完大梯形 （14 ＋ 16） × 10 ÷ 2 ＝ 150 就停下來，忘了減掉空白三角形 50。",
        "C": "【把扣除誤算成相加】把大梯形 150 和空白三角形 50 加起來，得到錯誤的 200。",
        "A": "【梯形漏加上底】計算梯形面積時漏加 14，算出 16 × 10 ÷ 2 ＝ 80。"
      },
      "insight": "高全部都是 10 公分又都要 ÷ 2，只要把「梯形兩底減掉空白底」合併成 20，20 × 5 ＝ 100 一秒搞定！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "同高面積相減合併：（甲上底 ＋ 甲下底 － 乙底） × 高 ÷ 2"
      ],
      "conceptCompare": "【合併心算 vs 逐一算出相減】當多個梯形、三角形共享同一個高時，先把「底加減合併」再乘高除 2，數字往往比單獨算更漂亮！",
      "examVariations": "即使空白三角形在邊緣或由兩塊組成，只要底總和一樣、高都是 10，結果就完全一樣。"
    },
    "check": {
      "expr": "(14 + 16) * 10 / 2 - 10 * 10 / 2",
      "expect": "100"
    }
  },
  {
    "id": "U08-RV-M-017",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "長方形一半模型心算",
    "level": 9,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如下圖，長 18 公分、寬 11 公分的長方形畫框內有兩個鋪色三角形，鋪色面積共幾平方公分？",
    "svg": "<svg viewBox=\"0 0 380 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"28\" width=\"240\" height=\"96\" fill=\"#c7d2fe\" stroke=\"#4f46e5\" stroke-width=\"2.2\"/><polygon points=\"70,124 310,124 148,28\" fill=\"#ffffff\" stroke=\"#4f46e5\" stroke-width=\"2\"/><text x=\"190\" y=\"144\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#3730a3\">長 18 公分</text><text x=\"36\" y=\"80\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#3730a3\">11 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "99 平方公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "58 平方公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      },
      {
        "key": "C",
        "text": "198 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "D",
        "text": "88 平方公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗學生是否能一眼認出經典「一半模型」：不管頂點在上邊哪裡，空白三角形與左右鋪色三角形各佔長方形一半。",
      "steps": [
        {
          "type": "text",
          "text": "空白三角形的底就是長方形的長 18 公分、高就是寬 11 公分，所以空白剛好佔整塊長方形的一半；剩下的兩塊鋪色合起來當然也剛好是一半！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 140\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"20\" width=\"200\" height=\"88\" fill=\"#a5b4fc\" stroke=\"#4f46e5\" stroke-width=\"2\"/><polygon points=\"35,108 235,108 100,20\" fill=\"#ffffff\" stroke=\"#4f46e5\" stroke-width=\"1.8\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"108\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"66\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#312e81\">左半</text><text x=\"185\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#312e81\">右半</text><text x=\"345\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#3730a3\">鋪色 ＝ 長方形面積的一半</text><text x=\"345\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">（18 ÷ 2） × 11 ＝ 9 × 11 ＝ 99</text></svg>",
          "caption": "圖解：過頂點作垂直分割線，左右兩側鋪色與空白各佔一半，合計為總面積的一半"
        },
        {
          "type": "eq",
          "expr": "18 × 11 ÷ 2 ＝ 9 × 11 ＝ 99"
        },
        {
          "type": "answer",
          "text": "答：99 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【把周長當面積】算成長方形周長 （18 ＋ 11） × 2 ＝ 58。",
        "D": "【乘法計算粗心】把 9 × 11 錯算成 88。",
        "C": "【忘記取一半】只算了整個長方形面積 18 × 11 ＝ 198，忘了鋪色只佔一半。"
      },
      "insight": "不必知道左邊和右邊三角形各自多寬！只要「底合起來是整條長、高是寬」，鋪色永遠等於長方形的一半！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "長方形一半模型：上下底同長、頂點落在對邊上的三角形 ＝ 長方形面積 ÷ 2"
      ],
      "conceptCompare": "【左右不對稱也成立！】就算白色三角形往左歪或往右歪，只要三個頂點在長方形邊上（底＝長、高＝寬），鋪色總面積依然永遠不變！",
      "examVariations": "把長方形換成平行四邊形，這個「一半模型」魔法也 100% 成立！"
    },
    "check": {
      "expr": "18 * 11 / 2",
      "expect": "99"
    }
  },
  {
    "id": "U08-RV-M-018",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "底放大高縮小綜合倍數心算",
    "level": 9,
    "difficulty": 5,
    "work": "md",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "一個三角形原面積為 48 平方公分，若把底變為原來的 2 倍、高縮為原來的 1/4，新面積是幾平方公分？",
    "options": [
      {
        "key": "A",
        "text": "12 平方公分",
        "trapCode": "U08_SCALE_LINEAR_AREA"
      },
      {
        "key": "B",
        "text": "96 平方公分",
        "trapCode": "U08_SCALE_LINEAR_AREA"
      },
      {
        "key": "C",
        "text": "24 平方公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "36 平方公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗學生在底放大而高同時縮小時，能透過倍數相乘 2 × 1/4 ＝ 1/2 進行直覺心算。",
      "steps": [
        {
          "type": "text",
          "text": "底變為原來的 2 倍，面積先 × 2；高縮為原來的 1/4，面積再 ÷ 4。先 × 2 再 ÷ 4，合起來就是變成原來的 1/2（一半）！"
        },
        {
          "type": "eq",
          "expr": "48 × 2 ÷ 4 ＝ 48 ÷ 2 ＝ 24"
        },
        {
          "type": "answer",
          "text": "答：24 平方公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【只算高縮小 1/4】只算了 48 ÷ 4 ＝ 12，忘記底同時放大了 2 倍。",
        "D": "【加減替代乘除】把縮少 1/4 錯算成減掉 12，得出 48 － 12 ＝ 36。",
        "B": "【只算底放大 2 倍】只算了 48 × 2 ＝ 96，忘記高縮小為原來的 1/4。"
      },
      "insight": "又乘 2 又除以 4，其實就是「除以 2」！直接把 48 砍半得 24，一秒過關！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "新面積 ＝ 原面積 × 底的倍率 × 高的倍率"
      ],
      "conceptCompare": "【假設數字驗證法】萬一倍數感覺怪怪的，可以自己假設原三角形底 8、高 12（面積 48），改完後底變 16、高變 3，算 16 × 3 ÷ 2 ＝ 24，立刻雙重確認！",
      "examVariations": "段考常考反過來問：「新面積要保持不變，底變成 4 倍，高應該變成原來的幾分之幾？」答案就是 1/4！"
    },
    "check": {
      "expr": "48 * 2 * (1/4)",
      "expect": "24"
    }
  },
  {
    "id": "U08-RV-M-019",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "平行四邊形雙底雙高面積守恆",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖平行四邊形相鄰兩邊分別為 15 公分和 10 公分，若長邊的高是 6 公分，短邊上的高是幾公分？",
    "svg": "<svg viewBox=\"0 0 380 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"105,28 315,28 265,118 55,118\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2.2\"/><line x1=\"105\" y1=\"28\" x2=\"105\" y2=\"118\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"105,106 117,106 117,118\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><line x1=\"105\" y1=\"28\" x2=\"282\" y2=\"86\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><text x=\"165\" y=\"138\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">15 公分</text><text x=\"316\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\">10 公分</text><text x=\"138\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">6 公分</text><text x=\"218\" y=\"56\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">？ 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "4 公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "B",
        "text": "9 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "11 公分",
        "trapCode": "U08_PERIMETER_AS_AREA"
      },
      {
        "key": "D",
        "text": "4.5 公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗學生是否理解同一平行四邊形用兩組不同底高算出來的「面積相等」，進而反推另一條高。",
      "steps": [
        {
          "type": "text",
          "text": "同一個平行四邊形不管從哪一邊量，面積都相等！先用長邊 15 × 6 ＝ 90 算出總面積，再除以短邊 10 就是短邊的高。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"18\" width=\"130\" height=\"46\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"95\" y=\"46\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#991b1b\">15 × 6 ＝ 90</text><text x=\"185\" y=\"46\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" fill=\"#334155\">＝</text><rect x=\"210\" y=\"18\" width=\"130\" height=\"46\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"275\" y=\"46\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#166534\">10 × 高</text><rect x=\"358\" y=\"18\" width=\"82\" height=\"46\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"399\" y=\"46\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0369a1\">高 ＝ 9</text><text x=\"230\" y=\"100\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\">同一圖形面積守恆：長底配短高，短底配長高，乘積都是 90</text></svg>",
          "caption": "圖解：利用面積相等的橋樑 15 × 6 ＝ 90，直接除以短底 10 公分得出高 9 公分"
        },
        {
          "type": "eq",
          "expr": "15 × 6 ÷ 10 ＝ 90 ÷ 10 ＝ 9"
        },
        {
          "type": "answer",
          "text": "答：9 公分"
        }
      ],
      "distractorAnalysis": {
        "A": "【配錯底和高】誤用短邊 10 去乘 6 再除以 15，算出 10 × 6 ÷ 15 ＝ 4。",
        "C": "【用加減湊答案】拿邊長與高相減相加，錯算成 15 － 10 ＋ 6 ＝ 11。",
        "D": "【面積誤除以 2】誤把平行四邊形當成三角形先除以 2，算出 45 ÷ 10 ＝ 4.5。"
      },
      "insight": "面積就是萬用橋樑！「底 1 × 高 1 ＝ 底 2 × 高 2」，記得長底配短高、短底一定配比較長的高（9 ＞ 6）！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "雙底雙高守恆：底甲 × 高甲 ＝ 底乙 × 高乙"
      ],
      "conceptCompare": "【合理性秒檢】短底配的高一定要比長底配的高還要「長」！算完發現 9 公分大於 6 公分，立刻確定沒有配反！",
      "examVariations": "在三角形中也常考「已知兩股 6、8 與斜邊 10，求斜邊上的高」，解法同樣是 6 × 8 ÷ 10 ＝ 4.8（兩邊都省掉 ÷ 2 直接等乘積相等）。"
    },
    "check": {
      "expr": "15 * 6 / 10",
      "expect": "9"
    }
  },
  {
    "id": "U08-RV-M-020",
    "legacyId": null,
    "unitId": "U08",
    "targetUnitId": "U08",
    "section": "REVIEW",
    "sectionName": "面積綜合應用",
    "batch": "純腦力體操",
    "source": "康軒五上U08純腦力體操",
    "category": "雙正方形等積滑動奧數心算",
    "level": 10,
    "difficulty": 5,
    "work": "lg",
    "verified": true,
    "questionType": "choice",
    "choiceStyle": "standard",
    "question": "如圖，邊長 10 公分與 6 公分的兩正方形並排，利用對角線平行拉頂點不變面積，鋪色三角形面積是多少？",
    "svg": "<svg viewBox=\"0 0 360 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"65\" y=\"25\" width=\"120\" height=\"120\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><rect x=\"185\" y=\"73\" width=\"72\" height=\"72\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"65,145 185,25 257,73\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"2.2\"/><line x1=\"185\" y1=\"145\" x2=\"257\" y2=\"73\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"5,4\"/><text x=\"125\" y=\"161\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 公分</text><text x=\"221\" y=\"161\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">6 公分</text><text x=\"36\" y=\"88\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 公分</text><text x=\"288\" y=\"112\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">6 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "18 平方公分",
        "trapCode": "U08_COMPOSITE_ADD_SUB_SWAP"
      },
      {
        "key": "B",
        "text": "100 平方公分",
        "trapCode": "U08_FORGET_DIV_TWO"
      },
      {
        "key": "C",
        "text": "32 平方公分",
        "trapCode": "U08_WRONG_HEIGHT_SIDE"
      },
      {
        "key": "D",
        "text": "50 平方公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗資優等積變形思維：看見大小正方形的對角線平行，把三角形頂點滑下來瞬間變成大正方形的一半！",
      "steps": [
        {
          "type": "text",
          "text": "兩正方形的對角線方向相同（都是斜向右上 45 度，互相平行）。把鋪色三角形在右邊的頂點，沿著紅色對角線滑到小正方形左下角，同底等高面積不變！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"20\" width=\"110\" height=\"110\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.8\"/><rect x=\"145\" y=\"64\" width=\"66\" height=\"66\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.8\"/><polygon points=\"35,130 145,20 145,130\" fill=\"#86efac\" stroke=\"#15803d\" stroke-width=\"2.2\"/><line x1=\"145\" y1=\"130\" x2=\"211\" y2=\"64\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><polygon points=\"35,130 145,20 211,64\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.6\" stroke-dasharray=\"4,4\"/><text x=\"90\" y=\"146\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">大正方形 10</text><text x=\"178\" y=\"146\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">小 6</text><text x=\"340\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">頂點沿對角線平行滑動</text><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\">鋪色 ＝ 大正方形一半</text><text x=\"340\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 × 10 ÷ 2 ＝ 50</text></svg>",
          "caption": "圖解：頂點沿平行對角線滑到小正方形左下角後，正好是大正方形的一半"
        },
        {
          "type": "eq",
          "expr": "10 × 10 ÷ 2 ＝ 50"
        },
        {
          "type": "answer",
          "text": "答：50 平方公分"
        }
      ],
      "distractorAnalysis": {
        "B": "【忘記除以 2】看出面積只跟大正方形有關，卻直接算出整個大正方形面積 10 × 10 ＝ 100。",
        "C": "【誤套高與底配對】把兩正方形底和 16 拿去乘高度差 4 再除以 2，錯算出 32。",
        "A": "【誤算成小正方形一半】誤以為跟小正方形有關，算成 6 × 6 ÷ 2 ＝ 18。"
      },
      "insight": "不管右邊小正方形邊長改成 6 公分、5 公分還是 3 公分，這塊三角形永遠都只等於大正方形的一半 50！"
    },
    "extensionStudy": {
      "coreFormulas": [
        "平行線間等底等高變形：頂點沿著平行底邊的線移動，面積永遠不變"
      ],
      "conceptCompare": "【拉頂點 1 秒心算 vs 全圖扣空白驗算】就算用補全圖形扣掉兩塊空白三角形：（100 ＋ 36 ＋ 4 × 6 ÷ 2）－ 50 － 16 × 6 ÷ 2 ＝ 148 － 98 ＝ 50，答案一模一樣！",
      "examVariations": "奧數經典考法會故意「不告訴你小正方形邊長」，直接考你是否知道答案根本不需要小正方形邊長！"
    },
    "check": {
      "expr": "10 * 10 / 2",
      "expect": "50",
      "extraChecks": [
        {
          "expr": "10*10 + 6*6 + (10-6)*6/2 - 10*10/2 - (10+6)*6/2",
          "expect": "50"
        }
      ]
    }
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U08'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
