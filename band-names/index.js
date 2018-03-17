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

function newBandsArr(bands) {
  const newBands = []
  bands.forEach(band => {
    let splitBand = band.split(' ')
    if (splitBand[0].match(/\b(The|A|An)\b/)) {
      let newBand = splitBand.slice(1, splitBand.length - 1).join(' ')
      newBands.push(newBand)
    } else {
      newBands.push(band)
    }
  })
  return sortBands(bands, newBands)
}

function sortBands(bands, newBands) {
  newBands.sort()
  for (let i of newbands) {
  }

  console.log(newBands)
}
