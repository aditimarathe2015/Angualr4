import { Component, OnChanges,OnInit,Input } from '@angular/core';

@Component({
  selector: 'pm-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnChanges {
 @Input() rating:number=4;
  starWidth:number;


  ngOnChanges():void{
    this.starWidth=this.rating*86/5;
  }
 


}
