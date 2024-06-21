import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometakeComponent } from './hometake.component';

describe('HometakeComponent', () => {
  let component: HometakeComponent;
  let fixture: ComponentFixture<HometakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HometakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HometakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
