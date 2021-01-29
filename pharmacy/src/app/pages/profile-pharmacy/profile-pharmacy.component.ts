import { PharmacyMedicamentService } from './../../services/pharmacy-medicament.service';
import { PharmacistService } from './../../services/pharmacist.service';
import { DermatologistService } from './../../services/dermatologist.service';
import { ShiftService } from './../../services/shift.service';
import { ShiftComponent } from './../new-items/shift/shift.component';
import { PharmacyService } from './../../services/pharmacy.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-pharmacy',
  templateUrl: './profile-pharmacy.component.html',
  styleUrls: ['./profile-pharmacy.component.css']
})
export class ProfilePharmacyComponent implements OnInit {

  public id: any;
  public pharmacy: any;
  public shifts: [];
  public dermatologist: any;
  public dermatologists= [] as  any;
  public pharmacists = [];
  public pharmacyMedicaments = [];
  constructor(private pmService: PharmacyMedicamentService, private pharmacistService: PharmacistService, private dermatologistService: DermatologistService, private route: ActivatedRoute, private pharmacyService: PharmacyService, private shiftService: ShiftService) { }

  ngOnInit(): void {
    this.setUpPharmacy();
    this.setUpPharmacists();
    this.setUpPharmacyMedicaments();
 
  }

  setUpPharmacy(): void{
    this.id = this.route.snapshot.params.id;
    this.pharmacyService.getPharmacy(this.id).subscribe(data =>{
        this.pharmacy = data;
        console.log(this.pharmacy);
    })
    this.shiftService.getAllShiftsByPharmacyId(this.id).subscribe(data =>{
      this.shifts = data;
      console.log(data);
      this.setUpDermatologists(this.shifts);
  })
 
  }

  setUpDermatologists(shifts): void{
    shifts.forEach(element => {
      this.dermatologistService.getDermatologistById(element.dermatologistId).subscribe(data =>{
        this.dermatologist = data;
        this.dermatologists.push(this.dermatologist);
      })
    });
    console.log(this.dermatologists);
  }

  setUpPharmacists(): void{
    this.id = this.route.snapshot.params.id;
      this.pharmacistService.getAllPharmacistByPharmacyId(this.id).subscribe(data =>{
        this.pharmacists = data;
      })
  }

  setUpPharmacyMedicaments(): void {
    this.id = this.route.snapshot.params.id;
    this.pmService.getAllMedicamentsByPharmacyId(this.id).subscribe(data =>{
      this.pharmacyMedicaments = data;
      console.log(data);
      console.log("Moji lekovi");
      console.log(this.pharmacyMedicaments);
    })
   
  }

}
