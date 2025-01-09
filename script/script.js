// Changing of the webpages
const firstLoginPage = document.querySelector(".first__container-login");
const secondtLoginPage = document.querySelector(".second__container-login");
const loginNext = document.querySelector(".site__next-btn");
const prevLogin = document.querySelector(".prev__btn");
const emailInput = document.querySelector(".email-input");
const previousText = document.querySelector(".previous__text");

loginNext.onclick = function(){
    secondtLoginPage.classList.add("first__active");
    firstLoginPage.classList.remove("first__active");
    previousText.innerHTML = emailInput.value
}
prevLogin.onclick = function(){
    firstLoginPage.classList.add("first__active");
    secondtLoginPage.classList.remove("first__active")

}

// Show & Hide  password
const getPassword = document.querySelector("#password");
const showAndHidePassword = document.querySelector(".show-btn");

showAndHidePassword.addEventListener("click", ()=>{
    if(getPassword.type === "text"){
        getPassword.type = "password";
        showAndHidePassword.innerHTML = "Show"
    }
    else{
        getPassword.type = "text"
        showAndHidePassword.innerHTML = "Hide"
    }

});
