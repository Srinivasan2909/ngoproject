import { Router } from '@angular/router';
import { HttpService } from './../services/http.service';
import { Ngo } from './../shared/ngo.model';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  exist = true;
  ngo = new Ngo();
  constructor(private service: HttpService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    this.ngo.Ngo_Id = form.value["ngoid"];
    this.ngo.Ngo_Name = form.value["fullname"];
    this.ngo.Username = form.value["username"];
    this.ngo.Password = form.value["password"];
    this.ngo.Email_id = form.value["email"];
    this.ngo.Mobile_number = form.value["phonenumber"];
    this.ngo.Ngo_Certificate_Photo = form.value["photo"];
    this.ngo.Confirm_Password=form.value["confirm_password"];
    this.ngo.Ngo_Location=form.value["ngo_location"];
    this.service.createNgo(this.ngo).subscribe(
      (data) => {
        if(data == "exist"){
          this.exist = true;
        }
        else{
          this.exist = false;
          this.router.navigate(['/login'], {queryParams: {newsignup: "yes"}});
        }
      }
    );
  }
}
