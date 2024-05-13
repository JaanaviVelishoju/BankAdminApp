import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPutEmpComponent } from './admin-put-emp.component';

describe('AdminPutEmpComponent', () => {
  let component: AdminPutEmpComponent;
  let fixture: ComponentFixture<AdminPutEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPutEmpComponent]
    });
    fixture = TestBed.createComponent(AdminPutEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
