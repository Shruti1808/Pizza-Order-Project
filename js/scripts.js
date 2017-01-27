// Business logic goes here
var Pizza = function(pizzaSize,pizzaTopping){    //Constructor
this.pizzaSize= pizzaSize;
this.pizzaTopping = pizzaTopping;

Pizza.prototype.totalCost =function(){        //Prototype
  var costOfSmallPizza=10;
  var costOfMediumPizza =15;
  var costOfLargePizza=20;
  var costOfExtraLargePizza=25;
  var costOfCheeseTopping= 2;
  var costOfArtichokeTopping =3;
  var costOfPepperoniTopping=5;
  var cost = 0;
  if(this.pizzaSize ==="small"){
    cost = costOfSmallPizza;
  }else if (this.pizzaSize ==="medium"){
    cost = costOfMediumPizza;
  }else if (this.pizzaSize === "large"){
    cost = costOfLargePizza;
  }else if (this.pizzaSize === "extra-large") {
    cost = costOfExtraLargePizza;
}
this.pizzaTopping.forEach(function(){
   if(this.pizzaTopping ==="cheese"){
     cost = cost + costOfCheeseTopping;
   }else if (this.pizzaTopping ==="artichoke") {
     cost = cost + costOfArtichokeTopping;
   }else if (this.pizzaTopping ==="pepperoni") {
     cost = cost + costOfPepperoniTopping;
   }
  })
  return cost;
 }
}

// User-interface logic goes here
$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();

  //  Take Input from user to order pizza
    var inputtedpizzaSize = $("input.size").val();
    var inputtedpizzaTopping = $("input.topping").val();

    var userTopping= ["cheese","pepperoni","artichoke"];
    var userSize = ["small","medium","large","extra-large"];
    var myPizza = new Pizza(inputtedpizzaSize,inputtedpizzaTopping);  //Create object using constructor//

    var totalCost = " Total Cost : $" + myPizza.totalCost() + ".00";
