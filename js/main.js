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

// Variables for popup
let contact_popup = document.getElementById('contact_popup');
let contact_button = document.getElementById('contact_button');
let popup__close = document.querySelectorAll('.popup__close');
let button_form = document.querySelector('.button__form');

let body = document.body;


//
// Show/hide header top on scroll
// start
//
let show_header = function(){

    if(document.documentElement.clientWidth > 991){
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

    // for(let i = 0; i < menu_items.length; i++){

    //     // let dropdown = menu_items[i].nextElement.querySelector('.header-top__menu-dropdown')
    //     menu_items[i].classList.remove('active')
        
    //     if(dropdown != null){
    //         dropdown.classList.remove('active')
    //     }

    // }

}

window.addEventListener('scroll', show_header, false);
//
// Show/hide header top on scroll
// finish
//




//
// Show/hide dropdown header top
// start
//
let last_hover_dropdown = null;

let show_dropdown = function(){

    if(last_hover_dropdown != null){
        last_hover_dropdown.parentElement.classList.remove('active')
        last_hover_dropdown.classList.remove('active');
    }

    if(this.querySelector('.header-top__menu-dropdown') != null){

        this.classList.add('active')
        let inner_list = this.querySelector('.header-top__menu-dropdown');
        inner_list.classList.add('active');
        last_hover_dropdown = inner_list;

        if(document.documentElement.clientWidth < 991){
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

for(let i = 0; i < dropdown_item_title.length; i++){
    dropdown_item_title[i].addEventListener('click', function(){

        this.parentElement.classList.remove('active')

        for(let i = 0; i < menu_items.length; i++){
            menu_items[i].classList.remove('active')
        }

        if(body.style.overflow == 'hidden'){
            body.style.overflow = 'auto'
        }
    })
}

// Events for offerings in dropdown menu 
let last_hover_offerings;
for(let i = 0; i < dropdown_items_offerings.length; i++){
    
    dropdown_items_offerings[i].addEventListener('mouseover', function(){

        for(let i = 0; i < dropdown_items_offerings.length; i++){
            dropdown_items_offerings[i].classList.remove('active');
            offerings_inner_items[i].classList.remove('active');
        }

        // if(last_hover_offerings != null){   
        //     last_hover_offerings.classList.remove('active');
            
        //     for(let i = 0; i < dropdown_items_offerings.length; i++){
        //         if(last_hover_offerings.getAttribute('data-index') == dropdown_items_offerings[i].getAttribute('data-index')){
        //             console.log(last_hover_offerings)
        //             dropdown_items_offerings[i].classList.remove('active')
        //         }
        //     }
        // }

        for(let j = 0; j < offerings_inner_items.length; j++){
            if(offerings_inner_items[j].getAttribute('data-index') == dropdown_items_offerings[i].getAttribute('data-index')){           
                // last_hover_offerings = offerings_inner_items[j];
                // last_hover_offerings.classList.add('active');
                dropdown_items_offerings[i].classList.add('active')
                offerings_inner_items[i].classList.add('active')
            }

        }
        
    })

}

for(let i = 0; i < dropdown_items.length; i++){

    if(document.documentElement.clientWidth > 991){
        dropdown_items[i].addEventListener('mouseout', function(){
            this.classList.remove('active');
            this.parentElement.classList.remove('active')
        });
    }
}

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

for(let i = 0; i < footer_dropdown.length; i++){
    footer_dropdown[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}
//
// Show/hide dropdown header top
// finish
//

// Open popup "contact"
contact_button.addEventListener('click', function(){
    contact_button.classList.add('stop');
    contact_popup.classList.add('popup-open');
    document.querySelector('body').style.overflow = 'hidden'
});


for(let i = 0; i < popup__close.length; i++){
    popup__close[i].addEventListener('click', function(){
        this.parentElement.classList.remove('popup-open')
        document.querySelector('body').style.overflow= 'auto';
        contact_button.classList.remove('stop')
    })
}

button_form.addEventListener('click', function(e){
    e.preventDefault();
    contact_popup.classList.remove('popup-open')
    document.querySelector('body').style.overflow= 'auto';
    contact_button.classList.remove('stop')
})