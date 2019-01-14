// Counting Sheep
// Write a recursive function that counts how many sheep jumps over the fence.

// const countSheep = (num) => {
//   if (num == 0) {
//     return ''
//   } else {
//     console.log(num + ' - Another sheep jump over the fence')
//     return countSheep(num - 1)
//   }
// }

// **Iteratively**
// const countSheep = num => {
//   for (i = num; i >= 1; i--) {
//     console.log(i + ' - Another sheep jump over the fence')
//   }
// }

// Write a function that takes an array as input which contains an unknown set of numbers, and outputs an array with each input value doubled.
// const doubArr = (arr) => {
//   if(arr.length == 0) {
//     return []
//   } else {
//     return [arr[0] * 2, ...doubArr(arr.slice(1))]
//   }
// }

// console.log(doubArr([2,4,6]))

// **Iteratively**
// const doubArr = arr => arr.map(x => x * 2)

// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
// const revStr = (str) => {
//   if (str.length == 0) {
//     return ''
//   } else {
//     return str.slice(-1) + revStr(str.slice(0,-1))
//   }
// }

// **Iteratively**
// const revStr = str => str.split('').reverse().join('');

// console.log(revStr('LOOKATMEIMASTRING'))

// Calculates the nth triangular number. A triangular number counts the objects that can form an equilateral triangle.
// The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n.
// const triNumber = (num) => {
//   if (num == 1) {
//     return 1
//   } else {
//     return num + triNumber(num - 1)
//   }
// }

// **Iteratively**
// const triNum = value => {
//   return ((value / 2) * (value + 1)) || 0
// }

// Split a string based upon a separator (similar to String.prototype.split).

// const splitStr = (str, separator) => {
//   if (str.length == 0) {
//     return ''
//   }
//   if (str.indexOf(separator) == -1) {
//     return str;
//   }
//   return str.slice(0, (str.indexOf(separator))) + splitStr(str.slice(str.indexOf(separator) + 1), separator)
// }

// **Iteratively**
// function splitStr(str, separator) {
//   let arr = str.split('');
//   let filteredArr = arr.filter(letter => letter !== separator);
//   let joinedArr = filteredArr.join('');
//   return joinedArr;
// }

// console.log(splitStr('H/a/p/p/y/ /B/i/r/t/h/d/a/y', '/'))

// WITHOUT USING SPLIT
// const stringSplit = (input, separator) => {
//   let stringArray = ['']
//   let j = 0
//   for (let i = 0; i < input.length; i++) {
//     if (input.charAt(i) == separator) {
//       j++
//       stringArray.push('')
//     } else {
//       stringArray[j] += input.charAt(i)
//     }
//   }
//   return stringArray.join('')
// }

// Write a recursive function that prints out the binary representation of a given number.
// const binaryRep = (num) => {
//   if (num == 0) {
//     return ''
//   } else {
//     let binaryNum = num % 2;
//     return binaryNum + (binaryRep(~~(num / 2)))
//   }
// }
// OR YOU CAN USE TERNARY

// let t = function x(y,z) {
//   return y === 0 ? z || '0' : x(~~(y / 2), (y % 2) + z)
// }

// **Iteratively**

// function binaryNum(num) {
//   return num.toString(2)
// }

// console.log(binaryNum(25))

// function numberToBinary(num) {
//   let number = num
//   let result = []
//   while(number >= 1) {
//     result.unshift(Math.floor(number%2))
//     number = number /2
//   } return result.join('')
// }

// console.log(numberToBinary(25))

// Write a recursive function that finds the factorial of a given number.
// The factorial of a number can be found by multiplying that number by each number between itself and one.
// function Factorial(num) {
//   if (num < 1) {
//     return 1
//   } else {
//     return num * Factorial(num - 1)
//   }
// }

// OR YOU CAN USE TERNARY

// const factorial = num => (num < 1 ? 1 : num * factorial(num - 1))

// **Iteratively**
// function factorial(num) {
//   for (let i = num - 1; i >= 1; i--) {
//     num *= i
//   }
//   return num
// }

// console.log(factorial(4))


// Write a recursive function that prints the nth fibonacci number.
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers.
// function fibonacci (num) {
//   if(num == 1) {
//     return 1
//   } if ( num == 2) {
//     return 1
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }

// // OR TERNARY USE

// const fib = (num) => (num == 1 || num == 2 ? 1 : fib(num - 1) + fib(num - 2))

// **Iteratively**
// const fibonacci = (num) => {
//   let a = 1
//   let b = 0
//   let storage
//   while (num >= 0) {
//     storage = a
//     a = a + b
//     b = storage
//     num--
//   } return b
// }

// console.log(fibonacci(5))


// An anagram is any word or phrase that exactly reproduces the letters in another order. 
// Write a function that creates an anagram (listing all the rearrangements of a word) of a given word. 
// const permutations = (str) => {
//   let results = []
//   if (str.length === 1) {
//     results.push(str)
//     return results
//   }
//   for (let i = 0; i < str.length; i++) {
//     let firstLetter = str[i]
//     let remainingLetters = str.substring(0, i) + str.substring(i + 1)
//     let innerChanges = permutations(remainingLetters)
//     for (let k = 0; k < innerChanges.length; k++) {
//       results.push(firstLetter + innerChanges[k])
//     }
//   }
//   return results
// }

// **Iteratively**
function permute(permutation) {
  let length = permutation.length
      let result = [permutation.slice()]
      let c = new Array(length).fill(0)
      let i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}