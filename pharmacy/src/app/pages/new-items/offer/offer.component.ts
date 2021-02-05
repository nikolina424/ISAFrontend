import { OfferService } from './../../../services/offer.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  validateForm!: FormGroup;
  public user: any;
  public created = false;
  public notCreated = false;

  constructor( private offerService: OfferService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setupUser();
    this.validateForm = this.fb.group({
      price: [null, [Validators.required]],
      date: [null, [Validators.required]]
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  submitForm(): void{
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const id = this.route.snapshot.params.id;
    let body = {
      purchaseOrderId: id,
      supplierId: this.user.id,
      deliveryDate: this.validateForm.value.date,
      price: this.validateForm.value.price
    }

    console.log(body);
    this.offerService.createOffer(body).subscribe(data => {
        this.created = true;
        console.log("uspeo");
    }, error => { 
      this.notCreated = true;   
      console.log("nije uspeo");
    })
  }

}
