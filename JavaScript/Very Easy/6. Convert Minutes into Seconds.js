//Write a function that takes an integer minutes and converts it to seconds.
// convert(5) -> 300
// convert(3) ->180
// convert(2) ->120
//Don't forget to return the result.

function convert(minutes){
    
}


let result=[];
convert(5)===300? result.push(true):result.push(false);
convert(3)===180? result.push(true):result.push(false);
convert(2)===120? result.push(true):result.push(false);
result.map(index=>{
    index===true? console.log('Result : Passed!'):console.log('Result : Failed!');
});
console.log(convert(5),'\n',convert(3),'\n',convert(2));