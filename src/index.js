import home from './home.js';
import about from './about.js';
import contact from './contact.js';

const rootEl = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const aboutBtn = document.querySelector('#about');
const contactBtn = document.querySelector('#contact');

function clearContent(root) {
  rootEl.innerHTML = '';
}

function switchContent(contentRenderer) {
  clearContent(rootEl);
  contentRenderer(rootEl);
}

homeBtn.addEventListener('click', () => switchContent(home));
aboutBtn.addEventListener('click', () => switchContent(about));
contactBtn.addEventListener('click', () => switchContent(contact));

homeBtn.click();
