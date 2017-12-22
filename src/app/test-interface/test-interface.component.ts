import { Component, OnInit } from '@angular/core';
import {IProduct} from './products';
@Component({
  selector: 'app-test-interface',
  templateUrl: './test-interface.component.html',
  styleUrls: ['./test-interface.component.css']
})
export class TestInterfaceComponent implements OnInit {
  filterProducts: IProduct[];
  ProductTitle:string ="Products List ..."
  showImage :boolean=false;

  //Filter not working
  // _listFilter:string;
  // get listFilter():string{
  //   return this.listFilter;
  // }
  // set listFilter(value:string){
  //    this._listFilter = value;
  //    this.filterProducts  =this.listFilter ? this.performFilter(this.listFilter):this.Products;

  // }

  Products: IProduct[]=[
    {
    ProductId:1,
    productName:"aaa",
    productCode:"gDN-101",
    description:"hello world",
    price:10,
    startRating:22,
    releaseDate:"12/09/2017",
   // ImageUrl :"~/AngularDemo/Images/mini.jpg",
  },
  {
    ProductId:2,
    productName:"aaa",
    productCode:"tbx-101B",
    description:"hello world",
    price:10,
    startRating:12,
    releaseDate:"12/09/2017",
   // ImageUrl :"~/AngularDemo/Images/mini.jpg",
  },
  {
    ProductId:3,
    productName:"aaa",
    productCode:"vvd-10Q1",
    description:"hello world",
    price:10,
    startRating:32,
    releaseDate:"12/09/2017",
    //ImageUrl :"~/AngularDemo/Images/mini.jpg",
  },
  {
    ProductId:4,
    productName:"aaa",
    productCode:"101",
    description:"hello world",
    price:10,
    startRating:2,
    releaseDate:"12/09/2017",
   // ImageUrl :"~/AngularDemo/Images/mini.jpg",
  },
  {
    ProductId:5,
    productName:"aaa",
    productCode:"101",
    description:"hello world",
    price:10,
    startRating:24,
    releaseDate:"12/09/2017",
  //  ImageUrl :"~/AngularDemo/Images/mini.jpg",
  }
   
  ];

//Filter not working
//https://app.pluralsight.com/player?course=angular-2-getting-started-update&author=deborah-kurata&name=angular-2-getting-started-update-m6&clip=5&mode=live
 //performFilter(filterBy:string):IProduct[]{
  //   filterBy=filterBy.toLowerCase();
  //   //return;
   // return this.Products.filter(Products : IProduct)=> Products.productName.toLowerCase().indexOf(filterBy)!=-1;
   //}

  toggleImages():void{
    this.showImage = !this.showImage;
  }

  constructor() { 
    this.filterProducts=this.Products;
    //this.listFilter='cart';
  }

  ngOnInit() {
  }

}
