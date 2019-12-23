// Get input element from HTML
let filterInput = document.querySelector('#filterInput');
// Now Add Event Listener
filterInput.addEventListener('keyup', filterNames);

// function
function filterNames() {
  // make filterInput uppercase and assign it to variable filterValue
  let filterValue = filterInput.value.toUpperCase();

  // Get names <UL> get ID of it
  let ulNames = document.querySelector('#names');

  //   Get list from <UL> query selector all
  let li = document.querySelector('li.collection-item');
  console.log(li);
}
