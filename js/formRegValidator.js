const inputLogin = document.querySelector("input[name='login']");
const inputPass = document.querySelector("input[name='pass']");

// min 8
// capital a => A
// sign ! ?
// number 0 1 2 3 4 5

// const reg = [
//   "/[A-Z]|[А-Я]/",
//   "/[,  .  !  ?  @  #  %  &]/",
//   "/[0-9]/"
// ]

inputLogin.addEventListener("input", (e) => {
  createValidateMessage(inputLogin)
});

inputPass.addEventListener("input", (e) => {
  createValidateMessage(inputPass)
});

function createValidateMessage(inputName) {
  validateSpace(inputName)
  validateMin(inputName)

  if(inputName.name === "pass") {
    let validate = {
      "min": false,
      "capital": false,
      "sign": false,
      "number": false,
    }  

    validate.min = validateMin(inputName)
    validate.capital = validateCapital(inputName)
    validate.sign = validateSign(inputName)
    validate.number = validateNumber(inputName)
    // validate.capital = validateCapital(inputName)
    // validate.capital = testV.validateCapital(inputName)
    // validate.sign = testV.validateSign(inputName)
    // validate.number = testV.validateNumber(inputName)

    console.log(validate)

    if(!validate.min || !validate.capital || !validate.sign || !validate.number) {
      inputName.classList.add("input-novalid")
    } 

    if(validate.min && validate.capital && validate.sign && validate.number) {
      inputName.classList.remove("input-novalid")
    } 
  }
  
}

function validateSpace(inputName) {
  if (inputName.value.at(-1) === " ") {
    inputName.value = inputName.value.slice(0, -1);
  }
}

function validateMin(inputName) {
  if(inputName.value.length < 8) {
    inputName.classList.add("input-novalid")
    return false
  }

  if(inputName.value.length >= 8) {
    inputName.classList.remove("input-novalid")
    return true
  }
}

// const testV = {
//   validateCapital: (inputName) => {
//     if(!/[A-Z]|[А-Я]/.test(inputName.value)) {
//       inputName.classList.add("input-novalid")
//       return false
//     }
  
//     if(/[A-Z]|[А-Я]/.test(inputName.value)) {
//       inputName.classList.remove("input-novalid")
//       return true
//     }
//   },

//   validateSign: (inputName) => {
//     if(!/[,  .  !  ?  @  #  %  &]/.test(inputName.value)) {
//       inputName.classList.add("input-novalid")
//       return false
//     }
  
//     if(/[,  .  !  ?  @  #  %  &]/.test(inputName.value)) {
//       inputName.classList.remove("input-novalid")
//       return true
//     }
//   },

//   validateNumber: (inputName) => {
//     if(!/[0-9]/.test(inputName.value)) {
//       inputName.classList.add("input-novalid")
//       return false
//     }
  
//     if(/[0-9]/.test(inputName.value)) {
//       inputName.classList.remove("input-novalid")
//       return true
//     }
//   }

// }

function validateCapital(inputName) {
  if(!/[A-Z]|[А-Я]/.test(inputName.value)) {
    inputName.classList.add("input-novalid")
    return false
  }

  if(/[A-Z]|[А-Я]/.test(inputName.value)) {
    inputName.classList.remove("input-novalid")
    return true
  }
}

function validateSign(inputName) {
  if(!/[,  .  !  ?  @  #  %  &]/.test(inputName.value)) {
    inputName.classList.add("input-novalid")
    return false
  }

  if(/[,  .  !  ?  @  #  %  &]/.test(inputName.value)) {
    inputName.classList.remove("input-novalid")
    return true
  }
}

function validateNumber(inputName) {
  if(!/[0-9]/.test(inputName.value)) {
    inputName.classList.add("input-novalid")
    return false
  }

  if(/[0-9]/.test(inputName.value)) {
    inputName.classList.remove("input-novalid")
    return true
  }
}