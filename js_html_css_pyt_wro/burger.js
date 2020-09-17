
function handleEvents() {
    let burger = document.querySelector(".burger");
    burger.addEventListener('click', () => {
        const bars = document.querySelector('.fa-bars')
        const times = document.querySelector('.fa-times')
        const nav = document.querySelector('.nav')
        bars.classList.toggle('active')
        times.classList.toggle('active')
        nav.classList.toggle('hidden')
    })
}

handleEvents()