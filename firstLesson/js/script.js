"use strict";

// let answers = {};
// answers.name = prompt('What is your name?', '');
// answers.sorname = prompt('What is sorname name?', '');
// answers.age = prompt('What is your age', '');

// console.log(answers);


// const numberOfFilms = +prompt('How many movies have you seen?', '');
// let personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
// };
// const a = prompt('One of the last movies you have seen?', ''),
//       b = +prompt('How you score it?', ''),
//       c = prompt('One of the last movies you have seen?', ''),
//       d = +prompt('How you score it?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


const questionList = ['How many movies have you seen?', 'One of the last movies you have seen?', 'How you score it?'];
//console.log(questionList[0]);

let personalMovieDB = {
            count: 0,
            movies: {},
            actors: {},
            genres: [],
            privat: true,
            start: function() {
                let numberOfMovies;
                while (numberOfMovies === '' || isNaN(numberOfMovies) || !numberOfMovies || numberOfMovies === null) {
                    numberOfMovies = +prompt('How many movies have you seen?', '');
                    if (numberOfMovies === '' || isNaN(numberOfMovies) || !numberOfMovies || numberOfMovies === null) {
                        alert('You should fill the field with number');
                    }
                }

                personalMovieDB['count'] = numberOfMovies;
            },
            detectPersonalLevel: function() {
                let lastMovie, score;
                while (!lastMovie ||  lastMovie === '' || lastMovie.length > 50 || lastMovie === null){

                    lastMovie = prompt('One of the last movies you have seen?', '');

                    if (!lastMovie ||  lastMovie === '' || lastMovie === null) { 
                        alert('You should fill the field with name of the movie'); 
                        lastMovie = '';
                    }


                    if (lastMovie.length > 50) { 
                        alert('Length of name of the movie should be shorter than 50 symbols'); 
                    } 
                    //console.log(lastMovie);

                }

                while (!score || isNaN(score) || score==='' || score === null) {

                    score = +prompt('How do you score it?', '');

                    if (isNaN(score)) { alert('Enter a number');}

                    if (!score || score==='' || score === null) {
                        alert('You should fill the field with the rate');
                    }
                }

                personalMovieDB.movies[lastMovie] = score;
            },
            showMyDB: function() {
                if (!personalMovieDB.privat) {
                    console.log(personalMovieDB);
                }
            },
            writeYourGenres: function() {
                let genre;
                for (let i=1; i<4; ++i) {
                    genre = prompt(`Your favorite genre number ${i}`, '');
                    if (genre &&  genre != '' && genre.length < 50 && genre != null) {
                        personalMovieDB.genres.push(genre);
                    }else{
                        i=i-1;
                    }
                }
                let x=1;
                personalMovieDB.genres.forEach(element => {
                    console.log(`Favorite genre ${x} - is ${element}`);
                    ++x;
                });
            },
            toggleVisibleMyDB: function() {
                personalMovieDB.privat = personalMovieDB.privat === true ? false : true; 
            }
};

// function start() {
//     let numberOfMovies;
//         while (numberOfMovies === '' || isNaN(numberOfMovies) || !numberOfMovies || numberOfMovies === null) {
//             numberOfMovies = +prompt('How many movies have you seen?', '');
//             if (numberOfMovies === '' || isNaN(numberOfMovies) || !numberOfMovies || numberOfMovies === null) {
//                 alert('You should fill the field with number');
//             }
//         }

//         personalMovieDB['count'] = numberOfMovies;
// }

// function detectPersonalLevel() {
//     let lastMovie, score;
//         while (!lastMovie ||  lastMovie === '' || lastMovie.length > 50 || lastMovie === null){

//             lastMovie = prompt('One of the last movies you have seen?', '');

//             if (!lastMovie ||  lastMovie === '' || lastMovie === null) { 
//                 alert('You should fill the field with name of the movie'); 
//                 lastMovie = '';
//             }


//             if (lastMovie.length > 50) { 
//                 alert('Length of name of the movie should be shorter than 50 symbols'); 
//             } 
//             //console.log(lastMovie);

//         }

//         while (!score || isNaN(score) || score==='' || score === null) {

//             score = +prompt('How do you score it?', '');

//             if (isNaN(score)) { alert('Enter a number');}

//             if (!score || score==='' || score === null) {
//                 alert('You should fill the field with the rate');
//             }
//         }

//         personalMovieDB.movies[lastMovie] = score;

// }

for (let i = 0; i<=2; ++i) {
    if (i===0) {
        personalMovieDB.start();
    } else {
        personalMovieDB.detectPersonalLevel();
    }
}

// function showMyDB() {
//     if (!personalMovieDB.privat) {
//         console.log(personalMovieDB);
//     }
// }


// function writeYourGenres() {
//     let genre;
//     for (let i=1; i<4; ++i) {
//         genre = prompt(`Your favorite genre number ${i}`, '');
//         if (genre &&  genre != '' && genre.length < 50 && genre != null) {
//             personalMovieDB.genres.push(genre);
//         }else{
//             i=i-1;
//         }
//     }
// }

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();


