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
