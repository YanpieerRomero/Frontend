export class Employee {
    id: number;
    name: string;
    lastname: string;
    sex: string;
    salary: number;

    constructor(id: number, name: string, lastname: string, sex: string, salary: number) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.sex = sex;
        this.salary = salary;
    }
}