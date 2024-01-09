// Activity 1


function favColour() {
    console.log("My favourite colour is Yellow");
  }
  
  favColour();
  
 
  // Activity 2

  
  function favColour(colour) {
    console.log(`My favourite colour is ${colour}`);
  }
  
  favColour("Yellow");
  
 
  // Activity 3

  
  const factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
  
  console.log(factorial(33));

  // Activity 4

  
  let orderCount = 0;
  
  const takeOrder = (topping, crustType) => {
    console.log(`Pizza with ${topping} on a ${crustType} crust`);
    orderCount++;
  };
  
  takeOrder("pineapple", "parsley");