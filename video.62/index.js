console.log(" This is exercise 10 ")
/*creat a business name generator by combining list of adjictives and shop name and another name

 Adajctives:
crazy
 fire 
 amazing

  shop name :
   Engine 
   foods 
   germants

    another words:
 Bros
  Limited
   Hub
   */

// random = math.random()
let obj1 = {
    1: " crazy",
    2: " fire",
    3: "Amazing"
};

let obj2 = {
    1: " Engine",
    2: "foods",
    3: " germants"
};

let obj3 =
{
    1: " Limited",
    2: " Bros",
    3: " Hub"
};

function generated_name() {

    let rand1 = Math.floor((Math.random()*3)+1);
    let rand2 = Math.floor((Math.random()*3)+1);
    let rand3 = Math.floor((Math.random()*3)+1);

     
    return (`${obj1[rand1]} ${ obj2[rand2]}  ${ obj3[rand3]}`);
// console.log(`${obj1[rand1]} ${obj2[rand2]} ${obj3[rand3]}`);

}
for ( let i = 0; i < 3; i++) {
    console.log(
        generated_name());}


