import { Component, Input, OnInit } from '@angular/core';

const brand = '#00499E';
@Component({
  selector: 'app-ui-heading',
  templateUrl: './ui-heading.component.html',
  styleUrls: ['./ui-heading.component.css']
})


export class UiHeadingComponent implements OnInit {


  @Input() type:string = "default"
  @Input() color:string = ''

  getStyle(){
    return `color:${this.color};`
  }
  getClass(){
    if (this.type =="caps"){
      return 'smallcaps'
    }
    return 'default'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
