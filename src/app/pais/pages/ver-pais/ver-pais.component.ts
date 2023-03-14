import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ){}
  
  ngOnInit(): void {
    // Detectar cambios en la ruta URL de la aplicación.
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);

      this.paisService.getPaisPorAlpha(params['id']).subscribe(pais => {
        console.log(pais);
      });
    })
  }


}
