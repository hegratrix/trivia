let correct = 0
let incorrect = 0
let unanswered = 0
let index = 0
let randomMovieArray = []
let moviePool = movieDataBase.length
let status = true
let m = -1
let timer = setInterval

//which game is selected
let newGame = decodeURIComponent(window.location.search);
newGame = newGame.substring(1);
finalGame = newGame.replace('para1=','');
if (finalGame === "what") {
    $('#curtain1').animate({width: '260px'}, 2000)
    $('#curtain2').animate({width: '260px'}, 2000)
    gameSetUp()
    setTimeout (playWhatMovie, 2500)
} else {
    $('#curtain1').animate({width: '260px'}, 2000)
    $('#curtain2').animate({width: '260px'}, 2000)
    gameSetUp()
    setTimeout (playWhoSaid, 2500)
}

function gameSetUp () {
    //randomly pick 10 movies for quiz
    for (i = 0; i < 10; i++) {
        let movieNumber = Math.floor(Math.random()*(moviePool))
        if (randomMovieArray.indexOf(movieNumber) === -1) {
            randomMovieArray.push(movieNumber)
        } else {
            i--
        }
    }
    //get info from 10 random movies
    for (i = 0; i < randomMovieArray.length; i++) {
        let index = randomMovieArray[i]
    }
}

//plays what movie
function playWhatMovie () { 
    if (index < randomMovieArray.length) {
        m = randomMovieArray[index]
        $('.movie-answer').html(`
            <div class = "question">
            <h2 id = "in-which-movie">In which movie is it said:</h2>
            <h2 id ="question-movie-line">"${movieDataBase[m].line}"</h2>
            <div class="choice-container"></div>  
            </div>
            `)
        whatMovieOptions()
        setTimer (playWhatMovie) 
    } else {
        endGame()
    }
}

//plays who said
function playWhoSaid (){
    if (index < randomMovieArray.length) {
        m = randomMovieArray[index]
        $('.movie-answer').html(`
            <div class = "question">
            <h2 id = "in-which-movie">Who said:</h2>
            <h2 id ="question-movie-line">"${movieDataBase[m].line}"</h2>
            <div class="choice-container"></div> 
            </div>
            `)
        whoSaidOptions()
        setTimer (playWhoSaid) 
    } else {
        endGame()
    }
}

//sets timer
function setTimer (game) {
    let t = 10
    timer = setInterval (function () {
        $("#timer").html(t + " seconds")
        t--
        if (t < 0) {
            unanswered++
            clearInterval(timer)
            showAnswer('', game)
        }
    }, 1000)
}

//create random choice options
function whatMovieOptions () {
    let choiceOptions = []
    choiceOptions.push(m)
    for (i=0; i < 3; i++) {
        let choice = Math.floor(Math.random()*(moviePool))
        if (choice !== m) {
            choiceOptions.push(choice)
        } else {
            i--
        }
    }
    shuffle(choiceOptions)
    for (i = 0; i < 4; i++) {
        let y = choiceOptions[i]
        if (y === m) {
            $('.choice-container').append (`
                <input type="checkbox" class = "choice-boxes" onclick= "checkAnswer(true, playWhatMovie)">${movieDataBase[y].title}<br>
                `)
        } else {
            $('.choice-container').append (`
                <input type="checkbox" class = "choice-boxes" onclick= "checkAnswer(false, playWhatMovie)">${movieDataBase[y].title}<br>
                `)
        }
    }
}              

//create random choice options
function whoSaidOptions () {
    let choiceOptions = []
    choiceOptions.push(m)
    for (i=0; i < 3; i++) {
        let choice = Math.floor(Math.random()*(moviePool))
        if (choice !== m) {
            choiceOptions.push(choice)
        } else {
            i--
        }
    }
    shuffle(choiceOptions)
    for (i = 0; i < 4; i++) {
        let y = choiceOptions[i]
        if (y === m) {
            $('.choice-container').append (`
                <input type="checkbox" class = "choice-boxes" value ="true" onclick= "checkAnswer(true, playWhoSaid)">${movieDataBase[y].speaker}<br>
                `)
        } else {
            $('.choice-container').append (`
                <input type="checkbox" class = "choice-boxes" value ="false" onclick= "checkAnswer(false, playWhoSaid)">${movieDataBase[y].speaker}<br>
                `)
        }
    }
}  

//shuffles array so choices in random order
function shuffle (array) {
    let i = 0
    let j = 0
    let temp = []
  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return temp
}

function checkAnswer(value, game){
    clearInterval(timer)
    if (value === true) {
        correct++
    } else  {
        incorrect++
    }
    showAnswer(value, game)
}

function showAnswer (value, game) {
    let status = ''
    if (value === true) {
        status = 'Awesome, you are correct!'
    } else {
        status = 'Bummer, you are wrong!'
    }
    $('#timer').html('')
    $('.movie-answer').html(`
        <div class = "${m} movie-reveal">
        <h2 class = "answer-status">${status}</h2>
        <h2 class ="${m} movie-line">"${movieDataBase[m].line}"</h2>
        <h3 class = "${m} movie-speaker">${movieDataBase[m].speaker}</h3>
        <h1 class = "${m} movie-title">${movieDataBase[m].title}</h1>
        <h3 class = "${m} movie-year">(${movieDataBase[m].year})</h3>
        </div>
        <img class="${m} poster" src = "${movieDataBase[m].picture}">
        `)
    index++
    console.log(game)
    setTimeout(game, 3000)
}

function endGame () {
    $('.movie-answer').html(`
        <div id = "end-game">
            <h1 id ="game-over">Game Over</h1>
            <h2>Correct: ${correct}</h2>
            <h2>Incorrect: ${incorrect}</h2>
            <h2>Unanswered: ${unanswered}</h2>
            <h1 id ="again">Want to play again?</h1>
            <div id ="buttons">
                <button id = "what-movie2" class ="index-pg" onclick= "reset(playWhatMovie)">What Movie?</button>
                <button id = "who-said2" class ="index-pg" onclick= "reset(playWhoSaid)">Who Said it?</button>
            </div>
        </div>
    `)
}

function reset (game) {
    correct = 0
    incorrect = 0
    unanswered = 0
    index = 0
    randomMovieArray = []
    gameSetUp()
    console.log(game)
    game()
}