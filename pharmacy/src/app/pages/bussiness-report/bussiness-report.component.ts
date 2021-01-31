import { ActivatedRoute } from '@angular/router';
import { PharmacistService } from './../../services/pharmacist.service';
import { PharmacyService } from './../../services/pharmacy.service';
import { DermatologistService } from './../../services/dermatologist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bussiness-report',
  templateUrl: './bussiness-report.component.html',
  styleUrls: ['./bussiness-report.component.css']
})
export class BussinessReportComponent implements OnInit {

  pharmacyId: any;
  pharmacy: any;
  dermatologists = [] as any;
  pharmacists = [] as any;


  constructor(private route: ActivatedRoute, private dermatologistService: DermatologistService, private pharmacyService: PharmacyService, private pharmacistService: PharmacistService) { }

  ngOnInit(): void {
    this.setupPharmacy();
    this.setupDermatologists();
    this.setupPharmacists();
  }

  setupPharmacy(): void{
    this.pharmacyId = this.route.snapshot.params.id;
    this.pharmacyService.getPharmacy(this.pharmacyId).subscribe(data =>{
      this.pharmacy = data;
      console.log(data);
    })
  }
  
  setupDermatologists(): void{
    this.pharmacyId = this.route.snapshot.params.id;
    this.dermatologistService.getAllDermatologistByPharmacyId(this.pharmacyId).subscribe(data =>{
      this.dermatologists = data;
      console.log(data);
    })
  }

  setupPharmacists(): void{
    this.pharmacyId = this.route.snapshot.params.id;
    this.pharmacistService.getAllPharmacistByPharmacyId(this.pharmacyId).subscribe(data =>{
      this.pharmacists = data;
      console.log(data);
    })
  }

}
