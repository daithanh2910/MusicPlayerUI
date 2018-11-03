import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommnentListDetailComponent } from './commnent-list-detail.component';

describe('CommnentListDetailComponent', () => {
  let component: CommnentListDetailComponent;
  let fixture: ComponentFixture<CommnentListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommnentListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommnentListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
