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
    }
    
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

  public changePassword(): void {
    this.router.navigateByUrl(`homepage/updates/update-password-pa`);
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


  public clearStorage(): void {
    localStorage.clear();
    this.router.navigateByUrl('frontpage');
  }

}
