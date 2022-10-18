function fn(){
    document.getElementById("more").style.display = "none";
    for (const element of document.getElementsByClassName("hide")){
        element.style.display="inline-block";
     }
    
}

