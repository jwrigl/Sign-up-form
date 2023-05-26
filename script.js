function listeners() {
    let passwordInput = document.querySelector("#password")
    let confirmPasswordInput = document.querySelector("#passwordConfirmation")
    let confirmPasswordMsg = document.querySelector("#confirmPasswordMsg")

    ConfirmPasswordInput.addEventListener("keyup" , (e) => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordMsg.innerText = "Passwords do not match."
        }
    })
}

listeners()