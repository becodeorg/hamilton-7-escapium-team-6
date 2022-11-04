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

import datas from './data/rooms.json' assert {type: 'json'};

const section = document.createElement("section");
section.classList.add("rooms");

const mainElement = document.querySelector("main");

mainElement.appendChild(section);

for (let i = 0; i < datas.length; i++) {
    const room = datas[i];

    const article = document.createElement("article");
    article.classList.add("room-box");
    section.appendChild(article);

    const boxElements = document.createElement("div");
    boxElements.classList.add("box-elements");
    article.appendChild(boxElements);

            article.style.backgroundImage = "linear-gradient(180deg, rgba(27,27,27,0.5) 0%, rgba(27,27,27,1) 100%)," +
                                            "url( " + datas[i].photos[0] + ")";

    const ul = document.createElement("ul");
    boxElements.appendChild(ul);

    let difficulty = room.difficulty;
    for (let j = 0; j < 5; j++) {
        const li = document.createElement("li");
        const i = document.createElement("i");

        if (difficulty > 0) {
            i.classList.add("colored");
            difficulty--;
        }

        i.classList.add("fa");
        i.classList.add("fa-lock");
        i.setAttribute("aria-hidde", "true");
        
        li.appendChild(i);
        ul.appendChild(li);
    }

    const h3 = document.createElement("h3");
    h3.innerText = room.name;
    boxElements.appendChild(h3);

    const divCardInfos = document.createElement("div");
    divCardInfos.classList.add("card-infos");
    boxElements.appendChild(divCardInfos);

    const iconPlayers = document.createElement("i");
    iconPlayers.classList.add("fa");
    iconPlayers.classList.add("fa-users");
    iconPlayers.setAttribute("aria-hidde", "true");
    divCardInfos.appendChild(iconPlayers);

    const pPlayers = document.createElement("p");
    pPlayers.innerText = room.players[0] + "-" + room.players[1];
    divCardInfos.appendChild(pPlayers);

    const iconClock = document.createElement("i");
    iconClock.classList.add("fa");
    iconClock.classList.add("fa-clock-o");
    iconClock.setAttribute("aria-hidde", "true");
    divCardInfos.appendChild(iconClock);

    const pClock = document.createElement("p");
    pClock.innerText = room.minutes;
    divCardInfos.appendChild(pClock);

    const iconLocation = document.createElement("i");
    iconLocation.classList.add("fa");
    iconLocation.classList.add("fa-map-marker");
    iconLocation.setAttribute("aria-hidde", "true");
    divCardInfos.appendChild(iconLocation);

    const pLoc = document.createElement("p");
    pLoc.innerText = room.location;
    divCardInfos.appendChild(pLoc);
}