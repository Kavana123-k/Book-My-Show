import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physical-gift-card',
  templateUrl: './physical-gift-card.component.html',
  styleUrls: ['./physical-gift-card.component.css'],
})
export class PhysicalGiftCardComponent implements OnInit {
  availstore = [
    { image: '../assets/images/availbleoffer/avail1.png' },
    { image: '../assets/images/availbleoffer/avail2.png' },
    { image: '../assets/images/availbleoffer/avail3.png' },
    { image: '../assets/images/availbleoffer/avail4.png' },
    { image: '../assets/images/availbleoffer/avail5.png' },
  ];

  orderOnlin = [
    { image: '../assets/images/availbleoffer/avail6.png' },
    { image: '../assets/images/availbleoffer/avail7.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
