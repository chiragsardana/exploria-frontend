var XMLHttpRequest = require("xhr2");
function getSearchDish() {
  // var search = "Indian";
  var id = window.location.href.split("?")[1];
  console.log(id.split("=")[1] + " is the ID");

  var search = id.split("=")[1].split('&')[0];
  var nearNCU = window.location.href.split("&")[1].split("=")[1];
  console.log(nearNCU+" is the NEar NCU");
  var check = '#####';
  var checkBool  = false;
  if(nearNCU.toLowerCase() == 'yes'){
    console.log("Yes")
    check = 'Near NCU'
    checkBool = true;
  }else{
    console.log("No")
    check = 'Near NCU'

  }
  var url_api = "http://localhost:8080/Dish/getAllDishBySearch/" + search;
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //console.log(http.responseText);
      // var json = JSON.parse(this.responseText);
      // console.log(json);
      var allRestaurant = JSON.parse(this.responseText);

      var count = 0;
      var max = allRestaurant.length;
      var min = 0;
      var list = [];
      for (let index = 0; index < allRestaurant.length; index++) {
        // if(count != 3){
        //   randomNumber = Math.floor(Math.random() * (allRestaurant.length  - 0));
        //   list.push(allRestaurant[randomNumber]);
        //   count++;
        // }
        const element = allRestaurant[index];
        // console.log(element)
        var id = element["id"];
        var name = element["name"];
        var description = element["description"];
        var rating = element["rating"];
        var image_urls = element["image_urls"];
        console.log(id);
        console.log(name);
        console.log(description);
        console.log(rating);
        console.log(image_urls);
        console.log();
        var resturant_id = element["resturant_id"];
        getRestaurantById(resturant_id, check, checkBool);
      }
      //   console.log(list+" is the List");
      //   createSlider(list);
    }
  };
  http.open("get", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}

function createSlider(list) {
  for (let index = 0; index < 1; index++) {
    const element = list[index];
    // console.log(element)
    var id = element["id"];
    var name = element["name"];
    var description = element["description"];
    var rating = element["rating"];
    var image_urls = element["image_urls"];
    console.log(id);
    console.log(name);
    console.log(description);
    console.log(rating);
    console.log(image_urls);
    console.log();
    var elementToBeAdded = '<div class="carousel-item active">';
    elementToBeAdded += '<div class="container">';
    elementToBeAdded += '<div class="row">';
    elementToBeAdded += '<div class="col-md-7 col-lg-6 ">';
    elementToBeAdded += '<div class="detail-box">';
    elementToBeAdded += "<h1>";
    elementToBeAdded += name;
    // elementToBeAdded += index;
    elementToBeAdded += "</h1>";
    elementToBeAdded += "<p>";
    elementToBeAdded += "" + description;
    elementToBeAdded += "</p>";
    elementToBeAdded += '<div class="btn-box">';
    elementToBeAdded += '<a href="" class="btn1">';
    elementToBeAdded += "Order Now";
    elementToBeAdded += "</a>";
    elementToBeAdded += "</div>";
    elementToBeAdded += "</div>";
    elementToBeAdded += "</div>";
    elementToBeAdded += "</div>";
    elementToBeAdded += "</div>";
    elementToBeAdded += "</div>";

    $("#unique").append(elementToBeAdded);

    var elementToBeAdded1 =
      '<li data-target="#customCarousel1" data-slide-to="';
    elementToBeAdded1 += index + '"class="active"></li>';
    $("#unique1").append(elementToBeAdded1);
  }

  for (let index = 1; index < list.length; index++) {
    const element = list[index];
    // console.log(element)
    var id = element["id"];
    var name = element["name"];
    var description = element["description"];
    var rating = element["rating"];
    var image_urls = element["image_urls"];
    console.log(id);
    console.log(name);
    console.log(description);
    console.log(rating);
    console.log(image_urls);
    console.log();
    console.log("Secnd Forloop");
    var elementToBeAdded = '<div class="carousel-item">';
    elementToBeAdded += '<div class="container">';
    elementToBeAdded += '<div class="row">';
    elementToBeAdded += '<div class="col-md-7 col-lg-6 ">';
    elementToBeAdded += '<div class="detail-box">';
    elementToBeAdded += "<h1>";
    elementToBeAdded += name;
    // elementToBeAdded += index;
    elementToBeAdded += "</h1>";
    elementToBeAdded += "<p>";
    elementToBeAdded += description;
    elementToBeAdded += "</p>";
    elementToBeAdded += '<div class="btn-box">';
    elementToBeAdded += '<a href="" class="btn1">';
    elementToBeAdded += "Order Now";
    elementToBeAdded += "</a>";
    elementToBeAdded += "</div>";
    elementToBeAdded += "</div>";
    elementToBeAdded += "</div>";
    elementToBeAdded += "</div>";
    elementToBeAdded += "</div>";
    elementToBeAdded += "</div>";

    $("#unique").append(elementToBeAdded);

    var elementToBeAdded1 =
      '<li data-target="#customCarousel1" data-slide-to="';
    elementToBeAdded1 += index + '"></li>';
    $("#unique1").append(elementToBeAdded1);
  }
}

var XMLHttpRequest = require("xhr2");
function getRestaurantById(id,check, checkBool) {
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
    //   alert(check+ description.includes(check));

      // alert("Check Bool "+ checkBool+" and CHeck "+check)
      if(checkBool == false){
        if(description.includes(check)){
          return;
        }
      }
    //   if(){

    //   }
      console.log(id);
      console.log(name);
      console.log(description);
      console.log(rating);
      console.log(image_urls[0]);
      console.log(dishes);
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
      // elementToBeAdded += '$20'
      elementToBeAdded += "</h6>";
      elementToBeAdded += '<a href="restaurant.html?id=' + id + '">';
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
  };
  http.open("get", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}
