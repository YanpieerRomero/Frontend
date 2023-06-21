export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Yanpieer',    
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth'],    
}

const returnChildrenNumber = (passenger: Passenger): number => {

    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
    
}

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);
// printChildren(passenger1);