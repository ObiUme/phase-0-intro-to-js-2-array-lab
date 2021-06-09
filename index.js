const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

function destructivelyAppendCat(name) {
    return cats.push(name);
}
destructivelyAppendCat('Ralph');

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
destructivelyPrependCat('Bob');

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

function destructivelyRemoveLastCat () {
    return cats.pop();
}
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

function destructivelyRemoveFirstCat() {
    return cats.shift();
}
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

function appendCat(name) {
    return [...cats, name];
}
appendCat('Broom');

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

function prependCat(name) {
    return [name, ...cats]
}
prependCat('Arnold');

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

function removeLastCat() {
    return cats.slice(0, -1);
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

function removeFirstCat() {
    return cats.slice(1);
}