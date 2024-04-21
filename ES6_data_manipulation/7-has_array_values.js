//  function hasValuesFromArray that returns a boolean 
//..if all the elements in the array exist within the set
// accepts two arguments: a set (Set) and an array (Array)

function hasValuesFromArray(set, array) {
  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }

  return true;
}
export default hasValuesFromArray;
