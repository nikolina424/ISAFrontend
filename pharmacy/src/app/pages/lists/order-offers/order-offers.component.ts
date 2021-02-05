import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from './../../../services/offer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-offers',
  templateUrl: './order-offers.component.html',
  styleUrls: ['./order-offers.component.css']
})
export class OrderOffersComponent implements OnInit {

  public offers = [] as any;
  public id : any;

  constructor(private router: Router,  private route: ActivatedRoute, private offerService: OfferService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  public getOffers(): void {
    this.id = this.route.snapshot.params.id;
    this.offerService.getAllOffersByPurchaseOrderId(this.id).subscribe(data => {
        this.offers = data;
        console.log(data);
    })
  }

}
