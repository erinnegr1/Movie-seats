const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied'); 
//^grabs all of them and puts them in a node list, and we can run methods on it like an array
const count = document.getElementById('count');
const total = document.getElementById('total');
const moviesSelect = document.getElementById('movie');

let ticketPrice = parseInt(moviesSelect.value);

//parseInt turns a string to a number, so does a "+" infront of it
//console.log(typeof ticketPrice);

//NO: seats.forEach approach loop through and add an event listener on each - not scalable
//YES: more performant, grab container and add event listner to that
// the event will be a click, and we want to make sure it's a seat we are clicking on
// then add functionality




////// Functions

//#### Update total and count in p span class
function updateSelectedCount(){
   const selectedSeats = document.querySelectorAll('.row .seat.selected'); //.row allows us to only grab all the seats in rows that have been selected
   //console.log(selectedSeats); //-> shows node list 
   const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}





//////////// Event Listening

////Movie select event

moviesSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    updateSelectedCount();
})

//// Seat click Event:

// arrow function replaces ('click', function(e)) - event function

container.addEventListener('click', e => {
    //console.log(e.target); (anywhere you click on the screen it's going to return the div and class of that element)
    // line below only allows the click to be listened to if it has the class of seat but not if the seat has the class of occupied
    if (
        e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied') 
    )  {
        e.target.classList.toggle('selected');
        //console.log(e.target);
        //toggle allows us to unselect it
        // adds the selected class, which has been styled in CSS
        updateSelectedCount();
    }

});



//Summary
// Add an event listener to the container
// checking to see if what we clicked on has a seat, but not a class of occupied
// if so, we are going to add a class of selected
// grab all selected, get length and save as variable
// set the inner text 
