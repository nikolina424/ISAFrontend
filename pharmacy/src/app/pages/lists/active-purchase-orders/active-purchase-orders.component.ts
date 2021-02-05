import { PurchaseOrderService } from './../../../services/purchase-order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-purchase-orders',
  templateUrl: './active-purchase-orders.component.html',
  styleUrls: ['./active-purchase-orders.component.css']
})
export class ActivePurchaseOrdersComponent implements OnInit {

  public pharmacyId : any;
  public purchaseOrders = [] as any;
  public orderMedicaments = [] as any;
  public naziv : any;
  @Input() actionType: boolean;

  constructor( private router: Router, private route: ActivatedRoute, private poService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.getAllPurchaseOrders();
  }

  getAllPurchaseOrders(): void{
    this.naziv = "Purchase order";
    this.poService.getAllByActiveStatus().subscribe(data => {
      data.forEach(purchaseOrder => {
        this.purchaseOrders.push(purchaseOrder);
        console.log(purchaseOrder);
        this.poService.getAllByOrderId(purchaseOrder.id).subscribe(orders =>{
          orders.forEach(order => {
            let medOrder = {
              purchaseId: purchaseOrder.id,
              medName: order.medicament.name,
              quantity: order.quantity,
            }
            this.orderMedicaments.push(medOrder);
          });
        })
      });
      console.log(this.orderMedicaments);
       
    })

    
  }

  public makeOffer(id){
    this.router.navigate([`homepage/new-items/offer/${id}`]);
  }


}
