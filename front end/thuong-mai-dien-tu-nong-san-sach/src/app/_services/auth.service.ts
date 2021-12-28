import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

const baseUrl = 'http://localhost:80/Newfolder/Login_Customer.php'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(phone: any, Password: any): Observable<any> {
    console.log(`${baseUrl}?TaiKhoan=${phone}&Password=${Password}`)
    return this.http.get(`${baseUrl}?TaiKhoan=${phone}&Password=${Password}`)
  }
}
