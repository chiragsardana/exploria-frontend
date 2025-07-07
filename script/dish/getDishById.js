// Done 

var XMLHttpRequest = require("xhr2");
function getDishById(id) {
  // var id = "18";
  var url_api = "http://localhost:8080/Dish/getById/" + id;
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //console.log(http.responseText);
      var element = JSON.parse(this.responseText);
      // console.log(element);
      var id = element["id"];
      var name = element["name"];
      var description = element["description"];
      var price = element["price"];
      var category = element["category"];
      var resturant_id = element["resturant_id"];
      var rating = element["rating"];
      var ratings = element["ratings"];
      console.log(id);
      console.log(name);
      console.log(description);
      console.log(price);
      console.log(category);
      console.log(resturant_id);
      console.log(rating);

      document.getElementById("dishNameSBK").innerText = name;
      // //
      document.getElementById("dishDescriptionSBK").innerText = description+"\n Restaurant Id: "+resturant_id;
      // idSBK
      // document.getElementById("idSBK").innerHTML = resturant_id;
      document.getElementById("dishRatingSBK").innerText = rating;

      showRating(ratings);
      console.log(ratings.length);
    }else if(http.readyState == 4 && http.status == 404){
      alert("No Such Dish Exist")
      window.location.href = "http://127.0.0.1:5501/index.html"
    }
  };
  http.open("get", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}

function showRating(ratingArray) {
  console.log(ratingArray+ " is the SBK");

  for (let index = 0; index < ratingArray.length; index++) {
    var elementToBeAdded = "";
    elementToBeAdded += '<div class="col-lg-4">';
    elementToBeAdded += '<h2 style="color:white">'+ratingArray[0]['user_id']+'</h2>';
    elementToBeAdded +=
      '<p style="color:white">';
    elementToBeAdded += ratingArray[0]['review']+"</p>";
    elementToBeAdded +=
      '<p><a class="btn" style="background: #ffbe33;">'+ratingArray[index]['stars']+'</a></p>';
    elementToBeAdded += " </div>";
    $("#unique4").append(elementToBeAdded);
  }
}
getDishById(18);
