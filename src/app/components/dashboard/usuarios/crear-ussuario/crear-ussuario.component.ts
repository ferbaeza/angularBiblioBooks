import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-ussuario',
  templateUrl: './crear-ussuario.component.html',
  styleUrls: ['./crear-ussuario.component.css']
})
export class CrearUssuarioComponent implements OnInit {

  role:any[]=["admin", "public"]
  newuserform: FormGroup

  constructor( 
    private fb:FormBuilder, 
    private _usuarioService: UsuarioService, 
    private router:Router,
    private _snackBar: MatSnackBar,
    ) {
    this.newuserform= this.fb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
    })
   }

   createUser(){
     const newuser: Usuario={
       username:this.newuserform.value.username,
       name:this.newuserform.value.name,
       surname:this.newuserform.value.surname,
       email:this.newuserform.value.username,
       role:this.newuserform.value.role,
     }
     this._usuarioService.createNewUser(newuser);
     this.router.navigate(['dashboard/users'])
     this._snackBar.open("Usuario fue agregado correctamente","",{
      duration: 1500,
      horizontalPosition:'center',
      verticalPosition:'bottom',
    });

     

     //console.log(newuser)
   }

  ngOnInit(): void {
  }

}
