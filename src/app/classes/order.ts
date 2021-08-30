export class Order {
constructor(firstName: string,lastName: string,email: string,phone: string,orderId: number){
this.firstName = firstName;
this.lastName = lastName;
this.phone = phone;
this.orderId = orderId;
this.email=email;
    }
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    orderId: number
}
