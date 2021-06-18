const form = document.querySelector("form")
const nom = document.querySelector("#nom")
const prenom = document.querySelector("#prénom")
const errorName = document.querySelector(".requiredName")
const errorLastName = document.querySelector(".requiredLastName")
const resetBtn = document.querySelector('.color3');
const regularName = /^[a-zA-Z]+$/
const radioMale = document.querySelector("[value=\"Masculin\"]")
const radioFemale = document.querySelector("[value=\"Féminin\"]")
const errorSexe = document.querySelector(".requiredSexe")
const annéeActuelle = new Date().getFullYear();
const ddn = document.querySelector("#ddn")
const errorDdn = document.querySelector(".requiredBirth")
const regDate = /\d{4,}/
const codePost = document.querySelector("#cp")
const errorCp = document.querySelector(".requiredPostal")
const mail = document.querySelector("#email")
const errorMail = document.querySelector(".requiredMail")
const subject = document.querySelector("#demande")
const errorSubject = document.querySelector(".requiredSubject")
const question = document.querySelector("#question")
const errorQuestion = document.querySelector(".requiredQuestion")
const checkbox = document.querySelector(".checkbox1")
const errorCheckbox = document.querySelector(".requiredCheckbox")
const regCodePostal = /^[0-9]{5}$/


form.addEventListener("submit", (e) => {
    if (nom.value == "" || nom.value == null || regularName.test(nom.value) == false) {
        errorName.innerHTML = "Veuillez renseigner votre nom"
        e.preventDefault();
        nom.value = "";
    }
    if (prenom.value == "" || prenom.value == null || regularName.test(prenom.value) == false) {
        errorLastName.innerHTML = "Veuillez renseigner votre prenom"
        e.preventDefault();
        prenom.value = "";
    }
    if (radioMale.checked == false && radioFemale.checked == false) {
        errorSexe.innerHTML = "Veuillez selectionner le sexe"
        e.preventDefault();
    }
    if (ddn.value.match(regDate) > annéeActuelle || ddn.value == null || ddn.value == "") {
        errorDdn.innerHTML = "Veuillez renseigner votre date de naissance"
        e.preventDefault();
    }
    if (codePost.value == "" || codePost.value == null || regCodePostal.test(codePost.value) == false) {
        errorCp.innerHTML = "Veuillez saisir votre code postal"
        e.preventDefault();
    }
    if (mail.value == "" || mail.value == null) {
        errorMail.innerHTML = "Veuillez renseigner votre mail"
        e.preventDefault();
    }
    if (subject.value == "" || subject.value == null) {
        errorSubject.innerHTML = "Veuillez choisir un sujet"
        e.preventDefault();

    }
    if (question.value == "" || question.value == null) {
        errorQuestion.innerHTML = "Veuillez renseigner votre question"
        e.preventDefault();
    }
    if (checkbox.checked == false) {
        errorCheckbox.innerHTML = "Veuillez cocher la case"
        e.preventDefault();
    }




})

form.addEventListener('reset', () => {
    errorName.textContent = "";
    errorLastName.textContent = "";
    errorSexe.textContent = "";
    errorDdn.textContent = "";
    errorCp.textContent = "";
    errorMail.textContent = "";
    errorSubject.textContent = "";
    errorQuestion.textContent = "";
    errorCheckbox.textContent = "";
})