// Just need to change the url to get restaurant in the filtering

// this is top rated restaurants in Sirsa -  index.html

// Top 10 Only By Rating 

function createAllOurFavRestaurants() {


  var url = window.location.href;

  var mainHeading = document.getElementById('headingMain');
  let hash = window.location.hash;

  // mainHeading.innerText = hash;

  var url_api = "http://localhost:8080/Resturant/top12"; // fixed spelling
  // removeActive
  var removeActive = document.getElementById('removeActive');
  var makeActive = document.getElementById('removeBestSellingSBK');
  if (hash === "#contentBasedFiltering") {
    mainHeading.innerText = "Content Based Filtering";
    removeActive.classList.remove("active");
    makeActive.classList.add("active");
    removeActive.innerHTML = "";
    // removeActive
    // '<a href="index.html">' + div.innerText + '</a>'
    // innerHTML = ""
    createAnchor();
    url_api = "http://localhost:8080/Resturant/top12";

  } else if (hash === "#collaborativeFiltering") {
    mainHeading.innerText = "Collaborative Filtering";
    removeActive.classList.remove("active");
    makeActive.classList.add("active");
    removeActive.innerHTML = "";
    createAnchor();
    url_api = "http://localhost:8080/Resturant/top12";
  } else if (hash === "#HybridT1T2") {
    mainHeading.innerText = "Hybrid(Content Based + Collaborative)";
    removeActive.classList.remove("active");
    makeActive.classList.add("active");
    removeActive.innerHTML = "";
    createAnchor();
    url_api = "http://localhost:8080/Resturant/top12";
  } else if (hash === "#sentimentAnalysis") {
    mainHeading.innerText = "Sentiment Analysis";
    removeActive.classList.remove("active");
    makeActive.classList.add("active");
    removeActive.innerHTML = "";
    createAnchor();
    url_api = "http://localhost:8080/Resturant/top12";
  } else if (hash === "#hybridT1T2T4") {
    mainHeading.innerText = "Hybrid(Content Based + Collaborative + Sentiment Analysis)";
    removeActive.classList.remove("active");
    makeActive.classList.add("active");
    removeActive.innerHTML = "";
    createAnchor();
    url_api = "http://localhost:8080/Resturant/top12";
  } else {
    mainHeading.innerText = "Top 12 Rated Restaurants in Sirsa";
  }



  // Now we need to manage just url path, as user click different url hits and same restaurants recovered.


  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState === 4) {
      if (http.status === 200) {
        var allRestaurant = JSON.parse(this.responseText);
        console.log(allRestaurant);
        createAllOurFavRestaurantSBK(allRestaurant);
      } else {
        console.error("Error fetching restaurants:", http.status, http.statusText);
      }
    }
  };
  http.open("GET", url_api, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.withCredentials = true; // include cookies if backend requires credentials
  http.send();
}

function createAnchor() {
  var removeActive = document.getElementById('removeActive');
  const anchor = document.createElement("a");

  // Set the href
  anchor.href = "index.html";

  // Set the class
  anchor.className = "nav-link";

  // Optional: set text
  anchor.innerText = "Home";
  removeActive.appendChild(anchor)

}


// var ourFavList = [];
// function listCreator(tempList) {
//   console.log(tempList + " is the Temporary List");
//   ourFavList = ourFavList.concat(tempList);
// }

// console.log(ourFavList + " is the Our Fav List");




function createAllOurFavRestaurantSBK(allRestaurant) {
  for (let index = 0; index < allRestaurant.length; index++) {
    const element = allRestaurant[index];
    // console.log(element)
    var id = element["id"];
    var name = element["name"];
    var description = element["description"];
    var rating = element["rating"];
    var image_urls = element["image_urls"];
    var costForOne = element['costForOne'];
    var deliveryTime = element['deliveryTime'];
    var cuisines = element['cuisines'];
    console.log(id);
    console.log(name);
    console.log(description);
    console.log(rating);
    console.log(image_urls);
    console.log(costForOne);
    console.log(deliveryTime);
    console.log(cuisines);
    console.log();

    // const element = array[index];
    var elementToBeAdded = "";
    elementToBeAdded += '<div class="col-sm-6 col-lg-4 all restaurants">';
    elementToBeAdded += '<div class="box">';
    elementToBeAdded += "<div>";

    elementToBeAdded += '<div class="img-box" style="position: relative;">';
    elementToBeAdded += '<img src="' + image_urls[0] + '" alt="">';

    // Numeric rating overlay in green
    elementToBeAdded += '<div style="position:absolute; bottom:8px; right:8px; background: rgba(255,255,255,0.8); padding:4px 6px; border-radius:4px; font-size:14px; color: green; font-weight:600;">';
    elementToBeAdded += rating.toFixed(1); // show rating like 4.5
    elementToBeAdded += ' ⭐️</div>';

    elementToBeAdded += '</div>'; // close img-box

    elementToBeAdded += '<div class="detail-box">';
    elementToBeAdded += "<h5>";
    elementToBeAdded += name;
    elementToBeAdded += "</h5>";
    elementToBeAdded += "<p>";
    elementToBeAdded +=
      description;
    // elementToBeAdded += "sed eaque";
    elementToBeAdded += "</p>";
    elementToBeAdded += '<div class="options">';
    elementToBeAdded += "<h6>";
    elementToBeAdded += "";
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
}

function createAll() {

  createAllOurFavRestaurants()
  // createAllOurFavDishes()
}







