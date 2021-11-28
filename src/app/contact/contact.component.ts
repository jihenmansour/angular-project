import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback:Feedback;

@ViewChild('fform') feedbackFormDirective;

formErrors = {
  'name': '',
  'lastname': '',
  'email': '',
  'phonenum': ''

};

validationMessage = {
  'name': {
    'required': 'Name is required'
  },
};




  constructor(private fb: FormBuilder) {
    this.createForm();

   }
   

  ngOnInit() {
  }
  createForm() {
    this.feedbackForm=this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(2)]],
      'lastname': ['', [Validators.required, Validators.minLength(2)]],
      'email': ['', [Validators.required, Validators.email]],
      'phonenum': ['', [Validators.required, Validators.maxLength(8)]],
      'message': ''
    });
  }

}
