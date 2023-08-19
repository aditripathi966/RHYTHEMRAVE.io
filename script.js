let side=document.querySelector(".menuu")

 let menu = document.querySelector(".ri-menu-line")

 menu.addEventListener("click",function(){
         side.style.right="-4%"
         side.style.display="initial"
 })
 let cancel=document.querySelector(".ri-close-line")
 cancel.addEventListener("click",function(){
    side.style.right="-200%"
    side.style.display="none"
 })

   
