const suspectedElements = {
    whoDoneIt: ['Miss Scarlett', 'Professor Plum', 'Mrs. Peacock', 'Colonel Mustard', 'Mrs. White', 'Mr. Green'],
    whereItDone: ['ballroom', 'billiard room', 'conservatory', 'dining room', 'hall', 'kitchen', 'library', 'lounge', 'study'],
    whatDoneIt: ['candlestick', 'knife', 'lead pipe', 'revolver', 'rope', 'wrench']
};

let accusation = [];
let randomSelect = arrayLength => {
    return Math.floor(Math.random() * arrayLength);
}

for (let element in suspectedElements) {
    let randomIndex = randomSelect(suspectedElements[element].length);
    switch (element) {
        case 'whoDoneIt':
            accusation.push(`I accuse ${suspectedElements[element][randomIndex]},`);
            break;
        case 'whereItDone':
            accusation.push(`in the ${suspectedElements[element][randomIndex]},`);
            break;
        case 'whatDoneIt':
            accusation.push(`with the ${suspectedElements[element][randomIndex]}.`);
            break;
    }
}

console.log(accusation.join(' '));