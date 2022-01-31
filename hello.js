let nameOldPerson = prompt('Nome da pessoa mais velha')
let ageOldPerson = prompt('Idade da pessoa mais velha')

let nameYoungerPerson = prompt('Nome da pessoa mais nova')
let ageYoungerPerson = prompt('Idade da pessoa mais nova')

let ageDifference = ageOldPerson - ageYoungerPerson

alert(
  'Pessoa mais velha: ' +
    nameOldPerson +
    '\nIdade: ' +
    ageOldPerson +
    '\n\nPessoa mais nova: ' +
    nameYoungerPerson +
    '\nIdade: ' +
    ageYoungerPerson +
    '\n\nDiferença de Idade: ' +
    ageDifference
)
