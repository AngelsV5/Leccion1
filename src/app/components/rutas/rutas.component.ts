import { Component } from '@angular/core';
import { RutasService, Ruta } from 'src/app/services/rutas.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
  rutas: Ruta[]=[]

ngOnInit(): void{
  this.rutas= this._rutasService.getRutas();
  console.log(this.rutas);
}

constructor(private _rutasService:RutasService,private router: Router){
    
}
verRuta(idx: number){
  console.log(idx);
  this.router.navigate(['/ruta', idx]);
}

}


