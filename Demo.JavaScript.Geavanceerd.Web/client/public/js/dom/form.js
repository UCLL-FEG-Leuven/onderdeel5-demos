let textInput2 = document.getElementById("textInput2");

textInput2.addEventListener("input", () => {
    textInput2.setCustomValidity("");
    if (textInput2.validity.valueMissing) {
        textInput2.setCustomValidity("Zeg, vul dit eens in!");
    } else if (!textInput2.validity.valid) {
        textInput2.setCustomValidity("Zeg, er is iets anders mis!");
    } else {
        textInput2.setCustomValidity("");
    }
});

document.getElementById("formToValidate").addEventListener("submit", (e) => {
    console.log("Form submitted!");
    e.preventDefault();
});