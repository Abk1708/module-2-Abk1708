const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const userName = document.getElementById("userName");
const birthDate = document.getElementById("birthDate");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phoneNumber");
const deliveryAddress = document.getElementById("deliveryAddress");
const currentLocation = document.getElementsByName("currentLocation");
const deliveryMethod = document.getElementsByName("deliveryMethod");
const addition = document.getElementsByName("addition");
const lastRequirement = document.getElementsByName("lastRequirement");

// Set initial state
if (localStorage.getItem("darkMode") === "true") {
    document.getElementById("dark-mode-checkbox").checked = true;
    document.body.classList.add("dark-mode");
}

// Dark mode toggle
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    if (!document.getElementById("dark-mode-checkbox").checked) {
        localStorage.setItem("darkMode", false);
    } else {
        localStorage.setItem("darkMode", true);
    }
}

// hamburger button
const mobileMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

// form validation in the form of alert after pressing submit button
const formValidation = () => {
    if (userName.value === "" || birthDate.value === "" || email.value === "" || password.value === "" || phoneNumber.value === "" || deliveryAddress.value === "") {
        alert("Please fill all required information");
        return false;
    }

    // Check if a radio button is selected
    let locationSelected = false;
    currentLocation.forEach((radio) => {
        if (radio.checked) {
            locationSelected = true;
        }
    });

    if (!locationSelected) {
        alert("Please select your current occupation");
        return false;
    }

    // Check if a delivery method is selected
    let methodSelected = false;
    deliveryMethod.forEach((radio) => {
        if (radio.checked) {
            methodSelected = true;
        }
    });

    if (!methodSelected) {
        alert("Please select your delivery method");
        return false;
    }

    // Check if the agreement checkbox is checked
    if (!lastRequirement[0].checked) {
        alert("Please agree to the terms before submitting the forms");
        return false;
    }

    alert("Thank you for ordering Starsector. An email informing you of additional purchasing information will be sent shortly after the purchasing page has been finished. Cheers :)");
    return true;
}
