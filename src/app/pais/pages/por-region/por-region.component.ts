import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

type Region = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';
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

  regiones : Region[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = "";
  paisesRegion: Country[] = [];
  isLoading : boolean = false;

  constructor(private paisService: PaisService){}

  getClaseCSS(region: string){
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string){

    if(region === this.regionActiva) return;

    this.regionActiva = region;
    this.paisesRegion = [];
    this.isLoading = true;

    this.paisService.buscarRegion(this.regionActiva)
      .subscribe({next:(paisesRegion: Country[]) => {
        this.paisesRegion = paisesRegion;
        this.isLoading = false;
      }})
  }
}
