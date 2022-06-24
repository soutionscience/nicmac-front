import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import  { default as Properties } from '../../../assets/data/properties.json'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  Obj:any
  data:any
  banner:any
  points: any

  constructor(private route:ActivatedRoute, private router: Router) { 
    this.Obj = this.route.snapshot.paramMap.get('my_object') || 0
    this.data = Properties[this.Obj]
    this.banner = "../../../assets/images/" + this.data.banner_image;
    this.points = this.data.points

  }

  ngOnInit(): void {

  }
  open(_id: number){
    console.log( "location ", this.Obj)
    let obj ={"location": this.Obj, "my_id": _id}
    this.router.navigate(['/details',{ "my_id": _id, "location": this.Obj}])

  }

}
