// INFO
const _title = "Мы есть то, что мы едим";
// const _cardWindow = $('#cardWindow');
// const _cardEx = $('.card-ex');
const _theoryText = "Здоровье человека на 60% и более зависит от образа жизни (еда, режим питания, физическая активность, уровень стресса, вредные привычки и разрушительное поведение). Правильный пищевой режим обеспечивает своевременное поступление необходимых для организма пищевых веществ. При правильном пищевом режиме пищеварительные соки своевременно поступают в желудок и кишечник, и это обеспечивает лучшее переваривание пищи. Правильное питание на протяжении всей жизни человека оказывает большое влияние на качество его жизни в старческом возрасте. Продолжительность жизни населения Земли постоянно растет. Ученые со всего мира находят разное объяснение подобной динамике: кто-то видит причину в повышении уровня жизни, кто-то в развитии цивилизации и эволюции, но ни один специализированный врач не станет отрицать, что главное влияние на жизнедеятельность человека оказывает питание.";

$(document).ready(function () {
    $('#_title').html(_title);

    $('#theory-text').html(_theoryText);
});

// -------------------//
// ------Task 1------ //
// -------------------//

function task1Check() {
    let allblocks = $('.task1-block');
    let elems = $('.task1-block-choosen');

    let correct = true;

    if (elems.length == 4) {
        for (let i = 0; i < elems.length; i++) {
            if ($.inArray(elems[i], allblocks) == (0 || 2 || 5 || 7 || -1)) {
                correct = false;
                break;
            }
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
    let area1Task2 = document.querySelector('.task2-frame');
    let area2Task2 = document.querySelectorAll('.task2Target');

    new Sortable(area1Task2, {
        group: 'task2Card2',
        animation: 350
    });

    for (let i = 0; i < area2Task2.length; i++) {
        new Sortable(area2Task2[i], {
            group: 'task2Card2',
            animation: 350,
            forceFallback: true
        });
    }
});

function task2Auto(elem) {
    const answ = ['полезных', 'рациона', 'питательными', 'веществами', 'низкой'];
    return answ[elem];
}

function task2Check() {
    let targets = document.querySelectorAll('.task2Target');
    let correct = true;

    for (let i = 0; i < targets.length; i++) {
        if (!targets[i].children[0] || targets[i].children[0].innerHTML != task2Auto(i)) {
            correct = false;
            break;
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


let startSort;

$(document).ready(function () {
    startSort = document.querySelectorAll('.task3-block-item');

    let area1Task3Card2 = document.querySelector('.task3-blocks-list');
    let area2Task3Card2 = document.querySelectorAll('.task3-container-match');

    new Sortable(area1Task3Card2, {
        group: "task3Card2",
        animation: 300
    });

    for (let i = 0; i < area2Task3Card2.length; i++) {
        new Sortable(area2Task3Card2[i], {
            group: "task3Card2",
            animation: 300
        });
    }
});

function task3Auto(elem, num) {
    return $.inArray(elem, startSort);
}

function task3Check() {
    let blocksList = document.querySelector('.task3-blocks-list');
    let blocks = document.querySelectorAll('.task3-block-item');

    let green = document.querySelector('.task3-goodContainer');
    let red = document.querySelector('.task3-badContainer');

    let correct = true;

    if (blocksList.children.length > 0 || (green.children.length || red.children.length) != 3) {
        correct = false;
    } else {
        for (let i = 0; i < 3; i++) {
            if (task3Auto(blocks[i]) == (1 || 4 || 5)) {
                correct = false;
            }
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

function showProve1() {
    $('.task4-proves').css('display', 'block');
    $('.task4-prove1').css('display', 'block');
    $('.task4-prove2').css('display', 'none');
}

function showProve2() {
    $('.task4-proves').css('display', 'block');
    $('.task4-prove2').css('display', 'block');
    $('.task4-prove1').css('display', 'none');
}

function task4Check() {
    let chosen = document.querySelector('#inlineRadio1').checked;

    if (chosen) {
        task4Correct();
    } else {
        task4Wrong();
    }
}