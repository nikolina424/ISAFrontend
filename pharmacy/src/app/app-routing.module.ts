import { PurchaseOrderComponent } from './pages/new-items/purchase-order/purchase-order.component';
import { PromotionComponent } from './pages/new-items/promotion/promotion.component';
import { SubscribedPharmaciesComponent } from './pages/lists/subscribed-pharmacies/subscribed-pharmacies.component';
import { PharmacistConsultationComponent } from './pages/lists/pharmacist-consultation/pharmacist-consultation.component';
import { PharmacyConsultationComponent } from './pages/lists/pharmacy-consultation/pharmacy-consultation.component';
import { DroppedPharmacistAppointmentsComponent } from './pages/lists/dropped-pharmacist-appointments/dropped-pharmacist-appointments.component';
import { ActivePharmacistAppointmentsComponent } from './pages/lists/active-pharmacist-appointments/active-pharmacist-appointments.component';
import { AnswerComponent } from './pages/new-items/answer/answer.component';
import { ComplaintsComponent } from './pages/lists/complaints/complaints.component';
import { ComplaintPharmacyComponent } from './pages/new-items/complaint-pharmacy/complaint-pharmacy.component';
import { UpdatePasswordSupplierComponent } from './pages/updates/update-password-supplier/update-password-supplier.component';
import { UpdatePasswordDermatologistComponent } from './pages/updates/update-password-dermatologist/update-password-dermatologist.component';
import { UpdatePasswordPharmacistComponent } from './pages/updates/update-password-pharmacist/update-password-pharmacist.component';
import { UpdatePasswordPatientComponent } from './pages/updates/update-password-patient/update-password-patient.component';
import { UpdatePasswordSaComponent } from './pages/updates/update-password-sa/update-password-sa.component';
import { UpdateSystemAdminComponent } from './pages/updates/update-system-admin/update-system-admin.component';
import { UpdateSupplierComponent } from './pages/updates/update-supplier/update-supplier.component';
import { UpdatePharmacistComponent } from './pages/updates/update-pharmacist/update-pharmacist.component';
import { UpdateDermatologistComponent } from './pages/updates/update-dermatologist/update-dermatologist.component';
import { PricelistComponent } from './pages/new-items/pricelist/pricelist.component';
import { PricelistsComponent } from './pages/lists/pricelists/pricelists.component';
import { ActiveDermatologistAppointmentsComponent } from './pages/lists/active-dermatologist-appointments/active-dermatologist-appointments.component';
import { MedicamentReservationComponent } from './pages/new-items/medicament-reservation/medicament-reservation.component';
import { BussinessReportComponent } from './pages/bussiness-report/bussiness-report.component';
import { DroppedMedReservationsComponent } from './pages/lists/dropped-med-reservations/dropped-med-reservations.component';
import { ActiveMedReservationsComponent } from './pages/lists/active-med-reservations/active-med-reservations.component';
import { DermatologistAvailableAppointmentComponent } from './pages/new-items/dermatologist-available-appointment/dermatologist-available-appointment.component';
import { PharmacyDermatologistsComponent } from './pages/lists/pharmacy-dermatologists/pharmacy-dermatologists.component';
import { ProfilePharmacyComponent } from './pages/profile-pharmacy/profile-pharmacy.component';
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
import { SearchMedicamentsComponent } from './pages/lists/search-medicaments/search-medicaments.component';
import { SearchPharmaciesComponent } from './pages/lists/search-pharmacies/search-pharmacies.component';
import { MedicamentPharmaciesComponent } from './pages/lists/medicament-pharmacies/medicament-pharmacies.component';
import { DroppedDermatologistAppointmentsComponent } from './pages/lists/dropped-dermatologist-appointments/dropped-dermatologist-appointments.component';
import { ComplaintPharmacistComponent } from './pages/new-items/complaint-pharmacist/complaint-pharmacist.component';
import { ComplaintDermatologistComponent } from './pages/new-items/complaint-dermatologist/complaint-dermatologist.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'frontpage/lists/search-pharmacies'},
  {path: 'frontpage', component:FrontpageComponent, children: [
    {path: 'register-patient', component: RegisterPatientComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login/:id', component: LoginComponent },
    {path: 'lists/search-medicaments', component: SearchMedicamentsComponent},
    {path: 'profile-pharmacy/:id', component: ProfilePharmacyComponent},
    {path: 'lists/search-pharmacies', component: SearchPharmaciesComponent},
    {path: 'login', component: LoginComponent},
  ]},
  {path: 'homepage', component:HomepageComponent, children: [
    {path: 'profile-pharmacy/:id', component: ProfilePharmacyComponent},
    {path: 'bussiness-report/:id', component: BussinessReportComponent},
    {path: 'lists/registration-requests', component: RegistrationRequestsComponent},
    {path: 'lists/dermatologists', component: DermatologistsComponent},
    {path: 'lists/pharmacists', component: PharmacistsComponent},
    {path: 'lists/medicaments', component: MedicamentsComponent},
    {path: 'lists/new-medicaments', component: NewMedicamentsComponent},
    {path: 'lists/pharmacies', component: PharmaciesComponent},
    {path: 'lists/pharmacy-dermatologists', component: PharmacyDermatologistsComponent},
    {path: 'lists/search-medicaments', component: SearchMedicamentsComponent},
    {path: 'lists/active-med-reservations/:id', component: ActiveMedReservationsComponent},
    {path: 'lists/dropped-med-reservations/:id', component: DroppedMedReservationsComponent},
    {path: 'lists/active-dermatologist-appointments/:id', component: ActiveDermatologistAppointmentsComponent},
    {path: 'lists/dropped-dermatologist-appointments/:id', component: DroppedDermatologistAppointmentsComponent},
    {path: 'lists/active-pharmacist-appointments/:id', component: ActivePharmacistAppointmentsComponent},
    {path: 'lists/dropped-pharmacist-appointments/:id', component: DroppedPharmacistAppointmentsComponent},
    {path: 'lists/pricelists/:id', component: PricelistsComponent},
    {path: 'lists/subscribed-pharmacies', component: SubscribedPharmaciesComponent},
    {path: 'lists/pharmacy-consultation', component: PharmacyConsultationComponent},
    {path: 'lists/pharmacist-consultation/:id', component: PharmacistConsultationComponent},
    {path: 'lists/complaints/:id', component: ComplaintsComponent},
    {path: 'lists/medicament-pharmacies/:id', component: MedicamentPharmaciesComponent},
    {path: 'updates/update-pharmacy-medicament/:id', component:UpdatePharmacyMedicamentComponent},
    {path: 'updates/update-pharmacy/:id', component:UpdatePharmacyComponent},
   
    {path: 'updates/update-patient/:id', component:UpdatePatientComponent},
    {path: 'updates/update-dermatologist/:id', component:UpdateDermatologistComponent},
    {path: 'updates/update-pharmacist/:id', component:UpdatePharmacistComponent},
    {path: 'updates/update-pharmacy-admin/:id', component:UpdatePharmacyAdminComponent},
    {path: 'updates/update-supplier/:id', component:UpdateSupplierComponent},
    {path: 'updates/update-system-admin/:id', component:UpdateSystemAdminComponent},
    
    {path: 'updates/update-password-pa', component:UpdatePasswordPaComponent},
    {path: 'updates/update-password-sa', component:UpdatePasswordSaComponent},
    {path: 'updates/update-password-patient', component:UpdatePasswordPatientComponent},
    {path: 'updates/update-password-pharmacist', component:UpdatePasswordPharmacistComponent},
    {path: 'updates/update-password-dermatologist', component:UpdatePasswordDermatologistComponent},
    {path: 'updates/update-password-supplier', component:UpdatePasswordSupplierComponent},
    
    {path: 'new-items/purchase-order/:id', component:PurchaseOrderComponent},
    {path: 'new-items/allergy', component:AllergyComponent},
    {path: 'new-items/answer/:id', component:AnswerComponent},
    {path: 'new-items/pricelist/:id', component:PricelistComponent},
    {path: 'new-items/medicament-reservation/:id', component:MedicamentReservationComponent},
    {path: 'new-items/pharmacist', component:PharmacistComponent},
    {path: 'new-items/dermatologist-available-appointment/:id', component:DermatologistAvailableAppointmentComponent},
    {path: 'new-items/dermatologist', component:DermatologistComponent},
    {path: 'new-items/supplier', component:SupplierComponent},
    {path: 'new-items/medicament', component:MedicamentComponent},
    {path: 'new-items/system-admin', component:SystemAdminComponent},
    {path: 'new-items/new-pharmacy-medicament/:id', component:NewPharmacyMedicamentComponent},
    {path: 'new-items/shift', component:ShiftComponent},
    {path: 'new-items/pharmacy', component:PharmacyComponent},
    {path: 'new-items/pharmacy-admin/:id', component:PharmacyAdminComponent},
    {path: 'new-items/complaint-pharmacy/:id', component:ComplaintPharmacyComponent},
    {path: 'new-items/promotion/:id', component:PromotionComponent},
    {path: 'new-items/complaint-pharmacist/:id', component:ComplaintPharmacistComponent},
    {path: 'new-items/complaint-dermatologist/:id', component:ComplaintDermatologistComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
