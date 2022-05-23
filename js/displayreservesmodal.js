var tableReserve = document.querySelector('#modalres tbody')
var cancelbtn = document.querySelector('#cancel')
var resModal = new bootstrap.Modal(document.querySelector('#ReservesModal'), 
{keyboard: false}
)


function openReserveModal(id){
    eventId = id;
    resModal.show()
    getReserves()
}

//get reserves
const getReserves = async () => {
    
    try{
  
    const response = await fetch(`${BASE_URL}/bookings/event/${eventId}`, getrequest)
    const reserves = await response.json();
    
  
    reserves.forEach(reserve => {
        tableReserve.innerHTML += `
        <tr>
                    <th scope="row"></th>
                    <td id='rname'>${reserve.owner_name}</td>
                    <td id='remail'>${reserve.owner_email}</td>
                    <td id='rtickets'>${reserve.number_tickets}</td>
                  </tr>
        `
    });
    
    }catch(error){

    alert('Error! Details:\n' +error)

}
      
    
  
 }

 cancelbtn.onclick = () => {tableReserve.innerHTML = ''}