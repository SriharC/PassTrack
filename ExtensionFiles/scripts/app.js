const digits =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special_char = ['!', '@', '#', '$', '%', '^', '&','*', '/', '-', '_'];
const lettersLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const lettersUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const generatedPasswordInput = document.getElementById('generatedPassword');

const passwordLength = document.querySelector('input[type=range]');

const allCheckboxes = document.querySelectorAll('input[type=checkbox]');

const generatePassword = (length) => {
    //gives password count functionality in UI
    document.getElementById('charLengthSpan').textContent = passwordLength.value;

    const includeDigits = document.getElementById('includeDigits').checked;
    const specialChar = document.getElementById('specialChar').checked;
    const LowerUpper = document.getElementById('LowerUpper').checked;

    generatedPasswordInput.value = '';

    let possiblePasswordChars = [];

    if (includeDigits) {digits.forEach(digit => {possiblePasswordChars.push(digit)})}
    if (specialChar) {special_char.forEach(special =>  possiblePasswordChars.push(special))}
    if (LowerUpper) { 
        lettersLower.forEach(letter =>  possiblePasswordChars.push(letter));
        lettersUpper.forEach(letter => possiblePasswordChars.push(letter));
    } else {
        lettersLower.forEach(letter =>  possiblePasswordChars.push(letter));
    }
    for (let i = 0; i <= length; i++)
        generatedPasswordInput.value += possiblePasswordChars[Math.floor(Math.random() * possiblePasswordChars.length)];
}

generatePassword(passwordLength.value);

passwordLength.addEventListener('change', e => {
    let value = e.target.value;
    generatePassword(value);
});

allCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        generatePassword(passwordLength.value);
    });
});

const copyPasswordBtn = document.getElementById('copyPassword');
const confirmation = document.getElementById('confirmation');
copyPasswordBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(generatedPasswordInput.value);
    confirmation.classList.add('active');
    setTimeout(() => {
        confirmation.classList.remove('active');
    }, 2000)
})
