import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm!: FormGroup
  onImagePreview: string | ArrayBuffer;
  constructor(private formservice:FormService) { }

  ngOnInit(): void {
this.regForm=new FormGroup({
  'regname': new FormControl('',[Validators.required]),
  'regemail': new FormControl('',[Validators.required,Validators.email]),
  'image':new FormControl()

})
}
onSubmit()
{
  // console.log("hello World")
  // this.formservice.postData(this.regForm.value).subscribe(
  //   data=>console.log("success",data),
  //   err=>console.log("error",err)
  //   )
  // console.log(this.regForm.value)
}
onImagepicked(event: Event){;

  const file=(event.target as HTMLInputElement).files[0];
  this.regForm.get('image').updateValueAndValidity();
  const reader=new FileReader();
  reader.onload=()=>{
    this.onImagePreview=reader.result;

  };
  console.log(reader.readAsDataURL(file));
}

}
