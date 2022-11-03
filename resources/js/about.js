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
async function addHeader() {
    const resp = await fetch("../../header.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforebegin", html);
}

addFooter();
addHeader();
addNavbar();

let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/')+1);
filename = filename.split(".");
console.log(filename[0]);
document.getElementById("header--title").textContent = filename[0];