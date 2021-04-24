import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html'
})
export class UiButtonComponent implements OnInit {

  
  @Input() text = "Button"
  @Input() icon:string = '';
  @Input() icon_right:string = ''

  constructor() { }

  getClass(){
    return this.icon ? 'pl-0 with-icon split':'split' 
  }

  ngOnInit(): void {
  }

}
