import { PharmacistService } from './../../../services/pharmacist.service';
import { DermatologistAppointmentService } from './../../../services/dermatologist-appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PricelistService } from 'src/app/services/pricelist.service';

@Component({
  selector: 'app-pricelists',
  templateUrl: './pricelists.component.html',
  styleUrls: ['./pricelists.component.css']
})
export class PricelistsComponent implements OnInit {

  public id: any;
  public appointments= [] as  any;
  public priceMedicaments = [] as any;
  public pharmacists = [];
  public pharmacyId: any;

  constructor(private pharmacistService: PharmacistService, private router: Router, private pricelistService: PricelistService,  private daService: DermatologistAppointmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setpAppointments();
    this.setupPriceMedicament();
    this.getAllPharmacistByPharmacyId();
  }

  setpAppointments(): void {
    this.id = this.route.snapshot.params.id;
    this.daService.getAllExaminationsByPharmacyId(this.id).subscribe(data =>{
      this.appointments = data;
    })
  }

  setupPriceMedicament(): void{
    this.id = this.route.snapshot.params.id;
    this.pricelistService.getAllByPharmacyId(this.id).subscribe(data => {
      this.priceMedicaments = data;
      console.log(data);
    })
  }

  createPricelist(): void{
    this.id = this.route.snapshot.params.id;
    this.router.navigateByUrl(`homepage/new-items/pricelist/${this.id}`);
  }

  getAllPharmacistByPharmacyId(): void{
    this.id = this.route.snapshot.params.id;
    this.pharmacistService.getAllPharmacistByPharmacyId(this.id).subscribe(data => {
      this.pharmacists = data;
    }, error => {
      alert("Error");
    })
  }

}
