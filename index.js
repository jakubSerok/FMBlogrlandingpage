const navMenuLinks = document.querySelectorAll('.nav-menu li');

navMenuLinks.forEach((link)=>{
    const dropdownMenu = link.querySelector(".dropdown-menu");
    link.addEventListener("click",()=>{
        link.classList.toggle("active");
        dropdownMenu.classList.toggle("hidden");
    });
})