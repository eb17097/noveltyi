// Variables for header top
let header = document.getElementById('header');
let header_menu = document.getElementById('header_menu');
let header_logo = header_menu.querySelector('.header-top__logo').childNodes[1];

// Variables for header top menu 
let menu_items = document.querySelectorAll('.header-top__menu-item');
let dropdown_items = document.querySelectorAll('.header-top__menu-dropdown');
let dropdown_items_mobile = document.querySelectorAll('.header-top__menu-dropdown.mobile');
let dropdown_item_title = document.querySelectorAll('.header-top__menu-title');
let dropdown_items_offerings = document.querySelectorAll('.header-top__dropdown-item.offerings');
let offerings_inner_items = document.querySelectorAll('.header-dropdown__item-inner');
let nav_menu = document.getElementById('nav_menu');
let burger_menu = document.querySelector('.header-top__burger');
let footer_dropdown = document.querySelectorAll('.footer__list-item--dropdown');

let body = document.body;






//
// Show/hide header top on scroll
// start
//
let show_header = function(){

    if(document.documentElement.clientWidth > 992){
        for (let index = 0; index < dropdown_items.length; index++) {
            const element = dropdown_items[index];
            element.classList.remove('active')
        }
    }

    if(window.pageYOffset > header.clientHeight){
        if(!header_menu.classList.contains('fixed')){
            header_menu.classList.add('fixed')
            header_menu.classList.remove('fixed__off')
            header_logo.src = 'images/logo_fixed.svg'
            burger_menu.classList.add('fixed');
        }
    }else{
        if(header_menu.classList.contains('fixed')){
            header_menu.classList.add('fixed__off')
            this.setTimeout(function(){
                header_menu.classList.remove('fixed')
                header_logo.src = 'images/logo.svg';
            },200)
            burger_menu.classList.remove('fixed');
        }
    }

}

window.addEventListener('scroll', show_header, false);
//
// Show/hide header top on scroll
// finish
//









// Show/hide dropdown header top
// start
let last_hover_dropdown = null;

let show_dropdown = function(){

    // Hide last dropdown
    if(last_hover_dropdown != null){
        last_hover_dropdown.parentElement.classList.remove('active')
        last_hover_dropdown.classList.remove('active');
    }

    // Checking if this item has a dropdown
    if(this.querySelector('.header-top__menu-dropdown') != null){

        // Show dropdown this item
        this.classList.add('active')
        let inner_list = this.querySelector('.header-top__menu-dropdown');
        inner_list.classList.add('active');
        last_hover_dropdown = inner_list;

        // Show mobile dropdown this item
        if(document.documentElement.clientWidth < 992){
            for(let i = 0; i < dropdown_items_mobile.length; i++){

                if(this.getAttribute('data-id') == dropdown_items_mobile[i].getAttribute('data-id')){
                    if(dropdown_items_mobile[i].getAttribute('data-id') == 'offerings'){
                        body.style.overflow = 'hidden';
                    }
                    dropdown_items_mobile[i].classList.add('active')
                }
            }
        }


    }
    

}

for(let i = 0; i < menu_items.length; i++){
    menu_items[i].addEventListener('mouseover', show_dropdown, false);
}
//
// Show/hide dropdown header top
// finish
//









// Close dropdown in mobile menu
// start
let hide_dropdwon_mobile = function(){
    this.parentElement.classList.remove('active')

    for(let i = 0; i < menu_items.length; i++){
        menu_items[i].classList.remove('active')
    }

    if(body.style.overflow == 'hidden'){
        body.style.overflow = 'auto'
    }
}

for(let i = 0; i < dropdown_item_title.length; i++){
    dropdown_item_title[i].addEventListener('click', hide_dropdwon_mobile, false);
}
// Close dropdown in mobile menu
// finish









// Events for offerings in dropdown menu 
// start
let show_offerings_list = function(){

    // Hide list for last item
    for(let i = 0; i < dropdown_items_offerings.length; i++){
        dropdown_items_offerings[i].classList.remove('active');
        offerings_inner_items[i].classList.remove('active');
    }
    
    // Show list for new item
    for(let j = 0; j < offerings_inner_items.length; j++){
        if(offerings_inner_items[j].getAttribute('data-index') == this.getAttribute('data-index')){    
            this.classList.add('active')
            offerings_inner_items[j].classList.add('active')
        }
    }
}

for(let i = 0; i < dropdown_items_offerings.length; i++){
    dropdown_items_offerings[i].addEventListener('mouseover', show_offerings_list, false);
}

for(let i = 0; i < dropdown_items.length; i++){

    dropdown_items[i].addEventListener('mouseout', function(){
        if(!this.classList.contains('mobile')){
            this.classList.remove('active');
            this.parentElement.classList.remove('active')
        }
    });
    
}
// Events for offerings in dropdown menu 
// finish









// Show/hide mobile menu with hamburger menu button
// start
let show_mobile_menu = function(){

    nav_menu.classList.toggle('show');

    if(this.classList.contains('active')){
        for(let i = 0; i < dropdown_items_mobile.length; i++){
            dropdown_items_mobile[i].classList.remove('active')
        }
        for(let i = 0; i < menu_items.length; i++){
            menu_items[i].classList.remove('active')
        }
    }

    this.classList.toggle('active')
    
    if(body.style.overflow == 'hidden'){
        body.style.overflow = 'auto'
    }

}

burger_menu.addEventListener('click', show_mobile_menu, false);
// Show/hide mobile menu with hamburger menu button
// finish


// Footer dropdowns events
for(let i = 0; i < footer_dropdown.length; i++){
    footer_dropdown[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}



