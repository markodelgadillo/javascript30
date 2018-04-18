const speed = document.querySelector('.speed')
const bar = speed.querySelector('.speed-bar')
const video = document.querySelector('.flex')

speed.addEventListener('mousemove', function(e) {
  const y = e.pageY - this.offsetTop
  const percent = Math.round(y / this.offsetHeight * 100) + '%'
  //min and max are the multplier speeds
  const min = 0.4
  const max = 4
  const height = percent
  bar.style.height = height
  console.log(percent)
})
