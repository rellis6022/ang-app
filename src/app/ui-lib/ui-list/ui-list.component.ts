import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ui-list',
  templateUrl: './ui-list.component.html',
  styleUrls: ['./ui-list.component.css']
})
export class UiListComponent implements OnInit {
  _listClass= 'list-group';
  _itemClass = 'list-group-item'
  _iconName = 'fa fa-'
  _hasIcon = false;

  @Input() listClass = this._listClass;
  @Input() itemClass = this._itemClass;
  
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
        this._listClass = val; 
    }

  getChildClass(){
    if(this._listClass === 'list-group'){
      const base = 'list-group-item';
      const withIcon = " split"
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
