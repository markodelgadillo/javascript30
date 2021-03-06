let countDown
const timeLeft = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')
const audio = document.querySelector('#myAudio')

function timer(seconds) {
  clearInterval(countDown)
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
  if (seconds === 0) {
    alarm()
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

function startTimer() {
  timer(this.dataset.time)
}

function alarm() {
  timeLeft.classList.add('blink')
  timeLeft.addEventListener('click', snooze)
  audio.play()
}

function snooze() {
  timeLeft.classList.remove('blink')
  timeLeft.removeEventListener('click', snooze)
  audio.pause()
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault()
  const mins = this.minutes.value
  timer(mins * 60)
  this.reset()
})
