import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

interface iSelect {
  id:number,
  label: string
}

@Component({
  selector: 'app-ui-select',
  templateUrl: './ui-select.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls:["./ui-select.component.scss"]
})
export class UiSelectComponent implements OnInit {

  selectedCar!: number;
  @Input() label = 'Select'

  @Input() data:iSelect[] = [
        { id: 1, label: 'Economics' },
        { id: 2, label: 'Finance' },
        { id: 3, label: 'Trending' },
        { id: 4, label: 'Crypto Currency' },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
