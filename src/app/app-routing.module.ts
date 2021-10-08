import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameDeatilsComponent } from './game-deatils/game-deatils.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path:"",
    component: HomeComponent

  },
{
  path:"game-details/:id",
  component:GameDeatilsComponent
},
{
  path:"form",
  component:SignupComponent
},
{
  path:"registration", component:RegistrationComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
