let label = document.querySelector('.nav__label');
let icons = document.getElementsByTagName('ion-icon');

label.addEventListener('click', function () {
  setTimeout(myFunc, 200);
});

function myFunc() {
  document.querySelector('.btn--animated').classList.toggle('remove');

  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.toggle('remove');
  }
}
