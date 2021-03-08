import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';
// import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registeredUser: any = {
    email: '',
    password: ''
  }


  constructor(private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  registerUsers() {
    this._authService.registerUsers(this.registeredUser)
      .subscribe(
        res => {
        console.log(res),
          localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err))
  }

}
