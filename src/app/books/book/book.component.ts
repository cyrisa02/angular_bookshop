import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/types/Book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  myInterval = null;

  constructor() { }

  ngOnInit(): void {

  }


  addToCard() {
    this.bookEmitter.emit(this.book);

  }

}
