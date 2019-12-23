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

  //   Get list from <UL> querySelector of the ulNames above
  let li = ulNames.querySelectorAll('li.collection-item');

  // Loop through all collection-item li's
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    // if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
