//create 2 arrays:
const array1=['abc', 'def', 'ghi'];
const array2=['jkl','mno','pqr'];
//combine the arrays into a new array
// and add 2 more elements:
const all=[...array1, ...array2, 'stu', 'vwxyz'];
//pointer to the all array:
const allPointer=all;
//create a copy of the array by using spreading
const allCopy=[...all];


export function testSpreading(){
    debugger;
    console.log(all);
    allPointer[0]='1';
    //both all and allPointer was updated:
    console.log(all[0]);
    //this is a copy that wasn't updated:
    console.log(allCopy[0]);
}
