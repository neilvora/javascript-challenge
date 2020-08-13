// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select row element of table body
var tbody = d3.select("tbody");


// Insert data into the cells through a for loop

for (var i = 0; i < data.length; i++) {
    var row = tbody.append("tr");
    row.append("td").text(data[i]['datetime'])
    row.append("td").text(data[i]['city'])
    row.append("td").text(data[i]['state'])
    row.append("td").text(data[i]['country'])
    row.append("td").text(data[i]['shape'])
    row.append("td").text(data[i]['durationMinutes'])
    row.append("td").text(data[i]['comments'])
    
};

// Select form and button
var button = d3.select("#filter-btn")
var form = d3.select("form")

button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function for the events
function runEnter() {
    
    //Prevent page from refreshing
    d3.event.preventDefault();

    // Select the input element
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var filterDate = data.filter(date => date.datetime === inputValue);

    console.log(filterDate);
}

// var text = d3.select(".form-control")

// function handleChange(event) {
//     var dateText = d3.event.target.value;
// }


// function datesearch(date) {
//     return date.datetime === date
// }

// var filtered = data.filter(datesearch)