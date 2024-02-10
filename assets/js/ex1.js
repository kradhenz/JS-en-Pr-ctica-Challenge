// Remove all content in the fields
function clean() {
    document.querySelectorAll(".validate, .nameError, .subjectError, .msgError").forEach(element => {
        element.innerHTML = "";
    });
};
// Deliver a success message
function success() {
    document.querySelector(".validate").innerHTML = "¡Mensaje enviado con éxito!";
};
// Evalute if the input content match
function exclude(input) {
    return validate = /[a-zA-Z]/gim.test(input);
}
// Evalute the content to deliver a request or success message
function validation(name, subject, msg) {
    let success = true;
    if (exclude(name) == false) {
        document.querySelector(".nameError").innerHTML = "Ingrese un nombre válido."
        success = false;
    };
    if (exclude(subject) == false) {
        document.querySelector(".subjectError").innerHTML = "Ingrese un asunto válido."
        success = false;
    };
    if (exclude(msg) == false) {
        document.querySelector(".msgError").innerHTML = "Ingrese un mensaje válido."
        success = false;
    };
    return success;
}

/*  -->   START   <--   */
// Get the form elements and add a submit event
document.getElementById("forms").addEventListener('submit', function (event) {
    event.preventDefault();
    clean();
    // Select the attribute in 'value=' to evaluate and modify if it apply
    const name = document.querySelector("#name").value;
    const subject = document.querySelector("#subject").value;
    const msg = document.querySelector("#msg").value;
    // Conditional to show a message
    if (validation(name, subject, msg)) {
        success();
    };
});
