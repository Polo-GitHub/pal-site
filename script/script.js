// Changing of the webpages
const firstLoginPage = document.querySelector(".first__container-login");
const secondtLoginPage = document.querySelector(".second__container-login");
const loginNext = document.querySelector(".site__next-btn");
const prevLogin = document.querySelector(".prev__btn");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password__input")
const previousText = document.querySelector(".previous__text");
const emailErrorMssg = document.querySelector(".usererror__msg");
const passwordErrorMssg = document.querySelector(".usererror___msg");

const secondForm = document.querySelector(".second__form");




// Show & Hide  password
const getPassword = document.querySelector("#password");
const showAndHidePassword = document.querySelector(".show-btn");

showAndHidePassword.addEventListener("click", () => {
    if (getPassword.type === "text") {
        getPassword.type = "password";
        showAndHidePassword.innerHTML = "Show"
    }
    else {
        getPassword.type = "text"
        showAndHidePassword.innerHTML = "Hide"
    }

});
// function userError() {
//     const email = emailInput.value.trim()
//     if (email === "") {
//         userErrorMssg.innerHTML = `
//         <i class="fa-solid fa-triangle-exclamation"></i>Required`
//         return
//     }  
// }
loginNext.onclick = function () {
    const email = emailInput.value.trim()
    if (email === "") {
        emailErrorMssg.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>Required
        `
        return
    }
    secondtLoginPage.classList.add("first__active");
    firstLoginPage.classList.remove("first__active");
    previousText.innerHTML = emailInput.value
}
prevLogin.onclick = function () {
    firstLoginPage.classList.add("first__active");
    secondtLoginPage.classList.remove("first__active")

}

secondForm.onsubmit = function (e){
    e.preventDefault()

     const password = passwordInput.value.trim()
     if(password === ""){
        passwordErrorMssg.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>Required
        `
        return
     }
}

emailInput.oninput = function (){
    emailErrorMssg.innerHTML = ""
}
passwordInput.oninput = function (){
    passwordErrorMssg.innerHTML = ""
}

