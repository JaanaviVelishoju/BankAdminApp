import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmpInfo } from '../emp-info';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-admin-put-emp',
  templateUrl: './admin-put-emp.component.html',
  styleUrls: ['./admin-put-emp.component.css']
})
export class AdminPutEmpComponent {
dataid: any;
constructor(private _serv:AdminServiceService,private activaterouter:ActivatedRoute,private route:Router){}
public emp:EmpInfo={} as EmpInfo;

ngOnInit(){
  this.activaterouter.paramMap.subscribe((param:Params)=>{
    this.dataid=param['get']('id');
    //console.log(this.dataid)
  })

  this._serv.GetEmployee(this.dataid).subscribe((data)=>{
    this.emp=data;
    console.log(this.emp)
  })

}

updatedata(){
  this._serv.UpdateEmployee(this.emp,this.emp.empid)
  .subscribe((res)=>alert('Employee data updated successfully..'))
this.route.navigate(['/getemps'])
  
}

}
