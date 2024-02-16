// let var const are hoisted, but let and const are hoisited in a 
// diffrent zone called Temporal Dead Zone 

// var can be redecalred 
// let cannot be redeclared 
// const cannot be redeclared 

// var can be reassigned 
// let can be reassigned 
// const cannot be reassinged 

// var is function scoped but let and const are block scoped
// var,let,const are function scoped(function is also a block of code )
// let and const are only block scoped 


// scope  is the place where we can access the variable 

// global-scope --> anything that is not inside a function or block  is global scope 
// function scope -- what ever is in function is function scoped 
// block scope --> any variable which is declared by let and const in a block is block scoped 
// lexical scope --> outer enivorment of a function is called lexical; scope 
// chain scope --> the process of accessing the variable from parent scope and then from grandparent scope is called scope chin 







// console.log(a);
// console.log(b);
// console.log(c);

// var a = 10 ;
// let b = 100 ;
// const c = 99 ;

// console.log(a);
// console.log(b);
//  console.log(c);



// function abc(){

//     var a = 99 ;

//     let z = 90900

//     console.log(a);
// }

// console.log(z); // this will give us error 

// console.log(a);

abc();


// {
//     // this is a block 
// }

// let a = 10 ;

// {

//     let a = 10 ;
//   console.log(a);

//   {
//     console.log( a);

//     {
//         console.log(a);
//     }
//   }
// }
// console.log(a);


function first(){
    var a = 10 ;

    function second(){
        console.log(a);
    }
    
    console.log(a);

    second();
}

first();








