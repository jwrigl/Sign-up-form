function listeners() {
    let passwordInput = document.querySelector("#password")
    let confirmPasswordInput = document.querySelector("#passwordConfirmation")
    let confirmPasswordMsg = document.querySelector("#confirmPasswordMsg")

    confirmPasswordInput.addEventListener("keyup" , () => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordMsg.innerText = "Passwords do not match."
        }
        else {
            confirmPasswordMsg.innerText = "Passwords match."
        }
    })
}

listeners()