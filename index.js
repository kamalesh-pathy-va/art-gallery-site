const navList = document.querySelector(".nav-container-left");
const navBtn = document.querySelector(".mobile-nav-btn");

navBtn.addEventListener('click', () => {
    const visibility = navList.getAttribute('data-visible');
    if (visibility === "false") {
        navList.setAttribute('data-visible', 'true');
        navBtn.innerHTML = "Back";
    } else if (visibility === 'true') {
        navList.setAttribute('data-visible', 'false');
        navBtn.innerHTML = "Menu";
    }
});