//Third-Party APIs: Work Day Scheduler
//A web application which allows a user to save events for each hour of the day.

var currentDayEl = $('#currentDay');
var containerEl = $('.container');
var currentDay = moment().format('dddd, Do MMMM');
currentDayEl.text(currentDay);