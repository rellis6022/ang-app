import { Component, OnInit } from '@angular/core';
import * as data from "../data/data.json"

@Component({
  selector: 'app-mock-data-sandbox',
  templateUrl: './mock-data-sandbox.component.html',
  styleUrls: ['./mock-data-sandbox.component.css']
})
export class MockDataSandboxComponent implements OnInit {
  
  mockdata = data.default

  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(data.default,null, 4))
  }

}
