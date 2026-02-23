export let theme = "light";

const handleChange = (event) => {
    const element = event.target;
    theme = element.checked ? "dark" : "light";
    console.log(theme);
};

const handleDialogMenu = (event) => {
    console.log("Click", event);
    const current = event.currentTarget
    event.stopPropagation()
    console.log(current)
    const menuDialogElement = document.querySelector("#menu-dialog");
    if (current.localName === "a") {
        event.preventDefault();
        menuDialogElement.showModal();
    } else {
        menuDialogElement.close();
    }
};

export function main() {
    console.log("Loaded main");
    // Theme
    const toggleElement = document.querySelector("#theme-toggle");
    toggleElement.addEventListener("change", handleChange);
    
    // Menu (Navegación)
    const menuIconElement = document.querySelector("#menu-icon");
    const menuDialogElement = document.querySelector("#menu-dialog menu");
    menuIconElement.addEventListener("click", handleDialogMenu);
    document.body.addEventListener("click", handleDialogMenu);
    menuDialogElement.addEventListener("click", handleDialogMenu);
}
