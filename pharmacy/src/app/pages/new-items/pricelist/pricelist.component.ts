import { logging } from 'protractor';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PricelistService } from 'src/app/services/pricelist.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';


@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css']
})
export class PricelistComponent implements OnInit {

  public id: any;
  public priceMedicaments = [] as any;
  validateForm!: FormGroup;
  public pricelistCreated: any;
  public created = false;

  constructor( private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private pricelistService: PricelistService) { }

  ngOnInit(): void {
    this.setupPriceMedicament();
    this.validateForm = this.fb.group({
      price: [null, [Validators.required]],
      to:  [null, [Validators.required]],
      from:  [null, [Validators.required]]
    });
  }

  setupPriceMedicament(): void{
    this.id = this.route.snapshot.params.id;
    this.pricelistService.getAllByPharmacyId(this.id).subscribe(data => {
      this.priceMedicaments = data;
    })
  }

  submitForm(): void{
    this.id = this.route.snapshot.params.id;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let body = {
      fromDate: this.validateForm.value.from,
      toDate: this.validateForm.value.to,
      pharmacyId: this.id
    }
    this.pricelistService.createPricelist(body).subscribe(data =>{
      this.pricelistCreated = data;
      console.log(data);
      this.priceMedicaments.forEach(element => {
        let b = {
          price: element.price,
          pharmacyMedicamentId: element.id,
          pricelistId: this.pricelistCreated.id
        }
        console.log(b)
        this.pricelistService.createPriceMedicament(b).subscribe(data =>{
            this.created = true;
        })
      });
    })
    
  }
  

}
