import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  getLocalData:any;
  getUserData:any;
  tempLocal:any;
  tempUser:any;
  profileOpen:boolean=false;
  

  constructor (private router: Router) {
    this.tempLocal=localStorage.getItem('UserLoginData');
    this.tempUser=localStorage.getItem('UserData');
    this.getLocalData=JSON.parse(this.tempLocal);
    this.getUserData=JSON.parse(this.tempUser);
  }

  onclickLogout(){
    localStorage.removeItem('UserLoginData');
    localStorage.removeItem('UserData');
    this.router.navigate(['/login-register']);
  }
  openProfile(){
    this.profileOpen = true;
    document.body.classList.add('modal-open');
  }
  closeProfile(){
    this.profileOpen = false;
    document.body.classList.remove('modal-open');
  }
}
