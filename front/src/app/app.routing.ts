import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { acceuilComponent } from './components/accceuil/acceuil.component';
import { ClassementComponent } from './components/classement/classement.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { ParticiperComponent } from './components/participer/participer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'accueil',
    component: acceuilComponent
  },

  {
    path: 'classement',
    component: ClassementComponent
  },
  {
    path: 'challenge',
    component: ChallengeComponent
  },
  {
    path: 'apropos',
    component: AproposComponent
  },
  {
    path: 'participer',
    component: ParticiperComponent
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [RouterModule] // Exporter RouterModule permet d'utiliser les routes définies dans d'autres modules
})
export class AppRoutingModule { }
