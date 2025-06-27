let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    // alert(" i was clicked. yayy!!")
    document.querySelector(".box").innerHTML = "<b> yayy you were clicked</b> enjoy your click! "
})
button.addEventListener("contextmenu",()=>{
    alert(" don't hack us by rigtht click !")
    // document.querySelector(".box").innerHTML = "<b> yayy you were clicked</b> enjoy your click! "
})
document.addEventListener("keydown",(e)=>{
    // alert(" don't hack us by rigtht click !")
    console.log(e,e.key,e.keyCode)
    // document.querySelector(".box").innerHTML = "<b> yayy you were clicked</b> enjoy your click! "
})