import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../classes/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  addOrder(order:Order):Observable<boolean>{
return this.http.post<boolean>(`https://localhost:44339/Order`,order);
  }
}
