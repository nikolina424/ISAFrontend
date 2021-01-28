import { PharmacyMedicamentService } from './../../../services/pharmacy-medicament.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-pharmacy-medicament',
  templateUrl: './update-pharmacy-medicament.component.html',
  styleUrls: ['./update-pharmacy-medicament.component.css']
})
export class UpdatePharmacyMedicamentComponent implements OnInit {


  private id : any;
  validateForm: FormGroup
  public user: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private pmService : PharmacyMedicamentService) { }

  ngOnInit(): void {
    this.setupUser();
    this.setupForm();
    this.getDetails();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  } 

  public setupForm(): void {
    this.validateForm = this.fb.group({
      quantity: [null, [Validators.required]]
    });
  }


  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.pmService.getPharmacyMedicament(this.id).subscribe(data =>{
      const formValues = {
        quantity: data.quantity
      }
      this.validateForm.setValue(formValues);
      console.log(formValues);
    })
  }

  submitForm(): void {
    console.log(this.validateForm.value);
    this.pmService.updatePharmacyMedicament(this.user.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`homepage`);
    }, error => {
      alert('Error');
    })
  }

}
