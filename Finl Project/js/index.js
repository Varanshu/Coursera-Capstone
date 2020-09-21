// $( document ).ready(function () {
//   $(".moreToggle").slice(0, 3).show();
//
//     $("#loadMore").on('click', function (e) {
//       e.preventDefault();
//       $(".moreToggle:hidden").slice(0).slideDown();
//       if ($(".moreToggle:hidden").length == 0) {
//         $("#loadMore").fadeOut('slow');
//         $("#loadLess").fadeIn('slow');
//       }
//     });
//   });
$(document).ready(function() {
  var bool = $(".moreToggle").is(":hidden");
  $(".moreToggle").slice(0, 3).show();
  console.log($(this));
  $("#load").on('click', function() {
    var a = 1;
    $(".moreToggle").slice(4).slideToggle();
    if (bool) {
      console.log(bool);
      $("#load").text("Load Less");
      bool = false;
    } else {
      console.log(bool);
      $("#load").text("Load More");
      bool = true;
    }

  });
});


$(document).ready(function() {
  var bool = $(".projectToggle").is(":hidden");
  $(".projectToggle").slice(0, 2).show();
  console.log($(this));
  $("#prjectLoad").on('click', function() {
    var a = 1;
    $(".projectToggle").slice(3).slideToggle();
    if (bool) {
      console.log(bool);
      $("#prjectLoad").text("Load Less");
      bool = false;
    } else {
      console.log(bool);
      $("#prjectLoad").text("Load More");
      bool = true;
    }

  });
});
