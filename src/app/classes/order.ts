export class Order {
constructor(firstName: string,lastName: string,mail: string,phone: string,orderId: number){
this.firstName = firstName;
this.lastName = lastName;
this.phone = phone;
this.orderId = orderId;
this.mail=mail;
    }
    firstName: string;
    lastName: string;
    mail: string;
    phone: string;
    orderId: number
}
