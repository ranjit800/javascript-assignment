function square()
    {
    var a,Square,Cube;
    a = parseInt(document.getElementById ("first").value);
    //Formulae for Square and Cube
    Square = a*a;
    Cube = a*a*a;
    document.getElementById ("num").innerHTML ="Square of "+a+" is : "+Square;
    document.getElementById ("num1").innerHTML ="Cube of "+a+" is : " +Cube;
    }