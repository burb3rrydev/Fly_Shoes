import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  private apiUrl = 'http://localhost:5000/api/shoes';

  constructor(private http: HttpClient) { }

  getShoes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getShoe(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addShoe(shoe: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, shoe);
  }

  updateShoe(id: number, shoe: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, shoe);
  }

  
  

  deleteShoe(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
