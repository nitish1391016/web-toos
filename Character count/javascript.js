let text=document.getElementById("textscreen");
let totalchar=document.getElementById("totalchar");
let remchar=document.getElementById("remchar");

text.addEventListener("keypress",()=>{
    updateCounter();
});

function updateCounter(){
    totalchar.innerText=text.value.length;
    totallength=text.getAttribute("maxlength");
    remchar.innerText=text.getAttribute("maxlength")-text.value.length;
}