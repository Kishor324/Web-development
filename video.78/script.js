console.log(" This is try to make hacker interface by using js")


const messages = [
    "Initializing Hacking...",
    " Reading your Files...",
    "Password files Dectected...",
    "Sending all passwords and personal files to server...",
    "cleaning up..."

];
const output = document.getElementById("output");

let i = 0;

//    let 
function showmessage() {
    if (i < messages.length) {


        //  let messages =  message[i] + "<span class='blink'> ...</span>";

        output.innerHTML += messages[i] + "<span class='blink'> ...</span> <br><br>";

        //  ";
        i++;

        const delay = (Math.random() * 6000) + 1000;
        // it's work as a numbers by 1 to 7 tei vaye ra random use tesma ma interface ma help hunxa
        //    setTimeout(() => {

        //    }, timeout);
        setTimeout(showmessage, delay);

        //  setInterval((x) => {

        //  }, 4000);
    }


}

showmessage();



