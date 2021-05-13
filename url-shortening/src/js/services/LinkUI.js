import { UI } from './UI';

export class LinkUI {
  static renderItem(oldUrl, newUrl) {
    const itemEl = document.createElement('div');
    itemEl.classList.add('form-item');
  
    const btn = document.createElement('button');
    btn.textContent = 'Copy';
    btn.classList.add('form-item-button', 'button');
    btn.addEventListener('click', LinkUI.copyLink);
  
    const leftPart = document.createElement('div');
    leftPart.classList.add('form-item-left');
    leftPart.innerHTML = `<p>${oldUrl}</p>`;
  
    const rightPart = document.createElement('div');
    rightPart.classList.add('form-item-right');
    rightPart.innerHTML = `<a href="${newUrl}">${newUrl}</a>`;
    rightPart.insertAdjacentElement('beforeend', btn);
  
    itemEl.append(leftPart, rightPart);
    return itemEl;
  }
  
  static copyLink() {
    const link = this.previousElementSibling.textContent;
    navigator.permissions.query({name: 'clipboard-write'}).then(result => {
      if (result.state === 'granted' || result.state === 'prompt') {
        LinkUI.updateClipboard(link, this);
      }
    });
  }
  
  static updateClipboard(newClip, btn) {
    navigator.clipboard.writeText(newClip).then(function() {
      [...document.querySelectorAll('.button-copied')].forEach((btn) => {
        btn.classList.remove('button-copied');
        btn.textContent = 'Copy!';
      })
      btn.classList.add('button-copied');
      btn.textContent = 'Copied!';
    });
  }
  
  static appendItem(oldUrl, newUrl) {
    const itemHTML = LinkUI.renderItem(oldUrl, newUrl);
    UI.itemContainer.insertAdjacentElement('beforeend', itemHTML);
    localStorage['items'] = localStorage['items'] ? 
      JSON.stringify([ ...JSON.parse(localStorage['items']), { newUrl, oldUrl }]) :
      JSON.stringify([{ oldUrl, newUrl }]);
  }
}

