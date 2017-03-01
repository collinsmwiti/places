var map = AmCharts.makeChart( "chartdiv", {

  "type": "map",
  "theme": "light",
  "projection": "miller",

  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#CC0000"
  },
  "smallMap": {},
  "export": {
    "enabled": true,
    "position": "bottom-right"
  }
} );

$(document).ready(function() {
  $("form#countries").submit(function (event) {
    event.preventDefault();

    //select input values and assign to variables.
  var inputCountries = $("textarea#input-countries").val();
  var inputYear = $("textarea#input-year").val();
  var inputActivities = $("textarea#input-activities").val();
  var inputLocations = $("textarea#input-locations").val();
  var inputNotes = $("textarea#input-notes").val();
    //set text of the respective spans to the variables.
    $("span#output-countries").text(inputCountries);
    $("span#output-year").text(inputYear);
    $("span#output-activities").text(inputActivities);
    $("span#output-locations").text(inputLocations);
    $("span#output-notes").text(inputNotes);
  });

  });
