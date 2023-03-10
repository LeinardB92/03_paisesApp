import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {
  termino: string = "Hola Mundo";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService){}

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
    .subscribe(
      { next: (resp: Country[]) => {
        console.log(resp);
        this.paises = resp;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        }
      }); 
  }

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.buscar(this.termino);
    // To Do: crear sugerencias
  }
  
}
