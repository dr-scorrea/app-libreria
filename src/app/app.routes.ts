import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioComponent } from './shared/home/inicio/inicio.component';

export const routes: Routes = [

  {
    path:'inicio',
    component:InicioComponent
  },

  {
    path:'',
    redirectTo:'/inicio',
    pathMatch:'full'
  },

  //libros

  {
    path:'libros',
    loadChildren: () => import('./components/libros/router/libros.routes').then( route => route.LIBROS_ROUTES )
  },

  //Autores

  {
    path:'autores',
    loadComponent: () => import('./components/autores/autores-list/autores-list.component').then( m => m.AutoresListComponent )
  }


];
