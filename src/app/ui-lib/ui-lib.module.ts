import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { UiFormComponent } from './ui-form/ui-form.component';
import { UiBlockComponent } from './ui-block/ui-block.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiListComponent } from './ui-list/ui-list.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiHeadingComponent } from './ui-heading/ui-heading.component';
import { UiCardComponent } from './ui-card/ui-card.component';



@NgModule({
  declarations: [UiModalComponent, UiFormComponent, UiBlockComponent, UiInputComponent, UiListComponent, UiButtonComponent, UiHeadingComponent, UiCardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UiModalComponent,
    UiFormComponent,
    UiBlockComponent,
    UiInputComponent,
    UiListComponent,
    UiButtonComponent,
    UiHeadingComponent,
    UiCardComponent,
  ]
})
export class UiLibModule { }
