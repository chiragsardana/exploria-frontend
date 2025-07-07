var XMLHttpRequest = require("xhr2");
function getRestaurantById(id) {
  console.log("Entering the Function");
  // var id = "16";
  var url_api = "http://localhost:8080/Resturant/getById/" + id;
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //console.log(http.responseText);
      // var json = JSON.parse(this.responseText);
      // console.log(json);
      var allRestaurant = JSON.parse(this.responseText);

      const element = allRestaurant;
      console.log(element);
      var id = element["id"];
      var name = element["name"];
      var description = element["description"];
      var rating = element["rating"];
      var image_urls = element["image_urls"];
      var dishes = element["dishes"];
      console.log(id);
      console.log(name);
      console.log(description);
      if(description.includes('Near NCU')){
        description = description.substring(0, description.length - 8)
      }
      console.log(rating);
      console.log(image_urls[0]);
      console.log(dishes);
      console.log();
      document.getElementById("restaurantNameSBK").innerText = name;

      // restaurantDescriptionSBK
      document.getElementById("restaurantDescriptionSBK").innerText =
        description;

      document.getElementById("restaurantRatingSBK").innerText = rating;

      document
        .getElementById("restaurantImageSBK")
        .setAttribute("src", image_urls[0]);
      createAll(id);
      document
        .getElementById("allSBK")
        .setAttribute("onclick", "createAll(" + id + ")");
      showRating(id);
    } else if (http.readyState == 4 && http.status == 404) {
      alert("No Such Restaurant Exist");
    }
  };
  http.open("get", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}
// getRestaurantById()

function createAll(restId) {
  console.log("Calling ");

  console.log(restId + " is the Restaurant Id");
  getAllDishByResturantId(restId);
}

function getDishesByCategory(category) {
  console.log("Is the Category: " + category);
  console.log("Calling ");
  getAllDishByCategory(category);
  // for (let index = 0; index < 2; index++) {

  // }
}

function showRating(restaurantId) {
  // Array of Rating
  console.log("RUnnnnning");
  console.log(restaurantId + " is the Restaurant Id ");
  // for (let index = 0; index < 4; index++) {
  //   var elementToBeAdded = '';
  //   elementToBeAdded += '<div class="col-lg-4">'
  //   elementToBeAdded += '<h2>User Name</h2>'
  //   elementToBeAdded += '<p>Some representative placeholder content for the three columns of text below the carousel. This is'
  //   elementToBeAdded += 'the first column.</p>'
  //   elementToBeAdded += '<p><a class="btn" style="background: #ffbe33;">Stars</a></p>'
  //   elementToBeAdded += ' </div>'
  //   $("#unique4").append(elementToBeAdded);

  // }
  getAllRatingByResturantId(restaurantId);
}

var XMLHttpRequest = require("xhr2");
function getAllRatingByResturantId(restId) {
  console.log("Running the getall");
  // var restId = "99";
  var url_api =
    "http://localhost:8080/Rating/getAllRatingByResturantId/" + restId;
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //console.log(http.responseText);
      // var json = JSON.parse(this.responseText);
      // console.log(json);
      var allDishes = JSON.parse(this.responseText);
      console.log("Printing All Ratings" + allDishes);
      for (let index = 0; index < allDishes.length; index++) {
        const element = allDishes[index];
        console.log(element);
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
        elementToBeAdded += "<h2>" + user_id + "</h2>";
        elementToBeAdded += "<p>" + review + "";
        elementToBeAdded += "</p>";
        elementToBeAdded +=
          '<p><a class="btn" style="background: #ffbe33;">' +
          stars +
          "</a></p>";
        elementToBeAdded += " </div>";
        $("#unique4").append(elementToBeAdded);
        console.log("Its Run Wating for this Response");
      }
    }
  };
  http.open("get", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}

