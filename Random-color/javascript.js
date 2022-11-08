const containerE1=document.querySelector(".container");
// console.log(containerE1);

for (let index = 0; index < 30; index++) {
    const colorElement=document.createElement("div");
    colorElement.classList.add("box");

    // colorElement.style.backgroundColor("#000000");
    containerE1.appendChild(colorElement);    
}

change();
function change(){
    let containers=document.querySelectorAll(".box");
    containers.forEach((x)=>{
        const newColorCode=generateRandomColor();
        x.style.backgroundColor=newColorCode;
        x.innerText=newColorCode;
    });

}
function generateRandomColor(){
    let res="#";
    let chars="0123456789abcdef";
    for(let i=0;i<6;i++){
        let ind=Math.ceil(Math.random()*15);
        res+=chars.substring(ind,ind+1);
    }
    return res;
}

const button=document.querySelector(".button");

button.addEventListener('click',()=>{change()});