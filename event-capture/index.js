const divs = document.querySelectorAll('div')
const button = document.querySelector('button')

function logText(e) {
  console.log(this.classList.value)
  /* When the Event Capture is set to false
     this will stop on the event you originally clicked
     and will not bubble up or capture down if Event Caputure is true */
  e.stopPropagation()
}

divs.forEach(div =>
  div.addEventListener('click', logText, {
    /* Event capture by default is false
       By setting it to true, it will trigger
       the event on the capture going down
       instead of the bubbling up
       */
    capture: false,
    // listens for a click and unbinds itself
    // meaning it then REMOVES the event listener
    once: true
  })
)

// This button will only trigger the function in
// the event listener once!
button.addEventListener(
  'click',
  () => {
    console.log('Click!!!')
  },
  {
    once: true
  }
)
