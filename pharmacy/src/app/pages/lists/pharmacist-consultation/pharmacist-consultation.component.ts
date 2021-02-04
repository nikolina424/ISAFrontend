import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PharmacistService } from './../../../services/pharmacist.service';
import { Component, OnInit } from '@angular/core';
import { PharmacistAppointmentService } from 'src/app/services/pharmacist-appointment.service';

@Component({
  selector: 'app-pharmacist-consultation',
  templateUrl: './pharmacist-consultation.component.html',
  styleUrls: ['./pharmacist-consultation.component.css']
})
export class PharmacistConsultationComponent implements OnInit {

  private data: any;
  private pharmacyId: any;
  public pharmacists = [] as any;
  public user: any;
  public alertSucc = false;

  constructor(private paService: PharmacistAppointmentService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private pharmacistSerice: PharmacistService) { }

  ngOnInit(): void {
    this.setupData();
    this.setupUser();
    this.getAllPharmacistByPharmacyId();
  }

  private setupData(): void {
    this.data = JSON.parse(localStorage.getItem('sendData'));
  } 

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  getAllPharmacistByPharmacyId(): void{
    this.pharmacyId = this.route.snapshot.params.id;
    let body = {
      dateExamination: this.data.dateExamination,
      startExamination: this.data.startExamination,
      endExamination: this.data.endExamination,
      pharmacyId: this.pharmacyId
    }
    console.log(body)
    this.pharmacistSerice.getPharmacistByDate(body).subscribe(data => {
      this.pharmacists = data;
      console.log(this.pharmacists);
    }, error => {
      alert("Error");
    })
  }

  reserve(id){
    this.pharmacyId = this.route.snapshot.params.id;
    let body = {
      dateExamination: this.data.dateExamination,
      startExamination: this.data.startExamination,
      endExamination: this.data.endExamination,
      pharmacistId: id,
      patientId: this.user.id
    }   
    this.paService.createPharmacistExamination(body).subscribe(data =>{
      this.alertSucc = true;
    })
  }

}
