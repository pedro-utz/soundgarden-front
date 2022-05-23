var BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';
var page = (window.location.href).split('/');
var teste = page.length-1;
var endpoint = page[teste];

var counter = 0;


var indexevents = document.querySelector('.container.d-flex.justify-content-center.align-items-center')
var eventosevents = document.querySelector('.container.d-flex.justify-content-center.align-items-center.flex-wrap')
var eventstable = document.querySelector('#eventstable')

function cleanMock(element){element.innerHTML = ''}


var eventId = '';  //used to tmp store data

var getrequest = {
    'method' : 'GET',
    'headers':{'Content-Type' : 'application/json'}
 }

 //display dates 
 function dateDisplay(date){
    const array = date.split(/[-T:.]+/);
     return `${array[2]}/${array[1]}/${array[0]} ${array[3]}:${array[4]}`
  }

  //format date
  function formatDate(date){
    const array = date.split(/[-T:.]+/);
     return `${array[0]}-${array[1]}-${array[2]}T${array[3]}:${array[4]}`
  // "yyyy-MM-ddThh:mm
    }

//reserves modal getting ID for get request


