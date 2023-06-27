import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choropleth',
  templateUrl: './choropleth.component.html',
  styleUrls: ['./choropleth.component.scss']
})
export class ChoroplethComponent implements OnInit {

  public graph = {
    data: [{
      type: 'choropleth',
      locationmode: 'ISO-3',
      locations: [],
      z: []
    }
    ],
    layout:{
      geo:{
        projection: { type: 'equirectangular' }
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
