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
      let newBand = splitBand.slice(1, splitBand.length).join(' ')
      newBand = newBand.concat(' ' + splitBand[0])
      newBands.push(newBand)
    } else {
      newBands.push(band)
    }
  })
  return sortBands(bands, newBands)
}

function sortBands(bands, newBands) {
  newBands.sort()
  addArticle(newBands)
}

function addArticle(newBands) {
  const sortedBands = []
  newBands.forEach(band => {
    let splitBand = band.split(' ')
    if (splitBand[splitBand.length - 1].match(/\b(The|A|An)\b/)) {
      console.log(splitBand)
      let article = splitBand[splitBand.length - 1]
      console.log(article)
      splitBand = splitBand.slice(0, splitBand.length - 1).join(' ')
      console.log(splitBand)
      splitBand = article.concat(' ' + splitBand)
      sortedBands.push(splitBand)
    } else {
      splitBand = splitBand.join(' ')
      sortedBands.push(splitBand)
    }
  })
  return sortedBands
}
