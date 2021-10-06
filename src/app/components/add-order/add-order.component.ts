import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';


import { Title } from '@angular/platform-browser';
import { Location, Appearance } from '@angular-material-extensions/google-maps-autocomplete';
//import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult;


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  selectedAddress: PlaceResult;
  insertOrder: FormGroup;

  constructor(private orderService: OrderService, private titleService: Title) { }


  ngOnInit(): void {
    this.insertOrder = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),

      phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
    });
    this.insertOrder.get('address').valueChanges.subscribe((value) => {
      console.log('value changed', value)
    });

    this.titleService.setTitle('AddAddress | @angular-material-extensions/google-maps-autocomplete');

    this.zoom = 10;
    this.latitude = 32.0548761477756;
    this.longitude = 34.96419708686489;

    this.setCurrentPosition();

    this.insertOrder.get('address').valueChanges.subscribe(value => console.log('value changed', value))


  }
  getErrorMessage() {
    if (this.insertOrder.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.insertOrder.get('email').hasError('email') ? 'Not a valid email' : '';
  }
  addOrder(): void {


    this.orderService.addOrder(this.insertOrder.value).subscribe(res => {
      debugger
      console.log("good", res)
    }, error => { console.log("error") });
    // this.router.navigate(['borrowList']);

  }
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 3;
      });
    }
  }
  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }
  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }


}







