import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  public nombre: string = "";
  public age: number = 0;
  public estado: string = "";

  edad() {
    if (this.nombre != "") {
      this.http.get<any>('https://api.agify.io/?name=' + this.nombre)
        .subscribe(res => {
          this.age = res.age;
          this.saberEstado(res.age);
        });
    }
    this.nombre = "";
  }

  saberEstado(edad: number){
    if (edad > 0 && edad <= 26) {
      this.estado = "Joven";
    } else if (edad > 26 && edad <= 59) {
      this.estado = "Adulto";
    } else if (edad >= 60) {
      this.estado = "Ancian@";
    }
  }
}