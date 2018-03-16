const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
]

function removeArticles(bands) {
  const newBands = []
  bands.forEach(band => {
    let splitBand = band.split(' ')
    console.log(splitBand[0])
    if (splitBand.indexOf('The' || 'A' || 'An') === 0) {
      newBand = splitBand.slice(1, splitBand[0].length + 1).join(' ')
      console.log(newBand)
      newBands.push(newBand)
    } else {
      newBands.push(band)
    }
  })
  return newBands
}

removeArticles(bands)
