import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.css']
})
export class UiDropdownComponent implements OnInit {
  
  show = false;
  @Input() text = "Select Item"
  @Input() icon = ''
   
  constructor() { }

  ngOnInit(): void {
  }
  toggleShow(){
    this.show = !this.show;
  }
  getShow(){
    return this.show ? 'show' : ''
  }
  getIcon(){
    return this.show ? "fa-angle-up" : "fa-angle-down"
  }

}
