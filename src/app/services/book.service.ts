import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from '../interfaces/books';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  listaBooks: Books[]=[
    {name:"Loba Negra", author:"Juan Gomez Jurado", category:"Suspense", editorial:"Anaya", sinopsys: "Maecenas sit amet rhoncus sem, consequat interdum ligula. Maecenas at justo et mauris tempor consequat ut eget dui. Sed consequat, neque et laoreet imperdiet, arcu odio auctor urna, nec vestibulum dolor nibh in velit. In id interdum felis. Vestibulum sollicitudin tellus libero, at condimentum odio molestie ac. Cras facilisis aliquam justo cursus pharetra. Quisque mollis, nulla a consequat congue, justo tortor fermentum tellus, vitae tempus odio felis quis felis."},
    {name:"El Principito", author:"Jean Philippe", category:"Ficcion", editorial:"Anaya", sinopsys: "Maecenas sit amet rhoncus sem, consequat interdum ligula. Maecenas at justo et mauris tempor consequat ut eget dui. Sed consequat, neque et laoreet imperdiet, arcu odio auctor urna, nec vestibulum dolor nibh in velit. In id interdum felis. Vestibulum sollicitudin tellus libero, at condimentum odio molestie ac. Cras facilisis aliquam justo cursus pharetra. Quisque mollis, nulla a consequat congue, justo tortor fermentum tellus, vitae tempus odio felis quis felis."},
    {name:"En el Blanco", author:"Ken Follet", category:"Suspense", editorial:"Anaya", sinopsys: "Maecenas sit amet rhoncus sem, consequat interdum ligula. Maecenas at justo et mauris tempor consequat ut eget dui. Sed consequat, neque et laoreet imperdiet, arcu odio auctor urna, nec vestibulum dolor nibh in velit. In id interdum felis. Vestibulum sollicitudin tellus libero, at condimentum odio molestie ac. Cras facilisis aliquam justo cursus pharetra. Quisque mollis, nulla a consequat congue, justo tortor fermentum tellus, vitae tempus odio felis quis felis."},
    {name:"Los Pilares de la Tierra", author:"Ken Follet", category:"Historica", editorial:"Anaya", sinopsys: "Maecenas sit amet rhoncus sem, consequat interdum ligula. Maecenas at justo et mauris tempor consequat ut eget dui. Sed consequat, neque et laoreet imperdiet, arcu odio auctor urna, nec vestibulum dolor nibh in velit. In id interdum felis. Vestibulum sollicitudin tellus libero, at condimentum odio molestie ac. Cras facilisis aliquam justo cursus pharetra. Quisque mollis, nulla a consequat congue, justo tortor fermentum tellus, vitae tempus odio felis quis felis."},
    {name:"IT", author:"Stephen King", category:"Terror", editorial:"King", sinopsys: "Maecenas sit amet rhoncus sem, consequat interdum ligula. Maecenas at justo et mauris tempor consequat ut eget dui. Sed consequat, neque et laoreet imperdiet, arcu odio auctor urna, nec vestibulum dolor nibh in velit. In id interdum felis. Vestibulum sollicitudin tellus libero, at condimentum odio molestie ac. Cras facilisis aliquam justo cursus pharetra. Quisque mollis, nulla a consequat congue, justo tortor fermentum tellus, vitae tempus odio felis quis felis."},
    {name:"Harry Potter 1", author:"JK Rowling", category:"Fantasia", editorial:"Anaya", sinopsys: "Maecenas sit amet rhoncus sem, consequat interdum ligula. Maecenas at justo et mauris tempor consequat ut eget dui. Sed consequat, neque et laoreet imperdiet, arcu odio auctor urna, nec vestibulum dolor nibh in velit. In id interdum felis. Vestibulum sollicitudin tellus libero, at condimentum odio molestie ac. Cras facilisis aliquam justo cursus pharetra. Quisque mollis, nulla a consequat congue, justo tortor fermentum tellus, vitae tempus odio felis quis felis."},
    {name:"Harry Potter 2", author:"JK Rowling", category:"Fantasia", editorial:"Anaya", sinopsys: "Maecenas sit amet rhoncus sem, consequat interdum ligula. Maecenas at justo et mauris tempor consequat ut eget dui. Sed consequat, neque et laoreet imperdiet, arcu odio auctor urna, nec vestibulum dolor nibh in velit. In id interdum felis. Vestibulum sollicitudin tellus libero, at condimentum odio molestie ac. Cras facilisis aliquam justo cursus pharetra. Quisque mollis, nulla a consequat congue, justo tortor fermentum tellus, vitae tempus odio felis quis felis."},
    {name:"Harry Potter 3", author:"JK Rowling", category:"Fantasia", editorial:"Anaya", sinopsys: "Maecenas sit amet rhoncus sem, consequat interdum ligula. Maecenas at justo et mauris tempor consequat ut eget dui. Sed consequat, neque et laoreet imperdiet, arcu odio auctor urna, nec vestibulum dolor nibh in velit. In id interdum felis. Vestibulum sollicitudin tellus libero, at condimentum odio molestie ac. Cras facilisis aliquam justo cursus pharetra. Quisque mollis, nulla a consequat congue, justo tortor fermentum tellus, vitae tempus odio felis quis felis."},
    {name:"Harry Potter 4", author:"JK Rowling", category:"Fantasia", editorial:"Anaya", sinopsys: "Maecenas sit amet rhoncus sem, consequat interdum ligula. Maecenas at justo et mauris tempor consequat ut eget dui. Sed consequat, neque et laoreet imperdiet, arcu odio auctor urna, nec vestibulum dolor nibh in velit. In id interdum felis. Vestibulum sollicitudin tellus libero, at condimentum odio molestie ac. Cras facilisis aliquam justo cursus pharetra. Quisque mollis, nulla a consequat congue, justo tortor fermentum tellus, vitae tempus odio felis quis felis."},
    {name:"Harry Potter 5", author:"JK Rowling", category:"Fantasia", editorial:"Anaya", sinopsys: "Maecenas sit amet rhoncus sem, consequat interdum ligula. Maecenas at justo et mauris tempor consequat ut eget dui. Sed consequat, neque et laoreet imperdiet, arcu odio auctor urna, nec vestibulum dolor nibh in velit. In id interdum felis. Vestibulum sollicitudin tellus libero, at condimentum odio molestie ac. Cras facilisis aliquam justo cursus pharetra. Quisque mollis, nulla a consequat congue, justo tortor fermentum tellus, vitae tempus odio felis quis felis."},
    {name:"Fortaleza Digital", author:"Dan Brown", category:"Suspense", editorial:"Otra", sinopsys: "Maecenas sit amet rhoncus sem, consequat interdum ligula. Maecenas at justo et mauris tempor consequat ut eget dui. Sed consequat, neque et laoreet imperdiet, arcu odio auctor urna, nec vestibulum dolor nibh in velit. In id interdum felis. Vestibulum sollicitudin tellus libero, at condimentum odio molestie ac. Cras facilisis aliquam justo cursus pharetra. Quisque mollis, nulla a consequat congue, justo tortor fermentum tellus, vitae tempus odio felis quis felis."},
    {name:"Codigo da Vinci", author:"Dan Brown", category:"Suspense", editorial:"Otra", sinopsys: "Maecenas sit amet rhoncus sem, consequat interdum ligula. Maecenas at justo et mauris tempor consequat ut eget dui. Sed consequat, neque et laoreet imperdiet, arcu odio auctor urna, nec vestibulum dolor nibh in velit. In id interdum felis. Vestibulum sollicitudin tellus libero, at condimentum odio molestie ac. Cras facilisis aliquam justo cursus pharetra. Quisque mollis, nulla a consequat congue, justo tortor fermentum tellus, vitae tempus odio felis quis felis."}
  ];

  constructor(private http:HttpClient) { }
  nameToFind:string="";

  getDataTwo():Observable<any>{
    return this.http.get("http://localhost:3000/api/books")
  }
  getData(){
    this.http.get("http://localhost:3000/api/books").subscribe(data=>{
     console.log(data);
    })
  }

  getBooks(){
    return this.listaBooks.slice();
  }
  /**
   * @slice nos devuelve una copia del array al que hace referencia
   * @splice lo que hace es borrar una cantidad de items de un array
   */
   deleteBook(index:number){
    this.listaBooks.splice(index,1);
   }

   createNewBook(newbook:Books){
     this.listaBooks.unshift(newbook);
   }
   findBook(req:string){
     return this.listaBooks.find(req=>req)
   }
}
