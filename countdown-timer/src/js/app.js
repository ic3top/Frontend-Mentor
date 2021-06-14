import '../scss/style.scss';
import { FlipDown } from './flipdown/flipdown';


document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  let twoDaysFromNow = new Date().getTime() / 1000 + 86400 * 2 + 1;

  // Set up FlipDown
  new FlipDown(twoDaysFromNow, 'timer')

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  // setInterval(() => {
  //   let body = document.body;
  //   body.classList.toggle('light-theme');
  //   body.querySelector('#timer').classList.toggle('flipdown__theme-dark');
  //   body.querySelector('#timer').classList.toggle('flipdown__theme-light');
  // }, 20000);
});
