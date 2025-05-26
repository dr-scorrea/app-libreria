import { Component, Inject, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibrosService } from '../../../services/libros.service';
import { AutoresService } from '../../../services/autores.service';
import { Autores } from '../../../interfaces/autores/autores';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-libros-edit',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './libros-edit.component.html',
  styleUrl: './libros-edit.component.css'
})
export class LibrosEditComponent implements OnInit{

  frmLibros!:FormGroup;

  autores:Autores[]=[];

  librosService=inject(LibrosService);
  autoresService=inject(AutoresService);

  formBuilder=inject(FormBuilder);

  ngOnInit(): void {
    this.getAutores();
    this.createFormLibros();
  }


  createFormLibros(){
    this.frmLibros=this.formBuilder.group(
      {
        cod_libros:[],
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
