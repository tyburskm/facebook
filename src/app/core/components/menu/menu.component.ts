import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy, OnChanges {

  constructor() {
    console.log("constr");

   }

  ngOnInit() {
    console.log("init");
  }
  ngOnChanges(){
    console.log("change");

  }
  ngOnDestroy(){
    console.log("destroy");

  }

}
