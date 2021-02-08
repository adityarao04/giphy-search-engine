/* 1. Grab the input value */

var btn = document.querySelector(".js-go");

btn.addEventListener('click', function() {

    var input = document.querySelector(".js-userinput").value;

    var userInput = getUserInput();
    searchGiphy(userInput);

});


var key = document.querySelector(".js-userinput");

key.addEventListener('keyup', function(e) {

    if (e.which === 13) {
        var userInput = getUserInput();
        searchGiphy(userInput);
    }

});

function getUserInput() {
    var inputValue = document.querySelector('.js-userinput').value;
    return inputValue;
}




/* 2. do the data stuff with the API */

function searchGiphy(searchQuery) {

    var url = "https://api.giphy.com/v1/gifs/search?api_key=UeRrbOrVsnfgAAnGubGcqLSemPHmDI8v&q=" + searchQuery;

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    // Grabing data
    GiphyAJAXCall.addEventListener('load', function(data) {

        var actualData = data.target.response;
        pushTODOM(actualData);
        console.log(actualData);

    });

}











/* 3. Show me the GIFs */

function pushTODOM(input) {
    //JSON.parse() cleans up are code and makes it combined as one object
    var response = JSON.parse(input);

    var imageUrls = response.data;
    console.log(imageUrls);

    imageUrls.forEach(function(image) {
        var src = image.images.fixed_height.url;


        var container = document.querySelector(".js-container");
        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    });




}