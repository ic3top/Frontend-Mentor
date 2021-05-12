import { UI } from './UI';

export class Validation {
  static setError(message) {
    UI.urlInput.classList.add('form-input-invalid');
    UI.validationLabel.textContent = message + ' ...';
    UI.validationLabel.classList.remove('form-label-hidden');
  }

  static setValid() {
    UI.urlInput.classList.remove('form-input-invalid');
    UI.validationLabel.classList.add('form-label-hidden');
  }
}