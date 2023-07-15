//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [8, 5, 35, 56, 1, 24, 7, 80, 3, -3];

// function findSmallerNumber(numbers) {
//     if (!Array.isArray(numbers)) {
//         throw new Error("Arguments mast be an array")
//     }
//     let loverNumber = numbers[0];
//     let newArray = [];
//         for (const number of numbers) {
//             if (number < loverNumber) {
//                 loverNumber = number;
//             }
//     }
//     //  console.log(loverNumber);
//     newArray.push(loverNumber);
//         return newArray;
//     }

// console.log(findSmallerNumber(numbers));

//TODO:=========task-2=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   //   const args = arguments;
//   // console.log(args);
//   let total = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     }
//     total += arg;
//     count += 1;
//   }
//   return total / count;
// }

// console.log(caclculateAverage(10, 10, 20, 200, "hello"));

//TODO:=============task-3=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumArr(arr) {
//     const newArr = [];
//     for (let i = 0; i < arr.length - 1; i += 1) {
//         newArr.push(arr[i] + arr[i + 1]);
//     }
//     return newArr
// }
// console.log(sumArr(someArr));
