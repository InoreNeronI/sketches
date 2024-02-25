var $66e8214de94ffabc$exports = {};
const $66e8214de94ffabc$var$root = document.documentElement;
const $66e8214de94ffabc$var$storage = window.localStorage;
const $66e8214de94ffabc$var$icon_screen = document.querySelector(".screen i");
const $66e8214de94ffabc$var$setScreen = (screen)=>{
    if (screen === "normal") {
        $66e8214de94ffabc$var$root.classList.remove("fullscreen");
        $66e8214de94ffabc$var$root.classList.add("normal");
        $66e8214de94ffabc$var$storage.setItem("screen", "normal");
        $66e8214de94ffabc$var$icon_screen.classList.remove("bi-arrows-angle-contract");
        $66e8214de94ffabc$var$icon_screen.classList.add("bi-arrows-angle-expand");
    } else {
        $66e8214de94ffabc$var$root.classList.remove("normal");
        $66e8214de94ffabc$var$root.classList.add("fullscreen");
        $66e8214de94ffabc$var$storage.setItem("screen", "fullscreen");
        $66e8214de94ffabc$var$icon_screen.classList.remove("bi-arrows-angle-expand");
        $66e8214de94ffabc$var$icon_screen.classList.add("bi-arrows-angle-contract");
    }
};
document.querySelector(".screen").onclick = ()=>{
    let screens = [
        "normal",
        "fullscreen"
    ];
    screens.splice(screens.indexOf($66e8214de94ffabc$var$storage.getItem("screen")), 1);
    $66e8214de94ffabc$var$setScreen(screens.pop());
};
$66e8214de94ffabc$var$setScreen($66e8214de94ffabc$var$storage.getItem("screen") || "normal");
const $66e8214de94ffabc$var$chooser_theme = document.querySelector(".theme");
$66e8214de94ffabc$var$chooser_theme.value = $66e8214de94ffabc$var$storage.getItem("theme") || "high";
$66e8214de94ffabc$var$chooser_theme.onchange = (e)=>{
    $66e8214de94ffabc$var$storage.setItem("theme", e.target.value);
    let themes = [
        "fire",
        "earth",
        "air",
        "water",
        "high"
    ];
    themes.splice(themes.indexOf(e.target.value), 1);
    themes.forEach((theme)=>$66e8214de94ffabc$var$root.classList.remove(theme));
    $66e8214de94ffabc$var$root.classList.add(e.target.value);
};
$66e8214de94ffabc$var$chooser_theme.dispatchEvent(new Event("change"));
const $66e8214de94ffabc$var$icon_toggle = document.querySelector(".toggle i");
const $66e8214de94ffabc$var$images = document.querySelectorAll("image, img, svg");
const $66e8214de94ffabc$var$setToggle = (toggle)=>{
    if (toggle === "inset") {
        $66e8214de94ffabc$var$root.classList.remove("reverse");
        $66e8214de94ffabc$var$root.classList.add("inset");
        $66e8214de94ffabc$var$storage.setItem("toggle", "inset");
        $66e8214de94ffabc$var$icon_toggle.classList.remove("bi-toggle2-on");
        $66e8214de94ffabc$var$icon_toggle.classList.add("bi-toggle2-off");
        $66e8214de94ffabc$var$images.forEach((el)=>el.style.filter = "invert(0)");
    } else {
        if (toggle === "reverse") $66e8214de94ffabc$var$images.forEach((el)=>el.style.filter = "invert(1)");
        $66e8214de94ffabc$var$root.classList.remove("inset");
        $66e8214de94ffabc$var$root.classList.add("reverse");
        $66e8214de94ffabc$var$storage.setItem("toggle", "reverse");
        $66e8214de94ffabc$var$icon_toggle.classList.remove("bi-toggle2-off");
        $66e8214de94ffabc$var$icon_toggle.classList.add("bi-toggle2-on");
    }
};
document.querySelector(".toggle").onclick = ()=>{
    let toggles = [
        "inset",
        "reverse"
    ];
    toggles.splice(toggles.indexOf($66e8214de94ffabc$var$storage.getItem("toggle")), 1);
    $66e8214de94ffabc$var$setToggle(toggles.pop());
};
$66e8214de94ffabc$var$setToggle($66e8214de94ffabc$var$storage.getItem("toggle") || "inset");
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


//# sourceMappingURL=index.9b89465b.js.map
