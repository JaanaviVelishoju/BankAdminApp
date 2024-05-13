import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AdminGetEmpsComponent } from './admin-get-emps/admin-get-emps.component';
import { AdminGetEmpComponent } from './admin-get-emp/admin-get-emp.component';
import { AdminGetDeptsComponent } from './admin-get-depts/admin-get-depts.component';
import { AdminGetDeptComponent } from './admin-get-dept/admin-get-dept.component';
import { AdminPostEmpComponent } from './admin-post-emp/admin-post-emp.component';
import { AdminPostDeptComponent } from './admin-post-dept/admin-post-dept.component';
import { AdminPutEmpComponent } from './admin-put-emp/admin-put-emp.component';
import { AdminPutDeptComponent } from './admin-put-dept/admin-put-dept.component';
import { AdminDelEmpComponent } from './admin-del-emp/admin-del-emp.component';
import { AdminDelDeptComponent } from './admin-del-dept/admin-del-dept.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeAdminComponent,
    AdminIndexComponent,
    AdminGetEmpsComponent,
    AdminGetEmpComponent,
    AdminGetDeptsComponent,
    AdminGetDeptComponent,
    AdminPostEmpComponent,
    AdminPostDeptComponent,
    AdminPutEmpComponent,
    AdminPutDeptComponent,
    AdminDelEmpComponent,
    AdminDelDeptComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,MatTreeModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AdminIndexComponent]
})
export class AppModule { }
