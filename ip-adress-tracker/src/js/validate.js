import { UI } from './UI';

export function setError(message) {
  UI.input.classList.add('invalid');
  UI.label.style.display = 'block';
  UI.label.textContent = `${message} (try changing your query)`;
}

export function removeError() {
  UI.input.classList.remove('invalid');
  UI.label.style.display = 'none';
}