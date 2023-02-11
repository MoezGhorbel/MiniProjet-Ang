import { Component, OnInit } from '@angular/core';
import { BlogSRVService } from '../blog-srv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public email!: string;
  public password!: string;

  constructor(private blogservice: BlogSRVService, private router: Router) { }

  submitLogin() {
    if (this.blogservice.login(this.email, this.password)) {
      this.router.navigate(['']);
    } else {
      alert("Error, make sure that your email and password are both correct.");
    }
  }

  ngOnInit() {
  }
  
}
