// SICAKLIK SIMDI
$(".temperature-chart.now").insertFusionCharts({
    type: "thermometer",
    width: "40%",
    height: "40%",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Simdi",
            // subcaption: "Simdiki Zaman",
            lowerlimit: "0",
            upperlimit: "100",
            numbersuffix: "°C",
            thmfillcolor: "#FF0000", //Bar ici renk
            showgaugeborder: "1", //Bar Border
            gaugebordercolor: "#FF0000", //Bar Border Color
            gaugeborderthickness: "2", //Bar Border Kalinlik
            plottooltext: "Temperature: <b>$datavalue</b> ",
            theme: "gammel",
            showvalue: "1"
        },
        value: "30"
    }
});
// SICAKLIK DEGISEN
$(".temperature-chart.change").insertFusionCharts({
    type: "thermometer",
    width: "40%",
    height: "40%",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Degisen Zaman",
            // subcaption: "Istenilen Zaman",
            lowerlimit: "0",
            upperlimit: "100",
            numbersuffix: "°C",
            thmfillcolor: "#FF0000", //Bar ici renk
            showgaugeborder: "1", //Bar Border
            gaugebordercolor: "#FF0000", //Bar Border Color
            gaugeborderthickness: "2", //Bar Border Kalinlik
            plottooltext: "Temperature: <b>$datavalue</b> ",
            theme: "gammel",
            showvalue: "1"
        },
        value: "60"
    }
});

// INSAN POPULASYONU 
$(".human-population").insertFusionCharts({
    type: "msbar3d",
    width: "100%",
    height: "30%",
    dataFormat: "json",
    dataSource: {
        chart: {
            plottooltext: "$label won <b>$dataValue</b> medals in $seriesName",
            theme: "gammel"
        },
        categories: [{
            category: [{
                label: "Insan"
            }]
        }],
        dataset: [{
            seriesname: "Simdiki zaman",
            data: [{
                value: "121"
            }]
        }, {
            seriesname: "Degisen Zaman",
            data: [{
                value: "115"
            }]
        }]
    }
});

// HAYVAN POPULASYONU
$(".animal-population").insertFusionCharts({
    type: "mscolumn3d",
    width: "100%",
    height: "30%",
    dataFormat: "json",
    dataSource: {
        chart: {
            // caption: "App Publishing Trend",
            // subcaption: "2012-2016",
            // xaxisname: "Years",
            // yaxisname: "Total number of apps in store",
            formatnumberscale: "1",
            plottooltext: "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
            theme: "gammel"
        },
        categories: [{
            category: [{
                label: "Kuslar"
            }, {
                label: "Baliklar"
            }, {
                label: "Surungenler"
            }, {
                label: "Memeliler"
            }]
        }],
        dataset: [{
            seriesname: "Simdiki Zaman",
            data: [{
                value: "70000"
            }, {
                value: "150000"
            }, {
                value: "350000"
            }, {
                value: "600000"
            }]
        }, {
            seriesname: "Degisen Zaman",
            data: [{
                value: "10000"
            }, {
                value: "100000"
            }, {
                value: "300000"
            }, {
                value: "600000"
            }]
        }]
    }
});

// OZON TABAKASI SIMDI
$(".ozone-layer.now").insertFusionCharts({
    type: "angulargauge",
    width: "40%",
    height: "30%",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Simdi",
            lowerlimit: "0",
            upperlimit: "100",
            showvalue: "1",
            numbersuffix: "km2",
            theme: "gammel",
            showtooltip: "0"
        },
        colorrange: {
            color: [{
                    minvalue: "0",
                    maxvalue: "50",
                    code: "#62B58F"
                },
                {
                    minvalue: "50",
                    maxvalue: "75",
                    code: "#FFC533"
                },
                {
                    minvalue: "75",
                    maxvalue: "100",
                    code: "#F2726F"
                }
            ]
        },
        dials: {
            dial: [{
                value: "30"
            }]
        }
    }
});
// OZON TABAKASI DEGISMIS
$(".ozone-layer.change").insertFusionCharts({
    type: "angulargauge",
    width: "40%",
    height: "30%",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Degismis Zaman",
            lowerlimit: "0",
            upperlimit: "100",
            showvalue: "1",
            numbersuffix: "km2",
            theme: "gammel",
            showtooltip: "0"
        },
        colorrange: {
            color: [{
                    minvalue: "0",
                    maxvalue: "50",
                    code: "#62B58F"
                },
                {
                    minvalue: "50",
                    maxvalue: "75",
                    code: "#FFC533"
                },
                {
                    minvalue: "75",
                    maxvalue: "100",
                    code: "#F2726F"
                }
            ]
        },
        dials: {
            dial: [{
                value: "81"
            }]
        }
    }
});