import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  blurb = `The rapid decline in Covid-19 cases has taken the number of active cases from more than 5 million at the end of 2020 to 2 million in the middle of February. After a comparable decline in the number of hospitalizations, the next macro question in the US is where the caseload bottoms out. FHN Financial’s informal goal 500,000.`

  blurb2 = `As the infection rate falls, the rate of transmission is lower as well. It may not be low enough. The chart tracks the national average rate of transmission where below 1.0 indicates a slowing spread – with each state weighted by the number of infections each day.`

  constructor() { }

  ngOnInit(): void {
  }

}
