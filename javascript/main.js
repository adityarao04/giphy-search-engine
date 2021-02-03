/* 1. Grab the input value */

var btn = document.querySelector(".js-go");

btn.addEventListener('click', function() {

    var input = document.querySelector("input").value;

    pushTODOM(input);

});


var key = document.querySelector(".js-userinput");

key.addEventListener('keyup', function(e) {

    var input = document.querySelector("input").value;
    console.log(input);
    // if the key ENTER is pressed...
    if (e.which === 13) {
        pushTODOM(input);

    }
    cleanContainer();
    getAjax(input);


});




/* 2. do the data stuff with the API */

function getAjax(result) {

    var url = "http://api.giphy.com/v1/gifs/search?q=" + result + "&api_key=e5rMy9egY5WWXdSyWovyc21JKfG0UwTJ";

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    // Grabing data
    GiphyAJAXCall.addEventListener('load', function(e) {

        var data = e.target.response;
        pushTODOM(data);

    });

}

function cleanContainer() {

    var container = document.querySelector(".js-container");

    container.innerHTML = "";

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