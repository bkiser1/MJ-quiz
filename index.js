// 'use strict;'


let i = 0;
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
        ////appends inputs with question choices and the current question
        $('.js-question').text(quesArr[i].question);
        $('#qA0').text(quesArr[i].choices[0]);
        $('#qA1').text(quesArr[i].choices[1]);
        $('#qA2').text(quesArr[i].choices[2]);
        $('#qA3').text(quesArr[i].choices[3]);
        $('.choice').show('slow');

    })

})



$('#container').hide();
$('.results').hide();
$('.iframe').hide();
$('.count').hide();

//////defines questions and answers binds we click event
function handleUserAnswer() {
    $(document).on('click', '.sub-ques', function () {
        var solution = $('input[name="select-1"]:checked').val();
        const answer = quesArr[i].answer;
        let choices = quesArr[i].choices;

        if (choices === answer) {

            score++

            console.log('blahh');
        } else {
            console.log('yooooo');


        } if (!$('input[name="select-1"]').is(':checked')) {
            alert(" You haven't made a selection ");
            return undefined;
        }
        i++;

        if (i < 5) {

            $('.js-question').text(quesArr[i].question);
            $('#qA0').text(quesArr[i].choices[0]);
            $('#qA1').text(quesArr[i].choices[1]);
            $('#qA2').text(quesArr[i].choices[2]);
            $('#qA3').text(quesArr[i].choices[3]);
            $('.choice').show('slow');
            $('input[name="select-1"]').prop('checked', false);
        }

    })
}

function handleUserClicks() {

    let counter = 0;
    $('.count').text(counter);
    $('.sub-ques').click(function () {
        $('.count').show();
        counter += 1;
        $('.count').text(counter + ' of 5');

        if(counter == 5){
            $('.iframe').show();
            $('#container').hide();
            $('.results').show().html('Congratulations your score is ' + score);


        }
    })
}

function start() {

    handleUserAnswer();
    handleUserClicks();
}

$(start)


