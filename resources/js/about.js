async function addFooter() {
    const resp = await fetch("../footer.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}
async function addNavbar() {
    const resp = await fetch("../navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforebegin", html);
}

addFooter();
addHeader();
addNavbar();

let accItem = document.getElementsByClassName('collapse');
let accHD = document.querySelectorAll('.accordion--header');
console.log(accHD)

for (i = 0; i < accItem.length; i++) {
    accItem[i].onclick = function() {
    for (let i = 0; i < accItem.length; i++) {
        accItem[i].classList.remove('show');
        accItem[i].style.maxHeight = null;
    }
    this.classList.add('show');
    var panel = this.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + 'px'
    
}
}

for (let i = 0; i < accHD.length; i++) {
    accItem[i].classList.remove('show');
    accHD[i].addEventListener('click', function() {
            if(accItem[i].classList.contains('show')) {
                accItem[i].classList.remove('show');
            } else {
            accItem[i].classList.add('show');
            return;
            }
    });
}