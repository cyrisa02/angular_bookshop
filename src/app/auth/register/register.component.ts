import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: '',
    confirm_password: '',
  }
  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    alert('this form');
  }
}
