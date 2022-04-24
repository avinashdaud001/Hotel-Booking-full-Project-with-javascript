function Mylognbtn() {
    modal.style.display = "none"
    var username = document.getElementById('user').value;
    var pass = document.getElementById('password').value;

    var User = localStorage.getItem('User');
    var password = localStorage.getItem('password');

    if (username == User && pass == password) {

        alert("Login successfully");

    } else {

        alert("Credintial mismatch");
    }
}