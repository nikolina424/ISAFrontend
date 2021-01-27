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

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    LoginComponent,
    RegisterPatientComponent,
    HomepageComponent,
    RegistrationRequestsComponent
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
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
