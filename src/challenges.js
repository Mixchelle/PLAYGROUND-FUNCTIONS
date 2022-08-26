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
  function highestCount(nun) {
    let numeroMaior = nun[0];
    let index = 0;
    let contador = 0;
  
    for (let index in nun) {
        if (nun[index] > numeroMaior) {
            numeroMaior = nun[index];
        }
    }
    for (let index2 in nun) {
        if (nun[index2] === numeroMaior) {
            contador += 1;
        }
    }
    
    return contador;
  }
  
  
  console.log(highestCount([1, 1, 1]))
  
  // Desafio 7
  function catAndMouse(mouse, cat1, cat2){
     if ((Math.abs(mouse - cat1)) < (Math.abs( mouse - cat2))){
      return 'cat1'
     } else if ((Math.abs(mouse - cat1)) === (Math.abs(mouse - cat2))){
      return 'os gatos trombam e o rato foge'
     } else {
      return 'cat2'
     }


  }
  
  console.log(catAndMouse(100, 100, 5))
  
  
  // Desafio 8
function fizzBuzz(n){   
  let resultado = [];
  for (let i = 0; i < n.length; i += 1) {
    if (n[i] % 3 === 0 && n[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (n[i] % 3 === 0 && n[i] % 5 !== 0) {
      resultado.push('fizz');
    } else if (n[i] % 5 === 0 && n[i] % 3 !== 0) {
      resultado.push('buzz')
    } else {
      resultado.push('bug!')
    }
  }
  return resultado;
}
console.log(fizzBuzz([15]));



  
  // Desafio 9
  function encode(texto) {
    let code = '';
  code = texto.replace(/a/gi, 1).replace(/e/gi, 2).replace(/i/gi, 3).replace(/o/gi, 4).replace(/u/gi, 5)
    return code;
    // seu código aqui
  }
 
  function decode(texto) {
    let code = '';
    code = texto.replace(/1/gi, 'a').replace(/2/gi, 'e').replace(/3/gi, 'i').replace(/4/gi, 'o').replace(/5/gi,'u')
     return code;
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