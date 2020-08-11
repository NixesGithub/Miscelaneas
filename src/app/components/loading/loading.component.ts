import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styles: [``
  ]
})
export class LoadingComponent implements OnInit {

  loading:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.loading = true
    setTimeout( () => this.loading = false, 1500 )
  }
}
