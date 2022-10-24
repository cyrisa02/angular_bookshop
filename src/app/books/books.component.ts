import { Component, OnInit } from '@angular/core';

interface Book {
  name: string
  author: string
  image: string
  amount: number
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
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

  ];



  isShowing: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggeBooks() {
    this.isShowing = !this.isShowing;
  }


}
