import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';


@Component({
  selector:'my-app',
  template: `
  <div class="container">
    <div class="title">Alvaro and Jackson's Music store</div>
    <h1>Your Cart Total:{{ cartTotal }}$ </h1>
    <select (change)="genreSel($event.target.value)">
      <option value="All">All</option>
      <option value="Rap">Rap</option>
      <option value="Rock">Rock</option>
      <option value="Country">Country</option>
    </select>
    <div class="musicAlbum"  *ngFor= "let album of musicAlbums | filter:selectedFilter">
      <p><img src={{album.cover}}></p>
      <div id="header"><p>{{ album.title }}</p></div>
      <p>Artist: {{ album.artist }}</p>
      <p>Genre: {{ album.genre }}</p>
      <p>Price: {{ album.price }}</p>
      <button (click)="addToCart(album)">Add To Cart</button>
    </div>
  </div>
  `
})

export class AppComponent {
  public cart: number[] = [];
  public cartTotal: number = 0;
  public musicAlbums: Album[] = [
  new Album("readytodie", "The Notorious B.I.G", "Rap", 10.99, "http://hiphopgoldenage.com/wp-content/uploads/2015/07/1.jpg"),
  new Album("Views", "Drake", "Rap", 9.99, "https://upload.wikimedia.org/wikipedia/en/6/64/Drakeviewsfromthe6.jpg"),
  new Album("Back in Black", "ACDC", "Rock", 14.99, "https://images-na.ssl-images-amazon.com/images/I/51kGu9hsYNL._SL1000_.jpg"),
  new Album("Coloring Book", "Chance the Rapper", "Rap", 10.99,"http://images.genius.com/b17a54d05a3de269cc6ea53c3f71f73e.1000x1000x1.jpg"),
  new Album("The Getaway", "Red Hot Chili Peppers", "Rock", 7.99, "http://www.clashmusic.com/sites/default/files/field/image/red-hot-chili-peppers-the-getaway-ltd.jpg"),
  new Album("Kick the Dust Up", "Luke Bryan", "Country", 11.99, "http://forthecountryrecord.com/wp-content/uploads/2015/05/luke-bryan-kick-the-dust-up.jpg"),
];
@Input() music: Album[];
@Output() clickSender = new EventEmitter();
public selectedFilter: string = "All";
genreSel(optionFromMenu){
  this.selectedFilter = optionFromMenu;
}

addToCart(clickedAlbum: Album) {
  this.cart.push(clickedAlbum.price);
  this.cartTotal = this.cart.reduce(add, 0);

  function add(a,b) {
    return Math.round(a + b);
  }

  }
}
