// document ready

$(function() {

    // want to have a list of the queer answers for the Q-ball
    
    // declare an array of string values for Magic Q Ball responses

    const queer_answers = [
        "YAAAAAAAAAS!",
        "My Gaydar pings yes!",
        "Heckkk yeah!",
        "YAAAAAS QUEEEEN!",
        "Faaaaaabulous!",
        "Sounds gay, I'm in!",
        "Love wins! So do you!",
        "It's all good, fam!",
        "Yas Babe! Get it!",
        "*finger guns*",
        "Ohhhhh. Honey. No.",
        "Nope. Never. No. Nopesies.",
        "Heeelllll nah",
        "Bitch, please!",
        "I'm too gay, send help!",
        "Look outside the binary for your answer",
        "Have you checked your Gay Agenda?",
        "404: too queer to compute",
        "*GAY PANIC* try again",
]

// declaring variables attached to HTML elements
const button = document.getElementById("button");
const input = document.getElementById("input");
const answer = document.getElementById("answer");
const q_letter = document.getElementById("q_letter");


// When the button is clicked, if there is no text entered, it will pop up "Please Enter a Queer-y!"

// Adding event listener so when clicked, if there is less than one character of text, alert pops up "Please enter your Queer-y!"
button.addEventListener("click", function(){
    if (input.value.length < 1) {
    alert("Please enter your Queer-y!");
    } else {
        // when the button is clicked, and text has been entered, the Q will disappear and answer text will be displayed

        // else make the Q disappear
        //.innerText sets/returns the text content of the specified node and all of its descendants
        q_letter.innerText = "";
        answer.innerText = "";

        // and randomly select and a string from the queer_answers array
        const quanswer = Math.floor(Math.random() * Math.floor(queer_answers.length));

        // display the chosen array string using .innerText
        answer.innerText = queer_answers[quanswer];
    
    }
});
})




