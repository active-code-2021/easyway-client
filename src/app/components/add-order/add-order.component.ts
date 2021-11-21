import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OrderService } from "src/app/services/order.service";

import { Title } from "@angular/platform-browser";
import {
  Location,
  Appearance,
} from "@angular-material-extensions/google-maps-autocomplete";
//import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: "app-add-order",
  templateUrl: "./add-order.component.html",
  styleUrls: ["./add-order.component.css"],
})
export class AddOrderComponent implements OnInit {
  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  selectedAddress: PlaceResult;
  insertOrder: FormGroup;
  //coordinates: Location;
  // coordinatesLon: Location;
  // coordinatesLat: Location;
  constructor(
    private orderService: OrderService,
    private titleService: Title
  ) {}
//[05[0-9]?\\d{7}]
///^05\d([-]{0,1})\d{7}$/
  ngOnInit(): void {
    this.insertOrder = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Zא-ת]+$')]),//check validation for minlength
      phone: new FormControl('',[Validators.required,Validators.pattern( /^05\d([-]{0,1})\d{7}$/)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      address: new FormControl(),
    });
    this.insertOrder.get("address").valueChanges.subscribe((value) => {
      console.log("value changed", value);
    });

    this.titleService.setTitle(
      "AddAddress | @angular-material-extensions/google-maps-autocomplete"
    );

    this.zoom = 10;
    this.latitude = 32.0548761477756;
    this.longitude = 34.96419708686489;

    this.setCurrentPosition();

    this.insertOrder
      .get("address")
      .valueChanges.subscribe((value) => console.log("value changed", value));
  }  
  addOrder(): void {
    //addressLon = { coordinates: this.coordinates };
    debugger;
    // const addressLon = { coordinates: this.longitude };
    // const addressLat = { coordinates: this.latitude };

    const addressLon = this.longitude ;
    const addressLat =  this.latitude ;
    console.log({ ...this.insertOrder.value, addressLon,addressLat });
    
    this.orderService
      //.addOrder({ ...this.insertOrder.value, address })
      .addOrder({ ...this.insertOrder.value, addressLon,addressLat })
      .subscribe(
        (res) => {
          console.log("good", res);
        },
        (error) => {
          console.log("error");
        }
      );
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 3;
      });
    }
  }
  onAutocompleteSelected(result: PlaceResult) {
    console.log("onAutocompleteSelected: ", result);
  }
  onLocationSelected(location: Location) {
    console.log("onLocationSelected: ", location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
    //this.coordinatesLon = location;
  }
}
