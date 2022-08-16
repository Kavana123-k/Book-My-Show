import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-gift-card',
  templateUrl: './all-gift-card.component.html',
  styleUrls: ['./all-gift-card.component.css'],
})
export class AllGiftCardComponent implements OnInit {
  allCard = [
    { image: '../assets/images/giftcard/giftcard1.jpg' },
    { image: '../assets/images/giftcard/giftcard2.jpg' },
    { image: '../assets/images/giftcard/giftcard3.jpg' },
    { image: '../assets/images/giftcard/giftcard4.jpg' },
    { image: '../assets/images/giftcard/giftcard5.jpg' },
    { image: '../assets/images/giftcard/giftcard6.jpg' },
    { image: '../assets/images/giftcard/giftcard7.jpg' },
    { image: '../assets/images/giftcard/giftcard8.jpg' },
    { image: '../assets/images/combo/combos1.png' },
    { image: '../assets/images/combo/combo2.png' },
    { image: '../assets/images/combo/combo3.png' },
    { image: '../assets/images/combo/combo4.png' },
    { image: '../assets/images/ocasion/ocassion1.png' },
    { image: '../assets/images/ocasion/ocassion2.png' },
    { image: '../assets/images/ocasion/ocasion3.png' },
    { image: '../assets/images/ocasion/ocassion4.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
