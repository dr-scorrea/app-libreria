import { Component, inject, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AutoresService } from '../../../services/autores.service';
import { RouterLink } from '@angular/router';
import { addLibros, Libros } from '../../../interfaces/libros/libros';
import { Autores } from '../../../interfaces/autores/autores';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-libros-add',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './libros-add.component.html',
  styleUrl: './libros-add.component.css'
})
export class LibrosAddComponent implements OnInit {

  cod_libros:number=0;
  frmLibros!:FormGroup;

  libros:addLibros[]=[];
  autores:Autores[]=[];

  librosService=inject(LibrosService);
  autoresService=inject(AutoresService);

  formBuilder=inject(FormBuilder);

  ngOnInit(): void {
    this.getAutores();
    this.createFormLibros();
  }

  onSubmit(){
    if(this.frmLibros.invalid){
      return;
    }

    const titulo=this.frmLibros.controls['titulo'].value
    const editorial=this.frmLibros.controls['editorial'].value
    const anio_publicacion=this.frmLibros.controls['anio_publicacion'].value
    const genero=this.frmLibros.controls['genero'].value
    const precio=this.frmLibros.controls['precio'].value
    const stock=this.frmLibros.controls['stock'].value
    const cod_autor=this.frmLibros.controls['cod_autor'].value

    const libros:addLibros={
      titulo: titulo,
      editorial:editorial,
      anio_publicacion: anio_publicacion,
      genero: genero,
      precio: precio,
      stock: stock,
      cod_autor: cod_autor
    }

    console.log(libros)

    this.add(libros)

  }

  add(libros:addLibros){
    this.librosService.add(libros).subscribe(
      {
        next: (response) => {
          this.libros = response;
        },
        error: (error) => {
          console.log("ups", error)
        }
      }
    )
  }


  createFormLibros(){
    this.frmLibros=this.formBuilder.group(
      {
        titulo:[],
        editorial:[],
        anio_publicacion:[],
        genero:[],
        precio:[],
        stock:[],
        cod_autor:[]
      }
    )
  }

  getAutores(){
    this.autoresService.getListaAutores().subscribe(
      {
        next: (response) => {
           this.autores = response.data
        },
        error(err) {
          console.log('Ups', err)
        },
      }
    )
  }

}
