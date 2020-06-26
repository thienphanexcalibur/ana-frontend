/**
 *  Check if object is emppty or not
 * @param {object} object 
 */
export default function isEmpty (ob) {
    for (var k in ob) {
        if (ob.hasOwnProperty(k)) {
            return false
        }
    }
    return true;
}