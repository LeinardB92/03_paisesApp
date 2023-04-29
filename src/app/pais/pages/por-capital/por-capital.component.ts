import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino: string = "Hola Mundo";
  hayError: boolean = false;
  paises: Country[] = [];
  isLoading: boolean = false;

  constructor(private paisService: PaisService){}

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.isLoading = true;

    this.paisService.buscarPaisPorCapital(this.termino)
    .subscribe(
      { next: (resp: Country[]) => {
        console.log(resp);
        this.paises = resp;
        this.isLoading = false;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
          this.isLoading = false;
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
