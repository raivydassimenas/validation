import "./style.css";

const submit = document.querySelector("#submit");

submit.addEventListener("click", e => {
    const email = document.querySelector("#email");
    const country = document.querySelector("#country");
    const zip = document.querySelector("#zip");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");

    if (email.checkValidity() && country.checkValidity() && zip.checkValidity() && password.checkValidity() && confirmPassword.checkValidity()) {
        if (password.value != confirmPassword.value) {
            alert("Password confirmation does not match");
        }
    } else {
        let errorMsg = "";
        if (!email.checkValidity()) {
            errorMsg += "Email: " + email.validationMessage + "\n";
        }
        if (!country.checkValidity()) {
            errorMsg += "Country: " + country.validationMessage + "\n";
        }
        if (!zip.checkValidity()) {
            errorMsg += "Zip: " + zip.validationMessage + "\n";
        }
        if (!password.checkValidity()) {
            errorMsg += "Password: " + password.validationMessage + "\n";
        }
        if (!confirmPassword.checkValidity()) {
            errorMsg += "Confirm password: " + confirmPassword.validationMessage + "\n";
        }
        alert(errorMsg);
    }
});