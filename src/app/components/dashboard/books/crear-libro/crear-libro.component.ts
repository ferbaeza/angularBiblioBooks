import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Books } from 'src/app/interfaces/books';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {

  newbookform: FormGroup

  category: any[] = [
    {value: 'history', viewValue: 'Historico'},
    {value: 'terror', viewValue: 'Terror'},
    {value: 'fantasy', viewValue: 'Fantasia'},
    {value: 'science', viewValue: 'Ciencia Ficcion'},
    {value: 'thriller', viewValue: 'Suspense'},
  ];

  constructor( 
    private fb:FormBuilder,
    private _bookService: BookService,
    private router: Router,
    private _snackBar: MatSnackBar,
          
    ) {
    this.newbookform= this.fb.group({
      name:['', Validators.required],
      author:['', Validators.required],
      category:['', Validators.required],
      editorial:['', Validators.required],
      sinopsys:['', Validators.required],
    })
   }


   createBook(){
     const newbook: Books={
       name: this.newbookform.value.name,
       author: this.newbookform.value.author,
       category: this.newbookform.value.category,
       editorial: this.newbookform.value.editorial,
       sinopsys: this.newbookform.value.sinopsys,
     }
     this._bookService.createNewBook(newbook);
     this.router.navigate(['dashboard/books'])
     this._snackBar.open("Nuevo Libro registrado","",{
      duration: 1500,
      horizontalPosition:'center',
      verticalPosition:'bottom',
    });


     //console.log(newbook)

   }

  ngOnInit(): void {
  }

}
