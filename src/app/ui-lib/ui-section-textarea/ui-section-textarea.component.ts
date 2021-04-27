import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-section-textarea',
  templateUrl: './ui-section-textarea.component.html',
  styleUrls: ['./ui-section-textarea.component.css']
})
export class UiSectionTextareaComponent implements OnInit {

  @Input() title="Secition Title"
  @Input() desc="This is the section description"
  @Input() optional = false;
  constructor() { }

  ngOnInit(): void {
  }

}
