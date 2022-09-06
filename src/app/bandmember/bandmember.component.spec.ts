import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandmemberComponent } from './bandmember.component';

describe('BandmemberComponent', () => {
  let component: BandmemberComponent;
  let fixture: ComponentFixture<BandmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
