import { PromotionService } from './../../../services/promotion.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';


@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  public pharmacyId: any;
  validateForm!: FormGroup;
  public alertSucc = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      text: [null, [Validators.required]],
      expireDate: [null, [Validators.required]]
    });
  }

  submitForm(): void{
    this.pharmacyId = this.route.snapshot.params.id;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const body = {
      description: this.validateForm.value.text,
      pharmacyId: this.pharmacyId,
      expireDate: this.validateForm.value.expireDate,
    }
    this.promotionService.createPromotion(body).subscribe(data =>{
      console.log("Kreirao");
      this.alertSucc = true;
    }, error => {
      console.log("Nisam kreirao");
    })
  }

}
