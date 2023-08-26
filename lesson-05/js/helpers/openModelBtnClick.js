import { modal } from '../modal/modal.js';
import { crossClose } from './crossClose.js';

export function openModelBtnClick(event) {
  modal.show();
  document.querySelector('.js-modal-close').addEventListener(`click`, crossClose);
}
