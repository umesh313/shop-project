import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formservice:FormService) { }

  ngOnInit(): void {
  }

  formSubmit(data: NgForm)
  {
    
    this.formservice.postData(data.value).subscribe(data=>{console.log(data)},err=>(console.log(err)))
    // console.log(data.value)
    alert("form submitted")
    // console.log(data.value.fname)
    // console.log(data.value.password)
  }
}
