import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsboSenseComponent } from './osbo-sense.component';

describe('OsboSenseComponent', () => {
  let component: OsboSenseComponent;
  let fixture: ComponentFixture<OsboSenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsboSenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsboSenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
