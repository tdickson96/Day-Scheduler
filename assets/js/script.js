// Today's date at the top of the calendar 
// $("day").text(now.format("dddd MMMM DD, YYYY"));

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// Colors not need a loop
// Can use moment.js to check time and apply class
// Run through a loop to check text areas
// Adds class to each of them
// What time is it? 2pm? Loop it over? 9am grey