


//randomly pick 10 movies for quiz
let randomMovieArray = []
let moviePool = movieDataBase.length
for (i = 0; i < 10; i++) {
    let movieNumber = Math.floor(Math.random()*(moviePool))
    if (randomMovieArray.indexOf(movieNumber) === -1) {
    randomMovieArray.push(movieNumber)
    console.log(randomMovieArray)
    } else {
        i--
    }
}

//get info from 10 random movies
for (i = 0; i < randomMovieArray.length; i++) {
    let index = randomMovieArray[i]
    console.log(index)
    $('#movie').append(`
    <h1>${index}  ${movieDataBase[index].title}</h1>
    <img src = "${movieDataBase[index].picture}">
    <h3>${movieDataBase[index].speaker}</h3>
    `)
}