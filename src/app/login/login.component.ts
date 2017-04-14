import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(private loginService:LoginService, private router:Router) { }

  model = new Login('','');
  error:string='';

  ngOnInit() {
  }

  onSubmit() {
   console.log("This is login button.");    
   let status = this.loginService.onLogin(this.model);
   console.log("Valid credentails: " + status)
   if(status) {
     this.error='';
     this.router.navigate(['/home']);
   } else {
     this.error = "Invlaid Credentials!";
   }
  }

}
