//  solution is incomplete i have no idea about the solution maybe i will be do later



// You have to write a node.js program to clear cultter inside of a directory and organize the contents 
//  of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

const fs = require("fs");

const namejpg = "name.jpg";
const namepng = "name.png";
const rohanzip = "rohan.zip";
const thiszip = "this.pdf"
const catjpg = " cat.jpg"

// // const folderPath = "./";  //  mero folder jo read gade ho folder
// const files = fs.readdirSync(folderPath)
// for (let folderPath = 0; folderPath < 6; folderPath++) {
//     const element = folderPath;

// }

// console.log(namejpg);

if (!fs.existsSync(namejpg)) {
    fs.mkdirSync(namejpg);
    console.log("Folder created:", namejpg);
    fs.readFileSync();

}
 else {
    console.log("namepng file read sucussfullly")
    console.log("Folder already exists");
}
if (!fs.existsSync(namepng)) {
    fs.mkdirSync(namepng);
    console.log("Folder created:", namepng);
    fs.readFileSync();
}
 else {
    console.log("namejpg isread sucusfully")
    console.log("Folder already exists");
}
if (!fs.existsSync(rohanzip)) {
    fs.mkdirSync(rohanzip);
    console.log("Folder created:", rohanzip);
    fs.readFileSync();
} 
else {
    console.log(" rohanzip filed read suscussfully")
    console.log("Folder already exists");
}
if (!fs.existsSync(catjpg)) {
    fs.mkdirSync(catjpg);
    console.log("Folder created:", catjpg);
    fs.readFileSync();
}
 else {
    console.log("catjpg file is read sucussfullly")
    console.log("Folder already exists");
}



// files.forEach(file => {
//     const oldPath = `${currentadress}/${namejpg}`;
//     // aauta folfer lagna sakeyo but sabia lai loop chlau nu ho but i have no idea
//     const newPath = `${newadress}/${collection}`;



//     fs.renameSync(oldPath, newPath);
//     console.log(`Moved: ${file}`);
// });


