// challenge.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private apiUrl = 'http://localhost:3000/api/challenges';

  constructor(private http: HttpClient) { }

  // Récupérer tous les challenges
  getChallenges(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Récupérer un challenge par son ID
  getChallenge(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Créer un nouveau challenge
  createChallenge(challengeData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, challengeData);
  }

  // Mettre à jour un challenge existant
  updateChallenge(id: string, challengeData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, challengeData);
  }

  // Supprimer un challenge
  deleteChallenge(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
