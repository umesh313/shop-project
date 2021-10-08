import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Products } from '../Models/products.model';


@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
// products: Products[]=[];
  constructor(private http:HttpClient) { }

getData(){


  return this.http.get<Products>("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f")
}



}
