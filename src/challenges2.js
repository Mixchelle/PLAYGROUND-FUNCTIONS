// Desafio 11
// eslint-disable-next-line max-lines-per-function, complexity, sonarjs/cognitive-complexity
const generatePhoneNumber = (array) => {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let numero = 0; numero < array.length; numero += 1) {
    if (array[numero] < 0 || array[numero] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let arrayOriginal = [...array];
  array.sort();
  let duplicados = 1;
  for (let i = 0; i < array.length - 1; i += 1) {
    if (duplicados >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (array[i] === array[i + 1]) {
      duplicados += 1;
    } else {
      duplicados = 1;
    }
  }
  const numeroTelefone = `(${
    arrayOriginal.slice(0, 2).join('')
  }) ${
    arrayOriginal.slice(2, 7).join('')
  }-${
    arrayOriginal.slice(7).join('')}`;

  return numeroTelefone;
};

// Desafio 12
// eslint-disable-next-line complexity
const triangleCheck = (lineA, lineB, lineC) => {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } if (lineC < lineA + lineB && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
  return false;
};

// Desafio 13
const hydrate = (string) => {
  const numeros = string.match(/(\d+)/g);
  let soma = 0;
  for (let i of numeros) {
    soma += Number(i);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
};

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};