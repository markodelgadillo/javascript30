const addItems = document.querySelector('.add-items')
// itemsList is the unordered list in the html
const itemsList = document.querySelector('.plates')
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

addItems.addEventListener('submit', addItem)

populateList(items, itemsList)
