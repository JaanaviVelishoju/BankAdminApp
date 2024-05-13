import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { EmpInfo } from '../emp-info';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-get-emp',
  templateUrl: './admin-get-emp.component.html',
  styleUrls: ['./admin-get-emp.component.css']
})
export class AdminGetEmpComponent {

public employee:any;

public empid:any;
public show:boolean=false;
constructor(private _serv:AdminServiceService,private _route:ActivatedRoute){}

SubmitClick(){
  //this.id=this._route.snapshot.paramMap.get('empid');
  this._serv.GetEmployee(this.empid).subscribe(data=>{this.employee=data;})
  this.show=true
}
}
