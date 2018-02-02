const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

function handleCheck(e) {
  console.log(e)
  // check if shiftkey is down
  // and check that it is being CHECKED, not unchecked
  let inBetween = false
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkboxes
    checkboxes.forEach(checkbox => {
      console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
        console.log('Starting to check them inBetween')
      }
      if (inBetween) {
        checkbox.checked = true
      }
    })
  }
  lastChecked = this
}

let lastChecked

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
