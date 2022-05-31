
function str(w){
    if( w.length === 0 || w === "0"){
        console.log("error ")
    }else{
     console.log(w.split(' ').join('').length)
    }
 }
 
 str("Lorem Ipsum")