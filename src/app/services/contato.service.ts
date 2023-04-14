import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/config';
import { Contato } from '../model/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Contato> {
    return this.http.get<Contato>(`${API_CONFIG.baseUrl}/contato/${id}`);
  }

  findAll(): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${API_CONFIG.baseUrl}/contato`);
  }

  create(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(`${API_CONFIG.baseUrl}/contato`, contato);
  }

  update(contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${API_CONFIG.baseUrl}/contato/${contato.id}`, contato);
  }

  delete(id: any): Observable<void> {
    const url = `${API_CONFIG.baseUrl}/contato/${id}`
    return this.http.delete<void>(url);
  }


}
