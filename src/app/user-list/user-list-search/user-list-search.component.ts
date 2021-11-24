
import {FocusMonitor} from '@angular/cdk/a11y';
import {BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Self,
  ViewChild,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
 FormArray,
  FormGroup,
  FormControl,
  NgControl,
  Validators
} from '@angular/forms';
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';
import {Subject} from 'rxjs';

/** @title Form field with custom telephone number input control. */
@Component({
  selector: 'app-user-list-search',
  templateUrl: './user-list-search.component.html',
  styleUrls: ['./user-list-search.component.css']
})

export class UserListSearchComponent implements OnInit {
 
@Output() filter: EventEmitter<string> = new EventEmitter();
@Output() updateUsers: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    
  }
  form = new FormGroup({
    search: new FormControl('')
  });
  findValue:any;
 
  constructor() {}
 
 filterFn(data){
   this.filter.emit(data);
 };
 updateUsersFn(){
  this.updateUsers.emit();
 }
 
  trackInput(){
    console.log(this.form.value);
  };
 
}


