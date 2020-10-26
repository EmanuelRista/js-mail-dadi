// WARNING: <-- MAIL -->

// WARNING: START Generazione dell'Input;
var emailList = ["elettra.lamborghini@gmail.com", "padre.pio@gmail.com", "attilio.fontana@gmail.com", "giulio.gallera@gmail.com", "roberto.burioni@gmail.com"];

var userEmail = prompt("Inserisci la tua mail");

// WARNING: START Generazione della logica;
var index = 0;

var matched;

matched = false; //true se ho trovato l'utente, false non l'ho trovato

for (var i = 0; i < emailList.length; i++) {
  if(userEmail == emailList[index]) {
    matched = true;
  }
  index = index + 1; //ogni volta index assumerà un valore +1 partendo da 0
}

var message;

if(matched) {
  message = "Accesso consentito"
} else {
  message = "Accesso negato"
}

// WARNING: START Generazione dell'output;
document.getElementById("gate").innerHTML = message


// WARNING: <---DADI--->


var rollButton = document.getElementById('rollButton');
var rollUser = 0;
var rollPC = 0;

rollButton.addEventListener('click', function(){
  var resultUser = (Math.random() * (6 - 1) + 1).toFixed(0);
  var resultPC = (Math.random() * (6 - 1) + 1).toFixed(0);
  var results = 0;

  if (resultUser > resultPC) {
    document.getElementById('results').innerHTML = 'Hai vinto!';
    ++rollUser;
  } else if (resultUser < resultPC) {
    document.getElementById('results').innerHTML = 'Hai perso!';
    ++rollPC;
  } else {
    document.getElementById('results').innerHTML = 'Parità!';
  }

  document.getElementById('resultUser').innerHTML = "Il tuo risultato: " + resultUser;
  document.getElementById('resultPC').innerHTML = "Il risultato del computer: " + resultPC;

  resultsList.style.display = 'block';
  document.getElementById('rollUser').innerHTML = rollUser;
  document.getElementById('rollPC').innerHTML = rollPC;
})
