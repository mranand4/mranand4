const THEME = {
    dark : "dark-theme",
    light : "light-theme",
    retro : "retro-theme"
}

let lastVisibleViewId = "home";
let lastSelectedMenuItem;

function Project(title, description, techStack, liveLink, srcCodeLink, media) {
    this.title = title;
    this.description = description;
    this.techStack = techStack;
    this.liveLink = liveLink;
    this.srcCodeLink = srcCodeLink;
    this.media = media;
}

function getProjectItem(project) {

    let container = document.createElement("div");
    let leftContainer = document.createElement("section");
    let rightContainer = document.createElement("section");
    let media = document.createElement("img");
    let title = document.createElement("h2");
    let description = document.createElement("p");
    let srcCodeBtn = document.createElement("a");
    let liveLinkBtn = document.createElement("a");
    let techStackContainer = document.createElement("ul");

    container.className = "project-container";

    media.setAttribute("src", project.media);
    title.innerText = project.title;
    description.innerText = project.description;
    liveLinkBtn.innerText = "View Project";
    srcCodeBtn.innerText = "Source Code";
    for(stack of project.techStack) {
        let li = document.createElement("li");
        li.innerText = stack;
        techStackContainer.appendChild(li);
    }

    leftContainer.appendChild(media);
    rightContainer.appendChild(title);
    rightContainer.appendChild(description);
    rightContainer.appendChild(techStackContainer);
    if(project.liveLink) {
        liveLinkBtn.setAttribute("href", project.liveLink);
        liveLinkBtn.setAttribute("target", "_blank");
        rightContainer.append(liveLinkBtn);
    }
    if(project.srcCodeLink) {
        srcCodeBtn.setAttribute("href", project.srcCodeLink);
        srcCodeBtn.setAttribute("target", "_blank");
        rightContainer.append(srcCodeBtn);
    }

    container.append(leftContainer);
    container.append(rightContainer);

    return container;

}

function initViewSwitch() {

    lastSelectedMenuItem = document.querySelector("nav > ul > li:first-child > label");
    let links = [...document.querySelectorAll("nav > ul > li > label"), ...document.querySelectorAll("#mobile-menu-container > ul > li > label")];

    for(let i of links)
        i.addEventListener("click", (e) => {

            let id = e.target.innerText.toLowerCase().trim();
            document.querySelector("nav > label:first-child").innerText = e.target.innerText.trim();
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
    let mobileMenu = mobileMenuContainer.querySelector("ul");

    menuBtn.addEventListener("click", () => {
        mobileMenuContainer.style.opacity = 0;
        mobileMenuContainer.setAttribute("class", "view-visible");
        setTimeout(() => {
            mobileMenuContainer.style.opacity = 1;
            setTimeout(() => {
                mobileMenu.style.bottom = 0;
            }, 400);
        }, 100);
    });

    mobileMenuContainer.addEventListener("click", () => {
        mobileMenu.style.bottom = "-800px"
        setTimeout(() => {
            mobileMenuContainer.style.opacity = 0;
            setTimeout(() => {
                mobileMenuContainer.setAttribute("class", "view-invisible");
            }, 100);
        }, 400);
    });

}

function initWorkView() {

    let w1 = new Project("Weather App", "Handy weather app. People can see current weather, daily and weekly forecast of any given place. Locations can be saved (or marked as home for quick glance). Dark theme and light theme. Search autocomplete. Temperature conversion.", ["ReactJS", "ExpressJS", "Rest API", "Heroku"], "https://simple-weather-4.herokuapp.com/", "https://github.com/mranand4/reactjs-expressjs-weather-app", "assets/media/weather_app.gif");
    let p = getProjectItem(w1);
    document.querySelector("#work > div").appendChild(p);
    document.querySelector("#work > div").appendChild(getProjectItem(w1));
    document.querySelector("#work > div").appendChild(getProjectItem(w1));
    document.querySelector("#work > div").appendChild(getProjectItem(w1));

}

let setTheme = (name) => {document.querySelector("body").className = THEME[name];}

window.onload = () => {
    initViewSwitch();
    initMobileMenu();
    initWorkView();
}