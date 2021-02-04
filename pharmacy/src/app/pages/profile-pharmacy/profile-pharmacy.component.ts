import { PromotionService } from './../../services/promotion.service';
import { DermatologistAppointmentService } from './../../services/dermatologist-appointment.service';
import { PharmacyMedicamentService } from './../../services/pharmacy-medicament.service';
import { PharmacistService } from './../../services/pharmacist.service';
import { DermatologistService } from './../../services/dermatologist.service';
import { ShiftService } from './../../services/shift.service';
import { ShiftComponent } from './../new-items/shift/shift.component';
import { PharmacyService } from './../../services/pharmacy.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  public appointments= [] as  any;
  public dermatologist: any;
  public dermatologists= [] as  any;
  public pharmacists = [];
  public pharmacyMedicaments = [];
  public isPatient: boolean = false;
  public isDermatologist: boolean = false;
  public isPharmacist: boolean = false;
  public isSystemAdmin: boolean = false;
  public isPharmacyAdmin: boolean = false;
  public user: any;
  public reserveDermatologist = false;
  public alertic = false;

  constructor(private promotionService: PromotionService,  private router: Router, private daService: DermatologistAppointmentService, private pmService: PharmacyMedicamentService, private pharmacistService: PharmacistService, private dermatologistService: DermatologistService, private route: ActivatedRoute, private pharmacyService: PharmacyService, private shiftService: ShiftService) { }

  ngOnInit(): void {
    this.setupUser();
    this.setupUserType();
    this.setUpPharmacy();
    this.setUpPharmacists();
    this.setUpPharmacyMedicaments();
    this.setUpAppointments();
 
  }
  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 
  
  private setupUserType(): void {
    if(this.user === null){

    }else{
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
   
  }

  subscribe(): void{
    this.id = this.route.snapshot.params.id;
    let body = {
      pharmacyId: this.id
    }
    this.promotionService.subscribePatient(this.user.id, body).subscribe(data =>{
      this.alertic = true;
    })
  }

  setUpPharmacy(): void{
    this.id = this.route.snapshot.params.id;
    this.pharmacyService.getPharmacy(this.id).subscribe(data =>{
        this.pharmacy = data;
    })
    this.shiftService.getAllShiftsByPharmacyId(this.id).subscribe(data =>{
      this.shifts = data;
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
    })
   
  }

  setUpAppointments(): void {
    this.id = this.route.snapshot.params.id;
    this.daService.getAllExaminationsByPharmacyId(this.id).subscribe(data =>{
      this.appointments = data;
    })
  }

  reserveMedicament(id): void{
    this.router.navigateByUrl(`homepage/new-items/medicament-reservation/${id}`);
  }

  public reserveDermatologistAppointment(id): void{
    let body= {
      reservationId: id,
      patientId: this.user.id
    }
    console.log(body);
    console.log("gde sam");
    this.daService.reserveExamination(body).subscribe(data =>{
      this.reserveDermatologist = data;
      this.setUpAppointments();
    })
  }

}
