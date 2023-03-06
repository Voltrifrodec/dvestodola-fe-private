import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/common/model/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  helpData? : string;

  @Input()
  set helpDataSetter(helpData : string) {
    if(helpData) {
      console.log('Setter:', helpData);
    }
  }

  @Input()
  set personData(person : User | undefined) {
    if(person) {
      this.form.setValue(person);
    }
  }

  @Output()
  formCreate = new EventEmitter<User>();

  @Output()
  formUpdate = new EventEmitter<User>();


  form: FormGroup;
  constructor() {
    console.log('Constructor');
    console.log('Constructor Help Data:', this.helpData);
    this.form = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  savePerson() : void {
    if(this.form.valid) {
      if(this.form.controls.id.value) {
        this.formUpdate.emit(this.prepareUser(this.form.controls.id.value));
      }
      else {
        this.formCreate.emit(this.prepareUser());
      }
      this.form.reset();
    }
  } 

  private prepareUser(id? : number) : User {
    return {
      id: id !== undefined ? id : Date.now(),
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value
    };
  }
  
  ngOnInit(): void {
      console.log('OnInit');
      console.log('OnInit - Help Data: ', this.helpData);
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes.helpData?.currentValue) {
        console.log('OnChanges - Help Data', this.helpData);
      }
  }

  ngOnDestroy(): void {
      console.log('OnDestroy');
  }

}
