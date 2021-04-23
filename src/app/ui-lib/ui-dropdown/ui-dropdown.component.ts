import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.css']
})
export class UiDropdownComponent implements OnInit {
  
  private show = false;

  @Output() onActive = new EventEmitter<boolean>();
  
  @Input() text = "Select Item"
  
  @Input() icon = ''

  @Input()
  get expanded(){
    return this.show;
  }
  set expanded(bool:boolean){
    this.show = bool;
    this.onActive.emit(this.show);
  }
   
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
