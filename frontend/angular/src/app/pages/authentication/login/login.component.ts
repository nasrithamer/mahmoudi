import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {

  username: string = 'demo';
  password: string = 'demo';

  constructor(private authService: AuthService, private router: Router) {
  }

  async login() {
    try {
      const isLoggedIn: boolean = await this.authService.login(
        this.username,
        this.password
      );

      if (isLoggedIn) {
        this.router.navigate(['/']);
      } else {
        this.password = '';
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  }
}
