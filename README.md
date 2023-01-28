# Work-Day-Scheduler
A web application which allows a user to save events for each hour of the day.

## Description

It is tasked to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. The [Moment.js](https://momentjs.com/) library will be used to work with date and time.

### User Story

AS A client, I WANT to use this app to add important events to a daily planner
SO THAT I can manage my time effectively

### Acceptance Criteria

The app should:

* Display the current day at the top of the calender when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page

### Mock up and Functionality

The following animation demonstrates the application functionality:

![Work Day Scheduler mock up](./assets/images/mockup.gif)

When a user opens the app,

1. The current day(dddd, Do MMMM) is displayed at the top of the calender and a list of color-coded timeblocks presented with any saved events is set out underneath the current day. 

2. The past, present and future eventblocks are colored grey, red and green respectively.

3. The timeblock starts from '9AM' to '5PM' on current day. Each timeslot has a save button.

4. A user can click on the event slot and edit an event on each timeblock.

5. When the user clicks on the save button, the edited event is saved into the local storage.

6. The saved events on current day are displayed upon a refresh of the page.

### Review

TA, a Web Developer, reviews the code, providing feedback on errors and making sure that all of the acceptance criteria have been met.

* [The URL of the deployed application.](https://seacrest3.github.io/Work-Day-Scheduler/)

* [The URL of the GitHub repository.](https://github.com/seacrest3/Work-Day-Scheduler.git)

### Helpful Resources

- [Moment](https://momentjs.com/)

- [Bootstrap](https://getbootstrap.com)

- [MDN Javascript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)

- [W3Schools Javascript](https://www.w3schools.com/js/)

- [JavaScript Tutorial](https://www.javascripttutorial.net/)

- [freeCodeCamp.org](https://www.freecodecamp.org/)

- [Github Pages Guide](https://pages.github.com/)