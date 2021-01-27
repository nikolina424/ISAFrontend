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
    console.log("Ispisacu usera");
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log("Ispisacu usera");
    console.log(this.user);
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


  public clearStorage(): void {
    localStorage.clear();
    this.router.navigateByUrl('frontpage');
  }

}
