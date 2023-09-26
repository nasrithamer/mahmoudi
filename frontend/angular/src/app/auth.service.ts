import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";
import routes from "./user-management/users.management.backend.routes";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'jwt_token';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }

  async login(username: string, password: string): Promise<boolean> {
    try {
      console.log(routes);
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      const credentials = {username, password};
      const response: any = await this.http
        // .post(routes[0].authenticationComponent.login, credentials)
        .post("http://backend.mahmoudi.local:4200/login_check", credentials, {headers})
        .toPromise();

      if (response && response.token) {
        this.cookieService.set(this.TOKEN_KEY, response.token, {
          expires: 1,
          secure: false,
          sameSite: 'Lax',
          path: '/',
        });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la connexion :', error);
      throw error;
    }
  }

  logout() {
    this.cookieService.delete(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return this.cookieService.get(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }
}
