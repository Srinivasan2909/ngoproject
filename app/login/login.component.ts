import { StoreddataService } from './../services/storeddata.service';
import { NavService } from './../services/nav.service';
import { Route, Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { Ngo } from './../shared/ngo.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  newsignup: boolean = false;
  ngo = new Ngo();
  constructor(private service: HttpService,
              private route: ActivatedRoute,
              private router: Router,
              private nav: NavService,
              private store:StoreddataService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (data) => {
        if(data["newsignup"] == "yes"){
          this.newsignup = true
        }
      }
    );
  }

  onSubmit(form: NgForm){
    this.ngo.Username = form.value["username"];
    this.ngo.Password = form.value["password"];
    this.service.loginNgo(this.ngo).subscribe(
      (data:Ngo) => {
        console.log(data);
        if(data!=null){
          this.store.ngo.Id=data.Id;
          console.log(this.store.ngo);
          this.store.ngo.Ngo_Name=data.Ngo_Name;
          this.nav.name = data.Ngo_Name.toString();
          this.newsignup = false;
          this.nav.logged = true;
          this.router.navigate(['/home']);
        }
      }
    );
  }
}