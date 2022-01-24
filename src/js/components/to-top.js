const toTop = document.querySelector('.to-top');
let heroHeight;

if (document.querySelector('.invest')) {
  heroHeight = document.querySelector('.invest').offsetHeight;
}

const isVisibleToTop = (y = 0) => {
  if (y >= heroHeight) {
    toTop.classList.add('to-top--active');
  } else {
    toTop.classList.remove('to-top--active');
  }
}

isVisibleToTop(window.scrollY);

window.addEventListener('scroll', () => {
  let y = window.scrollY;
  isVisibleToTop(y);
});

toTop.addEventListener('click', function (e) {
  e.preventDefault();
  let href = this.getAttribute('href').substring(1);
  const scrollTarget = document.getElementById(href);
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition;
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
});
