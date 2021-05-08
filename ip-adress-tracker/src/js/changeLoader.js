import { UI } from './UI';
export function changeLoader(state) {
  if (state) {
    UI.loader.style.display = 'flex';
    return;
  }
  UI.loader.style.display = 'none';
}