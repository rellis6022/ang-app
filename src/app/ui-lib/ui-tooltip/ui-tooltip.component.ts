import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-tooltip',
  templateUrl: './ui-tooltip.component.html',
  styleUrls: ['./ui-tooltip.component.scss']
})
export class UiTooltipComponent implements OnInit {
  
  tiptext="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel perspiciatis tempore qui distinctio obcaecati."

  constructor() { }

  ngOnInit(): void {
  }

}
