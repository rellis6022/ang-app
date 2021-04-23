import { Component, Input, OnInit } from '@angular/core';

type Icon = "fa-angle-up" |"fa-cog" | "fa-angle-down" | "fa-angle-right" | "fa-calendar" | "fa-plus";



@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css']
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
