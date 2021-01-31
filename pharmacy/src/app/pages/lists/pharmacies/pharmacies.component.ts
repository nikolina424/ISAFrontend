import { Router } from '@angular/router';
import { PharmacyService } from './../../../services/pharmacy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css']
})
export class PharmaciesComponent implements OnInit {

  public isPatient: boolean = false;
  public isSystemAdmin: boolean = false;
  public pharmacies = [];
  public user: any;


  constructor(private router: Router,private pharmacyService: PharmacyService) { }

  ngOnInit(): void {
    this.getAllPharmacies();
    this.setupUser();
    this.setupUserType();
    console.log(this.isSystemAdmin);
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 
  
  private setupUserType(): void {
    if(this.user.userRole === 'SYSTEM_ADMIN'){
      this.isSystemAdmin = true;
    }else if(this.user.userRole === 'PATIENT'){
      this.isPatient = true;
    }
    
  }

  private getAllPharmacies(): void {
    this.pharmacyService.getAllPharmacies().subscribe(data => {
      this.pharmacies = data;
      console.log(data);
    }, error => {
      
    })
  }

  public createAdmin(id): void {
    this.router.navigateByUrl(`homepage/new-items/pharmacy-admin/${id}`);
  }

  public viewProfile(id): void {
    this.router.navigateByUrl(`homepage/profile-pharmacy/${id}`);
  }

}
