import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImagenComponent } from './update-imagen.component';

describe('UpdateImagenComponent', () => {
  let component: UpdateImagenComponent;
  let fixture: ComponentFixture<UpdateImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
