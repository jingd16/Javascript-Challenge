// from data.js
var tableData = data;

//Find the tbody related to the ufo-table
var ufo_tbody = d3.select("#ufo-table>tbody");

//load the data to the html page
data.forEach((ufoData) => {
    var row = ufo_tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

//Use a date form in your HTML document and write JavaScript code that 
//will listen for events 
//and search through the date/time column to find rows that match user input.

var button = d3.select("#filter-btn");

var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(filteredData);

    //Clear data from the table body
    ufo_tbody.html("");

    console.log("data cleared and to be loaded");

    //apand data to the table
    filteredData.forEach((ufo_filtered_Data) => {
        var row = ufo_tbody.append("tr");
        Object.entries(ufo_filtered_Data).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });

};
