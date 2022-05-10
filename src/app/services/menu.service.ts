import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }



  /**
   * Con el Modulo HtppClient podemos hacer peticiones a API externas para así 
   * poder traernos el json con la data necesaria.
   */
  getMenu(): Observable<Menu[]>{
    return this.http.get<Menu[]>('./assets/data/menu.json');
  }
}
/**
 * La funcion de http.get() lo que devuelve es un Observable al cual nos tendremos que subscribir
 * y lo haremos desde navbar.ts
 * Aqui le estamos diciendo que el observable que nos devolvera sera el menu que estamos exportando 
 * desde interfaces pero con la data que introducimos en data.menu.json
 */
