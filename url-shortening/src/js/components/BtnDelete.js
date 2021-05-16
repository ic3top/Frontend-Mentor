import { UI } from './UI';

export function showDeleteBtn() {
  UI.deleteBtn.classList.remove('hidden');
}

function hideDeleteBtn() {
  UI.deleteBtn.classList.add('hidden');
}

function deleteLinks() {
  hideDeleteBtn();
  localStorage.removeItem('items');
  UI.itemContainer.innerHTML = '';
}

UI.deleteBtn.addEventListener('click', deleteLinks);