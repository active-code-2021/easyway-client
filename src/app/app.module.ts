import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { UploadFileComponent } from './upload-file/upload-file.component';
// import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';

import { AgmCoreModule } from '@agm/core';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
//import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    AddAddressComponent,
    AddOrderComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
 
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFileUploadModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBFVQTB-gOzy3rhID9yuz8ejN_QL70qCqQ',
      libraries: ['places']
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
