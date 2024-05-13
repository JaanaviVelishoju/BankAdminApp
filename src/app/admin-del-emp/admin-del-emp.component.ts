import { Component, Inject } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-admin-del-emp',
  templateUrl: './admin-del-emp.component.html',
  styleUrls: ['./admin-del-emp.component.css']
})
export class AdminDelEmpComponent {
res: any;

constructor(private _serv:AdminServiceService,@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<AdminDelEmpComponent>){}
id:any=this.data.id;
SubmitClick(){
  
  this._serv.Delete(this.id).subscribe(data=>{this.res=data;})
  console.log(this.id)
res:'Employee Deleted..'
}

closeManually(){
  this.ref.close(this.res)
}
}
