import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {toast} from 'angular2-materialize';


@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  modalErrors = new EventEmitter<string|MaterializeAction>();
  _errors: any;
  
  @Input() set errors(data){
    console.log(data);
    this._errors = data;
  }
  get errors() { 
    return this._errors;
  }
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    let $this = this;
    setTimeout(function() {
      $this.modalErrors.emit({action:"modal",params:['open']}); 
    },100);
  }
}
