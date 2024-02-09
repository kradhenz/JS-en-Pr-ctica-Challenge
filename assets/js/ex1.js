var myBtn = document.getElementById("send");
myBtn.addEventListener('click', function () {
    var name = document.querySelector("#name");
    var subject = document.querySelector("#subject");
    var msg = document.querySelector("#msg");
    // FULL SUCCESS CASE
    if (name.value != "" && subject.value != "" && msg.value != "") {
        document.querySelector(".validate").innerHTML = "¡Mensaje enviado con éxito!";
        document.querySelector(".nameError").innerHTML = "";
        document.querySelector(".subjectError").innerHTML = "";
        document.querySelector(".msgError").innerHTML = "";
    } 
    // TWO SUCCES CONDITIONAL
    // NAME & SUBJECT SUCCESS, MSG FAILURE
    else if (name.value != "" && subject.value != "" && msg.value == "") {
        document.querySelector(".msgError").innerHTML = "El mensaje es requerido.";
        document.querySelector(".nameError").innerHTML = "";
        document.querySelector(".subjectError").innerHTML = "";
        document.querySelector(".validate").innerHTML = "";
    }
    // NAME & MSG SUCCESS, SUBJECT FAILURE
    else if (name.value != "" && subject.value == "" && msg.value !== "") {
        document.querySelector(".subjectError").innerHTML = "El asunto es requerido.";
        document.querySelector(".nameError").innerHTML = "";
        document.querySelector(".msgError").innerHTML = "";
        document.querySelector(".validate").innerHTML = "";
    }
    // SUBJECT & MSG SUCCESS, NAME FAILURE
    else if (name.value == "" && subject.value != "" && msg.value !== "") {
        document.querySelector(".nameError").innerHTML = "El nombre es requerido.";
        document.querySelector(".subjectError").innerHTML = "";
        document.querySelector(".msgError").innerHTML = "";
        document.querySelector(".validate").innerHTML = "";
    }
    // ONE SUCCESS CONDITIONAL
    // NAME SUCCESS, SUBJECT & MSG FAILURE
    else if (name.value != "" && subject.value == "" && msg.value == "") {
        document.querySelector(".nameError").innerHTML = "";
        document.querySelector(".subjectError").innerHTML = "El asunto es requerido.";
        document.querySelector(".msgError").innerHTML = "El mensaje es requerido.";
        document.querySelector(".validate").innerHTML = "";
    }
    // SUBJECT SUCCESS, NAME & MSG FAILURE
    else if (name.value == "" && subject.value != "" && msg.value == "") {
        document.querySelector(".subjectError").innerHTML = "";
        document.querySelector(".nameError").innerHTML = "El nombre es requerido.";
        document.querySelector(".msgError").innerHTML = "El mensaje es requerido.";
        document.querySelector(".validate").innerHTML = "";
    }
    // MSG SUCCESS, NAME & SUBJECT FAILURE
    else if (name.value == "" && subject.value == "" && msg.value != "") {
        document.querySelector(".msgError").innerHTML = "";
        document.querySelector(".nameError").innerHTML = "El nombre es requerido.";
        document.querySelector(".subjectError").innerHTML = "El asunto es requerido.";
        document.querySelector(".validate").innerHTML = "";
    }
    // FULL FAILURE CASE
    else {
        document.querySelector(".nameError").innerHTML = "El nombre es requerido.";
        document.querySelector(".subjectError").innerHTML = "El asunto es requerido.";
        document.querySelector(".msgError").innerHTML = "El mensaje es requerido.";
        document.querySelector(".validate").innerHTML = "";
    }
});
