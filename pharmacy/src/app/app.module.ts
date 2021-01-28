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
    NewPharmacyMedicamentComponent
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
