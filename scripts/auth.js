//sign up
const signupForm = document.querySelectorAll('#signup-form');
signupForm.addEventListener('submit',(e) =>{
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    auth.createuserwithemailandpassword
})