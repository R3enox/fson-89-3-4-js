//! Модуль 7. Заняття 13. Поширення подій.

//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу[index.html] та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом. При повторному кліку по елементу,
 * розкритий текст приховується. Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const listEl = document.querySelector('.js-accordion-list');

function handleBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  event.target.nextElementSibling.classList.toggle('active');
}

listEl.addEventListener('click', handleBtnClick);

//TODO:=========task-02=======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу[index.html] для розробки функціоналу пагінатора.
 * Використовуй поширення подій. Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */

const ulElement = document.querySelector('.js-pagination');

function updateActivePage(event) {
  const currentElement = event.target;

  if (currentElement.nodeName !== 'LI') return;

  const activeElemnt = ulElement.querySelector('.active');

  if (currentElement.dataset.type === 'prev' && activeElemnt.dataset.page !== '1') {
    const prevBtnPage = activeElemnt.dataset.page - 1;
    const prevBtn = ulElement.querySelector(`[data-page='${prevBtnPage}']`);
    activeElemnt.classList.remove('active');
    prevBtn.classList.add('active');
  }

  if (currentElement.dataset.type === 'next') {
    const nextBtnPage = Number(activeElemnt.dataset.page) + 1;
    const nextBtn = ulElement.querySelector(`[data-page='${nextBtnPage}']`);

    if (nextBtn) {
      activeElemnt.classList.remove('active');
      nextBtn.classList.add('active');
    }
  }

  if (
    currentElement.dataset.page === activeElemnt.dataset.page ||
    currentElement.dataset.type !== 'page'
  ) {
    return;
  } else {
    activeElemnt.classList.remove('active');
    currentElement.classList.add('active');
  }
}

ulElement.addEventListener('click', updateActivePage);

//TODO:=========task-03======Modal window===========
/**
  |============================
  | Модальне вікно:
  |  1 - Реалізувати відкриття модального вікна по кліку по кнопці "Відкрити модалку".
  |  2 - Реалізувати закриття модального вікна по кліку на крестик і по "ESC". Не забувай знімати слухача події "keydown" після закриття модального вікна.
  |  Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати. 
  |  - Створи 3 функції onOpenModalBtnElClick, closeModalWindow, onEscClick. Не забувай робити перевірку на цільовий елемент. 
  |  - Відображення модельного вікна реалізуй заа допомогою бібліотеки basicLightbox і його метода "basicLightbox.create".
  |============================
*/

const openModalBtn = document.querySelector(`.js-modal-open`)
openModalBtn.addEventListener(`click`, openModelBtnClick)
const modal = basicLightbox.create(`<div class="modal">
<button type="button" class="close-btn js-modal-close">
  X
</button>

<form class="login-form js-modal__form">
  <label>
    Name
    <input type="text" name="name" placeholder="enter your name" />
  </label>
  <label>
    Email
    <input type="email" name="email" placeholder="enter your email" />
  </label>
  <label>
    Password
    <input
      type="password"
      name="password"
      placeholder="enter your password"
    />
  </label>
  <button class="login-btn" type="submit">
    Login
  </button>
</form>
</div>`,{
  
  onShow:()=>{
    document.body.style.overflow = `hidden`;
    document.addEventListener(`keydown`, onEscapeClick)
    
  },
  onClose:() => {
    document.body.style.overflow = `visible`;
    document.removeEventListener(`keydown`, onEscapeClick)
    document.querySelector(`.js-modal-close`).removeEventListener(`click`, crossClose)
  }
})
  
function crossClose(event){
  modal.close()
}

function openModelBtnClick(event) {
  modal.show()
  document.querySelector('.js-modal-close').addEventListener(`click`, crossClose)
   
}
function onEscapeClick(event) {
  if(event.code !== 'Escape') return;
  modal.close()
}


/**
  |============Розмітка для модального вікна================
  <div class="modal">
  <button type="button" class="close-btn js-modal-close">
    X
  </button>

  <form class="login-form js-modal__form">
    <label>
      Name
      <input type="text" name="name" placeholder="enter your name" />
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="enter your email" />
    </label>
    <label>
      Password
      <input
        type="password"
        name="password"
        placeholder="enter your password"
      />
    </label>
    <button class="login-btn" type="submit">
      Login
    </button>
  </form>
</div>
  |============================
*/

/**
  |============================
  | Робота з формою:
  | 1 - Реалізуй відправку данних через подію "submit" на формі
  | 2 - Зроби перевірку на заповнення інпутів "email" і "password". Вони не повинні бути пустими. Поле "name", може бути пустим для приватності користувача 
  | виводь про це в повідемленні за допомогою метода "alert" - "email or password is empty"
  | 3 - При відправки форми в консоль виведи обьект з данними користувача. Реалізуй перевірку, якщо користувач не ввів імʼя, записуй в обьект рядок "Anonimus"
  |
  | Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  |  - Повісь слухача події на форму
  |  - Пропиши колбєк функцію onSubmit. Не забувай про відміну поведінки по змовчуванню. Значення інпутів знайди за допомогою currentTarget і його elements.
  |  - Після отправки почисти форму і реалізуй автоматичне закриття модального вікна
  |============================
*/

//! Модуль 8. Заняття 16. Local storage
