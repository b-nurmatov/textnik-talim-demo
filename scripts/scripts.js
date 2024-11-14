function navToggle(menuSelector, toggleSelector) {
    const navToggle = document.querySelector(toggleSelector);
    const navMenu = document.querySelector(menuSelector);

    navToggle.addEventListener('click', () => {
        if(navMenu.classList.contains('hidden')) {
            navMenu.classList.remove('hidden');
            navMenu.classList.add('flex');
            navToggle.classList.add('bg-white');
            navToggle.classList.remove('text-white');
            navToggle.classList.add('text-accent-dark');
        } else {
            navMenu.classList.remove('flex');
            navMenu.classList.add('hidden');
            navToggle.classList.remove('bg-white');
            navToggle.classList.add('text-white');
            navToggle.classList.remove('text-accent-dark');
        }
    });
}

function langToggle(menuSelector, toggleSelector, arrowSelector) {
    const langToggle = document.querySelector(toggleSelector);
    const langMenu = document.querySelector(menuSelector);
    const arrow = document.querySelector(arrowSelector);

    langToggle.addEventListener('click', () => {
        if(langMenu.classList.contains('hidden')) {
            langMenu.classList.remove('hidden');
            arrow.classList.remove('scale-y-[-1]');
        } else {
            langMenu.classList.add('hidden');
            arrow.classList.add('scale-y-[-1]');
        }
    });
}

navToggle('#nav-menu', '#nav-toggle');
langToggle('#langMenu', '#langMenuToggle', '#langMenuArrow');
