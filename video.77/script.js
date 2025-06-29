// function creatcard(title, cname, views, monthsold, duration, thumbnail) {

//     //finesh the function
//     if (views < 100000) {
//         let viewstr = views / 1000 + "k";
//     }
//     else if (views > 100000) {
//         let viewstr = views / 100000 + "m";

//     }
//     else {
//         let viewstr = views / 1000 + "k";
//     }

//     let html = `< div class="card" >
//         < div class="image" >
//                 <img src="${thumbnail} " alt="">

//                 <div class="capsule">${duration}</div>
//             </div>
        
//                     <div class="text">
//                 <h1>   ${title  </h1>
//                 <p>
//                  ${cname}. ${viewstr} views . ${ monthsold}
//                 </p>
//             </div>
//         </div >`

//     document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html


// // }


// creatcard("Introduction of Backend | sigma web dev video #77", " codewithharry",
//     560000, 7, "31:22", "")



    function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

