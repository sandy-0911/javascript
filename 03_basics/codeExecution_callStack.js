//Global Execution Context
//Functional Execution Context
//Eval Execution Context 

//two phases mai run hota hai js code
//1. memory creation phase
//2. execution phase

// let val1 = 10    
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result1 =addNum(val1, val2)
// let result2 = addNUm(10,2)


//most basic thing that happens is creation of global execution context where it is assigned to "this"
//memory creation phase starts, variables are created and each one of them is assigned value undefined
//val1 - undefined 
//val2 - undefined
//addNum - definition jaeygi isme (line 6 tak)
// result1 - undefined 
//result2 - undefined
//first cycle

// execution phase
//val1 - 10;
//val2 - 5
//addNum - kuch nahi excute hoga 
//result1 -addNum ka executional contexrt banega , usme new variable environmet + execution thread
//usme fir memory creation phase and execution phase dono firse run honge 
//khud ke global executional context mai return hogi value function ki 
//executional ciontext kisi functionka kaam hione ke baad delete bhi hota hai



//call stack
//bhot similar hai c++ se 
//function ayega global wala 
//ek ke baad ek//lifo concept lagega


