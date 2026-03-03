ASync/await:

function orderFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve("Food ordered");
    }, 2000);
    });
   

}


function prepareFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve("Food prepared");
    }, 3000);
    });

}


function deliverFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve("Food delivered");
    }, 1000);
    });

}


 
 async function foodDelivery(){

    const orderFoodStatus= await orderFood();
    console.log(orderFoodStatus);
    const prepareFoodStatus= await prepareFood();
    console.log(prepareFoodStatus);
    const deliverFoodStatus= await deliverFood();
    console.log(deliverFoodStatus);


 }

 foodDelivery();
 