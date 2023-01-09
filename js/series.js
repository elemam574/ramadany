let fixedNav = document.querySelector('.head');
window.addEventListener("scroll", () =>  {
    window.scrollY > 100 ? fixedNav.classList.add('active') : fixedNav.classList.remove('active');
});
window.addEventListener("scroll", () => {
    window.scrollY > 100 ? document.getElementById('up').style.opacity = 1 : document.getElementById('up').style.opacity = 0;
});
let barsTwo = document.querySelector('.bars'),
    sideBarTwo = document.querySelector('.head ul');
barsTwo.addEventListener('click', ()=> {
    sideBarTwo.classList.toggle("active")
});