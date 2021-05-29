function apiCall(title)
{
  $.getJSON("https://www.omdbapi.com/?apikey=f1da2140&t="+encodeURI(title)).then(function(response)
  {


    console.log(response);
  });


}
var input = document.querySelector('#form');
console.log(input);
input.addEventListener('change', function() {

     var title = document.querySelector('#query').value;
     apiCall(title);
  });
