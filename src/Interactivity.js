(function() {
  'use strict';
  $(document).ready(function() {
    $("a").click(function(event) {
      alert("Thanks for visiting!");
    });
    $("a").click(function(event) {
      $(this).hide("slow");
    });
      
  });
}());
