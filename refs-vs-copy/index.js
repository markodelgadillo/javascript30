//start with strings, numbers and booleans
let age = 100
let age2 = age
console.log(age, age2) // 100 100

age = 200
console.log(age, age2) // 200 100

let name = 'Marko'
let name2 = name
console.log(name, name2) // Marko Marko

name = 'Marko Uriel'
console.log(name, name2) // Marko Uriel Marko

// Let's say we have an array
const players = ['Marko', 'Betzy', 'Alejandro', 'Patito']

// and we want to make a copy of it
const team = players
console.log(players, team) // ["Marko", "Betzy", "Alejandro", "Patito"] ["Marko", "Betzy", "Alejandro", "Patito"]

// You might think we can do something like this
team[3] = 'Sparky'
console.log(players, team) // ["Marko", "Betzy", "Alejandro", "Sparky"] ["Marko", "Betzy", "Alejandro", "Sparky"]

// however what happens when we update that array?

// now here is the problem

// oh no - we have edited the original array too!

// Why? It's because that is an array REFERENCE, not an array COPY.

// They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice()
const team3 = [].concat(players)
console.log(team2) // ["Marko", "Betzy", "Alejandro", "Sparky"]

team2[3] = 'Patito'
console.log(team2) // ["Marko", "Betzy", "Alejandro", "Patito"]
// one day

// or create a new array and concat the old one in

// or use the new ES6 Spread
const team4 = [...players]
console.log(team4) // ["Marko", "Betzy", "Alejandro", "Sparky"]

team4[3] = 'Frogtito'
console.log(team4) // ["Marko", "Betzy", "Alejandro", "Frogtito"]

const team5 = Array.from(players)
console.log(team5) // ["Marko", "Betzy", "Alejandro", "Sparky"]

team5[3] = 'Patito'
console.log(team5) // ["Marko", "Betzy", "Alejandro", "Patito"]
console.log(players) // ["Marko", "Betzy", "Alejandro", "Sparky"]

// now when we update it, the original one isnm't changed

// The same thing goes for objects, let's say we have a person objects

// with objects
const person = {
  name: 'Marko Uriel',
  age: 37
}

// and think we make a copy
const captain = person
captain.number = 99
console.log(captain) // {name: "Marko Uriel", age: 37, number: 99}

// how do we take a copy instead
const cap2 = Object.assign({}, person, { number: 66 })
console.log(cap2) // {name: "Marko Uriel", age: 37, number: 66}
console.log(person) // {name: "Marko Uriel", age: 37, number: 99}

// we will hopefully soon se the object ...Spread
const cap3 = { ...person }
console.log(cap3) // {name: "Marko Uriel", age: 37, number: 99}

// Things to note - this is only 1 level deep - both for Arrays
// and Objects. Lodash has a cloneDeep methoid, but you should
// think twice before using it
const marko = {
  name: 'Marko',
  age: 37,
  social: {
    twitter: '@Marko17'
  }
}
console.clear()
console.log(marko) // {name: "Marko", age: 37, social: { twitter: @NotMarko}}

const dev = Object.assign({}, marko)
dev.name = 'Marko Uriel'
console.log(marko) // {name: "Marko", age: 37, social: { twitter: @NotMarko}}
console.log(dev) // {name: "Marko Uriel", age: 37, social: { twitter: @NotMarko}}
dev.social.twitter = '@NotMarko'
console.log(dev.social) // {twitter: "@NotMarko"}
