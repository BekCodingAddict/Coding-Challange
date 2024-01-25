//Create a function that takes two numbers as arguments and returns their sum.
// Example:
// addition(2,3) -> 5
// addition(-3,-6)-> -9
// addition(7.3,2.8) -> 10.1

function addition(a,b){
    
}

// Don't forget to return the result!

let result=[]
    addition(2,3)===5? result.push(true): result.push(false);
    addition(-3,-6)===-9? result.push(true): result.push(false);
    addition(7.3,2.8)===10.1 ? result.push(true): result.push(false);

result.map(index=>{
    index===true? console.log('Result: Passed!'): console.log('Result: Failed!');
})