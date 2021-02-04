import { PharmacistService } from './../../../services/pharmacist.service';
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
  public pharmacists: any;

  constructor(private pharmacistService: PharmacistService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private pricelistService: PricelistService) { }

  ngOnInit(): void {
    this.setupPriceMedicament();
    this.getAllPharmacistByPharmacyId();
    this.validateForm = this.fb.group({
      price: [null, [Validators.required]],
      to:  [null, [Validators.required]],
      from:  [null, [Validators.required]],
      pricePharmacy: [null, [Validators.required]]
    });
  }

  setupPriceMedicament(): void{
    this.id = this.route.snapshot.params.id;
    this.pricelistService.getAllByPharmacyId(this.id).subscribe(data => {
      this.priceMedicaments = data;
    })
  }

  getAllPharmacistByPharmacyId(): void{
    this.id = this.route.snapshot.params.id;
    this.pharmacistService.getAllPharmacistByPharmacyId(this.id).subscribe(data => {
      this.pharmacists = data;
    }, error => {
      alert("Error");
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
            
        })
      });
      this.pharmacists.forEach(element => {
        let b = {
          price: element.price,
          pricelistId: this.pricelistCreated.id,
          pharmacistId: element.id
        }
        this.pharmacistService.changePricelist(b).subscribe(data => {
          this.created = true;
        })
      });
      
    })
    
  }
  

}
