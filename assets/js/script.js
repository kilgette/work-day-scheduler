$(document).ready(function() { 

const currentHour = dayjs();

let currentTime = dayjs().hour()

const timeBlock = document.getElementById('currentDay')

timeBlock.textContent = currentHour

setInterval(() => {
let presentDateTime = dayjs().format(`dddd, MMMM D, YYYY, HH:mm:ss
`)
document.getElementById('currentDay').innerText=presentDateTime
}, 1000);  

$('.time-block').each(function(){
  let blockHour = parseInt($(this).attr(`id`).split(`-`)[1])


if (currentTime>blockHour) { 
  $(this).addClass(`past`)
  console.log(currentTime,blockHour)
  
} else if (currentTime===blockHour) {
  $(this).removeClass(`past`)
  $(this).addClass(`present`)
  console.log(currentTime,blockHour)

} else {
$(this).removeClass(`past`)
$(this).removeClass(`present`)
$(this).addClass(`future`)
console.log(currentTime,blockHour)
 }
})
console.log(currentTime,blockHour)


$(".saveBtn").on("click", function (){

var description9 = $(".description9").val();
localStorage.setItem("9", description9);

var description10 = $(".description10").val();
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

});

// function to check the current time and update the background color of each time block based on the status of past, present or future
function updateTimeBlocks () {
  const currentTime = dayjs().hour();
}

//manages current time display 
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








