import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  alerta: string = "alert-danger"
  clase: boolean = true

  obj : Objeto = new Objeto()


  constructor() { 
    this.obj.info = true
  }

  ngOnInit(): void {
  }

}

export class Objeto{
  info:boolean
}