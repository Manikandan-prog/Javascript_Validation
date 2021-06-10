


function validation()
{
    var uname=document.getElementById("uname").value;
    var ucontact=document.getElementById("ucontact").value;
    var uemail =document.getElementById("uemail").value;
    var upass=document.getElementById("upass").value;
    
   
    if(uname =="")
    {
        document.getElementById("ename").innerHTML="Empty Field";
        return false;
    }

    if(ucontact =="")
    {
        document.getElementById("econtact").innerHTML="Empty Field";
        return false;
    }

    if(ucontact.length!=10)
    {
        document.getElementById("econtact").innerHTML="Length should be equal to 10 !";
        return false;
    }

    if(uemail == "")
    {
        document.getElementById("eemail").innerHTML="Empty Field";
        return false;
    }

    if(upass == "")
    {
        document.getElementById("epass").innerHTML="Empty Field";
        return false;
    }

    if(upass.length<=6)
    {
        document.getElementById("epass").innerHTML="Password length should be more than 6 !";
        return false;
    }


    return true;
    
}
