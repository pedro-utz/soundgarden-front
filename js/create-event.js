const eventname = document.querySelector('#name');
const poster = document.querySelector('#poster');
const lineup = document.querySelector('#lineup');
const description = document.querySelector("#description");
const unfDate = document.querySelector('#date');
const tickets = document.querySelector('#tickets');
const submit = document.querySelector('.btn.btn-primary');
const form = document.querySelector('.col-6');


submit.onclick = async (event) =>  {
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

   const postrequest = {
       'method' : 'POST',
       'body': JSON.stringify(new_event),
       'headers':{'Content-Type' : 'application/json'}
    }

    try{
    const response = await fetch(`${BASE_URL}/events`, postrequest);
    
    if(response.status == '201'){
        alert('Event submited')
        form.reset();
    } else{ alert('Event submition has failed')}

    

    }catch(error){

    alert('Something went wrong. Details:\n' + error)


}}
