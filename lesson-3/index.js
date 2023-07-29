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

//TODO:=========task-04=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map(numb => Math.pow(numb, 2));

// console.log(newArr);
// console.log('arr',arr);

//TODO:=========task-05=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//     { id: 1, values: [1, 2, 3] },
//     { id: 2, values: [4, 5, 6] },
//     { id: 3, values: [7, 8, 9] }];

// const newData = data.flatMap(({ values }) => values );
// console.log(newData);
// console.log(data);

//TODO:=========task-06=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people =
//     [{ name: "John", age: 27 },
//     { name: "Jane", age: 31 },
//     { name: "Bob", age: 19 }];
    
// const checkAge = people.some(({ age }) => age < 20);
// console.log(checkAge);


//TODO:=========task-07=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const evenNumbers = arr => arr.every(numb => numb % 2 === 0);
// console.log(evenNumbers(numbers));


//TODO:=========task-08=================
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const numb = numbers.find(numb => numb % 2 !== 0);

// console.log(numb)
// console.log(numbers);


//TODO:=========task-09=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbers = [4, 2, 5, 1, 3];
// const words = ['g', 's', 'a', 'j', 'i', 'c'];

// const sortNumbers = [...numbers].sort((a, b) => a - b);
// const sortNumbersB = [...numbers].sort((a, b) => b - a);
// console.log(sortNumbers);
// console.log(sortNumbersB);

// const sortWords = [...words].sort((a, b) => a.localeCompare(b));
// const sortWordsB = [...words].sort((a, b) => b.localeCompare(a));
// console.log(sortWords);
// console.log(sortWordsB);

//TODO:=========task-10=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users =
//     [{ name: "John", age: 27 },
//     { name: "Jane", age: 31},
//     { name: "Bob", age: 19}];

// const newUsers = users.filter(({ age }) => age > 20);
// console.log(newUsers);

//TODO:=========task-11=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.reduce((acc, numb, idx, arr) => acc += numb, 0)
// console.log(newArr);


//this

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     email: 'johndoe@example.com',
  
//     info() {
//       console.log(this);
//     },
  
//    };

//TODO:=========task-12=================
//  Викликати метод user.info() таким чином, щоб він вивів результатом  ({name: 'Bob', lactName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

// const obj = {
//     name: 'Bob',
//     lastName: 'Lasso',
//     age: 50,
//     email: 'BodLasso@gmail.com',
//   };
// console.log(user.info.call(obj));


//TODO:=========task-13=================
// Виправте помилки, щоб код працював

// const product = {
//     price: 5000,
  
//     showPrice() {
//       console.log(this.price);
//     },
//   };
  
//   function callAction(callback) {
//     callback();
//   }
  
//   callAction(product.showPrice.bind(product));