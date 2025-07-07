var XMLHttpRequest = require('xhr2');
function updateRestaurant(u_id, name,description, image) {
    // var u_id = "16"
    var url_api =
        "http://localhost:8080/Resturant/updateById/" + u_id;
    // {
    //     "name": "Resturant Updating",
    //     "description": "Description 1 Updating",
    //     "rating": 5.0,
    //     "image_urls":[
    //         "URL1",
    //         "URL2"
    //     ]
    // var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGlyYWdBZG1pbkBzYmswNzEuY29tIiwicm9sZXMiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImlhdCI6MTY3MjIyMTI1NCwiZXhwIjoxNjcyMjM5MjU0fQ.WLn6bXVF8AHU1I3bYlRpg9KJ_GVTlZ-hddJlKFG3DhM";
    // var name = "My Secret Place";
    // var description = "Italian, Continental, Fast Food, Street Food, Desserts, Beverages";
    var rating = "5.0";
    var token = "Bearer ";
    var accessTokenObj = localStorage.getItem("token");
    console.log(accessTokenObj+" is the Token");
    token += accessTokenObj;
    var image_urls = [
        image
    ];
    var restaurant = {
        name: name,
        description: description,
        rating: rating,
        image_urls: image_urls,
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
            var allRestaurant = JSON.parse(this.responseText);

            const element = allRestaurant;
            // console.log(element)
            var id = element["id"];
            var name = element["name"];
            var description = element["description"];
            var rating = element["rating"];
            var image_urls = element["image_urls"]
            var dishes = element["dishes"];
            console.log(id);
            console.log(name);
            console.log(description);
            console.log(rating);
            console.log(image_urls);
            console.log(dishes);
            console.log();
            alert("Updated Successfully")
            var id = window.location.href.split('?')[1];
        console.log(id.split('=')[1]+ " is the ID");
    var restId = id.split('=')[1];
            window.location.href = "AllDishesAdmin.html?id="+restId;
        }
        else if (http.readyState == 4 && http.status == 403) {
            console.log("Forbidden");
        }

    };
    http.open("PUT", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Authorization", token);
    http.send(data);
}
updateRestaurant()