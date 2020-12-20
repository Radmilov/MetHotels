import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  hotels = [
    {
        "name": "Hyatt Regency",
        "capacity": 250,
        "price": 99,
        "img_url": "https://avatarfiles.alphacoders.com/893/thumb-89303.gif"
    },
    {
        "name": "Radmilo's Hotel",
        "capacity": 200,
        "price": 149,
        "img_url": "https://avatarfiles.alphacoders.com/893/thumb-89303.gif"

    },
    {
        "name": "Some Other Regency",
        "capacity": 150,
        "price": 200,
        "img_url": "https://avatarfiles.alphacoders.com/893/thumb-89303.gif"

    },
    {
        "name": "Metropolitan Regency",
        "capacity": 100,
        "price": 300,
        "img_url": "https://avatarfiles.alphacoders.com/893/thumb-89303.gif"

    }
];
  title = 'MetHotels';
  pipePrice: number = 0;

  updateFilter(filter: HTMLInputElement){
    this.pipePrice = +filter.value;
  }

  dodajHotel(forma: Hotel){
    this.hotels.unshift({
      "name": forma.name,
      "capacity": forma.capacity,
      "price": forma.price,
      "img_url": ""
    })
  }

  deleteHotel(hotel: Hotel){
    this.hotels.splice(this.hotels.indexOf(hotel),1);
  }
  
}
export interface Hotel {
  name: string,
  capacity: number,
  price: number,
  img_url: string;
}
