import { PatientService } from 'src/app/services/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.css']
})
export class AllergyComponent implements OnInit {

  public medicaments = [];
  public user: any;


  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAvailableMeds();
  }
  

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private getAvailableMeds(): void {
    console.log(this.user.id);
    const body = {
      id: this.user.id
    }
    console.log(body);
    this.patientService.getAvailableMeds(body.id).subscribe(data => {
      this.medicaments = data;
    }, error => {
      
    })
  }

  public add(id): void{
    console.log("Ulazim u add");
    const body = {
      id: id
    }
    this.patientService.addNewAlergy(this.user.id, body).subscribe(data => {
      location.reload();
      console.log("Dodao sammm");
    })
  }

}
