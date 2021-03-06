import { PharmacyService } from './../../../services/pharmacy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicament-pharmacies',
  templateUrl: './medicament-pharmacies.component.html',
  styleUrls: ['./medicament-pharmacies.component.css']
})
export class MedicamentPharmaciesComponent implements OnInit {

  public pharmacies = [];
  public medicamentId: any;
  public pharmacyMedicamentId: any;
  constructor(private router: Router, private route: ActivatedRoute, private pharmacyService: PharmacyService) { }

  ngOnInit(): void {
    this.findPharmacies();
  }

   findPharmacies(): void{
    this.medicamentId = this.route.snapshot.params.id;
    this.pharmacyService.getPharmaciesByMedicamentId(this.medicamentId).subscribe(data => {
      this.pharmacies = data;
    })

  }

  reserveMedicament(): void{
    this.pharmacyMedicamentId = this.route.snapshot.params.id;
    this.router.navigateByUrl(`homepage/new-items/medicament-reservation/${this.pharmacyMedicamentId}`);
  }

}
