/*function greeting(askName:()=>void){
    console.log("hello greet")
    askName()
}
function askName(){
    console.log("Enter your name")
}
greeting(askName)*/
//Asynchronous program (code)
console.log("first");
//bulit-in Asnchronous function
setTimeout(() => {
   console.log("second"); 
}, 0);
for (let i = 0; i <=100000; i++) {
    console.log("abc")
}
console.log("third");