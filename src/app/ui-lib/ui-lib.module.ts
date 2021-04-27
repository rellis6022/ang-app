import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbTooltipModule, NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// UI_LIB components
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { UiFormComponent } from './ui-form/ui-form.component';
import { UiBlockComponent } from './ui-block/ui-block.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiListComponent } from './ui-list/ui-list.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiHeadingComponent } from './ui-heading/ui-heading.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiDropdownComponent } from './ui-dropdown/ui-dropdown.component';
import { UiInputSearchComponent } from './ui-input-search/ui-input-search.component';
import { StyleButtonComponent } from './style-button/style-button.component';
import { StyleIconComponent } from './style-icon/style-icon.component';
import { UiSelectComponent } from './ui-select/ui-select.component';
import { UiTooltipComponent } from './ui-tooltip/ui-tooltip.component';
import { UiDatepickerComponent } from './ui-datepicker/ui-datepicker.component';
import { StyleDropdownComponent } from './style-dropdown/style-dropdown.component';
import { UiSectionTextareaComponent } from './ui-section-textarea/ui-section-textarea.component';



@NgModule({
  declarations: [UiModalComponent, UiFormComponent, UiBlockComponent, UiInputComponent, UiListComponent, UiButtonComponent, UiHeadingComponent, UiCardComponent, UiDropdownComponent, UiInputSearchComponent, StyleButtonComponent, StyleIconComponent, UiSelectComponent, UiTooltipComponent, UiDatepickerComponent, StyleDropdownComponent, UiSectionTextareaComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    FormsModule
  ],
  exports: [
    NgSelectModule,
    FormsModule,
    UiModalComponent,
    UiFormComponent,
    UiBlockComponent,
    UiInputComponent,
    UiInputSearchComponent,
    UiListComponent,
    UiButtonComponent,
    UiHeadingComponent,
    UiCardComponent,
    UiDropdownComponent,
    UiSelectComponent,
    UiTooltipComponent,
    UiDatepickerComponent,
    StyleButtonComponent,
    StyleIconComponent,
    StyleDropdownComponent,
    UiSectionTextareaComponent
  ]
})
export class UiLibModule { }
