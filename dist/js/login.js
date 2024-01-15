// login modal

let loginIcon=Array.from(document.getElementsByClassName('loginIcon'));
let loginModal=document.getElementById('loginModal');
let closeLoginModal=document.getElementById('closeLoginModal');
let overlay=document.getElementById('overlay');

loginIcon.forEach((item)=>{
    item.addEventListener('click',function () {
        loginModal.classList.add('active');
        overlay.classList.add('active');
    })
})
closeLoginModal.addEventListener('click',function () {
    loginModal.classList.remove('active');
    overlay.classList.remove('active');
})
overlay.addEventListener('click',function () {
    loginModal.classList.remove('active');
    overlay.classList.remove('active');
})