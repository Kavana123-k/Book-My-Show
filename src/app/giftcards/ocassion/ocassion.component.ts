import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocassion',
  templateUrl: './ocassion.component.html',
  styleUrls: ['./ocassion.component.css'],
})
export class OcassionComponent implements OnInit {
  ocasion = [
    { image: '../assets/images/ocasion/ocassion1.png' },
    { image: '../assets/images/ocasion/ocassion2.png' },
    { image: '../assets/images/ocasion/ocasion3.png' },
    { image: '../assets/images/ocasion/ocassion4.png' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
