const pressed = []
const secretCode = 'markodel'

window.addEventListener('keyup', e => {
  console.log(e.key)
  pressed.push(e.key)
  console.log(pressed)
})
