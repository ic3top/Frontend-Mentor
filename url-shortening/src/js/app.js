import '../scss/style.scss';
import '../images/illustration-working.png'
import '../images/bg-shorten-desktop.png';
import './services/hamburger';
import { Api } from './services/Api';
import { UI } from './services/UI';
import { BtnLoader } from './services/BtnLoader';
import { LinkUI } from './services/LinkUI';
import { Validation } from './services/Validation';

if (localStorage['items']) {
  JSON.parse(localStorage['items']).forEach((item) => {
    const newIitem = LinkUI.renderItem(item.oldUrl, item.newUrl);
    UI.itemContainer.insertAdjacentElement('beforeend', newIitem);
  });
}

UI.mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputData = UI.urlInput.value;
  if (inputData.trim()) {
    BtnLoader.setLoader();
    Api.short(inputData)
      .then(data => {
        if (data.ok) {
          LinkUI.appendItem(data.result.original_link, data.result.full_short_link);
        } else {
          throw Error(data.error);
        }
      })
      .catch((err) => {
        Validation.setError(err.message);
      })
      .then(() => {
        UI.urlInput.value = '';
        BtnLoader.remLoader();
      })
  }
});

UI.urlInput.addEventListener('input', Validation.setValid);