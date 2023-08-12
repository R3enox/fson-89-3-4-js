// ## 1. Вам надано кілька масивів з різними фруктами (назва у масиві вказує на те, куди потрібно помістити елементи відносно ul). `Створи` html-елемент списку і `додай` його у розмітку. Попрактикуйся з методами `append`, `prepend`, `after`, `before` заповнивши ними список елементами з масивів. Для зручності створи допоміжну функцію `elementsOfIngridients`, яка повертатиме масив елементів (масив з лішками).

const appendFruitList = ["apple🍎", "banana🍌"];
const prependFruitList = ["grapes🍇", "orange🍊"];
const beforeFruitList = ["strawberry🍓", "cherry🍒"];
const afterFruitList = ["peach🍑", "kiwi🥝"];

const listEl = document.createElement("ul");

title.after(listEl);

const elementsOfIngridients = (arr) => {
  return arr.map((item) => {
    const liEl = document.createElement("li");
    liEl.textContent = item;
    return liEl;
  });
};

listEl.append(...elementsOfIngridients(appendFruitList));

listEl.prepend(...elementsOfIngridients(prependFruitList));

listEl.before(...elementsOfIngridients(beforeFruitList));

listEl.after(...elementsOfIngridients(afterFruitList));

// ## 2. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;

const parEl = document.createElement("p");

const words = text.split(/\s+/);
for (const word of words) {
  if (word.length > 8) {
    const spanEl = document.createElement("span");
    spanEl.style.backgroundColor = "yellow";
    spanEl.textContent = word + " ";
    parEl.appendChild(spanEl);
  } else {
    parEl.innerHTML += word + " ";
  }
}
console.log(words);

listEl.after(parEl);
