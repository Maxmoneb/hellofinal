let da1=document.getElementById("da1");
let da2=document.getElementById("da2");
let da3=document.getElementById("da3");
let da4=document.getElementById("da4");

document.getElementById("btn34").onclick = function(){


    if(document.getElementById("1day").checked){
        da1.style.display="block";
        da2.style.display="none";
        da3.style.display="none";
        da4.style.display="none";

    }
    else if(document.getElementById("2day").checked){
        da2.style.display="block";
        da1.style.display="none";
        da3.style.display="none";
        da4.style.display="none";

    }
    else if(document.getElementById("3day").checked){
        da3.style.display="block";
        da2.style.display="none";
        da1.style.display="none";
        da4.style.display="none";

    }
    else if(document.getElementById("4day").checked){
        da4.style.display="block";
        da2.style.display="none";
        da3.style.display="none";
        da1.style.display="none";

    }
    else{
        document.getElementsByClassName("textbox-day").innerHTML = "select the number of days";
    }


}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }