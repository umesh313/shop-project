import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-deatils',
  templateUrl: './game-deatils.component.html',
  styleUrls: ['./game-deatils.component.css']
})
export class GameDeatilsComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute,private http:HttpClient) {

    
   }
myid:any;
  ngOnInit(): void {
    this.activatedroute.params.subscribe(params=>{
      this.myid=params["id"]
  })
    this.getGamedetails(1);
  }

  getGamedetails(id:any)
  {
this.http.get("http://localhost:3000/games/"+id).subscribe(data=>{
  console.log(data)
})
  }
}
