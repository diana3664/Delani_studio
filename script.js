//design
$(document).ready(function() {
$("#services1").click(function() {
 $("#services1").slideDown().hide();
 $("#design").show();
 $("#design").click(function() {
  $("#design").slideUp();
  $("#services1").slideDown();
 })
});
});
//development
$(document).ready(function() {
  $("#services2").click(function() {
   $("#services2").slideDown().hide();
   $("#development").show();
   $("#development").click(function() {
    $("#development").slideUp();
    $("#services2").slideDown();
   })
  });
  });
  
//product-management
$(document).ready(function() {
  $("#services3").click(function() {
    $("#services3").slideDown().hide();
    $("#product-management").show();
    $("#product-management").click(function(){
        $("#services3").slideDown()
        $("#product-management").slideUp().hide();
    });
  });
});

// portfolio
$(document).ready(function() {
$(".image0").hover(function(){
  $(".txt-hide0").fadeToggle(300)
});

$(".image1").hover(function(){
  $(".txt-hide1").fadeToggle(300)
});

$(".image2").hover(function(){
  $(".txt-hide2").fadeToggle(300)
});

$(".image3").hover(function(){
  $(".txt-hide3").fadeToggle(300)
});

$(".image4").hover(function(){
  $(".txt-hide4").fadeToggle(300)
});

$(".image5").hover(function(){
  $(".txt-hide5").fadeToggle(300)
});

$(".image6").hover(function(){
  $(".txt-hide6").fadeToggle(300)
});

$(".image7").hover(function(){
  $(".txt-hide7").fadeToggle(300)
});

});

$(document).ready(function(){
  $("form#form").submit(function(event){
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var messageInput = $("textarea#message").val();
    if ($("input#name").val() && $("input#email").val()){
      alert (nameInput + ", Welcome to Delani studio.Our team of experts will get intouch with you within 24hours");
    }
    else {
      alert("invalid email!");
    }
    
  });

});
