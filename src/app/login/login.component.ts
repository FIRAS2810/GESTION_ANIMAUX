import { Component } from '@angular/core';
import { User } from '../model/User.model';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = new User();


  err: number = 0;
  constructor(private authService: AuthService,
    private router: Router) {

  }

  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
        let jwToken = data.headers.get('Authorization')!;
        this.authService.saveToken(jwToken);
         this.router.navigate(['/']); 
      },
      error: (err: any) => {
      this.err = 1; 
      }
      });
      
  }

}
