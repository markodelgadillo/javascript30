const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

navigator.geolocation.watchPosition(
  data => {
    console.log(data)
    speed.textContent = Number.parseFloat(data.coords.speed * 2.23694).toFixed(
      2
    )
    console.log(data.coords.speed)
    arrow.style.transform = `rotate(${data.coords.heading}deg)`
  },
  err => {
    console.err(err)
    alert('Hey! You gotta allow that to happen!!!')
  }
)
