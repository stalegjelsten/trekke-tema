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
  {
    Tid: "31.12.99 08:45",
    Navn: "Elisabeth",
    Rom: "A2007",
  },
];

for (let index = 0; index < elever.length; index++) {
  const element = elever[index];
}

var tbody = document.getElementById("tbody");

function createTable() {
  tbody.innerHTML = "";
  for (var i = 0; i < elever.length; i++) {
    var tr = "<tr>";

    /* Must not forget the $ sign */
    let oppg;
    const _0x56d1e2 = _0x4e15;
    function _0x4e15(_0x46b3f2, _0x47e614) {
      const _0x58b467 = _0x58b4();
      return (
        (_0x4e15 = function (_0x4e156e, _0x380009) {
          _0x4e156e = _0x4e156e - 0x70;
          let _0x356421 = _0x58b467[_0x4e156e];
          return _0x356421;
        }),
        _0x4e15(_0x46b3f2, _0x47e614)
      );
    }
    (function (_0x3b0ddf, _0x2f9ef2) {
      const _0x181db4 = _0x4e15,
        _0x39dc81 = _0x3b0ddf();
      while (!![]) {
        try {
          const _0x38cf88 =
            (parseInt(_0x181db4(0x79)) / 0x1) *
              (-parseInt(_0x181db4(0x72)) / 0x2) +
            parseInt(_0x181db4(0x73)) / 0x3 +
            parseInt(_0x181db4(0x74)) / 0x4 +
            parseInt(_0x181db4(0x77)) / 0x5 +
            -parseInt(_0x181db4(0x78)) / 0x6 +
            (parseInt(_0x181db4(0x76)) / 0x7) *
              (-parseInt(_0x181db4(0x71)) / 0x8) +
            parseInt(_0x181db4(0x75)) / 0x9;
          if (_0x38cf88 === _0x2f9ef2) break;
          else _0x39dc81["push"](_0x39dc81["shift"]());
        } catch (_0x2854e1) {
          _0x39dc81["push"](_0x39dc81["shift"]());
        }
      }
    })(_0x58b4, 0xc8789);
    let tema = elever[i][_0x56d1e2(0x70)]["length"] % 0x2;
    function _0x58b4() {
      const _0x1c4ad9 = [
        "Navn",
        "6184CFZoEH",
        "436YfEhZx",
        "4737144aaLugy",
        "890368rXGTUb",
        "7220178RHpOHQ",
        "1757vhhIzS",
        "783790pGBbDY",
        "1378404IYLnnL",
        "6953ChjASQ",
      ];
      _0x58b4 = function () {
        return _0x1c4ad9;
      };
      return _0x58b4();
    }
    if (tema == 0) {
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
