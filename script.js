$(document).ready(function(){

  $('#search-form').submit(function(event) {
    event.preventDefault();
    getData();
  })


function getData(){
    var query = '';
    query = $('#query-box').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&prop=revisions&rvprop=content&format=json&callback=?";
   $('form').trigger("reset");  //clears the query box
 
  $.ajax({
    url: url,
    dataType: 'jsonp'
  }).done(function(data){ 
    console.log(data);
    $('ul').empty();
    for (var i=0; i<10; i++){
      $('#articles').append('<li class="title"><a href=' +data[3][i]+ ' target="_blank">'+ data[1][i]+ '</a></li>');
      $('#articles').append('<li class="text">' +data[2][i]+ '</li>');
    } query.attr("");
    }).fail(function() {
      alert( "error" );
    });   //end ajax request
  
  }; //close  function


}) //end document