import { Component, OnInit } from '@angular/core';
import * as ContentEditor from '@uxui-guy/ckeditor5-custom-inline';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public Editor = ContentEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
