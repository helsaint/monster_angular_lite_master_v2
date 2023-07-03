import { Component, OnInit } from '@angular/core';
import { ApiGeneralService } from '../../../api-general.service';

@Component({
  selector: 'app-choropleth',
  templateUrl: './choropleth.component.html',
  styleUrls: ['./choropleth.component.scss']
})
export class ChoroplethComponent implements OnInit {

  public expand_country(event: any){
    let base_url = "";
    let country_code = "";
    country_code = event['points'][0]['location'];
    base_url = "https://dashboards.aramotar.com/sofifa_api/sofifa_country_detail/";
    base_url = base_url.concat(country_code);
    console.log(country_code);
    window.open(base_url);
  }

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
