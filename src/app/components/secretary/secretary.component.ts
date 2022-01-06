import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/classes/order';
import { SecretaryService } from 'src/app/services/secretary.service';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent implements OnInit {
countOrders: number;
orders:Order[]=[];
route:string[]=[];
  constructor(private _secretaryService: SecretaryService) { }

  ngOnInit(): void {
// this._secretaryService.getOrders().subscribe(res=>this.orders = res);
// this.countOrders=this.orders.filter(order=>order.don)
debugger;
this._secretaryService.getDoneOrders().subscribe(res=>{this.countOrders = res},err=>{console.log("not good :(")});
//   }
}
getRoute(){
  this._secretaryService.getRoute().subscribe(res=>{this.route=res},err=>{console.log("not good :(")})
}
}
