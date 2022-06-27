import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-display',
  templateUrl: './property-display.component.html',
  styleUrls: ['./property-display.component.scss']
})
export class PropertyDisplayComponent implements OnInit {
  @Input()prop: any
  @Input()_id: any
  data:any
  location: any

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log("what does porp have ", this.prop)
    this.data = this.prop
    this.location = this._id
  }

  open(i: number){
    this.router.navigate(['/details',{ "my_id": i, "location": this.location}])

  }

}
