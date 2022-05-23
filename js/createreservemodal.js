var myModal = new bootstrap.Modal(document.querySelector('#MyModal'), {keyboard: false})
const reservebutton = document.querySelector('#reserve')


function openModal(id){
    eventId = id;
    myModal.show()
}

reservebutton.onclick = async (evento) => {
    evento.preventDefault();
    const owner_name = document.querySelector('#owner_name');
    const owner_email = document.querySelector('#owner_email');
    const number_tickets = document.querySelector('#number_tickets');

  try{

    const newReserve = {
        "owner_name": owner_name.value,
        "owner_email": owner_email.value,
        "number_tickets": number_tickets.value,
        "event_id": eventId,
    }

    const postrequest = {
        'method' : 'POST',
        'body' : JSON.stringify(newReserve),
        'headers': {'Content-type': 'application/json'}
    }

    const response = await fetch(`${BASE_URL}/bookings`, postrequest)
    response.status == '201'? alert('Tickets reserved succesfully') : null

    
  
} catch(error) {

    alert('Something went wrong' + error)

  }
}