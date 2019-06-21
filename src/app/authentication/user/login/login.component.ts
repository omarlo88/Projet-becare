import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      //username:['', [Validators.required, Validators.minLength(3)]], Is the same
      username:['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password:['', Validators.required]
    });
  }

  onLogin(){
    this.authService.login(this.loginForm.value).subscribe(res =>{
      console.log(res.headers.get('Authorization'));
      let jwt = res.headers.get('Authorization');
      this.authService.saveToken(jwt);
      this.router.navigateByUrl("/planetes");
    }, err => {console.log(err)})
  }

}
