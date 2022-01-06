export class DeliveryMan {
    constructor(firstName: string,lastName: string,email: string, phone: string
       ,tz:string,active:boolean) {
        this.firstName = firstName;
        this.phone = phone;
        this.lastName = lastName;
        this.email =email;
        this.tz= tz;
        this.active =active;
    }
    firstName: string;
 
    email: string;
    phone: string;
    lastName: string;
    tz: string;;
    active: boolean;
}

