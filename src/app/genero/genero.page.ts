import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  public nombre: string = "";
  public gender: string = "";

  genero() {
    if (this.nombre != "") {
      this.http.get<any>('https://api.genderize.io/?name=' + this.nombre)
        .subscribe(res => {
          this.gender = res.gender;
        })

    }
    this.nombre = "";
  }

}
