// Showing title of the card
function showTheory() {
    $('.theory').css('display', 'block');
    $('.theory').animate({
        'opacity': 1
    }, 300);
}

// Score counter
var score = 0;

function changeScore(num) {
    score += num;
    $('#score-amount').html(score);
}

setTimeout(function () {
    setInterval(function () {
        let opacity = $('#card-black-screen').css('opacity');
        $('#card-black-screen').css('opacity', opacity -= 0.1);

        if (opacity == 0) {
            $('.intro-window').remove();
            $('#card-black-screen').remove();

            setTimeout(showTheory(), 200);
        }
    }, 50)
}, 3000);

let sec = 0;
let min = 0;


// Main timer
setInterval(function () {
    sec++;

    if (sec == 60) {
        sec = 0;
        min++;

        $('#timer-minute').html(min);
        $('#timer-second').html(sec);
    } else {
        $('#timer-second').html(sec);
    }

    if (sec < 10)
        $('#timer-sec-leftzero').css('display', 'inline-block');
    else {
        $('#timer-sec-leftzero').css('display', 'none');
    }

    if (min < 10)
        $('#timer-min-leftzero').css('display', 'inline-block');
    else {
        $('#timer-min-leftzero').css('display', 'none');
    }
}, 1000);


// Remove theory block and show the first task
function startTask() {
    $('.theory').remove();
    $('.task1').css('display', 'block');
}


// Sending message
function msg(text, num) {

    // let msg;

    // if(num == 1) msg = "<div class='alert alert-success answerMessage'>" + text + "</div>";
    // else if(num == 2) msg = "<div class='alert alert-warning answerMessage'>" + text + "</div>";
    // else if(num == 3) msg = "<div class='alert alert-danger answerMessage'>" + text + "</div>";

    // $('.container-card').prepend(msg);

    // setTimeout(function () { $('.answerMessage').remove();  }, 2000);
}


// |a|
function module(a) {
    if (a >= 0) return a;
    return -a;
}

function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform") ||
        obj.css("-ms-transform") ||
        obj.css("-o-transform") ||
        obj.css("transform");
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    } else {
        var angle = 0;
    }
    return (angle < 0) ? angle + 360 : angle;
}


function task1Click(elem) {
    $(elem).toggleClass('task1-block-choosen');
}

function task1Correct(){
    document.querySelector('.btnTask1').disabled = true;
    $('.btnTask1').addClass('btn-success');
    changeScore(100);

    correctAnswer();

    setTimeout(function () {
        showTask2();
    }, 2000);
}

function task2Correct(){
    $('.btnTask2').addClass('btn-success');
    document.querySelector('.btnTask2').disabled = true;
    changeScore(100);

    correctAnswer();

    setTimeout(function () {
        showTask3();
    }, 2000);
}

function task1Wrong() {
    $('.btnTask1').addClass('btn-danger');

    setTimeout(function () {
        $('.btnTask1').removeClass('btn-danger')
    }, 2000);

    changeScore(-10);
}

function task2Wrong() {
    $('.btnTask2').addClass('btn-danger');

    setTimeout(function () {
        $('.btnTask2').removeClass('btn-danger')
    }, 2000);

    changeScore(-10);
}

function task3Wrong() {
    $('.btnTask3').addClass('btn-danger');

    setTimeout(function () {
        $('.btnTask3').removeClass('btn-danger')
    }, 2000);

    changeScore(-10);
}

function task4Wrong() {
    $('.btnTask4').addClass('btn-danger');

    setTimeout(function () {
        $('.btnTask4').removeClass('btn-danger')
    }, 2000);

    changeScore(-10);
}

function task5Wrong() {
    $('.btnTask5').addClass('btn-danger');

    setTimeout(function () {
        $('.btnTask5').removeClass('btn-danger')
    }, 2000);

    changeScore(-10);
}

function correctAnswer() {
    let elem = document.createElement("div");
    elem.classList.add('white-curtain');
    elem.innerHTML = "<div class='white-curtain-text'>Отлично!</div> <div class='white-curtain-img'></div>";

    $('.card-field')[0].append(elem);

    window.setTimeout(function () {
        $('.card-field').animate({
            'height': 400 + "px"
        });
        $('.white-curtain').animate({
            'opacity': 1
        }, 600);
    }, 500);

    window.setTimeout(function () {
        $('.card-field').animate({
            'height': 100 + "%"
        }, 1000);
        $('.white-curtain').animate({
            'opacity': 0
        }, 600, function () {
            $('.white-curtain').remove();
        });
    }, 2500);
}

function showTask2() {
    $('.task1').remove();
    $('.task2').css('display', 'block');
    $('.task3').css("display", 'none');
    $('.task4').css("display", 'none');
    $('.task5').css("display", 'none');
}

function showTask3() {
    $('.task2').remove();
    $('.task3').css('display', 'block');
    $('.task4').css("display", 'none');
    $('.task5').css("display", 'none');
}

function showTask4() {
    $('.task3').remove();
    $('.task4').css('display', 'block');
    $('.task5').css("display", 'none');
}

function showTask5() {
    $('.task4').remove();
    $('.task5').css('display', 'block');
}

function endCardShow() {
    $('.task5').remove();
    $('.end-card').css('display', 'flex');
}