const sideNav = document.querySelector('.sideNav')
const overlay = document.querySelector('.overlay')
const ham = document.querySelector('.ham')
const menuX = document.querySelector('.menuX')
const menuItems = document.querySelectorAll('.menuLink')
const sideNavLink = [...sideNav.getElementsByTagName('a')];

sideNavLink.forEach((link) => {
  link.addEventListener('click', toggleHamburger);
});

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', toggleHamburger)
});

ham.addEventListener('click', toggleHamburger);
menuX.addEventListener('click', toggleHamburger);
overlay.addEventListener('click', toggleHamburger);

function toggleHamburger() {
  overlay.classList.toggle('showOverlay');
  sideNav.classList.toggle('showNav');
  document.body.classList.toggle('unscrollable');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});