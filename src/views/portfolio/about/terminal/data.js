// eslint-disable-next-line no-unused-vars
let commandList
export default (commandList = {
  help: () => {
    return `De beschikbare commandos zijn: <br><br>
        naam [optie] --voornaam --achternaam<br>
        email<br>
        telefoon<br>
        geboortedatum<br>
        plaats<br>
        nationaliteit<br>`
  },
  naam: ({voornaam, achternaam}) => {
    if (voornaam) return 'Zowie'
    if (achternaam) return 'van Geest'
    return `Zowie van Geest <br>
        Gebruik: naam [opties]<br><br>
        Voorbeeld: naam --voornaam of --achternaam`
  },
  email: () => {
    return 'zowie@zowievangeest.nl'
  },
  telefoon: () => {
    return '06 20 704 931'
  },
  geboortedatum: () => {
    return '1 augustus 1993'
  },
  plaats: () => {
    return 'Delft'
  },
  nationaliteit: () => {
    return 'Nederlandse'
  }
})
