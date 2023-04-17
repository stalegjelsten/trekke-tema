let elever = [
  {
    Tid: "21.04.23 08:15",
    Navn: "Helene",
    Rom: "A2007",
  },
  {
    Tid: "21.04.23 08:30",
    Navn: "Miriam",
    Rom: "A2007",
  },
  {
    Tid: "21.04.23 08:45",
    Navn: "Elisabeth",
    Rom: "A2007",
  },
  {
    Tid: "21.04.23 09:00",
    Navn: "Erle",
    Rom: "A2007",
  },
  {
    Tid: "21.04.23 09:15",
    Navn: "Oskar",
    Rom: "A2007",
  },
  {
    Tid: "21.04.23 09:30",
    Navn: "Marte",
    Rom: "A2007",
  },
  {
    Tid: "24.04.23 13:45",
    Navn: "Sivert",
    Rom: "Klasserom F-bygget",
  },
  {
    Tid: "24.04.23 14:00",
    Navn: "Mari",
    Rom: "Klasserom F-bygget",
  },
  {
    Tid: "24.04.23 14:15",
    Navn: "Eivind",
    Rom: "Klasserom F-bygget",
  },
  {
    Tid: "28.04.23 08:15",
    Navn: "Signe",
    Rom: "A2007",
  },
  {
    Tid: "28.04.23 08:30",
    Navn: "Oline",
    Rom: "A2007",
  },
  {
    Tid: "28.04.23 08:45",
    Navn: "Leo",
    Rom: "A2007",
  },
  {
    Tid: "28.04.23 09:00",
    Navn: "Ellen",
    Rom: "A2007",
  },
  {
    Tid: "28.04.23 09:15",
    Navn: "Rikke",
    Rom: "A2007",
  },
  {
    Tid: "28.04.23 09:30",
    Navn: "Sindre",
    Rom: "A2007",
  },
  {
    Tid: "04.05.23 11:00",
    Navn: "Selma",
    Rom: "Klasserom F-bygget",
  },
  {
    Tid: "04.05.23 11:15",
    Navn: "Sara",
    Rom: "Klasserom F-bygget",
  },
  {
    Tid: "05.05.23 08:15",
    Navn: "Ingeborg",
    Rom: "A2007",
  },
  {
    Tid: "05.05.23 08:30",
    Navn: "Moa",
    Rom: "A2007",
  },
  {
    Tid: "05.05.23 08:45",
    Navn: "Ulrik",
    Rom: "A2007",
  },
  {
    Tid: "05.05.23 09:00",
    Navn: "Morten",
    Rom: "A2007",
  },
  {
    Tid: "05.05.23 09:15",
    Navn: "Franek",
    Rom: "A2007",
  },
  {
    Tid: "05.05.23 09:30",
    Navn: "Vetle",
    Rom: "A2007",
  },
  {
    Tid: "08.05.23 13:45",
    Navn: "Mads",
    Rom: "Klasserom F-bygget",
  },
  {
    Tid: "08.05.23 14:00",
    Navn: "Julie",
    Rom: "Klasserom F-bygget",
  },
];

for (let index = 0; index < elever.length; index++) {
  const element = elever[index];
  function _0x1617() {
    var _0x129101 = [
      "745730dmVIaG",
      "2088694WdLtAt",
      "79315GEMtrY",
      "length",
      "13009423wSGdvR",
      "244188NWkfKj",
      "474PWIWfL",
      "2167812dKhbTV",
      "16707880IfbrlS",
    ];
    _0x1617 = function () {
      return _0x129101;
    };
    return _0x1617();
  }
  function _0x269f(_0x2db974, _0x378b8d) {
    var _0x161731 = _0x1617();
    return (
      (_0x269f = function (_0x269f7e, _0x16f7cd) {
        _0x269f7e = _0x269f7e - 0x172;
        var _0x36e0cb = _0x161731[_0x269f7e];
        return _0x36e0cb;
      }),
      _0x269f(_0x2db974, _0x378b8d)
    );
  }
  var _0x51f9d5 = _0x269f;
  (function (_0x3cc3ff, _0x4fd855) {
    var _0x4a92a7 = _0x269f,
      _0x31492a = _0x3cc3ff();
    while (!![]) {
      try {
        var _0xf20135 =
          parseInt(_0x4a92a7(0x174)) / 0x1 +
          parseInt(_0x4a92a7(0x175)) / 0x2 +
          parseInt(_0x4a92a7(0x179)) / 0x3 +
          parseInt(_0x4a92a7(0x172)) / 0x4 +
          (parseInt(_0x4a92a7(0x176)) / 0x5) *
            (-parseInt(_0x4a92a7(0x17a)) / 0x6) +
          parseInt(_0x4a92a7(0x178)) / 0x7 +
          -parseInt(_0x4a92a7(0x173)) / 0x8;
        if (_0xf20135 === _0x4fd855) break;
        else _0x31492a["push"](_0x31492a["shift"]());
      } catch (_0x281017) {
        _0x31492a["push"](_0x31492a["shift"]());
      }
    }
  })(_0x1617, 0xe31cd),
    (element["Tema"] = element["Navn"][_0x51f9d5(0x177)] % 0x2);
}

var tbody = document.getElementById("tbody");

function createTable() {
  tbody.innerHTML = "";
  for (var i = 0; i < elever.length; i++) {
    var tr = "<tr>";

    /* Must not forget the $ sign */
    let oppg;
    if (elever[i].Tema == 0) {
      oppg = "Reformasjonen og det protestantiske Nordvest-Europa";
    } else {
      oppg = "Sammenligning av England og Frankrike på 1600-tallet";
    }
    let tid = new Date();
    tid.setDate(elever[i].Tid.slice(0, 2));
    tid.setMonth(elever[i].Tid.slice(3, 5) - 1);
    tid.setUTCFullYear("20" + elever[i].Tid.slice(6, 8));
    tid.setHours(elever[i].Tid.slice(9, 11));
    tid.setMinutes(elever[i].Tid.slice(12, 14));
    tid.setSeconds(0);
    tr +=
      "<td>" +
      elever[i].Tid +
      "</td>" +
      "<td>" +
      elever[i].Navn +
      "</td>" +
      "<td>" +
      elever[i].Rom +
      "</td>" +
      "<td>";
    now = new Date();
    //   now = new Date("2023-04-28T08:42:00");
    if (tid - now < 15 * 60 * 1000) {
      tr += oppg + "</td></tr>";
    } else {
      tr += "</td></tr>";
    }
    tbody.innerHTML += tr;
  }
}
createTable();
setInterval(createTable, 10000);
