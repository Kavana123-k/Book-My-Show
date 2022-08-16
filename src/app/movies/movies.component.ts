import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  // myusername = '';
  movieList = [
    { image: '../assets/images/movieslider/movieslide1.png' },
    { image: '../assets/images/movieslider/movieslide2.png' },
    { image: '../assets/images/movieslider/movieslide3.png' },
    { image: '../assets/images/movieslider/movieslide4.png' },
    { image: '../assets/images/movieslider/movieslide5.png' },
  ];

  constructor() {
    // this.myusername = (<HTMLInputElement>document.getElementById('name')).value;
  }

  ngOnInit(): void {}
}
