import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css'],
})
export class ComboComponent implements OnInit {
  combo = [
    { image: '../assets/images/combo/combos1.png' },
    { image: '../assets/images/combo/combo2.png' },
    { image: '../assets/images/combo/combo3.png' },
    { image: '../assets/images/combo/combo4.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
