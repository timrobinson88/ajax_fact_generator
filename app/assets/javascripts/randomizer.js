$(document).ready(function(){

var change_trait = function(data){
  $("#tim_is").hide();
  $("#tim_is").html(data["trait"]);
  $("#tim_is").show("slow")
};

$("#trait_setter").click(function(event){
  event.preventDefault();
  $.ajax({
    url:'/randomize',
    type:'GET',
    success: change_trait
  });

});

});
