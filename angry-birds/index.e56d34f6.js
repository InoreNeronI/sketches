(function () {
var $dbcc5a6fc87cfe5a$exports = {};
const $dbcc5a6fc87cfe5a$var$root = document.documentElement;
const $dbcc5a6fc87cfe5a$var$storage = window.localStorage;
const $dbcc5a6fc87cfe5a$var$icon_screen = document.querySelector(".screen i");
const $dbcc5a6fc87cfe5a$var$setScreen = (screen)=>{
    if (screen === "normal") {
        $dbcc5a6fc87cfe5a$var$root.classList.remove("fullscreen");
        $dbcc5a6fc87cfe5a$var$root.classList.add("normal");
        $dbcc5a6fc87cfe5a$var$storage.setItem("screen", "normal");
        $dbcc5a6fc87cfe5a$var$icon_screen.classList.remove("bi-arrows-angle-contract");
        $dbcc5a6fc87cfe5a$var$icon_screen.classList.add("bi-arrows-angle-expand");
    } else {
        $dbcc5a6fc87cfe5a$var$root.classList.remove("normal");
        $dbcc5a6fc87cfe5a$var$root.classList.add("fullscreen");
        $dbcc5a6fc87cfe5a$var$storage.setItem("screen", "fullscreen");
        $dbcc5a6fc87cfe5a$var$icon_screen.classList.remove("bi-arrows-angle-expand");
        $dbcc5a6fc87cfe5a$var$icon_screen.classList.add("bi-arrows-angle-contract");
    }
};
document.querySelector(".screen").onclick = ()=>{
    let screens = [
        "normal",
        "fullscreen"
    ];
    screens.splice(screens.indexOf($dbcc5a6fc87cfe5a$var$storage.getItem("screen")), 1);
    $dbcc5a6fc87cfe5a$var$setScreen(screens.pop());
};
$dbcc5a6fc87cfe5a$var$setScreen($dbcc5a6fc87cfe5a$var$storage.getItem("screen") || "normal");
const $dbcc5a6fc87cfe5a$var$chooser_theme = document.querySelector(".theme");
$dbcc5a6fc87cfe5a$var$chooser_theme.value = $dbcc5a6fc87cfe5a$var$storage.getItem("theme") || "high";
$dbcc5a6fc87cfe5a$var$chooser_theme.onchange = (e)=>{
    $dbcc5a6fc87cfe5a$var$storage.setItem("theme", e.target.value);
    let themes = [
        "fire",
        "earth",
        "air",
        "water",
        "high"
    ];
    themes.splice(themes.indexOf(e.target.value), 1);
    themes.forEach((theme)=>$dbcc5a6fc87cfe5a$var$root.classList.remove(theme));
    $dbcc5a6fc87cfe5a$var$root.classList.add(e.target.value);
};
$dbcc5a6fc87cfe5a$var$chooser_theme.dispatchEvent(new Event("change"));
const $dbcc5a6fc87cfe5a$var$icon_toggle = document.querySelector(".toggle i");
const $dbcc5a6fc87cfe5a$var$images = document.querySelectorAll("image, img, svg");
const $dbcc5a6fc87cfe5a$var$setToggle = (toggle)=>{
    if (toggle === "inset") {
        $dbcc5a6fc87cfe5a$var$root.classList.remove("reverse");
        $dbcc5a6fc87cfe5a$var$root.classList.add("inset");
        $dbcc5a6fc87cfe5a$var$storage.setItem("toggle", "inset");
        $dbcc5a6fc87cfe5a$var$icon_toggle.classList.remove("bi-toggle2-on");
        $dbcc5a6fc87cfe5a$var$icon_toggle.classList.add("bi-toggle2-off");
        $dbcc5a6fc87cfe5a$var$images.forEach((el)=>el.style.filter = "invert(0)");
    } else {
        if (toggle === "reverse") $dbcc5a6fc87cfe5a$var$images.forEach((el)=>el.style.filter = "invert(1)");
        $dbcc5a6fc87cfe5a$var$root.classList.remove("inset");
        $dbcc5a6fc87cfe5a$var$root.classList.add("reverse");
        $dbcc5a6fc87cfe5a$var$storage.setItem("toggle", "reverse");
        $dbcc5a6fc87cfe5a$var$icon_toggle.classList.remove("bi-toggle2-off");
        $dbcc5a6fc87cfe5a$var$icon_toggle.classList.add("bi-toggle2-on");
    }
};
document.querySelector(".toggle").onclick = ()=>{
    let toggles = [
        "inset",
        "reverse"
    ];
    toggles.splice(toggles.indexOf($dbcc5a6fc87cfe5a$var$storage.getItem("toggle")), 1);
    $dbcc5a6fc87cfe5a$var$setToggle(toggles.pop());
};
$dbcc5a6fc87cfe5a$var$setToggle($dbcc5a6fc87cfe5a$var$storage.getItem("toggle") || "inset");
document.querySelectorAll(".nav-group-item").forEach((value)=>{
    const pathArray = window.location.pathname.split("/");
    pathArray.splice(pathArray.indexOf("index.html"), 1);
    const classList = Array.from(value.classList);
    classList.splice(classList.indexOf("nav-group-item"), 1);
    if (pathArray.pop() === classList.pop()) value.classList.add("active");
    value.addEventListener("click", (e)=>{
        e.target.childNodes.forEach((value)=>{
            if (value.tagName === "A") {
                // @see https://stackoverflow.com/a/1421968
                const evt = document.createEvent("MouseEvents");
                evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                value.dispatchEvent(evt);
            }
        });
    });
});

})();
//# sourceMappingURL=index.e56d34f6.js.map
