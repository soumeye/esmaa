import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../service/group.service';
@Component({
  selector: 'app-icons',
   templateUrl: './icons.component.html'
})
export class IconsComponent implements OnInit {

  classementEquipes: any[];
  constructor(private apiService: GroupService) { }

  ngOnInit(): void {
    // Exemple d'utilisation de la méthode pour récupérer le classement
    this.apiService.getClassement().subscribe((data) => {
      console.log(data); // Faites quelque chose avec les données récupérées
    });
  }

}