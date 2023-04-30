// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
$(".saveBtn").on("click", function (){
var description9 = $(".description").val();
localStorage.setItem("9", description9);
var description10 = $(".sky").val();
localStorage.setItem("10", description10);
var description11 = $(".description11").val();
localStorage.setItem("11", description11);








})
$(".description").val(localStorage.getItem("9"));
$(".sky").val(localStorage.getItem("10"));
$(".description11").val(localStorage.getItem("11"));
// $(".description").val(localStorage.getItem("9"));
// function updateTimeBlocks () {
//   const currentHour = dayjs().hour();
//   }




















$("#currentDay").text(dayjs().format("dddd,MMMM D, YYYY") );
});

// function to check the current time and update the background color of each time block based on the status of past, present or future
function updateTimeBlocks () {
  const currentHour = dayjs().hour();
}

//function to update the time blocks every hour so that the current time is reflected
setInterval(updateTimeBlocks, 60 * 60 * 1000); //understand this code! 
{

};

//loop through each time block 

//call a function to update the background colors of the time blocks depending on the current time 


//event click listener for save button


 



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