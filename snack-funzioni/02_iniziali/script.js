/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

function prendiIniziali(arrayNomi) {
  const iniziali = [];

  for (let i = 0; i < arrayNomi.length; i++) {
    const nome = arrayNomi[i];      
    const iniziale = nome[0];       
    iniziali.push(iniziale);        
  }

  return iniziali;
}

console.log(prendiIniziali(names));
