$(document).ready(function() {
$("#services1").click(function() {
 $("#services1").slideDown("1000").hide();
 $("#design").show();
 $("#design").click(function() {
  $("#design").slideUp('1500');
  $("#services1").slideDown('1500');
 })
});
});

