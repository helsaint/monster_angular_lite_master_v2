import { Component, OnInit } from '@angular/core';
import { ApiGeneralService } from '../../../api-general.service';

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
      locations: [] as string[],
      z: [] as number[],
      text: "players",
      colorscale: 'Greens',
      autocolorscale: false,
      showscale: true,
    }
    ],
    layout:{
      geo:{
        projection: { type: 'equirectangular' }
      },
      title: {text: 'Map of player nationality'},
      responsive: true,
      margin: {
        l: 50,
        r: 20,
        t: 50,
        b: 50,
        pad: 0
      },
    }
  };

  playerData:any=null;

  constructor(private api: ApiGeneralService) { }

  ngOnInit(): void {
    this.api.getChoroplethData().subscribe((data)=>{
      this.playerData = data;
      this.graph.data[0].locations = Object.keys(this.playerData);
      this.graph.data[0].z = Object.values(this.playerData);
      //this.graph.data[0].text = Object.values(this.playerData);
    })
  }

}
