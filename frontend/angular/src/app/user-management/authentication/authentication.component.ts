import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  username: string = 'demo';
  password: string = 'demo';

  ngOnInit(): void {
    console.log('Login Page ...');
  }

  async login() {
    try {
      const isLoggedIn: boolean = await this.authService.login(
        this.username,
        this.password
      );
      console.log(isLoggedIn);
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

  logout() {
    this.authService.logout();
  }
}
