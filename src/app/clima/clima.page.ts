import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  public temp: string = "";
  public clima: string = "";

  ngOnInit() {
    this.http.get<any>('http://api.weatherunlocked.com/api/current/18.469749967745436,%20-69.94063705245567?app_id=ba95e2ee&app_key=5258afe83d3baebd27416fe7c990998b')
      .subscribe(res => {
        this.clima = res.wx_desc;
        this.temp = res.temp_c;
      })
  }




}
