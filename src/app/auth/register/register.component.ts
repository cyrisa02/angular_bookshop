import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

  passwordMatched: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    if (this.form.password != this.form.confirm_password) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}
