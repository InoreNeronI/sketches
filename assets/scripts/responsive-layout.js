const root = document.documentElement;
const storage = window.localStorage;

const icon_screen = document.querySelector('.screen i');
const setScreen = (screen) => {
  if (screen === 'normal') {
    root.classList.remove('fullscreen');
    root.classList.add('normal');
    storage.setItem('screen', 'normal');
    icon_screen.classList.remove('bi-arrows-angle-contract');
    icon_screen.classList.add('bi-arrows-angle-expand');
  } else {
    root.classList.remove('normal');
    root.classList.add('fullscreen');
    storage.setItem('screen', 'fullscreen');
    icon_screen.classList.remove('bi-arrows-angle-expand');
    icon_screen.classList.add('bi-arrows-angle-contract');
  }
};
document.querySelector('.screen').onclick = () => {
  let screens = ['normal', 'fullscreen'];
  screens.splice(screens.indexOf(storage.getItem('screen')), 1);
  setScreen(screens.pop());
};
setScreen(storage.getItem('screen') || 'normal');

const chooser_theme = document.querySelector('.theme');
chooser_theme.value = storage.getItem('theme') || 'high';
chooser_theme.onchange = (e) => {
  storage.setItem('theme', e.target.value);
  let themes = ['fire', 'earth', 'air', 'water', 'high'];
  themes.splice(themes.indexOf(e.target.value), 1);
  themes.forEach((theme) => root.classList.remove(theme));
  root.classList.add(e.target.value);
};
chooser_theme.dispatchEvent(new Event('change'));

const icon_toggle = document.querySelector('.toggle i');
const images = document.querySelectorAll('image, img, svg');
const setToggle = (toggle) => {
  if (toggle === 'inset') {
    root.classList.remove('reverse');
    root.classList.add('inset');
    storage.setItem('toggle', 'inset');
    icon_toggle.classList.remove('bi-toggle2-on');
    icon_toggle.classList.add('bi-toggle2-off');
    images.forEach((el) => (el.style.filter = 'invert(0)'));
  } else {
    if (toggle === 'reverse') {
      images.forEach((el) => (el.style.filter = 'invert(1)'));
    }
    root.classList.remove('inset');
    root.classList.add('reverse');
    storage.setItem('toggle', 'reverse');
    icon_toggle.classList.remove('bi-toggle2-off');
    icon_toggle.classList.add('bi-toggle2-on');
  }
};
document.querySelector('.toggle').onclick = () => {
  let toggles = ['inset', 'reverse'];
  toggles.splice(toggles.indexOf(storage.getItem('toggle')), 1);
  setToggle(toggles.pop());
};
setToggle(storage.getItem('toggle') || 'inset');

document.querySelectorAll('.nav-group-item').forEach((value) => {
  const classList = Array.from(value.classList);
  classList.splice(classList.indexOf('nav-group-item'), 1);
  if (window.location.pathname.indexOf(classList[0] + '/') > 0) {
    value.classList.add('active');
  }
  value.addEventListener('click', (e) => {
    e.target.childNodes.forEach((value) => {
      if (value.tagName === 'A') {
        // @see https://stackoverflow.com/a/1421968
        const evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        value.dispatchEvent(evt);
      }
    });
  });
});
