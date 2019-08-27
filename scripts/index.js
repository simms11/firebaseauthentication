firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById('user_div').style.display = "block";
    document.getElementById('login_div').style.display = "none";

  } else {
    // No user is signed in.
    document.getElementById('user_div').style.display = "none";
    document.getElementById('login_div').style.display = "block";


  }
});

function login() {

  var email = document.getElementById('email_field');
  var password = document.getElementById('password_field');

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}