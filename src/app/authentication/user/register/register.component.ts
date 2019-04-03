import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegistrationService} from '../../services/registration.service';
import {myPassValidator} from './myPassValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  selectFile: File;

  constructor(private fb: FormBuilder, private registerService: RegistrationService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      nom:['', Validators.required],
      prenom:['', Validators.required],
      email:['', Validators.compose([Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      username:['', [
        Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      password:['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      confirmedPassword:['', myPassValidator]

    });

    this.registerForm.controls.password.valueChanges.subscribe(
      n => {this.registerForm.controls.confirmedPassword.updateValueAndValidity()}
    );
  }

  onSelectFile(event){
    if (event.target.files.length > 0){
      //console.log(event.target.files[0])
      //console.log(event.target.files.item(0))
      const file = event.target.files[0];
      //this.registerForm.get("imageUser").setValue(file);
      this.selectFile = file;
    }
  }

  onRegister(){
    //console.log(this.registerForm.value)
    const user = this.registerForm.value;
    const formData = new FormData();
    formData.append("user", JSON.stringify(user));
    formData.append("file", this.selectFile);
    this.registerService.register(formData).subscribe(resp =>{
      console.log(resp);
      this.router.navigate(["/user/login"])
    }, error => {console.log(error)});
  }

}
