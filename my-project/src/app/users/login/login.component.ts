import { Component, OnInit } from '@angular/core';
import { NeedDataService } from 'src/app/need-data.service';

@Component({
  selector: 'app-login',
  template: `<form>
  <div class="eight">
  <h1> Employee Interests survey form</h1>
  <label for="fname">Enter your name: </label>


<input type="text" id="fname" name="fname">
<br><br>


<label for="dept">Enter your department: </label>
<input type="text" id="dept" name="dept">
<br> <br>
<label for="textare">Tell us a little about yourself: </label>
<textarea id="textare" name="textare" rows="5" cols="30"></textarea>
<br><br>

<div>Do you exercise at home?
<input type="radio" id="rad" name="rad" value="rad">
<label for="rad">Yes</label>
<input type="radio" id="rad" name="rad" value="rad">
<label for="rad">No</label>
</div>

<p>How do you like to read about your favorite topics?</p>

<div>
<input type="checkbox" id="check" name="check" value="check">
<label for="check">Books  </label>

<input type="checkbox" id="check" name="check" value="check">
<label for="check">Online resources  </label>

<input type="checkbox" id="check" name="check" value="check">
<label for="check">Phone apps  </label>

<input type="checkbox" id="check" name="check" value="check">
<label for="check">Magazeins  </label>

</div><br><br>

<label for="movie">What genre of movies do yo like? </label>
<select name="movies" id="movies">
    <option value="Comedy">Comedy</option>
    <option value="Action">Action</option>
    <option value="Horror">Horror</option>
</select><br><br>

<input type="submit" value="submit">

  </div>
  </form>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(service:NeedDataService) {
    // this.product=service.products;
   }

  ngOnInit(): void {
  }
  product : any;

}
