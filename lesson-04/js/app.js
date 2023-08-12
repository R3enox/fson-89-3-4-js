// ## 1. Вам надано кілька масивів з різними фруктами (назва у масиві вказує на те, куди потрібно помістити елементи відносно ul). `Створи` html-елемент списку і `додай` його у розмітку. Попрактикуйся з методами `append`, `prepend`, `after`, `before` заповнивши ними список елементами з масивів. Для зручності створи допоміжну функцію `elementsOfIngridients`, яка повертатиме масив елементів (масив з лішками).

const appendFruitList = ["apple🍎", "banana🍌"];
const prependFruitList = ["grapes🍇", "orange🍊"];
const beforeFruitList = ["strawberry🍓", "cherry🍒"];
const afterFruitList = ["peach🍑", "kiwi🥝"];

const listEl = document.createElement("ul");

title.after(listEl);

const elementsOfIngridients = (arr) => {
    return arr.map(item => {
        const liEl = document.createElement("li");
        liEl.textContent = item;
        return liEl;
    });
};
 
listEl.append(...elementsOfIngridients(appendFruitList));

listEl.prepend(...elementsOfIngridients(prependFruitList));

listEl.before(...elementsOfIngridients(beforeFruitList));

listEl.after(...elementsOfIngridients(afterFruitList));