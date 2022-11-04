async function addHeader() {
    const resp = await fetch("../../header.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforebegin", html);
}

/* fetch("../../header.html")
    .then(response => response.text())
    .then(text => {
    const parser = new DOMParser();
    const url = window.location.pathname;
    let filename = url.substring(url.lastIndexOf('/')+1);
    const htmlDocument = parser.parseFromString(text, "text/html");
    const h1 = htmlDocument.activeElement.querySelector("h1");
    console.log(h1);
    filename = filename.split(".");
    console.log(filename[0]);
    document.getElementById("header--title").textContent = filename[0];
}) 

addHeader();*/