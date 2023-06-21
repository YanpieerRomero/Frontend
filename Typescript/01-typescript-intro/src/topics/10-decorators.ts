function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'Override';
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hello World');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);

