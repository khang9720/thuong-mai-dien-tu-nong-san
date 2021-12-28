import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

const baseUrl = 'http://localhost:80/Newfolder/Register_Customer.php'

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(public http: HttpClient) {}

  Register(account: any, password: any): Observable<any> {
    return this.http.get(`${baseUrl}?TaiKhoan=${account}&Password=${password}`)
  }
}
