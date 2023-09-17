
const choose = document.getElementById("select");
const memberdepent = document.getElementById("memberdepent");
const managerdepent = document.getElementById("managerdepent");

choose.addEventListener("change",function(){
    const selectvariable =choose.value;

    if(selectvariable ==="manager"){
        managerdepent.style.display ="block";
        memberdepent.style.display="none";


    }
    else{
        managerdepent.style.display ="none";
        memberdepent.style.display="block";

    }