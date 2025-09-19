// solutions of qn 1

// let h2= document.querySelector("h2")
// console.dir(h2.innertext);

// h2.innerText = h2.innerText +  " Form Apna Collage Students";



// solution of Qn2

// let div = document.querySelectorAll(".box");

let divs = document.querySelectorAll(".box");
// divs[0].innerText = " New Unique value 1";


 idx = 1;
  for (div of divs){
    //  console.group(div);
    div.innerText= `New Unique value ${idx}`;
    idx++;
  }

//  divs[0].innerText =" A new unique value";
//  divs[1].innerText =" A  second new unique value";
//  divs[2].innerText =" A  last new unique value";
//  console.dir(div);
// console.log(div);