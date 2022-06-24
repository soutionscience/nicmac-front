import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import  { default as Properties } from '../../../assets/data/properties.json'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  desc = Properties[0].intro
  desc2 = Properties[1].intro
  @Input() story:any

  constructor(private router: Router) {
    console.log("story ", this.story)
   }

  ngOnInit(): void {
  }
  

  open(num:number){
    let data= num
    console.log("selected ,", data)
    this.router.navigate(['/locations',{my_object: data}])

  }

}
