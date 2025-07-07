var XMLHttpRequest = require('xhr2');
function register(username, password, email, phone, name, businessTitle) {
    var url_api =
    "http://localhost:8080/users/register";
    // {
    //     "username": "chirag19csu@ncuindia.edu",
    //     "password": "password",
    //     "email": "chirag19csu@ncuindia.edu",
    //     "phone": "8684076590",
    //     "name": "Chirag Sardana",
    //     "businessTitle" : "User"
    // }
    // var username = "abc@ncuindia.edu";
    // var password = "abc";
    // var email = "abc@ncuindia.edu";
    // var phone = "7869475628";
    // var name = "abc";
    // var businessTitle = "user";
    var auth = {
        username: username,
        password: password,
        email: email,
        phone: phone,
        name: name,
        businessTitle: businessTitle,
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
            alert("User Registered Successfully");
            location.href="http://127.0.0.1:5501/index.html";
        }
        else if (http.readyState == 4 && http.status == 403) {
            console.log("User Already Exist");
            alert("User have Already their Account");
        }
    };
    http.open("POST", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(data);
}
register()