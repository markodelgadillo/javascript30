const speed = document.querySelector('.speed')
const bar = speed.querySelector('.speed-bar')
const video = document.querySelector('.flex')

speed.addEventListener('mouseover', function(e) {
  const y = e.pageY - this.offsetTop
  console.log(y)
})
