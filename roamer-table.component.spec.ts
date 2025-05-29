import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoamerTableComponent } from './roamer-table.component';

describe('RoamerTableComponent', () => {
  let component: RoamerTableComponent;
  let fixture: ComponentFixture<RoamerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoamerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoamerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
