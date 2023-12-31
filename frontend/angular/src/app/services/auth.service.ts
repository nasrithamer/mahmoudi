import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import routes from "../configs/backend.routes";
import {CookieService} from "ngx-cookie-service";

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

      // Vérifier si authenticationComponent existe et a une propriété login
      if (
        !routes[0] ||
        !routes[0].authenticationComponent ||
        !routes[0].authenticationComponent.login
      ) {
        console.log('Login Url is not defined');
        return false;
      }
      const urlLogin = routes[0].authenticationComponent.login;

      const response: any = await this.http
        .post(urlLogin, credentials, {headers})
        // .post("http://backend.mahmoudi.local:4200/login_check", credentials, {headers})
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
    if (!token) {
      return false;
    }

    try {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));

      const expirationDate = new Date(tokenPayload.exp * 1000);
      if (expirationDate <= new Date()) {
        this.logout();
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  }
}
