function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function namedFunction(){
        console.log("I am named")
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("I am anonymous")
    }
}