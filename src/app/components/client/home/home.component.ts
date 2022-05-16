import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  req:any;
  form:FormGroup
  books:any[]=[];
  data:any[]=[];
  



  constructor(
    private _bookService: BookService,
    private fb:FormBuilder
  ) {
    this.form= this.fb.group({
      search : ['', Validators.required]
    })

   }

   
  getData(){
    this.books=this._bookService.getBooks();
    console.log(this.books)
  }

  getApiData(){
    console.log("Api_Rest")
    this._bookService.getData();
  }
  getApiDataTwo(){
    console.log("Api_Rest")
    this._bookService.getDataTwo().subscribe(data => {
    this.data = data.data;
    console.log(this.data)
    console.log(this.data[0])

    });
  }



  // loadBooks(req: any){
  //   console.log("Works...!")
  //   const request:string= this.form.value
  //   console.log(request)
  //   const a =this._bookService.findBook(req)
  //   console.log(a)
  // }

  ngOnInit(): void {
    this.getData();
    this.getApiData();
    this.getApiDataTwo();

  }

}
