
window.onload = function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGIN/LOGOUT BUTTONS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// create user button functionality
document.getElementById("createuser_submit").addEventListener("click", function(event){
  createUser();
}, false);


// create user button functionality
document.getElementById("login_submit").addEventListener("click", function(event){
  verifyUser();

}, false);

document.getElementById("logout_submit").addEventListener("click", function(event){
  logoutUser();

  console.log("logout pressed");
}, false);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Event CHANGE MANAGEMENT //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var radioButtons = document.getElementsByName("home_label_name");


function event_category(event)  {
var radio_category = document.getElementsByName("home_label_name");
  var which_category = "random";
  console.log("checkign radio button change in index.html");
  for(var i = 0; i < radio_category.length; i++){
    //.checked
    if(radio_category[i].checked){
      which_category = radio_category[i];
      //console.log(which_operation);
      break;
    }

  }
  //console.log(which_operation);
  console.log("index.js: " + which_category.value);

  updateEvents(which_category.value);

  return which_category;
}

for(var i = 0; i < radioButtons.length; i++){
  //.checked
  radioButtons[i].addEventListener("change", event_category , false);

}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DATE CHANGE MANAGEMENT //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth(); //January is 0!
  var yyyy = today.getFullYear();
  var currentMonth = new Month(yyyy, mm); // October 2012

  var direction = "none";
  changeMonth(direction, currentMonth);
  //if one, next, otherwise previous
  document.getElementById("next_month_btn").addEventListener("click", function(event){
    var direction = "next";
    changeMonth(direction, currentMonth);
    currentMonth = currentMonth.nextMonth();
    event_category();

  },false);

  document.getElementById("prev_month_btn").addEventListener("click", function(event){
    var direction = "previous";
    changeMonth(direction, currentMonth);
    currentMonth = currentMonth.prevMonth();
    event_category();
  },false);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Display events //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INITIALIZING EVENTS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // call createEvent function
  var calendarDays = document.getElementsByClassName("calendar-day");
  for (var i = 0; i < calendarDays.length; ++i) {
      calendarDays[i].addEventListener("click", createEventForm, false);
  }

  //checking session every time the page refreshes
  checkSession();

//bracket from end of window.onload function
}
