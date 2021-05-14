// from data.js
var tableData = data;

// YOUR CODE HERE!
//var tbody = d3.select("tbody")
var ufo_tbody = d3.select("#ufo-table>tbody");

//console.log(tableData);

data.forEach((ufoData) => {
    var row = ufo_tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});