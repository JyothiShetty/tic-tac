import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public singupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.singupForm = this.formBuilder.group({
      username: [''],
      email: [''],
      password: [''],
      conPassword: [''],
    });
  }
  signUp() {
    this.http
      .post<any>(
        'http://127.0.0.1:8000/auth/create_auth/',
        this.singupForm.value
      )
      // console.log(this.singupForm.value);
      .subscribe(
        (res) => {
          alert('Signup Succesfull');
          console.log(this.singupForm.value);
          this.singupForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert('something went wrong');
        }
      );
  }
}
