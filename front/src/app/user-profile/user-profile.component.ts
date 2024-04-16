import { Component, OnInit } from '@angular/core';
import { GroupService } from 'app/service/group.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {



  ngOnInit() {
  }
  nomEquipe: string;
  composition: string;
  slogan: string;
  logo: string;

  constructor(private apiService: GroupService) {}

  onSubmit(): void {
    const participationData = {
      nomEquipe: this.nomEquipe,
      composition: this.composition,
      slogan: this.slogan,
      logo: this.logo
    };

    this.apiService.createParticipation(participationData).subscribe(
      () => {
        // Réinitialisez les champs du formulaire après l'envoi réussi
        this.nomEquipe = '';
        this.composition = '';
        this.slogan = '';
        this.logo = '';
        alert('Participation créée avec succès !');
      },
      (error) => {
        console.error('Erreur lors de la création de la participation :', error);
        alert('Une erreur s\'est produite lors de la création de la participation.');
      }
    );
  }
}

