var XMLHttpRequest = require('xhr2');
function getAllDishByRating() {
    var minRating = "4";
    var maxRating ="5";
    
    var url_api =
      "http://localhost:8080/Dish/getAllDishByRating/"+minRating+"/"+maxRating;
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        //console.log(http.responseText);
        // var json = JSON.parse(this.responseText);
        // console.log(json);
        var allDishes = JSON.parse(this.responseText);
        createSlider(allDishes);
        console.log(allDishes);
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
// getAllDishByRating()



function createSlider(sliderItems) {
  console.log(sliderItems+"is the Slider Items");
  var count = 0;
  for (let index = 0; index < 1; index++) {
    count++;
    randomNumber = Math.floor(Math.random() * (sliderItems.length  - 0));
      var elementToBeAdded = '<div class="carousel-item active">'
      elementToBeAdded += '<div class="container">';
      elementToBeAdded += '<div class="row">';
      elementToBeAdded += '<div class="col-md-7 col-lg-6 ">';
      elementToBeAdded += '<div class="detail-box">';
      elementToBeAdded += '<h1>';
      elementToBeAdded += sliderItems[randomNumber]['name'];
      // elementToBeAdded += index;
      elementToBeAdded += '</h1>';
      elementToBeAdded += '<p>';
      elementToBeAdded += sliderItems[randomNumber]['description'];
      elementToBeAdded += '</p>';
      elementToBeAdded += '<div class="btn-box">';
      elementToBeAdded += '<a href="" class="btn1">';
      elementToBeAdded += sliderItems[randomNumber]['rating'];
      elementToBeAdded += '</a>';
      elementToBeAdded += '</div>';
      elementToBeAdded += '</div>';
      elementToBeAdded += '</div>';
      elementToBeAdded += '</div>';
      elementToBeAdded += '</div>';
      elementToBeAdded += '</div>';

      $("#unique").append(elementToBeAdded);

      var elementToBeAdded1 = '<li data-target="#customCarousel1" data-slide-to="';
      elementToBeAdded1 += index + '"class="active"></li>';
      $("#unique1").append(elementToBeAdded1);
  }


  for (let index = 1; index < sliderItems.length; index++) {
    var num;
    if(count != 3){
      randomNumber = Math.floor(Math.random() * (sliderItems.length  - 0));
      num = randomNumber;
      count++
    }
    if(count == 3){
      break;
    }
    console.log("Secnd Forloop")
      var elementToBeAdded = '<div class="carousel-item">'
      elementToBeAdded += '<div class="container">';
      elementToBeAdded += '<div class="row">';
      elementToBeAdded += '<div class="col-md-7 col-lg-6 ">';
      elementToBeAdded += '<div class="detail-box">';
      elementToBeAdded += '<h1>';
      elementToBeAdded += sliderItems[num]['name'];
      elementToBeAdded += '';
      elementToBeAdded += '</h1>';
      elementToBeAdded += '<p>';
      elementToBeAdded += sliderItems[randomNumber]['description'];
      elementToBeAdded += '</p>';
      elementToBeAdded += '<div class="btn-box">';
      elementToBeAdded += '<a href="" class="btn1">';
      elementToBeAdded += sliderItems[randomNumber]['rating'];
      elementToBeAdded += '</a>';
      elementToBeAdded += '</div>';
      elementToBeAdded += '</div>';
      elementToBeAdded += '</div>';
      elementToBeAdded += '</div>';
      elementToBeAdded += '</div>';
      elementToBeAdded += '</div>';

      $("#unique").append(elementToBeAdded);

      var elementToBeAdded1 = '<li data-target="#customCarousel1" data-slide-to="';
      elementToBeAdded1 += index + '"></li>';
      $("#unique1").append(elementToBeAdded1);
  }

}