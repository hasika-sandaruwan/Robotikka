import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = environment.baseUrl;

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  private getToken(): string {
    const tempToken = this.cookieService.get('userToken');
    if (tempToken === undefined) {
      return 'empty'
    } else {
      return tempToken;
    }
  }

  public getAllProducts(pagination:number, page: number): Observable<any> {
    return this.http.get(this.baseURL + 'productRoute/getAllProducts?token='+this.getToken()+'&pagination='+pagination+'&page='+page)
  }
}
