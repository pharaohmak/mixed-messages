const suspectedElements = {
    whoDoneIt: ['Daphne', 'Velma', 'Shaggy', 'Scooby Doo', 'Scrappy Dappy Doo', 'Fred'],
    whereItDone: ['ballroom', 'billiard room', 'conservatory', 'dining room', 'hall', 'kitchen', 'library', 'lounge', 'study'],
    whatDoneIt: ['tainted water', 'knife', 'lead pipe', 'revolver', 'rope', 'Mystery Van']
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

document.getElementById('generateMessage').addEventListener('click', () => {
    document.getElementById('result').innerText = accusation.join(' ');
});