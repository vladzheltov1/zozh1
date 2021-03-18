// INFO
const _title = "Движение - жизнь";
const _theoryText = "Физическая активность - вид деятельности человеческого организма, при котором активация обменных процессов в скелетных (поперечно-полосатых) мышцах обеспечивает их сокращение и перемещение человеческого тела или его частей в пространстве. Как физиологический процесс физическая активность присуща любому человеку. Она может быть низкой, если человек осознанно или вынужденно ведет малоподвижный образ жизни и, наоборот, высокой, например, у спортсмена. Низкая физическая активность (гиподинамия) может быть причиной развития мышечной атрофии. Если гиподинамия сочетается с погрешностями в пищевом рационе (прием высококалорийной пищи в большом количестве) это неминуемо приведет к развитию ожирения. Высокая – сопровождается увеличением мышечной массы (гипертрофией), укреплением костей скелета, повышением подвижности суставов. Следует говорить и об оптимальной физической активности, которая позволяет человеку сохранять или улучшать свое здоровье, снижать риск возникновения заболеваний, в том числе и фатальных. Оптимальная физическая активность может быть достигнута за счет ходьбы, бега, занятия подвижными видами спорта, танцами, а также выполнением гимнастических упражнений.";

$(document).ready(function () {
    $('#_title').html(_title);
    $('#theory-text').html(_theoryText);
});

// -------------------//
// ------Task 1------ //
// -------------------//


function task1Check() {
    let elems = $('.task1-block');
    let choosen = $('.task1-block-choosen');

    let correct = true;

    if (choosen.length == 3) {
        if (!$(elems[0]).hasClass("task1-block-choosen") ||
            !$(elems[4]).hasClass("task1-block-choosen") ||
            !$(elems[5]).hasClass("task1-block-choosen")) {
            correct = false;
        }
    } else {
        correct = false;
    }

    if (correct === true) {
        task1Correct();
    } else {
        task1Wrong();
    }
}

// -------------------//
// ------Task 2------ //
// -------------------//

$(document).ready(function () {
    let area1task2Card3 = document.querySelector('.task2-frame');
    let area2task2Card3 = document.querySelectorAll('.task2Target');

    new Sortable(area1task2Card3, {
        group: "card3Task2",
        animation: 300
    });

    for (let i = 0; i < area2task2Card3.length; i++) {
        new Sortable(area2task2Card3[i], {
            group: "card3Task2",
            animation: 300,
            forceFallback: true
        });
    }
});

function task2Auto(num) {
    const answ = ['активности', 'спортивных', 'оздоровление', 'организма'];
    return answ[num];
}

function task2Check() {
    let targets = document.querySelectorAll('.task2Target');

    let correct = true;

    for (let i = 0; i < targets.length; i++) {
        if (!targets[i].firstChild || targets[i].firstChild.innerHTML != task2Auto(i)) {
            correct = false;
        }
    }

    if (correct) {
        task2Correct();
    } else {
        task2Wrong();
    }
}

// -------------------//
// ------Task 3------ //
// -------------------//

$(document).ready(function(){
    if(window.innerWidth <= 445){
        $('.turn-phone-alert').css('display', "block");
        $('.task3-container').css('display', "none");
        $('.btnTask3').css('display', "none");
    }
    else{
        $('.turn-phone-alert').css('display', "none");
    }
});

window.addEventListener('resize', function(){
    if(window.innerWidth <= 445){
        $('.turn-phone-alert').css('display', "block");
        $('.task3-container').css('display', "none");
        $('.btnTask3').css('display', "none");
    }
    else{
        $('.task3-container').css('display', "block");
        $('.btnTask3').css('display', "block");
        $('.turn-phone-alert').css('display', "none");
    }
});

function task3Auto(num) {
    const answ = ['т', 'е', 'н', 'н', 'и', 'с'];
    return answ[num];
}

function task3Check() {
    let letters = document.querySelectorAll('.task3-block-letters-item');

    let correct = true;

    for (let i = 0; i < letters.length; i++) {
        if (letters[i].value != task3Auto(i)) {
            correct = false;
        }
    }

    if (correct) {
        task3Correct();
    } else {
        task3Wrong();
    }
}

// -------------------//
// ------Task 4------ //
// -------------------//

function showProve1(){
    $('.task4-proves').css('display', 'block');
    $('.task4-prove1').css('display', 'block');
    $('.task4-prove2').css('display', 'none');
}

function showProve2(){
    $('.task4-proves').css('display', 'block');
    $('.task4-prove2').css('display', 'block');
    $('.task4-prove1').css('display', 'none');
}

function task4Check(){
    let chosen = document.querySelector('#inlineRadio2').checked;
    let selector = document.querySelector('.selector');

    let correct = true;


    if(chosen){
        if(selector.value != 1 && selector.value != 2){
            correct = false;
        }
    }
    else{
        correct = false;
    }

    if(correct){
        task4CorrectCard2();
    }
    else{
        task4Wrong();
    }
}