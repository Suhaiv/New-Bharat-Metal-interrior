const bar = document.getElementById('bar');
const closse = document.getElementById('close');
const nav = document.getElementById('nav-bar');

if (bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}
if (closse) {
    closse.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}