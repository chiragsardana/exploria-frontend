var XMLHttpRequest = require('xhr2');
function getAllDishByResturantId(restId) {
    // var restId = "9";
    var url_api =
      "http://localhost:8080/Dish/getAllDishByResturantId/" +restId;
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
          var elementToBeAdded = "";
          elementToBeAdded += '<tr class="tr1">';
          elementToBeAdded += '<td data-label ="No">'+id+'</td>';
          elementToBeAdded += '<td data-label ="Name">'+name+'</td>';
          elementToBeAdded += '<td data-label ="Action">';
          elementToBeAdded += "<div>";
          elementToBeAdded +=
            '<span class="delete" onclick="deleteDish('+restId+','+id+')">Delete</span>';
            elementToBeAdded += '\t'
          elementToBeAdded += '<span class="edit" onclick="editDish('+id+')">Edit</span>';
          elementToBeAdded += "</div>";
          elementToBeAdded += "</td>";
          elementToBeAdded += "</tr>";
          // tableBodySBK
  
          $("#tableBodySBK").append(elementToBeAdded);
        }
      }
    };
    http.open("get", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send();
  };

function deleteDish(restId,id){
    if (confirm("You are Trying to Delete Dish Id: "+id) == true) {
        console.log("You pressed OK!");
        deleteById(restId, id);
      } else {
        console.log( "You canceled!");
      }
}
function editDish(id){
  alert("edit Ds")
  window.location.href = "updateDish.html?id="+id
}


var XMLHttpRequest = require('xhr2');
function deleteById(restId, d_id) {
    // var d_id = "8";
    var url_api =
      "http://localhost:8080/Dish/deleteById/"+d_id;
    //   var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGlyYWdBZG1pbkBzYmswNzEuY29tIiwicm9sZXMiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImlhdCI6MTY3MTg4NTg4OSwiZXhwIjoxNjcxOTAzODg5fQ.MJGkccc9arec3T3l8MCRqC-DbXxkyY829sTioHoetA4";
    var token = "Bearer ";
    var accessTokenObj = localStorage.getItem("token");
    console.log(accessTokenObj+" is the Token");
    token += accessTokenObj;
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        //console.log(http.responseText);
        var json = JSON.parse(this.responseText);
        console.log(json);
        alert("Dish Deleted Successfully!");
        window.location.href = "AllDishesAdmin.html?id="+restId;
      }
      else if (http.readyState == 4 && http.status == 404) {
        console.log("Dish Id Not exist");
    }
    };
    http.open("DELETE", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Authorization",token);
    http.send();
  };




function editRestaurantDetails(){
    
    var id = window.location.href.split('?')[1];
        console.log(id.split('=')[1]+ " is the ID");
    var restId = id.split('=')[1];
    alert("Edit Restaurant Function!"+restId)
    window.location.href = "updateRestaurant.html?id="+restId;
}