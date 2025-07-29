function passwordMatch() {
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById('confirmPassword');
    const messageElement = document.getElementById('passwordMatchMessage');

    if (password.value === passwordConfirm.value) {
        messageElement.textContent = 'Passwords match!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Passwords do not match.';
        messageElement.style.color = 'red';
    }
    
}
password.addEventListener('input', passwordMatch);
    confirmPassword.addEventListener('input', passwordMatch);