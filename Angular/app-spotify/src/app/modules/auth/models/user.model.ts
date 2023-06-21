import { Data } from "./data.model";

export class User {
    constructor(
        public data: Data,
        public tokenSession: string
        ){}
}