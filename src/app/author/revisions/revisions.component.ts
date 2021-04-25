import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revisions',
  templateUrl: './revisions.component.html',
  styleUrls: ['./revisions.component.css']
})
export class RevisionsComponent implements OnInit {
  
  selectedCar?: number;
  label = 'Select Category'

    cars = [
        { id: 1, name: 'Economics' },
        { id: 2, name: 'Finance' },
        { id: 3, name: 'Trending' },
        { id: 4, name: 'Crypto Currency' },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
