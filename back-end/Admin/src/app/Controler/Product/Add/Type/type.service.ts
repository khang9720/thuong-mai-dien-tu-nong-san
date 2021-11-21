import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {liink} from '../../../../../Link/link';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http:HttpClient) { }

  addURL = liink.bsaeURL + 'Add_Type.php';

  addType(TypeData:any)
  {
    let payload = new HttpParams();
    payload = payload.append("Ma_LSP",TypeData.Ma_LSP);
    payload = payload.append("Ten_LSP",TypeData.Ten_LSP);
    return this.http.post(this.addURL,payload);
  }
}
