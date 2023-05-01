
$(document).ready(function() {
$(".saveBtn").on("click", function (){
var description9 = $(".description").val();
localStorage.setItem("9", description9);

var description10 = $(".sky").val();
localStorage.setItem("10", description10);

var description11 = $(".description11").val();
localStorage.setItem("11", description11);

var description12 = $(".description12").val();
localStorage.setItem("12", description12);

var description13 = $(".description13").val();
localStorage.setItem("13", description13);

var description14 = $(".description14").val();
localStorage.setItem("14", description14);

var description15 = $(".description15").val();
localStorage.setItem("15", description15);

var description16 = $(".description16").val();
localStorage.setItem("16", description16);




})
$(".description").val(localStorage.getItem("9"));
$(".sky").val(localStorage.getItem("10"));
$(".description11").val(localStorage.getItem("11"));


$("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY") );
});

// function to check the current time and update the background color of each time block based on the status of past, present or future
function updateTimeBlocks () {
  const currentHour = dayjs().hour();
}

//function to update the time blocks every hour so that the current time is reflected
setInterval(updateTimeBlocks, 60 * 60 * 1000); 
{

};

//loop through each time block 

//call a function to update the background colors of the time blocks depending on the current time 


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist