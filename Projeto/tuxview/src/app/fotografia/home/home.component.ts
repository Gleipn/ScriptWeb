import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  /* imagemHome = "https://cdn.pixabay.com/photo/2014/08/23/19/50/photography-425687_960_720.jpg"; */
  imagemHome =
    'https://cdn.pixabay.com/photo/2013/05/02/06/08/camera-108531_960_720.jpg';
  constructor() {}

  ngOnInit(): void {}
}
