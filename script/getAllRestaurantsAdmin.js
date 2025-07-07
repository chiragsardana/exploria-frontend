const { text } = require("stream/consumers");

function hehe() {
  console.log("Hehe");
}

function getAllRestaurants() {
  var url_api = "http://localhost:8080/Resturant/get";
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //console.log(http.responseText);
      // var json = JSON.parse(this.responseText);
      // console.log(json);
      var allRestaurant = JSON.parse(this.responseText);

      for (let index = 0; index < allRestaurant.length; index++) {
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

        var elementToBeAdded = "";
        elementToBeAdded += '<tr class="tr1">';
        elementToBeAdded += '<td data-label ="No">'+id+'</td>';
        elementToBeAdded += '<td data-label ="Name">'+name+'</td>';
        elementToBeAdded += '<td data-label ="Action">';
        elementToBeAdded += "<div>";
        elementToBeAdded +=
          '<span class="delete" onclick="deleteRestaurant('+id+')">Delete</span>';
          elementToBeAdded += '\t'
        elementToBeAdded += '<span class="edit" onclick="editRestaurant('+id+')">Edit</span>';
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
}
function editRestaurant(id){
  window.location.href = "AllDishesAdmin.html?id="+id;
}
function deleteRestaurant(id){
  // confirm();
  if (confirm("You are Trying to Delete Restaurant Id: "+id) == true) {
    console.log("You pressed OK!");
    deleteById(id);
  } else {
    console.log( "You canceled!");
  }
}

function deleteById(r_id) {
  // var r_id = "3";
  var url_api =
    "http://localhost:8080/Resturant/deleteById/"+r_id;
    // var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGlyYWdBZG1pbkBzYmswNzEuY29tIiwicm9sZXMiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImlhdCI6MTY3MTg4NTg4OSwiZXhwIjoxNjcxOTAzODg5fQ.MJGkccc9arec3T3l8MCRqC-DbXxkyY829sTioHoetA4";
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
      alert("Restaurant Deleted Successfully!");
      window.location.href = "AllRestaurantsAdmin.html";
    }
    else if (http.readyState == 4 && http.status == 404) {
      console.log("Restaurant Id Not exist");
  }else if (http.readyState == 4 && http.status == 401) {
    // console.log("");
    alert("Error");
}
  };
  http.open("DELETE", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.setRequestHeader("Authorization",token);
  http.send();
};
