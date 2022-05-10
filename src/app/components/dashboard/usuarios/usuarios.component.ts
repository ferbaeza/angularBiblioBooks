import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  // listaUsers: Usuario[] = [
  //   {username:'pt', name: 'Pe', surname: 'Baeza', email: 'f@mail.com'},
  // ];
  //dataSource = new MatTableDataSource(this.listaUsers);

  listaUsers:Usuario[]=[];


  displayedColumns: string[] = ['username', 'name', 'surname', 'email', 'actions'];
  dataSource!:MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private _userservice:UsuarioService, private _snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.loadUsers();
    this.ngAfterViewInit();
  }
  

  loadUsers(){
    this.listaUsers= this._userservice.getUsers();
    this.dataSource = new MatTableDataSource(this.listaUsers);
  }
  deleteUser(index:number){
    console.log(index)
    this._userservice.deleteUser(index);
    this.loadUsers();
    this._snackBar.open("Usuario eliminado correctamente","",{
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
  }


  

}
