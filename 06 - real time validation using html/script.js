document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dynamicForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    username.addEventListener('input', validateUsername);
    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassword);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
        }
    });

    function validateUsername() {
        if (username.value.trim() === '') {
            usernameError.textContent = 'Username is required.';
            usernameError.style.display = 'block';
            return false;
        } else if (username.value.trim().length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters long.';
            usernameError.style.display = 'block';
            return false;
        } else {
            usernameError.style.display = 'none';
            return true;
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            emailError.style.display = 'block';
            return false;
        } else if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Enter a valid email address.';
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }

    function validatePassword() {
        if (password.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            passwordError.style.display = 'block';
            return false;
        } else if (password.value.trim().length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            passwordError.style.display = 'block';
            return false;
        } else {
            passwordError.style.display = 'none';
            return true;
        }
    }

    function validateForm() {
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        return isUsernameValid && isEmailValid && isPasswordValid;
    }
});
