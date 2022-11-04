import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Género', url: '/genero', icon: 'transgender' },
    { title: 'Edad', url: 'edad', icon: 'people-circle' },
    { title: 'Universidades', url: '/universidades', icon: 'school' },
    { title: 'Clima', url: '/clima', icon: 'cloudy-night' },
    { title: 'Acerca de', url: '/acercade', icon: 'information-circle' },
  ];
  
  constructor() {}
}
