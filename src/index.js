import "./styles.css";

function dropdownAct(){
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu')
        const dropdownBtn = dropdown.querySelector('.dropdown-btn');
        
        dropdownBtn.addEventListener('click', () => {
        if(dropdownMenu.classList.contains('visible')){
            dropdownMenu.classList.remove('visible');
        }
        else{
            dropdownMenu.classList.add('visible');
        }
    })
    })
}

dropdownAct();

