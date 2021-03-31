"use strict";

// let answers = {};
// answers.name = prompt('What is your name?', '');
// answers.sorname = prompt('What is sorname name?', '');
// answers.age = prompt('What is your age', '');

// console.log(answers);


const numberOfFilms = +prompt('How many movies have you seen?', '');
let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};
const a = prompt('One of the last movies you have seen?', ''),
      b = +prompt('How you score it?', ''),
      c = prompt('One of the last movies you have seen?', ''),
      d = +prompt('How you score it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



