console.log(" rohan is ahcker")
console.log(" kishor is hacker")

 setTimeout(()=>{
    console.log(" i am inside a set time out")
 }, 2000);
 setTimeout(()=>{
    console.log(" i am inside a set time out")
 }, 2000);

 console.log("The end")


 const fn =()=>{

    console.log("nothing")


 }



const callback =( arg,fn)=>{
    console.log(arg);
    fn()
}


 const loadscript = ( src , callback)=>{
    let sc = document.createElement("script")
sc.src = src;
sc.onload = callback ("harry",fn);
document.head.append(sc)

} 
 loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)