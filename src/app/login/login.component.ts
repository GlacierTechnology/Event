import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { RouterModule, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signInForm: FormGroup;
  public fgtPwdForm: FormGroup;
  submitted = false;
  public email: AbstractControl;
  public password: AbstractControl;
  public fgtEmail: AbstractControl;
  public isValidUser: boolean = false;
  public fgtPwd: boolean = false;
  public fgtmail: string = "";
  constructor(private formBuilder: FormBuilder, private service: LoginService, private router: Router
    , private snackbar: MatSnackBar) {
    this.signInForm = this.formBuilder.group({
      'email': ['', Validators.required, Validators.email],
      'password': ['', Validators.required]
    });
    this.fgtPwdForm = this.formBuilder.group({
      'fgtEmail': ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  VerifyUser() {
    this.submitted = true;
    if (this.signInForm.invalid) {
      return;
    }
    let inputObj = {
      'email': this.signInForm.controls['email'].value,
      'pwd': this.signInForm.controls['password'].value
    }
    this.service.VerifyUser(inputObj).subscribe((data: any) => {
      if (data.success) {
        this.isValidUser = true;
        this.router.navigate(['/setup']);
      } else {
        //this.openSnackBar('Invalid Email/Password','');
        alert('Failed!! :-)\n\n' + JSON.stringify(this.signInForm.value, null, 4));
      }
    },
      error => {
        console.log("Error", error);

      });
  }
  RedirectToFgtPwd() {
    this.router.navigate(['/log']);
    this.isValidUser = true;
    this.fgtPwd = true;
  }
  VerifyEmail() {
    this.submitted = true;
    if (this.fgtPwdForm.invalid) {
      return;
    }
    let inputObj = {
      'email':this.fgtPwdForm.controls['fgtEmail'].value
    }   
    this.service.VerifyEmail(inputObj).subscribe((data: any) => {
      if (!data.success) {
        alert(inputObj);
      }
    },
      error => {
        console.log("Error", error);

      });
  }
  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

}
