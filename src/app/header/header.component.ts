import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  recommended = [
    { image: '../assets/images/recommendedMovies/recMov1.png' },
    { image: '../assets/images/recommendedMovies/recMov2.png' },
    { image: '../assets/images/recommendedMovies/recmov3.png' },
    { image: '../assets/images/recommendedMovies/recmov4.png' },
    { image: '../assets/images/recommendedMovies/recmov5.png' },
    { image: '../assets/images/recommendedMovies/recmov6.png' },
    { image: '../assets/images/recommendedMovies/recmov7.png' },
    { image: '../assets/images/recommendedMovies/recmov8.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
