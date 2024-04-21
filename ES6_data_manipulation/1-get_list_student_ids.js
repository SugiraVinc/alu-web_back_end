// getListStudentIds that returns an array of ids from a list of object
function getListStudentIds(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
    }
    
    return arrayOfObjects.map((student) => student.id);
}
export default getListStudentIds;
