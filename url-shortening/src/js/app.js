import '../scss/style.scss';
import './components/hamburger';
import { UI } from './components/UI';
import { BtnLoader } from './components/BtnLoader';
import { LinkUI } from './components/LinkUI';
import { showDeleteBtn } from './components/BtnDelete';

import { Validation } from './services/Validation';
import { Api } from './services/Api';

if (localStorage['items']) {
  showDeleteBtn();
  JSON.parse(localStorage['items']).forEach((item) => {
    const newIitem = LinkUI.renderItem(item.oldUrl, item.newUrl);
    UI.itemContainer.insertAdjacentElement('afterbegin', newIitem);
  });
}

UI.mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputData = UI.urlInput.value;
  if (inputData.trim()) {
    BtnLoader.show();
    Api.short(inputData)
      .then(data => {
        if (data.ok) {
          LinkUI.appendItem(data.result.original_link, data.result.full_short_link);
          showDeleteBtn();
        } else {
          throw Error(data.error);
        }
      })
      .catch((err) => {
        Validation.setError(err.message);
      })
      .then(() => {
        UI.urlInput.value = '';
        BtnLoader.hide();
      })
  }
});

UI.urlInput.addEventListener('input', Validation.setValid);