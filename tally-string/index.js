const timeNodes = Array.from(document.querySelectorAll('[data-time]'))

const seconds = timeNodes
  // map through to get each nodes data attribute of time
  .map(node => node.dataset.time)
  // map through each data-time attrubute
  .map(timeCode => {
    // ES6 destructuring to get the mins and secs by splitting it from :
    const [mins, secs] = timeCode
      .split(':')
      // map through each [mins, secs] to convert them from string to floats
      .map(parseFloat)
    // returns minutes multiplied by 60 to get the number of seconds added
    // to the value of secs
    return mins * 60 + secs
  })
  // reduce(accumulator, currentValue)
  // current value will be the result of `return mins * 60 + secs`
  // will add the current value to `total` until no more values available
  .reduce((total, seconds) => {
    console.log(total, seconds)
    return total + seconds
  })

// `const seconds` is now equal to all of the video seconds added up to 17938
let secondsLeft = seconds

// 3600 is how many seconds in an hour and Math.floor gives the whole number
// withouth Math.floor returned `4.982777777777778`
// with Math.floor returned `4`
const hours = Math.floor(secondsLeft / 3600)
// using % will return the remainder that Math.floor ignored (.982777777777778)
secondsLeft = secondsLeft % 3600 // returns 3538

// takes 3538 seconds divided by 60 to get how many minutes it is
const minutes = Math.floor(secondsLeft / 60)
// gets the remainder of seconds after converting to minutes above
secondsLeft = secondsLeft % 60

console.log(hours + ' hours,', minutes + ' minutes,', secondsLeft + ' seconds')

// ONLY using reduce

// let total = timeNodes.reduce((total, seconds) => {
//   const [mins, secs] = parseFloat(dataset.time.value.split(':'))
//   seconds = mins * 60 + secs
//   return total + seconds
// })
