const toggleBtn = document.querySelector('.nav__button')
const navMenu = document.querySelector('.nav')

toggleBtn.addEventListener('click', ()=> {
  navMenu.classList.toggle('active')
})