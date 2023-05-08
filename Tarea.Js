// Trabajo 1:

function PiramideNumerica(numero) {
    for (let a=1; a<=numero; a++){
        let c=''
        for (b=1; b<=a; b++) {
            c += b 
        }

        console.log(c);
    }
}
  PiramideNumerica (6);

  function PiramideNumerica(numero) {
    for (let a=1; a<=numero; a++){
        let c=''
        for (b=1; b<=a; b++) {
            c += b 
        }

        console.log(c);
    }
}
  PiramideNumerica (3);
  
// Trabajo 2:
 
const array1 = ["Rojo","Azul","Verde","Negro","Blanco"];
const array2 = ["Azul","Negro","Amarillo","Marron"];
function palabrasIguales(array1, array2) {
  var array3 = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        array3.push(array1[i])
      }
    }
  }
  return array3
}
console.log(palabrasIguales(array1,array2))