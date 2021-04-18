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
    })
  })
})

$(document).ready(function(){
  $("#hover1").mouseover(function(){
    $("#black-panther,#style").show();
  }).mouseout(function(){
    $("#black-panther").hide();
  });
});

// portfolio

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
