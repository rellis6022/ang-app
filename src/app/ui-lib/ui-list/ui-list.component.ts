import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ui-list',
  templateUrl: './ui-list.component.html',
  styleUrls: ['./ui-list.component.css']
})
export class UiListComponent implements OnInit {
  _className='list-group';
  
  @Input() data:{ id: number; name: string; }[] | undefined;

  @Input()
    set className(val:string) {
        this._className = val; 
    }

  getChildClass(){
    if(this._className === 'list-group'){
      return 'list-group-item'
    }
    return ''
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
