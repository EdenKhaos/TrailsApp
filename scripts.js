// let startingTimeInput= $("#starting-time");
// let endTimeInput= $("#endTime");
// let timeOut= endTimeInput-startingTimeInput;
// document.addEventListener('DOMContentLoaded', function(){
  let restLat = "";
  let restLon = "";
  
  $("#basic-text1").on("click", function(event) {
   let zipCode= $("#zip-input").val();
    let milesDriving= $("#drive-time option:selected").val()
    var queryURL1 =  "http://www.mapquestapi.com/geocoding/v1/address?key=3VwYjbEDllKLmOW06cKZ7AR0eDB8yG5W&location=" + zipCode 
    $.ajax({
      url: queryURL1,
      method: "GET"
    }).then(function(response) {
      console.log(response);
  let lat = (response.results[0].locations[0].displayLatLng.lat);
  let lon = (response.results[0].locations[0].displayLatLng.lng);
    var queryURL2 = "https://www.hikingproject.com/data/get-trails?lat="+lat+"&lon="+lon+"&maxDistance="+milesDriving+"&key=200858356-bf647b28b50f236daa1cc71548dae05e";
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function(response) {
      console.log(response)
  let trail1 = response.trails[0];
  let trail2 = response.trails[1];
  let trail3 = response.trails[2];
  let trail4 = response.trails[3];
  let trail5 = response.trails[4];
    $("#display-results").empty();
     let firstHikeDiv= $("<div class= 'column card tile mx-4 is-child' id= 'result-one'>");
     let imageOneDiv=$("<div class= 'image-overflow'>")
     let imgOne = $("<img class= 'card-image is-4by2' src=" +trail1.imgMedium+">")
     imageOneDiv.append(imgOne)
     let trailOneLong = trail1.longitude;
     let trailOneLat = trail1.latitude;
     let hikeOneQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+trailOneLat+"&lon="+trailOneLong+"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
     $.ajax({
      url: hikeOneQueryURL,
      method: "GET"
    }).then(function(response) {
     let hikeOneWeather= response.daily[0];
     let hikeOneTitle = $("<h5 class= 'has-text-weight-semibold'>").text(trail1.name);
     let hikeOneTemp = $("<h5>").text("Temp: "+hikeOneWeather.temp.day)
     let hikeOneCond = $("<h5>").text("Cond: "+hikeOneWeather.weather[0].main)
     let hikeOneRTDistance = $("<h5>").text("Round Trip Distance: "+ trail1.length);
     let hikeOneDifficulty= $("<h6>").text("Difficulty: "+ trail1.difficulty);
     let hikeOneDirectionsURL = ("https://www.google.com/maps/dir/?api=1&origin="+zipCode+"&destination="+trailOneLat+","+trailOneLong+"&travelmode=driving")
    let hikeOneDirections = $("<a target='_blank' href="+hikeOneDirectionsURL+">Driving Directions</a></br>")
    let hikeOneRestaurant = $("<a class='local-rest'>Local Restaurants</a>");
     // var hikeOneDrive= $("<p>").text("");
     $(firstHikeDiv).append(imageOneDiv, hikeOneTitle, hikeOneTemp, hikeOneCond, hikeOneRTDistance, hikeOneDifficulty, hikeOneDirections, hikeOneRestaurant);
     $("#display-results").append(firstHikeDiv);
    });
     var secondHikeDiv= $("<div class='column card tile mx-4 is-child' id= 'result-two'>");
     let imageTwoDiv=$("<div class= 'image-overflow'>")
     var imgTwo = $("<img class= 'card-image is-4by2' src=" +trail2.imgMedium+">");
     imageTwoDiv.append(imgTwo)
     let trailTwoLong = trail2.longitude;
     let trailTwoLat = trail2.latitude;
     var hikeTwoQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+trailTwoLat+"&lon="+trailTwoLong+"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
      $.ajax({
      url: hikeTwoQueryURL,
      method: "GET"
    }).then(function(response) {
      let hikeTwoWeather= response.daily[0];
      let hikeTwoTitle = $("<h5 class= 'has-text-weight-semibold'>").text(trail2.name);
     let hikeTwoTemp = $("<h5>").text("Temp: "+hikeTwoWeather.temp.day)
     let hikeTwoCond = $("<h5>").text("Cond: "+hikeTwoWeather.weather[0].main)
     let hikeTwoRTDistance = $("<h5>").text("Round Trip Distance: "+ trail2.length);
     let hikeTwoDifficulty= $("<h6>").text("Difficulty: "+ trail2.difficulty);
     let hikeTwoDirectionsURL = ("https://www.google.com/maps/dir/?api=1&origin="+zipCode+"&destination="+trailTwoLat+","+trailTwoLong+"&travelmode=driving")
    let hikeTwoDirections = $("<a target='_blank' href="+hikeTwoDirectionsURL+">Driving Directions</a></br>")
    let hikeTwoRestaurant = $("<a class='local-rest'>Local Restaurants</a>");
     // var hikeOneDrive= $("<p>").text("");
     $(secondHikeDiv).append(imageTwoDiv, hikeTwoTitle, hikeTwoTemp, hikeTwoCond, hikeTwoRTDistance, hikeTwoDifficulty, hikeTwoDirections, hikeTwoRestaurant);
     $("#display-results").append(secondHikeDiv);
    });
     var thirdHikeDiv= $("<div class='column card tile mx-4 is-child' id= 'result-three'>");
     let imageThreeDiv=$("<div class= 'image-overflow'>")
     var imgThree = $("<img class= 'card-image is-4by2' src=" +trail3.imgMedium+">")
     imageThreeDiv.append(imgThree)
     let trailThreeLong = trail3.longitude;
     let trailThreeLat = trail3.latitude;
     var hikeThreeQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+trailThreeLat+"&lon="+trailThreeLong+"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
      $.ajax({
      url: hikeThreeQueryURL,
      method: "GET"
    }).then(function(response) {
      let hikeThreeWeather= response.daily[0];
     var hikeThreeTitle = $("<h5 class= 'has-text-weight-semibold'>").text(trail3.name);
     let hikeThreeTemp = $("<h5>").text("Temp: "+hikeThreeWeather.temp.day)
     let hikeThreeCond = $("<h5>").text("Cond: "+hikeThreeWeather.weather[0].main)
     var hikeThreeRTDistance = $("<h5>").text("Round Trip Distance: "+ trail3.length);
     var hikeThreeDifficulty= $("<h6>").text("Difficulty: "+ trail3.difficulty);
     let hikeThreeDirectionsURL = ("https://www.google.com/maps/dir/?api=1&origin="+zipCode+"&destination="+trailThreeLat+","+trailThreeLong+"&travelmode=driving")
    let hikeThreeDirections = $("<a target='_blank' href="+hikeThreeDirectionsURL+">Driving Directions</a></br>")
    let hikeThreeRestaurant = $("<a class='local-rest'>Local Restaurants</a>");
     // var hikeOneDrive= $("<p>").text("");
     $(thirdHikeDiv).append(imageThreeDiv, hikeThreeTitle, hikeThreeTemp, hikeThreeCond, hikeThreeRTDistance, hikeThreeDifficulty, hikeThreeDirections, hikeThreeRestaurant);
     $("#display-results").append(thirdHikeDiv);
    });
     var fourthHikeDiv= $("<div class='column card tile mx-4 is-child' id= 'result-four'>");
     let imageFourDiv=$("<div class= 'image-overflow'>")
     var imgFour = $("<img class= 'card-image is-4by2' src=" +trail4.imgMedium+">")
     imageFourDiv.append(imgFour)
     let trailFourLong = trail4.longitude;
     let trailFourLat = trail4.latitude;
     var hikeFourQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+trailFourLat+"&lon="+trailFourLong+"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
      $.ajax({
      url: hikeFourQueryURL,
      method: "GET"
    }).then(function(response) {
      let hikeFourWeather= response.daily[0];
     var hikeFourTitle = $("<h5 class= 'has-text-weight-semibold'>").text(trail4.name);
     let hikeFourTemp = $("<h5>").text("Temp: "+hikeFourWeather.temp.day)
     let hikeFourCond = $("<h5>").text("Cond: "+hikeFourWeather.weather[0].main)
     var hikeFourRTDistance = $("<h5>").text("Round Trip Distance: "+ trail4.length);
     var hikeFourDifficulty= $("<h6>").text("Difficulty: "+ trail4.difficulty);
     let hikeFourDirectionsURL = ("https://www.google.com/maps/dir/?api=1&origin="+zipCode+"&destination="+trailFourLat+","+trailFourLong+"&travelmode=driving")
    let hikeFourDirections = $("<a target='_blank' href="+hikeFourDirectionsURL+">Driving Directions</a></br>")
    let hikeFourRestaurant = $("<a class='local-rest'>Local Restaurants</a>");
     // var hikeOneDrive= $("<p>").text("");
     $(fourthHikeDiv).append(imageFourDiv, hikeFourTitle, hikeFourTemp, hikeFourCond, hikeFourRTDistance, hikeFourDifficulty, hikeFourDirections, hikeFourRestaurant);
     $("#display-results").append(fourthHikeDiv);
    });
     var fifthHikeDiv= $("<div class='column card tile mx-4 is-child' id= 'result-five'>");
     let imageFiveDiv=$("<div class= 'image-overflow'>")
     var imgFive = $("<img class= 'card-image is-4by2' src=" +trail5.imgMedium+">")
     imageFiveDiv.append(imgFive)
     let trailFiveLong = trail5.longitude;
     let trailFiveLat = trail5.latitude;
     restLat = trail5.latitude
     restLon = trail5.longitude
     var hikeFiveQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+trailFiveLat+"&lon="+trailFiveLong+"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
      $.ajax({
      url: hikeFiveQueryURL,
      method: "GET"
    }).then(function(response) {
      let hikeFiveWeather= response.daily[0];
     var hikeFiveTitle = $("<h5 class= 'has-text-weight-semibold'>").text(trail5.name);
     let hikeFiveTemp = $("<h5>").text("Temp: "+hikeFiveWeather.temp.day)
     let hikeFiveCond = $("<h5>").text("Cond: "+hikeFiveWeather.weather[0].main)
     let hikeFiveRTDistance = $("<h5>").text("Round Trip Distance: "+ trail5.length);
     let hikeFiveDifficulty= $("<h6>").text("Difficulty: "+ trail5.difficulty);
    let hikeFiveDirectionsURL = ("https://www.google.com/maps/dir/?api=1&origin="+zipCode+"&destination="+trailFiveLat+","+trailFiveLong+"&travelmode=driving");
    let hikeFiveDirections = $("<a target='_blank' href="+hikeFiveDirectionsURL+">Driving Directions</a></br>");
    let hikeFiveRestaurant = $("<a class='local-rest'>Local Restaurants</a>");
    // var hikeOneDrive= $("<p>").text("");
     $(fifthHikeDiv).append(imageFiveDiv, hikeFiveTitle, hikeFiveTemp, hikeFiveCond, hikeFiveRTDistance, hikeFiveDifficulty, hikeFiveDirections, hikeFiveRestaurant);
     $("#display-results").append(fifthHikeDiv);
    });
  });

  })
  });
  $(document).on("click", "a.local-rest", function(){
         $.ajax ({
      url:`https://developers.zomato.com/api/v2.1/establishments?lat=${restLat}&lon=${restLon}`,
      method: "GET",
      headers:{
        "user-key":"9985c76101ef1e92d780985a8cd4065f",
      }
    }).done(function(response){
    console.log(response);
    })
    //if statement 
  });
  //
  // pass lat and lon through the card that is clicked into search api 
  // console.log the response and drill into the data 
  // rest name 
  // address 
  // direction 