import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { ImmobilierShowComponent } from './immobilier-show/immobilier-show.component';




const ROUTES: Routes = [
  {path:'home', component: HomeComponent},
  {path:'immobilier', component: ImmobilierComponent},
  {path:'immobilier/:id',  component: ImmobilierShowComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'**', component:NotFoundComponent },

]






@NgModule({
  declarations: [],
  exports:[RouterModule],

  imports: [
    RouterModule.forRoot(ROUTES),
  ]
})
export class AppRoutingModule { }
