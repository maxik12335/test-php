// ПЕРЕПИСАТЬ ПРОСТЫМ СПОСОБОМ

const inputLogin = document.querySelector("input[name='login']");
const inputPass = document.querySelector("input[name='pass']");

let validateLogin = {
  "min": {
    "status": false,
    "errorMessage": {
      "status": false,
      "text": "Минимум 8 символов",
    }
  },
  "lang": {
    "status": false,
    "errorMessage":  {
      "status": false,
      "text": "Используйте только Английские буквы",
    }
  }
}  

let validatePass = {
  "min": {
    "status": false,
    "errorMessage": {
      "status": false,
      "text": "Минимум 8 символов",
    }
  },
  "capital": {
    "status": false,
    "errorMessage": {
      "status": false,
      "text": "Должна быть хотя бы 1 заглавная буква  'a' -> 'A'",
    }
  },
  "sign": {
    "status": false,
    "errorMessage": {
      "status": false,
      "text": "Должен быть хотя бы 1 знак: ,  .  !  ?  @  #  %  &",
    }
  },
  "number": {
    "status": false,
    "errorMessage": {
      "status": false,
      "text": "Должно быть хотя бы 1 число: 0 1 2 3 ...",
    }
  },
  "lang": {
    "status": false,
    "errorMessage": {
      "status": false,
      "text": "Используйте только Английские буквы",
    }
  },
}  

inputLogin.addEventListener("input", (e) => {
  checkValidate(inputLogin)
  setErrorMessage(inputLogin)
});

inputPass.addEventListener("input", (e) => {
  checkValidate(inputPass)
  setErrorMessage(inputPass)
});

function checkValidate(inputName) {

  validateSpace(inputName)

  validateLogin.min.status = methodsCheckValid.min(inputName)
  validateLogin.lang.status = methodsCheckValid.lang(inputName)

  // console.log(validateLogin)

  methodsCheckValid.finalLogin(validateLogin, inputName)

  if(inputName.name === "pass") {

    validatePass.min.status = methodsCheckValid.min(inputName)
    validatePass.capital.status = methodsCheckValid.capital(inputName)
    validatePass.sign.status = methodsCheckValid.sign(inputName)
    validatePass.number.status = methodsCheckValid.number(inputName)
    validatePass.lang.status = methodsCheckValid.lang(inputName)

    // console.log(validatePass)

    methodsCheckValid.finalPass(validatePass, inputName)
  }
  
}

