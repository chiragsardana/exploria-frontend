var XMLHttpRequest = require('xhr2');
function getAllDishByCategory() {
    var url_api =
      "http://localhost:8080/users/adminping";
    var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmNAbmN1aW5kaWEuZWR1Iiwicm9sZXMiOiJST0xFX1VTRVIiLCJpYXQiOjE2NzE4ODQ5NjAsImV4cCI6MTY3MTkwMjk2MH0.PXVcuHYvb0MTOhbHYRBTueov6AO34vg79dozCU-GL-U";
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
        // var json = JSON.parse(this.responseText);
        // console.log(json);
      }
      else if (http.readyState == 4 && http.status == 401) {
        console.log("Unauthorised");
    }
    else if (http.readyState == 4 && http.status == 403) {
        console.log("Forbidden");
    }
    };
    http.open("get", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Authorization",token);
    http.send();
  };
getAllDishByCategory()