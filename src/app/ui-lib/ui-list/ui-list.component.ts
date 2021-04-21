import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ui-list',
  templateUrl: './ui-list.component.html',
  styleUrls: ['./ui-list.component.css']
})
export class UiListComponent implements OnInit {
  _className= 'list-group';
  _iconName = 'fa fa-'
  _hasIcon = false;
  
  @Input() 
  data:{ 
    id: number; 
    name: string; 
  }[] | undefined;

  @Input()
    set icon(val:string) {
        this._iconName += val; 
        this._hasIcon = true;
    }

  @Input()
    set className(val:string) {
        this._className = val; 
    }

  getChildClass(){
    if(this._className === 'list-group'){
      const base = 'list-group-item';
      const withIcon = " d-flex justify-content-between align-items-center"
      return this._hasIcon ? base + withIcon : base;
    }
    return ''
  }

  getIcon(){
    return this._iconName
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
