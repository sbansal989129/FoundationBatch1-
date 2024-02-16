
// function makeMaggi(callback){
//     console.log("start");
//     console.log("we are making maggi ")
//     setTimeout(function(){
//      callback();
//     } , 1)
//     console.log("finish")
// }

// function eating(){
//     console.log("I am eating maggie ")
// }

// makeMaggi(eating)

function makeMaggi(raw){

    let maggiePromise = new Promise(function(res , rej ){
        
        if( raw ){
            setTimeout(function(){
                res("Maggi is here ")
            },2000)
        }else{
            rej("Maggi is not here ")
        }
    }) 
    
    return maggiePromise;
}
// console.log("start");
// makeMaggi("maggi").then(function(resMsg ){
//     console.log(resMsg);
// }).catch(function(err){
//     console.log(err);
// })

// console.log("end")


async function learn(){
    let msg = await makeMaggi("maggi")

    console.log(msg);
}

learn();

