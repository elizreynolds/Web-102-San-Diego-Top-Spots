

$(document).ready(function() {
   
// write your code here


$.getJSON('data.json', function (data){ 
    var html = " ";
    $.each(data, function (index, data){
        $("table").append("<tr><td>" 
        + data.name + "</td><td>" 
        + data.description + "</td><td><a href=http://wwww.google.com/maps?q" 
        + data.location +  "><button>Open in Google Maps</button></a></td><td>");
        });
    });                              
 });        
  