var XMLHttpRequest = require("xhr2");
function getAllDishByResturantId(restId) {
  // var restId = "9";
  var url_api = "http://localhost:8080/Dish/getAllDishByResturantId/" + restId;
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //console.log(http.responseText);
      // var json = JSON.parse(this.responseText);
      // console.log(json);
      var allDishes = JSON.parse(this.responseText);

      $("#unique2").remove();
      var newElement = '<div class="row grid" id="unique2"></div>';
      $("#unique3").append(newElement);

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

        var elementToBeAdded = "";
        elementToBeAdded += '<div class="col-sm-6 col-lg-4 all restaurants">';
        elementToBeAdded += '<div class="box">';
        elementToBeAdded += "<div>";
        elementToBeAdded += '<div class="img-box">';
        elementToBeAdded += '<img src="images/f1.png" alt="">';
        elementToBeAdded += "</div>";
        elementToBeAdded += '<div class="detail-box">';
        elementToBeAdded += "<h5>";
        elementToBeAdded += name;
        elementToBeAdded += "</h5>";
        elementToBeAdded += "<p>";
        elementToBeAdded += description;
        // elementToBeAdded += "sed eaque";
        elementToBeAdded += "</p>";
        elementToBeAdded += '<div class="options">';
        elementToBeAdded += "<h6>";
        elementToBeAdded += "₹ " + price;
        elementToBeAdded += "</h6>";
        elementToBeAdded += '<a href="dish.html?id=' + id + '">';
        elementToBeAdded +=
          '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"';
        elementToBeAdded +=
          'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029"';
        elementToBeAdded +=
          'style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">';
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded +=
          '<path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248';
        elementToBeAdded +=
          'c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />';
        elementToBeAdded += " </g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded +=
          '<path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48';
        elementToBeAdded +=
          "C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064";
        elementToBeAdded +=
          "c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4";
        elementToBeAdded += 'C457.728,97.71,450.56,86.958,439.296,84.91z" />';
        elementToBeAdded += "</g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<path";
        elementToBeAdded +=
          'd="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296';
        elementToBeAdded +=
          'c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />';
        elementToBeAdded += "</g >";
        elementToBeAdded += "</g >";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g></g>";

        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "    </g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "  </g>";
        elementToBeAdded += " <g>";
        elementToBeAdded += "  </g>";
        elementToBeAdded += "  </svg >";
        elementToBeAdded += " </a >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        $("#unique2").append(elementToBeAdded);
      }
    }
  };
  http.open("get", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}

var XMLHttpRequest = require("xhr2");
function getAllDishByCategory(category) {
  // var category = "Ittalien";
  var id = window.location.href.split("?")[1];
  console.log(id.split("=")[1] + " is the ID");
  var restId = id.split("=")[1];
  // getRestaurantById(id.split('=')[1]);
  console.log("Is the Restaurant Id: " + restId);
  // Have to do some changes to make it relavant for particular Restaurant
  var url_api = "http://localhost:8080/Dish/getAllDishByCategory/" + category;
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //console.log(http.responseText);
      // var json = JSON.parse(this.responseText);
      // console.log(json);
      var allDishes = JSON.parse(this.responseText);

      $("#unique2").remove();
      var newElement = '<div class="row grid" id="unique2"></div>';
      $("#unique3").append(newElement);

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
        if(restId == resturant_id){

        }else{
          console.log(restId+" and "+resturant_id);
          continue;
        }
        // const element = array[index];
        var elementToBeAdded = "";
        elementToBeAdded += '<div class="col-sm-6 col-lg-4 all restaurants">';
        elementToBeAdded += '<div class="box">';
        elementToBeAdded += "<div>";
        elementToBeAdded += '<div class="img-box">';
        elementToBeAdded += '<img src="images/f1.png" alt="">';
        elementToBeAdded += "</div>";
        elementToBeAdded += '<div class="detail-box">';
        elementToBeAdded += "<h5>";
        elementToBeAdded += name;
        elementToBeAdded += "</h5>";
        elementToBeAdded += "<p>";
        elementToBeAdded += description;
        // elementToBeAdded += "sed eaque";
        elementToBeAdded += "</p>";
        elementToBeAdded += '<div class="options">';
        elementToBeAdded += "<h6>";
        elementToBeAdded += "₹ " + price;
        elementToBeAdded += "</h6>";
        elementToBeAdded += '<a href="dish.html?id=' + id + '">';
        elementToBeAdded +=
          '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"';
        elementToBeAdded +=
          'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029"';
        elementToBeAdded +=
          'style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">';
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded +=
          '<path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248';
        elementToBeAdded +=
          'c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />';
        elementToBeAdded += " </g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded +=
          '<path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48';
        elementToBeAdded +=
          "C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064";
        elementToBeAdded +=
          "c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4";
        elementToBeAdded += 'C457.728,97.71,450.56,86.958,439.296,84.91z" />';
        elementToBeAdded += "</g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "<path";
        elementToBeAdded +=
          'd="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296';
        elementToBeAdded +=
          'c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />';
        elementToBeAdded += "</g >";
        elementToBeAdded += "</g >";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g></g>";

        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "</g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "    </g>";
        elementToBeAdded += "<g>";
        elementToBeAdded += "  </g>";
        elementToBeAdded += " <g>";
        elementToBeAdded += "  </g>";
        elementToBeAdded += "  </svg >";
        elementToBeAdded += " </a >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        elementToBeAdded += "</div >";
        $("#unique2").append(elementToBeAdded);
      }
    }
  };
  http.open("get", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}
