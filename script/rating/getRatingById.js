var XMLHttpRequest = require('xhr2');
function getRatingbyId() {
    var id = "71";
    var url_api =
      "http://localhost:8080/Rating/getById/"+id;
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        //console.log(http.responseText);
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
    };
    http.open("get", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send();
  };
getRatingbyId()