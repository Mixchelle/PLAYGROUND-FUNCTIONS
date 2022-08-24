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
  function highestCount() {
    // seu código aqui
  }
  
  // Desafio 7
  function catAndMouse(x, y, z) {
   
  }
  
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