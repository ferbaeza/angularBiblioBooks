import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Books } from 'src/app/interfaces/books';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  
  // listaBooks: Books[]=[
    //   {name:"Loba Negra", author:"Juan Gomez Jurado", category:"Suspense", editorial:"Anaya"},
    //   {name:"Codigo da Vinci", author:"Dan Brown", category:"Suspense", editorial:"Otra"}
    // ];
    //dataSource = new MatTableDataSource(this.listaBooks);
  
  
  listaBooks:Books[]=[];
  dataSource!: MatTableDataSource<any>;
  /**
   * Declaramos una variable de tipo interface y lo igualmos a un array vacio
   * @dataSource le indicamos que no es null y le que es de tipo MatTable...
   * En el constructor llamamos a nuestro servicio creado, y creamos una funcion que llamara al
   * metodo del servicio que nos devuelve la copia del array creado.
   * Tenemos que instanciar el dataSource en nuestra funcion, y nuestra funcion llamarla en el ngOnInit() 
   */




  displayedColumns: string[] = ['name', 'author', 'category', 'editorial', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _bookservice:BookService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadBooks();
    this.ngAfterViewInit();
  }

  loadBooks(){
    this.listaBooks= this._bookservice.getBooks();
    this.dataSource= new MatTableDataSource(this.listaBooks);
  }

  deleteBook(index:number){
    console.log(index)
    this._bookservice.deleteBook(index);
    this.loadBooks();
    this._snackBar.open("Libro eliminado correctamente","",{
      duration: 1500,
      horizontalPosition:'center',
      verticalPosition:'bottom',
    });



  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }



}
