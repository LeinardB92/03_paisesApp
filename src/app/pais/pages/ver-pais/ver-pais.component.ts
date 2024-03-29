import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ){}
  
  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap(param => this.paisService.getPaisPorAlpha(param['id'])),
      tap(console.log))
      .subscribe(pais => this.pais = pais[0]);
    
    // Detectar cambios en la ruta URL de la aplicación.
    // this.activatedRoute.params.subscribe(param => {
    //   this.paisService.getPaisPorAlpha(param['id']).subscribe(pais => {console.log(pais);
    //   });
    // })

  }
}
