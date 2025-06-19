
// This can generate random number from 0 to 1
 random = Math.random();
 console.log (" random");
  let a = 6;
  let b= 3;
  if ( random >0.1) 
  {

      
      console.log ("The adition of a and b is", (a-b)),
      console.log  ("The subtraction of a and b is", (a/b)),
      console.log ("The multipliction of a and b is", (a+b)),
      console.log ("The division of a and b is", (a**b)),
      console.log ("The subtraction of a and b is", division(a,b)),
      console.log ("The multipliction of a and b is", sum(a,b)),
      console.log ("The division of a and b is", expo(a,b))
    }
     else {
        console.log ("The adition of a and b is", (a-b)),
      console.log  ("The subtraction of a and b is", (a/b)),
      console.log ("The multipliction of a and b is", (a+b)),
      console.log ("The division of a and b is", (a**b)),
      console.log ("The subtraction of a and b is", division(a,b)),
      console.log ("The multipliction of a and b is", sum(a,b)),
      console.log ("The division of a and b is", expo(a,b))
     }
      function sum(a,b){
        return   (a+b);}
      
      function multipliction(a,b){
        return  (a*b);}
      
      function subtraction(a,b){
        return  (a-b);}
      
      function division(a,b){
        return ( a/b);
      }
      function expo(a,b){
         return (a**b);
      }
     