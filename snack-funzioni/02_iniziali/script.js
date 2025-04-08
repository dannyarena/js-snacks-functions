/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


function prendiIniziali(arrayDiNomi) {
    const iniziali = arrayDiNomi.map(function(nome) {
      return nome[0];
    });
    return iniziali;
  }
  
  console.log(prendiIniziali(names));