import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: '',
    confirm_password: '',
  }

  isLoading: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    if (this.isLoading) return;

    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        alert('Yeahhh login success');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentials do not match our record.')
      }).finally(() => (this.isLoading = false));
  }
}