const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirm");
const submitButton = document.querySelector("button");

const passwordParagraph = document.querySelector(".password-paragraph");
const noMatch = document.createElement("div");
noMatch.textContent = "* Passwords do not match"
noMatch.style.color = "rgb(223, 43, 43)";

submitButton.addEventListener("click", (e) => {
    passwordString = password.value;
    confirmedPasswordString = confirmPassword.value

    if (passwordString !== confirmedPasswordString) {
        password.classList.add("error");
        confirmPassword.classList.add("error");
        passwordParagraph.append(noMatch);

    } else {
        
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        if (passwordParagraph.contains(noMatch)) {
            passwordParagraph.removeChild(noMatch)
        }
    }
});