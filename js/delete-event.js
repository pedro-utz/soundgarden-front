const eventname = document.querySelector('#name');
const poster = document.querySelector('#poster');
const lineup = document.querySelector('#lineup');
const description = document.querySelector("#description");
const unfDate = document.querySelector('#date');
const tickets = document.querySelector('#tickets');
const form = document.querySelector('.col-6');
const id = window.location.search.split('=')
const button = document.querySelector('.btn.btn-danger')


 
 async function fillForm(){

    const getrequest = {
        'method' : 'GET',
        'id' : `${id[1]}`,
        'headers':{'Content-Type' : 'application/json'}
     }
    
    const response = await fetch(`${BASE_URL}/events/${id[1]}`, getrequest)
    const event = await response.json();

    
    eventname.value = event.name;
    poster.value = event.poster;
    lineup.value = event.attractions;
    description.value = event.description;
    unfDate.value = formatDate(event.scheduled);
    tickets.value = event.number_tickets;
 }

 fillForm();


button.onclick = async (event) =>{
event.preventDefault();

    try {

        const deleterequest = {
            method: "DELETE"
        };

        const response = await fetch(`${BASE_URL}/events/${id[1]}`, deleterequest)
        console.log(response)

        alert("Event succesfully deleted!")
    } catch(error) {
        alert("Something went wrong. Details:\n" +error)
    }

}

 

    // if (response.status = '204') {
    //     alert('Event succesfully deleted!')
    // } else {alert('There was a problem deleting your file')}



