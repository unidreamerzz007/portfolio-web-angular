import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://portfolio-web-server-4h25.onrender.com'; // Backend URL

  constructor(private http: HttpClient) {}

  sendEmail(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
