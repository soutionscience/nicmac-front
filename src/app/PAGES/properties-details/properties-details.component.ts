import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import  { default as Properties } from '../../../assets/data/properties.json'

@Component({
  selector: 'app-properties-details',
  templateUrl: './properties-details.component.html',
  styleUrls: ['./properties-details.component.scss']
})
export class PropertiesDetailsComponent implements OnInit {
  location:any
  _id:any
  pero: any
  

  constructor(private route: ActivatedRoute) { 
    this.location = this.route.snapshot.paramMap.get('location') || 0;
    this._id = this.route.snapshot.paramMap.get('my_id') || 0;
    console.log("working ", Properties[this.location])
   this.pero = Properties[this.location]
    
  }

  ngOnInit(): void {
  }

}
