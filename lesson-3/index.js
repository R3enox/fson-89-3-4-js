//TODO:============task-01=========================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName = callback => {
//     const nameUs = prompt("Enter your name")

//     if (!nameUs.trim()) {
//        return alert("Pool is not empty")
//     }
//   return callback(nameUs)
// }

// const greet = name => `Hello ${name}`

// console.log(letMeSeeYourName(greet));

//TODO:============task-02=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// const performOperation = (a, b, callback) => callback(a * b)
// const isMath = (s) => (s % 2 === 0) ? Math.pow(s, 2) : Math.sqrt(s)

// console.log(performOperation(5,6,isMath));

//TODO:============task-03=========================

// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [1, 2, 5, 7, 9, 20];
// const words = ["apple", "banana", "orange", "pear"];

// function findElement(arr, callback) {
//   let result = null;
//   arr.forEach((el) => {
//     if (callback(el) && result === null) {
//       result = el;
//     }
//   });
//   return result;
// }

// function isEven(number) {
//   return number % 2 === 0;
// }

// function startWithO(word) {
//   return word.toLowerCase().startsWith("o");
// }

// console.log(findElement(numbers, isEven));
// console.log(findElement(words, startWithO));
