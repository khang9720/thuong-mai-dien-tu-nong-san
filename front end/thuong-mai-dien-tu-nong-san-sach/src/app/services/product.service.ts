import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

const baseUrl = 'http://localhost:4433/Newfolder/Show_All_Products.php'
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(public http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}`)
  }
}
