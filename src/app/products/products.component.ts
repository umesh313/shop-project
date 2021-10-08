import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit 
{
data:any;
num=1;

  constructor() { }

  ngOnInit(): void {
    console.log("hello")
  }

  increment()
  {
    this.num++
    return this.num;
   
  }

  decrement()
  {
  this.num--;
  return this.num;
  }
}

