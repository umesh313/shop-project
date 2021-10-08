import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
// show=false;
productsdata:any;
  constructor(private productServices: ProductServicesService) { }

  ngOnInit(): void {
    this.getProducts();
  }


getProducts()
{
  this.productServices.getData().subscribe(mydata=>{
    this.productsdata=mydata;
    console.log(this.productsdata)
  })
}}
