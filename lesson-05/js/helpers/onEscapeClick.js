import { modal } from '../modal/modal.js';

export function onEscapeClick(event) {
    if (event.code !== 'Escape') return;
    modal.close();
  }