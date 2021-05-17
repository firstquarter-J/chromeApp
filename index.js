const title = document.getElementById("title");

const base_color = "rgb(52, 73, 94)";
const other_color = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === base_color) {
        title.style.color = other_color;
    } else {
        title.style.color = base_color;
    }
}

function init() {
    title.style.color = base_color;
    title.addEventListener("mouseenter", handleClick);
}
init();


