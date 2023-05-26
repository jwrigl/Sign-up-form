function listeners() {
    let passwordInputs = document.querySelectorAll(".passwordInput")
    let confirmPasswordInput = document.querySelector("#passwordConfirmation")
    let confirmPasswordMsg = document.querySelector("#confirmPasswordMsg")

    function changeInputColours(colour) {
        passwordInputs[0].style.borderBottom = `2px solid ${colour}`;
        passwordInputs[1].style.borderBottom = `2px solid ${colour}`;
    }

    passwordInputs.forEach(pwdInput => {
        pwdInput.addEventListener("keyup" , () => {
            if (passwordInputs[0].value !== passwordInputs[1].value) {
                confirmPasswordMsg.innerText = "Passwords do not match."
                changeInputColours("red")
            }
            else {
                confirmPasswordMsg.innerText = "Passwords match."
                changeInputColours("#e25482")
            }
        })
    })
}

listeners()

