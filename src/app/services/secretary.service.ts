import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../classes/order';

@Injectable({
  providedIn: 'root'
})
export class SecretaryService {

  constructor(private http: HttpClient) { }
  getOrders():Observable<Order[]> {
    var order=this.http.get<Order[]>(`${environment.apiUrl}/Order`);
    return order;
  }
  getDoneOrders():Observable<number> {
    debugger;
    var doneOrder=this.http.get<number>(`${environment.apiUrl}/Order/DoneOrders`);
    return doneOrder;
  }
  getRoute():Observable<string[]> {
    var route=this.http.get<string[]>(`${environment.apiUrl}/Order/Route`);
    console.log(route);
    return route;
  }

}
