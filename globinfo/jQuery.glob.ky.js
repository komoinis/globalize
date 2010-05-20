(function($) {
    var cultures = $.cultures,
        invariant = cultures.invariant,
        standard = invariant.calendars.standard,
        culture = cultures["ky"] = $.extend(true, {}, invariant, {
        name: "ky",
        englishName: "Kyrgyz",
        nativeName: "Кыргыз",
        language: "ky",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': "-",
                symbol: "сом"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Жекшемби","Дүйшөмбү","Шейшемби","Шаршемби","Бейшемби","Жума","Ишемби"],["Жш","Дш","Шш","Шр","Бш","Жм","Иш"],["Жш","Дш","Шш","Шр","Бш","Жм","Иш"]],
                months: [["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yy",
                    D: "d\u0027-\u0027MMMM yyyy\u0027-ж.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d\u0027-\u0027MMMM yyyy\u0027-ж.\u0027 H:mm",
                    F: "d\u0027-\u0027MMMM yyyy\u0027-ж.\u0027 H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy\u0027-ж.\u0027"
                }
            })
        }
    }, cultures["ky"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);