import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  books:any[]=[];
  



  constructor(
    private _bookService: BookService
  ) { }


  getData(){
    this.books=this._bookService.getBooks();

    //console.log(this.books)
  }

  ngOnInit(): void {
    this.getData();

  }

}
