import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   * Importamos FormGroup para hacer un formulario Reactivo
   * le llamamos for, y lo vinculamos con el form del html
   */
  form:FormGroup;
  loading=false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  prop:any="";
  userInfo:any[]=[]
  
  constructor(
    private fb:FormBuilder, 
    private _snackBar: MatSnackBar, 
    private router:Router,
    private _userSer:UsuarioService
    ) {
      this.form= this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      })
    }
    
    ngOnInit(): void {
    this.userInfo= this._userSer.getUsers()
    console.log(this.userInfo)
  }

  /**
   * Una vez que se clicka en el submit recogemos el evento
   * e imprimimos los datos recogidos por el formulario
   */
  doLogin(){
    console.log(this.form)
    const user = this.form.value.username
    const pass = this.form.value.password

    //TODO Call the Login API
    /**
     * TODO call the backend to get the response
     * ! POST to the Login API
     */
    for (this.prop in this.userInfo){
      this.prop=this.userInfo[this.prop]
      console.log(this.prop.name)
      // if(user == this.prop.name){
      //   this.fakeLoading();
      // }else{
      //   this.error();
      // }
  
      if (user=='fer' && pass=='11'){
        this.router.navigate(['client']);
        this.fakeLoading();
      }else{
        this.errorPass();
        this.form.reset();
      }
      
    } 
  }
  error(){
    this._snackBar.open("Usuario no encontrado", "Reintentar",{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.verticalPosition,
    });
  }
  /**
   * *Mas Info en Material.Angular.Components
   * Puedes declarar las variables en la clase como 
   * *horizontalPosition: MatSnackBarHorizontalPosition = 'center';
   * para ello es necesario importar los modulos de Angular 
   * o indicarles su valor directamente como se hace en el metodo inferior
   */
  errorPass(){
    this._snackBar.open("Password no coincide","",{
      duration: 5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
    });
  }
  fakeLoading(){
    this.loading=true;
    /**
     * Al cambiar la variable a @true estamos mostrando en spinner durante el tiempo indicado bajo
     * pasado el tiempo lo volvemos a poner en false y redireccionamos al dashboard
     */
    setTimeout(()=>{
      this.router.navigate(['client'])
      //this.loading=false;
    }, 300)
  }

}
