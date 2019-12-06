import { Request } from './../shared/request.model';
import { Totaldonation } from './../shared/totaldonation.model';
import { StoreddataService } from './../services/storeddata.service';
import { Router } from '@angular/router';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  req: Request[] = [];
  td: Totaldonation[] = [];
  constructor(private service:HttpService,
    private Router:Router,
    private store:StoreddataService) { }


  ngOnInit() {
      this.service.getRequestsbyID(this.store.ngo).subscribe(
        (data:Request[]) => {
          this.req = data;
        }
      );
     this.req.forEach(
       (ele) => {
        this.service.getDonations(ele).subscribe(
          (data:string) => {
              //this.td.push(data);
              console.log(data);
          }
        );
       }
     );
  }
}
