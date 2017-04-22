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
    userAvatar = document.createElement("img"),

    article = document.createElement("article"),
    /*Header*/
    header = document.createElement("header"),
    bloggerImg = document.createElement("img"),
    headerDiv = document.createElement("div"),
    bloggerLink = document.createElement("a"),
    bloggerName = document.createTextNode("Belen Recabal"),
    followBtn = document.createElement("button"),
    followText = document.createTextNode("Follow"),
    aboutDiv = document.createElement("div"),
    aboutSpan = document.createElement("span"),
    aboutSpanDate = document.createElement("span"),
    aboutSpanTime = document.createElement("span"),
    aboutBlogger = document.createTextNode("Teaching Assistant at Laboratoria. Trabajando para ver a más mujeres en el mundo de la programación."),
    detailsDiv = document.createElement("div"),
    detailsSpan = document.createElement("span"),
    date = document.createTextNode("Mar 21 · 6 min read"),
    /*Article*/
    articleDiv = document.createElement("div"),
    articleTitle = document.createElement("h1"),
    articleTitleNode = document.createTextNode("Hazlo con estilo : Tipografías, iconos y sprite"),
    articleP = document.createElement("p"),
    articleContent = document.createTextNode("Te imaginas el mundo sin tipos de letra, tamaños, colores, o sin iconos , nada, nada sería iguaaaaaal!!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestro desarrollos web, pero la pregunta que nos hacemos es, ¿existen reglas, hay una mejor forma de hacerlo, no sé que tipografía usar? Tengo muchas preguntas y pocas respuestas!!"),
    articlePB = document.createElement("p"),
    articleContentB = document.createTextNode("Vamos paso a paso…");
/*Navigation bar*/
mainContainer.classList.add("wrapper");
mainContainer.appendChild(nav);

navDiv.classList.add("inner");
navDiv.classList.add("paddingleft20");
navDiv.classList.add("paddingleft20");
nav.appendChild(navDiv);

navLeft.setAttribute("id", "nav-left");
navLeft.classList.add("float-left");
navDiv.appendChild(navLeft);

mediumLink.setAttribute("href", "https://medium.com/");
mediumLink.classList.add("medium-link");
navLeft.appendChild(mediumLink);

mediumLogo.classList.add("logo");
mediumLink.appendChild(mediumLogo);

postImg.setAttribute("src", "assets/images/how-to-post.png");
navLeft.appendChild(postImgLink);

followingBtn.setAttribute("id", "following-dd-btn");
followingBtn.classList.add("round-plain-green");
followingBtn.appendChild(FollowingText);
navLeft.appendChild(followingBtn);

postImgLink.setAttribute("href", "https://medium.com/laboratoria-how-to?source=logo-9931a0fa1ad0---c0d34b54fadb");
postImgLink.setAttribute("target", "_blank");
postImgLink.appendChild(postImg);

navRight.setAttribute("id", "nav-right");
navRight.classList.add("float-right");
navDiv.appendChild(navRight);

userAvatar.setAttribute("src", "assets/images/user-avatar.jpeg");
userAvatar.classList.add("round");
/*Header*/
mainContainer.appendChild(article);
article.appendChild(header);
bloggerImg.setAttribute("src", "assets/images/belen-recabal.jpeg");
bloggerImg.classList.add("round");
header.appendChild(bloggerImg);

headerDiv.classList.add("blogger-info");
bloggerLink.setAttribute("href", "#");
bloggerLink.appendChild(bloggerName);
headerDiv.appendChild(bloggerLink);

followBtn.classList.add("round-green-border");
headerDiv.appendChild(followBtn);
followBtn.appendChild(followText);

aboutSpan.appendChild(aboutBlogger);
aboutDiv.appendChild(aboutSpan);
aboutDiv.classList.add("about-blogger");
aboutDiv.appendChild(aboutSpan);
headerDiv.appendChild(aboutDiv);

aboutSpanDate.classList.add("about-date");
aboutSpanDate.appendChild(date);

detailsDiv.appendChild(aboutSpanDate);
aboutDiv.appendChild(detailsDiv);

header.appendChild(headerDiv);
articleTitle.appendChild(articleTitleNode);

articleDiv.classList.add("article-wrapper");
articleDiv.appendChild(articleTitle);
article.appendChild(articleDiv);

articleP.appendChild(articleContent);
articleDiv.appendChild(articleP);

articlePB.appendChild(articleContentB);
articleDiv.appendChild(articlePB);

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