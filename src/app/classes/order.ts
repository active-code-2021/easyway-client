export class Order {
    //אולי בלי address
    constructor(name: string, mail: string, phone: string
        , orderId: number,address:object,addressLon:number,
        addressLat:number) {
        this.name = name;
        
        this.phone = phone;
        this.orderId = orderId;
        this.mail = mail;
        this.address= address;
        this.addressLat= addressLat;
        this.addressLon= addressLon;
    }
    name: string;
 
    mail: string;
    phone: string;
    orderId: number;
    address:object
    addressLon:number;
    addressLat:number;
}
