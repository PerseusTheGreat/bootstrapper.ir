(function (document,window) {
    var head = document.head;
    
    var span = document.createElement("span");
    span.className = "fa-solid fa-fw";

    head.appendChild(span);
    var fontLoaded = window.getComputedStyle(span).fontFamily === "Font Awesome 6 Free";
    head.removeChild(span);

    if (!fontLoaded) {
        var linkFont = document.createElement("link");

        linkFont.type = "text/css";
        linkFont.rel = "stylesheet";
        linkFont.href = "assets/fonts/awesome/css/all.min.css";

        head.appendChild(linkFont);
    }

    var div = document.createElement("div");
    div.className = "hidden d-none";

    head.appendChild(div);
    var cssLoaded = window.getComputedStyle(div).display === "none";
    head.removeChild(div);

    if (!cssLoaded) {
        var linkBS = document.createElement("link");

        linkBS.type = "text/css";
        linkBS.rel = "stylesheet";
        linkBS.href = "assets/styles/bootstrap.min.css";

        head.appendChild(linkBS);
    }

    var style = head.getElementsByTagName('style')[0];
    head.removeChild(style);
    head.appendChild(style);
})(document,window);