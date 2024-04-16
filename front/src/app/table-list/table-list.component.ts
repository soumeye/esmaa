import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  afficherFormulaireModification: boolean = false;
  ouvrirPopupFormulaireModification() {
    this.afficherFormulaireModification = true;
  }

  fermerPopupFormulaireModification() {
    this.afficherFormulaireModification = false;
  }
}
