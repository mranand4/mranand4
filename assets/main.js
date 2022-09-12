let lastVisibleViewId = "home";
let lastSelectedMenuItem = ""

function initViewSwitch() {

    lastSelectedMenuItem = document.querySelector("nav > ul > li:first-child > label");
    let links = [...document.querySelectorAll("nav > ul > li > label")];

    for(let i of links)
        i.addEventListener("click", (e) => {
            let id = e.target.innerText.toLowerCase();

            lastSelectedMenuItem.className = "";
            document.getElementById(lastVisibleViewId).className = "view-invisible";

            document.getElementById(id).className = "view-visible";
            e.target.className = "selected";

            lastVisibleViewId = id;
            lastSelectedMenuItem = e.target;

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
}