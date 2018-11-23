// 'use strict;'


let i = 0;
let score = 0;
let currentQuestion = 1;

const questionData = [

    {
        question: ' Where was Micheal Born',
        choices: ['Charlotte', 'Brooklyn', 'Raleigh', 'Texas'],
        answer: 'Brooklyn',
        Info: `Jordan was born in Brooklyn, New York, His family moved to Wilmington, North Carolina, when he was a toddler`
    },
    {
        question: 'When did he retire to play baseball ? ',
        choices: [1993, 1990, 1991, 1992],
        answer: 1993,
        Info: `On October 6, 1993, Jordan announced his retirement, citing a loss of desire to play the game. 
            Jordan later stated that the death of his father three months earlier also shaped his decision.`
    },
    {
        question: 'What other team did he play for ? ',
        choices: ['Bobcats', 'Wizards', 'Knicks', 'Nets'],
        answer: 'Wizards',
        Info: `On September 25, 2001, Jordan announced his return to the NBA to play for the Washington Wizards, 
            indicating his intention to donate his salary as a player to a relief effort for the victims of the September 11 attacks`
    },
    {
        question: 'How many Championships did he win ? ',
        choices: [4, 6, 5, 3],
        answer: 6,
        Info: ` He won 6... All six championship teams were led by Hall of Famers Michael Jordan, Scottie Pippen and coach Phil Jackson`
    },
    {
        question: 'What was the famed offense they ran called ? ',
        choices: ['Circle', 'Square', 'Triangle', 'Rectangle'],
        answer: 'Triangle',
        Info: ` They ran ....The triangle offense is an offensive strategy used in basketball. Its basic ideas were initially established 
             by Hall of Fame coach Sam Barry at the University of Southern California`
    },

]

function beginQuiz() {
    $('.click-to-start').on('click', function () {
        $(this).hide();
        $('.align-me').hide();
        $('#container').slideDown(1000).delay(500);
        showQuestions();
        $('.count').show().html(`Question ${currentQuestion}`);
        $('.tally').show().html(`${score} of 5`);

    })
}

function hiddenElements() {
    $('#container').hide();
    $('.results').hide();
    $('.iframe').hide();
    $('.count').hide();
    $('.replay').hide();

}

function handleUserAnswer() {
    $('#container').on('click', '.submit-button', function (event) {
        const userAnswer = $('input[name="select-1"]:checked').val();
        event.preventDefault();
        const answer = questionData[i].answer;
        let choices = questionData[i].choices;

        if (userAnswer == answer) {
            scoreCount();
            $('.tally').html(score + ' correct');
            handleRightAnswer();

        } else {
            handleWrongAnswer();

        }
        i++;

    });
}

function handleRendering() {
    if (i < questionData.length) {

        return `
        
        <h1 class="quiz-subheader">Quiz</h1>

        <h1 class="js-question">${questionData[i].question}</h1>

        <form class="question-box" role="checkbox">
            <fieldset>
                <label for="question-select">
                    <input id="question-select" type="radio" name="select-1" class="choice" 
                    value="${questionData[i].choices[0]}" checked>${questionData[i].choices[0]}</label>
                <label for="question-select">
                    <input id="question-select" type="radio" name="select-1" class="choice" 
                    value="${questionData[i].choices[1]}">${questionData[i].choices[1]}</label>
                <label for="question-select">
                    <input id="question-select" type="radio" name="select-1" class="choice" 
                    value="${questionData[i].choices[2]}">${questionData[i].choices[2]}</label>
                <label for="question-select">
                     <input id="question-select" type="radio" name="select-1" class="choice" 
                     value="${questionData[i].choices[3]}">${questionData[i].choices[3]}</label>
                <button class="submit-button">SUBMIT</button>
                <h4 class="tally">${score} of 5</h4>
                <p class="count">Question ${currentQuestion + 1}</p>
            </fieldset>
        </form>`;
    
    } else {
        $('.iframe').show();
        $('#container').hide();
        $('.replay').show();
        $('.results ').show().html('Congratulations your score is ' + score);
    }
}

function showQuestions() {
    $('#container').html(handleRendering());
}

function handleWrongAnswer() {

    return $('#container').html(`<div> <h2 class="js-answer">Wrong are you even a fan?
     ${questionData[i].Info}</h2></div> <div class="nextq"><button class="next-question">Next
    </button></div>`);
}

function handleRightAnswer() {

    return $('#container').html(`<div> <h2 class="js-answer"> You're right you know your stuff Mike will be pleased with your
    knowledge good job! ${questionData[i].Info}</h2></div><div class="nextq"><button class="next-question">Next
   </button></div>`);
}

function handleFeedbackSubmits() {
    $('#container').on('click', '.next-question', function () {
        console.log('hiii');
        if (i == 5) {
            $('.iframe').show();
            $('#container').hide();
            $('.replay').show();
            $('.results ').show().html('Congratulations your score is ' + score);
        }
        else {
            showQuestions();
            questionCount();
        }
    });
}

function questionCount() {
    currentQuestion++;
}

function scoreCount() {
    score++;
}

function start() {
    handleUserAnswer();
    beginQuiz();
    hiddenElements();
    handleRendering();
    handleFeedbackSubmits();
}
$(start)







