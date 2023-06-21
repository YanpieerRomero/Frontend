export class Local {
    localName: string;
    description: string;
    companyCode: string;
    localCode: string;
    cnpj: string;
    cpf: string;
    address: string;
    contactTelephone: string;
    contactEmail: string;
    observations: string;

    constructor(localName: string, description: string, companyCode: string,
                localCode: string, cnpj: string, cpf: string, address: string, 
                contactTelephone: string, contactEmail: string, observations: string) {
        this.localName = localName;
        this.description = description;
        this.companyCode = companyCode;
        this.localCode = localCode;
        this.cnpj = cnpj;
        this.cpf = cpf;
        this.address = address;
        this.contactTelephone = contactTelephone;
        this.contactEmail = contactEmail;
        this.observations = observations;
    }
}