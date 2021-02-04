import { PurchaseOrderComponent } from './pages/new-items/purchase-order/purchase-order.component';
import { PromotionComponent } from './pages/new-items/promotion/promotion.component';
import { PromotionService } from './services/promotion.service';
import { SubscribedPharmaciesComponent } from './pages/lists/subscribed-pharmacies/subscribed-pharmacies.component';
import { PharmacyConsultationComponent } from './pages/lists/pharmacy-consultation/pharmacy-consultation.component';
import { PharmacistConsultationComponent } from './pages/lists/pharmacist-consultation/pharmacist-consultation.component';
import { DroppedPharmacistAppointmentsComponent } from './pages/lists/dropped-pharmacist-appointments/dropped-pharmacist-appointments.component';
import { ActivePharmacistAppointmentsComponent } from './pages/lists/active-pharmacist-appointments/active-pharmacist-appointments.component';
import { AnswerComponent } from './pages/new-items/answer/answer.component';
import { ComplaintsComponent } from './pages/lists/complaints/complaints.component';
import { ComplaintPharmacyComponent } from './pages/new-items/complaint-pharmacy/complaint-pharmacy.component';
import { UpdatePasswordPatientComponent } from './pages/updates/update-password-patient/update-password-patient.component';
import { UpdateSupplierComponent } from './pages/updates/update-supplier/update-supplier.component';
import { UpdateSystemAdminComponent } from './pages/updates/update-system-admin/update-system-admin.component';
import { UpdatePasswordDermatologistComponent } from './pages/updates/update-password-dermatologist/update-password-dermatologist.component';
import { UpdatePasswordPharmacistComponent } from './pages/updates/update-password-pharmacist/update-password-pharmacist.component';
import { UpdatePasswordSaComponent } from './pages/updates/update-password-sa/update-password-sa.component';
import { UpdatePasswordSupplierComponent } from './pages/updates/update-password-supplier/update-password-supplier.component';
import { UpdateDermatologistComponent } from './pages/updates/update-dermatologist/update-dermatologist.component';
import { UpdatePharmacistComponent } from './pages/updates/update-pharmacist/update-pharmacist.component';
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
import { SupplierComponent } from './pages/new-items/supplier/supplier.component';
import { SystemAdminComponent } from './pages/new-items/system-admin/system-admin.component';
import { DermatologistComponent } from './pages/new-items/dermatologist/dermatologist.component';
import { PharmaciesComponent } from './pages/lists/pharmacies/pharmacies.component';
import { PharmacyAdminComponent } from './pages/new-items/pharmacy-admin/pharmacy-admin.component';
import { PharmacyAdminService } from './services/pharmacy-admin.service';
import { PharmacyComponent } from './pages/new-items/pharmacy/pharmacy.component';
import { UpdatePasswordPaComponent } from './pages/updates/update-password-pa/update-password-pa.component';
import { UpdatePharmacyAdminComponent } from './pages/updates/update-pharmacy-admin/update-pharmacy-admin.component';
import { PharmacistComponent } from './pages/new-items/pharmacist/pharmacist.component';
import { NewPharmacyMedicamentComponent } from './pages/new-items/new-pharmacy-medicament/new-pharmacy-medicament.component';
import { NewMedicamentsComponent } from './pages/lists/new-medicaments/new-medicaments.component';
import { UpdatePharmacyMedicamentComponent } from './pages/updates/update-pharmacy-medicament/update-pharmacy-medicament.component';
import { PharmacistsComponent } from './pages/lists/pharmacists/pharmacists.component';
import { MedicamentsComponent } from './pages/lists/medicaments/medicaments.component';
import { ShiftComponent } from './pages/new-items/shift/shift.component';
import { DermatologistsComponent } from './pages/lists/dermatologists/dermatologists.component';
import { UpdatePharmacyComponent } from './pages/updates/update-pharmacy/update-pharmacy.component';
import { AllergyComponent } from './pages/new-items/allergy/allergy.component';
import { UpdatePatientComponent } from './pages/updates/update-patient/update-patient.component';
import { RegistrationRequestsComponent } from './pages/lists/registration-requests/registration-requests.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterPatientComponent } from './pages/register-patient/register-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { SearchPharmaciesComponent } from './pages/lists/search-pharmacies/search-pharmacies.component';
import { SearchMedicamentsComponent } from './pages/lists/search-medicaments/search-medicaments.component';
import { MedicamentPharmaciesComponent } from './pages/lists/medicament-pharmacies/medicament-pharmacies.component';
import { DroppedDermatologistAppointmentsComponent } from './pages/lists/dropped-dermatologist-appointments/dropped-dermatologist-appointments.component';
import { ComplaintDermatologistComponent } from './pages/new-items/complaint-dermatologist/complaint-dermatologist.component';
import { ComplaintPharmacistComponent } from './pages/new-items/complaint-pharmacist/complaint-pharmacist.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    LoginComponent,
    RegisterPatientComponent,
    HomepageComponent,
    RegistrationRequestsComponent,
    UpdatePatientComponent,
    AllergyComponent,
    UpdatePharmacyComponent,
    DermatologistsComponent,
    ShiftComponent,
    MedicamentsComponent,
    PharmacistsComponent,
    UpdatePharmacyMedicamentComponent,
    NewMedicamentsComponent,
    NewPharmacyMedicamentComponent,
    PharmacistComponent,
    UpdatePharmacyAdminComponent,
    UpdatePasswordPaComponent,
    PharmacyComponent,
    PharmacyAdminComponent,
    PharmaciesComponent,
    DermatologistComponent,
    SystemAdminComponent,
    SupplierComponent,
    MedicamentComponent,
    SearchPharmaciesComponent,
    SearchMedicamentsComponent,
    ProfilePharmacyComponent,
    PharmacyDermatologistsComponent,
    DermatologistAvailableAppointmentComponent,
    MedicamentPharmaciesComponent,
    ActiveMedReservationsComponent,
    DroppedMedReservationsComponent,
    BussinessReportComponent,
    MedicamentReservationComponent,
    ActiveDermatologistAppointmentsComponent,
    DroppedDermatologistAppointmentsComponent,
    PricelistsComponent,
    PricelistComponent,
    UpdatePharmacistComponent,
    UpdateDermatologistComponent,
    UpdateSupplierComponent,
    UpdateSystemAdminComponent,
    UpdatePasswordSupplierComponent,
    UpdatePasswordSaComponent,
    UpdatePasswordPharmacistComponent,
    UpdatePasswordDermatologistComponent,
    UpdatePasswordPatientComponent,
    ComplaintDermatologistComponent,
    ComplaintPharmacistComponent,
    ComplaintPharmacyComponent,
    ComplaintsComponent,
    AnswerComponent,
    ActivePharmacistAppointmentsComponent,
    DroppedPharmacistAppointmentsComponent,
    PharmacistConsultationComponent,
    PharmacyConsultationComponent,
    SubscribedPharmaciesComponent,
    PromotionComponent,
    PurchaseOrderComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ScrollingModule,
    DragDropModule,
    BrowserAnimationsModule, 
    DemoNgZorroAntdModule,
    NgxMaterialTimepickerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
