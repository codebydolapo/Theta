const topBar = document.getElementById('topBar')

const navBar = document.getElementById('navBar')

const hamburger = document.getElementById('hamburger')

const cloze = document.getElementById('close')

const mediaQuery = window.matchMedia('(max-width: 800px)')

if (mediaQuery.matches){
    topBar.removeChild(navBar);
    topBar.removeChild(cloze);
}

else{
    topBar.removeChild(hamburger);
    topBar.removeChild(cloze);
    topBar.appendChild(navBar);
}

hamburger.onclick = ()=>{
    topBar.appendChild(navBar);
    topBar.appendChild(cloze);
    topBar.removeChild(hamburger);
}

cloze.onclick = ()=>{
    topBar.removeChild(navBar);
    topBar.removeChild(cloze);
    topBar.appendChild(hamburger);
}