const auth = firebase.auth();

function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Signup successful!");
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

function logout() {
  auth.signOut()
    .then(() => {
      alert("Logged out");
      window.location.href = "index.html";
    });
}

function resetPassword() {
  const email = document.getElementById("reset-email").value;
  auth.sendPasswordResetEmail(email)
    .then(() => alert("Reset email sent!"))
    .catch(error => alert(error.message));
}