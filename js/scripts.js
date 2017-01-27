// Business logic goes here
var Pizza = function(pizzaSize,pizzaTopping){
this.pizzaSize= pizzaSize;
this.pizzaTopping = pizzaTopping;

Pizza.prototype.totalCost =function(){


}


}





















// User-interface logic goes here
$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();

    var inputtedpizzaSize = $("input.size").val();
    var inputtedpizzaTopping = $("input.topping").val();

    var userTopping= ["cheese","pepperoni","artichoke"];
    var userSize = ["small","medium","large","extra-large"];
    var myPizza = new Pizza(inputtedpizzaSize,inputtedpizzaTopping);

    var totalCost = " Total Cost : $" + myPizza.totalCost + ".00";
