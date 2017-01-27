// Business logic goes here
var Pizza = function(pizzaSize,pizzaTopping){
this.pizzaSize= pizzaSize;
this.pizzaTopping = pizzaTopping;




}





















// User-interface logic goes here
$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();

    var inputtedpizzaSize = $("input.size").val();
    var inputtedpizzaTopping = $("input.topping").val();

   var myPizza = new Pizza(inputtedpizzaSize,inputtedpizzaTopping);
   
