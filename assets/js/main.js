/*global document*/
/*jshint esversion: 6*/

var mainContainer = document.createElement("div"),
    /*Navigation bar*/
    nav = document.createElement("nav"),
    navDiv = document.createElement("div"),
    
    navLeft = document.createElement("div"),
    mediumLink = document.createElement("a"),
    mediumLogo = document.createElement("span"),
    postImgLink = document.createElement("a"),
    postImg = document.createElement("img"),
    followingBtn = document.createElement("button"),
    FollowingText = document.createTextNode("Following"),
    
    navRight = document.createElement("div"),
    userAvatar = document.createElement("img");
    

mainContainer.classList.add("wrapper");

navDiv.classList.add("inner");
navDiv.classList.add("paddingleft20");
navDiv.classList.add("paddingleft20");

navLeft.setAttribute("id", "nav-left");
navLeft.classList.add("float-left");

mediumLink.setAttribute("href", "https://medium.com/");
mediumLink.classList.add("medium-link");

mediumLogo.classList.add("logo");

postImg.setAttribute("src", "assets/images/how-to-post.png");

followingBtn.setAttribute("id", "following-dd-btn");
followingBtn.classList.add("round-plain-green");

postImgLink.setAttribute("href", "https://medium.com/laboratoria-how-to?source=logo-9931a0fa1ad0---c0d34b54fadb");
postImgLink.setAttribute("target", "_blank");

navRight.setAttribute("id", "nav-right");
navRight.classList.add("float-right");

userAvatar.setAttribute("src", "assets/images/user-avatar.jpeg");

mainContainer.appendChild(nav);
nav.appendChild(navDiv);
navDiv.appendChild(navLeft);
navLeft.appendChild(mediumLink);
postImgLink.appendChild(postImg);
mediumLink.appendChild(mediumLogo);
navLeft.appendChild(postImgLink);
followingBtn.appendChild(FollowingText);
navLeft.appendChild(followingBtn);
navDiv.appendChild(navRight);
document.body.appendChild(mainContainer);

var icons = [{
    container: "following-dd-btn",
    className: "fa-chevron-down",
    link: "#"
}, {
    container: "nav-left",
    className: "fa-twitter",
    link: "https://twitter.com/LaboratoriaLA"
}, {
    container: "nav-left",
    className: "fa-instagram",
    link: "https://www.instagram.com/laboratoria.la/"
}, {
    container: "nav-left",
    className: "fa-facebook",
    link: "https://www.facebook.com/laboratoria.la/"
}, {
    container: "nav-right",
    className: "fa-search",
    link: "#"
}, {
    container: "nav-right",
    className: "fa-bell-o",
    link: "#"
}];

var container = icons.map((e) => e.container),
    clss = icons.map((e) => e.className),
    href = icons.map((e) => e.link),
    i;

function iconMaker(containerId, clssName, link) {
    "use strict";
    var anchor = document.createElement("a"),
        icon = document.createElement("span");

    if (containerId === "nav-left") {
        icon.classList.add("nav-left-i");
    } else if (containerId === "nav-right") {
        icon.classList.add("nav-right-i");
    }

    icon.classList.add("fa");
    icon.classList.add(clssName);
    anchor.setAttribute("href", link);

    if (clssName === "fa-twitter" || clssName === "fa-instagram" || clssName === "fa-facebook") {
        anchor.setAttribute("target", "_blank");
    } 
    
    if (clssName === "fa-twitter" || clssName === "fa-instagram") {
        icon.classList.add("paddingright15");
    }
    
    if (clssName === "fa-search" || clssName === "fa-bell-o") {
        icon.classList.add("paddingright22");
    }

    anchor.appendChild(icon);
    document.getElementById(containerId).appendChild(anchor);
}

for (i = 0; i < icons.length; i += 1) {
    iconMaker(container[i], clss[i], href[i]);
}

navRight.appendChild(userAvatar);