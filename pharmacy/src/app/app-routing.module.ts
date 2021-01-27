import { RegistrationRequestsComponent } from './pages/lists/registration-requests/registration-requests.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterPatientComponent } from './pages/register-patient/register-patient.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'frontpage'},
  {path: 'frontpage', component:FrontpageComponent, children: [
    {path: 'register-patient', component: RegisterPatientComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login/:id', component: LoginComponent },
  ]},
  {path: 'homepage', component:HomepageComponent, children: [
    {path: 'lists/registration-requests', component: RegistrationRequestsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
