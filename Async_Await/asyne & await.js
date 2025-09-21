async function myfun() {

    console.log("hello")

}
// yasma aafia promsis ko propety full fill garxa


function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log("Weather data");
            resolve(200);
        }, 2000);
    });

}
async function getweatherdata() {

    await api();// 1st call
    await api();// 2st call

}

function getData(dataId) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Data", dataId)
            resolve("success")

        }, 2000);

    });
}

//async=await
async function getAlldata() {
    console.log("getting data1.....")
    await getData(1);
    console.log("getting data2.....")

    await getData(2);

    console.log("getting data3.....")
    await getData(3);
    console.log("getting data4.....")
    await getData(4);
    console.log("getting data5.....")

    await getData(5);
    console.log("getting data6.....")
    await getData(6);

} 

//iife used for remove unnessary varibale

(

    async function () {
        console.log("getting data1.....")
    await getData(1);
    console.log("getting data2.....")

    await getData(2);
    
    console.log("getting data3.....")
    await getData(3);
    console.log("getting data4.....")
    await getData(4);
    console.log("getting data5.....")
    
    await getData(5);
    console.log("getting data6.....")
    await getData(6);
    
} 
)() ;