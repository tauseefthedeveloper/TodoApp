import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  const loggedUser=localStorage.getItem('UserData');
  const router=inject(Router);
  if(loggedUser != null){
    return true;
  }
  else {
    router.navigateByUrl('login-register');
    return false;
  }
};
