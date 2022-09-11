import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  errormsg = '';

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    localStorage.setItem('token', 'notoken');
  }
  login() {
    const baseUrl = 'http://127.0.0.1:8000/auth/api-token-auth/';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      }),
    };
    let token;
    console.log('this is request opt');
    console.log(requestOptions);
    console.log('end');
    fetch(baseUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data['token']);
        if (typeof data['token'] === 'undefined') {
          console.log('auth failed');
          this.errormsg = 'Please try again';
          this.loginForm.reset();
        } else {
          console.log('auth success');
          localStorage.setItem('token', data['token']);
          console.log('from local storage - ', localStorage.getItem('token'));
          this.router.navigate(['dashboard']);
        }
      });
  }
}
