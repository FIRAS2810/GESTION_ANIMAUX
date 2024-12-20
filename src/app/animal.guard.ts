import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './service/auth.service';

export const animalGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);  
  
  
  if (authService.isAdmin()) {
    return true;
  } else {
    router.navigate(['app-forbidden']);
    return false;
  }
};

