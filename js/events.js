getEvents(endpoint);

async function getEvents(endpoint) {

  try{
  
  const response = await fetch(`${BASE_URL}/events`, getrequest);
  const events = await response.json();

    
    switch(endpoint) {  //getting events for different pages (landing page, admin, events)
      
    case 'index.html':
    cleanMock(indexevents)
    
    
    events.forEach(event => {

    if(counter < 3){ //for landing page we only need the most recent 3 events
    
    counter++  
    indexevents.innerHTML += `<article class="evento card p-5 m-3">
    <h2>${event.name} - ${dateDisplay(event.scheduled)}</h2>
    <h4>${event.attractions}</h4>
    <p>${event.description}</p>
    <a class="btn btn-primary" onclick="openModal('${event._id}')" >reservar ingresso</a>
    </article>`
    
   }}) 
  
    break;


    case 'eventos.html':
      cleanMock(eventosevents)


      events.forEach(event => {
        eventosevents.innerHTML += 
       `<article class="evento card p-5 m-3">
       <h2>${event.name} - ${dateDisplay(event.scheduled)}</h2>
       <h4>${event.attractions}</h4>
       <p>${event.description}</p>
       <a class="btn btn-primary" onclick="openModal('${event._id}')" >reservar ingresso</a>
       </article>`
       

        })

        break;

        case 'admin.html':
          console.log('teste')
          cleanMock(eventstable)
          events.forEach(event => {
          eventstable.innerHTML +=
         
              `<tr>
                <th scope="row"></th>
                <td>${dateDisplay(event.scheduled)}</td>
                   <td>${event.name}</td>
                    <td>${event.attractions}</td>
                      <td>
                     <a class="btn btn-dark" onclick="openReserveModal('${event._id}')">ver reservas</a>
                    <a href="editar-evento.html?id=${event._id}" class="btn btn-secondary">editar</a>
                     <a href="excluir-evento.html?id=${event._id}" class="btn btn-danger">excluir</a>
                   </td>
              </tr>`

          })

          break;
 
     
       }
      
      } catch(error) {

      alert(`Something went wrong! Details:\n ${error}`) 
      
}

}
