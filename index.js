let users;

function register() {
    users = new Map();
    username = document.getElementById("register-username").value;
    email = documetn.getElementById("regisrter-email").value;
    confirmPassword = document.getElementById("register-confirm-password").value;
    password = document.getElementById("register-password").value;
    
    if(confirmPassword !== password) {
        alert("Please enter correct password!")
        return false;
    }
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if(email != expression) {
        alert("Please enter the correct email address!");
        return false;
    }
    users.set(`${username}`,`${password}`);
}

function login() {
    username = document.getElementById("login-username").value;
    password = document.getElementById("login-password").value;
    if(users.get(`${username}`)== password) {
        return true;
    }
    else if(username != "" && password != "") {
        alert("Please enter correct username and password!");
        return false;
    }
}

