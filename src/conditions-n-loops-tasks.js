/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 * Определяет, является ли данное число положительным. Ноль считается положительным.
 * Эта функция не использует методы Number или Math class.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) return true;
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max;
  if (a < b && b > c) {
    max = b;
  }
  if (a < c && b < c) {
    max = c;
  }
  if (a > b && a > c) {
    max = a;
  }
  if (a === b && b === c) {
    max = a;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  const x = Math.abs(queen.x - king.x);
  const y = Math.abs(queen.y - king.y);
  if (x === y) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    if (a === b || b === c || a === c) return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let str = '';
  switch (num) {
    case 1:
      str = 'I';
      break;
    case 2:
      str = 'II';
      break;
    case 3:
      str = 'III';
      break;
    case 4:
      str = 'IV';
      break;
    case 5:
      str = 'V';
      break;
    case 6:
      str = 'VI';
      break;
    case 7:
      str = 'VII';
      break;
    case 8:
      str = 'VIII';
      break;
    case 9:
      str = 'IX';
      break;
    case 10:
      str = 'X';
      break;
    case 11:
      str = 'XI';
      break;
    case 12:
      str = 'XII';
      break;
    case 13:
      str = 'XIII';
      break;
    case 14:
      str = 'XIV';
      break;
    case 15:
      str = 'XV';
      break;
    case 16:
      str = 'XVI';
      break;
    case 17:
      str = 'XVII';
      break;
    case 18:
      str = 'XVIII';
      break;
    case 19:
      str = 'XIX';
      break;
    case 20:
      str = 'XX';
      break;
    case 21:
      str = 'XXI';
      break;
    case 22:
      str = 'XXII';
      break;
    case 23:
      str = 'XXIII';
      break;
    case 24:
      str = 'XXIV';
      break;
    case 25:
      str = 'XXV';
      break;
    case 26:
      str = 'XXVI';
      break;
    case 27:
      str = 'XXVII';
      break;
    case 28:
      str = 'XXVIII';
      break;
    case 29:
      str = 'XXIX';
      break;
    case 30:
      str = 'XXX';
      break;
    case 31:
      str = 'XXXI';
      break;
    case 32:
      str = 'XXXII';
      break;
    case 33:
      str = 'XXXIII';
      break;
    case 34:
      str = 'XXXIV';
      break;
    case 35:
      str = 'XXXV';
      break;
    case 36:
      str = 'XXXVI';
      break;
    case 37:
      str = 'XXXVII';
      break;
    case 38:
      str = 'XXXVIII';
      break;
    case 39:
      str = 'XXXIX';
      break;
    default:
  }
  return str;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let stringResult = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '.':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'point';
        break;
      case ',':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'point';
        break;
      case '-':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'minus';
        break;
      case '0':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'zero';
        break;
      case '1':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'one';
        break;
      case '2':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'two';
        break;
      case '3':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'three';
        break;
      case '4':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'four';
        break;
      case '5':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'five';
        break;
      case '6':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'six';
        break;
      case '7':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'seven';
        break;
      case '8':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'eight';
        break;
      case '9':
        if (stringResult.length > 0) {
          stringResult += ' ';
        }
        stringResult += 'nine';
        break;
      default:
    }
  }
  return stringResult;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let strRevers = '';
  for (let i = 0; i < str.length; i += 1) {
    strRevers = str[i] + strRevers;
  }
  if (str === strRevers) return true;
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * Поиск первого вхождения буквы в строку.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numResult = num;
  while (numResult > 0) {
    if (numResult % 10 === digit) return true;
    numResult = Math.trunc(numResult / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftArray = 0;
    let rightArray = 0;
    for (let k = 0; k < i; k += 1) {
      leftArray += arr[k];
    }
    for (let l = i + 1; l < arr.length; l += 1) {
      rightArray += arr[l];
    }
    if (leftArray === rightArray) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 * Генерирует спиральную матрицу заданного размера, заполненную числами в порядке возрастания, начинающимися от одного.
 * Направление заполнения числами по часовой стрелке.
 * Использование методов классов String и Array в этой задаче запрещено
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let k = 0; k < size; k += 1) {
      matrix[i][k] = 0;
    }
  }

  let row = 0;
  let col = -1;
  let driveRow = 0;
  let driveCol = 1;
  let x = 1;

  while (x <= size ** 2) {
    if (
      driveRow + row >= 0 &&
      driveRow + row < size &&
      driveCol + col >= 0 &&
      driveCol + col < size &&
      matrix[driveRow + row][driveCol + col] === 0
    ) {
      row += driveRow;
      col += driveCol;
      matrix[row][col] = x;
      x += 1;
    } else if (driveRow === 1) {
      driveRow = 0;
      driveCol = -1;
    } else if (driveCol === 1) {
      driveCol = 0;
      driveRow = 1;
    } else if (driveRow === -1) {
      driveRow = 0;
      driveCol = 1;
    } else if (driveCol === -1) {
      driveCol = 0;
      driveRow = -1;
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 * Поворачивает матрицу на 90 градусов по часовой стрелке.
 * Учтите, что размер матрицы может быть очень большим. Подумайте, как можно оптимизировать решение.
 * Использование методов класса String и Array в этой задаче запрещено.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const copyMatrix = matrix;

  for (let i = 0; i < copyMatrix.length; i += 1) {
    for (let j = i + 1; j < matrix.length; j += 1) {
      const temp = copyMatrix[i][j];
      copyMatrix[i][j] = copyMatrix[j][i];
      copyMatrix[j][i] = temp;
    }
  }
  for (let i = 0; i < copyMatrix.length; i += 1) {
    let leftCol = 0;
    let rightCol = copyMatrix.length - 1;

    while (leftCol < rightCol) {
      const temp = copyMatrix[i][leftCol];
      copyMatrix[i][leftCol] = copyMatrix[i][rightCol];
      copyMatrix[i][rightCol] = temp;

      leftCol += 1;
      rightCol -= 1;
    }
  }

  return copyMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * Сортирует массив чисел в порядке возрастания на месте.
 * Используйте любой алгоритм сортировки по вашему выбору.
 * Учтите, что массив может быть очень большим. Подумайте, как можно оптимизировать решение.
 * В этой задаче использование методов классов Array и String запрещено.
 *
 * @param {number[]} array - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function mergeSort(array, leftArray, rightArray) {
  const arrayCopy = array;
  let indexLeft = 0;
  let indexRight = 0;
  let indexArrayCopy = 0;

  while (indexLeft < leftArray.length && indexRight < rightArray.length) {
    if (leftArray[indexLeft] < rightArray[indexRight]) {
      arrayCopy[indexArrayCopy] = leftArray[indexLeft];
      indexLeft += 1;
    } else {
      arrayCopy[indexArrayCopy] = rightArray[indexRight];
      indexRight += 1;
    }
    indexArrayCopy += 1;
  }

  while (indexLeft < leftArray.length) {
    arrayCopy[indexArrayCopy] = leftArray[indexLeft];
    indexLeft += 1;
    indexArrayCopy += 1;
  }

  while (indexRight < rightArray.length) {
    arrayCopy[indexArrayCopy] = rightArray[indexRight];
    indexRight += 1;
    indexArrayCopy += 1;
  }
}
function splitArrays(array) {
  if (array.length > 1) {
    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    splitArrays(leftArray);
    splitArrays(rightArray);

    mergeSort(array, leftArray, rightArray);
  }
}
function sortByAsc(array) {
  splitArrays(array);
}
/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
