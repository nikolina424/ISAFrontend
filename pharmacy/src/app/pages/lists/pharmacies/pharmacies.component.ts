import { Router } from '@angular/router';
import { PharmacyService } from './../../../services/pharmacy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css']
})
export class PharmaciesComponent implements OnInit {

  public pharmacies = [];

  constructor(private router: Router,private pharmacyService: PharmacyService) { }

  ngOnInit(): void {
    this.getAllPharmacies();
  }

  private getAllPharmacies(): void {
    this.pharmacyService.getAllPharmacies().subscribe(data => {
      this.pharmacies = data;
    }, error => {
      
    })
  }

  public createAdmin(id): void {
    this.router.navigateByUrl(`homepage/new-items/pharmacy-admin/${id}`);
  }

}
