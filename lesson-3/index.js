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

const performOperation = (a, b, callback) => callback(a * b)
const isMath = (s) => (s % 2 === 0) ? Math.pow(s, 2) : Math.sqrt(s)


console.log(performOperation(5,6,isMath));

