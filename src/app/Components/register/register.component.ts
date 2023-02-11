import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogSRVService } from '../blog-srv.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  personalInformations = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{3}$')]),
    birthdate:  new FormControl ('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(13)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  constructor( private blogservice: BlogSRVService, private router: Router) { }

  submitRegister() {
    if (this.personalInformations.valid) {
      const formData = this.personalInformations.value;
      this.blogservice.storeUserData(formData);
      this.router.navigate(['/login']);
    }
  }  

  ngOnInit() {
  }

}
