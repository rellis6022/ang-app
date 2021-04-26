import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dropdown-toggle::after,
    .dropup .dropdown-toggle::after{
      display:none;
    }
  `]
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
