import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appErrorLabel]',
  standalone: true
})
export class ErrorLabelDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.classList.add('text-red-500', 'text-sm', 'font-bold');
  }

}
