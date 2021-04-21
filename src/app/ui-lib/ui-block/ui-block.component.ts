import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-block',
  templateUrl: './ui-block.component.html',
  styleUrls: ['./ui-block.component.css']
})
export class UiBlockComponent implements OnInit {

  @Input() title = 'Page Block'
  constructor() { }

  ngOnInit(): void {
  }

}
