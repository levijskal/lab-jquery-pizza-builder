// Write your Pizza Builder JavaScript in this file.
// items
var pepperoni = $(".pep");
var mushrooms = $(".mushroom");
var greenPeppers = $(".green-pepper");
// buttons
var pepperoniButton = $(".btn-pepperonni");
var mushroomsButton = $(".btn-mushrooms");
var greenPeppersButton = $(".btn-green-peppers")

var whiteSauceButton = $(".btn-sauce")
var glutenFreeCrustButton = $(".btn-crust")
// actions/buttonclicks
pepperoniButton.click(function(e){
pepperoni.toggle();
$(".btn-pepperonni").toggleClass("active")
$('.panel li:contains(pepperonni)').toggle();
});

mushroomsButton.click(function(e){
  mushrooms.toggle();
  $(".btn-mushrooms").toggleClass("active")
  $('.panel li:contains(mushrooms)').toggle();
  });

greenPeppersButton.click(function(e){
  greenPeppers.toggle();
  $(".btn-green-peppers").toggleClass("active")
  $('.panel li:contains(green)').toggle();
  });
  
  whiteSauceButton.click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active")
    $('.panel li:contains(white)').toggle();

  })

  glutenFreeCrustButton.click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active")
    $('.panel li:contains(gluten)').toggle();
  })
// other
$(document).ready(function(){
$(".crust").removeClass("crust-gluten-free")
$(".sauce").removeClass("sauce-white")
})

// =-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// var whiteSauce = $(".sauce-white")
// var glutenFreeCrust = $(".crust-gluten-free")
