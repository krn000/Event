import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: any = {
    email:'',
    password:''
  }
  constructor( private _authService: AuthService) { }

  ngOnInit(): void {
  }
  loginUsers(){
    this._authService.loginUsers(this.loginUser)
        .subscribe(res => console.log(res),
                  err => console.log(err))
  }

}
