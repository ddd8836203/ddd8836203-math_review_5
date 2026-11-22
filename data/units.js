// 康軒五上數學 — 全系統單元定義
(function (root) {
  const DATA = [
    {
      "id": "U06",
      "no": 6,
      "title": "異分母分數的加減",
      "pages": "康軒五上 第6單元",
      "hue": 210
    },
    {
      "id": "U07",
      "no": 7,
      "title": "整數四則運算",
      "pages": "康軒五上 第7單元",
      "hue": 170
    },
    {
      "id": "U08",
      "no": 8,
      "title": "面積",
      "pages": "康軒五上 第8單元",
      "hue": 35
    },
    {
      "id": "U09",
      "no": 9,
      "title": "線對稱圖形",
      "pages": "康軒五上 第9單元",
      "hue": 285
    },
    {
      "id": "U10",
      "no": 10,
      "title": "柱體、錐體和球",
      "pages": "康軒五上 第10單元",
      "hue": 15
    },
    {
      "id": "EXAM_MID2",
      "no": "期末",
      "title": "五年級上_期末名校評量",
      "pages": "六校十三卷全真期末題庫",
      "hue": 42,
      "isExam": true
    }
  ];
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['UNITS'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
