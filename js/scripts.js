// Business logic goes here
var Pizza = function(pizzaSize,pizzaTopping){    //Constructor//
  this.pizzaSize= pizzaSize;
  this.pizzaTopping = pizzaTopping;
}
Pizza.prototype.totalCost =function(){        //Prototype//
  var costOfSmallPizza=10;
  var costOfMediumPizza =15;
  var costOfLargePizza=20;
  var costOfExtraLargePizza=25;
  var costOfCheeseTopping= 2;
  var costOfArtichokeTopping =3;
  var costOfPepperoniTopping=5;
  var cost = 0 ;
  if(this.pizzaSize ==="small"){           //get pizza cost based on the selected size//
    cost = costOfSmallPizza;
  }else if (this.pizzaSize ==="medium"){
    cost = costOfMediumPizza;
  }else if (this.pizzaSize === "large"){
    cost = costOfLargePizza;
  }else if (this.pizzaSize === "extra-large") {
    cost = costOfExtraLargePizza;
  }
this.pizzaTopping.forEach(function(item){
  if(item ==="cheese"){          //get pizza cost based on the selected topping//
    cost = cost + costOfCheeseTopping;
  }else if (item ==="artichoke") {
    cost = cost + costOfArtichokeTopping;
  }else if (item ==="pepperoni") {
    cost = cost + costOfPepperoniTopping;
  }
  })

  return cost;
}
// User-interface logic goes here
$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();

    //  Take Input from user to order pizza
    var inputtedpizzaSize = $("input:radio[name=pizza-size]:checked").val();
    // var inputtedpizzaTopping = $("input:checkbox[name=topping]:checked").val();
    var myPizzaTopping = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      $(this.pizzaTopping).val();
      myPizzaTopping.push($(this).val());
    });

    var myPizza = new Pizza(inputtedpizzaSize,myPizzaTopping);  //Create object using constructor//

    var userCost = (" Total Cost : $" + myPizza.totalCost() + ".00");//Returns total cost to the user//

    $(".totalCost").text(userCost);
    $("#details").show();
    $("#name").text($("input.name").val());
    $("#address").text($("input.address").val());
    $("#contact").text($("input.contact").val());

  })
})
