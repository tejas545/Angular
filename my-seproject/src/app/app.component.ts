import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-seproject';

  fname:string='';
  lname:string='';
  age:string='';
  terms:boolean=false;

  onSubmit(formValue:NgForm){
    console.log(formValue.value)
    console.log(formValue)
  }
}
