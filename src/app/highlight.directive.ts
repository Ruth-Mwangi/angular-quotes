import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {



  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.backgroundColor="rgba(255, 25, 2,0.3)";
    
    
  }

  





 

}
