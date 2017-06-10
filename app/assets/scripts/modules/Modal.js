import $ from 'jquery';

class Modal {
    constructor(){
        this.openModalButton = $('.open_modal');
        this.modal = $('.modal');
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events(){
        // clicking the open modal
        this.openModalButton.click(this.openModal.bind(this));

        //clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));

        //pushes the escape key
        $(document).keyup(this.keyPressedHandler.bind(this));

    }

    openModal(){
        this.modal.addClass("modal--is-visible");
        //this return false will prevent default of scrolling up on a href element
        return false;
    }

    closeModal(){
        this.modal.removeClass('modal--is-visible');
    }

    keyPressedHandler(e){
        if(e.keyCode == 27){
            this.closeModal();
        }
    }

}

export default Modal;