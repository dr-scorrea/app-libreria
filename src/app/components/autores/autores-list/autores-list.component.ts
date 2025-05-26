import { Component, inject, OnInit } from '@angular/core';
import { Autores } from '../../../interfaces/autores/autores';
import { AutoresService } from '../../../services/autores.service';

@Component({
  selector: 'app-autores-list',
  imports: [],
  templateUrl: './autores-list.component.html',
  styleUrl: './autores-list.component.css'
})
export class AutoresListComponent implements OnInit {

  autores:Autores[]=[];

  autoresService=inject(AutoresService)

  ngOnInit(): void {
    this.getAutores();
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

}
