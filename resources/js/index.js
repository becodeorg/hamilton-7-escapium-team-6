async function addFooter() {
    const resp = await fetch("../../footer.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}
async function addNavbar() {
    const resp = await fetch("../../navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforebegin", html);
}

addFooter();
addNavbar();

function checkboxBurger() {
    const checkbox = document.getElementById('checkbox-burger')
    const line1 = document.getElementById('line1')
    const line2 = document.getElementById('line2')
    const line3 = document.getElementById('line3')
    const menu = document.getElementById('navbar-menu')
    const button = document.getElementById('burger--button')
    if (checkbox.checked) {
        line1.style.transform = "rotate(45deg)"
        line2.style.transform = "scaleY(0)"
        line3.style.transform = "rotate(-45deg)"
        menu.style.transform = "scaleY(1)"
        menu.style.height = "200px"
        menu.style.display = "block"
        button.style.top = "-115px"
        checkbox.style.top = "-120px"
    }
    else {
        line1.style.transform = "rotate(0deg)"
        line2.style.transform = "scaleY(1)"
        line3.style.transform = "rotate(0deg)"
        menu.style.transform = "scaleY(0)"
        menu.style.display = "none"
        button.style.top = "-15px"
        checkbox.style.top = "-20px"
    }
    }