import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myReactiveForm:FormGroup | any;

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm=new FormGroup({
      'fname':new FormControl('First Name'),
      'lname':new FormControl('Last Name'),
      'email':new FormControl(null,[Validators.email,Validators.required])
    });
  }
  onSubmit(){
    console.log(this.myReactiveForm);
  }

}
