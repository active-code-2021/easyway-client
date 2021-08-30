import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  insertOrder:FormGroup=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    phoneNumber:new FormControl(),
    email:new FormControl(),
    address:new FormControl(),
  });
  constructor(private orderService :OrderService) { }

  ngOnInit(): void {
    
  }
  getErrorMessage() {
    if (this.insertOrder.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.insertOrder.get('email').hasError('email') ? 'Not a valid email' : '';
  }
  addOrder():void{
    
      
      this.orderService.addOrder(this.insertOrder.value).subscribe(res => 
        
        {debugger
          console.log("good")
        },error =>{console.log("error")});
     // this.router.navigate(['borrowList']);
    
  }
}


