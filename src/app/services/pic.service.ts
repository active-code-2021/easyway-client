import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicService {

  constructor(private http:HttpClient) { }
  add(file):Observable<boolean>{
    
    const res = this.http.post<boolean>(`http://127.0.0.1:5000/api/v1/users`, {});
    res.subscribe(() => {debugger});

    return this.http.post<boolean>(`http://127.0.0.1:5000/upload_file`,file);
 
    }
}
