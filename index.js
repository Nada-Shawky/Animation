let n1 = document.getElementById("navbarDropdownMenuLink1"),
    n2 = document.getElementById("navbarDropdownMenuLink2"),
    n3 = document.getElementById("navbarDropdownMenuLink3"),
    n4 = document.getElementById("navbarDropdownMenuLink4");

n1.onmouseover = function(){
    n3.style.display="block";
}
n1.onmouseout = function(){
    n3.style.display="none";
}

n2.onmouseover = function(){
    n4.style.display="block";
}
n2.onmouseout = function(){
    n4.style.display="none";
}

// navbar
let nav = document.getElementById("navv")
window.onscroll =function(){
    if(window.pageYOffset > 50){
        nav.classList.add("nav3")
    }else{
        nav.classList.remove("nav3")
    }
}

/*
==================================
scroll to top
==================================
*/

