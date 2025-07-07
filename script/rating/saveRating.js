var XMLHttpRequest = require('xhr2');
function saveRating(review, stars,dish_id ,resturant_id ,user_id) {


    console.log(user_id, review, stars, dish_id, resturant_id+" is the");
    var url_api =
        "http://localhost:8080/Rating/save";

        var token = "Bearer ";
        var accessTokenObj = localStorage.getItem("token");
        console.log(accessTokenObj+" is the Token");
        token += accessTokenObj;   
        // var user_id = "chiragAdmin@devnologix.com";
    // var review = "Awesome Food";
    // var stars = "5";
    // var dish_id = "18";
    // var resturant_id = "16";
    // var  user_id = ""
    var rating = {
        user_id: user_id,
        review: review,
        stars: stars,
        dish_id: dish_id,
        resturant_id: resturant_id,
    };
    var data = JSON.stringify(rating);
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 404) {
            console.log("404");
        } else if (http.readyState == 4 && http.status == 201) {
            //   alert("Expense Updated Succesfully!");
            //   location.reload();
            // var json = JSON.parse(this.responseText);
            // console.log(json);
            var rating = JSON.parse(this.responseText);
            const element = rating;
            // console.log(element)
            var id = element["id"];
            var user_id = element["user_id"];
            var review = element["review"];
            var stars = element["stars"];
            var dish_id = element["dish_id"];
            var resturant_id = element["resturant_id"];
            console.log(id);
            console.log(user_id);
            console.log(review);
            console.log(stars);
            console.log(dish_id);
            console.log(resturant_id);
            console.log();
            alert("Review Added "+id);
            window.location.href = "dish.html?id="+dish_id;
        }
        else if (http.readyState == 4 && http.status == 403) {
            console.log("Forbidden");
            alert("Forbidden! Login First!")
        }
        else if (http.readyState == 4 && http.status == 401) {
            console.log("Unauthorized");
            alert("You are Unauthorized!")
        }
    };
    http.open("POST", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Authorization", token);
    http.send(data);
}
saveRating()