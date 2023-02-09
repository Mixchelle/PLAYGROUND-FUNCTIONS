// Desafio 1
const compareTrue = (a, b) => {
  if (a && b === true) {
    return true;
  }
  return false;
};

// Desafio 2
const calcArea = (base, height) => ((base * height) / 2);

// Desafio 3
const splitSentence = (frase) => frase.split(' ');

// Desafio 4
const concatName = (array) => array[array.length - 1].concat(`, ${array[0]}`);

// Desafio 5
const footballPoints = (wins, ties) => ((wins * 3) + (ties));

// Desafio 6
const highestCount = (arr) => {
  let counts = {};
  arr.forEach((element) => {
    counts[element] = (counts[element] || 0) + 1;
  });
  const value = Object.values(counts);
  let contador = value[value.length - 1];
  return contador;
};

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    return 'cat1';
  } if ((Math.abs(mouse - cat1)) === (Math.abs(mouse - cat2))) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
};

// Desafio 8
// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
const fizzBuzz = (number) => {
  let resultado = [];
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] % 3 === 0 && number[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (number[i] % 3 === 0 && number[i] % 5 !== 0) {
      resultado.push('fizz');
    } else if (number[i] % 5 === 0 && number[i] % 3 !== 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
};

// Desafio 9
const encode = (texto) => texto
  .replaceAll(/a/gi, 1)
  .replaceAll(/e/gi, 2)
  .replaceAll(/i/gi, 3)
  .replaceAll(/o/gi, 4)
  .replaceAll(/u/gi, 5);

const decode = (texto) => texto
  .replaceAll(/1/gi, 'a')
  .replaceAll(/2/gi, 'e')
  .replaceAll(/3/gi, 'i')
  .replaceAll(/4/gi, 'o')
  .replaceAll(/5/gi, 'u');

// Desafio 10
const techList = (tech, nome) => {
  let techOr = tech.sort();
  let list = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techOr.length; index += 1) {
    list.push(({
      tech: techOr[index],
      name: nome,
    }));
  }
  return list;
};

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
