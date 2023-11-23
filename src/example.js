/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns {import("./types.js").OneObject}
 */
function createOneObjectInlineImport(firstName, lastName) {
    return {
        firstName, lastName
    }
}
const exampleObject2 = createOneObjectInlineImport("John", "Doe");


console.log(exampleObject2.firstName);
console.log(exampleObject2.otherProperty)
console.log(exampleObject2.notExistingProperty)
