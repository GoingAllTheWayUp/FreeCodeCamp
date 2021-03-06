// https://www.freecodecamp.com/challenges/sorted-union ask simply
// enough to remove duplactes and maintain array order.
// But the FCC solution accpeted this code as passing its assertion test:
  // uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
  // uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
  // uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
  // uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
// Although, my code used here does pass said test, it will not be a real world solution,
// since running uniteUnique([1], [2,[1,0]], [3, 2,[1,0]]); will not return a logical or useable result.
/* ::Console print out::
uniqueArray: 1,2,1,0,3,2,1,0
VM1235:10 element: 1, index: 0, array: 1,2,1,0
VM1235:10 element: 2, index: 1, array: 1,2,1,0
VM1235:10 element: 1,0, index: 2, array: 1,2,1,0
VM1235:10 element: 1, index: 0, array: 1,2,1,0,3,2,1,0
VM1235:10 element: 2, index: 1, array: 1,2,1,0,3,2,1,0
VM1235:10 element: 1,0, index: 2, array: 1,2,1,0,3,2,1,0
VM1235:10 element: 3, index: 3, array: 1,2,1,0,3,2,1,0
VM1235:10 element: 2, index: 4, array: 1,2,1,0,3,2,1,0
VM1235:10 element: 1,0, index: 5, array: 1,2,1,0,3,2,1,0
*/
// this issue was disscued @ https://github.com/freeCodeCamp/freeCodeCamp/issues/13778
// imho never resolved.

function uniteUnique(...uniqueArray) {
// spreads ([1], [2,[1,0]], [3, 2,[1,0]]) to ([1], [2,1,0], [3,2,1,0])
  console.log("uniqueArray: " + uniqueArray);
  
            // .reduce() with .concat()  ([1], [2,1,0], [3,2,1,0]) to ([1], [2,1,0], [3,2,1,0])
            return uniqueArray.reduce(function(accumulator,currentValue){
              //
              return accumulator.concat(currentValue).filter(function(element,index,array){
               console.log("element: " + element + ", index: " + index + ", array: " +array);
            
                
                // return the element only if it exists at its own index position
                return index == array.indexOf(element);
                
            });
           });
          }
uniteUnique([1], [2,[1,0]], [3, 2,[1,0]]);
