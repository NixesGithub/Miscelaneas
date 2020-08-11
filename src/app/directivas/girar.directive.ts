import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGirar]'
})
export class GirarDirective {

  constructor(private el : ElementRef) { }

@HostListener('mouseenter') girar(){
  this.el.nativeElement.classList.add('fa-spin')
  // this.elementRef.nativeElement.classList.add('md-' + this.color_);  EJEMPLO PARA METER VARIABLE
}

@HostListener('mouseleave') stop(){
  this.el.nativeElement.classList.remove('fa-spin')
}

}
