import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetDeptComponent } from './admin-get-dept.component';

describe('AdminGetDeptComponent', () => {
  let component: AdminGetDeptComponent;
  let fixture: ComponentFixture<AdminGetDeptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminGetDeptComponent]
    });
    fixture = TestBed.createComponent(AdminGetDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
