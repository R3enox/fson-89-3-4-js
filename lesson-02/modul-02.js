

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
const numbers = [8, 5, 35, 56, 1, 24, 7, 80, 3, -3];

function findSmallerNumber(numbers) {
    if (!Array.isArray(numbers)) { 
        throw new Error("Arguments mast be an array")
    }
    let loverNumber = numbers[0];
    let newArray = [];
        for (const number of numbers) {
            if (number < loverNumber) {
                loverNumber = number;
            }
    }
    //  console.log(loverNumber);
    newArray.push(loverNumber);
        return newArray;
    }


console.log(findSmallerNumber(numbers));
