import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'clean code',

        author: 'robert',

        image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",

        amount: 50,
      },

      {
        name: 'Clean Code2',

        author: 'Robert',

        image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
        amount: 60,
      },
      {
        name: 'Clean Code2',

        author: 'Robert',

        image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
        amount: 60,
      },
      {
        name: 'Clean Code2',

        author: 'Robert',

        image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
        amount: 60,
      },

    ]
  }
}
