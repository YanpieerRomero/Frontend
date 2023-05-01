export class Employee {
  fullName: string;
  phone: number;
  email: string;
  dateOfEntry: Date;
  maritalStatus: string;
  sex: string;

  constructor(
    fullName: string,
    phone: number,
    email: string,
    dateOfEntry: Date,
    maritalStatus: string,
    sex: string
  ) {
    this.fullName = fullName;
    this.phone = phone;
    this.email = email;
    this.dateOfEntry = dateOfEntry;
    this.maritalStatus = maritalStatus;
    this.sex = sex;
  }
  
}
