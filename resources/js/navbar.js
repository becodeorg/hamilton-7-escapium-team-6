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
        menu.style.display = "flex"
        document.getElementById('navbar-logo').style.display = "none"
        document.querySelector('nav').style.backgroundColor = "rgba(25, 25, 25, 0.8)"
    }
    else {
        line1.style.transform = "rotate(0deg)"
        line2.style.transform = "scaleY(1)"
        line3.style.transform = "rotate(0deg)"
        menu.style.transform = "scaleY(0)"
        menu.style.display = "none"
        document.getElementById('navbar-logo').style.display = "block"
        document.querySelector('nav').style.backgroundColor = "rgba(25, 25, 25, 0.4)"
    }
    }

    async function addNavbar() {
        const resp = await fetch("../navbar.html")
        const html = await resp.text();
        document.body.insertAdjacentHTML("beforebegin", html);
    }
    async function removeNavbar() {
        document.querySelector('header').remove();
    }
    
    let lastScrollTop;
    window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.querySelector('header') !== null;
    if(scrollTop > lastScrollTop){
        if (header && scrollTop > 350) {
        removeNavbar();
        }
        else {
        }
    }
    else{
        if (header) {
                
            }
            else {
                addNavbar();
                return;
            }
    }
    lastScrollTop = scrollTop;
    })