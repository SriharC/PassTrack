const openBtn = document.querySelector(".saveInfoButton");
const closeBtn = document.querySelector(".cancel");

const generatedPasswordField = document.getElementById('generatedPassword');
const popup = document.querySelector("#popup");

const addPasswordField = document.querySelector("#savePassword");
const addUserNameField = document.querySelector("#saveUsername");
const addURLField = document.querySelector("#saveUrl");

const saveBtn = document.querySelector("#finalSave");

const mainBody = document.querySelector("#main-body");

openBtn.addEventListener("click", ()=>{
    openPopup();
});

closeBtn.addEventListener("click", ()=>{
    closePopup();
});

saveBtn.addEventListener("click", ()=>{
    saveToFile();
    closePopup();
});

const saveToFile = () => {
    let saveObject = {
        url: addURLField.value,
        username: addUserNameField.value,
        password: addPasswordField.value
    }
    var existingPasswords = JSON.parse(localStorage.getItem("PasswordsList"));
    if (existingPasswords == null) existingPasswords = [];
    existingPasswords.push(saveObject);
    localStorage.setItem("PasswordsList", JSON.stringify(existingPasswords));
};

const openPopup = () =>{
    popup.classList.remove("close");
    mainBody.style.filter = "blur(1rem)";
    addPasswordField.value = generatedPasswordField.value;
    addUserNameField.value = "";
    addURLField.value = "";
};

const closePopup = () =>{
    popup.classList.add("close");
    mainBody.style.filter = "blur(0rem)";
};