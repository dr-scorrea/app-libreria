import { AutoresService } from './../../../services/autores.service';
import { Component, inject, OnInit } from '@angular/core';
import { Libros } from '../../../interfaces/libros/libros';
import { LibrosService } from '../../../services/libros.service';
import { Router, RouterLink } from '@angular/router';
import { Autores } from '../../../interfaces/autores/autores';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-libros-list',
  imports: [
    RouterLink,
    CurrencyPipe
  ],
  standalone: true,
  templateUrl: './libros-list.component.html',
  styleUrl: './libros-list.component.css'
})
export class LibrosListComponent implements OnInit{

  libros:Libros[]=[];
  autores:Autores[]=[];
  libroCod:number=0;

  librosService=inject(LibrosService);
  autoresService=inject(AutoresService);

  router=inject(Router)

  ngOnInit(): void {
    this.getLibros();
    this.getAutores();
  }

  editar(libros:Libros){
    this.router.navigate(['libros/edit'])
    console.log(libros.cod_libro)
  }

  getLibros(){
    this.librosService.getListaLibros().subscribe(
      {
        next: (response) => {
          this.libros= response.data
          console.log(response.data)
        },
        error: (error) => {
          console.log('Ups', error)
        }
      }
    )
  }

  getAutores(){
    this.autoresService.getListaAutores().subscribe(
      {
        next: (response) => {
           this.autores = response.data
          //  console.log(response.data)
        },
        error(err) {
          console.log('Ups', err)
        },
      }
    )
  }

  eliminar(){
    this.librosService.delete(this.libroCod,999).subscribe(
      {
        next: (response) => {
          this.libros = this.libros.filter( libro => libro.cod_libro !== this.libroCod )
          console.log(response)
        },
        error: (error) => {
          console.log("Ups", error)
          console.log(this.libroCod)
        }
      }
    )
  }

  eliminarSelect(cod_libro: number){
    this.libroCod=cod_libro
  }

}
