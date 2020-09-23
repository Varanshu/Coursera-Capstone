// Certificate Card More or Less
$(document).ready(function() {
  var bool = $(".moreToggle").is(":hidden");
  $(".moreToggle").slice(0, 3).show();
  console.log($(this));
  $("#load").on('click', function() {
    $(".moreToggle").slice(4).slideToggle();
    $(".moreToggle").slice(4).toggleClass("d-flex");
    $(".moreToggle").slice(4).toggleClass("align-items-stretch");
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

// Projects Card More or Less
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
