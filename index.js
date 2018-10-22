'use strict;'


var i = 0;
let score = 0;



const quesArr = [

    {
        question: ' Where was Micheal Born',
        choices: ['Charlotte', 'Brooklyn', 'Raleigh', 'Texas'],
        answer: 1,
    },
    {
        question: 'When did he retire to play baseball ? ',
        choices: [1993, 1990, 1991, 1992],
        answer: 0,
    },
    {
        question: 'What other team did he play for ? ',
        choices: ['Bobcats', 'Wizards', 'Knicks', 'Nets'],
        answer: 1,
    },
    {
        question: 'How many Championships did he win ? ',
        choices: [4, 6, 5, 3],
        answer: 1,
    },
    {
        question: 'What was the famed offense they ran called ? ',
        choices: ['Circle', 'Square', 'Triangle', 'Rectangle'],
        answer: 2,
    },

]



///to start the jersey animation on btton hover
$('.click-to-start').hover(function () {
    $(this).addClass('sphere-like');
    $('.sphere-like').slideUp(5000);


    /////this reveals quesArr once the user clicks the jersey 
    $('.click-to-start').on('click', function () {
        $('#container').slideDown(7000).delay(500);
        event.preventDefault();
        $('.js-question').text(quesArr[i].question);
        $('#qA0').text(quesArr[i].choices[0]);
        $('#qA1').text(quesArr[i].choices[1]);
        $('#qA2').text(quesArr[i].choices[2]);
        $('#qA3').text(quesArr[i].choices[3]);
        $('.choice').show('slow');

    })

})

$('#container').hide();
$('iframe:first').hide();
$('iframe#yay').hide();

function handleUserAnswer() {
    $(document).on('click', '.sub-ques', function () {
        var solution = $('input[name="select-1"]:checked').val();
        console.log('i ' + i);
        const answer = quesArr[i].answer;
        let choices = quesArr[i].choices;

        if (choices === answer) {
            $('iframe#yay').show(800, function () {
                $(this).hide(10000)
            });

        } else {
            $('iframe:first').show(800, function () {
                $(this).hide(10000);


            })
        }
    })
}

function handleUserClick() {
    



}

function start() {

    handleUserAnswer();
    handleUserClick();
}

$(start)