import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'app/service/Challenge.service';
declare const google: any;


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent  {
   
 
    titre: string;
    description: string;
    livrablesAttendus: string[];
    grilleEvaluation: { critere: string, poids: number }[] = []; // Tableau pour les critères
    dateLimite: Date;
    challenges: any[];
    showAddForm: boolean = false; // Variable pour contrôler l'affichage du formulaire

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.loadChallenges();
  }

  loadChallenges(): void {
    this.challengeService.getChallenges().subscribe(
      (response) => {
        this.challenges = response;
      },
      (error) => {
        console.error('Error loading challenges:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm; // Inversez la valeur de la variable pour afficher ou masquer le formulaire
  }

    addCritere(): void {
      this.grilleEvaluation.push({ critere: '', poids: null });
    }
  
    createChallenge(): void {
      const newChallengeData = {
        titre: this.titre,
        description: this.description,
        livrablesAttendus: this.livrablesAttendus,
        grilleEvaluation: this.grilleEvaluation,
        dateLimite: this.dateLimite
      };
  
      this.challengeService.createChallenge(newChallengeData).subscribe(
        (response) => {
          console.log('New challenge created:', response);
          // Réinitialiser les champs du formulaire après la création réussie
          this.titre = '';
          this.description = '';
          this.livrablesAttendus = [];
          this.grilleEvaluation = [];
          this.dateLimite = null;
          // Recharger la liste des challenges pour afficher le nouveau challenge
          this.loadChallenges();
        },
        (error) => {
          console.error('Error creating challenge:', error);
        }
      );
    }
  }