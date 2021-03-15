/* Header */
function toggleHeader(){
    $('.header-nav-item').toggle();
}
window.onresize = function(){
    if(window.innerWidth <= 675){
        $('.header-nav').css('display', 'inline-block');
        $('.header-nav-item').css('display', 'none');
    }
    else{
        $('.header-nav').css('display', 'flex');
        $('.header-nav-item').css('display', 'block');
    }
}
/* ------- */

$(document).ready(function(){
    if(localStorage.getItem('agree')){
        $('.agreementBlock').remove();
    }
    else{
        $('.agreementBlock').animate({bottom: '10px'}, 2000);
    }
});

function agreed() {
    $('.agreementBlock').animate({bottom: '-100px'}, 2000);
    
    window.setTimeout(function () {
        $('.agreementBlock').remove();
    }, 2100);

    localStorage.setItem('agree', true);
}

function sendFeedBack(){
    let name = $('#name').val();
    let email = $('#email').val();
    let msg = $('#msg').val();

    if(name != '' && email != '' && msg != ''){
        alert("Ваше сообщение успешно отправлено!");
        $('.feedback-inner-form')[0].reset();
    }
    else{
        alert("Внимание! Необходимо заполнить все поля!");
    }
}