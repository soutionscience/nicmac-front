import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import  { default as Properties } from '../../../assets/data/properties.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  data=[Properties]
  stories:any

  showNavigationArrows = false;
  showNavigationIndicators = false;
  //images =['../../../assets/images/slider_2.jpg', '../../../assets/images/slider_3.jpg']
  images = ['../../../assets/images/'+ Properties[0].slide1, '../../../assets/images/'+ Properties[0].slide2 ]
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    console.log("Ati ",Properties['0'])
    this.stories =[{"one":Properties['0'].intro}, {"two": Properties['1'].intro}]
    console.log('kivici', this.stories)
    //console.log(`version ${VersionInfo['VERSION']}`);
  }

  ngOnInit(): void {
    // console.log("init ",typeof(this.data[0]))
    //console.log(`version ${VersionInfo['VERSION']}`);
    
  }

}
