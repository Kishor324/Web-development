     document.querySelector(".chlid").addEventListener("click", (e) => {
 e.stopPropagation()
            alert(" chlid was clicled")
        }
        )
        document.querySelector(".childcontainer").addEventListener("click", (e) => {
e.stopPropagation()
            alert(" chlidconatiner was clicked")
        }
        )
        document.querySelector(".container").addEventListener("click", (e) => {
e.stopPropagation()
            alert(" conatiner was clicked")
        }
        )
        
        function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
    setInterval(()=>{
 document.querySelector(".childcontainer").Style.background =getRandomColor ;


}, 3000);