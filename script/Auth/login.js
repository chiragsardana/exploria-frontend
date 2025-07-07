var XMLHttpRequest = require('xhr2');
function login(username, password) {
    var url_api =
    "http://localhost:8080/users/authenticate";
   
    // var username = "abc@ncuindia.edu";
    // var password = "abc";
    var auth = {
        username: username,
        password: password,
    };
    var data = JSON.stringify(auth);
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 404) {
            console.log("404");
        } else if (http.readyState == 4 && http.status == 200) {
            //   alert("Expense Updated Succesfully!");
            //   location.reload();
            var json = JSON.parse(this.responseText);
            console.log(json);
            window.localStorage.setItem("token", json['token']);
            window.localStorage.setItem("name", json['name']);
            window.localStorage.setItem("email", json['email']);
            alert("Login Successfully! "+json['name']);
            window.location.href = "index.html";

        }
        else if (http.readyState == 4 && http.status == 401) {
            console.log("Wrong Credentials");
            alert("You are Entering Wrong Credentials!");
        }
    };
    http.open("POST", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(data);
}
login()
