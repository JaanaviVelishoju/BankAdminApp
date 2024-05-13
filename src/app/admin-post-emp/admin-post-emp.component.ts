import { Component } from '@angular/core';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { EmpInfo } from '../emp-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-post-emp',
  templateUrl: './admin-post-emp.component.html',
  styleUrls: ['./admin-post-emp.component.css']
})
export class AdminPostEmpComponent {
  constructor(private _serv:AdminServiceService,private route:Router){}
  public emp:EmpInfo={
    empid:0,
        ename:'',
    email:'',
    sal:0,
    deptno:0
  };
 
  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
 
  public mesg:string='';
  public AddElement(){
    this._serv.InsertEmployee(this.emp)
    .subscribe((data=>{
      alert('Data entered successfully')
      this.route.navigate(['/getemps'])
    }))
   
  }
  }
    
 
  
  

