var clicks = 0;
    function next() 
    {        
    var x=document.getElementById("slide").style.marginLeft;
        clicks += 1;
        switch(clicks)
        {
        case 1: x="-1430px";
                      document.getElementById("mimg").src = document.getElementById("img6").src;
        break;
        case 2: x="-2880px";
                     document.getElementById("mimg").src = document.getElementById("img11").src;
        break;
        case 3: x="-4000px";
                        document.getElementById("mimg").src = document.getElementById("img15").src;
        break;
         case 4: x="-5000px";
                        document.getElementById("mimg").src = document.getElementById("img21").src;
        break;
           }
         document.getElementById("slide").style.marginLeft=x;
};

    function previous()
     {    
 var x=document.getElementById("slide").style.marginLeft;
if(x=="-1430px")
{
x="0px";
clicks=0;
document.getElementById("mimg").src = document.getElementById("img1").src;
}
if(x=="-2880px")
{
x="-1430px";
clicks=1;
document.getElementById("mimg").src = document.getElementById("img6").src;
}

if(x=="-4000px")
{
x="-2880px";
clicks=2;
    document.getElementById("mimg").src = document.getElementById("img11").src;
}

if(x=="-5000px")
{
x="-4000px";
clicks=3;
    document.getElementById("mimg").src = document.getElementById("img15").src;
}

document.getElementById("slide").style.marginLeft=x;
};

function imgclick()
{
var s= event.target.src;
/*var s= event.srcElement.src;*/
document.getElementById("mimg").src = s;
};


