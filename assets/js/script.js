//Third-Party APIs: Work Day Scheduler
//A web application which allows a user to save events for each hour of the day

const currentDayEl = $('#currentDay');
const containerEl = $('.container');
const timeSlots = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
let currentHour = moment().hour();

//Display the current day at the top of the calender when a user opens the planner
let currentDay = moment().format('dddd, Do MMMM');
currentDayEl.text(currentDay);

//Render the timeblocks from 9AM to 5PM and add a save button for each timeblock into the planner
function renderPlanner() {
    for (let i = 0; i < timeSlots.length; i++) {
        const blockRow = $('<div>');
        blockRow.attr('class', 'time-block row');

        const blockHour = $('<div>');
        blockHour.attr('class', 'col-1 hour');
        blockHour.text(timeSlots[i]);

        const eventEnter = $('<textarea>');
        eventEnter.attr('class', 'col-10 description');
        eventEnter.attr('id', i + 9);
        eventEnter.val(' ');

        const blockBtn = $('<button>');
        blockBtn.attr('class', 'col-1 saveBtn');
        blockBtn.attr('type', 'button');

        blockBtn.on('click', function () {
            //Get the hour of the timeblock
            let eventHour = $(this).siblings().first().text();
            //Get the event of the timeblock
            let event = $(this).siblings().last().val();
            //Save event into local storage
            localStorage.setItem(eventHour, event);
        });
        // Add the save icon to each timeblock
        const saveIcon = $('<i>');
        saveIcon.attr('class', 'fas fa-save');

        $(containerEl).append(blockRow);
        $(blockRow).append(blockHour);
        $(blockRow).append(eventEnter);
        $(blockRow).append(blockBtn);
        $(blockBtn).append(saveIcon);
    }
}

renderPlanner();