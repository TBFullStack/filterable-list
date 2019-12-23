// Get input element from HTML
let filterInput = document.querySelector('#filterInput');
// Now Add Event Listener
filterInput.addEventListener('keyup', filterNames);

// function
function filterNames() {
  // make filterInput uppercase and assign it to variable filterValue
  let filterValue = filterInput.value.toUpperCase();
  console.log(filterValue);
}
