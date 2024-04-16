import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classement',
  templateUrl: './participer.component.html',
  styleUrls: ['./assets/css/LineIcons.3.0.css', './assets/css/animate.css', './assets/css/bootstrap.min.css', './assets/css/glightbox.min.css', './assets/css/main.css', './assets/css/tiny-slider.css','./assets/css/zoombox.min.css']
})
export class ParticiperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    // Traiter les données du formulaire ici (par exemple, envoyer au backend)
    console.log(form.value);
  }
}