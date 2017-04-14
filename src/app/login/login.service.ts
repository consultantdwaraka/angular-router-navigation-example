import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable()
export class LoginService {

  constructor() { }

  onLogin(loginModel: Login):boolean{
    if(loginModel.userName == loginModel.pwd ) {
      console.log(" This is the login service, user name:  "+ loginModel.userName );
      console.log(" This is the login service, password: "+ loginModel.pwd );
      return true;
    } else {
      console.log(" Invalid credentials ");
      return false;
    }
  }

}
