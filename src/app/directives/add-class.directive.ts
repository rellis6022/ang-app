import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAddClass]'
})
export class AddClassDirective {
  @Input() defaultColor='ChChing'
  @Input() className = 'blah blah'

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.addClass()
  }

  addClass(){
    console.log("Add Class")
  }


}
