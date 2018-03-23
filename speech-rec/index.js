window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.interimResults = true

let p = document.createElement('p')
const words = document.querySelecteor('.words')
words.appendChild(p)

recognition.addEventListener('results', e => {
  console.log(e)
})
