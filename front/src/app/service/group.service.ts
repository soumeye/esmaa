import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class GroupService {
    private baseUrl = 'http://localhost:3000/api';
  
    constructor(private http: HttpClient) { }
  
    getAllGroups(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/groups`);
    }
  
    createGroup(groupData: any): Observable<any> {
      return this.http.post(<any>(`${this.baseUrl}/groups`), groupData);
  }
  
    createParticipation(participationData: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/participations`, participationData);
      }

      getClassement(): Observable<any> {
        return this.http.get('http://localhost:3000/api/classement');
      }
      soumettreDonnees(data: any): Observable<any> {
        return this.http.post('http://localhost:3000/api/soumissions', data);
      }
    // Ajoutez d'autres méthodes selon vos besoins (mise à jour, suppression, etc.)
  }