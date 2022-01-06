import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DeliveryMan } from "../classes/delivery-man";


@Injectable({
  providedIn: "root",
})
export class DeliveryManService {
  constructor(private http: HttpClient) {}
  debugger;
  getDeliveryMen(): Observable<DeliveryMan[]> {
    var deliveryMen = this.http.get<DeliveryMan[]>(`${environment.apiUrl}/DeliveryMan`);
    return deliveryMen;
  }
}
