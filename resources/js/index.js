async function addFooter() {
    const resp = await fetch("./footer.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}
async function addNavbar() {
    const resp = await fetch("./navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforebegin", html);
}

addFooter();
addNavbar();