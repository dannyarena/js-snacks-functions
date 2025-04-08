/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


function filtraPerIniziale(arrayNomi, lettera) {
    const filtrati = arrayNomi.filter(function(nome) {
      return nome[0] === lettera;
    });
    return filtrati;
  }
  
  console.log(filtraPerIniziale(names, "A"));
  