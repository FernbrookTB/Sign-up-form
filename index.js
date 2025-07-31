const messageElement = document.getElementById('passwordMatchMessage');

function passwordMatch() {
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById('confirmPassword');
    

    if (password.value === '' || passwordConfirm.value === '') {
        messageElement.textContent = '';
        messageElement.style.color = '';
        return;}

    if (password.value === passwordConfirm.value) {
        messageElement.textContent = 'Passwords match!';
        messageElement.style.color = 'green';
     } else if (password.value === '' && passwordConfirm.value !== password.value ) {
        messageElement.textContent = '';
        messageElement.style.color = '';
    }  
     else {
        messageElement.textContent = 'Passwords do not match.';
        messageElement.style.color = 'red';
    }
    
}

password.addEventListener('input', passwordMatch);
    confirmPassword.addEventListener('input', passwordMatch);


