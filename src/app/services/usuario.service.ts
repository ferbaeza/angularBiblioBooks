import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  listaUsers: Usuario[] = [
    {username:'fer', name: 'Fernando', surname: 'Baeza', email: 'f@mail.com', role:'admin'},
    {username:'baezeta', name: 'Fer', surname: 'Baeza', email: 'f@mail.com', role:'admin'},
    {username:'nando ', name: 'Pere', surname: 'Baeza', email: 'f@mail.com', role:'admin'},
    {username:'pt', name: 'Pe', surname: 'Baeza', email: 'f@mail.com', role:'public'},
  ];


  constructor() { }


  getUsers(){
    return this.listaUsers.slice();
  }
  deleteUser(index:number){
    this.listaUsers.splice(index,1);
  }
  createNewUser(newuser:Usuario){
    this.listaUsers.unshift(newuser)
  }
}
