function navToggle() {
    document.querySelector("#toggle-nav")?.addEventListener('click', () => {
        const nav = document.querySelector(".side-nav")
        const isOpen = nav.classList.contains('active')
        toggleNav(isOpen)
    })
}

function toggleNav(isOpen) {
    const nav = document.querySelector(".side-nav")
    if(isOpen){
        nav.classList.remove('active')
        nav.classList.add('inactive')
    } else {
        nav.classList.remove('inactive')
        nav.classList.add('active')
    }
}

export {navToggle}