import { logging } from 'protractor';
import { PurchaseOrderService } from './../../../services/purchase-order.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.css']
})
export class PurchaseOrdersComponent implements OnInit {

  public pharmacyId : any;
  public purchaseOrders = [] as any;
  public orderMedicaments = [] as any;
  public naziv : any;

  constructor(private route: ActivatedRoute, private poService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.getAllPurchaseOrders();
  }

  getAllPurchaseOrders(): void{
    this.naziv = "Purchase order";
    this.pharmacyId = this.route.snapshot.params.id;
    this.poService.getAllByPharmacyId(this.pharmacyId).subscribe(data => {
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

  
}
