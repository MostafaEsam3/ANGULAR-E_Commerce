import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm : FormGroup;
  constructor(){
    this.registerForm =new FormGroup({
    name : new FormControl('',[Validators.required , Validators.minLength(2)]),
    email : new FormControl('',[Validators.required , Validators.minLength(2)]),
    password : new FormControl('',[Validators.required , Validators.minLength(2)])
    })
  }
 handleSubmitForm(){
  }


}
