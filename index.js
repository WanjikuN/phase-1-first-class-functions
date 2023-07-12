// function receivesAFunction(callback) {
//     return  callback();
// }

const receivesAFunction = (callback) => {
    return  callback();
}

const returnsANamedFunction = () => {
    return function myName(){
        return "this is a named function";
    }

}
const returnsAnAnonymousFunction = () => {
    return function (){
        return "This is an anonymouss function";
    }
}