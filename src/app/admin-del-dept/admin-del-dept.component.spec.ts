import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDelDeptComponent } from './admin-del-dept.component';

describe('AdminDelDeptComponent', () => {
  let component: AdminDelDeptComponent;
  let fixture: ComponentFixture<AdminDelDeptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDelDeptComponent]
    });
    fixture = TestBed.createComponent(AdminDelDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
