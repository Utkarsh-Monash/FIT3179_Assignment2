var spec = "https://raw.githubusercontent.com/Utkarsh-Monash/FIT3179_Assignment2/main/map_combined.vg.json";
vegaEmbed("#viz1", spec, { "actions": false }).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec = "https://raw.githubusercontent.com/Utkarsh-Monash/FIT3179_Assignment2/main/rank_chart.vg.json";
vegaEmbed("#viz2", spec, { "actions": false }).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec = "https://raw.githubusercontent.com/Utkarsh-Monash/FIT3179_Assignment2/main/bubble_plot.vg.json";
vegaEmbed("#viz3", spec, { "actions": false }).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec = "https://raw.githubusercontent.com/Utkarsh-Monash/FIT3179_Assignment2/main/line_charts.vg.json";
vegaEmbed("#viz4", spec, { "actions": false }).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

