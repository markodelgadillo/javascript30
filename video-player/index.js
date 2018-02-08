/* Get our elements */
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]') // anything that has a data-skip attribute
const ranges = player.querySelectorAll('.player__slider')

/* Build out functions */
function togglePlay() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'
  console.log('Update the button')
}

function skip() {
  console.log('Skipping')
}

/* Hook up the event listeners */

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip))
