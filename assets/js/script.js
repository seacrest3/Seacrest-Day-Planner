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
        eventEnter.val('');

        const blockBtn = $('<button>');
        blockBtn.attr('class', 'col-1 saveBtn');
        blockBtn.attr('type', 'button');

        blockBtn.on('click', function () {
            //Get hour of the timeblock
            let eventHour = $(this).siblings().first().text();
            //Get event of the timeblock
            let event = $(this).siblings().last().val();
            //Save event and date into local storage
            localStorage.setItem(eventHour, event);
            localStorage.setItem('day', currentDay);
        });
        // Add save icon to each timeblock
        const saveIcon = $('<i>');
        saveIcon.attr('class', 'fas fa-save');
        
        //Build up the structure of the planner
        $(containerEl).append(blockRow);
        $(blockRow).append(blockHour);
        $(blockRow).append(eventEnter);
        $(blockRow).append(blockBtn);
        $(blockBtn).append(saveIcon);

        //Overide white text colour with black colour when entering an event
        $(document).ready(function () {
            $('.future').css('color', '#000000');
            $('.present').css('color', '#000000');
            $('.past').css('color', '#000000');
        });

        // Color-code each timeblock based on past, present, and future when the planner is viewed.
        let timeBlockHour = moment(timeSlots[i], 'hA').hour();

        if (timeBlockHour > currentHour) {
            eventEnter.addClass('future');
        }
        else if (timeBlockHour === currentHour) {
            eventEnter.addClass('present');
        }
        else {
            eventEnter.addClass('past');
        }
    }
}

//Retrieve saved events from local storage
function retrieveEvents() {
    for (let i = 0; i < timeSlots.length; i++) {
        let eventItem = localStorage.getItem(timeSlots[i]);
        let eventDay = localStorage.getItem('day');
        if (currentDay > eventDay) {
            localStorage.clear();
        } else if (eventItem) {
            $('#' + (i + 9)).val(eventItem);
        }
    }
}

renderPlanner();
retrieveEvents();