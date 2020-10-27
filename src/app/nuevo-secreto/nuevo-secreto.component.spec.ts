import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoSecretoComponent } from './nuevo-secreto.component';

describe('NuevoSecretoComponent', () => {
  let component: NuevoSecretoComponent;
  let fixture: ComponentFixture<NuevoSecretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoSecretoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoSecretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
