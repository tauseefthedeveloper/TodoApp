import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { UserLogin, UserRegister } from '../../model/userData';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-login.component.html',
  styleUrl: './register-login.component.css'
})
export class RegisterLoginComponent {

  isRegisterMode = false;
  userLogin: UserLogin;
  userRegister: UserRegister;
  localDataUser: any;
  // registerForm:FormGroup; We can do that using reactive form and # property

  constructor(private userService: UserServiceService, private router: Router) {
    this.userLogin = new UserLogin();
    this.userRegister = new UserRegister();

    // this.registerForm = this.fb.group({
    //   firstName: ['', Validators.required],
    //   middleName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   mobileNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    //   altMobileNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    //   emailId: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    // });
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }
  onLoginUser() {
    this.userService.userLogin(this.userLogin).subscribe((res: any) => {
      if (res.result) {
        alert("Login Successfull");
        this.localDataUser = JSON.stringify(res);
        localStorage.setItem('UserLoginData', this.localDataUser);
        localStorage.setItem('UserData', JSON.stringify(this.userLogin));
        this.router.navigate(['/layout/home']);
      }
      else {
        alert(res.message);
      }
    })
  }

  CreateAccount() {
    this.userService.userRegistration(this.userRegister).subscribe((res: any) => {
      if (res.result) {
        alert("Registration Successfull");
        this.isRegisterMode = !this.isRegisterMode;
      }
      else {
        alert(res.message);
      }
    })
  }
}