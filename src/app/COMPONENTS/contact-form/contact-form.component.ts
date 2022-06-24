import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  //contactForm: FormGroup | undefined
  contactForm  = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    comment: new FormControl('')
  })

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    
    console.log("creating form")
  //   this.contactForm  = this.fb.group({
  //     name: '',
  //     email: '',
  //     phone: ''

  //   })
  // }

  }
  submit(){
    console.log("hitting submit ",this.contactForm.value)
    this.api.postMessage(this.contactForm.value)
    .subscribe((resp)=>{
      console.log("sending message ",resp)
    })
}

  }


