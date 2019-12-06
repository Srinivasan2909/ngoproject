import { StoreddataService } from './../services/storeddata.service';
import { Router } from '@angular/router';
import { HttpService } from './../services/http.service';
import { Request } from './../shared/request.model';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.css']
})
export class AddrequestComponent implements OnInit {

  req = new Request();
  category: any;

  constructor(private service: HttpService,
    private router: Router,
    private store:StoreddataService) { }
    selected: String="";

  ngOnInit() {
  }

  selecthandler(event: any) {
    //update the ui
    this.selected = event.target.value;
    console.log(this.selected);
    
  }

  onSubmit(form: NgForm)
  {
      console.log(this.selected);
      this.req.Request_Title = form.value["title"];
      this.req.Ngo_Name=this.store.ngo.Ngo_Name;
      this.req.Ngo_Id = this.store.ngo.Id;
      console.log(this.req.Ngo_Id);
      this.req.category= this.selected;
      this.req.Number_of_items_Required= form.value["numberofitems"];
      this.service.createRequests(this.req).subscribe(
      (data) => {
        
          alert("Request Submitted successfully")
          
          this.router.navigate(['/home']);
        
      }
      );
  }
}
