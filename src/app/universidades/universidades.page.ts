import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  public pais: string = "";
  public unis = [];

  buscar() {
    if (this.pais != "") {
      this.http.get<any>('http://universities.hipolabs.com/search?country=' + this.pais)
        .subscribe(res => {
          this.unis = res;
        })

    }else if(this.pais == ""){
      this.unis = [];
    }
    this.pais = "";
  }

}
