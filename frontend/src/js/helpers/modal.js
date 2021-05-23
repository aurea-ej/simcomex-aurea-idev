function modalToggle(){
    const openBtn = document.querySelector('#open-modal')
    const closeBtn = document.querySelector('#close-modal')
    const modal = document.querySelector('#myModal')
    openBtn.addEventListener('click', () => {
        modal.style.display = 'block'
    })
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
}

export default modalToggle