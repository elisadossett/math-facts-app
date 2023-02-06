
$(document).ready(function() {
    var randomMathQuestion = require('random-math-question');

    var mathQuestion1 = randomMathQuestion.get();

    var mathQuestion2 = randomMathQuestion.get(randomMathQuestion.get({
        numberRange: '1-5000',
        amountOfNumber: '5-10',
        operations: ['/', '*', '+', '-'],
        nagative: {
            containsNagatives: true,
            negativeChance: '10%'
        },
        exponent: {
            containsExponents: true,
            exponentChance: '10%',
            exponentRange: '1-10'
        },
    }));


    console.log("Question 1: " + mathQuestion1.question);
    console.log("Answer: " + mathQuestion1.answer);

    console.log("Question 2: " + mathQuestion2.question);
    console.log("Answer: " + mathQuestion2.answer);
})
