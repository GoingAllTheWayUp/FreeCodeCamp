// https://www.freecodecamp.com/challenges/smallest-common-multiple
// Seems straight forward, its not. Becuase not only do you need to find the
// whats actualy called the LCM "Least common multiplyer" of two user
// defined numaric values. You will also be required to produce the
// range between the two values in order to determin the value that
// this range has its LCM.
// Need to knows:
// Least Common Multiplye (LCM)
// Greatest Common Demoninator (GCD)
// The Euclidean algorithm
// ** It must be mentioned that there are many other ways to skin this
// cat with just logic. **

function euclidean (integerMax, integerLower) {
    if (integerLower === 0)
        return integerMax;
    else
      console.log("euclidean" + euclidean(integerLower, integerMax % integerLower));
        return euclidean(integerLower, integerMax%integerLower);
    }

    function smallestCommons(LCM) {
      var sortedLCM = LCM.sort( function ( a , b ) { return b - a; } ); // Sorts array from smallest to largest
      var integerLower = sortedLCM[1];
      var integerMax = sortedLCM[0];
      var rangeLCM = [];
      for ( var i = integerLower ; i <= integerMax ; i++ ) {
        rangeLCM = rangeLCM.concat(i);
      } // Creates array based on given LCM range
console.log("Final range of LCM : " + rangeLCM);
      
// Some MoJo that I did not understand right away
   /*
       var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;
   */
//  Translated into common mathmatical terms.

      var lestCommonMultiplyer = rangeLCM[0];
      
      for ( var j = 0 ; j < rangeLCM.length ; j++ ) {
      
        var GreatestCommonDemoninator = euclidean(lestCommonMultiplyer, rangeLCM[j]);

        lestCommonMultiplyer = ((lestCommonMultiplyer * rangeLCM[j]) / GreatestCommonDemoninator);
        
      }
      
      return lestCommonMultiplyer;
    }
    
    smallestCommons([1,5]);
