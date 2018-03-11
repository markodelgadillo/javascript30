const addItems = document.querySelector('.add-items')

// itemsList is the unordered list in the html
const itemsList = document.querySelector('.plates')

// parses the data from localStorage back to JSON to make the
// data available again to the functions again
// OR will still function with an empty array
const items = JSON.parse(localStorage.getItem('items')) || []

function addItem(e) {
  e.preventDefault()
  const text = this.querySelector('[name=item]').value
  const item = {
    text: text,
    done: false
  }
  items.push(item)
  populateList(items, itemsList)
  // sets items into LocalStorage
  localStorage.setItem('items', JSON.stringify(items))

  this.reset()
  console.table(items)
}

// items will be passed in as plates. It is an
// empty array so that if nothing is passed in,
// it will loop over instead of break the function
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? 'checked' : ''
      }/>
      <label for="item${i}">${plate.text}</label>
    </li>
  `
    })
    .join('')
}

function toggleDone(e) {
  if (!e.target.matches('input')) {
    return
  }
  const el = e.target
  const index = el.dataset.index
  console.log(index)
  // sets the value of the done key in the index
  // to the opposite of its current value
  // i.e. If its true, it toggles to false
  // and vice versa
  items[index].done = !items[index].done
  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemsList)
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)

// runs the function on page load
populateList(items, itemsList)

// challenge
// Create a 'Clear All' button that will delete all items
// Create a 'Check All' button to check all items
// Create a 'Uncheck All' button to uncheck all items
