import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetEmpsComponent } from './admin-get-emps.component';

describe('AdminGetEmpsComponent', () => {
  let component: AdminGetEmpsComponent;
  let fixture: ComponentFixture<AdminGetEmpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminGetEmpsComponent]
    });
    fixture = TestBed.createComponent(AdminGetEmpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
