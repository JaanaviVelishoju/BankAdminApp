import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetEmpComponent } from './admin-get-emp.component';

describe('AdminGetEmpComponent', () => {
  let component: AdminGetEmpComponent;
  let fixture: ComponentFixture<AdminGetEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminGetEmpComponent]
    });
    fixture = TestBed.createComponent(AdminGetEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
