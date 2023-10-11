import {Component, OnInit} from '@angular/core';

// ecommerce card
interface productcards {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  rprice: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class AppProductComponent implements OnInit{

  // ecommerce card
  productcards: productcards[] = [
    {
      id: 1,
      imgSrc: '/assets/images/products/s4.jpg',
      title: 'Boat Headphone',
      price: '285',
      rprice: '375',
    },
    {
      id: 2,
      imgSrc: '/assets/images/products/s5.jpg',
      title: 'MacBook Air Pro',
      price: '285',
      rprice: '375',
    },
    {
      id: 3,
      imgSrc: '/assets/images/products/s7.jpg',
      title: 'Red Valvet Dress',
      price: '285',
      rprice: '375',
    },
    {
      id: 4,
      imgSrc: '/assets/images/products/s11.jpg',
      title: 'Cute Soft Teddybear',
      price: '285',
      rprice: '375',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log('products component');
  }


}
