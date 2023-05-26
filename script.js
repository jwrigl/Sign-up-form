function listeners() {
    let passwordInput = document.querySelector("#password")
    let confirmPasswordInput = document.querySelector("#passwordConfirmation")
    let confirmPasswordMsg = document.querySelector("#confirmPasswordMsg")

    function changeInputColours(colour) {
        passwordInput.style.borderBottom = `2px solid ${colour}`;
        confirmPasswordInput.style.borderBottom = `2px solid ${colour}`;
    }

    confirmPasswordInput.addEventListener("keyup" , () => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordMsg.innerText = "Passwords do not match."
            changeInputColours("red")
        }
        else {
            confirmPasswordMsg.innerText = "Passwords match."
            changeInputColours("#e25482")
        }
    })

    passwordInput.addEventListener("keyup" , () => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordMsg.innerText = "Passwords do not match."
            changeInputColours("red")
        }
        else {
            confirmPasswordMsg.innerText = "Passwords match."
            changeInputColours("#e25482")
        }
    })
}

listeners()

