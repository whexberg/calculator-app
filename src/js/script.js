const bodyElem = document.querySelector("body");

function clearThemeClasses() {
    bodyElem.classList.remove("theme-dark");
    bodyElem.classList.remove("theme-light");
    bodyElem.classList.remove("theme-twilight");
}

function toggleDarkTheme() {
    clearThemeClasses();
    bodyElem.classList.add("theme-dark");
}

function toggleLightTheme() {
    clearThemeClasses();
    bodyElem.classList.add("theme-light");
}

function toggleTwilightTheme() {
    clearThemeClasses();
    bodyElem.classList.add("theme-twilight");
}
