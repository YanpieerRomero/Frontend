export class CreditCard {
    id?: string;
    owner: string;
    cardNumber: string;
    expirationDate: string;
    cvv: number;
    creationDate: Date;
    updateDate: Date;

    constructor(owner: string, cardNumber: string, expirationDate: string, cvv: number) {
        this.owner = owner;
        this.cardNumber = cardNumber;
        this.expirationDate = expirationDate;
        this.cvv = cvv;
        this.creationDate = new Date();
        this.updateDate = new Date();
    }
}