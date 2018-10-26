const questions=[
    {
        question:"Which kind of animal did Florence Nightingale often carry around in her pocket?",
        answer:"Owl",
        choices:[
            "Kitten","Puppy","Owl","Snake",
        ]   
    },
    {
        question:"What does a nidoligist study?",
        answer:"Bird Nests",
        choices:[
            "Waves","Clouds","Bird Nests","Caves",
        ]   
    },
    {
        question:"Hypermetropic people are what?",
        answer:"Far-sighted",
        choices:[
            "Obese","Underfed","Moody","Far-sighted",
        ]   
    }, 
    {
        question:"Anemophobia is the fear of what?",
        answer:"Wind",
        choices:[
            "Spiders","The Dark","Fire","Wind",
        ]   
    }, 
    {
        question:"In which continent did the ostrich originate?",
        answer:"Africa",
        choices:[
            "Africa","Australia","North America","Asia",
        ]   
    }, 
    {
        question:"For how long is a dog pregnant?",
        answer:"9 Weeks",
        choices:[
            "9 Weeks","9 Days ","9 Months","9 Fortnights",
        ]   
    }, 
    {
        question:"What part of the body does a turtle use to breathe?",
        answer:"Anus",
        choices:[
            "Belly","Shell","Mouth","Anus",
        ]   
    }, 
]    

let score=0
let num=0
$("#quiz-form").on("submit", function(event){
    event.preventDefault();
    game="next"
    var answer=$('form input[type=radio]:checked').val();
    console.log(answer,questions[num].answer);
    $("#result").addClass("show")
    if(answer == questions[num].answer){ //answer it is correct
        score++
        $("#result p").text("You got it right! ♪~ ᕕ(ᐛ)ᕗ ");
    }
    else{
        $("#result p").text(`You got it wrong!ᕙ(⇀‸↼‶)ᕗ The answer is ${questions[num].answer}`);
    }
    num++
    $(".score").text(`Your score is ${score} out of ${num}`)
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
    game="submit"
    $("#quiz-form").html(
        `<div id="question">${questions[num].question}</div>
        <fieldset>
        
            <label for="${questions[num].choices[0]}">${questions[num].choices[0]}</label>
            <input tabindex="2" type="radio" name="gender" id="${questions[num].choices[0]}" value="${questions[num].choices[0]}"><br>
            <label for="${questions[num].choices[1]}">${questions[num].choices[1]}</label>
            <input tabindex="-1" type="radio" name="gender" id="${questions[num].choices[1]}" value="${questions[num].choices[1]}"><br>
            <label for="${questions[num].choices[2]}">${questions[num].choices[2]}</label>
            <input tabindex="-1" type="radio" name="gender" id="${questions[num].choices[2]}" value="${questions[num].choices[2]}"><br>
            <label for="${questions[num].choices[3]}">${questions[num].choices[3]}</label>
            <input tabindex="-1" type="radio" name="gender" id="${questions[num].choices[3]}" value="${questions[num].choices[3]}"><br>
            <input tabindex="-1" type="submit" value="Submit">

        </fieldset>
        `
    )
    $("#page").html(
        `<p>Question number ${num+1} of 7<\p>
        `
    )
 
}

let game="beginning"
function beginGame(){
    nextQuestion()
    $("#welcome").removeClass("show") 
    $("#page").addClass("show")
    game="submit" 
}

function endGame(){
    $("#end").addClass("show")
    game="ended"
} 

function restartGame(){
    $("#end").removeClass("show")
    num=0
    nextQuestion()
    game="submit"
}

$("#begin").click(function(){
    beginGame()
})

$("#restart").click(function(){
    restartGame()
})
/*$("body").on('keyup', function (e) {
    if (e.keyCode == 13) {
        console.log("enterhit",game)
        if (game=="beginning"){
            $("#begin").click()
        }
        if (game=="next"){
            $("#next").click()
        }
        if (game=="ended"){
            $("#restart").click()
        }
        if (game=="submit"){
            $("#quiz-form").submit()
        }
    }
});*/