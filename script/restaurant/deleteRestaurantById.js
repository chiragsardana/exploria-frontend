var XMLHttpRequest = require('xhr2');
function deleteById() {
    var r_id = "3";
    var url_api =
      "http://localhost:8080/Resturant/deleteById/"+r_id;
      var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGlyYWdBZG1pbkBzYmswNzEuY29tIiwicm9sZXMiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImlhdCI6MTY3MTg4NTg4OSwiZXhwIjoxNjcxOTAzODg5fQ.MJGkccc9arec3T3l8MCRqC-DbXxkyY829sTioHoetA4";
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        //console.log(http.responseText);
        var json = JSON.parse(this.responseText);
        console.log(json);
      }
      else if (http.readyState == 4 && http.status == 404) {
        console.log("Restaurant Id Not exist");
    }
    };
    http.open("DELETE", url_api, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Authorization",token);
    http.send();
  };
deleteById()