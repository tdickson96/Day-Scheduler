// Today's date at the top of the calendar 
let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
 setInterval(() => {
    let timeNow = moment().format("h:mm:ss");
    $("#timeNow").text(timeNow);  
}, 1000);

// A moment for right NOW to tell the loop to color change past, present, and future classes
// Loop over the textAreas and color the background 
// Colors need a loop
// Can use moment.js to check time and apply class
// Run through a loop to check text areas
// Adds class to each of them
// What time is it? 2pm? Loop it over? 9am grey
    function trackTime() {
        // give me the current time
        let currentTime = moment().hour();

        // LOOP THROUGH DESCRIPTIONS
        $(".time-block").each(function () {
            let textTime = parseInt($(this).attr("id").split("hour")[1]);

            // change classes based on current time of time block
            if (textTime < currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else if (textTime == currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }

    })
}
trackTime();

// save events to local storage with save button
$(".saveBtn").click(function (event) {
    let buttonClick = event.target;
    let textArea = $(buttonClick).siblings(".description").val();
    let index = $(buttonClick).val();
    localStorage.setItem(index, textArea);
});

// for loop to retrieve events from local storage and put it in textArea
let retrieveText = function() {
        for (let i = 0; i < 9; i++ ) {
        let retrievedPair = localStorage.getItem(i);
        $('textArea').eq(i).val(retrievedPair);
        }
    };

retrieveText();
