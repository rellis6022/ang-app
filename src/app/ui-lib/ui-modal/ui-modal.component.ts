import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.css']
})
export class UiModalComponent implements OnInit {

  @Input() title = ''
  visible = false;

  constructor() { }

  toggleModal(){
    this.visible = !this.visible;
  }
  modalClickOff(e:Event){
    if(!this.title){
      this.toggleModal();
    }
    console.log(e.currentTarget)
  }

  ngOnInit(): void {

  }

}
