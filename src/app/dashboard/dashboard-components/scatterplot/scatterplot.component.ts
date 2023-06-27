import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiGeneralService } from '../../../api-general.service';

@Component({
  selector: 'app-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.scss']
})
export class ScatterplotComponent implements OnInit {

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
