const letterToNumberMap = {
    'M': 1, 'O': 2, 'T': 3, 'H': 4, 'E': 5,
    'R': 6, 'L': 7, 'A': 8, 'N': 9, 'D': 0,
    'K': '00', 'P': '000'
};

const numberToLetterMap = {
    '1': 'M', '2': 'O', '3': 'T', '4': 'H', '5': 'E',
    '6': 'R', '7': 'L', '8': 'A', '9': 'N', '0': 'D',
    '00': 'K', '000': 'P'
};

function convert() {
    const input = document.getElementById('inputData').value;
    let result = '';

    if (isNaN(input)) {
        // If input is letters
        result = lettersToNumber(input);
        result = Math.floor(result / 2); // Divide by 2 for letter input
    } else {
        // If input is numbers
        result = numbersToLetters(input);
    }

    document.getElementById('result').textContent = result;
}

function lettersToNumber(letters) {
    let total = '';
    for (let letter of letters.toUpperCase()) {
        if (letterToNumberMap[letter] !== undefined) {
            total += letterToNumberMap[letter];
        }
    }
    return total;
}

function numbersToLetters(numbers) {
    let result = '';
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] === '0' && numbers[i+1] === '0' && numbers[i+2] === '0') {
            result += 'P';
            i += 3;
        } else if (numbers[i] === '0' && numbers[i+1] === '0') {
            result += 'K';
            i += 2;
        } else {
            result += numberToLetterMap[numbers[i]];
            i++;
        }
    }
    return result;
}
