const readline = require('readline');

const createRL = () => readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(() => {
  console.log('Welcome to Fizz Buzz!');
  console.log('Submit a number and get an answer!');
})();

const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  } if (number % 3 === 0) {
    return 'Fizz';
  } if (number % 5 === 0) {
    return 'Buzz';
  }
  return number.toString();
};

const handleNumberInput = (() => {
  const rl = createRL();
  rl.question('Number (or "exit" to close Fizz Buzz): ', (input) => {
    if (input.toLowerCase() === 'exit') {
      rl.close();
      return;
    }

    const number = parseInt(input);
    if (!isNaN(number)) {
      const result = fizzBuzz(number);
      console.log(`Number: ${result}`);
    }

    rl.close();
    handleNumberInput();
  });
})();

module.exports = fizzBuzz;
