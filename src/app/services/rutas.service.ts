import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  private rutas:Ruta[]=[
    {
      
        ciudadorig: "Machala",
        ciudaddest: "Guayaquil",
        precio: "$7",
        descripcion: "Viaje comodo y seguro desde Machala hacia Guayaquil",
        tipo: "externo"
    },
    {
      
      ciudadorig: "Machala",
      ciudaddest: "Cuenca",
      precio: "$6",
      descripcion: "Viaje comodo y seguro desde Machala hacia Cuenca",
      tipo: "externo"
  },
  {
      
    ciudadorig: "Cuenca",
    ciudaddest: "Santa Rosa",
    precio: "$10",
    descripcion: "Viaje comodo y seguro desde Cuenca hacia Santa Rosa",
    tipo: "externo"
  },
  {
      
    ciudadorig: "Cuenca",
    ciudaddest: "Guayaquil",
    precio: "$5",
    descripcion: "Viaje comodo y seguro desde Cuenca hacia Guayaquil",
    tipo: "externo"
  },
  {
      
    ciudadorig: "Cuenca",
    ciudaddest: "Huaquillas",
    precio: "$7",
    descripcion: "Viaje comodo y seguro desde Cuenca hacia Huaquillas",
    tipo: "externo"
  },
  {
      
    ciudadorig: "Huaquillas",
    ciudaddest: "Cuenca",
    precio: "$9",
    descripcion: "Viaje comodo y seguro desde Huaquillas hacia Cuenca",
    tipo: "externo"
  },
  {
      
    ciudadorig: "Guayaquil",
    ciudaddest: "Piura",
    precio: "$20",
    descripcion: "Viaje comodo y seguro desde Guayaquil hacia Piura",
    tipo: "externo"
  },
  {
      
    ciudadorig: "Machala",
    ciudaddest: "Santa Rosa",
    precio: "$1",
    descripcion: "Viaje comodo y seguro desde Machala hacia Santa Rosa",
    tipo: "intero"
  },
  {
      
    ciudadorig: "Santa Rosa",
    ciudaddest: "Pasaje",
    precio: "$2",
    descripcion: "Viaje comodo y seguro desde Santa Rosa hacia Pasaje",
    tipo: "interno"
  },
  {
      
    ciudadorig: "Machala",
    ciudaddest: "Pasaje",
    precio: "$1",
    descripcion: "Viaje comodo y seguro desde Machala hacia Pasaje",
    tipo: "interno"
},
  ];
  constructor() {
    console.log("Servicio listo para usar...");
   }

  getRutas()
  {
    return this.rutas;
  }

  getRuta(idx:number):Ruta{
    return this.rutas[idx];
  }
}

export interface Ruta{
  ciudadorig: string;
  ciudaddest: string;
  precio: string;
  descripcion: string;
  tipo: string;
}
