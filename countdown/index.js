let countDown
const timeLeft = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')

function timer(seconds) {
  displayTimeLeft(seconds)
  const now = Date.now()
  const then = now + seconds * 1000
  displayEndTime(then)
  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    //check if we should stop inspect
    if (secondsLeft < 0) {
      clearInterval(countDown)
      return
    }
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60)
  let remainderSeconds = seconds % 60
  if (remainderSeconds <= 9) {
    remainderSeconds = '0' + `${remainderSeconds}`
  }
  const time = (timeLeft.textContent = `${minutes + ':' + remainderSeconds}`)
  // adds timer to the browser tab
  document.title = time
  // allZeroes(time)
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp)
  const hour = end.getHours()
  const minutes = end.getMinutes()
  endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${
    minutes < 10 ? '0' + minutes : minutes
  }`
}

// function allZeroes(time) {
//   if (time == '0:00'){
//   setInterval(time => {
//       time =
//     }
//   }, 250)
// }
