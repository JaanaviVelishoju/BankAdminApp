import { Component, ViewChild } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { EmpInfo } from '../emp-info';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { Route } from '@angular/router';
@Component({
  selector: 'app-admin-get-emps',
  templateUrl: './admin-get-emps.component.html',
  styleUrls: ['./admin-get-emps.component.css']
})
export class AdminGetEmpsComponent {
  @ViewChild(MatPaginator) paginator:MatPaginator | undefined
  @ViewChild(MatSort) matsort:MatSort|undefined;
  result: any;
  constructor(private _serv:AdminServiceService, public dialog:MatDialog){}
  empid:any;
public employees!:EmpInfo[];
dataSource:any;
public columns=['s.no','empid','ename','email','sal','deptno','action']

ngOnInit(){
  this.getEmployees();
}

getEmployees(){
  this._serv.GetEmployees()
  .subscribe((res)=>{
    this.employees=res;
   this.dataSource=new MatTableDataSource(this.employees);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.matsort;
  })
}
filter(e:any){
  this.dataSource.filter=e.target.value;
}

deleteClick(id:any){
this._serv.Delete(id).subscribe((data)=>{
  alert('Data Deleted Successfully...')
  this.getEmployees();
})
}

}


