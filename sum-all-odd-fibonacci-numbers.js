
// I have seen many solutions, but all seemed naive,
// so me and https://github.com/crokita, worked with 
// the idea of resolving the Fibonacci sequence 
// backwards from any  user defined numeric value. 
// That created the new requirement in finding the 
// Fibonacci number pair that surrounded any user defined
// numeric value in order to compute the Fibonacci sequence
// backwards. All formulas used @
// https://en.wikipedia.org/wiki/Fibonacci

// return the Fibonacci number @ index "n" in standard Fibonacci squence. 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765, etc.
function findNth(n) {
    var sqrt5 = Math.sqrt(5);
    var phi = (sqrt5+1)/2;
    return Math.round(Math.pow(phi, n)/sqrt5);
}

// return a Reversed Fibonacci squence begining from two Fibonacci numbers; Thanks @crokita, FCC
function reverseFib(lower, upper) { 
    var reverseSequence = [];
    reverseSequence.push(upper);
    reverseSequence.push(lower);
    //make sure lower and upper aren't both 1. if they are, then there's nothing to compute
    if (lower === 1 && upper === 1) {
        return reverseSequence;
    }

    var currentLowest = reverseSequence[reverseSequence.length - 1];
    while (currentLowest !== 1) {
        //compute the next number in the sequence and make that number the current lowest
        //use the two lowest numbers in reverseSequence to compute this 
        currentLowest = reverseSequence[reverseSequence.length - 2] - reverseSequence[reverseSequence.length - 1];
        reverseSequence.push(currentLowest);
    }
    //we hit 1. The reverse sequence should actually be ....8,5,3,2,1,1. Push another 1 into the sequence
    reverseSequence.push(1);
    return reverseSequence;
}

// return true if value in question is an odd value
function isOdd(value){
    if (value%2 === 0)
        return false;
    else
        return true;
}

var carryOddFibonacci = [];

function sumFibs(userDefined){
// Proccess to obtain upper and lower Fibonacci number pair from any user defined value
  for ( var i = 0 ; i < 64 ; i++) {
  //the value "64" is an arbitrary limit since the Fibonacci squence is infinit.
  var upperFib = findNth(i + 1);
  var lowerFib = findNth(i);  
      if ((userDefined >= lowerFib) && (userDefined <= upperFib)) {

            var FibonacciReversed = reverseFib(lowerFib, upperFib);
            var OddFibonacci = [];

  // .push() to a new array with only odd values from FibonacciReversed
                for ( var j = 1 ; j < FibonacciReversed.length ; j++ ) { // j = 1 to offset the upper Fibonacci number we supplied earlyer
                   if ( isOdd(FibonacciReversed[j]) ) {
                    OddFibonacci.push(FibonacciReversed[j]);
                   }
                  carryOddFibonacci = OddFibonacci;
                }
      }
  }
  
  return carryOddFibonacci.reduce(function(acc, val) { return acc + val; }, 0);
  
}

sumFibs(4);
