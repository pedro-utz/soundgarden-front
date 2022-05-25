# Soundgarden

An event house called Sound Garden will open and needs a website that display events and allow customers to book tickets through the Landing Page. The website is separated into two parts:

1- Landing Page: Allows you to view events and book tickets.
2- Administrative Panel: Allows you to create, edit and delete events.

HTML and CSS code for the control panel was provided, project is focused on Javascript development.
The API used to integrate the website was: https://documenter.getpostman.com/view/3028053/UVsTp2LC

Features:

1. Create Event: receive the data that the user enters through the form of the
create-event.html page and send this information to the API using the method
POST.

2. Edit Event: for each event listed, there is an edit button that must
direct to edit-event.html?id=0, with the event id selected. At
editing page, the form should appear filled with the data of the
event, allowing the editing of information.

3. Delete Event: for each event listed, there is an edit button that must
direct to delete-event.html?id=0, with the event id selected. At
editing page, the form should appear filled with the data of the
event, but with the fields disabled. By clicking on the "delete to
always", must make a request in the API to delete the event from the database
Dice.

4. View Event Reservations: List ticket reservations for the selected event.

5. Ticket reservation: when clicking on "book ticket", you must open a modal with
form (name and email), so that the user can fill in the data and
book the ticket.

