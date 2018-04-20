let countDown

function timer(seconds) {
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
  console.log(seconds)
}
