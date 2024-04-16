import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupService } from '../service/group.service';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

 

  groups: any[] = [];

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.groupService.getAllGroups().subscribe(groups => {
      this.groups = groups;
    });
  }
  afficherFormulaire: boolean = false;
  afficherFormulaireModification: boolean = false;

  ouvrirPopupFormulaire() {
    this.afficherFormulaire = true;
  }

  fermerPopupFormulaire() {
    this.afficherFormulaire = false;
  }

  ouvrirPopupFormulaireModification() {
    this.afficherFormulaireModification = true;
  }

  fermerPopupFormulaireModification() {
    this.afficherFormulaireModification = false;
  }
}
