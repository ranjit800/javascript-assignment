function printString(str, ch, count) {
    var occ = 0, i;

    if (count == 0) {
        console.log(str);
        return;
    }


    for (i = 0; i < str.length; i++) {


        if (str.charAt(i) == ch)
            occ++;


        if (occ == count)
            break;
    }


    if (i < str.length - 1)
        document.write(str.subString(i + 1));


    else
        console.log("Empty string");
}


function str(w){
    if( w.length === 0 || w === "0"){
        console.log("error ")
    }else{
     console.log(w.split(' ').join('').length)
    }
 }
 
 str("Lorem Ipsum")