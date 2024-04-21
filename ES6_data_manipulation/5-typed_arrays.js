//  a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position
// It should accept three arguments: length (Number), position (Number), and value (Number
// If adding the value is not possible the error Position outside range should be thrown

function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
    }
  
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;
  
  return new DataView(buffer);
}
export default createInt8TypedArray;
