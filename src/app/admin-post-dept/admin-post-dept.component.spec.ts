import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostDeptComponent } from './admin-post-dept.component';

describe('AdminPostDeptComponent', () => {
  let component: AdminPostDeptComponent;
  let fixture: ComponentFixture<AdminPostDeptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPostDeptComponent]
    });
    fixture = TestBed.createComponent(AdminPostDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
