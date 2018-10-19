const questions=[
    {
        question:"what is 2+2?",
        answer:"4",
        choices:[
            "2","puppy","4","kitty",
        ]   
    },
    {
        question:"what is 2+1?",
        answer:"3",
        choices:[
            "2","3","dog","me",
        ]   
    },
    {
        question:"what is 2+5?",
        answer:"7",
        choices:[
            "2","3","4","7",
        ]   
    }, 
]    
let num=0
$("#quiz-form").on("submit", function(event){
    event.preventDefault();
    
    var answer=$('form input[type=radio]:checked').val();
    console.log(answer,questions[num].answer);
    $("#result").addClass("show")
    if(answer == questions[num].answer){
        $("#result p").text("You got it right!");
    }
    else{
        $("#result p").text(`You got it wrong! The right answer is ${questions[num].answer}`);
    }
    num++
});
    

$("#next").click(function(){
    $("#result").removeClass("show") 
    if (questions[num]){
        nextQuestion()
    }else{
        endGame()
    }

    
})


function nextQuestion(){
    
    $("#quiz-form").html(
        `<div id="question">${questions[num].question}</div>
        <fieldset>
        <legend>We Animals</legend>
         
         
            <label for="${questions[num].choices[0]}">${questions[num].choices[0]}</label>
            <input type="radio" name="gender" id="${questions[num].choices[0]}" value="${questions[num].choices[0]}"><br>
            <label for="${questions[num].choices[1]}">${questions[num].choices[1]}</label>
            <input type="radio" name="gender" id="${questions[num].choices[1]}" value="${questions[num].choices[1]}"><br>
            <label for="${questions[num].choices[2]}">${questions[num].choices[2]}</label>
            <input type="radio" name="gender" id="${questions[num].choices[2]}" value="${questions[num].choices[2]}"><br>
            <label for="${questions[num].choices[3]}">${questions[num].choices[3]}</label>
            <input type="radio" name="gender" id="${questions[num].choices[3]}" value="${questions[num].choices[3]}"><br>
            <input type="submit" value="Submit">

        </fieldset>
        `
    )
    $("#page").html(
        `<p>Question number ${num+1}<\p>
        `
    )
 
}

function endGame(){
    alert("Game Over!")
    num=0
    nextQuestion()
}
function beginGame(){
    nextQuestion()
    $("#welcome").removeClass("show") 
}
$("#begin").click(function(){
    beginGame()
})