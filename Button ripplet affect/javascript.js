// selecting the selector with help of class(or we can by id)
let bunch=document.querySelector(".btn");



// putting event listener and trasing 
bunch.addEventListener("mouseover",(event)=>{
    // offsetLeft-gives the left mostposition of button
    // offsetTop-give the top of button position
    // pageX and pageY give action postion of mouse
    let y=event.pageY-bunch.offsetTop;
    let x=event.pageX-bunch.offsetLeft;
    console.log(x+" "+y);
    // setting property of the css top and left
    bunch.style.setProperty("--yPos",y+"px");
    bunch.style.setProperty("--xPos",x+"px");
    let a=Math.random()*100+57;
    let b=Math.random()*100+57;
    let c=Math.random()*100+57;
    let aa=Math.random()*100+57;
    let bb=Math.random()*100+57;
    let cc=Math.random()*100+57;

    bunch.style.setProperty("--p1",a);
    bunch.style.setProperty("--p2",b);
    bunch.style.setProperty("--p3",c);
});