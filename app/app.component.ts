import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector:'my-app',
  template: `
  <div class="container">
    <h1>Alvaro and Jackson's Music store</h1>
    <select (change)="genreSel($event.target.value)">
      <option value="Rap">Rap</option>
      <option value="Rock">Rock</option>
      <option value="Country" selected="selected">Country</option>
    </select>
    <div class="musicAlbum" (click)="pickAlbum(album)" *ngFor= "let album of musicAlbums | filter;selectedFilter">
      <p>Album title: {{ album.title }}</p>
      <p>Artist: {{ album.artist }}</p>
      <p>Genre: {{ album.genre }}</p>
      <p>Price: {{ album.price }}</p>
    </div>
  </div>
  `
})

export class AppComponent {
  public musicAlbums: Album[] = [
  new Album("Elephant Rode", "Usher", "Rock", 10.99),
  new Album("Views", "Drake", "Rap", 9.99),
  new Album("Back in Black", "ACDC", "Rock", 14.99),
  new Album("Coloring Book", "Chance the Rapper", "Rap", 10.99),
  new Album("The Getaway", "Red Hot Chili Peppers", "Rock", 7.99),
  new Album("Kick the Dust Up", "Luke Bryan", "Country", 11.99),
];
@Input() music: Album[];
@Output() clickSender = new EventEmitter();
public selectedFilter: string = "Country";
genreSel(optionFromMenu){
  this.selectedFilter = optionFromMenu;
  console.log(this.selectedFilter);
}

pickAlbum() {
  }
}


// export class Album {
//   public done: boolean = false;
//   constructor(public  title: string, public artist: string, public genre: string, public price: number) { }
// }
