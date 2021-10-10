export function getFirstWord(str) {
    const spaceIndex = str.indexOf(' ');
    return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
};

export function removeFirstWord(str) {
    const spaceIndex = str.indexOf(' ');
    return spaceIndex === -1 ? "" : str.substr(spaceIndex + 1);
}

export function getFirstLetter(str) {
    return str[0]
}

export function getLastLetter(str) {
    return str[str.length - 1]
}

export function addLetter(str, letter) {
    return str + letter
}

export function removeFirstLetter(str) {
    return str.substr(1)
}

export function removeFirstSpaces(str) {
    let number = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") break;
        number++;
    }
    return str.substr(number);
}