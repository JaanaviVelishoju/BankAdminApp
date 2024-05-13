import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPutDeptComponent } from './admin-put-dept.component';

describe('AdminPutDeptComponent', () => {
  let component: AdminPutDeptComponent;
  let fixture: ComponentFixture<AdminPutDeptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPutDeptComponent]
    });
    fixture = TestBed.createComponent(AdminPutDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
