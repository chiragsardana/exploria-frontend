var XMLHttpRequest = require('xhr2');
function getAllRatingByUserId() {
    // var userId = "Chirag19CSU071@ncuindia.edu"
    var userId = window.localStorage.getItem('email');
    console.log(userId+" is the Rating")
    var url_api =
      "http://localhost:8080/Rating/getAllRatingByUserId/"+ userId;
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


        var elementToBeAdded = "";
        elementToBeAdded += '<div class="col-lg-4">';
        elementToBeAdded += "<h2>" + "Restaurant 🆔: "+resturant_id + "</h2>";
        elementToBeAdded += "<p>" + review + "";
        elementToBeAdded += "</p>";
        elementToBeAdded +=
          '<p><a class="btn" style="background: #ffbe33;">' +
          stars + " ⭐️"+
          "</a></p>";
        elementToBeAdded += " </div>";
        $("#unique4").append(elementToBeAdded);


        }
      }
    };
    http.open("get", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send();
  };
getAllRatingByUserId()