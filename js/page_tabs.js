// Variables for popup
let tab_items = document.querySelectorAll('.page__tabs-item');
let tab_content = document.querySelectorAll('.tabs__content-item');




let tab_switch = function(){

    for (let index = 0; index < tab_content.length; index++) {  
        tab_content[index].classList.remove('active');
        tab_items[index].classList.remove('active');
    }

    for (let index = 0; index < tab_content.length; index++) {  
        if(this.getAttribute('data-index') == tab_content[index].getAttribute('data-index')){
            this.classList.add('active');
            tab_content[index].classList.add('active');
        }
    }

}

for (let index = 0; index < tab_items.length; index++) {
    const element = tab_items[index]; 
    element.addEventListener('click', tab_switch, false);
}