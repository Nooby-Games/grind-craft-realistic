// Returns true if the value is not undefined
function verifyExistence(value) {
    return typeof value !== "undefined";
}

// Returns true if the value is a number
function verifyNumber(value, allowUndefined = false) {
    return typeof value === "number" || (allowUndefined && value === undefined);
}

// Returns true if the value is a string
function verifyString(value, allowUndefined = false) {
    return typeof value === "string" || (allowUndefined && value === undefined);
}

// Returns true if the value is a number between min and max
function verifyMinMaxNumber(value, min, max) {
    if (!verifyNumber(value)) return false;

    if (min !== undefined && value < min) return false;
    if (max !== undefined && value > max) return false;

    return true;
}