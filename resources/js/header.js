let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/')+1);
let titleMain = document.getElementById('header--title');
filename = filename.split(".");
console.log(filename[0]);
titleMain.innerHTML = filename[0];