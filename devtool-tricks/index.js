const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }]

/* When on the inspector, click on the dom
  element you want to check what is changing it.
  Once the element is highlighted on the Elements tab,
  right click it and select "Break on Attribute Modification".
  It will pause the action on the front end and highlight the
  JavaScript in the sources tab that is effecting the element.
  */
const p = document.querySelector('p')

function makeGreen() {
  p.style.color = 'BADA55'
  p.style.fontSize = '50px'
}

p.addEventListener('click', makeGreen)

// Regular
console.log('hello')

// Interpolated
console.log('Hello I am a %s string!', 'interpolated')

// styled
console.log('%c I am some great text', 'text-shadow:10px 10px 0 blue')

// warning!
console.warn('Oh NOOO')

// error
console.error('Shit!')

// info
console.info('Crocodiles eat 3-4 people per year')

// testing
console.assert(1 === 1, 'That is Wrong!')
console.assert(1 === 2, 'That is Wrong!') // Only this will be logged because it is wrong

console.assert(
  p.classList.contains('ouch'),
  'You have selected the wrong element!'
)

// clearing
console.clear()

// Viewing DOM Elements
console.dir(p)

console.clear()

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`) // or use console.groupCollapsed to start the group collapsed
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`${dog.name} is ${dog.age * 7} dog years old`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Steve')
console.count('Wes')
console.count('Jeff')
console.count('Wes')
console.count('Steve')
console.count('Wes')
console.count('Steve')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/markodelgadillo')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data')
    console.log(data)
  })

console.table(dogs)
