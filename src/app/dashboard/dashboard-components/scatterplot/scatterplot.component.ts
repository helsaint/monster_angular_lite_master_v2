import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiGeneralService } from '../../../api-general.service';

@Component({
  selector: 'app-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.scss']
})
export class ScatterplotComponent implements OnInit {

  /** 
   * expand_player opens a new indow (window.open()) to the Django application
   * event['points] is data automatically provided through plotlyClick() in the
   * html code.
  */
  public expand_player(event:any){
    let base_url = "";
    let player_name = "";
    console.log(event['points'][0]['text']);
    player_name = event['points'][0]['text'];
    base_url = "http://127.0.0.1:8000/sofifa_general_api/sofifa_test/";
    base_url = base_url.concat(player_name);
    window.open(base_url);
  }

  public graph = {
    data: [
      {
        x: [],
        y: [],
        text: [],
        mode: 'markers',
        type:'scatter'
      }
    ],
    layout: {title: {text: 'Scatter Plot of Wages against value'},
      xaxis: {title: {text: "Weekly Wages"}},
      yaxis: {title: {text: "Sofifa Market Value"}},
      responsive: true,
      margin: {
        l: 50,
        r: 20,
        t: 50,
        b: 50,
        pad: 0
      },
    },
  };

  playerData:any=null;

  constructor(private api: ApiGeneralService) { }

  ngOnInit(): void {

    this.api.getBubblePlotEarnings().subscribe((data) =>{
      this.playerData = data;
      this.graph.data[0].x = this.playerData['wage_eur'];
      this.graph.data[0].y = this.playerData['value_eur'];
      this.graph.data[0].text = this.playerData['short_name'];
    })

    
  }

}
