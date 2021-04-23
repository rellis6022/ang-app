import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-input-search',
  templateUrl: './ui-input-search.component.html',
  styleUrls: ['./ui-input-search.component.css']
})
export class UiInputSearchComponent implements OnInit {

  @Input()
  public label:string = '';
 
  @Input()
  public placeholder: string = 'Search';
 


  constructor() { }

  ngOnInit(): void {
  }

}
