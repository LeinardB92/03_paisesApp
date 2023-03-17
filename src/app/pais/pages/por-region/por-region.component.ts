import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[`
    button{
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = "";

  activarRegion( region: string){
    this.regionActiva = region;

    //To Do: Hacer llamado al servicio para traer los paises por la región señalada en el parámetro.
  }
}
