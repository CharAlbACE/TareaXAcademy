// EXPLICACION DE FUNTION:

function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar("Gaston");
//saludar("Pedro");
//saludar("Axel");
//saludar("Diego");
//saludar("Leonardo");



function suma (n1,n2) {
    return n1 + n2;
}

const resultado = suma(1, 4);
console.log("resultado suma = " + resultado)



function elementosComunes(arr1, arr2) {
    
    return arr1.filter(item => arr2.includes(item));
  }
  