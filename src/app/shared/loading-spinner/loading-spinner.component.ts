import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styles: [
    `
      .spinner-container{
        align-items: center;
        background-color: black;
        color: white;
        border-radius: 20px;
        display: flex;
        padding: 5px 10px;
        position: fixed;
        right: 15px;
        bottom: 15px;
      }
    `
  ]
})
export class LoadingSpinnerComponent {

}
