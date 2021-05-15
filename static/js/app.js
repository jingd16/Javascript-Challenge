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

var button = d3.selectAll("#filter-btn");

var form = d3.selectAll("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the value property of the input element
    var inputDateValue = inputDate.property("value");
    var inputCityValue = inputCity.property("value");
    var inputStateValue = inputState.property("value");
    var inputCountryValue = inputCountry.property("value");
    var inputShapeValue = inputShape.property("value");
  
    //setup initial filteredData 
    var filteredData = tableData;

    //filter the data with each condition
    if (inputDateValue!="") {
      filteredData = filteredData.filter(ufo => ufo.datetime === inputDateValue);
    };

    if (inputCityValue!="") {
      filteredData = filteredData.filter(ufo => ufo.city === inputCityValue);
    };

    if (inputStateValue!="") {
      filteredData = filteredData.filter(ufo => ufo.state === inputStateValue);
    };

    if (inputStateValue!="") {
      filteredData = filteredData.filter(ufo => ufo.state === inputStateValue);
    };

    if (inputCountryValue!="") {
      filteredData = filteredData.filter(ufo => ufo.country === inputCountryValue);
    };

    if (inputShapeValue!="") {
      filteredData = filteredData.filter(ufo => ufo.shape === inputShapeValue);
    };

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
