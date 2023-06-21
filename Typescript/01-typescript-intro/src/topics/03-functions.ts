function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${ a + b }`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}


// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);
// console.log({ result, result2, multiplyResult });

interface Character {
    name: string;
    healthPoint: number;
    showHealthPoint: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
    character.healthPoint += amount;
}

const strider: Character = {
    name: 'Strider',
    healthPoint: 50,
    showHealthPoint() {
        console.log(`Health points ${ this.healthPoint }`);        
    },
}

healCharacter(strider, 10);
healCharacter(strider, 50);
strider.showHealthPoint();

export {};