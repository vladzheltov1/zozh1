// INFO
const _title = "Основы Здорового Образа Жизни";
const _cardWindow = $('#cardWindow');
const _cardEx = $('.card-ex');
const _theoryText = "Здоровый образ жизни, ЗОЖ — образ жизни человека, направленный на укрепление здоровья, профилактику болезней и развитие человеческого организма в целом. Здоровье человека на 60 % и более зависит от образа жизни (еда, режим питания, физическая активность, уровень стресса, вредные привычки и разрушительное поведение). Здоровый образ жизни подразумевает ментальное здоровье, отказ от табака и употребления алкоголя, здоровые модели питания, физическую активность, физические упражнения, спорт и т. д. Поддающиеся изменению формы поведения, такие как употребление табака, отсутствие физической активности, нездоровое питание и употребление алкоголя, — повышают риск развития неинфекционных заболеваний (НИЗ). Основа здорового питания — высокое потребление разнообразной растительной пищи. Многие вещества, содержащиеся в растительной пище, обладают антиоксидантными и противовоспалительными свойствами, препятствуют тромбообразованию, регулируют артериальное давление, активность ферментов, нормализуют уровень глюкозы в крови, корректируют липидный профиль, влияют на экспрессию генов и сигнальные пути, улучшают состояние миокарда, а также влияют на некоторые биомаркеры, ассоциированные с сердечно-сосудистыми заболеваниями.Мета-анализы когортных исследований показали, что потребление отдельных групп продуктов питания ассоциировано со снижением рисков смертности от всех причин, включая продукты с высоким содержанием пищевых волокон (клетчатки), в том числе овощи, фрукты (прежде всего свежие, а не консервированные), орехи, бобовые, цельнозерновые продукты, а также рыба, оливковое масло, умеренное потребление кисломолочных продуктов. Исследования, в том числе в России, говорят о том, что потребление кофе, в том числе декофеинизированного, ассоциировано со снижением смертности от всех причин.";

$(document).ready(function () {
    $('#_title').html(_title);

    $('#theory-text').html(_theoryText);
});



// ----------------------- //
// Task 1
// ----------------------- //

function task1Answ(answ) {
    let answs = ['Курение', 'Употребление алкоголя', 'Сбитый режим дня', 'Нездоровое питание'];

    return answs.indexOf(answ);
}

function task1Check() {
    let elems = document.querySelectorAll('.task1-block-choosen');

    let r = 0; // Counting right answers

    if (elems != null) {
        if (elems.length != 4) {
            task1Wrong();
        } else {
            for (let i = 0; i < elems.length; i++) {
                if (task1Answ(elems[i].innerHTML) == -1) {
                    task1Wrong();
                    break;
                } else {
                    r++;
                }
            }
            if (r == 4) {
                task1Correct();

            } else {
                task1Wrong();
            }
        }
    }
}

// End task 1
// ----------------------- //
// Task 2

$(document).ready(function () {

    const dragArea1Task2 = $('.task2-frame')[0];
    const dragArea2Task2 = $('.task2Target');

    new Sortable(dragArea1Task2, {
        group: 'task2',
        animation: 150
    });

    for (let i = 0; i < dragArea2Task2.length; i++) {
        new Sortable(dragArea2Task2[i], {
            group: 'task2',
            animation: 150,
            sort: false,
            forceFallback: true
        });
    }

    let blocksTask2 = document.querySelectorAll('.task2-block');

    for (let j = 0; j < blocksTask2.length; j++) {
        blocksTask2[j].addEventListener('dragend', function (e) {
            if (e.target.parentNode.children.length > 1) {
                $('.task2-frame')[0].append(e.target.parentNode.children[1]);
            }
        });
    }

});

function task2Check() {
    if ($('#task2Field1').children('#task2-block5').length > 0 &&
        $('#task2Field2').children('#task2-block2').length > 0 &&
        $('#task2Field3').children('#task2-block3').length > 0 &&
        $('#task2Field4').children('#task2-block4').length > 0 ||
        $('#task2Field4').children('#task2-block6').length > 0 &&
        $('#task2Field5').children('#task2-block1').length > 0 &&
        $('#task2Field6').children('#task2-block6').length > 0 ||
        $('#task2Field6').children('#task2-block4').length > 0) {

        task2Correct();
    } else {
        task2Wrong();
    }
}

// End task 2
// ----------------------- //
// Task 3

$(document).ready(function () {
    const dragArea1Task3 = document.querySelector('.task3-blocks');
    const dragArea2Task3 = document.querySelectorAll('.task3-target');

    new Sortable(dragArea1Task3, {
        group: 'task3',
        animation: 350
    });

    for (let i = 0; i < dragArea2Task3.length; i++) {
        new Sortable(dragArea2Task3[i], {
            group: 'task3',
            animation: 350,
            forceFallback: true
        });
    }
});

function task3Auto(a, num) {
    const answ1 = ["16:00", "21:30", "7:30", "20:00", "17:00", "15:00"];
    const answ2 = ["15:00", "21:30", "7:30", "20:00", "17:00", "16:00"];

    if (num == 1) return answ1[a];

    return answ2[a];
}

function task3Check() {
    const targets = document.querySelectorAll('.task3-target');

    var correct = true;

    for (let i = 0; i < targets.length; i++) {
        if (targets[i].firstChild == null || targets[i].firstChild.innerHTML != task3Auto(i, 1) && targets[i].firstChild.innerHTML != task3Auto(i, 2)) {
            correct = false;
            break;
        }
    }

    if (correct == true) {
        task3Correct();
    } else {
        task3Wrong();
    }
}

// End task 3
// ----------------------- //
// Task 4

function showProves() {
    $('.task4-proves').css('display', 'block');
}


function task4Check() {
    let chosen = document.querySelector('#inlineRadio1').checked;
    let options = document.querySelectorAll('.selector');

    if (chosen == true && options[0].value == "чипсы" && options[1].value == "сухарики" && options[2].value == "лимонад" && options[3].value == "конфеты") {
        task4Correct();
    } else {
        task4Wrong();
    }
}

// End task 4
// ----------------------- //
// Task 5

$(document).ready(function () {
    const dragAreaTask5 = document.querySelector('.task5-left');

    new Sortable(dragAreaTask5, {
        animation: 350,
        swap: true
    });
});


function task5Auto(a) {
    const answ = ["Занятие", "Силовые", "Правильное", "Диета", "Активный"];
    return answ[a];
}

function task5Check() {
    let blocks5 = document.querySelectorAll('.drag-text');
    let correct = true;

    for (let i = 0; i < blocks5.length; i++) {
        if (blocks5[i].innerHTML != task5Auto(i)) {
            correct = false;
            break;
        }
    }

    if (correct == true) {
        task5CorrectCard1();
    } else {
        task5Wrong();
    }
}

function task5CorrectCard1() {
    $('.task5-left').animate({
        'margin-right': 0
    }, 1000);
    $('.task5-right').animate({
        'margin-left': 0
    }, 1000, function () {

        let elems = document.querySelectorAll('.task5-list-item');
        let triangles = document.querySelectorAll('.triangle-left');

        for (let i = 0; i <= elems.length; i++) {
            let elem = elems[i];
            $(elem).toggleClass('task5-block-correct');
        }
        for (let j = 0; j <= triangles.length; j++) {
            let triangle = triangles[j];
            $(triangle).css('border-left', '35px solid #198754');
        }

        changeScore(100);
        document.querySelector('.btnTask5').disabled = true;
        $('.btnTask5').addClass('btn-success');

        correctAnswer();

        setTimeout(function () {
            endCardShow();
        }, 2000)
    });
}