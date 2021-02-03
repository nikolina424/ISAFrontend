import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public isPatient: boolean = false;
  public isDermatologist: boolean = false;
  public isPharmacist: boolean = false;
  public isSystemAdmin: boolean = false;
  public isPharmacyAdmin: boolean = false;
  public isSupplier: boolean = false;
  public user: any;


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.setupUser();
    this.setupUserType();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 
  
  private setupUserType(): void {
    if(this.user.userRole === 'SYSTEM_ADMIN'){
      this.isSystemAdmin = true;
    }else if(this.user.userRole === 'PHARMACY_ADMIN'){
      this.isPharmacyAdmin = true;
    }else if(this.user.userRole === 'PHARMACIST'){
      this.isPharmacist = true;
    }else if(this.user.userRole === 'DERMATOLOGIST'){
      this.isDermatologist = true;
    }else if(this.user.userRole === 'PATIENT'){
      this.isPatient = true;
    }else if(this.user.userRole === 'SUPPLIER'){
      this.isSupplier = true;
    }
    
  }


  complaints(): void {
    this.router.navigate([`homepage/lists/complaints/${this.user.pharmacyId}`]);
  }

  registrationRequests(): void {
    this.router.navigate(['homepage/lists/registration-requests']);
  }

  public patientProfile(): void {
    this.router.navigateByUrl(`homepage/updates/update-patient/${this.user.id}`);
  }

  public addAllergy(): void {
    this.router.navigateByUrl(`homepage/new-items/allergy`);
  }

  public updatePharmacy(): void {
    this.router.navigateByUrl(`homepage/updates/update-pharmacy/${this.user.pharmacyId}`);
  }

  public editDermatologists(): void {
    this.router.navigateByUrl(`homepage/lists/dermatologists`);
  }

  public editMedicaments(): void {
    this.router.navigateByUrl(`homepage/lists/medicaments`);
  }


  public editPharmacists(): void {
    this.router.navigateByUrl(`homepage/lists/pharmacists`);
  }

  public pharmacyAdminProfile(): void {
    this.router.navigateByUrl(`homepage/updates/update-pharmacy-admin/${this.user.id}`);
  }

  public changePasswordPharmacyAdmin(): void {
    this.router.navigateByUrl(`homepage/updates/update-password-pa`);
  }

  public changePasswordSupplier(): void {
    this.router.navigateByUrl(`homepage/updates/update-password-supplier`);
  }

  public changePasswordPharmacist(): void {
    this.router.navigateByUrl(`homepage/updates/update-password-pharmacist`);
  }

  public changePasswordDermatologist(): void {
    this.router.navigateByUrl(`homepage/updates/update-password-dermatologist`);
  }

  public changePasswordSystemAdmin(): void {
    this.router.navigateByUrl(`homepage/updates/update-password-sa`);
  }

  public changePasswordPatient(): void {
    this.router.navigateByUrl(`homepage/updates/update-password-patient`);
  }

  public addPharmacy(): void {
    this.router.navigateByUrl(`homepage/new-items/pharmacy`);
  }

  public allPharmacies(): void {
    this.router.navigateByUrl(`homepage/lists/pharmacies`);
  }

  public addSupplier(): void {
    this.router.navigateByUrl(`homepage/new-items/supplier`);
  }

  public addDermatologist(): void {
    this.router.navigateByUrl(`homepage/new-items/dermatologist`);
  }

  public addSystemAdmin(): void {
    this.router.navigateByUrl(`homepage/new-items/system-admin`);
  }

  public addMedicament(): void{
    this.router.navigateByUrl(`homepage/new-items/medicament`);
  }

  public listPharmacies(): void{
    this.router.navigateByUrl(`homepage/lists/pharmacies`);
  }

  public createFreeAppointment(): void{
    this.router.navigateByUrl(`homepage/lists/pharmacy-dermatologists`);
  }

  public searchMeds(): void {
    this.router.navigateByUrl(`homepage/lists/search-medicaments`);
  }

  public clearStorage(): void {
    localStorage.clear();
    this.router.navigateByUrl('frontpage');
  }

  public droppedMedReservations(): void{
    this.router.navigateByUrl(`homepage/lists/dropped-med-reservations/${this.user.id}`);
  }

  public activeMedReservations(): void {
    this.router.navigateByUrl(`homepage/lists/active-med-reservations/${this.user.id}`);
  }

  public activeDermatologistApp(): void{
    this.router.navigateByUrl(`homepage/lists/active-dermatologist-appointments/${this.user.id}`);
  }

  public droppedDermatologistApp(): void {
    this.router.navigateByUrl(`homepage/lists/dropped-dermatologist-appointments/${this.user.id}`);
  }

  public activePharmacistApp(): void{
    this.router.navigateByUrl(`homepage/lists/active-pharmacist-appointments/${this.user.id}`);
  }

  public droppedPharmacistApp(): void {
    this.router.navigateByUrl(`homepage/lists/dropped-pharmacist-appointments/${this.user.id}`);
  }

  public reserveConsultation(): void {
    this.router.navigateByUrl(`homepage/lists/dropped-pharmacist-appointments/${this.user.id}`);
  }

  public consultation(): void {
    this.router.navigateByUrl(`homepage/lists/pharmacy-consultation`);
  }

  public bussinessReport(): void{
    this.router.navigateByUrl(`homepage/bussiness-report/${this.user.pharmacyId}`);
  }

  public pricelists(): void{
    this.router.navigateByUrl(`homepage/lists/pricelists/${this.user.pharmacyId}`);
  }

  public pharmacistProfile(): void {
    this.router.navigateByUrl(`homepage/updates/update-pharmacist/${this.user.id}`);
  }

  public dermatologistProfile(): void {
    this.router.navigateByUrl(`homepage/updates/update-dermatologist/${this.user.id}`);
  }

  public supplierProfile(): void {
    this.router.navigateByUrl(`homepage/updates/update-supplier/${this.user.id}`);
  }

  public systemAdminProfile(): void {
    this.router.navigateByUrl(`homepage/updates/update-system-admin/${this.user.id}`);
  }

}
