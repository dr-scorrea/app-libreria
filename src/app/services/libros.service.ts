import { inject, Injectable } from '@angular/core';
import { API_PRIMARY } from '../constant/api.constant';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeleteLibros, Libros, addLibros, detalleLibros, putLibros } from '../interfaces/libros/libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private uri= `${API_PRIMARY.apiBase}`

  private http = inject(HttpClient)

  constructor() { }

  getListaLibros():Observable<any>{
    const url=`${this.uri}/GetLstLibros`
    return this.http.get<any>(url);
  }

  add(libros:addLibros):Observable<addLibros[]>{
    const url=`${this.uri}/PostSaveLibro`
    return this.http.post<addLibros[]>(url,libros);
  }

  update(cod_libro:number,libros:putLibros):Observable<putLibros>{
    const urlConParametros=`${this.uri}/PutUpdateLibro`
    return this.http.put<putLibros>(urlConParametros,libros);
  }

  delete(cod_libro:number, cnrUsrioRgtro:number):Observable<DeleteLibros>{
    const url=`/DelRemoveLibro`
    const body:DeleteLibros = {
      cod_libro,
      cnrUsrioRgtro
    }
    return this.http.delete<DeleteLibros>(url,{body})
  }
}
