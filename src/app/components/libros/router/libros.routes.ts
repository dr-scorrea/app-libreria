import { Routes } from "@angular/router";

export const LIBROS_ROUTES:Routes = [

  {
    path:'',
    loadComponent: () => import('../libros/libros.component').then( m => m.LibrosComponent ),
    children: [

      {
        path:'list',
        loadComponent: () => import('../libros-list/libros-list.component').then( m =>m.LibrosListComponent )
      },

      {
        path:'add',
        loadComponent: () => import('../libros-add/libros-add.component').then( m =>m.LibrosAddComponent )
      },

      {
        path:'edit',
        loadComponent: () => import('../libros-edit/libros-edit.component').then( m => m.LibrosEditComponent )
      }

    ]
  }

]
