var XMLHttpRequest = require('xhr2');
function saveDish(name, description, price, category, resturant_id, rating) {
    var url_api =
    "http://localhost:8080/Dish/save";
    var token = "Bearer ";
    var accessTokenObj = localStorage.getItem("token");
    console.log(accessTokenObj+" is the Token");
    token += accessTokenObj;
    // var name = "Kadhai Paneer";
    // var description = "Indian cottage cheese sauteed capsicum, onions, tomatoes and coarse roast spices.";
    // var price = "449.0";
    // var category = "Indian";
    // var resturant_id = "16";
    // var rating = "4";
    var dish = {
        name: name,
        description: description,
        price:price,
        category: category,
        resturant_id: resturant_id,
        rating: rating,
    };
    var data = JSON.stringify(dish);
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 404) {
            console.log("404");
        } else if (http.readyState == 4 && http.status == 201) {
            //   alert("Expense Updated Succesfully!");
            //   location.reload();
            // var json = JSON.parse(this.responseText);
            // console.log(json);
            var element = JSON.parse(this.responseText);
        console.log(element);
        var id = element["id"];
          var name = element["name"];
          var description = element["description"];
          var price = element["price"];
          var category = element["category"];
          var resturant_id = element["resturant_id"];
          var rating = element["rating"];
          console.log(id);
          console.log(name);
          console.log(description);
          console.log(price);
          console.log(category);
          console.log(resturant_id);
          console.log(rating);
          console.log();
          alert("Dish Saved Successfully! \n"+"Id: "+id);
        }
        else if (http.readyState == 4 && http.status == 403) {
            console.log("Forbidden");
            alert("Only Admin can Access this!")
        } else if (http.readyState == 4 && http.status == 401) {
            console.log("Unauthorized");
            alert("You are Unauthorized to do this.")
        }
        
    };
    http.open("POST", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Authorization",token);
    http.send(data);
}
saveDish()