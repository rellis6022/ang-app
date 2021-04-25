import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {NgbDatepicker, NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ui-datepicker',
  templateUrl: './ui-datepicker.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .custon-datepicker{
      font-family: 'Open Sans'
    }
    .custom-datepicker .ngb-dp-header {
      padding: 0;
    }
    .custom-datepicker .dp-header i{
      color: #00499E;
      font-size:20px;
    }
    .custom-datepicker .dp-header{
      align-items: center;
      margin-bottom: 15px;
    }
    .custom-datepicker h2{
      font-size:18px;
      font-weight:600;
      margin:0;
      line-height:1em;
    }
    .custom-datepicker .ngb-dp-content {
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 0rem;
      grid-row-gap: 0rem;
    }
    .ngb-dp-week.ngb-dp-weekdays{
      border:none;
      background: white;
    }
    .custom-datepicker .ngb-dp-day{
      font-size:14px;
    }
    .custom-datepicker .ngb-dp-weekday{
      color:black;
      font-weight:bolder;
      font-style: normal;
      line-height: 2rem;
      font-weight: 700;
      text-align: center;
    }
    .custom-datepicker ngb-datepicker-month.border.rounded {
      border:none !important;
    }
  `]
})
export class UiDatepickerComponent {
  
  @ViewChild(NgbDatepicker, {static: true}) datepicker!: NgbDatepicker;
  model!: NgbDateStruct;
  date!: {year: number, month: number};

  constructor(private calendar: NgbCalendar, public i18n: NgbDatepickerI18n) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }


  navigate(number: number) {
    const {state, calendar} = this.datepicker;
    this.datepicker.navigateTo(calendar.getNext(state.firstDate, 'm', number));
  }

  today() {
    const {calendar} = this.datepicker;
    this.datepicker.navigateTo(calendar.getToday());
  }

}
