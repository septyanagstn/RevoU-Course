// ---------------------------- VALIDATION FORM ---------------------------------- //
const fnameInput = document.getElementById("name");
const femailAddressInput = document.getElementById("email");
const fphoneNumberInput = document.getElementById("phone");
const fmessageInput = document.getElementById("message");
const submitButtonInput = document.getElementById("submitButton");

submitButtonInput.addEventListener("click", function (event) {
    event.preventDefault();
    const fnameValue = fnameInput.value;
    const femailAddressValue = femailAddressInput.value;
    const fphoneNumbervalue = fphoneNumberInput.value;
    const fmessageValue = fmessageInput.value;
    if (formValidation(fnameValue, femailAddressValue, fphoneNumbervalue, fmessageValue)) {
        fnameInput.value = "";
        femailAddressInput.value = "";
        fphoneNumberInput.value = "";
        fmessageInput.value = "";
    }
});

function formValidation(fname, femail, fphone, fmessage) {
    if (fname == "") {
        alert("Name is required!");
        return false;
    }

    if (femail == "") {
        alert("Email is required!");
        return false;
    }

    if (fphone == "") {
        alert("Phone number is required!");
        return false;
    }

    if (fmessage == "") {
        alert("Message is required!");
        return false;
    }

    if (fname == "" || femail == "" || fphone == "" || fmessage == "") {
        alert("No blank form allowed!");
        return false;
    }

    alert("Success! Your data has been sent.");
    location.reload();
    return true;
}

//-------------------------------- BANNER AUTOSLIDE ----------------------------------//

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}