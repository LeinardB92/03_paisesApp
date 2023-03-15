import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
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
    
    this.activatedRoute.params.pipe(switchMap(param => 
      this.paisService.getPaisPorAlpha(param['id']))).subscribe(resp => {console.log(resp)});
    
    // Detectar cambios en la ruta URL de la aplicación.
    // this.activatedRoute.params.subscribe(param => {
    //   this.paisService.getPaisPorAlpha(param['id']).subscribe(pais => {console.log(pais);
    //   });
    // })

  }
}
