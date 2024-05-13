import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminGetEmpComponent } from './admin-get-emp/admin-get-emp.component';
import { AdminGetEmpsComponent } from './admin-get-emps/admin-get-emps.component';
import { AdminGetDeptComponent } from './admin-get-dept/admin-get-dept.component';
import { AdminGetDeptsComponent } from './admin-get-depts/admin-get-depts.component';
import { AdminPostEmpComponent } from './admin-post-emp/admin-post-emp.component';
import { AdminPostDeptComponent } from './admin-post-dept/admin-post-dept.component';
import { AdminPutEmpComponent } from './admin-put-emp/admin-put-emp.component';
import { AdminPutDeptComponent } from './admin-put-dept/admin-put-dept.component';
import { AdminDelEmpComponent } from './admin-del-emp/admin-del-emp.component';
import { AdminDelDeptComponent } from './admin-del-dept/admin-del-dept.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeAdminComponent},
  {path:'getemp',component:AdminGetEmpComponent},
  {path:'getemps',component:AdminGetEmpsComponent},
  {path:'getdept',component:AdminGetDeptComponent},
  {path:'getdepts',component:AdminGetDeptsComponent},
  {path:'saveemp',component:AdminPostEmpComponent},
  {path:'savedept',component:AdminPostDeptComponent},
  {path:'updateemp/:id',component:AdminPutEmpComponent},
  {path:'updatedept',component:AdminPutDeptComponent},
  {path:'deleteemp',component:AdminDelEmpComponent},
  {path:'deletedept',component:AdminDelDeptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
