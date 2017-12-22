import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ProductTitle:string ="Products List ..."
  showImage :boolean=false;

  listFilter:string='cart';
  Products :any[]=[
    {
      ProductId:1,
      productName:"Chocobar",
       productCode:101,
       releaseDate:"12 Jan 2017",
       description:"aaaaaa",
       price:28.994567,
       ImageUrl :"~/AngularDemo/Images/mini.jpg",
      startRating:22,
     
    },
    {
      ProductId:2,
      productName:"Chocobar",
       productCode:101,
       releaseDate:"12 Jan 2017",
       description:"aaaaaa",
       price:2856.99,
      startRating:22,
      ImageUrl :"~/AngularDemo/Images/mini.jpg"
    },
    {
      ProductId:3,
      productName:"Chocobar",
       productCode:101,
       releaseDate:"12 Jan 2017",
       description:"aaaaaa",
       price:286568990.99324334433,
      startRating:22,
      ImageUrl :"~/AngularDemo/Images/mini.jpg"
    },
  ];

  toggleImages():void{
    this.showImage = !this.showImage;
  }


  constructor() { }

  ngOnInit() {
  }

}
