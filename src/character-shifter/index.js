const shiftAmount = 13;
const minLowerCaseCharCode = 97;
const minUpperCaseCharCode = 65;
const numberOfAlphabeticalCharacters = 26;

function isLowerCase(char) {
    return /[a-z]/.test(char);
}

function getShiftedChar(charCode, minCharCode) {
    const base26CharCode = charCode - minCharCode;

    return minCharCode + (base26CharCode + shiftAmount) % numberOfAlphabeticalCharacters;
}

function shiftChar(char) {
    const charCode = char.charCodeAt(0);

    const minCharCode = isLowerCase(char) ? minLowerCaseCharCode : minUpperCaseCharCode;

    const shiftedChar = getShiftedChar(charCode, minCharCode);

    return String.fromCharCode(shiftedChar);
}

function hasInvalidChar(chars) {
    return !/[a-zA-Z]/.test(chars);
}

export function shiftChars(chars) {

    if (hasInvalidChar(chars)) {
        throw new Error('invalid character present');
    }

    return chars.split('')
        .reduce((acc, curr) => {
            return acc + shiftChar(curr);
        }, '');
}
