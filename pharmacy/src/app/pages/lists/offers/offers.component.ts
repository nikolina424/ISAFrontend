import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from './../../../services/offer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  public offers = [] as any;
  public id : any;

  constructor(private router: Router,  private route: ActivatedRoute, private offerService: OfferService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  public getOffers(): void {
    this.id = this.route.snapshot.params.id;
    this.offerService.getAllOffersBySupplierId(this.id).subscribe(data => {
        this.offers = data;
        console.log(data);
    })
  }

  updateOffer(id): void{
    this.router.navigate([`homepage/updates/update-offer/${id}`]);
  }
}
