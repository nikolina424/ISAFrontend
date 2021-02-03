import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from './../../../services/complaint.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  public pharmacyComplaints = [] as any;
  public dermatologistComplaints = [] as any;
  public pharmacistComplaints = [] as any;
  public pharmacyId: any;

  constructor(private router: Router, private route: ActivatedRoute, private complaintService: ComplaintService) { }



  ngOnInit(): void {
    this.setupPharmacyComplaints();
    this.setupDermatologistsComplaints();
    this.setupPharmacistsComplaints();
    console.log("Ne znam sta mi je ??");
  }

  setupPharmacyComplaints(): void{
    this.pharmacyId = this.route.snapshot.params.id;
    this.complaintService.getAllComplaintsByPharmacyId(this.pharmacyId).subscribe(data =>{
      this.pharmacyComplaints = data;
      console.log(data);
    })
  }

  setupPharmacistsComplaints(): void{
    this.pharmacyId = this.route.snapshot.params.id;
    this.complaintService.getAllComplaintsOnDermatologistsByPharmacyId(this.pharmacyId).subscribe(data =>{
      this.dermatologistComplaints = data;
      console.log(data);
    })
  }

  setupDermatologistsComplaints(): void{
    this.pharmacyId = this.route.snapshot.params.id;
    this.complaintService.getAllComplaintsOnPharmacistsByPharmacyId(this.pharmacyId).subscribe(data =>{
      this.pharmacistComplaints = data;
      console.log(data);
    })
  }

  answer(complaintId, patientId): void {
    localStorage.setItem('patientId', JSON.stringify(patientId));
    this.router.navigateByUrl(`homepage/new-items/answer/${complaintId}`);
  }

}
