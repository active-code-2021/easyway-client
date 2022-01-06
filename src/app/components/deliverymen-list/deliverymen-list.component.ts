import { Component, OnInit } from '@angular/core';
import { DeliveryMan } from 'src/app/classes/delivery-man';
import { DeliveryManService } from 'src/app/services/delivery-man.service'
@Component({
  selector: 'app-deliverymen-list',
  templateUrl: './deliverymen-list.component.html',
  styleUrls: ['./deliverymen-list.component.css']
})
export class DeliverymenListComponent implements OnInit {
deliverymenList:DeliveryMan[]=[];
deliverymenListActive1:DeliveryMan[]=[];
displayedColumns: string[] = ['firstName', 'lastName', 'phone', 'active'];
  constructor(private DeliveryManService:DeliveryManService) { }

  ngOnInit(): void {
   
    this.DeliveryManService.getDeliveryMen().subscribe(res=>{this.deliverymenListActive1=res},err=>{console.log("not good :(")})

  }
   getDeliveryManListActive(){
 
   
    this.DeliveryManService.getDeliveryMen().subscribe(res => {
      this.deliverymenList=res;
      debugger
      this.deliverymenListActive1= this.deliverymenList.filter(delivery => delivery.active)
        console.log(this.deliverymenListActive1)
    },err=>{console.log("not good :(")});
     
}
getDeliveryManList(){
this.DeliveryManService.getDeliveryMen().subscribe(res=>{this.deliverymenListActive1=res},err=>{console.log("not good :(")})
}
}
