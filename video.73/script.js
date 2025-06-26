// const { createElement } = require("react");

function creatcard(data) {
    // Finesh this function
   const container =document.getElementById('videocardconatiner') ;

//    // create thumbile div
//    const thumbnail= document.createElement('div');
//    thumbnail.className = 'thumbnail';
//    thumbnail.style.backgroundImage = `url('${data.image})`;


//    //badge
//    const badge =document.createElement('div');
//    badge.classname ='badge'
// badge.textContent= DataTransfer.badge

// // duration
// const  duration =document.createElement('div')
//  duration.classname = 'duration';
//  duration.textContent= data.duration
//  // Append to thumbail
//  thumbnail.appendchild(badge);
//  thumbnail.appendchild(duration);

//  //text section
//  const textsection =document.childElement('div')
//  textsection.classname='text-section'
//  const title =document.createElement('div')

//  title.classname = 'title';
//  title.textContent = data.title


//  const info =document.createElement('div')
//  info.className=' info';

 
//  textsection.appendchild(title);
//  textsection.appendchild(info);

//  // add a main conatiner
//  container.appendChild(thumbnail);
//  container.appendChild(textsection)
// } 

// // call the function with our data

// creatcard({
//      image:'img.png/xyz.jpg/thumbnail.jpg'
// //    title : 'Introduction to Backend |  sighma web Dev video ',
//     badge :'tutorial #72',
//     duration:"31:34",
//     info: 'Codewithharry.140k views, 1 year ago, });
//     function createCard(data) {
//     const container = document.getElementById('videocardcontainer');

    // Create thumbnail div
    const thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';
    thumbnail.style.backgroundImage = `url('${data.image}')`;

    // Badge
    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.textContent = data.badge;

    // Duration
    const duration = document.createElement('div');
    duration.className = 'duration';
    duration.textContent = data.duration;

    // Append badge and duration to thumbnail
    thumbnail.appendChild(badge);
    thumbnail.appendChild(duration);

    // Text section
    const textSection = document.createElement('div');
    textSection.className = 'text-section';

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = data.title;

    const info = document.createElement('div');
    info.className = 'info';
    info.textContent = data.info;

    textSection.appendChild(title);
    textSection.appendChild(info);

    // Append everything to container
    container.appendChild(thumbnail);
    container.appendChild(textSection);

}
// Call the function with data
createCard({
    image: 'img.png/xyz.jpg/thumbnail.jpg',
    title: 'Introduction to Backend | Sigma Web Dev Video',
    badge: 'Tutorial #72',
    duration: '31:34',
    info: 'CodeWithHarry · 140K views · 1 year ago'
});
