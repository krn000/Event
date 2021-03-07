import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service'
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
  
  
  constructor( private _authService : AuthService) { }

  ngOnInit(): void {
  }
   registerUsers(){
    this._authService.registerUsers(this.registeredUser)
      .subscribe(res => console.log(res),
                  err => console.log(err))

   }

}
