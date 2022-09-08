import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public singupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient) { }

  ngOnInit(): void {
    this.singupForm = this.formBuilder.group({
      username:[''],
      email:[''],
      password:[''],
      conPassword:['']
    })
  }
  signUp() {

  }

}
