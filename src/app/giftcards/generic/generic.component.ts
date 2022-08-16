import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css'],
})
export class GenericComponent implements OnInit {
  generic = [
    { image: '../assets/images/giftcard/giftcard1.jpg' },
    { image: '../assets/images/giftcard/giftcard2.jpg' },
    { image: '../assets/images/giftcard/giftcard3.jpg' },
    { image: '../assets/images/giftcard/giftcard4.jpg' },
    { image: '../assets/images/giftcard/giftcard5.jpg' },
    { image: '../assets/images/giftcard/giftcard6.jpg' },
    { image: '../assets/images/giftcard/giftcard7.jpg' },
    { image: '../assets/images/giftcard/giftcard8.jpg' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
