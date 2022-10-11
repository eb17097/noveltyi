// Variables for popup
let tab_items = document.querySelectorAll('.digital__future-content__top-item');
let tab_content = document.querySelectorAll('.digital__future-content__item');




let tab_switch = function(){

    for (let index = 0; index < tab_content.length; index++) {  
        tab_content[index].classList.remove('active');
        tab_items[index].classList.remove('active');
    }

    for (let index = 0; index < tab_content.length; index++) {  
        let tab_index = this.getAttribute('data-index');
        this.classList.add('active');
        tab_content[tab_index].classList.add('active');
    }

}

for (let index = 0; index < tab_items.length; index++) {
    const element = tab_items[index];
    
    element.addEventListener('click', tab_switch, false);
}