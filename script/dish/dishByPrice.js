var XMLHttpRequest = require('xhr2');
function getAllDishByPrice() {
    var minPrice = "500";
    var maxPrice ="600";
    var url_api =
      "http://localhost:8080/Dish/getAllDishByPrice/"+minPrice+"/"+maxPrice;
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        //console.log(http.responseText);
        // var json = JSON.parse(this.responseText);
        // console.log(json);
        var allDishes = JSON.parse(this.responseText);
        for (let index = 0; index < allDishes.length; index++) {
          const element = allDishes[index];
          // console.log(element)
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
        }
      }
    };
    http.open("get", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send();
  };
getAllDishByPrice()