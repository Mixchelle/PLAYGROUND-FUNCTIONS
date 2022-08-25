// Desafio 1
function compareTrue(calor, sol) {
  if (calor && sol === true){
    return true;
  } return false;
   }
  console.log(compareTrue(true, true))
  // Desafio 2
  function calcArea(base, heigth){
    let area =  (base * heigth) / 2.
    return area
    // seu código aqui
  }
  console.log(calcArea (10, 50))
  
  // Desafio 3
  function splitSentence(frase) {
  return frase.split(' ')
  }
  console.log('foguete')
  
  // Desafio 4
  function concatName(array) {
    return array[array.length-1].concat(', '+array[0]);
    // seu código aqui
  }
  console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
  // Desafio 5
  function footballPoints(wins, ties) {
    return wins * 3 + ties * 1;  
    // seu código aqui
  }
  console.log(footballPoints(14, 8))
  // Desafio 6
  function highestCount(numeros) {
    let maiornumero = 0;
    let contador = 0;
  
    for(index = 0; index < numeros.length; index +=1) {
      if (numeros[index] > maiornumero) {
        maiornumero = numeros[index];
      }
    }
    for(index1=0; index1 < numeros.length; index1 +=1) {
    if (maiornumero === numeros[index1]) {
      contador += 1;

    }
  }
    return contador
  }
 
  
  
  console.log(highestCount([1, 1, 1]))
  
  // Desafio 7
  function catAndMouse(a, b, c){
    let cat1 = a;
    let cat2 = b;
    let mouse = c;
     if ((Math.abs(mouse - cat1)) > (Math.abs(mouse - cat2))){
      return 'cat2'
     } else if ((Math.abs(mouse - cat1)) == (Math.abs(mouse - cat2))) {
      return 'os gatos trombam e o rato foge'
     } else {
      return 'cat1'
     }


  }
  
  console.log(catAndMouse(6, 12, 1))
  
  
  // Desafio 8
  function fizzBuzz() {
    // seu código aqui
  }
  
  // Desafio 9
  function encode() {
    // seu código aqui
  }
  function decode() {
    // seu código aqui
  }
  
  // Desafio 10
  function techList() {
    // seu código aqui
  }
  
  module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
    techList,
  };