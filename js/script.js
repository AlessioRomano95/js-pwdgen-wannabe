console.log('Generatore Password')

const element = document.getElementById('password')

const firstname = prompt('Nome?')

const lastname = prompt('Cognome')

const color = prompt('Colore preferito?')

const fixedNumber = 24

let message = 'La tua nuova password è: '

const finalText = '<strong>' + message + '</strong>' + firstname + lastname + color + fixedNumber;

element.innerHTML = finalText