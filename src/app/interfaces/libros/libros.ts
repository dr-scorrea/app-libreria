export interface Libros {

  cod_libro: number,
  titulo: string,
  editorial: string,
  anio_publicacion: number,
  genero: string,
  precio: number,
  stock: number,
  fecha_registro?: number,
  cod_autor: number,

}

export interface detalleLibros {

  cod_libro: number,

}

export interface addLibros {

  titulo: string,
  editorial: string,
  anio_publicacion: number,
  genero: string,
  precio: number,
  stock: number,
  cod_autor: number,

}

export interface putLibros {

  cod_libro: number,
  titulo: string,
  editorial: string,
  anio_publicacion: number,
  genero: string,
  precio: number,
  stock: number,
  cod_autor: number,

}

export interface DeleteLibros {

  cod_libro: number,
  cnrUsrioRgtro: number

}
