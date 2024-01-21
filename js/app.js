const navBtn = document.querySelector('#nav-btn')
const navItems = document.querySelector('#nav')

navBtn.addEventListener('click', function () {
  navItems.classList.toggle('nav-mobile--active')
  this.classList.toggle('nav-btn--active')
})