const methodsCheckValid = {
  finalLogin: (validate, inputName) => {
    if(!validate.min.status || !validate.lang.status) {
      inputName.classList.add("input-novalid")
    } 

    if(validate.min.status && validate.lang.status) {
      inputName.classList.remove("input-novalid")
    } 
  },

  finalPass: (validate, inputName) => {
    if(!validate.min.status || !validate.capital.status || !validate.sign.status || !validate.number.status || !validate.lang.status) {
      inputName.classList.add("input-novalid")
    } 

    if(validate.min.status && validate.capital.status && validate.sign.status && validate.number.status && validate.lang.status) {
      inputName.classList.remove("input-novalid")
    } 
  },

  min: (inputName) => {
    if(inputName.value.length < 8) {
      return false
    }
  
    if(inputName.value.length >= 8) {
      return true
    }
  },

  capital: (inputName) => {
    if(!/[A-Z]|[А-Я]/.test(inputName.value)) {
      return false
    }
  
    if(/[A-Z]|[А-Я]/.test(inputName.value)) {
      return true
    }
  },

  sign: (inputName) => {
    if(!/[,  .  !  ?  @  #  %  &]/.test(inputName.value)) {
      return false
    }
  
    if(/[,  .  !  ?  @  #  %  &]/.test(inputName.value)) {
      return true
    }
  },

  number: (inputName) => {
    if(!/[0-9]/.test(inputName.value)) {
      return false
    }
  
    if(/[0-9]/.test(inputName.value)) {
      return true
    }
  },

  lang: (inputName) => {
    if(/[а-я]|[А-Я]/.test(inputName.value)) {
      return false
    }
  
    if(!/[а-я]|[А-Я]/.test(inputName.value)) {
      return true
    }
  }
}

function validateSpace(inputName) {
  if (inputName.value.at(-1) === " ") {
    inputName.value = inputName.value.slice(0, -1);
  }
}

function setErrorMessage(inputName) {
  createList(inputName)
  createMessage(inputName)

  console.log(inputName.name)
  if(inputName.name === "login" && (validateLogin.min.status && validateLogin.lang.status)) {
    inputLogin.nextElementSibling.remove()
  }
  
  if(inputName.name === "pass" && 
    (
      validatePass.min.status &&
      validatePass.lang.status && 
      validatePass.capital.status && 
      validatePass.number.status && 
      validatePass.sign.status
    )
  ) {
    inputPass.nextElementSibling.remove()
  }

}

function createList(inputName) {
  if(inputName.nextElementSibling === null) {
    const ulList = document.createElement("ul")
    ulList.classList.add("error__list")
    inputName.after(ulList)
  }
}

function createMessage(inputName) {
  if(inputName.name === "login") {
    
    // min
    if(!validateLogin.min.status && !validateLogin.min.errorMessage.status)  {      
      validateLogin.min.errorMessage.status = true
      insertMessage(inputName, "error-message__min", validateLogin.min.errorMessage.text)
    }

    if(validateLogin.min.status && validateLogin.min.errorMessage.status)  {
      validateLogin.min.errorMessage.status = false      
      inputLogin.nextElementSibling.querySelector(".error-message__min").remove()
    }

    // lang
    if(!validateLogin.lang.status && !validateLogin.lang.errorMessage.status)  {      
      validateLogin.lang.errorMessage.status = true
      insertMessage(inputName, "error-message__lang", validateLogin.lang.errorMessage.text)
    }

    if(validateLogin.lang.status && validateLogin.lang.errorMessage.status)  {
      validateLogin.lang.errorMessage.status = false      
      inputLogin.nextElementSibling.querySelector(".error-message__lang").remove()
    }
  }

  if(inputName.name === "pass") {
    // min
    if(!validatePass.min.status && !validatePass.min.errorMessage.status)  {      
      validatePass.min.errorMessage.status = true
      insertMessage(inputName, "error-message__min", validatePass.min.errorMessage.text)
    }

    if(validatePass.min.status && validatePass.min.errorMessage.status)  {
      validatePass.min.errorMessage.status = false      
      inputPass.nextElementSibling.querySelector(".error-message__min").remove()
    }

    // capital
    if(!validatePass.capital.status && !validatePass.capital.errorMessage.status)  {      
      validatePass.capital.errorMessage.status = true
      insertMessage(inputName, "error-message__capital", validatePass.capital.errorMessage.text)
    }

    if(validatePass.capital.status && validatePass.capital.errorMessage.status)  {
      validatePass.capital.errorMessage.status = false      
      inputPass.nextElementSibling.querySelector(".error-message__capital").remove()
    }

    // sign
    if(!validatePass.sign.status && !validatePass.sign.errorMessage.status)  {      
      validatePass.sign.errorMessage.status = true
      insertMessage(inputName, "error-message__sign", validatePass.sign.errorMessage.text)
    }

    if(validatePass.sign.status && validatePass.sign.errorMessage.status)  {
      validatePass.sign.errorMessage.status = false      
      inputPass.nextElementSibling.querySelector(".error-message__sign").remove()
    }

    // number
    if(!validatePass.number.status && !validatePass.number.errorMessage.status)  {      
      validatePass.number.errorMessage.status = true
      insertMessage(inputName, "error-message__number", validatePass.number.errorMessage.text)
    }

    if(validatePass.number.status && validatePass.number.errorMessage.status)  {
      validatePass.number.errorMessage.status = false      
      inputPass.nextElementSibling.querySelector(".error-message__number").remove()
    }

    // lang
    if(!validatePass.lang.status && !validatePass.lang.errorMessage.status)  {      
      validatePass.lang.errorMessage.status = true
      insertMessage(inputName, "error-message__lang", validatePass.lang.errorMessage.text)
    }

    if(validatePass.lang.status && validatePass.lang.errorMessage.status)  {
      validatePass.lang.errorMessage.status = false      
      inputPass.nextElementSibling.querySelector(".error-message__lang").remove()
    }    
  }
}

function insertMessage(inputName, uniqueClass, text) {
  const message = document.createElement("li")
  message.classList.add("error-message")
  message.classList.add(uniqueClass)
  message.textContent = text
  inputName.nextElementSibling.append(message)
}
