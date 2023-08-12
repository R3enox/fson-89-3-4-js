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



// ## 3. Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const BLOCKS = 100

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const divArray = []
const divContainer = document.createElement("div")
divContainer.classList.add("number-container")
for (let index = 0; index < BLOCKS; index += 1) {
  const divEl = document.createElement("div")
  divEl.classList.add('number')
  divEl.textContent = randomNumber()
  if(divEl.textContent % 2 === 0) {
divEl.classList.add('even')
  }
  else {
    divEl.classList.add('odd') 
  }
  divArray.push(divEl)
}
divContainer.append(...divArray)
console.log(divContainer);

const containerElement = document.querySelector('.film-list')
containerElement.before(divContainer)


// 4. Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію `createMarkup()`, яка буде повертати розмітку. Додай розмітку на сторінку задопомогою `insertAdjacentHTML()` і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

// Приклад елементу списку
// <li id="${id}">
//      <img src="${imgUrl}" alt="${title}" />
//      <p>${title}</p>
// </li>

const watchedFilms = ["film_2", "film_4", "film_5"];

const createMarkup = ({id, imgUrl, title}) => {
  let classEl = "";
  
  watchedFilms.includes(id) ? classEl = "watched" : classEl;
    
 return `<li id="${id}">
 <img src="${imgUrl}" alt="${title}" class="${classEl}"/>
 <p>${title}</p>
</li>`
}

const renderFilms = (arr) => {
  const listEl =document.querySelector('.film-list');
const markup = arr.map((film) => createMarkup(film)).join("");
listEl.insertAdjacentHTML("beforeend", markup);



// watchedFilms.forEach(id => {
//   const filmEl = document.querySelector(`#${id}`);
//   if(filmEl){
//     filmEl.style.opacity = 0.5;
//   }
// })
 }
renderFilms(films)
