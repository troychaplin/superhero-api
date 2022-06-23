// Make first letter uppercase
export const FirstLetterUpper = (text) => {
    var firstChar = text.substring(0, 1);
    var restOfString = text.substring(1);

    return firstChar.toUpperCase() + restOfString;
};
