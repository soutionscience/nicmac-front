import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  @Input() land: any
  @Input() parent: any
  shamba:any
  circle_1:any
  circle_2:any
  circle_3:any
  circle_4:any


  constructor() {
    //console.log("pero", this.parent)
   }

  ngOnInit(): void {
    console.log("pero", this.parent, "with land", this.land)
    this.shamba = this.parent.properties[this.land]
    this.circle_1 = this.shamba.circular_images[0]
    this.circle_2 = this.shamba.circular_images[1]
    this.circle_3 = this.shamba.circular_images[2]
    this.circle_4 = this.shamba.circular_images[3]
    console.log("circle ", this.circle_3)

  }

}
