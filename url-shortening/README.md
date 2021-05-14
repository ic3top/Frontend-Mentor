# Frontend Mentor - Shortly URL shortening API Challenge solution

> This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G).

## Overview

### Features

- View the optimal layout for the site depending on the device's screen size
- Shorten any valid URL
- See a list of shortened links, even after refreshing the browser
- Copy the shortened link to the clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - API return an `error`
  

### Screenshot

![Desktop illustration](./illustrations/desktop-preview.jpg)

### Links

- Solution URL: [here](https://www.frontendmentor.io/solutions/url-shorten-landing-page-made-with-jshtmlcss-Zi1d-nNpf)
- Live Site URL: [DEMO](https://ic3top.github.io/Frontend-Mentor/url-shortening/dist/)

## My process

### Built with

- HTML5
- SCSS
- JS
- Webpack v4

### What I learned

I think the most needed concept in the future that I learned is copying to the clipboard.

```js
function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(function() {
    /* clipboard successfully set */
  }, function() {
    /* clipboard write failed */
  });
}
```

Also, take in mind that for page scripts, the Permissions API's "clipboard-write" permission is needed. Actually, is granted automatically to pages when they are in the active tab.

### Continued development

I definitely have to improve my knowledge in webpack (btw gulp too). It took me so long to set up the project and finally start writing code.

### Useful resources

- [API for shortening links.](https://shrtco.de/)

- [Copy to cplipboard](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) - mdn article that helped me implement copying to the clipboard on click. I'd recommend it to anyone still learning this concept.

### Todos
* ~~Fix local links~~
* Create 'clear all' button
* Fix images
* ~~Complete README~~
* ~~Fix accessibility and HTML validation issues~~