import {Directive, ElementRef} from '@angular/core';
import {NgModel} from "@angular/forms";

@Directive({
  selector: '[appFormField]',
  standalone: true
})
export class FormFieldDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.classList.add('rounded-md', 'outline-none', 'p-2', 'w-full', 'bg-white', 'shadow-md');
  }

}
