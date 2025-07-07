var XMLHttpRequest = require('xhr2');
function saveRestaurant(name, description, rating, image) {
    var url_api =
        "http://localhost:8080/Resturant/save";
    var token = "Bearer ";
    var accessTokenObj = localStorage.getItem("token");
    console.log(accessTokenObj+" is the Token");
    token += accessTokenObj;
    // var name = "My Secret Place";
    // var description = "Italian, Continental, Fast Food, Street Food, Desserts, Beverages";
    // var rating = "3.6";
    var image_urls = [
        // "https://b.zmtcdn.com/data/pictures/9/20223399/f213cc2a1c30b7fc51af0bab24307bab.jpeg"
        image
    ];
    var dishes = [];
    var restaurant = {
        name: name,
        description: description,
        rating: rating,
        image_urls: image_urls,
        dishes: dishes,
    };
    console.log(restaurant);
    var data = JSON.stringify(restaurant);
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 404) {
            console.log("404");
        } else if (http.readyState == 4 && http.status == 201) {
            //   alert("Expense Updated Succesfully!");
            //   location.reload();
            var json = JSON.parse(this.responseText);
            // console.log(json);
            const element = json;
            // console.log(element)
            var id = element["id"];
            var name = element["name"];
            var description = element["description"];
            var rating = element["rating"];
            var image_urls = element["image_urls"];
            var dishes = element["dishes"];
            console.log(id);
            console.log(name);
            console.log(description);
            console.log(rating);
            console.log(image_urls)
            console.log(dishes);
            console.log();
            // alert("Hello");
            alert("Restaurant Saved Successfully! \n"+"Id: "+id);
            window.location.href = "addRestaurant.html";
            
        }
        else if (http.readyState == 4 && http.status == 403) {
            console.log("Forbidden");
            alert("Forbidden! \nYou have to be Admin for this!");
        }
        else if (http.readyState == 4 && http.status == 401) {
            console.log("Unauthorized");
            alert("You are Unauthorized to do this.")
        }
    };
    http.open("POST", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Authorization", token);
    http.send(data);
}