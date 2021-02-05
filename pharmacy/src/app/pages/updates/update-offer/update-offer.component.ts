import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { OfferService } from './../../../services/offer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  public id: any;
  validateForm: FormGroup

  constructor( private fb: FormBuilder, private router: Router,private route: ActivatedRoute, private offerService: OfferService) { }

  ngOnInit(): void {
    this.setupForm();
    this.getDetails();
  }

  public setupForm(): void {
    this.validateForm = this.fb.group({
      price: [null, [Validators.required]],
      deliveryDate: [null, [Validators.required]]
    });
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.offerService.getOffer(this.id).subscribe(data =>{
      console.log(data);
      const formValues = {
        price: data.price,
        deliveryDate: data.deliveryDate
      }
      this.validateForm.setValue(formValues);
    })
  }

  submitForm(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.validateForm.value);
    let body = {
      offerId: this.id,
      price: this.validateForm.value.price,
      deliveryDate: this.validateForm.value.deliveryDate
    }
    this.offerService.changeOffer(body).subscribe(data => {
      this.router.navigateByUrl(`homepage`);
    }, error => {
      alert('Error');
    })
  }
}
