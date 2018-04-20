let countDown
const timeLeft = document.querySelector('.display__time-left')

function timer(seconds) {
  displayTimeLeft(seconds)
  const now = Date.now()
  const then = now + seconds * 1000
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
  timeLeft.textContent = `${minutes + ':' + remainderSeconds}`
}
