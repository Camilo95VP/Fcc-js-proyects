

const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);

function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    console.log(regex.test(str));

    if (regex.test(str) === true) {
        return (document.getElementById("print").innerHTML =
            "<span style='color: rgb(255, 196, 0); font-size: 30px'>El telefono es valido</span>");
    }
    return (document.getElementById("print").innerHTML =
        "<span style='color: red; font-size: 30px'>El telefono no es valido</span>");
}