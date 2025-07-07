var XMLHttpRequest = require('xhr2');
function updateRating() {
    var u_id = "19"
    var url_api =
    "http://localhost:8080/Rating/updateById/"+u_id;
    var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGlyYWdBZG1pbkBzYmswNzEuY29tIiwicm9sZXMiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImlhdCI6MTY3MjA0OTc3NiwiZXhwIjoxNjcyMDY3Nzc2fQ.edd0kCnMRHxOIpTmNYJjx7zmpYJCZkBZK-IwQhM0Hns";
    var user_id = "chiragAdmin@devnologix.com";
    var review = "Updated";
    var stars = "5";
    var dish_id = "18";
    var resturant_id = "16";
    var restaurant = {
        user_id:user_id,
        review:review,
        stars:stars,
        dish_id:dish_id,
        resturant_id:resturant_id,
    };
    var data = JSON.stringify(restaurant);
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 404) {
            console.log("404");
        } else if (http.readyState == 4 && http.status == 200) {
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
        }
        else if (http.readyState == 4 && http.status == 403) {
            console.log("Forbidden");
        }
        
    };
    http.open("PUT", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Authorization",token);
    http.send(data);
}
updateRating()