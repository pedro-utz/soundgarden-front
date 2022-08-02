# Soundgarden Front End Application

<table  style="border-color:#FFFFFF important!;">
  <tr>
    <td valign="top"><img src="https://github.com/pedro-utz/soundgarden-front/blob/master/img/banner-sound.jpg"/></td>
  </tr>
</table>

<h2> Challenge </h2>
An event house called Sound Garden will open and needs a website that display events and allow customers to book tickets through the Landing Page. The website is separated into two parts: Landing Page & Administrive Panel

<h2> Layout </h2>
<a href="https://github.com/fronthendy/soundgarden-front"> HTML files and CSS styles</a> were providen in order to focus project on consuming a Public API and manipulate html elements through DOM.

<h2>Developed Functionalities</h2>
<p><b>Control Panel</b><br>
1. Create Event: post user data through the form of the create-event.html page and send this information to the API using the method
POST.<br>
2. Edit Event: for each event listed, there is an edit button that direct to edit-event.html?id=0, with the event id selected. At
editing page, the form appears filled with the current data of the event, allowing the editing of information.<br>
3. Delete Event: for each event listed, there is an edit button that 
direct user to delete-event.html?id=0, with the event id selected. At
editing page, the form appears filled with the data of the
event, but with the fields disabled for edition. By clicking on the "delete permanently", a delete request is sent the API to delete the event from the database
Dice.<br>
4. View Event Reservations: List ticket reservations for the selected event.

  <b>Landing page</b><br>
5. Ticket reservation: when clicking on "book tickets", a modal is displayed with
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
<p> After cloning the project you might reveal "index.html" in File Explorer and open with your browser or launch a local development server with <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server extension</a>.</p>

