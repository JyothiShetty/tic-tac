import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') == 'notoken') {
      this.router.navigate(['login']);
    }
  }
  logout() {
    console.log('logout');
    localStorage.setItem('token', 'notoken');
    this.router.navigate(['login']);
  }

}
