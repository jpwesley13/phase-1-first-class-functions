function receivesAFunction(who) {
    return who();
}

function returnsANamedFunction() {
    return function weapon() {}
}

function returnsAnAnonymousFunction() {
    return function(){};
}