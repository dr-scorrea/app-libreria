import { inject, Injectable } from '@angular/core';
import { API_PRIMARY } from '../constant/api.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autores } from '../interfaces/autores/autores';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private uri=`${API_PRIMARY.apiBase}`

  private http=inject(HttpClient)

  constructor() { }

  getListaAutores():Observable<any>{
    const url = `${this.uri}/GetLstAutores`
    return this.http.get<any>(url)
  }

}
