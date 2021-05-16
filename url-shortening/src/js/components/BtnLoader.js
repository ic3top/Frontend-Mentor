import { UI } from './UI';

export class BtnLoader {
  static show() {
    UI.urlInput.disabled = true;
    UI.submitBtn.disabled = true;
    UI.submitBtn.classList.add('btn-disabled');
    UI.btnLoader.classList.remove('lds-hidden');
  }

  static hide() {
    UI.urlInput.disabled = false;
    UI.submitBtn.disabled = false;
    UI.submitBtn.classList.remove('btn-disabled');
    UI.btnLoader.classList.add('lds-hidden');
  }
}