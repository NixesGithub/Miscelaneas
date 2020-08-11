import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-styles',
  template: `
    <p [ngStyle]="{'font-size': tamano + 'px'}" >
      ng-styles forma 1
    </p>

    <p [style.fontSize.px]="tamano" >
      ng-styles forma 2
    </p>
    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>

  `,
  styles: [
  ]
})
export class NgStylesComponent implements OnInit {

   tamano: number;

  constructor() { }

  ngOnInit(): void {
    this.tamano = 4
  }

}
