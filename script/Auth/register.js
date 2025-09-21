var XMLHttpRequest = require('xhr2');
function register(username, password, email, phone, name, businessTitle, costForOne, deliveryTime, cuisine) {
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
            registerPerference(email, costForOne, deliveryTime,cuisine);
            // window.location.href = "index.html"
            // location.href="index.html";
            // 
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


function registerPerference(email, costForOne, deliveryTime, cuisine) {
    var url_api =
    "http://localhost:8080/api/preferences";

//     {
//   "userId": "chirag@gmail.com",
//   "costForOne": "200-250",
//   "deliveryTime": "10-20",
//   "cuisine": "North Indian"
// }

    var preferenceData = {
        userId: email,
        costForOne: costForOne,
        deliveryTime: deliveryTime,
        cuisine: cuisine,

    };
    var data = JSON.stringify(preferenceData);
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 404) {
            console.log("404");
        } else if (http.readyState == 4 && http.status == 200) {
            //   alert("Expense Updated Succesfully!");
            //   location.reload();
            var json = JSON.parse(this.responseText);
            console.log(json);
            alert("User Perference Success!");
            window.location.href = "index.html"
            // location.href="index.html";
            // 
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