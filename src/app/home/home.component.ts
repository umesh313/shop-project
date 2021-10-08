
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 mydata:any;
 
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getData()
  }

  getData()
{
  this.http.get("http://localhost:3000/games").subscribe((data)=>{
    console.log(data)
    this.mydata=data;
  })
}
}