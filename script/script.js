const firstLoginPage = document.querySelector(".first__container-login");
const secondtLoginPage = document.querySelector(".second__container-login");
const loginNext = document.querySelector(".site__next-btn");
const prevLogin = document.querySelector(".prev__btn");

loginNext.onclick = function(){
    secondtLoginPage.classList.add("first__active");
    firstLoginPage.classList.remove("first__active");
}
prevLogin.onclick = function(){
    firstLoginPage.classList.add("first__active");
    secondtLoginPage.classList.remove("first__active")

}