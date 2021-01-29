import { MedicamentComponent } from './pages/new-items/medicament/medicament.component';
import { DermatologistComponent } from './pages/new-items/dermatologist/dermatologist.component';
import { SupplierComponent } from './pages/new-items/supplier/supplier.component';
import { SystemAdminComponent } from './pages/new-items/system-admin/system-admin.component';
import { PharmaciesComponent } from './pages/lists/pharmacies/pharmacies.component';
import { PharmacyAdminComponent } from './pages/new-items/pharmacy-admin/pharmacy-admin.component';
import { PharmacyAdminService } from './services/pharmacy-admin.service';
import { PharmacyComponent } from './pages/new-items/pharmacy/pharmacy.component';
import { UpdatePasswordPaComponent } from './pages/updates/update-password-pa/update-password-pa.component';
import { UpdatePharmacyAdminComponent } from './pages/updates/update-pharmacy-admin/update-pharmacy-admin.component';
import { PharmacistComponent } from './pages/new-items/pharmacist/pharmacist.component';
import { PharmacistService } from './services/pharmacist.service';
import { NewPharmacyMedicamentComponent } from './pages/new-items/new-pharmacy-medicament/new-pharmacy-medicament.component';
import { NewMedicamentsComponent } from './pages/lists/new-medicaments/new-medicaments.component';
import { UpdatePharmacyMedicamentComponent } from './pages/updates/update-pharmacy-medicament/update-pharmacy-medicament.component';
import { MedicamentsComponent } from './pages/lists/medicaments/medicaments.component';
import { PharmacistsComponent } from './pages/lists/pharmacists/pharmacists.component';
import { ShiftComponent } from './pages/new-items/shift/shift.component';
import { DermatologistsComponent } from './pages/lists/dermatologists/dermatologists.component';
import { UpdatePharmacyComponent } from './pages/updates/update-pharmacy/update-pharmacy.component';
import { AllergyComponent } from './pages/new-items/allergy/allergy.component';
import { UpdatePatientComponent } from './pages/updates/update-patient/update-patient.component';
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
    {path: 'lists/registration-requests', component: RegistrationRequestsComponent},
    {path: 'lists/dermatologists', component: DermatologistsComponent},
    {path: 'lists/pharmacists', component: PharmacistsComponent},
    {path: 'lists/medicaments', component: MedicamentsComponent},
    {path: 'lists/new-medicaments', component: NewMedicamentsComponent},
    {path: 'lists/pharmacies', component: PharmaciesComponent},
    {path: 'updates/update-patient/:id', component:UpdatePatientComponent},
    {path: 'updates/update-pharmacy-medicament/:id', component:UpdatePharmacyMedicamentComponent},
    {path: 'updates/update-pharmacy/:id', component:UpdatePharmacyComponent},
    {path: 'updates/update-password-pa', component:UpdatePasswordPaComponent},
    {path: 'updates/update-pharmacy-admin/:id', component:UpdatePharmacyAdminComponent},
    {path: 'new-items/allergy', component:AllergyComponent},
    {path: 'new-items/pharmacist', component:PharmacistComponent},
    {path: 'new-items/dermatologist', component:DermatologistComponent},
    {path: 'new-items/supplier', component:SupplierComponent},
    {path: 'new-items/medicament', component:MedicamentComponent},
    {path: 'new-items/system-admin', component:SystemAdminComponent},
    {path: 'new-items/new-pharmacy-medicament/:id', component:NewPharmacyMedicamentComponent},
    {path: 'new-items/shift', component:ShiftComponent},
    {path: 'new-items/pharmacy', component:PharmacyComponent},
    {path: 'new-items/pharmacy-admin/:id', component:PharmacyAdminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
