import { logging } from 'protractor';
import { PromotionService } from './../../../services/promotion.service';
import { PharmacyService } from './../../../services/pharmacy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribed-pharmacies',
  templateUrl: './subscribed-pharmacies.component.html',
  styleUrls: ['./subscribed-pharmacies.component.css']
})
export class SubscribedPharmaciesComponent implements OnInit {

  public user: any;
  public pharmacies = [] as any;
  public alertCancel = false;

  constructor(private promotionService: PromotionService, private pharmacyService: PharmacyService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllPharmacies();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

 
  
  private getAllPharmacies(): void {
    this.pharmacyService.getAllBySubPatientId(this.user.id).subscribe(data => {
      this.pharmacies = data;
      console.log(data);
    }, error => {
      
    })
  }


  cancel(id): void{
    let body = {
      id: id
    }
    console.log(body);
    console.log(this.user.id);
    this.promotionService.cancelSubscription(this.user.id, body).subscribe(data => {
      this.alertCancel = true;
      this.getAllPharmacies();
    })
  }

}
