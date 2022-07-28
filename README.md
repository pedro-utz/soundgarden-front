# Soundgarden Front End Application

<h2> Challenge </h2>
An event house called Sound Garden will open and needs a website that display events and allow customers to book tickets through the Landing Page. The website is separated into two parts: Landing Page & Administrive Panel

<h2> Layout </h2>
<a href="https://github.com/fronthendy/soundgarden-front"> HTML files and CSS styles</a> were providen in order to focus project on consuming a Public API and manipulate html elements through DOM.

<h2>Functionalities</h2>
<p><b>Control Panel</b><br>
1. Create Event: receive the data that the user enters through the form of the
create-event.html page and send this information to the API using the method
POST.<br>
2. Edit Event: for each event listed, there is an edit button that must
direct to edit-event.html?id=0, with the event id selected. At
editing page, the form must appear filled with the data of the
event, allowing the editing of information.<br>
3. Delete Event: for each event listed, there is an edit button that must
direct to delete-event.html?id=0, with the event id selected. At
editing page, the form must appear filled with the data of the
event, but with the fields disabled. By clicking on the "delete to
always", must make a request in the API to delete the event from the database
Dice.<br>
4. View Event Reservations: List ticket reservations for the selected event.

  <b>Landing page</b><br>
5. Ticket reservation: when clicking on "book ticket", you must open a modal with
form (name and email), so that the user can fill in the data and
book the ticket.

  <h2>Public API consumed</h2>
  <p><a href="https://documenter.getpostman.com/view/3028053/UVsTp2LC">SoundGarden Api</a></p>

<h2>How to run</h2>

#### Clone project
```sh
$ git clone https://github.com/pedro-utz/soundgarden-front
$ cd soundgarden-front
```

#### Install project dependencies 
```sh
$ npm install
```

