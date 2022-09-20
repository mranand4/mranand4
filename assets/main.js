let lastVisibleViewId = "home";
let lastSelectedMenuItem;
let navbarHeight = 0;

function initNavbarHeight() {

    navbarHeight = document.querySelector("header > nav").offsetHeight;
    console.log(navbarHeight);

}

function initViewSwitch() {

    lastSelectedMenuItem = document.querySelector("nav > ul > li:first-child > label");
    let links = [...document.querySelectorAll("nav > ul > li > label")];

    for(let i of links)
        i.addEventListener("click", (e) => {

            let id = e.target.innerText.toLowerCase();
            document.getElementById(lastVisibleViewId).style.opacity = 0;
            document.getElementById(id).style.opacity = 0;

            setTimeout(() => {
                
                lastSelectedMenuItem.className = "";
                document.getElementById(lastVisibleViewId).className = "view-invisible";
                    
                document.getElementById(id).className = "view-visible";
                e.target.className = "selected";   
                lastVisibleViewId = id;
                lastSelectedMenuItem = e.target;


                setTimeout(() => {
                    document.getElementById(id).style.opacity = 1; 
                }, 250);
                    

            }, 250);

        });

}

function initMobileMenu() {

    let menuBtn = document.querySelector("nav > label:last-child");
    let mobileMenuContainer = document.querySelector("#mobile-menu-container");

    menuBtn.addEventListener("click", () => {
        mobileMenuContainer.setAttribute("class", "view-visible");
    });

}

window.onload = () => {
    initViewSwitch();
    initMobileMenu();
    initNavbarHeight();
}