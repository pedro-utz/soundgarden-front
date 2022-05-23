const BASE_URL ='https://xp41-soundgarden-api.herokuapp.com'
const eventname = document.querySelector('#name');
const poster = document.querySelector('#poster');
const lineup = document.querySelector('#lineup');
const description = document.querySelector("#description");
const unfDate = document.querySelector('#date');
const tickets = document.querySelector('#tickets');
const submit = document.querySelector('.btn.btn-primary');
const form = document.querySelector('.col-6');
const id = window.location.search.split('=')

function formatDate(date){
    const array = date.split(/[-T:.]+/);
     return `${array[0]}-${array[1]}-${array[2]}T${array[3]}:${array[4]}`
  // "yyyy-MM-ddThh:mm
    }
 
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

submit.onclick = async (event) =>{
event.preventDefault();
   const date = new Date(unfDate.value);
   const new_event = {
       'name': eventname.value,
       'poster': poster.value,
       'attractions' : lineup.value.split(','),
       'description' : description.value,
       'scheduled' : date.toISOString(),
       'number_tickets' : tickets.value,
   }

//    console.log(new_event);

   const putrequest = {
    'method' : 'PUT',
    'id' : `${id[1]}`,
    'body': JSON.stringify(new_event),
    'headers':{'Content-Type' : 'application/json'},
   }


   const edit = await fetch(`${BASE_URL}/events/${id[1]}`, putrequest);

   if(edit.status == '200'){
    alert('Event edited succesfully')
    form.reset();
} else{ alert('Edition submition has failed')}

}


