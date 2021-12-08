import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  getN(par:string){
    console.log(par);
    return par;
  }
  getName(){
    console.log("time's you releases the key");
  }
  getNa(){
    console.log("time's you are press the key");
  }
  getNamee(){
    console.log("you press the key");
  }
  name="Tejas"
  disabledBox=true
  enableInput(){
    this.disabledBox=false
  }
  updateName(){
    this.name='Tejas';
  }
  day=true
  one=false


  names=[
    {
      fname:"Tejas",
      age:21
    },
    {
      fname:"MK",
      age:22
    }
  ];
  date='today';

  switchValue = 2;


  textcolor="black";
  bgcolor="pink";
  stylecolor="newFont";

  dateExample=Date.now();

}
