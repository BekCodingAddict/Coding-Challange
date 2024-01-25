import { HelloWorld } from "./FristTest.js";


const internal=HelloWorld();
const external="Hello World";

function Compare(a,b){
    return a===b? true:false;
}

export {Compare,external};