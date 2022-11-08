const navbarE1=document.querySelector(".navbar");
// console.log(navbarE1);
const bottomcontainerE1=document.querySelector(".bottom-container");

window.addEventListener("scroll",()=>{
    // console.log(window.scrollY);
    // bottomcontainerE1.offsetTop is the coordinate of the top of bottom CredentialsContainer
    // navbarE1.offsetHeight is height of the navbar
    // 50 is margin between picture and bottom container

    if(window.scrollY > bottomcontainerE1.offsetTop-navbarE1.offsetHeight-50)
        navbarE1.classList.add("active");//adding classname active to the navbar div
   else
       navbarE1.classList.remove("active");
    // removing active class from navbar div
});
